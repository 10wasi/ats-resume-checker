import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";
import type { FaqItem } from "@/lib/seo/faq";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";
import { INDUSTRY_ROLE_CONFIGS } from "@/lib/content/sprint3/industry-configs";
import {
  PROGRAMMATIC_PROFESSION_CONFIGS,
  getProgrammaticProfessionSlugs,
} from "@/lib/content/sprint3/programmatic-professions";

type RoleConfig = (typeof INDUSTRY_ROLE_CONFIGS)[number];

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

const ALL_CONFIGS: RoleConfig[] = [...INDUSTRY_ROLE_CONFIGS, ...PROGRAMMATIC_PROFESSION_CONFIGS];

function defaultFaq(roleLabel: string): FaqItem[] {
  const lower = roleLabel.toLowerCase();
  return [
    {
      question: `How do I check my ${lower} resume for ATS?`,
      answer:
        "Upload your PDF to the free AI-powered ATS resume checker for instant parser preview and keyword gaps—no signup required.",
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

function toEntry(c: RoleConfig): ResumeCheckerRoleEntry {
  return {
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
        `Free AI ATS resume checker for ${c.roleLabel.toLowerCase()}s — instant results, parser test & keyword match. No signup. Professional analysis.`
      ),
      h1: `ATS Resume Checker for ${c.roleLabel}`,
      primaryKeyword: `ATS resume checker for ${c.roleLabel.toLowerCase()}`,
      richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization", "WebPage"],
    },
  };
}

export const RESUME_CHECKER_ROLES: ResumeCheckerRoleEntry[] = ALL_CONFIGS.map(toEntry);

export function getResumeCheckerRoleSlugs(): string[] {
  return ALL_CONFIGS.map((c) => c.slug);
}

export function getResumeCheckerRole(slug: string): ResumeCheckerRoleEntry | undefined {
  const resolved = resolveRoleSlug(slug);
  return RESUME_CHECKER_ROLES.find((r) => r.slug === resolved);
}

export function getIndustryConfigMerged(slug: string): RoleConfig | undefined {
  return ALL_CONFIGS.find((c) => c.slug === slug);
}

/** Legacy & plural slugs → canonical profession slug */
export const ROLE_ALIASES: Record<string, string> = {
  "business-analyst": "data-analyst",
  "customer-service": "manager",
  nurses: "nurse",
  doctors: "doctor",
  developers: "developer",
  designers: "designer",
  engineers: "engineer",
  accountants: "accountant",
  teachers: "teachers",
  students: "students",
  freshers: "freshers",
  managers: "manager",
  "software-engineers": "software-engineer",
  "graphic-designers": "graphic-designer",
  "hr-professionals": "hr-manager",
  marketing: "marketing-manager",
  accounting: "accountant",
};

export function resolveRoleSlug(slug: string): string {
  return ROLE_ALIASES[slug] ?? slug;
}

export { getProgrammaticProfessionSlugs };
