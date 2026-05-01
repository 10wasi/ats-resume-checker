import type { AtsAnalysisResult } from "./types";
import type { ResumeSignals } from "./extract-resume-signals";
import type { EngineScoreResult } from "./score-engine";
import {
  computeDeterministicJobMatch,
  deriveKeywordCoverageScore,
  deriveReadabilityScore,
} from "./score-engine";
import type { AiQualitativePayload } from "./parse-analysis";

const FORMAT_FLAG_MESSAGES: Record<string, string> = {
  resume_text_very_short:
    "Resume body is short — recruiters may assume limited impact; add measurable bullets.",
  resume_text_very_long:
    "Resume is very long — tighten to the most recent 10–15 years and strongest wins.",
  very_long_lines:
    "Some lines run very long — break dense paragraphs into scannable bullets.",
  few_or_no_bullet_markers:
    "Few bullet markers detected — ATS and recruiters prefer clear bullet lists for impact.",
  limited_bullet_points:
    "Limited bullet points under experience — aim for 4–6 per recent role.",
  no_summary_section:
    "No summary/profile block — a tight 2-line opener helps keyword and human skims.",
};

/** When the LLM is unavailable, still return coach-style text grounded in signals. */
export function buildOfflineQualitativeFallback(
  signals: ResumeSignals
): AiQualitativePayload {
  const missing = signals.jdKeywordsMissing.slice(0, 8);
  const formatting: string[] = [];
  for (const flag of signals.formattingRiskFlags) {
    const msg = FORMAT_FLAG_MESSAGES[flag];
    if (msg) formatting.push(msg);
  }

  return {
    missing_keywords: missing,
    formatting_issues: formatting.slice(0, 8),
    grammar_issues: [],
    section_feedback: {
      summary: signals.summaryPresent
        ? "Tighten your summary with one headline win (metric or scale) that mirrors the role."
        : "Add a two-line summary: title, years of experience, and the single biggest outcome you deliver.",
      experience:
        signals.bulletCount >= 6
          ? "Solid bullet count — push metrics on every bullet where you can honestly quantify."
          : "Add more outcome bullets (4–6 per recent job): verb + scope + measurable result.",
      skills: signals.skillsSectionPresent
        ? "Reorder skills so the top line matches the posting’s must-have tools."
        : "Add a Skills section grouped by category; mirror the job’s language verbatim where true.",
    },
    improved_bullets: [
      "Tip: paste your best bullet here and add a number — time saved, dollars, % improvement, or scale (users/requests).",
    ],
  };
}

function dedupeStrings(items: string[], max: number): string[] {
  const seen = new Set<string>();
  const out: string[] = [];
  for (const raw of items) {
    const s = raw.trim();
    if (!s || seen.has(s.toLowerCase())) continue;
    seen.add(s.toLowerCase());
    out.push(s);
    if (out.length >= max) break;
  }
  return out;
}

export function mergeResumeAnalysis(
  engine: EngineScoreResult,
  signals: ResumeSignals,
  ai: AiQualitativePayload,
  hasJobDescription: boolean
): AtsAnalysisResult {
  const ruleMissing = signals.jdKeywordsMissing.slice(0, 10);
  const mergedMissing = dedupeStrings(
    [...ruleMissing, ...ai.missing_keywords],
    15
  );

  const ruleFormatting: string[] = [];
  for (const flag of signals.formattingRiskFlags) {
    const msg = FORMAT_FLAG_MESSAGES[flag];
    if (msg) ruleFormatting.push(msg);
  }
  const formatting_issues = dedupeStrings(
    [...ruleFormatting, ...ai.formatting_issues],
    14
  );

  const grammar_issues = dedupeStrings([...ai.grammar_issues], 12);

  const fromAiSuggestions: string[] = [];
  for (const g of ai.grammar_issues.slice(0, 2)) {
    if (g) fromAiSuggestions.push(`Grammar / wording: ${g}`);
  }
  for (const b of ai.improved_bullets.slice(0, 3)) {
    if (b) fromAiSuggestions.push(`Stronger bullet idea: ${b}`);
  }

  const suggestions = dedupeStrings(
    [...engine.suggestions, ...fromAiSuggestions],
    15
  );

  const breakdown = engine.breakdown;
  const keyword_match_score = deriveKeywordCoverageScore(breakdown);
  const readability_score = deriveReadabilityScore(breakdown);

  const result: AtsAnalysisResult = {
    ats_score: engine.score,
    score_breakdown: breakdown,
    suggestions,
    keyword_match_score,
    missing_keywords: mergedMissing,
    formatting_issues,
    grammar_issues,
    readability_score,
    section_feedback: ai.section_feedback,
    improved_bullets: ai.improved_bullets,
  };

  if (hasJobDescription) {
    result.job_match_score = computeDeterministicJobMatch(breakdown);
  }

  return result;
}
