/**
 * Keyword ownership map — one primary keyword per URL to prevent cannibalization.
 * Homepage owns "Free ATS Resume Checker"; cluster landings own secondary intents.
 */
export const KEYWORD_CLUSTER_MAP = [
  { path: "/", primary: "Free ATS Resume Checker", secondary: ["AI resume checker", "ATS resume scanner"] },
  { path: "/resume-checker", primary: "ATS Resume Checker", secondary: ["upload resume free", "resume compatibility checker"] },
  { path: "/free-ats-resume-checker", primary: "Free ATS Resume Checker", secondary: ["free ATS scan", "no signup resume checker"] },
  { path: "/ats-resume-checker-online", primary: "ATS Resume Checker Online", secondary: ["online resume scanner", "web ATS tool"] },
  { path: "/resume-keyword-checker", primary: "Resume Keyword Checker", secondary: ["resume keyword scanner", "ATS keyword gaps"] },
  { path: "/ats-score-checker", primary: "Resume ATS Score", secondary: ["ATS score checker", "compatibility score"] },
  { path: "/resume-analyzer", primary: "Resume Analyzer", secondary: ["AI resume analysis", "resume analysis tool"] },
  { path: "/resume-parser", primary: "Resume Parser", secondary: ["ATS parser test", "extract resume text"] },
  { path: "/resume-optimization", primary: "Resume Optimization", secondary: ["ATS friendly resume", "optimize resume for ATS"] },
  { path: "/free-resume-checker-online", primary: "Free Resume Checker Online", secondary: ["check resume online"] },
  { path: "/resume-job-description-match", primary: "Resume Match Score", secondary: ["job description match", "tailor resume"] },
] as const;
