import { resumeReviewEntry } from "./resume-review";
import { resumeOptimizationEntry } from "./resume-optimization";
import { resumeScoreCheckerEntry } from "./resume-score-checker";
import { resumeKeywordsCheckerEntry } from "./resume-keywords-checker";
import { atsResumeCheckerEntry } from "./ats-resume-checker";
import { resumeMatchAnalyzerEntry } from "./resume-match-analyzer";
import { resumeKeywordToolEntry } from "./resume-keyword-tool";
import { atsGuideEntry } from "./ats-guide";
import { whyResumeNotGettingInterviewsEntry } from "@/lib/content/search-intent/why-resume-not-getting-interviews";
import { whyResumeGetsRejectedEntry } from "@/lib/content/search-intent/why-resume-gets-rejected";
import { resumeNotPassingAtsEntry } from "@/lib/content/search-intent/resume-not-passing-ats";
import { resumeRejectedByAtsEntry } from "@/lib/content/search-intent/resume-rejected-by-ats";
import { commonAtsRejectionReasonsEntry } from "@/lib/content/search-intent/common-ats-resume-rejection-reasons";
import { aiResumeReviewEntry } from "@/lib/content/search-intent/ai-resume-review";
import { cvCheckerEntry } from "@/lib/content/search-intent/cv-checker";
import { resumeKeywordsMissingEntry } from "@/lib/content/search-intent/resume-keywords-missing";
import { howToTailorResumeEntry } from "@/lib/content/search-intent/how-to-tailor-resume-for-job-description";
import { howToImproveResumeScoreEntry } from "@/lib/content/search-intent/how-to-improve-resume-score";
import { resumeMistakesCostInterviewsEntry } from "@/lib/content/search-intent/resume-mistakes-that-cost-interviews";
import { resumeScreeningExplainedEntry } from "@/lib/content/search-intent/resume-screening-explained";
import { freeResumeCheckerOnlineEntry } from "@/lib/content/search-intent/free-resume-checker-online";
import { freeAtsScoreCheckerEntry } from "@/lib/content/search-intent/free-ats-score-checker";
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
  resumeMatchAnalyzerEntry,
  resumeKeywordToolEntry,
  atsGuideEntry,
  whyResumeNotGettingInterviewsEntry,
  whyResumeGetsRejectedEntry,
  resumeRejectedByAtsEntry,
  commonAtsRejectionReasonsEntry,
  resumeNotPassingAtsEntry,
  aiResumeReviewEntry,
  cvCheckerEntry,
  resumeKeywordsMissingEntry,
  howToTailorResumeEntry,
  howToImproveResumeScoreEntry,
  resumeMistakesCostInterviewsEntry,
  resumeScreeningExplainedEntry,
  freeResumeCheckerOnlineEntry,
  freeAtsScoreCheckerEntry,
];

export function getCareerLandingByPath(
  path: string
): CareerLandingEntry | undefined {
  return CAREER_LANDING_PAGES.find((e) => e.path === path);
}

/** Full Career Success Hub index — tools + guides (existing routes included). */
export const CAREER_HUB_INDEX: CareerHubIndexItem[] = [
  {
    id: "free-resume-checker-online",
    title: "Free Resume Checker Online",
    description:
      "Resume checker free online—ATS score, keywords, format fixes. No signup.",
    path: "/free-resume-checker-online",
    badge: "Tool",
  },
  {
    id: "free-ats-score-checker",
    title: "Free ATS Score Checker",
    description:
      "Free ATS score checker—compatibility %, keyword gaps, and format flags.",
    path: "/free-ats-score-checker",
    badge: "Tool",
  },
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
    id: "resume-match-analyzer",
    title: "Resume Match Analyzer",
    description:
      "Resume match score vs any job description—missing keywords, skill gaps, and tailoring steps.",
    path: "/resume-match-analyzer",
    badge: "Tool",
  },
  {
    id: "resume-keyword-tool",
    title: "Resume Keyword Tool",
    description:
      "ATS keyword analyzer hub—finders, checkers, and profession keyword lists.",
    path: "/resume-keyword-tool",
    badge: "Tool",
  },
  {
    id: "ats-guide",
    title: "ATS Guide Hub",
    description:
      "Pillar guides and blog clusters for professional resume optimization worldwide.",
    path: "/ats-guide",
    badge: "Guide",
  },
  {
    id: "resume-match",
    title: "Resume Match Analyzer",
    description:
      "Resume match score vs any job description—missing skills, keyword gaps, and next steps.",
    path: "/resume-job-description-match",
    badge: "Tool",
  },
  {
    id: "resume-skills-analyzer",
    title: "Resume Skills Analyzer",
    description:
      "Detect skills and tools in your resume—compare to a job post for honest gap spotting.",
    path: "/resume-skills-analyzer",
    badge: "Tool",
  },
  {
    id: "resume-summary-generator",
    title: "Resume Summary Generator",
    description:
      "Draft professional summary lines from role, years, and highlights—copy and refine.",
    path: "/resume-summary-generator",
    badge: "Tool",
  },
  {
    id: "resume-achievement-generator",
    title: "Resume Achievement Generator",
    description:
      "Turn one accomplishment into ATS-friendly achievement bullets with metrics.",
    path: "/resume-achievement-generator",
    badge: "Tool",
  },
  {
    id: "resume-match-score",
    title: "Resume Match Score Guide",
    description:
      "What match score means, good benchmarks, and how to improve keyword overlap ethically.",
    path: "/resume-match-score",
    badge: "Guide",
  },
  {
    id: "why-not-getting-interviews",
    title: "Why No Interviews?",
    description:
      "Why your resume is not getting interviews—and screening fixes that work.",
    path: "/why-resume-not-getting-interviews",
    badge: "Guide",
  },
  {
    id: "why-resume-gets-rejected",
    title: "Why Resume Gets Rejected",
    description:
      "Rejection causes from parser to recruiter skim—with fixes at each stage.",
    path: "/why-resume-gets-rejected",
    badge: "Guide",
  },
  {
    id: "resume-rejected-by-ats",
    title: "Resume Rejected By ATS",
    description:
      "Why ATS rejects your resume—examples, mistakes, and free checker workflow.",
    path: "/resume-rejected-by-ats",
    badge: "Guide",
  },
  {
    id: "common-ats-rejection-reasons",
    title: "Common ATS Rejection Reasons",
    description:
      "Top ATS resume rejection reasons with fixes for each trigger.",
    path: "/common-ats-resume-rejection-reasons",
    badge: "Guide",
  },
  {
    id: "ai-resume-review",
    title: "AI Resume Review",
    description:
      "Free AI resume review—score, keywords, format flags, and suggestions.",
    path: "/ai-resume-review",
    badge: "Tool",
  },
  {
    id: "cv-checker",
    title: "CV Checker Online",
    description:
      "Free CV checker—ATS score and keyword scan for global job seekers.",
    path: "/cv-checker",
    badge: "Tool",
  },
  {
    id: "complete-ats-guide",
    title: "Complete ATS Optimization Guide",
    description:
      "Master guide: checker, score, review, rejection, and keywords.",
    path: "/complete-guide-ats-resume-optimization",
    badge: "Guide",
  },
  {
    id: "resume-not-passing-ats",
    title: "Resume Not Passing ATS",
    description:
      "Diagnose parse vs keyword failures and test your PDF before you apply again.",
    path: "/resume-not-passing-ats",
    badge: "Guide",
  },
  {
    id: "resume-keywords-missing",
    title: "Resume Keywords Missing",
    description:
      "Find missing keywords vs job posts and fix gaps ethically in bullets.",
    path: "/resume-keywords-missing",
    badge: "Guide",
  },
  {
    id: "how-to-tailor-resume",
    title: "Tailor Resume for JD",
    description:
      "15-minute tailoring workflow per application with match score tracking.",
    path: "/how-to-tailor-resume-for-job-description",
    badge: "Guide",
  },
  {
    id: "how-to-improve-score",
    title: "Improve Resume Score",
    description:
      "7-day plan to raise ATS and match scores without keyword stuffing.",
    path: "/how-to-improve-resume-score",
    badge: "Guide",
  },
  {
    id: "resume-mistakes-interviews",
    title: "Mistakes That Cost Interviews",
    description:
      "Top resume mistakes with before/after examples and a free audit.",
    path: "/resume-mistakes-that-cost-interviews",
    badge: "Guide",
  },
  {
    id: "resume-screening-explained",
    title: "Resume Screening Explained",
    description:
      "How screening works from ATS parser to recruiter review.",
    path: "/resume-screening-explained",
    badge: "Guide",
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
