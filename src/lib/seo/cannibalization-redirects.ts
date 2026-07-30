/**
 * Canonical URL ownership — one primary intent per live URL.
 * Redirect sources are 301 targets in next.config.mjs; never list sources in sitemap.
 */
export const CANONICAL_URL_OWNERS = {
  /** Head term: free ATS resume checker, best ATS resume checker, free resume checker */
  freeAtsResumeChecker: "/",
  /** Tool upload: ATS resume scanner */
  atsResumeScanner: "/resume-checker",
  /** Score compatibility % */
  atsScoreChecker: "/ats-score-checker",
  /** Keyword gap scan */
  resumeKeywordChecker: "/resume-keyword-checker",
  /** Online scan modifier */
  atsResumeCheckerOnline: "/ats-resume-checker-online",
  /** Free online apply modifier */
  freeResumeCheckerOnline: "/free-resume-checker-online",
  /** Authoritative scoring methodology */
  methodology: "/methodology",
  /** Analysis pipeline (ex-/our-algorithm) */
  howResumeAnalysisWorks: "/how-resume-analysis-works",
} as const;

/** Paths that 301 to a canonical owner — excluded from sitemap. */
export const CANNIBALIZATION_REDIRECT_SOURCES = [
  "/free-ats-resume-checker",
  "/resume-score-checker",
  "/free-ats-score-checker",
  "/resume-keywords-checker",
  "/how-we-score-resumes",
  "/our-algorithm",
] as const;

export type CannibalizationRedirectSource = (typeof CANNIBALIZATION_REDIRECT_SOURCES)[number];

export const CANNIBALIZATION_REDIRECT_MAP: Record<
  CannibalizationRedirectSource,
  string
> = {
  "/free-ats-resume-checker": CANONICAL_URL_OWNERS.freeAtsResumeChecker,
  "/resume-score-checker": CANONICAL_URL_OWNERS.atsScoreChecker,
  "/free-ats-score-checker": CANONICAL_URL_OWNERS.atsScoreChecker,
  "/resume-keywords-checker": CANONICAL_URL_OWNERS.resumeKeywordChecker,
  "/how-we-score-resumes": CANONICAL_URL_OWNERS.methodology,
  "/our-algorithm": CANONICAL_URL_OWNERS.howResumeAnalysisWorks,
};
