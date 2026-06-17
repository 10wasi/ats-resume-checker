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
  title: "ATS Resume Checker — Free Score & Match Tool",
  description:
    "Free ATS resume checker + resume match score. Upload PDF → keyword gaps, format fixes & optimization plan. Built for job seekers—no signup.",
  ogTitle: "Free ATS Resume Checker — Score, Keywords & Match",
  h1: "ATS Resume Checker & Resume Optimization Platform",
  primaryKeyword: "ATS Resume Checker",
  richSnippets: ["FAQPage", "WebApplication", "ItemList", "Organization", "BreadcrumbList"],
};

export const CTR_RESUME_CHECKER: PageCtrMeta = {
  title: "Resume Checker — Free ATS Score & Keyword Scan",
  description:
    "Free resume checker: upload PDF, get ATS score, keyword gaps & format warnings in one scan. Fix resume optimization issues before recruiters see your file.",
  ogTitle: "Free Resume Checker — ATS Score & Keywords",
  h1: "Resume Checker: Free ATS Score & Keyword Analysis",
  primaryKeyword: "resume checker",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH: PageCtrMeta = {
  title: "Resume Match Tool — Free vs Job Description",
  description:
    "Paste any job post → instant resume match score, missing keywords & skill gaps. Free resume match tool to raise ATS visibility before you hit apply.",
  ogTitle: "Resume Match Tool — Free Job Description Analyzer",
  h1: "Resume Match Tool: Score vs Job Description",
  primaryKeyword: "resume match tool",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH_SCORE: PageCtrMeta = {
  title: "Resume Match Score — What It Means (Free Guide)",
  description:
    "Resume match score explained: vs ATS score, what good looks like & how to improve keyword overlap. Free match analyzer + keywords workflow included.",
  ogTitle: "Resume Match Score Guide — Improve Before You Apply",
  h1: "Resume Match Score: Meaning, Benchmarks & How to Improve",
  primaryKeyword: "resume match score",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ABOUT: PageCtrMeta = {
  title: "About ResumeIQ — Free ATS Resume Platform",
  description:
    "About ResumeIQ: mission, editorial standards, and privacy-first ATS resume checker tools. Learn who we are and how we help job seekers optimize resumes.",
  h1: "About ResumeIQ: Free Resume Optimization for Job Seekers",
  primaryKeyword: "about ResumeIQ",
  richSnippets: ["Organization", "BreadcrumbList", "FAQPage"],
};

export const CTR_CONTACT: PageCtrMeta = {
  title: "Contact ResumeIQ — Support & Feedback",
  description:
    "Contact ResumeIQ for resume checker feedback, bug reports, partnerships, or press. We read every message—real support for a free ATS tool.",
  h1: "Contact ResumeIQ",
  primaryKeyword: "contact ResumeIQ",
  richSnippets: ["Organization", "BreadcrumbList", "FAQPage"],
};

export const CTR_PRIVACY: PageCtrMeta = {
  title: "Privacy Policy — ResumeIQ",
  description:
    "ResumeIQ privacy policy: how resume uploads, cookies, analytics, and ads are handled. We process files for your request—we do not sell resume data.",
  h1: "Privacy Policy",
  primaryKeyword: "privacy policy",
  richSnippets: ["BreadcrumbList"],
};

export const CTR_TERMS: PageCtrMeta = {
  title: "Terms of Service — ResumeIQ",
  description:
    "ResumeIQ terms of service: acceptable use and disclaimers for the free ATS resume checker, match tools, and career guides.",
  h1: "Terms of Service",
  primaryKeyword: "terms of service",
  richSnippets: ["BreadcrumbList"],
};

export const CTR_RESUME_KEYWORDS_DATABASE: PageCtrMeta = {
  title: "Resume Keywords Database — ATS Lists by Role",
  description:
    "Searchable resume keywords database: ATS skills, verbs & phrases for 10 professions. Software, data, PM, marketing & more—free checker & match tool.",
  ogTitle: "Resume Keywords by Profession — ATS Database",
  h1: "Resume Keywords Database: ATS Lists by Profession",
  primaryKeyword: "resume keywords",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_EXAMPLES: PageCtrMeta = {
  title: "ATS Resume Examples — What Parses vs Breaks (Free)",
  description:
    "ATS resume examples with good vs bad layouts, bullets & keywords. See what hiring software reads—then test your PDF free with our resume checker.",
  ogTitle: "ATS Resume Examples — Good vs Bad Layouts",
  h1: "ATS Resume Examples: Layouts That Parse in 2026",
  primaryKeyword: "ATS resume examples",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_CHECKLIST: PageCtrMeta = {
  title: "ATS Resume Checklist — Print Before You Apply (Free)",
  description:
    "Free ATS resume checklist: format, keywords, contact block & export QA. Tick every item, then run the resume checker—catch rejections before you submit.",
  ogTitle: "ATS Resume Checklist — Pre-Submit QA",
  h1: "ATS Resume Checklist: Final QA Before Submit",
  primaryKeyword: "ATS resume checklist",
  richSnippets: ["FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_KEYWORDS: PageCtrMeta = {
  title: "ATS Resume Keywords — Where to Place Them (Free)",
  description:
    "ATS resume keywords guide: which terms matter, where they belong & how to avoid stuffing. Extract gaps from job posts with our free keywords tools.",
  ogTitle: "ATS Resume Keywords Guide — Ethical Placement",
  h1: "ATS Resume Keywords: Placement That Raises Match Score",
  primaryKeyword: "ATS keywords",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_HUB: PageCtrMeta = {
  title: "ATS Friendly Resume Hub — Checker, Guides & Tools",
  description:
    "ATS friendly resume hub: free checker, match tool, role guides, keywords resources, and optimization workflows—one place to fix before you apply.",
  ogTitle: "ATS Resume Hub — Free Checker & Guides",
  h1: "ATS Friendly Resume Hub: Tools & Guides",
  primaryKeyword: "ATS friendly resume hub",
  richSnippets: ["FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_KNOWLEDGE_CENTER: PageCtrMeta = {
  title: "ATS Knowledge Center — 10 Resume Guides (Free)",
  description:
    "Ten free ATS guides: format, keywords, match score, mistakes, examples, and checklist—each links to the free resume checker workflow.",
  ogTitle: "ATS Knowledge Center — Free Resume Guides",
  h1: "ATS Knowledge Center for Resume Optimization",
  primaryKeyword: "ATS knowledge center",
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
    "Industry ATS keywords for tech, healthcare, finance, and more. Tailor your resume by sector, then check match score with our free tools.",
  ogTitle: "Resume Keywords by Industry — ATS Guide 2026",
  h1: "Resume Keywords by Industry for ATS Optimization",
  primaryKeyword: "resume keywords by industry",
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
  title: "Ultimate ATS Resume Guide — Format, Keywords & Score",
  description:
    "The complete ATS resume guide: format rules, keyword placement, scoring, and mistakes. Step-by-step workflow with free checker and match tools.",
  ogTitle: "Ultimate ATS Resume Guide — Full Optimization",
  h1: "Ultimate ATS Resume Guide: Format, Keywords & Score",
  primaryKeyword: "ultimate ATS resume guide",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_KEYWORDS_FINDER: PageCtrMeta = {
  title: "ATS Keywords Finder — Extract From Job Posts Free",
  description:
    "Free ATS keywords finder: paste a job description, get skills, tools, and certifications to use in resume optimization. Then check match free.",
  ogTitle: "ATS Keywords Finder — Free Job Description Tool",
  h1: "ATS Keywords Finder: Extract Terms From Any Job Post",
  primaryKeyword: "ATS keywords finder",
  richSnippets: ["WebApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_BULLET_GENERATOR: PageCtrMeta = {
  title: "Resume Bullet Generator — ATS-Friendly Bullets Free",
  description:
    "Free resume bullet generator: turn duties into impact bullets for resume optimization. Copy suggestions, then score your resume in our ATS checker.",
  ogTitle: "Resume Bullet Point Generator — Free ATS Bullets",
  h1: "Resume Bullet Point Generator for ATS Resumes",
  primaryKeyword: "resume bullet generator",
  richSnippets: ["WebApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SKILLS_ANALYZER: PageCtrMeta = {
  title: "Resume Skills Analyzer — Detect ATS Skills Free",
  description:
    "Free resume skills analyzer: scan your resume for technical skills, tools, and gaps vs a job description. Then run full ATS match & keyword fixes.",
  ogTitle: "Resume Skills Analyzer — Free ATS Skill Scan",
  h1: "Resume Skills Analyzer: Find Skills & Gaps Fast",
  primaryKeyword: "resume skills analyzer",
  richSnippets: ["WebApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SUMMARY_GENERATOR: PageCtrMeta = {
  title: "Resume Summary Generator — ATS Headlines Free",
  description:
    "Free resume summary generator: draft professional summary lines for your role, years, and highlights. Copy, refine, then score in our ATS checker.",
  ogTitle: "Resume Summary Generator — Free Professional Summaries",
  h1: "Resume Summary Generator for ATS Resumes",
  primaryKeyword: "resume summary generator",
  richSnippets: ["WebApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_ACHIEVEMENT_GENERATOR: PageCtrMeta = {
  title: "Resume Achievement Generator — Impact Bullets Free",
  description:
    "Free resume achievement generator: turn actions, metrics, and context into ATS-friendly achievement bullets. Copy and validate in the resume checker.",
  ogTitle: "Resume Achievement Generator — Free Impact Lines",
  h1: "Resume Achievement Generator for Stronger Bullets",
  primaryKeyword: "resume achievement generator",
  richSnippets: ["WebApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_EXAMPLES_LIBRARY: PageCtrMeta = {
  title: "Resume Examples — 9 ATS-Friendly Role Samples (Free)",
  description:
    "Nine resume examples: software engineer, data analyst, product & project manager, marketing, HR & more. Keywords, mistakes & free ATS checker.",
  ogTitle: "Resume Examples Library — ATS Samples by Role",
  h1: "Resume Examples: ATS-Friendly Samples by Industry",
  primaryKeyword: "resume examples",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_AI_REWRITE: PageCtrMeta = {
  title: "AI Resume Rewrite — Free Bullet & Keyword Fixes",
  description:
    "Free AI resume rewrite in the checker: stronger bullets, ATS keywords & fixes tailored to your job post. Learn how rewrites work—no paywall on core analysis.",
  ogTitle: "AI Resume Rewrite — Free ATS Optimization",
  h1: "AI Resume Rewrite for Stronger ATS Resumes",
  primaryKeyword: "AI resume rewrite",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_CAREER_SUCCESS_HUB: PageCtrMeta = {
  title: "Career Success Hub — Resume Tools & Guides (Free)",
  description:
    "Career Success Hub: resume checker, match tool, keywords checker, examples, checklist, and guides—one connected workflow for job seekers.",
  ogTitle: "Career Success Hub — Resume Tools Platform",
  h1: "Career Success Hub: Resume Tools & Optimization Guides",
  primaryKeyword: "career success hub",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_REVIEW: PageCtrMeta = {
  title: "Free Resume Review — Rubric + ATS Check (2026)",
  description:
    "Free resume review guide: 10-minute rubric recruiters use, plus ATS checker & match tool. Fix clarity, keywords & format before you apply.",
  ogTitle: "Resume Review Guide — Free ATS + Human Checklist",
  h1: "Free Resume Review: Rubric, ATS Check & Next Steps",
  primaryKeyword: "resume review",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_OPTIMIZATION: PageCtrMeta = {
  title: "Resume Optimization — 5-Step ATS Workflow (Free)",
  description:
    "Resume optimization workflow: score, match keywords, fix format, upgrade bullets & checklist QA. Free tools connected end to end—no thin tips.",
  ogTitle: "Resume Optimization Guide — Free ATS Workflow",
  h1: "Resume Optimization: Step-by-Step ATS Workflow",
  primaryKeyword: "resume optimization",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SCORE_CHECKER: PageCtrMeta = {
  title: "Resume Score Checker — Free ATS Rating Tool",
  description:
    "Free resume score checker: ATS compatibility, keyword coverage & format flags in one scan. Learn what your score means & how to improve fast.",
  ogTitle: "Resume Score Checker — Free ATS Analysis",
  h1: "Resume Score Checker: What Your ATS Rating Means",
  primaryKeyword: "resume score checker",
  richSnippets: ["Article", "FAQPage", "WebApplication", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_KEYWORDS_CHECKER: PageCtrMeta = {
  title: "Resume Keywords Checker — Find Missing ATS Terms",
  description:
    "Resume keywords checker workflow: extract terms from job posts, compare to your resume & fix gaps ethically. Keywords finder + match tool included.",
  ogTitle: "Resume Keywords Checker — Free ATS Gap Scan",
  h1: "Resume Keywords Checker: Find & Fix Missing Terms",
  primaryKeyword: "resume keywords checker",
  richSnippets: ["Article", "FAQPage", "WebApplication", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_RESUME_CHECKER_LANDING: PageCtrMeta = {
  title: "How ATS Resume Checker Works — Free PDF Scan",
  description:
    "How the ATS resume checker scores PDFs: keyword gaps, format warnings, pass likelihood & improvement plan. Free upload—learn the workflow before you apply.",
  ogTitle: "How ATS Resume Checker Works — Free Tool",
  h1: "How ATS Resume Checker Works: Score, Keywords & Fixes",
  primaryKeyword: "how ATS resume checker works",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
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
