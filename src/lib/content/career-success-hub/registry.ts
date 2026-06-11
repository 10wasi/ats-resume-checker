import { resumeReviewEntry } from "./resume-review";
import { resumeOptimizationEntry } from "./resume-optimization";
import { resumeScoreCheckerEntry } from "./resume-score-checker";
import { resumeKeywordsCheckerEntry } from "./resume-keywords-checker";
import { atsResumeCheckerEntry } from "./ats-resume-checker";
import type { CareerHubIndexItem, CareerLandingEntry } from "./types";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export const CAREER_SUCCESS_HUB_PATH = "/career-success-hub" as const;

/** Dedicated landing pages with unique body content. */
export const CAREER_LANDING_PAGES: CareerLandingEntry[] = [
  resumeReviewEntry,
  resumeOptimizationEntry,
  resumeScoreCheckerEntry,
  resumeKeywordsCheckerEntry,
  atsResumeCheckerEntry,
];

export function getCareerLandingByPath(
  path: string
): CareerLandingEntry | undefined {
  return CAREER_LANDING_PAGES.find((e) => e.path === path);
}

/** Full Career Success Hub index — tools + guides (existing routes included). */
export const CAREER_HUB_INDEX: CareerHubIndexItem[] = [
  {
    id: "resume-checker",
    title: "Resume Checker",
    description:
      "Upload or paste your resume for an instant ATS score, keyword scan, and prioritized fixes.",
    path: RESUME_CHECKER_PATH,
    badge: "Tool",
  },
  {
    id: "ats-resume-checker",
    title: "ATS Resume Checker",
    description:
      "Purpose-built ATS resume checker workflow: score, keywords, format flags, and export QA.",
    path: "/ats-resume-checker",
    badge: "Tool",
  },
  {
    id: "resume-review",
    title: "Resume Review",
    description:
      "How to review your resume like a recruiter and ATS—checklist, rubric, and free tools.",
    path: "/resume-review",
    badge: "Guide",
  },
  {
    id: "resume-optimization",
    title: "Resume Optimization",
    description:
      "Step-by-step resume optimization: format, keywords, bullets, and match score workflow.",
    path: "/resume-optimization",
    badge: "Guide",
  },
  {
    id: "resume-score-checker",
    title: "Resume Score Checker",
    description:
      "What resume score checkers measure, how to interpret results, and how to improve fast.",
    path: "/resume-score-checker",
    badge: "Tool",
  },
  {
    id: "resume-keywords-checker",
    title: "Resume Keywords Checker",
    description:
      "Find missing resume keywords vs job posts—extract, compare, and place terms ethically.",
    path: "/resume-keywords-checker",
    badge: "Tool",
  },
  {
    id: "resume-match",
    title: "Resume Match Tool",
    description:
      "Resume match score vs any job description—missing skills, keyword gaps, and next steps.",
    path: "/resume-job-description-match",
    badge: "Tool",
  },
  {
    id: "ats-examples",
    title: "ATS Resume Examples",
    description:
      "Good vs bad ATS resume layouts, bullet patterns, and role-specific samples.",
    path: "/ats-resume-examples",
    badge: "Examples",
  },
  {
    id: "resume-examples",
    title: "Resume Examples Library",
    description:
      "Nine industry resume examples with keywords, mistakes, and optimization tips.",
    path: "/resume-examples",
    badge: "Examples",
  },
  {
    id: "ats-templates",
    title: "ATS Resume Templates",
    description:
      "Which resume templates parse in ATS—and which layouts break your application.",
    path: "/ats-resume-templates",
    badge: "Guide",
  },
  {
    id: "ats-checklist",
    title: "ATS Resume Checklist",
    description:
      "Print-friendly pre-submit checklist for format, keywords, and export QA.",
    path: "/ats-resume-checklist-2026",
    badge: "Guide",
  },
  {
    id: "ats-keywords-guide",
    title: "ATS Resume Keywords Guide",
    description:
      "Where ATS keywords belong, how to avoid stuffing, and how to match job posts.",
    path: "/ats-resume-keywords",
    badge: "Guide",
  },
  {
    id: "ats-format-guide",
    title: "ATS Resume Formatting Guide",
    description:
      "Single-column layout, headings, fonts, and PDF export rules that parse cleanly.",
    path: "/ats-resume-format",
    badge: "Guide",
  },
];

export function getRelatedCareerHubItems(
  currentId: string,
  limit = 5
): CareerHubIndexItem[] {
  return CAREER_HUB_INDEX.filter((item) => item.id !== currentId).slice(
    0,
    limit
  );
}
