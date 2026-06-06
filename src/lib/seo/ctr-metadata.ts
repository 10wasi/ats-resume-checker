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
  title: "Free ATS Resume Checker | Score & Keywords",
  description:
    "Upload free. Get your ATS score, missing keywords, and fixes for an ATS friendly resume. Match to any job post—no signup.",
  ogTitle: "Free ATS Resume Checker — See Your Score in Minutes",
  h1: "Stop Losing Interviews to ATS Filters",
  primaryKeyword: "ATS Resume Checker",
  richSnippets: ["FAQPage", "WebApplication", "ItemList", "Organization"],
};

export const CTR_RESUME_CHECKER: PageCtrMeta = {
  title: "Free ATS Resume Checker — Score & Keywords",
  description:
    "Analyze your resume free: ATS score, keyword match %, missing terms, and formatting flags. Upload PDF—see what hiring software sees.",
  ogTitle: "Free ATS Resume Checker — Analyze Score & Keywords",
  h1: "ATS Resume Checker: know your score before you hit apply",
  primaryKeyword: "ATS Resume Checker",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList"],
};

export const CTR_RESUME_MATCH: PageCtrMeta = {
  title: "Resume Match Score — Free Job Description Tool",
  description:
    "Match resume to job description free. Get match %, missing ATS keywords, skill gaps, and fixes. Analyze before you apply.",
  ogTitle: "Resume Match Score — Compare to Any Job Posting",
  h1: "Resume vs Job Description Match Analyzer",
  primaryKeyword: "resume match score",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList"],
};

export const CTR_ATS_EXAMPLES: PageCtrMeta = {
  title: "ATS Resume Examples That Work in 2026 (Free)",
  description:
    "Good vs bad ATS resume examples: layout, bullets, keywords. See what parses—and test your file with our free ATS checker.",
  ogTitle: "ATS Resume Examples — Good vs Bad (2026 Guide)",
  h1: "Best ATS-Friendly Resume Examples That Actually Work in 2026",
  primaryKeyword: "ATS resume examples",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
};

export const CTR_ATS_CHECKLIST: PageCtrMeta = {
  title: "ATS Resume Checklist 2026 — Free Pre-Submit QA",
  description:
    "Free ATS resume checklist: format, keywords, contact block, export QA. Print it, tick each item, then run the checker before you apply.",
  ogTitle: "ATS Resume Checklist 2026 — Print & Use Before Applying",
  h1: "The Ultimate ATS Resume Checklist for 2026",
  primaryKeyword: "ATS resume checklist",
  richSnippets: ["FAQPage", "HowTo", "BreadcrumbList", "ItemList"],
};

export const CTR_ATS_KEYWORDS: PageCtrMeta = {
  title: "ATS Resume Keywords Guide — Boost Visibility",
  description:
    "Which ATS resume keywords matter and where to place them—without stuffing. Pair with our free checker to find gaps in your posting.",
  ogTitle: "ATS Resume Keywords — Improve Visibility in 2026",
  h1: "Best ATS Resume Keywords That Actually Improve Resume Visibility in 2026",
  primaryKeyword: "ATS resume keywords",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList"],
};

export const CTR_ATS_HUB: PageCtrMeta = {
  title: "ATS Resume Hub — Free Checker, Guides & Tools",
  description:
    "Your ATS resume hub: free checker, checklist, examples, keywords, format, and job match. One place to fix before every application.",
  ogTitle: "Complete ATS Resume Resource Hub — Free Tools & Guides",
  h1: "The Complete ATS Resume Resource Hub",
  primaryKeyword: "ATS friendly resume",
  richSnippets: ["FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export function buildCtrMetadata(
  meta: PageCtrMeta,
  options: {
    canonical: string;
    keywords?: string[];
    ogType?: "website" | "article";
    /** Use when layout title template must not append a suffix. */
    absoluteTitle?: boolean;
  }
): Metadata {
  const ogTitle = meta.ogTitle ?? meta.title;
  const base = getSiteUrl().replace(/\/$/, "");
  return {
    title: options.absoluteTitle ? { absolute: meta.title } : meta.title,
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
