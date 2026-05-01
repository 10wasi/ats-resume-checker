import { NextRequest, NextResponse } from "next/server";
import { analyzeResumeWithOpenAI } from "@/lib/ats/analyze-with-openai";
import { extractResumeSignals } from "@/lib/ats/extract-resume-signals";
import { computeDeterministicScore } from "@/lib/ats/score-engine";
import {
  mergeResumeAnalysis,
  buildOfflineQualitativeFallback,
} from "@/lib/ats/merge-resume-analysis";
import { sanitizeMultilineInput } from "@/lib/sanitize";
import { applyAnonCookie, resolveAnonId } from "@/lib/monetization/resolve-anon";
import { applyReportTier } from "@/lib/monetization/analysis-tier";
import { incrementAnalyzeSuccess } from "@/lib/monetization/usage-gate";

export const runtime = "nodejs";
export const dynamic = "force-dynamic";
export const maxDuration = 120;

const MAX_RESUME_CHARS = 24_000;
const MAX_JD_CHARS = 12_000;

function hasResumeLlmApiKey(): boolean {
  const g = process.env.GROQ_API_KEY?.trim();
  const o = process.env.OPENAI_API_KEY?.trim();
  return Boolean(g || o);
}

type Body = {
  text?: string;
  jobDescription?: string;
};

export async function POST(req: NextRequest) {
  const { anonId, isNew } = resolveAnonId(req);

  const respond = (body: object, status = 200) => {
    const res = NextResponse.json(body, { status });
    applyAnonCookie(res, anonId, isNew);
    return res;
  };

  let body: Body;
  try {
    body = (await req.json()) as Body;
  } catch {
    return respond(
      { error: "Invalid request. Refresh the page and try again." },
      400
    );
  }

  const text = sanitizeMultilineInput(
    typeof body.text === "string" ? body.text : "",
    MAX_RESUME_CHARS
  );

  const jdRaw =
    typeof body.jobDescription === "string" ? body.jobDescription : "";
  const jobDescription = jdRaw.trim()
    ? sanitizeMultilineInput(jdRaw, MAX_JD_CHARS)
    : undefined;

  if (!text) {
    return respond(
      {
        error:
          "Upload and extract your resume first, then run the score.",
      },
      400
    );
  }

  const hasJd = Boolean(jobDescription?.length);
  const llmConfigured = hasResumeLlmApiKey();
  const outcome = llmConfigured
    ? await analyzeResumeWithOpenAI(text, jobDescription)
    : ({ ok: false as const, error: "llm_not_configured" });

  if (outcome.ok) {
    const shaped = applyReportTier(outcome.data);
    incrementAnalyzeSuccess(anonId, undefined);
    return respond({
      analysis: shaped,
      scoreEngine: {
        score: shaped.ats_score,
        breakdown: shaped.score_breakdown,
        suggestions: shaped.suggestions,
      },
      demoMode: false,
    });
  }

  if (process.env.NODE_ENV !== "production") {
    const reason = llmConfigured
      ? outcome.error?.slice(0, 200) ?? "(unknown)"
      : "missing GROQ_API_KEY and OPENAI_API_KEY";
    console.warn(
      "[analyze-resume] LLM path skipped or failed; using rules + offline qualitative:",
      reason
    );
  }

  const signals = extractResumeSignals(
    text,
    hasJd ? jobDescription : undefined
  );
  const engine = computeDeterministicScore(
    signals,
    hasJd ? jobDescription : undefined
  );
  const offline = buildOfflineQualitativeFallback(signals);
  const analysis = mergeResumeAnalysis(
    engine,
    signals,
    offline,
    hasJd
  );
  const shaped = applyReportTier(analysis);

  incrementAnalyzeSuccess(anonId, undefined);
  return respond({
    analysis: shaped,
    scoreEngine: {
      score: shaped.ats_score,
      breakdown: shaped.score_breakdown,
      suggestions: shaped.suggestions,
    },
    demoMode: true,
  });
}
