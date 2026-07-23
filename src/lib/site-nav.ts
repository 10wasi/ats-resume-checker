/** Canonical resume / ATS tool path — one entry point for analysis. */
export const RESUME_CHECKER_PATH = "/resume-checker" as const;

/** SEO pillar paths — internal linking anchors. */
export const ATS_RESUME_CHECKER_GUIDE_PATH = "/ats-resume-checker" as const;
export const RESUME_MATCH_ANALYZER_PATH = "/resume-job-description-match" as const;
export const RESUME_KEYWORD_TOOL_PATH = "/resume-keyword-tool" as const;
export const RESUME_EXAMPLES_PATH = "/resume-examples" as const;
export const ATS_GUIDE_PATH = "/ats-guide" as const;
export const HOW_ATS_WORKS_PATH = "/how-ats-works" as const;

/** Internal routes and labels — edit here to update links app-wide. */
export type SiteNavItem = { readonly href: string; readonly label: string };

/** Product links (footer + dashboard footer). */
export const SITE_TOOLS: SiteNavItem[] = [
  { href: "/resume-optimization-platform", label: "Optimization platform" },
  { href: "/free-resume-checker-online", label: "Free resume checker online" },
  { href: "/free-ats-score-checker", label: "Free ATS score checker" },
  { href: "/ats-resume-review", label: "ATS resume review" },
  { href: RESUME_CHECKER_PATH, label: "ATS Resume Checker" },
  { href: "/resume-job-description-match", label: "Resume match analyzer" },
  { href: "/resume-keyword-tool", label: "Resume keyword tool" },
  { href: "/resume-job-description-match", label: "Resume job match tool" },
  { href: "/resume-keywords", label: "Resume keywords database" },
  { href: "/ats-keywords-finder", label: "ATS keywords finder" },
  { href: "/resume-bullet-generator", label: "Resume bullet generator" },
  { href: "/resume-skills-analyzer", label: "Resume skills analyzer" },
  { href: "/resume-summary-generator", label: "Resume summary generator" },
  { href: "/resume-achievement-generator", label: "Resume achievement generator" },
  { href: "/ai-resume-rewrite", label: "AI resume rewrite" },
  { href: "/career-success-hub", label: "Career Success Hub" },
  { href: "/resource-hub", label: "Resource Hub" },
  { href: "/knowledge-center", label: "ATS Knowledge Center" },
  { href: "/resume-examples", label: "Resume examples library" },
  { href: "/ats-guide", label: "ATS guide hub" },
  { href: "/how-ats-works", label: "How ATS works" },
  { href: "/ats-resume-hub", label: "ATS resume hub" },
  { href: "/ultimate-ats-resume-guide", label: "Ultimate ATS guide" },
  { href: "/ats-resume-checklist-2026", label: "ATS resume checklist" },
  { href: "/blog", label: "Blog" },
];

/** High-intent SEO landing pages (footer resources column). */
export const SITE_CAREER_PAGES: SiteNavItem[] = [
  { href: "/why-resume-not-getting-interviews", label: "Why no interviews?" },
  { href: "/why-resume-gets-rejected", label: "Why resume gets rejected" },
  { href: "/resume-rejected-by-ats", label: "Resume rejected by ATS" },
  { href: "/common-ats-resume-rejection-reasons", label: "ATS rejection reasons" },
  { href: "/complete-guide-ats-resume-optimization", label: "Complete ATS guide" },
  { href: "/ai-resume-review", label: "AI resume review" },
  { href: "/cv-checker", label: "CV checker" },
  { href: "/how-to-tailor-resume-for-job-description", label: "Tailor resume for job" },
  { href: "/resume-screening-explained", label: "Resume screening explained" },
  { href: "/resume-review", label: "Resume review" },
  { href: "/resume-optimization", label: "Resume optimization guide" },
  { href: "/resume-match-score", label: "Resume match score explained" },
  { href: "/resume-score-checker", label: "Resume score checker" },
  { href: "/free-resume-checker-online", label: "Free resume checker online" },
  { href: "/free-ats-score-checker", label: "Free ATS score checker" },
  { href: "/ats-resume-checker", label: "ATS resume checker guide" },
  { href: "/resume-action-verbs", label: "Resume action verbs" },
  { href: "/resume-parsing", label: "Resume parsing explained" },
  { href: "/resume-objective", label: "Resume objective vs summary" },
];

/** Sticky marketing header — keep ≤5 items; checker is the header CTA. */
export const SITE_MARKETING_NAV: SiteNavItem[] = [
  { href: "/resume-optimization-platform", label: "Platform" },
  { href: "/resource-hub", label: "Guides" },
  { href: "/blog", label: "Blog" },
  { href: "/about", label: "About" },
];

/** Extra links shown in mobile drawer only (keeps desktop header clean). */
export const SITE_MARKETING_NAV_MOBILE: SiteNavItem[] = [
  { href: "/career-success-hub", label: "Career Hub" },
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
  { href: "/how-ats-works", label: "How ATS works" },
  { href: "/how-resume-analysis-works", label: "How resume analysis works" },
  { href: "/methodology", label: "Methodology" },
  { href: "/editorial-policy", label: "Editorial policy" },
  { href: "/faq-center", label: "FAQ Center" },
  { href: "/resource-hub", label: "Resource Hub" },
  { href: "/contact", label: "Contact" },
];

export const SITE_LEGAL: SiteNavItem[] = [
  { href: "/privacy", label: "Privacy" },
  { href: "/terms", label: "Terms" },
];
