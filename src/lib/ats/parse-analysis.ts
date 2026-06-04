import type {
  AiResumeImprovements,
  AtsAnalysisResult,
  RewritePair,
} from "./types";

function stringArray(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((x): x is string => typeof x === "string")
    .map((s) => s.trim())
    .filter(Boolean);
}

function rewritePair(
  value: unknown,
  label: string
): RewritePair | null {
  if (!value || typeof value !== "object") return null;
  const o = value as Record<string, unknown>;
  const original = typeof o.original === "string" ? o.original.trim() : "";
  const improved = typeof o.improved === "string" ? o.improved.trim() : "";
  if (!improved) return null;
  return { label, original, improved };
}

function parseAiResumeImprovements(
  value: unknown
): AiResumeImprovements | undefined {
  if (!value || typeof value !== "object") return undefined;
  const o = value as Record<string, unknown>;

  const summaryRaw = rewritePair(o.summary, "Professional summary");
  const skillsRaw = rewritePair(o.skills, "Skills section");

  const experience_bullets: AiResumeImprovements["experience_bullets"] = [];
  if (Array.isArray(o.experience_bullets)) {
    let i = 0;
    for (const item of o.experience_bullets) {
      const p = rewritePair(item, `Experience bullet ${++i}`);
      if (p)
        experience_bullets.push({
          label: p.label,
          original: p.original,
          improved: p.improved,
        });
      if (experience_bullets.length >= 5) break;
    }
  }

  const achievement_statements: AiResumeImprovements["achievement_statements"] =
    [];
  if (Array.isArray(o.achievement_statements)) {
    let j = 0;
    for (const item of o.achievement_statements) {
      const p = rewritePair(item, `Achievement ${++j}`);
      if (p)
        achievement_statements.push({
          label: p.label,
          original: p.original,
          improved: p.improved,
        });
      if (achievement_statements.length >= 3) break;
    }
  }

  if (!summaryRaw?.improved && !skillsRaw?.improved && experience_bullets.length === 0) {
    return undefined;
  }

  return {
    improved_summary: summaryRaw ?? {
      label: "Professional summary",
      original: "",
      improved: "",
    },
    improved_skills: skillsRaw ?? {
      label: "Skills section",
      original: "",
      improved: "",
    },
    experience_bullets,
    keyword_suggestions: stringArray(o.keyword_suggestions).slice(0, 12),
    rewrite_suggestions: stringArray(o.rewrite_suggestions).slice(0, 8),
    achievement_statements,
    action_verbs: stringArray(o.action_verbs).slice(0, 14),
  };
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

export type AiQualitativePayload = Pick<
  AtsAnalysisResult,
  | "missing_keywords"
  | "formatting_issues"
  | "grammar_issues"
  | "section_feedback"
  | "improved_bullets"
  | "ai_resume_improvements"
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
    ai_resume_improvements: parseAiResumeImprovements(o.ai_resume_improvements),
  };

  return { ok: true, data };
}
