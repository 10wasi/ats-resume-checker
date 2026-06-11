/** Canonical resume / ATS tool path — one entry point for analysis. */
export const RESUME_CHECKER_PATH = "/resume-checker" as const;

/** Internal routes and labels — edit here to update links app-wide. */
export type SiteNavItem = { readonly href: string; readonly label: string };

/** Product links (footer + dashboard footer). */
export const SITE_TOOLS: SiteNavItem[] = [
  { href: RESUME_CHECKER_PATH, label: "Resume & ATS checker" },
  { href: "/resume-job-description-match", label: "Resume job match analyzer" },
  { href: "/ats-keywords-finder", label: "ATS keywords finder" },
  { href: "/resume-bullet-generator", label: "Resume bullet generator" },
  { href: "/ai-resume-rewrite", label: "AI resume rewrite" },
  { href: "/career-success-hub", label: "Career Success Hub" },
  { href: "/knowledge-center", label: "ATS Knowledge Center" },
  { href: "/resume-examples", label: "Resume examples library" },
  { href: "/ats-resume-hub", label: "ATS resume hub" },
  { href: "/ultimate-ats-resume-guide", label: "Ultimate ATS guide" },
  { href: "/ats-resume-checklist-2026", label: "ATS resume checklist" },
  { href: "/blog", label: "Blog" },
];

/** High-intent SEO landing pages (footer resources column). */
export const SITE_CAREER_PAGES: SiteNavItem[] = [
  { href: "/resume-review", label: "Resume review" },
  { href: "/resume-optimization", label: "Resume optimization" },
  { href: "/resume-score-checker", label: "Resume score checker" },
  { href: "/resume-keywords-checker", label: "Resume keywords checker" },
  { href: "/ats-resume-checker", label: "ATS resume checker guide" },
];

/** Sticky marketing header + mobile nav strip. */
export const SITE_MARKETING_NAV: SiteNavItem[] = [
  { href: RESUME_CHECKER_PATH, label: "Resume checker" },
  { href: "/career-success-hub", label: "Career Hub" },
  { href: "/knowledge-center", label: "Resources" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

/** Dashboard chrome (tool pages): Overview first; blog as "Resources". */
export const SITE_DASHBOARD_NAV: SiteNavItem[] = [
  { href: "/", label: "Overview" },
  { href: RESUME_CHECKER_PATH, label: "Resume checker" },
  { href: "/blog", label: "Resources" },
  { href: "/about", label: "Company" },
  { href: "/contact", label: "Contact" },
];

export const SITE_COMPANY: SiteNavItem[] = [
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export const SITE_LEGAL: SiteNavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
