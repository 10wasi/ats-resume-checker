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
      title: "Project Manager Resume — ATS Guide & Example",
      description:
        "Project manager resume for ATS: Agile, budget & stakeholder keywords with proof. Example, mistakes & free resume checker.",
      h1: "Project Manager Resume: ATS-Friendly Guide",
      primaryKeyword: "project manager resume",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "PM postings blend methodology, scale, and delivery metrics. This page shows an ATS-friendly project manager resume that recruiters can scan fast.",
  },
  {
    slug: "product-manager",
    path: "/ats-resume/product-manager",
    exampleSlug: "product-manager",
    breadcrumbLabel: "Product managers",
    ctr: {
      title: "Product Manager Resume — ATS Guide & Example",
      description:
        "Product manager resume for ATS: roadmap, OKRs, discovery & SQL keywords. Example, tips & free ATS Resume Checker.",
      h1: "Product Manager Resume: ATS-Friendly Guide",
      primaryKeyword: "product manager resume",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "Product roles filter on shipping proof, experimentation, and metrics—not vision decks. See how to structure a product manager resume parsers and PMs can search.",
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
  {
    slug: "marketing-manager",
    path: "/ats-resume/marketing-manager",
    exampleSlug: "marketing-manager",
    breadcrumbLabel: "Marketing managers",
    ctr: {
      title: "Marketing Manager Resume — ATS Guide & Example",
      description:
        "Marketing manager resume for ATS: SEO, campaigns, ROI & CRM keywords. Example, mistakes & free checker.",
      h1: "Marketing Manager Resume: ATS-Friendly Guide",
      primaryKeyword: "marketing manager resume",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "Marketing resumes need channel proof and numbers. This guide shows keyword placement for marketing manager resumes that parse cleanly.",
  },
  {
    slug: "accountant",
    path: "/ats-resume/accountant",
    exampleSlug: "accountant",
    breadcrumbLabel: "Accountants",
    ctr: {
      title: "Accountant Resume — ATS Guide & Example",
      description:
        "Accountant resume for ATS: GAAP, reconciliations & ERP keywords with proof. Example + free ATS Resume Checker.",
      h1: "Accountant Resume: ATS-Friendly Guide",
      primaryKeyword: "accountant resume",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "Finance postings search GAAP, close cycles, and ERP systems. Build an accountant resume that surfaces credentials and parse-friendly structure.",
  },
  {
    slug: "hr-manager",
    path: "/ats-resume/hr-manager",
    exampleSlug: "hr-manager",
    breadcrumbLabel: "HR managers",
    ctr: {
      title: "HR Manager Resume — ATS Guide & Example",
      description:
        "HR manager resume for ATS: talent acquisition, HRIS & employee relations keywords. Example + free checker.",
      h1: "HR Manager Resume: ATS-Friendly Guide",
      primaryKeyword: "HR manager resume",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "HR manager resumes must show hiring volume, HRIS tools, and policy work—not generic people skills. See an ATS-friendly example.",
  },
  {
    slug: "graphic-designer",
    path: "/ats-resume/graphic-designer",
    exampleSlug: "graphic-designer",
    breadcrumbLabel: "Graphic designers",
    ctr: {
      title: "Graphic Designer Resume — ATS Guide & Example",
      description:
        "Graphic designer resume for ATS: Adobe CC, brand systems & campaign keywords. Plain-layout example + free checker.",
      h1: "Graphic Designer Resume: ATS-Friendly Guide",
      primaryKeyword: "graphic designer resume",
      richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
    },
    roleIntro:
      "Creative portfolios impress humans; online applications need a plain ATS version. Learn how graphic designer resumes can list tools and outcomes without breaking parsers.",
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
