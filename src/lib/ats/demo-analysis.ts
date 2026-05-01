import type { AtsAnalysisResult } from "./types";
import type { ScoreBreakdown } from "./score-engine";

/** Static demo payload (legacy previews / tests). Scores match DEMO_BREAKDOWN sum. */
const DEMO_BREAKDOWN: ScoreBreakdown = {
  skills: 20,
  experience: 18,
  ats: 14,
  formatting: 12,
  education: 8,
};

const DEMO_BASE: Omit<
  AtsAnalysisResult,
  "job_match_score"
> = {
  ats_score: 72,
  score_breakdown: DEMO_BREAKDOWN,
  suggestions: [
    "Add a Skills section grouped by stack (languages, frameworks, infra) and mirror the posting.",
    "Quantify at least half your bullets with %, $, time saved, or user scale.",
    "Work these keywords in where accurate: React, REST APIs, cross-functional delivery.",
  ],
  keyword_match_score: 70,
  missing_keywords: ["React", "REST APIs", "Team Collaboration"],
  formatting_issues: [
    "No clear section headings",
    "Inconsistent bullet formatting",
  ],
  grammar_issues: ["Minor tense inconsistency"],
  readability_score: 68,
  section_feedback: {
    summary:
      "Your summary is basic. Add measurable achievements.",
    experience:
      "Add impact-driven bullet points with numbers.",
    skills:
      "Group skills into categories like frontend/backend.",
  },
  improved_bullets: [
    "Developed scalable web applications using modern frameworks, improving performance by 30%.",
    "Collaborated with cross-functional teams to deliver projects on time.",
  ],
};

export function getDemoAnalysis(
  includeJobMatch: boolean
): AtsAnalysisResult {
  if (includeJobMatch) {
    return { ...DEMO_BASE, job_match_score: 66 };
  }
  return { ...DEMO_BASE };
}
