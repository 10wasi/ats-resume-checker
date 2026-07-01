import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { getDefaultOgImages } from "@/lib/seo/og-defaults";

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
  title: "Free ATS Resume Checker — Score, Scan & Fix Online",
  description:
    "Upload resume or CV—get ATS score, keyword match, format scan & fix plan in 60s. Free resume checker for job seekers worldwide. No signup.",
  ogTitle: "Free ATS Resume Checker — Instant Resume Score",
  h1: "Free ATS Resume Checker & Resume Score Online",
  primaryKeyword: "ATS resume checker",
  richSnippets: ["FAQPage", "SoftwareApplication", "WebSite", "Organization", "BreadcrumbList"],
};

export const CTR_RESUME_CHECKER: PageCtrMeta = {
  title: "Resume Checker — ATS Score, Match & Fixes Free",
  description:
    "Free resume checker: ATS score, keyword match, structure analysis & priority fixes with why/how guidance. Upload PDF—results in minutes worldwide.",
  ogTitle: "Free Resume Checker — Deep ATS Analysis",
  h1: "Free Resume Checker Online",
  primaryKeyword: "resume checker",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_FREE_RESUME_CHECKER_ONLINE: PageCtrMeta = {
  title: "Free Resume Checker Online — ATS Score & Review",
  description:
    "Resume checker free online: no signup, instant ATS score, keyword gaps & format fixes. Upload PDF or paste text—see what hiring software reads.",
  ogTitle: "Resume Checker Free Online — Free ATS Score",
  h1: "Free Resume Checker Online: ATS Score & Review",
  primaryKeyword: "free resume checker online",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_FREE_ATS_SCORE_CHECKER: PageCtrMeta = {
  title: "Free ATS Score Checker — Resume Score & Keywords",
  description:
    "Free ATS score checker: upload resume, get compatibility %, missing keywords & format flags. Resume score checker online—no paywall.",
  ogTitle: "Free ATS Score Checker — Instant Resume Score",
  h1: "Free ATS Score Checker: Instant Resume Score",
  primaryKeyword: "free ATS score checker",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH: PageCtrMeta = {
  title: "Resume Match Tool — Free vs Job Posting",
  description:
    "Resume match score in seconds: paste job description, see missing keywords & gaps. Free resume match tool—tailor before you apply.",
  ogTitle: "Resume Match Analyzer — Free Match %",
  h1: "Resume Match Tool: Free Score vs Job Description",
  primaryKeyword: "resume match analyzer",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH_SCORE: PageCtrMeta = {
  title: "Resume Match Score Explained — What % Means",
  description:
    "Resume match score explained in plain English: benchmarks, vs ATS score, and how to raise overlap before you apply. Free match tool included.",
  ogTitle: "Resume Match Score Explained — Improve Before Apply",
  h1: "Resume Match Score Explained: Meaning & How to Improve",
  primaryKeyword: "resume match score explained",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ABOUT: PageCtrMeta = {
  title: "About ResumeIQ — Resume Optimization Platform",
  description:
    "About ResumeIQ: free resume optimization platform for job seekers worldwide—checker, review, match, keywords, methodology & editorial standards.",
  h1: "About ResumeIQ: Resume Optimization Platform",
  primaryKeyword: "about ResumeIQ",
  richSnippets: ["Organization", "BreadcrumbList", "FAQPage"],
};

export const CTR_METHODOLOGY: PageCtrMeta = {
  title: "How ATS Scoring Works — ResumeIQ Methodology",
  description:
    "How resume scoring works: what ATS checks, keyword matching, parse health & match vs job posts. Transparent resume optimization methodology worldwide.",
  ogTitle: "ATS Scoring Methodology — Transparent & Global",
  h1: "How ATS Scoring Works",
  primaryKeyword: "ATS scoring methodology",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_HOW_ATS_WORKS: PageCtrMeta = {
  title: "How ATS Works — Global Hiring Software Explained",
  description:
    "How ATS works worldwide: parsing, keyword search, filters & recruiter skim. Learn what applicant tracking systems check—then test your resume free.",
  ogTitle: "How Applicant Tracking Systems Work",
  h1: "How ATS Works: What Hiring Software Checks",
  primaryKeyword: "how ATS works",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH_ANALYZER_LANDING: PageCtrMeta = {
  title: "Resume Match Analyzer — Free Job Match Score",
  description:
    "Resume match analyzer: score vs job description, missing keywords & skill gaps. Free resume optimization for global applications—paste & compare.",
  ogTitle: "Resume Match Analyzer — Improve Before Apply",
  h1: "Resume Match Analyzer: Free Job Description Match",
  primaryKeyword: "resume match analyzer",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_KEYWORD_TOOL_LANDING: PageCtrMeta = {
  title: "Resume Keyword Tool — Free ATS Keyword Analyzer",
  description:
    "Resume keyword analyzer hub: extract terms from job posts, compare to your resume & fix gaps. Free ATS keyword tools for interview improvement.",
  ogTitle: "Resume Keyword Tool — Find Missing ATS Terms",
  h1: "Resume Keyword Tool: ATS Keyword Analyzer Hub",
  primaryKeyword: "resume keyword analyzer",
  richSnippets: ["WebApplication", "FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_GUIDE_LANDING: PageCtrMeta = {
  title: "ATS Guide Hub — Resume Optimization 2026",
  description:
    "ATS optimization guides: format, keywords, match score, mistakes & remote jobs. Free resume improvement resources linked to checker & match tools.",
  ogTitle: "ATS Guide Hub — Professional Resume Optimization",
  h1: "ATS Guide Hub: Resume Optimization Resources",
  primaryKeyword: "ATS optimization guide",
  richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_FAQ_CENTER: PageCtrMeta = {
  title: "ATS Resume FAQ Center — Answers & Guides",
  description:
    "FAQ hub for ATS resume checker, match scores, keywords, and interview readiness. Job seekers worldwide—methodology, tools, and career guides.",
  ogTitle: "ATS Resume FAQ Center — Help & Guides",
  h1: "ATS Resume FAQ Center",
  primaryKeyword: "ATS resume FAQ",
  richSnippets: ["FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_CONTACT: PageCtrMeta = {
  title: "Contact ResumeIQ — Support & Feedback",
  description:
    "Contact ResumeIQ for resume checker feedback, bug reports, partnerships, or press. We read every message—real support for a free ATS tool.",
  h1: "Contact ResumeIQ",
  primaryKeyword: "contact ResumeIQ",
  richSnippets: ["Organization", "BreadcrumbList", "FAQPage"],
};

export const CTR_EDITORIAL_POLICY: PageCtrMeta = {
  title: "Editorial Policy — ResumeIQ Content Standards",
  description:
    "How ResumeIQ creates resume guides: accuracy, actionable advice, global audience, transparent methodology, and correction process.",
  h1: "Editorial Policy: How We Write Resume Guides",
  primaryKeyword: "editorial policy",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_HOW_RESUME_ANALYSIS: PageCtrMeta = {
  title: "How Resume Analysis Works — ATS Checker Explained",
  description:
    "How ResumeIQ analyzes your resume: extraction, format checks, keywords, skills, AI feedback, and ATS score calculation—step by step.",
  ogTitle: "How Resume Analysis Works — Full Breakdown",
  h1: "How Resume Analysis Works",
  primaryKeyword: "how resume analysis works",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
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
  title: "Resume Keywords for ATS — Free Lists by Role",
  description:
    "Resume keywords database: ATS skills, verbs & phrases for 10 professions. Pair with free resume match tool & checker.",
  ogTitle: "Resume Keywords Database — ATS Lists by Role",
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

export const CTR_RESOURCE_HUB: PageCtrMeta = {
  title: "ATS Resource Hub — Guides, Tools & Examples",
  description:
    "Complete ATS resume optimization hub: examples, checklist, keywords DB, match tool & 8 profession guides. Free resume checker worldwide.",
  ogTitle: "ATS Resource Hub — Resume Optimization Library",
  h1: "ATS Resume Optimization Resource Hub",
  primaryKeyword: "ATS resume optimization",
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
  title: "Resume Review Online — Free Rubric + ATS Check",
  description:
    "Free resume review online: 10-minute recruiter rubric plus ATS checker & match tool. Fix clarity, keywords & format before you apply worldwide.",
  ogTitle: "Resume Review Online — Free ATS + Human Checklist",
  h1: "Resume Review Online: Free Rubric, ATS Check & Next Steps",
  primaryKeyword: "resume review online",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_OPTIMIZATION: PageCtrMeta = {
  title: "Resume Optimization Guide — Fix Before You Apply",
  description:
    "Practical resume optimization guide: score, tailor for each job, fix bullets & pass screening. Free tools connected step by step—real fixes, not fluff.",
  ogTitle: "Resume Optimization Guide — Free Step-by-Step",
  h1: "Resume Optimization Guide: From Rejected to Interview-Ready",
  primaryKeyword: "resume optimization guide",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SCORE_CHECKER: PageCtrMeta = {
  title: "Resume Score Checker Free — What Your ATS % Means",
  description:
    "Free resume score checker: what ATS % means, good benchmarks & how to improve fast. Upload PDF for instant score, keywords & format fixes.",
  ogTitle: "Resume Score Checker Free — ATS Rating Guide",
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
  title: "ATS Resume Checker Free Online — Score & Keywords",
  description:
    "ATS resume checker free online: upload PDF, get ATS score, keyword gaps & format flags. Free resume checker—no signup, instant results.",
  ogTitle: "ATS Resume Checker Free Online — Upload & Fix",
  h1: "ATS Resume Checker Free Online: Score & Keywords",
  primaryKeyword: "ATS resume checker free online",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_WHY_NOT_GETTING_INTERVIEWS: PageCtrMeta = {
  title: "Why My Resume Is Not Getting Interviews (2026)",
  description:
    "No interviews after applying? Real causes—screening, keywords, weak bullets—and a free action plan with checker & match tools. Fix what recruiters never see.",
  ogTitle: "Why You're Not Getting Interviews — Fixes That Work",
  h1: "Why My Resume Is Not Getting Interviews",
  primaryKeyword: "why my resume is not getting interviews",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_WHY_RESUME_GETS_REJECTED: PageCtrMeta = {
  title: "Why Your Resume Gets Rejected — Causes & Fixes",
  description:
    "Why resumes get rejected before interviews: parsing, filters, recruiter skim. Real examples + free checker to find your failure point fast.",
  ogTitle: "Why Resume Gets Rejected — What to Fix First",
  h1: "Why Your Resume Gets Rejected (And What to Fix)",
  primaryKeyword: "why resume gets rejected",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_NOT_PASSING_ATS: PageCtrMeta = {
  title: "Resume Not Working ATS? Diagnose & Fix Free",
  description:
    "Resume not working ATS or not passing? Learn parse vs keyword failures, see examples & test your PDF free with our resume checker online.",
  ogTitle: "Resume Not Passing ATS — Fix Parse & Keywords",
  h1: "Resume Not Working ATS: Diagnose and Fix",
  primaryKeyword: "resume not working ATS",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_KEYWORDS_MISSING: PageCtrMeta = {
  title: "Resume Keywords Missing? Find & Fix Gaps Free",
  description:
    "Missing resume keywords kill match score. Find gaps vs job posts, see before/after bullet examples, and fix ethically with free tools.",
  ogTitle: "Resume Keywords Missing — Free Gap Finder",
  h1: "Resume Keywords Missing: Find and Fix Gaps",
  primaryKeyword: "resume keywords missing",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_HOW_TO_TAILOR_RESUME: PageCtrMeta = {
  title: "How to Tailor Resume for Job Description",
  description:
    "How to tailor your resume for a job description in 15 minutes: extract terms, edit bullets, re-check match %. Free analyzer walkthrough.",
  ogTitle: "Tailor Resume to Job Description — Step-by-Step",
  h1: "How to Tailor Resume for Job Description",
  primaryKeyword: "how to tailor resume for job description",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_HOW_TO_IMPROVE_RESUME_SCORE: PageCtrMeta = {
  title: "How to Improve Resume Score — 7-Day Plan",
  description:
    "How to improve resume score fast: format, keywords, metrics. Real before/after example + free checker. Not keyword stuffing—honest fixes.",
  ogTitle: "How to Improve Resume Score — Free Checker",
  h1: "How to Improve Resume Score Before You Apply",
  primaryKeyword: "how to improve resume score",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MISTAKES_INTERVIEWS: PageCtrMeta = {
  title: "Resume Mistakes That Cost Interviews (2026)",
  description:
    "10 resume mistakes that cost interviews—with before/after examples. Free checker catches format & keyword issues before recruiters do.",
  ogTitle: "Resume Mistakes That Cost You Interviews",
  h1: "Resume Mistakes That Cost Interviews",
  primaryKeyword: "resume mistakes that cost interviews",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SCREENING_EXPLAINED: PageCtrMeta = {
  title: "Resume Screening Explained — ATS to Recruiter",
  description:
    "Resume screening explained: who reads your file, when ATS filters, and what to fix at each stage. Free tools to test parse and match.",
  ogTitle: "Resume Screening Explained for Job Seekers",
  h1: "Resume Screening Explained: From Apply to Interview",
  primaryKeyword: "resume screening explained",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_REJECTED_BY_ATS: PageCtrMeta = {
  title: "Resume Rejected By ATS? Fix Free — Score & Guide",
  description:
    "Resume rejected by ATS? Diagnose parse failures & keyword gaps with our free resume checker. Real examples + 30-minute fix workflow.",
  ogTitle: "Resume Rejected By ATS — Free Diagnosis",
  h1: "Resume Rejected By ATS: Diagnose & Fix Free",
  primaryKeyword: "resume rejected by ATS",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_COMMON_ATS_REJECTION_REASONS: PageCtrMeta = {
  title: "Common ATS Resume Rejection Reasons (2026)",
  description:
    "Common ATS resume rejection reasons with examples & fixes: columns, keywords, filters. Free checker tests your PDF before the next apply.",
  ogTitle: "Top ATS Rejection Reasons — Fix Before Apply",
  h1: "Common ATS Resume Rejection Reasons—and How to Fix Each",
  primaryKeyword: "common ATS resume rejection reasons",
  richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_AI_RESUME_REVIEW: PageCtrMeta = {
  title: "AI Resume Review — Free Online ATS Scan",
  description:
    "Free AI resume review: ATS score, keyword gaps, format flags & bullet suggestions in seconds. Resume checker free online—no signup required.",
  ogTitle: "AI Resume Review — Free ATS Analysis",
  h1: "AI Resume Review: Free Online Score & Suggestions",
  primaryKeyword: "AI resume review",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_CV_CHECKER: PageCtrMeta = {
  title: "CV Checker Online — Free ATS Score & Scan",
  description:
    "Free CV checker online: upload PDF, get ATS score, keyword gaps & format warnings. Works worldwide—same engine as our resume checker free online.",
  ogTitle: "CV Checker — Free Online ATS Scan",
  h1: "CV Checker Online: Free ATS Score & Keyword Scan",
  primaryKeyword: "CV checker",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_COMPLETE_ATS_GUIDE: PageCtrMeta = {
  title: "Complete ATS Resume Optimization Guide (2026)",
  description:
    "The complete guide to ATS resume optimization: checker, resume score, review, rejection fixes & keywords. Most comprehensive resource on ResumeIQ.",
  ogTitle: "Complete ATS Resume Optimization Guide",
  h1: "The Complete Guide to ATS Resume Optimization",
  primaryKeyword: "ATS resume optimization",
  richSnippets: ["Article", "FAQPage", "HowTo", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_PLATFORM_HUB_INDEX: PageCtrMeta = {
  title: "Resume Optimization Platform — 9 Free Hubs",
  description:
    "Resume optimization platform: checker, review, score, keywords, match, ATS tools & CV checker. Cornerstone guides + free tools for global job seekers.",
  ogTitle: "Resume Optimization Platform — Not Just a Checker",
  h1: "Resume Optimization Platform",
  primaryKeyword: "resume optimization platform",
  richSnippets: ["ItemList", "FAQPage", "Organization", "BreadcrumbList"],
};

export const CTR_ATS_RESUME_REVIEW: PageCtrMeta = {
  title: "ATS Resume Review — Free Online Scan & Score",
  description:
    "Free ATS resume review: parse test, keyword gaps, format flags & readiness report. ATS resume review online—global job applications.",
  ogTitle: "ATS Resume Review — Free Scan & Fixes",
  h1: "ATS Resume Review: Free Online Scan & Fixes",
  primaryKeyword: "ATS resume review",
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
  const ogImages = getDefaultOgImages();
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
      images: ogImages,
    },
    twitter: {
      card: "summary_large_image",
      title: ogTitle,
      description: meta.description,
      images: ogImages.map((img) => img.url),
    },
    robots: { index: true, follow: true },
  };
}
