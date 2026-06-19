import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export type RelatedResourceItem = {
  href: string;
  title: string;
  description: string;
};

/** Canonical catalog — one entry per URL for consistent internal linking. */
export const RESOURCE_CATALOG: Record<string, RelatedResourceItem> = {
  checker: {
    href: RESUME_CHECKER_PATH,
    title: "ATS Resume Checker",
    description: "Free ATS score, keyword gaps, format flags, and AI rewrites.",
  },
  matchAnalyzer: {
    href: "/resume-match-analyzer",
    title: "Resume Match Analyzer",
    description: "Resume match score vs job description with missing keywords.",
  },
  keywordTool: {
    href: "/resume-keyword-tool",
    title: "Resume Keyword Tool",
    description: "ATS keyword analyzer hub—finders, checkers, and profession lists.",
  },
  atsGuide: {
    href: "/ats-guide",
    title: "ATS Guide Hub",
    description: "Resume optimization guides, blog clusters, and workflows.",
  },
  howAtsWorks: {
    href: "/how-ats-works",
    title: "How ATS Works",
    description: "What applicant tracking systems check on resumes worldwide.",
  },
  atsResumeCheckerGuide: {
    href: "/ats-resume-checker",
    title: "How ATS Resume Checker Works",
    description: "Upload workflow, scoring signals, and what to fix first.",
  },
  match: {
    href: "/resume-job-description-match",
    title: "Resume Match Analyzer",
    description: "Resume match score vs any job description with missing keywords.",
  },
  matchScoreGuide: {
    href: "/resume-match-score",
    title: "Resume Match Score Guide",
    description: "What match % means, benchmarks, and how to improve overlap.",
  },
  keywordsFinder: {
    href: "/ats-keywords-finder",
    title: "ATS Keywords Finder",
    description: "Extract skills and tools from any job posting instantly.",
  },
  keywordsChecker: {
    href: "/resume-keywords-checker",
    title: "Resume Keywords Checker",
    description: "Find missing resume keywords vs job posts ethically.",
  },
  resumeKeywordsDb: {
    href: "/resume-keywords",
    title: "Resume Keywords Database",
    description: "ATS keyword lists, verbs, and bullets by profession.",
  },
  skillsAnalyzer: {
    href: "/resume-skills-analyzer",
    title: "Resume Skills Analyzer",
    description: "Detect skills in your resume and gaps vs a job post.",
  },
  bulletGenerator: {
    href: "/resume-bullet-generator",
    title: "Resume Bullet Generator",
    description: "Draft impact-style bullets from role, action, and metrics.",
  },
  summaryGenerator: {
    href: "/resume-summary-generator",
    title: "Resume Summary Generator",
    description: "Professional summary lines from role and highlights.",
  },
  achievementGenerator: {
    href: "/resume-achievement-generator",
    title: "Resume Achievement Generator",
    description: "Turn one win into metric-driven achievement bullets.",
  },
  aiRewrite: {
    href: "/ai-resume-rewrite",
    title: "AI Resume Rewrite",
    description: "How AI bullet rewrites work in the checker flow.",
  },
  checklist: {
    href: "/ats-resume-checklist-2026",
    title: "ATS Resume Checklist",
    description: "Pre-submit QA for format, keywords, and PDF export.",
  },
  examples: {
    href: "/resume-examples",
    title: "Resume Examples Library",
    description: "Nine ATS-friendly samples with keywords and mistakes.",
  },
  atsExamples: {
    href: "/ats-resume-examples",
    title: "ATS Resume Examples Guide",
    description: "Good vs bad layouts that parse in applicant tracking systems.",
  },
  knowledgeCenter: {
    href: "/knowledge-center",
    title: "ATS Knowledge Center",
    description: "Ten guides on format, keywords, match score, and mistakes.",
  },
  resourceHub: {
    href: "/resource-hub",
    title: "ATS Resource Hub",
    description: "Guides, tools, profession hubs, and trust docs in one library.",
  },
  careerHub: {
    href: "/career-success-hub",
    title: "Career Success Hub",
    description: "Connected tools and optimization workflows for job seekers.",
  },
  atsHub: {
    href: "/ats-resume-hub",
    title: "ATS Friendly Resume Hub",
    description: "Checker, guides, role pages, and tools in one hub.",
  },
  ultimateGuide: {
    href: "/ultimate-ats-resume-guide",
    title: "Ultimate ATS Resume Guide",
    description: "Complete resume optimization: format, keywords, and scoring.",
  },
  resumeOptimization: {
    href: "/resume-optimization",
    title: "Resume Optimization Workflow",
    description: "Five-step ATS workflow from score to checklist QA.",
  },
  resumeReview: {
    href: "/resume-review",
    title: "Free Resume Review",
    description: "Recruiter-style rubric plus ATS checker next steps.",
  },
  scoreChecker: {
    href: "/resume-score-checker",
    title: "Resume Score Checker Guide",
    description: "What resume scores measure and how to interpret results.",
  },
  keywordsGuide: {
    href: "/ats-resume-keywords",
    title: "ATS Resume Keywords Guide",
    description: "Where keywords belong and how to avoid stuffing.",
  },
  formatGuide: {
    href: "/ats-resume-format",
    title: "ATS Resume Format Guide",
    description: "Layout, headings, and file types that parse cleanly.",
  },
  mistakesGuide: {
    href: "/ats-resume-mistakes",
    title: "ATS Resume Mistakes",
    description: "Silent rejection triggers and fast fixes before you apply.",
  },
  atsScoreGuide: {
    href: "/ats-score-explained",
    title: "ATS Score Explained",
    description: "How ATS scoring differs from resume match score.",
  },
  friendlyGuide: {
    href: "/ats-friendly-resume-guide",
    title: "ATS Friendly Resume Guide",
    description: "Step-by-step build and test workflow.",
  },
  industryKeywords: {
    href: "/resume-keywords-by-industry",
    title: "Resume Keywords by Industry",
    description: "Sector-specific ATS keyword patterns.",
  },
  templatesGuide: {
    href: "/ats-resume-templates",
    title: "ATS Resume Templates",
    description: "Which templates parse vs layouts that break ATS.",
  },
  blog: {
    href: "/blog",
    title: "Resume & ATS Blog",
    description: "Deep guides on scoring, keywords, and job search strategy.",
  },
  blogHowAts: {
    href: "/blog/how-ats-works",
    title: "How ATS Works (Blog Hub)",
    description: "How ATS filters candidates and parses resumes globally.",
  },
  blogMistakes: {
    href: "/blog/resume-mistakes",
    title: "Resume Mistakes Hub",
    description: "ATS resume mistakes to avoid before you apply.",
  },
  blogKeywords: {
    href: "/blog/ats-keywords-guide",
    title: "ATS Keywords Guide Hub",
    description: "Resume keywords for ATS—placement and analyzer tips.",
  },
  blogRemote: {
    href: "/blog/remote-job-resume-tips",
    title: "Remote Job Resume Tips",
    description: "Global and remote application resume optimization.",
  },
  about: {
    href: "/about",
    title: "About ResumeIQ",
    description: "Mission, editorial standards, and privacy-first tooling.",
  },
  methodology: {
    href: "/methodology",
    title: "How ATS Scoring Works",
    description: "Transparent methodology: parse health, keywords, and match scoring.",
  },
  faqCenter: {
    href: "/faq-center",
    title: "ATS Resume FAQ Center",
    description: "Answers on scoring, tools, interviews, and global applications.",
  },
  contact: {
    href: "/contact",
    title: "Contact ResumeIQ",
    description: "Product feedback, partnerships, and support.",
  },
  privacy: {
    href: "/privacy",
    title: "Privacy Policy",
    description: "How resume files and analytics are handled.",
  },
  terms: {
    href: "/terms",
    title: "Terms of Service",
    description: "Acceptable use for free ATS tools and guides.",
  },
  whyNoInterviews: {
    href: "/why-resume-not-getting-interviews",
    title: "Why No Interviews?",
    description: "Screening fixes when applications go silent.",
  },
  whyRejected: {
    href: "/why-resume-gets-rejected",
    title: "Why Resume Gets Rejected",
    description: "Parser, filters, and recruiter skim causes.",
  },
  notPassingAts: {
    href: "/resume-not-passing-ats",
    title: "Resume Not Passing ATS",
    description: "Diagnose parse vs keyword failures.",
  },
  keywordsMissing: {
    href: "/resume-keywords-missing",
    title: "Resume Keywords Missing",
    description: "Find and fix keyword gaps vs job posts.",
  },
  tailorResume: {
    href: "/how-to-tailor-resume-for-job-description",
    title: "Tailor Resume for Job",
    description: "15-minute tailoring workflow per application.",
  },
  improveScore: {
    href: "/how-to-improve-resume-score",
    title: "Improve Resume Score",
    description: "Raise ATS and match scores honestly.",
  },
  mistakesInterviews: {
    href: "/resume-mistakes-that-cost-interviews",
    title: "Mistakes That Cost Interviews",
    description: "Top errors with before/after examples.",
  },
  screeningExplained: {
    href: "/resume-screening-explained",
    title: "Resume Screening Explained",
    description: "ATS to recruiter review pipeline.",
  },
};

const DEFAULT_KEYS = [
  "checker",
  "matchAnalyzer",
  "keywordTool",
  "resourceHub",
  "resumeKeywordsDb",
  "examples",
  "atsGuide",
] as const;

/** Curated related clusters per route — avoids generic duplicate lists. */
const PATH_RELATED_KEYS: Record<string, readonly string[]> = {
  "/": ["checker", "matchAnalyzer", "keywordTool", "examples", "atsGuide", "howAtsWorks"],
  [RESUME_CHECKER_PATH]: [
    "matchAnalyzer",
    "keywordTool",
    "howAtsWorks",
    "methodology",
    "examples",
    "atsGuide",
  ],
  "/resume-match-analyzer": [
    "match",
    "checker",
    "keywordTool",
    "matchScoreGuide",
    "examples",
    "atsGuide",
  ],
  "/resume-keyword-tool": [
    "keywordsFinder",
    "keywordsChecker",
    "resumeKeywordsDb",
    "matchAnalyzer",
    "checker",
    "atsGuide",
  ],
  "/ats-guide": [
    "checker",
    "howAtsWorks",
    "knowledgeCenter",
    "ultimateGuide",
    "matchAnalyzer",
    "keywordTool",
  ],
  "/how-ats-works": [
    "methodology",
    "checker",
    "faqCenter",
    "atsGuide",
    "matchAnalyzer",
    "keywordTool",
  ],
  "/ats-keywords-finder": [
    "checker",
    "match",
    "keywordsChecker",
    "resumeKeywordsDb",
    "skillsAnalyzer",
    "keywordsGuide",
  ],
  "/resume-bullet-generator": [
    "checker",
    "achievementGenerator",
    "aiRewrite",
    "examples",
    "checklist",
    "resumeOptimization",
  ],
  "/resume-skills-analyzer": [
    "checker",
    "match",
    "keywordsFinder",
    "resumeKeywordsDb",
    "skillsAnalyzer",
    "keywordsGuide",
  ],
  "/resume-summary-generator": [
    "checker",
    "match",
    "summaryGenerator",
    "bulletGenerator",
    "friendlyGuide",
    "checklist",
  ],
  "/resume-achievement-generator": [
    "checker",
    "bulletGenerator",
    "aiRewrite",
    "examples",
    "checklist",
    "resumeOptimization",
  ],
  "/ai-resume-rewrite": [
    "checker",
    "match",
    "bulletGenerator",
    "achievementGenerator",
    "keywordsFinder",
    "resumeOptimization",
  ],
  "/resume-job-description-match": [
    "checker",
    "matchScoreGuide",
    "keywordsFinder",
    "skillsAnalyzer",
    "checklist",
    "keywordsGuide",
  ],
  "/resume-match-score": [
    "match",
    "checker",
    "atsScoreGuide",
    "keywordsFinder",
    "keywordsGuide",
    "checklist",
  ],
  "/ats-resume-checklist-2026": [
    "checker",
    "match",
    "formatGuide",
    "keywordsGuide",
    "mistakesGuide",
    "examples",
  ],
  "/ultimate-ats-resume-guide": [
    "checker",
    "knowledgeCenter",
    "formatGuide",
    "keywordsGuide",
    "checklist",
    "careerHub",
  ],
  "/resume-keywords": [
    "checker",
    "matchAnalyzer",
    "keywordTool",
    "keywordsFinder",
    "examples",
    "atsGuide",
  ],
  "/resume-examples": [
    "checker",
    "examples",
    "atsExamples",
    "bulletGenerator",
    "checklist",
    "match",
  ],
  "/ats-resume-examples": [
    "examples",
    "checker",
    "formatGuide",
    "templatesGuide",
    "mistakesGuide",
    "checklist",
  ],
  "/knowledge-center": [
    "resourceHub",
    "ultimateGuide",
    "checker",
    "careerHub",
    "formatGuide",
    "keywordsGuide",
    "matchScoreGuide",
  ],
  "/resource-hub": [
    "checker",
    "matchAnalyzer",
    "keywordTool",
    "knowledgeCenter",
    "examples",
    "checklist",
  ],
  "/career-success-hub": [
    "checker",
    "resumeOptimization",
    "resumeReview",
    "knowledgeCenter",
    "atsHub",
    "checklist",
  ],
  "/ats-resume-hub": [
    "checker",
    "friendlyGuide",
    "knowledgeCenter",
    "careerHub",
    "examples",
    "checklist",
  ],
  "/ats-resume-checker": [
    "checker",
    "atsResumeCheckerGuide",
    "scoreChecker",
    "match",
    "checklist",
    "keywordsGuide",
  ],
  "/resume-review": [
    "checker",
    "match",
    "checklist",
    "resumeOptimization",
    "scoreChecker",
    "examples",
  ],
  "/resume-optimization": [
    "checker",
    "match",
    "tailorResume",
    "whyNoInterviews",
    "ultimateGuide",
    "careerHub",
  ],
  "/resume-score-checker": [
    "checker",
    "atsScoreGuide",
    "atsResumeCheckerGuide",
    "match",
    "checklist",
    "formatGuide",
  ],
  "/resume-keywords-checker": [
    "keywordsFinder",
    "resumeKeywordsDb",
    "checker",
    "match",
    "keywordsGuide",
    "industryKeywords",
  ],
  "/ats-resume-keywords": [
    "keywordsFinder",
    "keywordsChecker",
    "resumeKeywordsDb",
    "checker",
    "industryKeywords",
    "match",
  ],
  "/ats-resume-format": [
    "checker",
    "templatesGuide",
    "mistakesGuide",
    "friendlyGuide",
    "checklist",
    "examples",
  ],
  "/ats-resume-mistakes": [
    "checker",
    "formatGuide",
    "checklist",
    "mistakesGuide",
    "keywordsGuide",
    "match",
  ],
  "/ats-score-explained": [
    "checker",
    "matchScoreGuide",
    "scoreChecker",
    "match",
    "resumeOptimization",
    "checklist",
  ],
  "/ats-friendly-resume-guide": [
    "checker",
    "formatGuide",
    "keywordsGuide",
    "friendlyGuide",
    "checklist",
    "examples",
  ],
  "/resume-keywords-by-industry": [
    "resumeKeywordsDb",
    "keywordsFinder",
    "keywordsChecker",
    "keywordsGuide",
    "checker",
    "match",
  ],
  "/ats-resume-templates": [
    "formatGuide",
    "checker",
    "examples",
    "mistakesGuide",
    "templatesGuide",
    "checklist",
  ],
  "/blog": [
    "checker",
    "blogHowAts",
    "blogMistakes",
    "blogKeywords",
    "blogRemote",
    "atsGuide",
  ],
  "/blog/how-ats-works": ["checker", "howAtsWorks", "atsGuide", "blogMistakes", "methodology", "matchAnalyzer"],
  "/blog/resume-mistakes": ["checker", "blogHowAts", "whyRejected", "mistakesInterviews", "examples", "atsGuide"],
  "/blog/ats-keywords-guide": ["keywordTool", "keywordsFinder", "checker", "blogRemote", "resumeKeywordsDb", "matchAnalyzer"],
  "/blog/remote-job-resume-tips": ["checker", "matchAnalyzer", "blogKeywords", "atsGuide", "howAtsWorks", "examples"],
  "/about": ["checker", "methodology", "faqCenter", "careerHub", "knowledgeCenter", "contact"],
  "/methodology": ["checker", "faqCenter", "atsScoreGuide", "matchScoreGuide", "careerHub", "checklist"],
  "/faq-center": ["methodology", "checker", "about", "careerHub", "whyNoInterviews", "improveScore"],
  "/contact": ["checker", "about", "faqCenter", "privacy", "terms", "careerHub"],
  "/privacy": ["terms", "contact", "about", "checker", "careerHub", "blog"],
  "/terms": ["privacy", "contact", "about", "checker", "knowledgeCenter", "blog"],
  "/why-resume-not-getting-interviews": [
    "checker",
    "match",
    "whyRejected",
    "screeningExplained",
    "improveScore",
    "tailorResume",
  ],
  "/why-resume-gets-rejected": [
    "checker",
    "notPassingAts",
    "whyNoInterviews",
    "mistakesInterviews",
    "screeningExplained",
    "keywordsMissing",
  ],
  "/resume-not-passing-ats": [
    "checker",
    "formatGuide",
    "whyRejected",
    "keywordsMissing",
    "improveScore",
    "checklist",
  ],
  "/resume-keywords-missing": [
    "keywordsFinder",
    "match",
    "keywordsChecker",
    "resumeKeywordsDb",
    "tailorResume",
    "checker",
  ],
  "/how-to-tailor-resume-for-job-description": [
    "match",
    "keywordsFinder",
    "keywordsMissing",
    "checker",
    "examples",
    "matchScoreGuide",
  ],
  "/how-to-improve-resume-score": [
    "checker",
    "scoreChecker",
    "atsScoreGuide",
    "notPassingAts",
    "tailorResume",
    "checklist",
  ],
  "/resume-mistakes-that-cost-interviews": [
    "checker",
    "mistakesGuide",
    "whyRejected",
    "examples",
    "checklist",
    "resumeReview",
  ],
  "/resume-screening-explained": [
    "checker",
    "match",
    "whyRejected",
    "whyNoInterviews",
    "notPassingAts",
    "matchScoreGuide",
  ],
};

const BLOG_POST_KEYS = [
  "checker",
  "whyNoInterviews",
  "whyRejected",
  "keywordsGuide",
  "formatGuide",
  "checklist",
] as const;

function resolveKeys(path: string): readonly string[] {
  if (path.startsWith("/blog/")) return BLOG_POST_KEYS;
  if (path.startsWith("/profession/")) {
    return [
      "resourceHub",
      "checker",
      "matchAnalyzer",
      "examples",
      "resumeKeywordsDb",
      "checklist",
    ] as const;
  }
  return PATH_RELATED_KEYS[path] ?? DEFAULT_KEYS;
}

export function getRelatedResources(
  path: string,
  options?: { excludeHref?: string; limit?: number }
): RelatedResourceItem[] {
  const limit = options?.limit ?? 6;
  const exclude = options?.excludeHref;
  const seen = new Set<string>();
  const items: RelatedResourceItem[] = [];

  for (const key of resolveKeys(path)) {
    const item = RESOURCE_CATALOG[key];
    if (!item || seen.has(item.href) || item.href === exclude) continue;
    seen.add(item.href);
    items.push(item);
    if (items.length >= limit) break;
  }

  return items;
}
