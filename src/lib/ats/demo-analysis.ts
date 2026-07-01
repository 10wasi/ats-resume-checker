import { deriveAtsCompatibilityRating } from "./compatibility-rating";
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
  ats_compatibility_rating: deriveAtsCompatibilityRating(72),
  keyword_match_detail: {
    matched: 4,
    total: 7,
    coverage_percent: 57,
  },
  resume_strengths: [
    "Dedicated skills section improves ATS searchability.",
    "Healthy number of experience bullets for impact and parsing.",
    "Experience section mapped clearly for parsers.",
  ],
  suggestions: [
    "Add a Skills section grouped by stack (languages, frameworks, infra) and mirror the posting.",
    "Quantify at least half your bullets with %, $, time saved, or user scale.",
    "Work these keywords in where accurate: React, REST APIs, cross-functional delivery.",
  ],
  keyword_match_score: 70,
  missing_keywords: ["React", "REST APIs", "Team Collaboration"],
  matched_keywords: ["JavaScript", "TypeScript", "Agile", "CI/CD"],
  detected_skills: [
    "javascript",
    "typescript",
    "python",
    "react",
    "node.js",
    "sql",
    "git",
  ],
  missing_sections: ["education"],
  resume_structure_stats: {
    bulletCount: 8,
    bulletsWithMetrics: 3,
    estimatedYearsExperience: 4,
    jdCoveragePercent: 57,
  },
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
  resume_weaknesses: [
    "No clear section headings",
    "Missing posting keywords: React, REST APIs, Team Collaboration",
    "Few bullets include measurable outcomes—add metrics where truthful.",
  ],
  ai_resume_improvements: {
    improved_summary: {
      label: "Professional summary",
      original: "Software developer with experience in web applications.",
      improved:
        "Full-stack Software Engineer with 5+ years building scalable web apps in JavaScript/TypeScript. Delivered performance gains up to 30% and shipped features with cross-functional Agile teams.",
    },
    improved_skills: {
      label: "Skills section",
      original: "JavaScript, HTML, CSS, Git",
      improved:
        "Languages: JavaScript, TypeScript, Python · Frameworks: React, Node.js · Methods: Agile, CI/CD, REST APIs · Tools: Git, SQL",
    },
    experience_bullets: [
      {
        label: "Experience bullet 1",
        original: "Worked on web applications and fixed bugs.",
        improved:
          "Developed scalable web applications using modern frameworks, improving performance by 30%.",
      },
      {
        label: "Experience bullet 2",
        original: "Helped team deliver projects.",
        improved:
          "Collaborated with cross-functional teams to deliver 12+ releases on schedule using Agile and CI/CD.",
      },
    ],
    keyword_suggestions: [
      "React",
      "REST APIs",
      "TypeScript",
      "cross-functional",
      "CI/CD",
      "Agile",
    ],
    rewrite_suggestions: [
      "Add a two-line summary with role, years, and one metric.",
      "Group skills by category and mirror posting language.",
      "Quantify at least half your bullets with %, $, or scale.",
    ],
    achievement_statements: [
      {
        label: "Achievement 1",
        original: "Improved application performance.",
        improved:
          "Optimized core web flows, improving load performance by 30% for 50k+ monthly users.",
      },
    ],
    action_verbs: [
      "Developed",
      "Optimized",
      "Collaborated",
      "Delivered",
      "Implemented",
      "Led",
      "Scaled",
      "Streamlined",
    ],
  },
};

export function getDemoAnalysis(
  includeJobMatch: boolean
): AtsAnalysisResult {
  if (includeJobMatch) {
    return { ...DEMO_BASE, job_match_score: 66 };
  }
  return { ...DEMO_BASE };
}
