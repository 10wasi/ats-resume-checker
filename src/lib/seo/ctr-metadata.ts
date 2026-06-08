import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";

/** CTR-optimized page metadata — titles ≤60 chars, descriptions ≤155 chars. */
export type PageCtrMeta = {
  title: string;
  description: string;
  ogTitle?: string;
  h1: string;
  primaryKeyword: string;
  richSnippets: string[];
};

export const CTR_HOME: PageCtrMeta = {
  title: "ATS Resume Checker — Free Score & Keywords",
  description:
    "Free ATS resume checker: upload PDF, get your score, missing ATS keywords, and resume optimization fixes. Build an ATS friendly resume—no signup.",
  ogTitle: "ATS Resume Checker — Free Score, Keywords & Fixes",
  h1: "Free ATS Resume Checker for Resume Optimization",
  primaryKeyword: "ATS Resume Checker",
  richSnippets: ["FAQPage", "WebApplication", "ItemList", "Organization", "BreadcrumbList"],
};

export const CTR_RESUME_CHECKER: PageCtrMeta = {
  title: "ATS Resume Checker — Free Score & Keyword Scan",
  description:
    "Upload resume free. Get ATS score, keyword gaps, format flags, and resume optimization tips—see what hiring software sees before you apply.",
  ogTitle: "Free ATS Resume Checker — Instant Score & Keywords",
  h1: "ATS Resume Checker: Score & Keywords Before You Apply",
  primaryKeyword: "ATS Resume Checker",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH: PageCtrMeta = {
  title: "Resume Match Score — Free Job Description Tool",
  description:
    "Get your resume match score vs any job post. See missing ATS keywords, skill gaps, and resume optimization fixes—free, before you apply.",
  ogTitle: "Resume Match Score — Free ATS Keyword Comparison",
  h1: "Resume Match Score: Compare Resume to Job Description",
  primaryKeyword: "resume match score",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_EXAMPLES: PageCtrMeta = {
  title: "ATS Resume Examples — Good vs Bad Layouts (Free)",
  description:
    "ATS resume examples that parse: layouts, bullets, ATS keywords. See what works, what breaks, and test your file with our free ATS Resume Checker.",
  ogTitle: "ATS Resume Examples — What Parses in 2026",
  h1: "ATS Resume Examples: Good vs Bad for Resume Optimization",
  primaryKeyword: "ATS resume examples",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_CHECKLIST: PageCtrMeta = {
  title: "ATS Resume Checklist — Free Pre-Submit QA (2026)",
  description:
    "Free ATS resume checklist for resume optimization: format, ATS keywords, contact block, export QA. Tick each item, then run the ATS Resume Checker.",
  ogTitle: "ATS Resume Checklist — Print & Use Before Applying",
  h1: "ATS Resume Checklist for Resume Optimization",
  primaryKeyword: "ATS resume checklist",
  richSnippets: ["FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_KEYWORDS: PageCtrMeta = {
  title: "ATS Keywords Guide — Placement Without Stuffing",
  description:
    "Which ATS keywords matter and where to place them for resume optimization. Free ATS Resume Checker finds gaps in your target job post.",
  ogTitle: "ATS Keywords — Improve Resume Visibility in 2026",
  h1: "ATS Keywords: Where They Belong on Your Resume",
  primaryKeyword: "ATS keywords",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_HUB: PageCtrMeta = {
  title: "ATS Friendly Resume Hub — Checker, Guides & Tools",
  description:
    "ATS friendly resume hub: free ATS Resume Checker, resume match score tool, ATS keywords guides, and resume optimization resources—one place to fix before apply.",
  ogTitle: "ATS Resume Hub — Free Checker & Resume Optimization",
  h1: "ATS Friendly Resume Hub: Tools & Guides",
  primaryKeyword: "ATS friendly resume",
  richSnippets: ["FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_KNOWLEDGE_CENTER: PageCtrMeta = {
  title: "ATS Knowledge Center — Resume Optimization Guides",
  description:
    "Ten free guides: ATS Resume Checker workflow, ATS friendly resume, ATS keywords, resume match score, format, mistakes, and resume optimization.",
  ogTitle: "ATS Knowledge Center — Free Resume Guides & Tools",
  h1: "ATS Knowledge Center for Resume Optimization",
  primaryKeyword: "resume optimization",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_FORMAT: PageCtrMeta = {
  title: "ATS Resume Format — Layout Rules That Parse",
  description:
    "ATS resume format for an ATS friendly resume: single column, headings, fonts, PDF vs Word. Resume optimization starts with layout—test free.",
  ogTitle: "ATS Resume Format Guide — What Parses in 2026",
  h1: "ATS Resume Format: Build an ATS Friendly Resume",
  primaryKeyword: "ATS resume format",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_MISTAKES: PageCtrMeta = {
  title: "ATS Resume Mistakes — Fix Before You Apply",
  description:
    "ATS resume mistakes that block resume optimization: columns, headers, keyword dumps. Fix fast, then run the free ATS Resume Checker.",
  ogTitle: "ATS Resume Mistakes to Avoid in 2026",
  h1: "ATS Resume Mistakes That Hurt Your Match Score",
  primaryKeyword: "ATS resume mistakes",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_SCORE: PageCtrMeta = {
  title: "ATS Score Explained — What It Means (Free Checker)",
  description:
    "What your ATS score measures, how it differs from resume match score, and resume optimization steps. Check free with our ATS Resume Checker.",
  ogTitle: "ATS Score Explained — Improve Before You Apply",
  h1: "ATS Score Explained for Resume Optimization",
  primaryKeyword: "ATS score",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "HowTo", "Organization"],
};

export const CTR_ATS_FRIENDLY: PageCtrMeta = {
  title: "ATS Friendly Resume Guide — Build & Test Free",
  description:
    "Build an ATS friendly resume step by step: format, ATS keywords, bullets, export QA. Resume optimization with our free ATS Resume Checker.",
  ogTitle: "How to Build an ATS Friendly Resume in 2026",
  h1: "How to Build an ATS Friendly Resume",
  primaryKeyword: "ATS friendly resume",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "HowTo", "Organization"],
};

export const CTR_INDUSTRY_KEYWORDS: PageCtrMeta = {
  title: "Resume Keywords by Industry — ATS Visibility Guide",
  description:
    "Industry ATS keywords for tech, healthcare, finance, and more. Tailor your ATS friendly resume, then check resume match score free.",
  ogTitle: "Resume Keywords by Industry — ATS Guide 2026",
  h1: "Resume Keywords by Industry for ATS Optimization",
  primaryKeyword: "ATS keywords",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_TEMPLATES: PageCtrMeta = {
  title: "ATS Resume Templates — Which Ones Parse (Free)",
  description:
    "ATS resume templates that work vs layouts that break parsing. Build an ATS friendly resume, then validate with our free ATS Resume Checker.",
  ogTitle: "ATS Resume Templates — Good vs Bad Layouts",
  h1: "ATS Resume Templates for an ATS Friendly Resume",
  primaryKeyword: "ATS resume templates",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ULTIMATE_GUIDE: PageCtrMeta = {
  title: "Resume Optimization Guide — ATS Format & Keywords",
  description:
    "Complete resume optimization guide: ATS friendly resume format, ATS keywords, scoring, and mistakes. Free ATS Resume Checker workflow included.",
  ogTitle: "Ultimate ATS Resume Guide — Format, Keywords & Score",
  h1: "Resume Optimization: The Complete ATS Resume Guide",
  primaryKeyword: "resume optimization",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_AI_REWRITE: PageCtrMeta = {
  title: "AI Resume Rewrite — Free ATS Optimization Tool",
  description:
    "Free AI resume rewrite with ATS scoring. Stronger bullets, ATS keywords, and resume optimization suggestions tailored to your job description.",
  ogTitle: "AI Resume Rewrite — ATS Keywords & Bullet Fixes",
  h1: "AI Resume Rewrite for Resume Optimization",
  primaryKeyword: "resume optimization",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export function buildCtrMetadata(
  meta: PageCtrMeta,
  options: {
    canonical: string;
    keywords?: string[];
    ogType?: "website" | "article";
    /** CTR titles are fully crafted; default true avoids layout template duplication. */
    absoluteTitle?: boolean;
  }
): Metadata {
  const ogTitle = meta.ogTitle ?? meta.title;
  const base = getSiteUrl().replace(/\/$/, "");
  const useAbsolute = options.absoluteTitle ?? true;
  return {
    title: useAbsolute ? { absolute: meta.title } : meta.title,
    description: meta.description,
    keywords: options.keywords,
    alternates: { canonical: options.canonical },
    openGraph: {
      title: ogTitle,
      description: meta.description,
      url: `${base}${options.canonical}`,
      type: options.ogType ?? "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: meta.description,
    },
    robots: { index: true, follow: true },
  };
}
