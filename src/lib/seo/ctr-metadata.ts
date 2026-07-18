import type { Metadata } from "next";
import { getSiteUrl } from "@/lib/site-url";
import { getDefaultOgImages } from "@/lib/seo/og-defaults";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";

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
  title: ctrTitle("Free ATS Resume Checker", "Score in Seconds"),
  description: ctrMeta(
    "Upload PDF free — instant ATS score, resume parser test & keyword match. AI fixes in 2 min. No signup. Try now."
  ),
  ogTitle: "Free ATS Resume Checker (Score Your Resume in Seconds)",
  h1: "Free ATS Resume Checker — Score in Seconds",
  primaryKeyword: "ATS resume checker",
  richSnippets: ["FAQPage", "SoftwareApplication", "WebSite", "Organization", "BreadcrumbList"],
};

export const CTR_HOW_WE_SCORE: PageCtrMeta = {
  title: ctrTitle("How We Score Resumes", "ATS Methodology"),
  description: ctrMeta(
    "Transparent ATS scoring — parse health, keywords, structure & match. How ResumeIQ calculates your score."
  ),
  h1: "How We Score Resumes",
  primaryKeyword: "how we score resumes",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_OUR_ALGORITHM: PageCtrMeta = {
  title: ctrTitle("Our Resume Algorithm", "How Analysis Works"),
  description: ctrMeta(
    "Step-by-step resume analysis — extraction, format checks, keyword match & AI suggestions explained."
  ),
  h1: "Our Resume Analysis Algorithm",
  primaryKeyword: "resume analysis algorithm",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_CHECKER: PageCtrMeta = {
  title: ctrTitle("ATS Resume Checker", "Upload PDF Free"),
  description: ctrMeta("Upload your resume for a priority fix list in under 2 minutes."),
  ogTitle: "ATS Resume Checker — Upload & Score Free",
  h1: "ATS Resume Checker — Upload & Score Your Resume",
  primaryKeyword: "ATS resume checker",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_FREE_RESUME_CHECKER_ONLINE: PageCtrMeta = {
  title: ctrTitle("Free Resume Checker Online", "ATS Scan"),
  description: ctrMeta("See what hiring software extracts from your PDF or pasted text."),
  ogTitle: "Free Resume Checker Online — Instant ATS Scan",
  h1: "Free Resume Checker Online",
  primaryKeyword: "free resume checker online",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_FREE_ATS_SCORE_CHECKER: PageCtrMeta = {
  title: ctrTitle("Free ATS Score Checker", "Instant Results"),
  description: ctrMeta("Get your compatibility %, missing keywords, and format flags."),
  ogTitle: "Free ATS Score Checker — Instant Resume Score",
  h1: "Free ATS Score Checker",
  primaryKeyword: "free ATS score checker",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH: PageCtrMeta = {
  title: ctrTitle("Resume Match Tool", "vs Job Posting"),
  description: ctrMeta("Paste a job description — see missing keywords and skill gaps."),
  ogTitle: "Resume Match Analyzer — Free Match %",
  h1: "Resume Match Tool",
  primaryKeyword: "resume match tool",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH_SCORE: PageCtrMeta = {
  title: ctrTitle("Resume Match Score", "What % Means"),
  description: ctrMeta("Learn benchmarks, how match differs from ATS score, and how to improve."),
  ogTitle: "Resume Match Score Explained — Improve Before Apply",
  h1: "Resume Match Score Explained",
  primaryKeyword: "resume match score explained",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ABOUT: PageCtrMeta = {
  title: ctrTitle("About ResumeIQ", "Resume Platform"),
  description: ctrMeta("Free ATS resume checker, match tool, and optimization guides for job seekers."),
  h1: "About ResumeIQ",
  primaryKeyword: "about ResumeIQ",
  richSnippets: ["Organization", "BreadcrumbList", "FAQPage"],
};

export const CTR_METHODOLOGY: PageCtrMeta = {
  title: ctrTitle("How ATS Scoring Works", "Methodology"),
  description: ctrMeta("Transparent scoring: parse health, keyword matching, and job-post comparison."),
  ogTitle: "ATS Scoring Methodology — Transparent & Global",
  h1: "How ATS Scoring Works",
  primaryKeyword: "how ATS scoring works",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_HOW_ATS_WORKS: PageCtrMeta = {
  title: ctrTitle("How ATS Works", "5 Layers Explained"),
  description: ctrMeta("Parse, index, keyword rank, filters, and recruiter skim — fix the right layer."),
  ogTitle: "How ATS Works — From Upload to Recruiter Screen",
  h1: "How ATS Works",
  primaryKeyword: "how ATS works",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH_ANALYZER_LANDING: PageCtrMeta = {
  title: ctrTitle("Job Description Analyzer", "Resume Match %"),
  description: ctrMeta("Compare your resume to any job post — keyword gaps and tailoring tips."),
  ogTitle: "Job Description Analyzer — Free Resume Match",
  h1: "Job Description Analyzer — Resume Match Score",
  primaryKeyword: "job description analyzer",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_KEYWORD_TOOL_LANDING: PageCtrMeta = {
  title: ctrTitle("Resume Keyword Tool", "ATS Analyzer"),
  description: ctrMeta("Extract terms from job posts and compare them to your resume."),
  ogTitle: "Resume Keyword Tool — Find Missing ATS Terms",
  h1: "Resume Keyword Tool",
  primaryKeyword: "resume keyword tool",
  richSnippets: ["SoftwareApplication", "FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SCORE_CHECKER: PageCtrMeta = {
  title: ctrTitle("Resume Score Checker", "What ATS % Means"),
  description: ctrMeta("Understand your ATS rating, benchmarks, and the fastest fixes to raise it."),
  ogTitle: "Resume Score Checker — ATS Rating Guide",
  h1: "Resume Score Checker",
  primaryKeyword: "resume score checker",
  richSnippets: ["Article", "FAQPage", "SoftwareApplication", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_KEYWORDS_CHECKER: PageCtrMeta = {
  title: ctrTitle("Resume Keywords Checker", "Find Missing Terms"),
  description: ctrMeta("Extract job-post keywords and find gaps in your resume ethically."),
  ogTitle: "Resume Keywords Checker — Free ATS Gap Scan",
  h1: "Resume Keywords Checker",
  primaryKeyword: "resume keywords checker",
  richSnippets: ["Article", "FAQPage", "SoftwareApplication", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_RESUME_CHECKER_LANDING: PageCtrMeta = {
  title: ctrTitle("How ATS Resume Checker Works", "Guide"),
  description: ctrMeta("Learn how ATS parses resumes, scores keywords, and flags format issues."),
  ogTitle: "How ATS Resume Checker Works — Full Guide",
  h1: "How the ATS Resume Checker Works",
  primaryKeyword: "how ATS resume checker works",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_RESUME_REVIEW: PageCtrMeta = {
  title: ctrTitle("ATS Resume Review", "Parse Test & Fixes"),
  description: ctrMeta("See what parsers extract, find keyword gaps, and get a priority fix checklist."),
  ogTitle: "ATS Resume Review — Free Parse Test + Fix Plan",
  h1: "ATS Resume Review",
  primaryKeyword: "ATS resume review",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_AI_RESUME_REVIEW: PageCtrMeta = {
  title: ctrTitle("AI Resume Review", "ATS Scan Online"),
  description: ctrMeta("AI-powered score, keyword gaps, format flags, and bullet suggestions."),
  ogTitle: "AI Resume Review — Free ATS Analysis",
  h1: "AI Resume Review",
  primaryKeyword: "AI resume review",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_CV_CHECKER: PageCtrMeta = {
  title: ctrTitle("CV Checker Online", "Free ATS Scan"),
  description: ctrMeta("Upload your CV for ATS score, keyword gaps, and format warnings worldwide."),
  ogTitle: "CV Checker — Free Online ATS Scan",
  h1: "CV Checker Online",
  primaryKeyword: "CV checker online",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_REVIEW: PageCtrMeta = {
  title: ctrTitle("Resume Review Online", "Free Rubric + ATS"),
  description: ctrMeta("10-minute recruiter rubric plus ATS checker — fix clarity and keywords."),
  ogTitle: "Resume Review Online — Free ATS + Human Checklist",
  h1: "Resume Review Online",
  primaryKeyword: "resume review online",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_GUIDE_LANDING: PageCtrMeta = {
  title: ctrTitle("ATS Guide Hub", "Resume Optimization"),
  description: ctrMeta("Format, keywords, match score, and mistakes — guides linked to free tools."),
  ogTitle: "ATS Guide Hub — Professional Resume Optimization",
  h1: "ATS Guide Hub",
  primaryKeyword: "ATS guide hub",
  richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_FAQ_CENTER: PageCtrMeta = {
  title: ctrTitle("ATS Resume FAQ", "Answers & Guides"),
  description: ctrMeta("Answers on scoring, match %, keywords, and interview readiness."),
  ogTitle: "ATS Resume FAQ Center — Help & Guides",
  h1: "ATS Resume FAQ Center",
  primaryKeyword: "ATS resume FAQ",
  richSnippets: ["FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_CONTACT: PageCtrMeta = {
  title: ctrTitle("Contact ResumeIQ", "Support"),
  description: ctrMeta("Resume checker feedback, bug reports, partnerships, and press inquiries."),
  h1: "Contact ResumeIQ",
  primaryKeyword: "contact ResumeIQ",
  richSnippets: ["Organization", "BreadcrumbList", "FAQPage"],
};

export const CTR_EDITORIAL_POLICY: PageCtrMeta = {
  title: ctrTitle("Editorial Policy", "Content Standards"),
  description: ctrMeta("How ResumeIQ writes resume guides — accuracy, transparency, and corrections."),
  h1: "Editorial Policy",
  primaryKeyword: "editorial policy",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_HOW_RESUME_ANALYSIS: PageCtrMeta = {
  title: ctrTitle("How Resume Analysis Works", "Explained"),
  description: ctrMeta("Extraction, format checks, keywords, skills, and ATS score calculation step by step."),
  ogTitle: "How Resume Analysis Works — Full Breakdown",
  h1: "How Resume Analysis Works",
  primaryKeyword: "how resume analysis works",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_PRIVACY: PageCtrMeta = {
  title: ctrTitle("Privacy Policy", "ResumeIQ"),
  description: "How ResumeIQ handles resume uploads, cookies, and analytics. We do not sell resume data.",
  h1: "Privacy Policy",
  primaryKeyword: "privacy policy",
  richSnippets: ["BreadcrumbList"],
};

export const CTR_TERMS: PageCtrMeta = {
  title: ctrTitle("Terms of Service", "ResumeIQ"),
  description: "Acceptable use and disclaimers for the free ATS resume checker and career tools.",
  h1: "Terms of Service",
  primaryKeyword: "terms of service",
  richSnippets: ["BreadcrumbList"],
};

export const CTR_RESUME_KEYWORDS_DATABASE: PageCtrMeta = {
  title: ctrTitle("Resume Keywords", "Lists by Role"),
  description: ctrMeta("ATS keyword lists for 10+ professions — skills, verbs, and must-have phrases."),
  ogTitle: "Resume Keywords Database — ATS Lists by Role",
  h1: "Resume Keywords",
  primaryKeyword: "resume keywords",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_EXAMPLES: PageCtrMeta = {
  title: ctrTitle("ATS Resume Examples", "Good vs Bad"),
  description: ctrMeta("Layouts, bullets, and keywords that parse vs break — then test your PDF."),
  ogTitle: "ATS Resume Examples — Good vs Bad Layouts",
  h1: "ATS Resume Examples",
  primaryKeyword: "ATS resume examples",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_CHECKLIST: PageCtrMeta = {
  title: ctrTitle("ATS Resume Checklist", "Pre-Submit QA"),
  description: ctrMeta("Format, keywords, contact block, and export QA — tick every item before you apply."),
  ogTitle: "ATS Resume Checklist — Pre-Submit QA",
  h1: "ATS Resume Checklist",
  primaryKeyword: "ATS resume checklist",
  richSnippets: ["FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_KEYWORDS: PageCtrMeta = {
  title: ctrTitle("ATS Resume Keywords", "Where to Place"),
  description: ctrMeta("Which terms matter, where they belong, and how to avoid keyword stuffing."),
  ogTitle: "ATS Resume Keywords Guide — Ethical Placement",
  h1: "ATS Resume Keywords",
  primaryKeyword: "ATS resume keywords",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_HUB: PageCtrMeta = {
  title: ctrTitle("ATS Friendly Resume Hub", "Tools & Guides"),
  description: ctrMeta("Checker, match tool, role guides, and keyword resources in one place."),
  ogTitle: "ATS Resume Hub — Free Checker & Guides",
  h1: "ATS Friendly Resume Hub",
  primaryKeyword: "ATS friendly resume hub",
  richSnippets: ["FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_KNOWLEDGE_CENTER: PageCtrMeta = {
  title: ctrTitle("ATS Knowledge Center", "16 Guides"),
  description: ctrMeta("Format, keywords, match score, mistakes, and parsing — all linked to the checker."),
  ogTitle: "ATS Knowledge Center — 16 Free Resume Guides",
  h1: "ATS Knowledge Center",
  primaryKeyword: "ATS knowledge center",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESOURCE_HUB: PageCtrMeta = {
  title: ctrTitle("ATS Resource Hub", "Guides & Tools"),
  description: ctrMeta("Guides, examples, keyword database, match tool, and profession hubs."),
  ogTitle: "ATS Resource Hub — Resume Optimization Library",
  h1: "ATS Resource Hub",
  primaryKeyword: "ATS resource hub",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_FORMAT: PageCtrMeta = {
  title: ctrTitle("ATS Resume Format", "What Parses"),
  description: ctrMeta("Single-column vs two-column, PDF vs Word, and what parsers actually read."),
  ogTitle: "ATS Resume Format — Parser Sees This, Not Your Design",
  h1: "ATS Resume Format",
  primaryKeyword: "ATS resume format",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_MISTAKES: PageCtrMeta = {
  title: ctrTitle("ATS Resume Mistakes", "10 Silent Rejects"),
  description: ctrMeta("Two columns, keyword dumps, buried titles — before/after fixes for each."),
  ogTitle: "ATS Resume Mistakes — Recruiter Reality vs Candidate Myths",
  h1: "ATS Resume Mistakes",
  primaryKeyword: "ATS resume mistakes",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_SCORE: PageCtrMeta = {
  title: ctrTitle("What Is a Good ATS Score", "Benchmarks"),
  description: ctrMeta("What your score measures, how it differs from match %, and fastest fixes."),
  ogTitle: "What Is a Good ATS Score? Benchmarks + Free Checker",
  h1: "What Is a Good ATS Score",
  primaryKeyword: "what is a good ATS score",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "HowTo", "Organization"],
};

export const CTR_ATS_FRIENDLY: PageCtrMeta = {
  title: ctrTitle("ATS Friendly Resume", "10-Step Guide"),
  description: ctrMeta("Format, keywords, bullet proof, and export QA — real case study included."),
  ogTitle: "ATS Friendly Resume — 10 Steps + Before/After Case Study",
  h1: "How to Build an ATS Friendly Resume",
  primaryKeyword: "ATS friendly resume",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "HowTo", "Organization"],
};

export const CTR_INDUSTRY_KEYWORDS: PageCtrMeta = {
  title: ctrTitle("Resume Keywords by Industry", "ATS Guide"),
  description: ctrMeta("Sector-specific keywords for tech, healthcare, finance, and more."),
  ogTitle: "Resume Keywords by Industry — ATS Guide 2026",
  h1: "Resume Keywords by Industry",
  primaryKeyword: "resume keywords by industry",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_TEMPLATES: PageCtrMeta = {
  title: ctrTitle("ATS Resume Templates", "Parse Safety Ranked"),
  description: ctrMeta("Which templates parse vs break — tier ranking and adaptation tips."),
  ogTitle: "ATS Resume Templates — Ranked by Parse Safety",
  h1: "ATS Resume Templates",
  primaryKeyword: "ATS resume templates",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ULTIMATE_GUIDE: PageCtrMeta = {
  title: ctrTitle("Ultimate ATS Resume Guide", "7 Examples"),
  description: ctrMeta("Parsing stories, keyword wins, format traps, and score fixes step by step."),
  ogTitle: "Ultimate ATS Resume Guide — Stories That Fix Silence",
  h1: "Ultimate ATS Resume Guide",
  primaryKeyword: "ultimate ATS resume guide",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_KEYWORDS_FINDER: PageCtrMeta = {
  title: ctrTitle("ATS Keywords Finder", "Extract Job Terms"),
  description: ctrMeta("Paste any job post — extract hard skills, tools, and certifications instantly."),
  ogTitle: "ATS Keywords Finder — Placement Guide + Free Tool",
  h1: "ATS Keywords Finder",
  primaryKeyword: "ATS keywords finder",
  richSnippets: ["SoftwareApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_BULLET_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Resume Bullet Generator", "ATS Bullets"),
  description: ctrMeta("Turn duties into impact bullets — copy suggestions and score your resume."),
  ogTitle: "Resume Bullet Point Generator — Free ATS Bullets",
  h1: "Resume Bullet Generator",
  primaryKeyword: "resume bullet generator",
  richSnippets: ["SoftwareApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SKILLS_ANALYZER: PageCtrMeta = {
  title: ctrTitle("Resume Skills Analyzer", "Gap Audit"),
  description: ctrMeta("Scan skills with and without bullet proof — spot gaps vs your target job."),
  ogTitle: "Resume Skills Analyzer — Skills Audit + ATS Credibility",
  h1: "Resume Skills Analyzer",
  primaryKeyword: "resume skills analyzer",
  richSnippets: ["SoftwareApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SUMMARY_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Resume Summary Generator", "ATS Drafts"),
  description: ctrMeta("Draft professional summaries — title, tools, and scope in 2 sentences."),
  ogTitle: "Resume Summary Generator — Before/After Examples Included",
  h1: "Resume Summary Generator",
  primaryKeyword: "resume summary generator",
  richSnippets: ["SoftwareApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_ACHIEVEMENT_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Resume Achievement Generator", "Impact Bullets"),
  description: ctrMeta("Turn duties into achievements — XYZ formula with 5 before/after rewrites."),
  ogTitle: "Resume Achievement Generator — 5 Before/After Rewrites",
  h1: "Resume Achievement Generator",
  primaryKeyword: "resume achievement generator",
  richSnippets: ["SoftwareApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_EXAMPLES_LIBRARY: PageCtrMeta = {
  title: ctrTitle("Resume Examples", "9 ATS Samples"),
  description: ctrMeta("Software engineer, data analyst, PM, marketing, HR, and more role samples."),
  ogTitle: "Resume Examples Library — ATS Samples by Role",
  h1: "Resume Examples",
  primaryKeyword: "resume examples",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_AI_REWRITE: PageCtrMeta = {
  title: ctrTitle("AI Resume Rewrite", "Bullet & Keyword Fixes"),
  description: ctrMeta("Stronger bullets, ATS keywords, and fixes tailored to your job post."),
  ogTitle: "AI Resume Rewrite — Free ATS Optimization",
  h1: "AI Resume Rewrite",
  primaryKeyword: "AI resume rewrite",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_CAREER_SUCCESS_HUB: PageCtrMeta = {
  title: ctrTitle("Career Success Hub", "Resume Tools"),
  description: ctrMeta("Checker, match analyzer, keyword finder, and generators — one workflow."),
  ogTitle: "Career Success Hub — Free Resume Tools & Guides",
  h1: "Career Success Hub",
  primaryKeyword: "career success hub",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_OPTIMIZATION: PageCtrMeta = {
  title: ctrTitle("Resume Optimization Guide", "Fix Before Apply"),
  description: ctrMeta("Score, tailor per job, fix bullets, and pass screening step by step."),
  ogTitle: "Resume Optimization Guide — Free Step-by-Step",
  h1: "Resume Optimization Guide",
  primaryKeyword: "resume optimization guide",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_WHY_NOT_GETTING_INTERVIEWS: PageCtrMeta = {
  title: ctrTitle("Why No Interviews", "Resume Fixes"),
  description: ctrMeta("Diagnose screening, keyword, and bullet issues — then fix what recruiters never see."),
  ogTitle: "Why You're Not Getting Interviews — Fixes That Work",
  h1: "Why My Resume Is Not Getting Interviews",
  primaryKeyword: "why my resume is not getting interviews",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_WHY_RESUME_GETS_REJECTED: PageCtrMeta = {
  title: ctrTitle("Why Resume Gets Rejected", "5 Stages"),
  description: ctrMeta("Pinpoint parse failure, keyword filters, or title mismatch — fix the right layer."),
  ogTitle: "Why Resume Gets Rejected — Diagnose by Stage",
  h1: "Why Your Resume Gets Rejected",
  primaryKeyword: "why resume gets rejected",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_NOT_PASSING_ATS: PageCtrMeta = {
  title: ctrTitle("Resume Not Passing ATS", "Diagnose & Fix"),
  description: ctrMeta("Identify parse vs keyword failure in 5 minutes with real examples."),
  ogTitle: "Resume Not Passing ATS — Free Diagnosis + Fix Plan",
  h1: "Resume Not Passing ATS",
  primaryKeyword: "resume not passing ATS",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_KEYWORDS_MISSING: PageCtrMeta = {
  title: ctrTitle("Resume Keywords Missing", "Find Gaps"),
  description: ctrMeta("Find keyword gaps vs job posts with before/after bullet examples."),
  ogTitle: "Resume Keywords Missing — Free Gap Finder",
  h1: "Resume Keywords Missing",
  primaryKeyword: "resume keywords missing",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_HOW_TO_TAILOR_RESUME: PageCtrMeta = {
  title: ctrTitle("Tailor Resume for Job", "15-Min Method"),
  description: ctrMeta("Extract terms, edit 3 bullets, re-check match % before you apply."),
  ogTitle: "Tailor Resume to Job Description — Step-by-Step Guide",
  h1: "How to Tailor Resume for a Job Description",
  primaryKeyword: "how to tailor resume for job description",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_HOW_TO_IMPROVE_RESUME_SCORE: PageCtrMeta = {
  title: ctrTitle("Improve Resume Score", "7-Day Plan"),
  description: ctrMeta("Raise ATS score with format, keyword, and metric fixes — honest, not stuffing."),
  ogTitle: "How to Improve Resume Score — Free Checker",
  h1: "How to Improve Resume Score",
  primaryKeyword: "how to improve resume score",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MISTAKES_INTERVIEWS: PageCtrMeta = {
  title: ctrTitle("Resume Mistakes", "Cost Interviews"),
  description: ctrMeta("10 mistakes with before/after examples — catch issues before recruiters do."),
  ogTitle: "Resume Mistakes That Cost You Interviews",
  h1: "Resume Mistakes That Cost Interviews",
  primaryKeyword: "resume mistakes that cost interviews",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SCREENING_EXPLAINED: PageCtrMeta = {
  title: ctrTitle("Resume Screening Explained", "6 Stages"),
  description: ctrMeta("ATS parse, keyword rank, recruiter skim — see which stage loses you."),
  ogTitle: "Resume Screening Explained — ATS to Hiring Manager",
  h1: "Resume Screening Explained",
  primaryKeyword: "resume screening explained",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_REJECTED_BY_ATS: PageCtrMeta = {
  title: ctrTitle("Resume Rejected by ATS", "30-Min Fix"),
  description: ctrMeta("Diagnose parse vs keyword failures and fix your exact PDF in 30 minutes."),
  ogTitle: "Resume Rejected By ATS — Free Diagnosis + Fix Plan",
  h1: "Resume Rejected By ATS",
  primaryKeyword: "resume rejected by ATS",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_COMMON_ATS_REJECTION_REASONS: PageCtrMeta = {
  title: ctrTitle("ATS Rejection Reasons", "12 Fixes"),
  description: ctrMeta("12 silent rejection triggers — columns, keyword dumps, buried titles — each with a fix."),
  ogTitle: "12 ATS Rejection Reasons — Fix Before You Apply",
  h1: "Common ATS Resume Rejection Reasons",
  primaryKeyword: "common ATS resume rejection reasons",
  richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_COMPLETE_ATS_GUIDE: PageCtrMeta = {
  title: ctrTitle("ATS Resume Optimization", "12-Step Guide"),
  description: ctrMeta("Fix parsing, keywords, and bullets — real before/after examples included."),
  ogTitle: "ATS Resume Optimization — 12-Step Guide With Examples",
  h1: "ATS Resume Optimization Guide",
  primaryKeyword: "ATS resume optimization guide",
  richSnippets: ["Article", "FAQPage", "HowTo", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_PLATFORM_HUB_INDEX: PageCtrMeta = {
  title: ctrTitle("Free Resume Tools", "14 Tools Hub"),
  description: ctrMeta("ATS checker, match analyzer, keyword finder, and 11 more — start with a free scan."),
  ogTitle: "14 Free Resume Tools — ATS Score, Keywords & Fixes",
  h1: "Free Resume Tools Hub",
  primaryKeyword: "free resume tools",
  richSnippets: ["ItemList", "FAQPage", "Organization", "BreadcrumbList"],
};

export const CTR_RESUME_ACTION_VERBS: PageCtrMeta = {
  title: ctrTitle("Resume Action Verbs", "200+ Strong Words"),
  description: ctrMeta("Leadership, engineering, sales, finance, healthcare — before/after examples."),
  ogTitle: "200+ Resume Action Verbs — By Category & Role",
  h1: "Resume Action Verbs",
  primaryKeyword: "resume action verbs",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_PARSING: PageCtrMeta = {
  title: ctrTitle("Resume Parsing", "How ATS Reads Files"),
  description: ctrMeta("How ATS extracts text from PDF and DOCX — and why parsing fails."),
  ogTitle: "Resume Parsing — What ATS Extracts From Your File",
  h1: "Resume Parsing",
  primaryKeyword: "resume parsing",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_OBJECTIVE: PageCtrMeta = {
  title: ctrTitle("Resume Objective vs Summary", "When to Use"),
  description: ctrMeta("When to use each, with examples for entry-level, career changers, and internships."),
  ogTitle: "Resume Objective — When to Use It & How to Write It",
  h1: "Resume Objective vs Summary",
  primaryKeyword: "resume objective vs summary",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_HEADLINE_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Resume Headline Generator", "60+ Examples"),
  description: ctrMeta("ATS-friendly headlines by role — formulas and common mistakes to avoid."),
  ogTitle: "Resume Headline Generator — ATS Examples by Industry",
  h1: "Resume Headline Generator",
  primaryKeyword: "resume headline generator",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_COVER_LETTER_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Cover Letter Generator", "ATS Templates"),
  description: ctrMeta("Proven structures, keyword alignment tips, and role-specific examples."),
  ogTitle: "Cover Letter Generator — ATS-Friendly Templates & Examples",
  h1: "Cover Letter Generator",
  primaryKeyword: "cover letter generator",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_INTERVIEW_QUESTION_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Interview Questions", "100+ by Role"),
  description: ctrMeta("Role-specific questions, STAR answers, and common mistake warnings."),
  ogTitle: "Interview Question Generator — Role-Specific Questions & Answers",
  h1: "Interview Question Generator",
  primaryKeyword: "interview question generator",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_OBJECTIVE_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Resume Objective Generator", "40+ Examples"),
  description: ctrMeta("Entry-level, career changers, and internships — formula and mistakes to avoid."),
  ogTitle: "Resume Objective Generator — Examples & Formula",
  h1: "Resume Objective Generator",
  primaryKeyword: "resume objective generator",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SKILLS_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Resume Skills Generator", "Lists by Role"),
  description: ctrMeta("ATS-ready skills lists — what to include, how to format, what to avoid."),
  ogTitle: "Resume Skills Generator — Skills List by Job Role",
  h1: "Resume Skills Generator",
  primaryKeyword: "resume skills generator",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_GRAMMAR_CHECKER: PageCtrMeta = {
  title: ctrTitle("Resume Grammar Checker", "Fix Errors"),
  description: ctrMeta("Grammar, tense inconsistencies, passive voice, and weak language fixes."),
  ogTitle: "Resume Grammar Checker — Tense, Tone & Error Guide",
  h1: "Resume Grammar Checker",
  primaryKeyword: "resume grammar checker",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_FORMATTER: PageCtrMeta = {
  title: ctrTitle("Resume Formatter", "ATS-Safe Rules"),
  description: ctrMeta("Fonts, margins, columns, section order, file type, and formatting errors."),
  ogTitle: "Resume Formatter — ATS-Safe Formatting Rules & Examples",
  h1: "Resume Formatter",
  primaryKeyword: "resume formatter",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_TEMPLATE_BUILDER: PageCtrMeta = {
  title: ctrTitle("Resume Template Builder", "ATS-Safe Layouts"),
  description: ctrMeta("Single-column layouts, clean fonts, section order, and what to avoid."),
  ogTitle: "Resume Template Builder — ATS-Safe Templates & Examples",
  h1: "Resume Template Builder",
  primaryKeyword: "resume template builder",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
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
