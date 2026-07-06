/**
 * Stable last-modified dates for sitemap.xml.
 * Update path entries when page content materially changes — avoids
 * Google seeing every URL as "just changed" on each deploy.
 */
export const SITEMAP_DEFAULT_LAST_MODIFIED = "2026-07-06";

/** Path-specific overrides (ISO date YYYY-MM-DD). */
export const SITEMAP_PATH_LAST_MODIFIED: Record<string, string> = {
  "": "2026-07-08",
  "/resume-checker": "2026-07-06",
  "/knowledge-center": "2026-07-06",
  "/complete-guide-ats-resume-optimization": "2026-07-06",
  "/resume-rejected-by-ats": "2026-07-06",
  "/why-resume-gets-rejected": "2026-07-06",
  "/how-ats-works": "2026-07-06",
  "/ats-score-explained": "2026-07-06",
  "/common-ats-resume-rejection-reasons": "2026-07-06",
  "/ats-resume-keywords": "2026-07-06",
  "/ats-resume-mistakes": "2026-07-06",
  "/ats-friendly-resume-guide": "2026-07-06",
  "/profession/graphic-designer": "2026-06-03",
  "/profession/business-analyst": "2026-06-03",
  "/free-resume-checker-online": "2026-05-28",
  "/free-ats-score-checker": "2026-05-28",
  "/resume-score-checker": "2026-05-28",
  "/why-resume-not-getting-interviews": "2026-07-03",
  "/resume-screening-explained": "2026-07-03",
  "/resume-keywords-missing": "2026-07-03",
  "/how-to-tailor-resume-for-job-description": "2026-07-03",
  "/resume-mistakes-that-cost-interviews": "2026-07-03",
  "/resume-not-passing-ats": "2026-07-03",
  "/methodology": "2026-07-03",
  "/how-resume-analysis-works": "2026-06-01",
  "/editorial-policy": "2026-06-01",
  "/about": "2026-06-01",
  "/privacy": "2026-05-14",
  "/terms": "2026-05-14",
  "/contact": "2026-05-14",
  "/resource-hub": "2026-06-01",
  "/resume-optimization-platform": "2026-05-28",
  "/ats-resume-checklist-2026": "2026-05-14",
  "/resume-action-verbs": "2026-07-04",
  "/resume-parsing": "2026-07-04",
  "/resume-objective": "2026-07-04",
};

export function getSitemapLastModified(path: string, fallback?: string): Date {
  const normalized = path === "/" ? "" : path;
  const iso =
    SITEMAP_PATH_LAST_MODIFIED[normalized] ??
    fallback ??
    SITEMAP_DEFAULT_LAST_MODIFIED;
  return new Date(`${iso}T00:00:00.000Z`);
}

/** Redirect sources — never list in sitemap (301 targets only). */
export const SITEMAP_EXCLUDED_PATHS = new Set([
  "/ats-score-checker",
  "/resume-checker-online",
  "/ats-resume/marketing-professionals",
  "/ats-resume/accountants",
  "/ats-resume/hr-professionals",
]);
