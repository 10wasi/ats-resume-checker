import type { AtsAnalysisResult } from "./types";

function stringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((x): x is string => typeof x === "string")
    .map((s) => s.trim())
    .filter(Boolean);
}

function sectionFeedback(value: unknown): AtsAnalysisResult["section_feedback"] {
  if (!value || typeof value !== "object") {
    return { summary: "", experience: "", skills: "" };
  }
  const o = value as Record<string, unknown>;
  return {
    summary: typeof o.summary === "string" ? o.summary : "",
    experience: typeof o.experience === "string" ? o.experience : "",
    skills: typeof o.skills === "string" ? o.skills : "",
  };
}

/** Strip optional ```json fences from model output. */
export function stripJsonFences(raw: string): string {
  let s = raw.trim();
  if (s.startsWith("```")) {
    s = s.replace(/^```(?:json)?\s*/i, "");
    s = s.replace(/\s*```\s*$/i, "");
  }
  return s.trim();
}

export type AiQualitativePayload = Omit<
  AtsAnalysisResult,
  | "ats_score"
  | "score_breakdown"
  | "suggestions"
  | "keyword_match_score"
  | "readability_score"
  | "job_match_score"
>;

/** Parse LLM qualitative output (no numeric scores — those come from the rule engine). */
export function parseAiQualitativeJson(
  rawContent: string
): { ok: true; data: AiQualitativePayload } | { ok: false; error: string } {
  let parsed: unknown;
  try {
    parsed = JSON.parse(stripJsonFences(rawContent));
  } catch {
    return { ok: false, error: "Invalid JSON from the model." };
  }

  if (!parsed || typeof parsed !== "object") {
    return { ok: false, error: "Analysis response was not an object." };
  }

  const o = parsed as Record<string, unknown>;

  const data: AiQualitativePayload = {
    missing_keywords: stringArray(o.missing_keywords),
    formatting_issues: stringArray(o.formatting_issues),
    grammar_issues: stringArray(o.grammar_issues),
    section_feedback: sectionFeedback(o.section_feedback),
    improved_bullets: stringArray(o.improved_bullets),
  };

  return { ok: true, data };
}
