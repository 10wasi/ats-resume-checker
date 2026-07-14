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
  headlineGenerator: {
    href: "/resume-headline-generator",
    title: "Resume Headline Generator",
    description: "60+ ATS-friendly headline examples and formulas by role.",
  },
  coverLetterGenerator: {
    href: "/cover-letter-generator",
    title: "Cover Letter Generator",
    description: "ATS-friendly cover letter structure, templates, and examples.",
  },
  interviewQuestionGenerator: {
    href: "/interview-question-generator",
    title: "Interview Question Generator",
    description: "100+ interview questions with STAR answers by role and type.",
  },
  objectiveGenerator: {
    href: "/resume-objective-generator",
    title: "Resume Objective Generator",
    description: "40+ ATS-friendly objective examples for entry-level, career changers, and internships.",
  },
  skillsGenerator: {
    href: "/resume-skills-generator",
    title: "Resume Skills Generator",
    description: "ATS-ready skills lists by role — what to include, how to format, and what to avoid.",
  },
  grammarChecker: {
    href: "/resume-grammar-checker",
    title: "Resume Grammar Checker",
    description: "Fix tense inconsistencies, passive voice, and grammar errors before applying.",
  },
  resumeFormatter: {
    href: "/resume-formatter",
    title: "Resume Formatter",
    description: "ATS-safe formatting rules: fonts, margins, layout, file type, and section order.",
  },
  templateBuilder: {
    href: "/resume-template-builder",
    title: "Resume Template Builder",
    description: "ATS-compatible template types, layout guide, and a plain-text example.",
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
    description: "Thirteen guides on format, keywords, match score, and mistakes.",
  },
  platformHub: {
    href: "/resume-optimization-platform",
    title: "Resume Optimization Platform",
    description: "Nine hubs: checker, review, score, keywords, match, ATS tools.",
  },
  resumeCheckerOnline: {
    href: "/free-resume-checker-online",
    title: "Free Resume Checker Online",
    description: "Resume checker free online—ATS score, keywords, format fixes.",
  },
  freeAtsScoreChecker: {
    href: "/free-ats-score-checker",
    title: "Free ATS Score Checker",
    description: "Free ATS score checker—compatibility %, keyword gaps, format flags.",
  },
  atsResumeReview: {
    href: "/ats-resume-review",
    title: "ATS Resume Review",
    description: "Free ATS resume review—parse, keywords, readiness report.",
  },
  resourceHub: {
    href: "/resource-hub",
    title: "ATS Resource Hub",
    description: "Guides, tools, profession hubs, and trust docs in one library.",
  },
  resumeActionVerbs: {
    href: "/resume-action-verbs",
    title: "Resume Action Verbs",
    description: "200+ strong resume verbs by category: leadership, engineering, sales, finance.",
  },
  resumeParsing: {
    href: "/resume-parsing",
    title: "Resume Parsing Guide",
    description: "How ATS extracts text from your file and why parsing fails.",
  },
  resumeObjective: {
    href: "/resume-objective",
    title: "Resume Objective vs Summary",
    description: "When to use an objective, with examples for entry-level and career changers.",
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
    title: "Resume Review Online",
    description: "Free resume review rubric plus ATS checker workflow.",
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
  howResumeAnalysis: {
    href: "/how-resume-analysis-works",
    title: "How Resume Analysis Works",
    description: "Full breakdown of checker stages and report sections.",
  },
  editorialPolicy: {
    href: "/editorial-policy",
    title: "Editorial Policy",
    description: "How ResumeIQ writes and reviews resume guides.",
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
  rejectedByAts: {
    href: "/resume-rejected-by-ats",
    title: "Resume Rejected By ATS",
    description: "Why ATS filters you out—with examples and fixes.",
  },
  commonRejectionReasons: {
    href: "/common-ats-resume-rejection-reasons",
    title: "Common ATS Rejection Reasons",
    description: "Top rejection triggers with a fix for each.",
  },
  aiResumeReview: {
    href: "/ai-resume-review",
    title: "AI Resume Review",
    description: "Free AI score, keyword gaps, and format flags.",
  },
  cvChecker: {
    href: "/cv-checker",
    title: "CV Checker Online",
    description: "Free CV checker—ATS score for global uploads.",
  },
  completeAtsGuide: {
    href: "/complete-guide-ats-resume-optimization",
    title: "Complete ATS Optimization Guide",
    description: "Master guide: checker, score, review, rejection, keywords.",
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
  "resumeReview",
  "matchAnalyzer",
  "resumeKeywordsDb",
  "examples",
  "platformHub",
] as const;

/** Curated related clusters per route — avoids generic duplicate lists. */
const PATH_RELATED_KEYS: Record<string, readonly string[]> = {
  "/resume-headline-generator": [
    "checker",
    "summaryGenerator",
    "bulletGenerator",
    "achievementGenerator",
    "coverLetterGenerator",
    "interviewQuestionGenerator",
    "examples",
    "knowledgeCenter",
  ],
  "/cover-letter-generator": [
    "checker",
    "headlineGenerator",
    "summaryGenerator",
    "bulletGenerator",
    "interviewQuestionGenerator",
    "match",
    "keywordsGuide",
    "knowledgeCenter",
  ],
  "/interview-question-generator": [
    "checker",
    "bulletGenerator",
    "summaryGenerator",
    "headlineGenerator",
    "coverLetterGenerator",
    "achievementGenerator",
    "examples",
    "knowledgeCenter",
  ],
  "/resume-objective-generator": [
    "checker",
    "summaryGenerator",
    "headlineGenerator",
    "bulletGenerator",
    "skillsGenerator",
    "coverLetterGenerator",
    "resumeObjective",
    "knowledgeCenter",
  ],
  "/resume-skills-generator": [
    "checker",
    "skillsAnalyzer",
    "keywordsFinder",
    "objectiveGenerator",
    "summaryGenerator",
    "bulletGenerator",
    "resumeKeywordsDb",
    "knowledgeCenter",
  ],
  "/resume-grammar-checker": [
    "checker",
    "resumeFormatter",
    "templateBuilder",
    "bulletGenerator",
    "summaryGenerator",
    "resumeActionVerbs",
    "examples",
    "knowledgeCenter",
  ],
  "/resume-formatter": [
    "checker",
    "grammarChecker",
    "templateBuilder",
    "formatGuide",
    "checklist",
    "mistakesGuide",
    "howAtsWorks",
    "knowledgeCenter",
  ],
  "/resume-template-builder": [
    "checker",
    "resumeFormatter",
    "grammarChecker",
    "atsExamples",
    "formatGuide",
    "checklist",
    "examples",
    "knowledgeCenter",
  ],
  "/resume-action-verbs": [
    "checker",
    "resumeKeywordsDb",
    "achievementGenerator",
    "bulletGenerator",
    "summaryGenerator",
    "keywordsGuide",
    "mistakesGuide",
    "knowledgeCenter",
  ],
  "/resume-parsing": [
    "checker",
    "formatGuide",
    "mistakesGuide",
    "howAtsWorks",
    "keywordsFinder",
    "match",
    "resumeObjective",
    "knowledgeCenter",
  ],
  "/resume-objective": [
    "summaryGenerator",
    "checker",
    "resumeKeywordsDb",
    "keywordsGuide",
    "resumeParsing",
    "formatGuide",
    "knowledgeCenter",
    "examples",
  ],
  "/": ["platformHub", "checker", "resumeReview", "matchAnalyzer", "resumeKeywordsDb", "examples"],
  "/resume-optimization-platform": [
    "checker",
    "resumeReview",
    "atsResumeReview",
    "resumeCheckerOnline",
    "completeAtsGuide",
    "knowledgeCenter",
    "resourceHub",
    "examples",
  ],
  "/free-resume-checker-online": [
    "checker",
    "freeAtsScoreChecker",
    "scoreChecker",
    "atsResumeCheckerGuide",
    "resumeKeywordsDb",
    "examples",
  ],
  "/free-ats-score-checker": [
    "checker",
    "resumeCheckerOnline",
    "scoreChecker",
    "atsResumeCheckerGuide",
    "improveScore",
    "methodology",
  ],
  "/resume-checker-online": [
    "checker",
    "resumeCheckerOnline",
    "freeAtsScoreChecker",
    "scoreChecker",
    "examples",
    "matchAnalyzer",
  ],
  "/ats-resume-review": [
    "checker",
    "resumeReview",
    "aiResumeReview",
    "scoreChecker",
    "methodology",
    "rejectedByAts",
    "completeAtsGuide",
    "examples",
  ],
  [RESUME_CHECKER_PATH]: [
    "resumeCheckerOnline",
    "freeAtsScoreChecker",
    "scoreChecker",
    "matchAnalyzer",
    "resumeKeywordsDb",
    "examples",
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
    "completeAtsGuide",
    "methodology",
    "checker",
    "scoreChecker",
    "resumeKeywordsDb",
    "faqCenter",
    "atsGuide",
    "knowledgeCenter",
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
    "completeAtsGuide",
    "checker",
    "knowledgeCenter",
    "formatGuide",
    "keywordsGuide",
    "checklist",
    "careerHub",
    "resourceHub",
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
    "scoreChecker",
    "aiResumeReview",
    "cvChecker",
    "completeAtsGuide",
    "rejectedByAts",
  ],
  "/resume-review": [
    "checker",
    "aiResumeReview",
    "scoreChecker",
    "resumeOptimization",
    "completeAtsGuide",
    "rejectedByAts",
  ],
  "/resume-score-checker": [
    "checker",
    "atsResumeCheckerGuide",
    "aiResumeReview",
    "completeAtsGuide",
    "improveScore",
    "match",
  ],
  "/resume-optimization": [
    "checker",
    "match",
    "completeAtsGuide",
    "tailorResume",
    "whyNoInterviews",
    "rejectedByAts",
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
    "scoreChecker",
    "industryKeywords",
    "match",
    "knowledgeCenter",
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
    "keywordsGuide",
    "scoreChecker",
    "resumeKeywordsDb",
    "knowledgeCenter",
    "careerHub",
  ],
  "/ats-score-explained": [
    "completeAtsGuide",
    "checker",
    "matchScoreGuide",
    "scoreChecker",
    "match",
    "resumeOptimization",
    "resumeKeywordsDb",
    "knowledgeCenter",
  ],
  "/ats-friendly-resume-guide": [
    "checker",
    "formatGuide",
    "keywordsGuide",
    "scoreChecker",
    "resumeKeywordsDb",
    "checklist",
    "knowledgeCenter",
    "careerHub",
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
  "/methodology": ["checker", "howResumeAnalysis", "faqCenter", "atsScoreGuide", "editorialPolicy", "checklist"],
  "/how-resume-analysis-works": ["checker", "methodology", "atsScoreGuide", "scoreChecker", "editorialPolicy", "howAtsWorks"],
  "/editorial-policy": ["about", "methodology", "howResumeAnalysis", "privacy", "contact", "faqCenter"],
  "/faq-center": [
    "methodology",
    "checker",
    "about",
    "careerHub",
    "whyNoInterviews",
    "improveScore",
    "howResumeAnalysis",
    "editorialPolicy",
  ],
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
    "rejectedByAts",
    "commonRejectionReasons",
    "checker",
    "notPassingAts",
    "mistakesGuide",
    "completeAtsGuide",
  ],
  "/resume-rejected-by-ats": [
    "commonRejectionReasons",
    "checker",
    "notPassingAts",
    "whyRejected",
    "resumeReview",
    "completeAtsGuide",
  ],
  "/common-ats-resume-rejection-reasons": [
    "rejectedByAts",
    "checker",
    "notPassingAts",
    "formatGuide",
    "mistakesGuide",
    "completeAtsGuide",
  ],
  "/ai-resume-review": [
    "checker",
    "resumeReview",
    "aiRewrite",
    "scoreChecker",
    "cvChecker",
    "completeAtsGuide",
  ],
  "/cv-checker": [
    "checker",
    "aiResumeReview",
    "resumeReview",
    "formatGuide",
    "scoreChecker",
    "completeAtsGuide",
  ],
  "/complete-guide-ats-resume-optimization": [
    "checker",
    "rejectedByAts",
    "commonRejectionReasons",
    "scoreChecker",
    "resumeReview",
    "aiResumeReview",
  ],
  "/resume-not-passing-ats": [
    "rejectedByAts",
    "commonRejectionReasons",
    "checker",
    "formatGuide",
    "whyRejected",
    "completeAtsGuide",
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
    "completeAtsGuide",
    "howAtsWorks",
  ],
};

const BLOG_POST_KEYS = [
  "checker",
  "whyNoInterviews",
  "whyRejected",
  "keywordsGuide",
  "formatGuide",
  "checklist",
  "completeAtsGuide",
  "methodology",
] as const;

const BLOG_REJECTION_KEYS = [
  "completeAtsGuide",
  "rejectedByAts",
  "commonRejectionReasons",
  "notPassingAts",
  "checker",
  "screeningExplained",
  "whyRejected",
  "improveScore",
] as const;

const BLOG_KEYWORD_KEYS = [
  "keywordTool",
  "keywordsFinder",
  "resumeKeywordsDb",
  "keywordsChecker",
  "match",
  "checker",
  "tailorResume",
  "keywordsGuide",
] as const;

const BLOG_CHECKER_KEYS = [
  "checker",
  "resumeCheckerOnline",
  "freeAtsScoreChecker",
  "scoreChecker",
  "methodology",
  "completeAtsGuide",
  "examples",
  "matchAnalyzer",
] as const;

const PROFESSION_SLUGS = new Set([
  "software-engineer",
  "data-analyst",
  "product-manager",
  "project-manager",
  "hr-manager",
  "marketing-manager",
  "accountant",
  "customer-service",
  "graphic-designer",
  "business-analyst",
]);

function catalogItem(key: string): RelatedResourceItem | undefined {
  return RESOURCE_CATALOG[key];
}

function roleResource(
  slug: string,
  kind: "example" | "keywords" | "guide" | "profession",
  title: string,
  description: string
): RelatedResourceItem {
  const paths = {
    example: `/resume-examples/${slug}`,
    keywords: `/resume-keywords/${slug}`,
    guide: `/ats-resume/${slug}`,
    profession: `/profession/${slug}`,
  };
  return { href: paths[kind], title, description };
}

function getProgrammaticRelatedResources(
  path: string,
  excludeHref?: string
): RelatedResourceItem[] | null {
  const parts = path.split("/").filter(Boolean);
  if (parts.length < 2) return null;

  const [section, slug] = parts;
  if (!slug) return null;

  const items: RelatedResourceItem[] = [];
  const push = (item: RelatedResourceItem) => {
    if (item.href === excludeHref || items.some((i) => i.href === item.href)) return;
    items.push(item);
  };

  if (section === "resume-keywords") {
    const exampleSlug = slug === "business-analyst" ? "data-analyst" : slug;
    const guideSlug = slug === "business-analyst" ? "data-analyst" : slug;
    push(catalogItem("checker")!);
    push(catalogItem("keywordsFinder")!);
    push(catalogItem("match")!);
    push(
      roleResource(
        exampleSlug,
        "example",
        `${slug.replace(/-/g, " ")} resume example`,
        "ATS-friendly sample layout and bullet patterns."
      )
    );
    if (PROFESSION_SLUGS.has(slug)) {
      push(
        roleResource(
          slug,
          "profession",
          `${slug.replace(/-/g, " ")} profession hub`,
          "Example, keywords, and optimization guides connected."
        )
      );
    }
    if (slug !== "business-analyst") {
      push(
        roleResource(
          guideSlug,
          "guide",
          `${slug.replace(/-/g, " ")} ATS guide`,
          "Role-specific formatting and keyword placement."
        )
      );
    }
    push(catalogItem("keywordsGuide")!);
    push(catalogItem("resumeKeywordsDb")!);
    push(catalogItem("checklist")!);
    return items;
  }

  if (section === "resume-examples" || section === "ats-resume") {
    push(catalogItem("checker")!);
    push(
      roleResource(
        slug,
        "keywords",
        `${slug.replace(/-/g, " ")} resume keywords`,
        "Skills, verbs, and ATS phrases for this role."
      )
    );
    if (section === "resume-examples") {
      push(
        roleResource(
          slug,
          "guide",
          `${slug.replace(/-/g, " ")} ATS optimization guide`,
          "Format rules and keyword placement for the role."
        )
      );
    } else {
      push(
        roleResource(
          slug,
          "example",
          `${slug.replace(/-/g, " ")} resume example`,
          "Side-by-side ATS-friendly sample and bullets."
        )
      );
    }
    if (PROFESSION_SLUGS.has(slug)) {
      push(
        roleResource(
          slug,
          "profession",
          `${slug.replace(/-/g, " ")} profession hub`,
          "All role resources in one connected hub."
        )
      );
    }
    push(catalogItem("match")!);
    push(catalogItem("formatGuide")!);
    push(catalogItem("mistakesGuide")!);
    push(catalogItem("examples")!);
    return items;
  }

  if (section === "profession") {
    push(catalogItem("checker")!);
    push(
      roleResource(
        slug,
        "example",
        `${slug.replace(/-/g, " ")} resume example`,
        "ATS-friendly sample for this profession."
      )
    );
    push(
      roleResource(
        slug,
        "keywords",
        `${slug.replace(/-/g, " ")} keywords list`,
        "Searchable skills and verbs for ATS filters."
      )
    );
    push(
      roleResource(
        slug === "business-analyst" ? "data-analyst" : slug,
        "guide",
        `${slug.replace(/-/g, " ")} ATS guide`,
        "Role-specific optimization workflow."
      )
    );
    push(catalogItem("matchAnalyzer")!);
    push(catalogItem("resourceHub")!);
    push(catalogItem("checklist")!);
    push(catalogItem("completeAtsGuide")!);
    return items;
  }

  return null;
}

function getBlogRelatedKeys(path: string): readonly string[] {
  const slug = path.replace(/^\/blog\//, "").toLowerCase();
  if (
    slug.includes("reject") ||
    slug.includes("mistake") ||
    slug.includes("pass-ats") ||
    slug.includes("beat-ats") ||
    slug.includes("filter")
  ) {
    return BLOG_REJECTION_KEYS;
  }
  if (
    slug.includes("keyword") ||
    slug.includes("skill") ||
    slug.includes("tailor")
  ) {
    return BLOG_KEYWORD_KEYS;
  }
  if (
    slug.includes("checker") ||
    slug.includes("score") ||
    slug.includes("scan") ||
    slug.includes("free-resume")
  ) {
    return BLOG_CHECKER_KEYS;
  }
  return BLOG_POST_KEYS;
}

function resolveKeys(path: string): readonly string[] {
  if (path.startsWith("/blog/") && path !== "/blog") return getBlogRelatedKeys(path);
  if (path.startsWith("/profession/")) {
    return [
      "resourceHub",
      "checker",
      "matchAnalyzer",
      "examples",
      "resumeKeywordsDb",
      "checklist",
      "completeAtsGuide",
      "knowledgeCenter",
    ] as const;
  }
  return PATH_RELATED_KEYS[path] ?? DEFAULT_KEYS;
}

export function getRelatedResources(
  path: string,
  options?: { excludeHref?: string; limit?: number }
): RelatedResourceItem[] {
  const limit = options?.limit ?? 8;
  const exclude = options?.excludeHref;
  const seen = new Set<string>();
  const items: RelatedResourceItem[] = [];

  const programmatic = getProgrammaticRelatedResources(path, exclude);
  if (programmatic) {
    for (const item of programmatic) {
      if (seen.has(item.href) || item.href === exclude) continue;
      seen.add(item.href);
      items.push(item);
      if (items.length >= limit) return items;
    }
  }

  for (const key of resolveKeys(path)) {
    const item = RESOURCE_CATALOG[key];
    if (!item || seen.has(item.href) || item.href === exclude) continue;
    seen.add(item.href);
    items.push(item);
    if (items.length >= limit) break;
  }

  return items;
}
