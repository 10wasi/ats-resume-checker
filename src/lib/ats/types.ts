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

export type KeywordCategoryBreakdown = {
  technical_skills: string[];
  soft_skills: string[];
  tools_platforms: string[];
  certifications: string[];
};

/** Original vs improved pair for the AI rewrite assistant UI. */
export type RewritePair = {
  label: string;
  original: string;
  improved: string;
};

/** AI-generated rewrite bundle surfaced after analysis. */
export type AiResumeImprovements = {
  improved_summary: RewritePair;
  improved_skills: RewritePair;
  experience_bullets: RewritePair[];
  keyword_suggestions: string[];
  rewrite_suggestions: string[];
  achievement_statements: RewritePair[];
  action_verbs: string[];
};

export type AtsAnalysisResult = {
  /** Overall 0ù100 ù deterministic rule-based score (stable for same input). */
  ats_score: number;
  /** Component scores when the score engine provides a full breakdown. */
  score_breakdown?: ScoreBreakdown;
  /** Human-readable compatibility band derived from ats_score. */
  ats_compatibility_rating?: AtsCompatibilityRating;
  /** Posting keyword overlap when a job description was provided. */
  keyword_match_detail?: KeywordMatchDetail;
  /** Positive signals surfaced for the results report. */
  resume_strengths?: string[];
  /** Gaps and risks for quick scanning on the results page. */
  resume_weaknesses?: string[];
  /** AI rewrite assistant: summaries, bullets, keywords, verbs. */
  ai_resume_improvements?: AiResumeImprovements;
  /** Posting keyword groups for clearer actioning in match analyzer. */
  missing_keyword_categories?: KeywordCategoryBreakdown;
  found_keyword_categories?: KeywordCategoryBreakdown;
  /** Rule-based + curated AI tips (deterministic slice first). */
  suggestions: string[];
  keyword_match_score: number;
  missing_keywords: string[];
  /** Terms from the job post found in your resume (when a JD was provided). */
  matched_keywords?: string[];
  /** Skills and tools detected in resume text (lexicon + parsing). */
  detected_skills?: string[];
  /** Standard section headers not detected (experience, education, skills). */
  missing_sections?: string[];
  /** Parser-derived resume structure metrics for the results UI. */
  resume_structure_stats?: {
    bulletCount: number;
    bulletsWithMetrics: number;
    estimatedYearsExperience: number;
    jdCoveragePercent?: number;
  };
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
