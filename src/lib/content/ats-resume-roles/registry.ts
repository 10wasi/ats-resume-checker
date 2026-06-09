import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";
import { getResumeExampleBySlug } from "@/lib/content/resume-examples/registry";
import type { ResumeExampleEntry } from "@/lib/content/resume-examples/types";

export const ATS_RESUME_ROLES_PATH = "/ats-resume" as const;

export type AtsResumeRoleEntry = {
  slug: string;
  path: string;
  exampleSlug: string;
  breadcrumbLabel: string;
  ctr: PageCtrMeta;
  roleIntro: string;
};

export const ATS_RESUME_ROLES: AtsResumeRoleEntry[] = [
  {
    slug: "software-engineer",
    path: "/ats-resume/software-engineer",
    exampleSlug: "software-engineer",
    breadcrumbLabel: "Software engineers",
    ctr: {
      title: "ATS Resume for Software Engineers — Guide & Example",
      description:
        "ATS resume guide for software engineers: example, keywords, format tips. Test your developer resume free with our ATS Resume Checker.",
      h1: "ATS Resume for Software Engineers",
      primaryKeyword: "ATS resume software engineer",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "Hiring pipelines search for stack terms before a human reads your bullets. This guide shows how to build an ATS-friendly software engineer resume that parses cleanly.",
  },
  {
    slug: "data-analyst",
    path: "/ats-resume/data-analyst",
    exampleSlug: "data-analyst",
    breadcrumbLabel: "Data analysts",
    ctr: {
      title: "ATS Resume for Data Analysts — Guide & Example",
      description:
        "ATS resume for data analysts: SQL, Python, BI tools, and metrics that parse. Free ATS Resume Checker and job match analyzer.",
      h1: "ATS Resume for Data Analysts",
      primaryKeyword: "ATS resume data analyst",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "Recruiters filter on SQL, Python, and dashboard tools. Learn how data analyst resumes should surface proof—not keyword dumps.",
  },
  {
    slug: "project-manager",
    path: "/ats-resume/project-manager",
    exampleSlug: "project-manager",
    breadcrumbLabel: "Project managers",
    ctr: {
      title: "ATS Resume for Project Managers — ATS Guide",
      description:
        "ATS resume for project managers: Agile, stakeholder, budget keywords with proof. Example + optimization tips + free checker.",
      h1: "ATS Resume for Project Managers",
      primaryKeyword: "ATS resume project manager",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "PM postings blend methodology, scale, and delivery metrics. This page shows an ATS-friendly project manager resume that recruiters can scan fast.",
  },
  {
    slug: "marketing-professionals",
    path: "/ats-resume/marketing-professionals",
    exampleSlug: "marketing-manager",
    breadcrumbLabel: "Marketing professionals",
    ctr: {
      title: "ATS Resume for Marketing Professionals — Guide",
      description:
        "ATS resume for marketing managers: SEO, campaigns, ROI metrics, and CRM keywords. Example + free ATS Resume Checker.",
      h1: "ATS Resume for Marketing Professionals",
      primaryKeyword: "ATS resume marketing",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "Marketing resumes need channel proof and numbers—not adjectives. See how to place SEO, paid, and pipeline keywords for ATS visibility.",
  },
  {
    slug: "customer-service",
    path: "/ats-resume/customer-service",
    exampleSlug: "customer-service",
    breadcrumbLabel: "Customer service",
    ctr: {
      title: "ATS Resume for Customer Service — ATS Example",
      description:
        "ATS resume for customer service: CSAT, CRM, ticket volume metrics. Example, tips, and free resume match tool.",
      h1: "ATS Resume for Customer Service Professionals",
      primaryKeyword: "ATS resume customer service",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "Support roles filter on CRM tools, CSAT, and handle time. Build a customer service resume parsers and hiring managers can search.",
  },
  {
    slug: "accountants",
    path: "/ats-resume/accountants",
    exampleSlug: "accountant",
    breadcrumbLabel: "Accountants",
    ctr: {
      title: "ATS Resume for Accountants — ATS-Friendly Example",
      description:
        "ATS resume for accountants: GAAP, reconciliations, ERP keywords with proof. Example + free ATS Resume Checker.",
      h1: "ATS Resume for Accountants",
      primaryKeyword: "ATS resume accountant",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "Finance postings search GAAP, close cycles, and ERP names. This accountant resume example shows parse-friendly structure and keyword placement.",
  },
  {
    slug: "hr-professionals",
    path: "/ats-resume/hr-professionals",
    exampleSlug: "hr-manager",
    breadcrumbLabel: "HR professionals",
    ctr: {
      title: "ATS Resume for HR Professionals — Guide & Example",
      description:
        "ATS resume for HR managers: talent acquisition, HRIS, employee relations. Example + optimization tips + free checker.",
      h1: "ATS Resume for HR Professionals",
      primaryKeyword: "ATS resume HR",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "HR resumes must signal HRIS fluency, hiring volume, and compliance—not generic people skills. See a working ATS example.",
  },
];

export function getAtsResumeRole(slug: string): AtsResumeRoleEntry | undefined {
  return ATS_RESUME_ROLES.find((r) => r.slug === slug);
}

export function getAtsResumeRoleSlugs(): string[] {
  return ATS_RESUME_ROLES.map((r) => r.slug);
}

export function resolveRoleExample(role: AtsResumeRoleEntry): ResumeExampleEntry | undefined {
  return getResumeExampleBySlug(role.exampleSlug);
}
