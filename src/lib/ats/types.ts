import type { ScoreBreakdown } from "./score-engine";

export type QaScorecardRow = {
  label: string;
  status: "pass" | "warn" | "fail";
  detail: string;
};

export type CareerInsights = {
  insights_unlocked: boolean;
  narrative_summary: string;
  ats_interpretation: string;
  job_readiness: string;
  strengths: string[];
  weaknesses: string[];
  missing_skills_highlight: string[];
  improvement_actions: string[];
  quick_fix_checklist: string[];
  common_ats_issues: string[];
  qa_scorecard: QaScorecardRow[];
};

export type AtsAnalysisResult = {
  /** Overall 0–100 — deterministic rule-based score (stable for same input). */
  ats_score: number;
  /** Component scores when the score engine provides a full breakdown. */
  score_breakdown?: ScoreBreakdown;
  /** Rule-based + curated AI tips (deterministic slice first). */
  suggestions: string[];
  keyword_match_score: number;
  missing_keywords: string[];
  formatting_issues: string[];
  grammar_issues: string[];
  readability_score: number;
  section_feedback: {
    summary: string;
    experience: string;
    skills: string;
  };
  improved_bullets: string[];
  job_match_score?: number | null;
  /** Set by API: server-enforced plan surface for this payload. */
  report_tier?: "free" | "pro";
  /** Built server-side; free tier receives gated preview only. */
  career_insights?: CareerInsights;
};
