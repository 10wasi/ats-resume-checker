import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";
import type { FaqItem } from "@/lib/seo/faq";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import {
  INDUSTRY_ROLE_CONFIGS,
  getIndustryConfig,
  getIndustrySlugs,
} from "@/lib/content/sprint3/industry-configs";

export type ResumeCheckerRoleEntry = {
  slug: string;
  path: string;
  roleLabel: string;
  ctr: PageCtrMeta;
  intro: string;
  body: string;
  faqItems: FaqItem[];
  keywordFocus: string[];
};

function defaultFaq(roleLabel: string): FaqItem[] {
  const lower = roleLabel.toLowerCase();
  return [
    {
      question: `How do I check my ${lower} resume for ATS?`,
      answer:
        "Upload your PDF to the free ATS resume checker, review parser output, paste the job description for keyword gaps, then fix format and bullets before re-scanning.",
    },
    {
      question: `Which keywords matter for ${lower} ATS filters?`,
      answer:
        "Mirror tools, certifications, and outcome metrics from the specific posting—exact spelling matters more than generic duty language.",
    },
    {
      question: "Is a creative resume layout safe for ATS?",
      answer:
        "Use a text-first single-column PDF for applications; keep portfolio or visual work as a separate link. Run a parser test before every batch apply.",
    },
    {
      question: "Does ResumeIQ store my resume?",
      answer:
        "ResumeIQ processes uploads per request. See the privacy policy for data handling; no account is required for a baseline scan.",
    },
  ];
}

export const RESUME_CHECKER_ROLES: ResumeCheckerRoleEntry[] = INDUSTRY_ROLE_CONFIGS.map(
  (c) => ({
    slug: c.slug,
    path: `/resume-checker/${c.slug}`,
    roleLabel: c.roleLabel,
    intro: c.intro,
    body: c.body,
    keywordFocus: c.keywordFocus,
    faqItems: defaultFaq(c.roleLabel),
    ctr: {
      title: ctrTitle(`ATS Resume Checker for ${c.roleLabel}`, c.ctrHook),
      description: ctrMeta(
        `Free ATS resume checker for ${c.roleLabel.toLowerCase()}s — parser test, keyword match & score vs your job post. Fix before you apply.`
      ),
      h1: `ATS Resume Checker for ${c.roleLabel}`,
      primaryKeyword: `ATS resume checker for ${c.roleLabel.toLowerCase()}`,
      richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization", "WebPage"],
    },
  })
);

export function getResumeCheckerRoleSlugs(): string[] {
  return getIndustrySlugs();
}

export function getResumeCheckerRole(slug: string): ResumeCheckerRoleEntry | undefined {
  const config = getIndustryConfig(slug);
  if (!config) return undefined;
  return RESUME_CHECKER_ROLES.find((r) => r.slug === slug);
}

/** Legacy slugs → canonical industry slug */
export const ROLE_ALIASES: Record<string, string> = {
  "marketing-manager": "marketing-manager",
  "business-analyst": "data-analyst",
  "customer-service": "manager",
};

export function resolveRoleSlug(slug: string): string {
  return ROLE_ALIASES[slug] ?? slug;
}
