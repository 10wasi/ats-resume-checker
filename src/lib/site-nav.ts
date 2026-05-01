/** Canonical resume / ATS tool path — one entry point for analysis. */
export const RESUME_CHECKER_PATH = "/resume-checker" as const;

/** Internal routes and labels — edit here to update links app-wide. */
export type SiteNavItem = { readonly href: string; readonly label: string };

/** Product links (footer + dashboard footer). */
export const SITE_TOOLS: SiteNavItem[] = [
  { href: RESUME_CHECKER_PATH, label: "Resume & ATS checker" },
  { href: "/blog", label: "Blog" },
];

/** Sticky marketing header + mobile nav strip. */
export const SITE_MARKETING_NAV: SiteNavItem[] = [
  { href: RESUME_CHECKER_PATH, label: "Resume checker" },
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
