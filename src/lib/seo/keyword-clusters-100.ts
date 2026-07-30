/**
 * 100 keyword clusters — one primary keyword → one canonical landing page.
 * Prevents cannibalization; used by SEO dashboard, internal linking, and sitemap validation.
 */
export type KeywordClusterCategory =
  | "Resume"
  | "ATS"
  | "CV"
  | "Cover Letter"
  | "Interview"
  | "Career"
  | "Job Search"
  | "LinkedIn"
  | "Recruitment"
  | "HR";

export type KeywordClusterEntry = {
  primaryKeyword: string;
  secondaryKeywords: string[];
  category: KeywordClusterCategory;
  canonicalPath: string;
  searchIntent: "informational" | "commercial" | "transactional" | "navigational";
};

function e(
  primaryKeyword: string,
  category: KeywordClusterCategory,
  canonicalPath: string,
  searchIntent: KeywordClusterEntry["searchIntent"],
  secondaryKeywords: string[] = []
): KeywordClusterEntry {
  return { primaryKeyword, secondaryKeywords, category, canonicalPath, searchIntent };
}

export const KEYWORD_CLUSTERS_100: KeywordClusterEntry[] = [
  // Resume (12)
  e("free resume checker", "Resume", "/", "transactional", ["resume checker free", "check resume free"]),
  e("resume score checker", "Resume", "/ats-score-checker", "transactional", ["resume scoring tool"]),
  e("resume analyzer", "Resume", "/resume-analyzer", "transactional", ["analyze my resume"]),
  e("resume parser", "Resume", "/resume-parser", "transactional", ["resume parsing test"]),
  e("resume keyword checker", "Resume", "/resume-keyword-checker", "transactional", ["keyword scanner"]),
  e("resume optimization", "Resume", "/resume-optimization", "informational", ["optimize resume"]),
  e("resume formatting guide", "Resume", "/ats-resume-format", "informational", ["resume layout"]),
  e("resume action verbs", "Resume", "/resume-action-verbs", "informational", ["power words resume"]),
  e("resume skills list", "Resume", "/resume-skills-library", "informational", ["skills for resume"]),
  e("resume length guide", "Resume", "/resume-length-guide", "informational", ["one page resume"]),
  e("resume file types", "Resume", "/resume-file-types", "informational", ["pdf vs word resume"]),
  e("resume examples", "Resume", "/resume-examples", "informational", ["sample resumes"]),
  // ATS (12)
  e("free ATS resume checker", "ATS", "/", "transactional", ["ATS checker free"]),
  e("ATS resume checker online", "ATS", "/ats-resume-checker-online", "transactional", ["online ATS scan"]),
  e("best ATS resume checker", "ATS", "/", "commercial", ["top ATS checker"]),
  e("ATS score checker", "ATS", "/ats-score-checker", "transactional", ["ATS compatibility score"]),
  e("ATS resume scanner", "ATS", "/resume-checker", "transactional", ["scan resume ATS"]),
  e("how ATS works", "ATS", "/how-ats-works", "informational", ["applicant tracking system"]),
  e("ATS resume format", "ATS", "/ats-resume-format", "informational", ["ATS friendly format"]),
  e("ATS resume mistakes", "ATS", "/ats-resume-mistakes", "informational", ["ATS rejection reasons"]),
  e("ATS keywords", "ATS", "/ats-resume-keywords", "informational", ["ATS keyword list"]),
  e("ATS optimization", "ATS", "/complete-guide-ats-resume-optimization", "informational", ["optimize for ATS"]),
  e("pass ATS screening", "ATS", "/resume-not-passing-ats", "informational", ["beat ATS filters"]),
  e("ATS resume templates", "ATS", "/ats-resume-templates", "informational", ["ATS safe templates"]),
  // CV (8)
  e("CV checker", "CV", "/cv-checker", "transactional", ["check CV ATS"]),
  e("ATS friendly CV", "CV", "/ats-friendly-resume-guide", "informational", ["CV format ATS"]),
  e("CV vs resume", "CV", "/glossary", "informational", ["difference CV resume"]),
  e("CV keywords", "CV", "/resume-keywords", "informational", ["CV keyword list"]),
  e("CV parser", "CV", "/resume-parser", "transactional", ["parse CV online"]),
  e("CV score", "CV", "/ats-score-checker", "transactional", ["CV ATS score"]),
  e("UK CV checker", "CV", "/resume-checker-uk", "transactional", ["British CV ATS"]),
  e("European CV format", "CV", "/resume-checker-germany", "informational", ["Lebenslauf ATS"]),
  // Cover Letter (8)
  e("cover letter generator", "Cover Letter", "/cover-letter-generator", "transactional", ["AI cover letter"]),
  e("cover letter for ATS", "Cover Letter", "/blog/cover-letter-ats-2026", "informational", ["ATS cover letter"]),
  e("cover letter keywords", "Cover Letter", "/cover-letter-generator", "informational", ["cover letter tips"]),
  e("cover letter examples", "Cover Letter", "/cover-letter-generator", "informational", ["sample cover letter"]),
  e("cover letter match job", "Cover Letter", "/resume-job-description-match", "transactional", ["tailor cover letter"]),
  e("cover letter length", "Cover Letter", "/blog/cover-letter-ats-2026", "informational", ["how long cover letter"]),
  e("cover letter format", "Cover Letter", "/blog/cover-letter-ats-2026", "informational", ["cover letter layout"]),
  e("free cover letter tool", "Cover Letter", "/cover-letter-generator", "transactional", ["cover letter free"]),
  // Interview (10)
  e("interview question generator", "Interview", "/interview-question-generator", "transactional", ["AI interview prep"]),
  e("behavioral interview questions", "Interview", "/interview-question-generator", "informational", ["STAR method"]),
  e("technical interview prep", "Interview", "/resume-checker/software-engineer", "informational", ["coding interview"]),
  e("interview after ATS", "Interview", "/why-resume-not-getting-interviews", "informational", ["no interviews"]),
  e("phone screen tips", "Interview", "/blog/remote-job-resume-tips", "informational", ["recruiter call"]),
  e("salary negotiation resume", "Interview", "/resume-optimization", "informational", ["negotiation prep"]),
  e("interview STAR examples", "Interview", "/interview-question-generator", "informational", ["STAR answers"]),
  e("common interview mistakes", "Interview", "/resume-mistakes-that-cost-interviews", "informational", ["interview errors"]),
  e("panel interview prep", "Interview", "/interview-question-generator", "informational", ["panel interview"]),
  e("final interview tips", "Interview", "/career-success-hub", "informational", ["final round"]),
  // Career (10)
  e("career change resume", "Career", "/resume-optimization", "informational", ["career switch"]),
  e("career success hub", "Career", "/career-success-hub", "navigational", ["career resources"]),
  e("fresh graduate resume", "Career", "/resume-checker/freshers", "informational", ["graduate CV"]),
  e("student resume ATS", "Career", "/resume-checker/students", "informational", ["college resume"]),
  e("mid career resume", "Career", "/resume-length-guide", "informational", ["experienced professional"]),
  e("executive resume ATS", "Career", "/resume-checker/manager", "informational", ["leadership resume"]),
  e("remote job resume", "Career", "/blog/remote-job-resume-tips", "informational", ["work from home"]),
  e("career gap resume", "Career", "/blog/resume-gap-employment-ats-2026", "informational", ["employment gap"]),
  e("promotion resume update", "Career", "/how-to-improve-resume-score", "informational", ["internal promotion"]),
  e("portfolio and resume", "Career", "/resume-checker/graphic-designer", "informational", ["creative portfolio"]),
  // Job Search (12)
  e("job application resume tips", "Job Search", "/complete-guide-ats-resume-optimization", "informational", ["apply jobs"]),
  e("tailor resume job description", "Job Search", "/how-to-tailor-resume-for-job-description", "informational", ["match posting"]),
  e("resume match score", "Job Search", "/resume-job-description-match", "transactional", ["JD match %"]),
  e("job search USA", "Job Search", "/resume-checker-usa", "informational", ["US jobs"]),
  e("job search India", "Job Search", "/resume-checker-india", "informational", ["India Naukri"]),
  e("job search UK", "Job Search", "/resume-checker-uk", "informational", ["UK CV jobs"]),
  e("job search Canada", "Job Search", "/resume-checker-canada", "informational", ["Canadian resume"]),
  e("job search UAE", "Job Search", "/resume-checker-uae", "informational", ["Dubai jobs"]),
  e("job search Australia", "Job Search", "/resume-checker-australia", "informational", ["Australian resume"]),
  e("apply online resume", "Job Search", "/free-resume-checker-online", "transactional", ["online apply"]),
  e("multiple job applications", "Job Search", "/blog/tailor-resume-every-job-ats-2026", "informational", ["batch apply"]),
  e("job portal resume upload", "Job Search", "/resume-file-types", "informational", ["portal PDF"]),
  // LinkedIn (8)
  e("LinkedIn resume ATS", "LinkedIn", "/blog/linkedin-resume-ats-2026", "informational", ["LinkedIn PDF export"]),
  e("LinkedIn headline resume", "LinkedIn", "/resume-headline-generator", "informational", ["headline keywords"]),
  e("LinkedIn Easy Apply resume", "LinkedIn", "/ats-resume-checker-online", "transactional", ["Easy Apply tips"]),
  e("LinkedIn profile vs resume", "LinkedIn", "/blog/linkedin-resume-ats-2026", "informational", ["profile resume sync"]),
  e("LinkedIn keywords job", "LinkedIn", "/resume-keywords", "informational", ["LinkedIn SEO"]),
  e("optimize LinkedIn for recruiters", "LinkedIn", "/ai-resume-review", "informational", ["recruiter search"]),
  e("LinkedIn summary ATS", "LinkedIn", "/resume-summary-generator", "informational", ["about section"]),
  e("LinkedIn job search 2026", "LinkedIn", "/blog/remote-job-resume-tips", "informational", ["LinkedIn jobs"]),
  // Recruitment (10)
  e("recruiter resume scan", "Recruitment", "/resume-screening-explained", "informational", ["recruiter workflow"]),
  e("resume screening process", "Recruitment", "/resume-screening-explained", "informational", ["screening stages"]),
  e("hiring statistics", "Recruitment", "/hiring-statistics", "informational", ["recruitment data"]),
  e("ATS rejection rate", "Recruitment", "/ats-statistics", "informational", ["ATS filter stats"]),
  e("time to hire resume", "Recruitment", "/hiring-statistics", "informational", ["hiring timeline"]),
  e("recruiter keyword search", "Recruitment", "/resume-keywords", "informational", ["boolean search"]),
  e("talent acquisition ATS", "Recruitment", "/how-ats-works", "informational", ["TA technology"]),
  e("candidate screening checklist", "Recruitment", "/ats-resume-checklist-2026", "informational", ["screening checklist"]),
  e("qualified but rejected", "Recruitment", "/blog/qualified-candidates-rejected-2026", "informational", ["false negative"]),
  e("resume benchmarks", "Recruitment", "/resume-benchmarks", "informational", ["score benchmarks"]),
  // HR (10)
  e("HR resume checker", "HR", "/resume-checker/hr-manager", "transactional", ["HR professional resume"]),
  e("HRIS resume keywords", "HR", "/resume-checker/hr-manager", "informational", ["Workday HRIS"]),
  e("employee relations resume", "HR", "/resume-checker/hr-manager", "informational", ["ER keywords"]),
  e("talent acquisition resume", "HR", "/resume-checker/hr-manager", "informational", ["TA resume"]),
  e("HR compliance resume", "HR", "/resume-checker/hr-manager", "informational", ["compliance ATS"]),
  e("people operations resume", "HR", "/resume-checker/hr-manager", "informational", ["People Ops"]),
  e("HR generalist resume", "HR", "/resume-checker/hr-manager", "informational", ["HR generalist"]),
  e("recruiter vs HR resume", "HR", "/glossary", "informational", ["HR recruiter difference"]),
  e("SHRM resume keywords", "HR", "/resume-keywords/hr-manager", "informational", ["SHRM CP"]),
  e("HR career hub", "HR", "/career-success-hub", "navigational", ["HR resources"]),
];

/** Lookup canonical page for a keyword — returns undefined if unmapped (avoid duplicate targets). */
export function getCanonicalPathForKeyword(keyword: string): string | undefined {
  const lower = keyword.toLowerCase().trim();
  const hit = KEYWORD_CLUSTERS_100.find((k) => k.primaryKeyword.toLowerCase() === lower);
  return hit?.canonicalPath;
}

export function getClustersByCategory(category: KeywordClusterCategory): KeywordClusterEntry[] {
  return KEYWORD_CLUSTERS_100.filter((k) => k.category === category);
}

export function getAllCanonicalPaths(): string[] {
  return Array.from(new Set(KEYWORD_CLUSTERS_100.map((k) => k.canonicalPath)));
}

/** Detect keywords pointing at different URLs — should be empty if map is clean. */
export function findCannibalizationConflicts(): { keyword: string; paths: string[] }[] {
  const byKeyword = new Map<string, Set<string>>();
  for (const entry of KEYWORD_CLUSTERS_100) {
    const key = entry.primaryKeyword.toLowerCase();
    if (!byKeyword.has(key)) byKeyword.set(key, new Set());
    byKeyword.get(key)!.add(entry.canonicalPath);
  }
  return Array.from(byKeyword.entries())
    .filter(([, paths]) => paths.size > 1)
    .map(([keyword, paths]) => ({ keyword, paths: Array.from(paths) }));
}

export const KEYWORD_CLUSTER_CATEGORIES: KeywordClusterCategory[] = [
  "Resume",
  "ATS",
  "CV",
  "Cover Letter",
  "Interview",
  "Career",
  "Job Search",
  "LinkedIn",
  "Recruitment",
  "HR",
];
