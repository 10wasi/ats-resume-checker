import OpenAI from "openai";
import { buildAtsUserMessage } from "./prompt";
import { parseAiQualitativeJson } from "./parse-analysis";
import { extractResumeSignals } from "./extract-resume-signals";
import { computeDeterministicScore } from "./score-engine";
import { mergeResumeAnalysis } from "./merge-resume-analysis";

import type { AtsAnalysisResult } from "./types";

const GROQ_BASE_URL = "https://api.groq.com/openai/v1";
const GROQ_MODEL = "llama-3.3-70b-versatile";
const OPENAI_MODEL = "gpt-4o-mini";

const MAX_RESUME_CHARS = 24_000;
const MAX_JD_CHARS = 12_000;

export type AnalyzeResumeOutcome =
  | { ok: true; data: AtsAnalysisResult }
  | { ok: false; error: string; status?: number };

export async function analyzeResumeWithOpenAI(
  resumeText: string,
  jobDescription?: string
): Promise<AnalyzeResumeOutcome> {
  const groqKey = process.env.GROQ_API_KEY?.trim();
  const openaiKey = process.env.OPENAI_API_KEY?.trim();

  if (!groqKey && !openaiKey) {
    return {
      ok: false,
      error: "No API key configured on the server.",
      status: 500,
    };
  }

  const text = resumeText.trim();
  if (!text) {
    return { ok: false, error: "Resume text is empty.", status: 400 };
  }

  const trimmedResume = text.slice(0, MAX_RESUME_CHARS);
  const trimmedJd = (jobDescription ?? "").trim().slice(0, MAX_JD_CHARS);
  const hasJd = trimmedJd.length > 0;

  /** Deterministic signals + score — identical inputs → identical points. */
  const signals = extractResumeSignals(trimmedResume, hasJd ? trimmedJd : undefined);
  const engine = computeDeterministicScore(
    signals,
    hasJd ? trimmedJd : undefined
  );

  const useGroq = Boolean(groqKey);
  const apiKey = groqKey ?? openaiKey!;
  const model = useGroq ? GROQ_MODEL : OPENAI_MODEL;

  const client = new OpenAI({
    apiKey,
    ...(useGroq ? { baseURL: GROQ_BASE_URL } : {}),
  });

  let content: string;
  try {
    const completion = await client.chat.completions.create({
      model,
      response_format: { type: "json_object" },
      temperature: 0.2,
      max_tokens: 3072,
      messages: [
        {
          role: "system",
          content:
            "You are an expert resume editor. Output only valid JSON with the exact keys the user requests. Never include numeric scores.",
        },
        {
          role: "user",
          content: buildAtsUserMessage(trimmedResume, trimmedJd),
        },
      ],
    });

    const raw = completion.choices[0]?.message?.content;
    if (!raw) {
      return { ok: false, error: "No content returned from the model.", status: 502 };
    }
    content = raw;
  } catch (e) {
    if (process.env.NODE_ENV !== "production") {
      console.error("Resume analyze LLM error:", e);
    } else {
      const brief =
        e instanceof Error
          ? e.message.slice(0, 160)
          : typeof e === "object" &&
              e !== null &&
              "status" in e &&
              typeof (e as { status: unknown }).status === "number"
            ? `status ${(e as { status: number }).status}`
            : "unknown";
      console.error("[resume-llm]", brief);
    }
    let msg = "Upstream LLM request failed.";
    if (e && typeof e === "object" && "status" in e) {
      const st = (e as { status?: number }).status;
      if (st === 429) {
        msg = "Rate limit reached — try again shortly.";
      } else if (st === 401) {
        msg = "API authentication failed.";
      }
    }
    return { ok: false, error: msg, status: 502 };
  }

  const parsed = parseAiQualitativeJson(content);
  if (!parsed.ok) {
    return { ok: false, error: parsed.error, status: 502 };
  }

  const merged = mergeResumeAnalysis(
    engine,
    signals,
    parsed.data,
    hasJd
  );

  return { ok: true, data: merged };
}
