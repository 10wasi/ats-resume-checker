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

export type KeywordMatchDetail = {
  matched: number;
  total: number;
  coverage_percent: number;
};

export type AtsCompatibilityRating = {
  label: string;
  description: string;
  tone: "excellent" | "good" | "fair" | "needs-work";
};

export type AtsAnalysisResult = {
  /** Overall 0–100 — deterministic rule-based score (stable for same input). */
  ats_score: number;
  /** Component scores when the score engine provides a full breakdown. */
  score_breakdown?: ScoreBreakdown;
  /** Human-readable compatibility band derived from ats_score. */
  ats_compatibility_rating?: AtsCompatibilityRating;
  /** Posting keyword overlap when a job description was provided. */
  keyword_match_detail?: KeywordMatchDetail;
  /** Positive signals surfaced for the results report. */
  resume_strengths?: string[];
  /** Rule-based + curated AI tips (deterministic slice first). */
  suggestions: string[];
  keyword_match_score: number;
  missing_keywords: string[];
  /** Terms from the job post found in your resume (when a JD was provided). */
  matched_keywords?: string[];
  /** Skills and tools detected in resume text (lexicon + parsing). */
  detected_skills?: string[];
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
