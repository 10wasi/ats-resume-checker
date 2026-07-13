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
  title: "Free ATS Resume Checker — Score, Keywords & Fixes",
  description:
    "Get your ATS score, find missing keywords, and see exactly what to fix — free, no signup. Upload PDF or paste text. Results in under 2 minutes.",
  ogTitle: "Free ATS Resume Checker — Instant Score & Keyword Gaps",
  h1: "Free ATS Resume Checker — Score, Keywords & Fixes",
  primaryKeyword: "ATS resume checker",
  richSnippets: ["FAQPage", "WebApplication", "WebSite", "Organization", "BreadcrumbList"],
};

export const CTR_RESUME_CHECKER: PageCtrMeta = {
  title: "ATS Resume Checker — Free Score, Keywords & Fixes",
  description:
    "Upload your resume. Get an ATS score, missing keywords, format issues, and a priority fix list in under 2 minutes. Free — no account, no paywall.",
  ogTitle: "ATS Resume Checker — Free Score & Keyword Gaps",
  h1: "Free Resume Checker — ATS Score, Keywords & Fixes",
  primaryKeyword: "resume checker",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_FREE_RESUME_CHECKER_ONLINE: PageCtrMeta = {
  title: "Resume Checker Free Online — Instant ATS Scan (2026)",
  description:
    "No account, no paywall: upload PDF or paste text for ATS score, keyword gaps & format flags. See what recruiters' software actually extracts.",
  ogTitle: "Free Resume Checker Online — Instant ATS Scan",
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
  title: "How ATS Works in 2026 — 5 Layers Explained",
  description:
    "Where resumes die: parse, index, keyword rank, filters, then 6-second human skim. Learn each ATS layer and test your file free—fix the right problem first.",
  ogTitle: "How ATS Works — From Upload to Recruiter Screen",
  h1: "How ATS Works: The 5-Layer Resume Screening Process",
  primaryKeyword: "how ATS works",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH_ANALYZER_LANDING: PageCtrMeta = {
  title: "Resume Match Analyzer — Free Job Match Score",
  description:
    "Paste any job description alongside your resume and get a keyword match %, categorized gaps, and tailoring suggestions—free, no account required.",
  ogTitle: "Resume Match Analyzer — Improve Before Apply",
  h1: "Resume Match Analyzer: Free Job Description Match",
  primaryKeyword: "free job description match tool",
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
  title: "Resume Keywords for ATS — Free Lists by Role (2026)",
  description:
    "ATS keyword lists for 10+ professions: skills, verbs & must-have phrases. Find your gaps with the free match tool—scan in 60 seconds.",
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
  title: "ATS Knowledge Center — 16 Free Resume Guides",
  description:
    "Sixteen free ATS guides covering format, keywords, match score, mistakes, examples, checklist, parsing, and action verbs—each connected to the free resume checker workflow.",
  ogTitle: "ATS Knowledge Center — 16 Free Resume Guides",
  h1: "ATS Knowledge Center for Resume Optimization",
  primaryKeyword: "ATS knowledge center",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESOURCE_HUB: PageCtrMeta = {
  title: "ATS Resource Hub — Guides, Tools & Examples",
  description:
    "Everything in one place: ATS guides, resume examples, keyword database, match tool, profession hubs, and checklist. Your free resume optimization library.",
  ogTitle: "ATS Resource Hub — Resume Optimization Library",
  h1: "ATS Resume Optimization Resource Hub",
  primaryKeyword: "ATS resume resource hub",
  richSnippets: ["ItemList", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_FORMAT: PageCtrMeta = {
  title: "ATS Resume Format Guide — What Parses vs Breaks (2026)",
  description:
    "ATS resume format rules: what parsers read vs ignore, single-column vs two-column, PDF vs Word, and a decision tree. Test your layout free.",
  ogTitle: "ATS Resume Format — Parser Sees This, Not Your Design",
  h1: "ATS Resume Format: What the Parser Actually Reads",
  primaryKeyword: "ATS resume format",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_MISTAKES: PageCtrMeta = {
  title: "10 ATS Resume Mistakes That Cause Silent Rejections",
  description:
    "10 ATS resume mistakes with before/after examples: two columns, keyword dumps, buried titles. Recruiter reality + myths table + fix checklist.",
  ogTitle: "ATS Resume Mistakes — Recruiter Reality vs Candidate Myths",
  h1: "ATS Resume Mistakes That Cost You Interviews",
  primaryKeyword: "ATS resume mistakes",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_SCORE: PageCtrMeta = {
  title: "What Is a Good ATS Score? Free Checker + 2026 Guide",
  description:
    "ATS score isn't a pass/fail grade—learn what yours measures, how it differs from match %, and which fixes raise it fastest. Check free with one upload.",
  ogTitle: "What Is a Good ATS Score? Benchmarks + Free Checker",
  h1: "ATS Score Explained for Resume Optimization",
  primaryKeyword: "ATS score",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "HowTo", "Organization"],
};

export const CTR_ATS_FRIENDLY: PageCtrMeta = {
  title: "ATS Friendly Resume — 10 Steps + Case Study (2026)",
  description:
    "Step-by-step ATS friendly resume guide: format, keywords, bullet proof, and export QA. Includes a real case study—51 to 78 score, same experience.",
  ogTitle: "ATS Friendly Resume — 10 Steps + Before/After Case Study",
  h1: "How to Build an ATS Friendly Resume: 10-Step Guide",
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
  title: "ATS Resume Templates — 3 Tiers Ranked for Parsers (Free)",
  description:
    "Which ATS resume templates actually parse vs break on upload. Tier 1–3 ranking, free vs paid reality, and how to adapt a template you already have.",
  ogTitle: "ATS Resume Templates — Ranked by Parse Safety",
  h1: "ATS Resume Templates: Ranked by Parse Safety",
  primaryKeyword: "ATS resume templates",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ULTIMATE_GUIDE: PageCtrMeta = {
  title: "Ultimate ATS Resume Guide — 7 Real Examples & Fixes",
  description:
    "Narrative ATS resume guide: parsing stories, keyword wins, format traps & score fixes. Step-by-step with free checker—pair with our master optimization hub.",
  ogTitle: "Ultimate ATS Resume Guide — Stories That Fix Silence",
  h1: "Ultimate ATS Resume Guide: Real Examples & Fixes",
  primaryKeyword: "ultimate ATS resume guide",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_KEYWORDS_FINDER: PageCtrMeta = {
  title: "ATS Keywords Finder — Extract Job Post Terms Free (2026)",
  description:
    "Paste any job post to extract ATS keywords: hard skills, tools, certifications, and domain phrases. Before/after bullet example + placement workflow.",
  ogTitle: "ATS Keywords Finder — Placement Guide + Free Tool",
  h1: "ATS Keywords Finder: Which Terms, Where to Place Them",
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
  title: "Resume Skills Analyzer — Audit Skills vs ATS Free",
  description:
    "Resume skills analyzer: scan for tools with and without bullet proof, spot stuffed skills sections, and find gaps vs your target job description.",
  ogTitle: "Resume Skills Analyzer — Skills Audit + ATS Credibility",
  h1: "Resume Skills Analyzer: Audit, Fix, and Prove Your Skills",
  primaryKeyword: "resume skills analyzer",
  richSnippets: ["WebApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SUMMARY_GENERATOR: PageCtrMeta = {
  title: "Resume Summary Generator — ATS-Optimized Draft Free",
  description:
    "Generate ATS-friendly professional summaries: title + tools + scope in 2 sentences. Before/after examples, mistakes table, and free checker link.",
  ogTitle: "Resume Summary Generator — Before/After Examples Included",
  h1: "Resume Summary Generator: Draft, Fix, and Score",
  primaryKeyword: "resume summary generator",
  richSnippets: ["WebApplication", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_ACHIEVEMENT_GENERATOR: PageCtrMeta = {
  title: "Resume Achievement Generator — Impact Bullets + 5 Rewrites",
  description:
    "Turn duties into achievements: XYZ formula, 5 before/after rewrites, estimation guide, and free ATS checker. Stronger bullets without fabricating metrics.",
  ogTitle: "Resume Achievement Generator — 5 Before/After Rewrites",
  h1: "Resume Achievement Generator: Turn Duties Into Proof",
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
  title: "Career Success Hub — Resume Tools, Guides & Score",
  description:
    "Free resume checker, match analyzer, keyword finder, skills gap tool, and 3 generators — all connected. One hub, one workflow, zero signups.",
  ogTitle: "Career Success Hub — Free Resume Tools & Guides",
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
  title: "Why Your Resume Gets Rejected — 5 Stages Diagnosed",
  description:
    "Rejected before a human sees you? Pinpoint parse failure, keyword filters, or title mismatch—then fix that layer with our free checker. Real examples included.",
  ogTitle: "Why Resume Gets Rejected — Diagnose by Stage",
  h1: "Why Your Resume Gets Rejected (And How to Diagnose It)",
  primaryKeyword: "why resume gets rejected",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_NOT_PASSING_ATS: PageCtrMeta = {
  title: "Resume Not Passing ATS? Diagnose & Fix Free (2026)",
  description:
    "Resume not passing ATS screening? Identify parse vs keyword failure in 5 minutes—see real examples and test your PDF free before your next application.",
  ogTitle: "Resume Not Passing ATS — Free Diagnosis + Fix Plan",
  h1: "Resume Not Passing ATS: Diagnose and Fix",
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
  title: "How to Tailor Resume for Any Job — 15-Minute Method",
  description:
    "How to tailor your resume for a job description: extract terms, edit 3 bullets, re-check match % before you apply. Free match analyzer included.",
  ogTitle: "Tailor Resume to Job Description — Step-by-Step Guide",
  h1: "How to Tailor Resume for a Job Description (15-Minute Method)",
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
  title: "Resume Screening Explained — 6 Stages to Interview",
  description:
    "Resume screening explained: ATS parse, keyword rank, recruiter skim, hiring manager review. See which stage loses most applicants—and fix yours.",
  ogTitle: "Resume Screening Explained — ATS to Hiring Manager",
  h1: "Resume Screening Explained: 6 Stages From Upload to Interview",
  primaryKeyword: "resume screening explained",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_REJECTED_BY_ATS: PageCtrMeta = {
  title: "Resume Rejected by ATS? Free 30-Min Fix Plan (2026)",
  description:
    "ATS blocked your resume? Diagnose parse vs keyword failures, see before/after examples, and run the free checker on your exact PDF—fix in 30 minutes.",
  ogTitle: "Resume Rejected By ATS — Free Diagnosis + Fix Plan",
  h1: "Resume Rejected By ATS: Diagnose & Fix Free",
  primaryKeyword: "resume rejected by ATS",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_COMMON_ATS_REJECTION_REASONS: PageCtrMeta = {
  title: "12 ATS Rejection Reasons — With Fixes (2026)",
  description:
    "Columns, keyword dumps, buried titles—12 reasons ATS silently rejects you, each with a fix. Test your PDF free before the next application.",
  ogTitle: "12 ATS Rejection Reasons — Fix Before You Apply",
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
  title: "ATS Resume Optimization Guide — 12 Steps (2026)",
  description:
    "Fix parsing, add missing keywords, rewrite weak bullets, and pass ATS screening. 12-step guide with real before/after examples and a free score check.",
  ogTitle: "ATS Resume Optimization — 12-Step Guide With Examples",
  h1: "The Ultimate ATS Resume Optimization Guide",
  primaryKeyword: "ATS resume optimization",
  richSnippets: ["Article", "FAQPage", "HowTo", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_PLATFORM_HUB_INDEX: PageCtrMeta = {
  title: "12 Free Resume Tools — ATS Checker, Match & More",
  description:
    "ATS checker, job match analyzer, keyword finder, bullet generator, and 8 more free tools. No signup. Start with a free resume scan in 2 minutes.",
  ogTitle: "12 Free Resume Tools — ATS Score, Keywords & Fixes",
  h1: "Resume Optimization Platform",
  primaryKeyword: "resume optimization platform",
  richSnippets: ["ItemList", "FAQPage", "Organization", "BreadcrumbList"],
};

export const CTR_ATS_RESUME_REVIEW: PageCtrMeta = {
  title: "ATS Resume Review — Free Scan, Score & Fix Plan",
  description:
    "Free ATS resume review: see what parsers extract, find keyword gaps vs your job post, and get a priority fix checklist. No signup, results in under 2 minutes.",
  ogTitle: "ATS Resume Review — Free Parse Test + Fix Plan",
  h1: "ATS Resume Review: Free Online Scan & Fixes",
  primaryKeyword: "ATS resume review",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_ACTION_VERBS: PageCtrMeta = {
  title: "Resume Action Verbs — 200+ Strong Words by Category",
  description:
    "Strong resume action verbs for every role: leadership, engineering, sales, finance, healthcare. Before/after examples and ATS keyword guidance.",
  ogTitle: "200+ Resume Action Verbs — By Category & Role",
  h1: "Resume Action Verbs: 200+ Strong Words by Category",
  primaryKeyword: "resume action verbs",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_PARSING: PageCtrMeta = {
  title: "Resume Parsing — How ATS Reads Your File (2026)",
  description:
    "Resume parsing explained: how ATS extracts text from PDF and DOCX, why parsers fail, and how to test your file before applying.",
  ogTitle: "Resume Parsing — What ATS Extracts From Your File",
  h1: "Resume Parsing: How ATS Reads Your Resume",
  primaryKeyword: "resume parsing",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_OBJECTIVE: PageCtrMeta = {
  title: "Resume Objective vs Summary — When to Use Each (+ Examples)",
  description:
    "Resume objective vs professional summary: when to use each, ATS keyword tips, examples for entry-level, career changers, and internships.",
  ogTitle: "Resume Objective — When to Use It & How to Write It",
  h1: "Resume Objective vs Summary: When to Use Each (With Examples)",
  primaryKeyword: "resume objective",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_HEADLINE_GENERATOR: PageCtrMeta = {
  title: "Resume Headline Generator — 60+ Examples by Role & Industry",
  description:
    "Write a powerful resume headline in minutes. See 60+ ATS-friendly resume headline examples by role, formula templates, and common mistakes to avoid.",
  ogTitle: "Resume Headline Generator — ATS Examples by Industry",
  h1: "Resume Headline Generator: 60+ Examples & Formulas",
  primaryKeyword: "resume headline generator",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_COVER_LETTER_GENERATOR: PageCtrMeta = {
  title: "Cover Letter Generator — Free ATS-Friendly Templates (2026)",
  description:
    "Generate an ATS-friendly cover letter using proven structures, keyword alignment tips, and role-specific examples. Free cover letter guide — no signup needed.",
  ogTitle: "Cover Letter Generator — ATS-Friendly Templates & Examples",
  h1: "Cover Letter Generator: ATS-Friendly Templates & Examples",
  primaryKeyword: "cover letter generator",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_INTERVIEW_QUESTION_GENERATOR: PageCtrMeta = {
  title: "Interview Question Generator — 100+ Questions by Role & Type",
  description:
    "Prepare for any interview with 100+ role-specific questions, model answers, STAR method examples, and common mistake warnings. Free interview prep guide.",
  ogTitle: "Interview Question Generator — Role-Specific Questions & Answers",
  h1: "Interview Question Generator: 100+ Questions by Role & Type",
  primaryKeyword: "interview question generator",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_GRAMMAR_CHECKER: PageCtrMeta = {
  title: "Resume Grammar Checker — Fix Tense, Tone & Errors (2026)",
  description:
    "Spot grammar errors, tense inconsistencies, passive voice, and weak language on your resume before applying. Free resume grammar guide with examples.",
  ogTitle: "Resume Grammar Checker — Tense, Tone & Error Guide",
  h1: "Resume Grammar Checker: Fix Errors Before You Apply",
  primaryKeyword: "resume grammar checker",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_FORMATTER: PageCtrMeta = {
  title: "Resume Formatter — ATS-Safe Format Guide & Rules (2026)",
  description:
    "Format your resume for ATS and recruiter readability. Covers fonts, margins, columns, section order, file type, and common formatting errors to avoid.",
  ogTitle: "Resume Formatter — ATS-Safe Formatting Rules & Examples",
  h1: "Resume Formatter: ATS-Safe Format Rules & Examples",
  primaryKeyword: "resume formatter",
  richSnippets: ["WebApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_TEMPLATE_BUILDER: PageCtrMeta = {
  title: "Resume Template Builder — Free ATS-Safe Templates (2026)",
  description:
    "Choose an ATS-compatible resume template. Covers single-column layouts, clean fonts, proper section order, and what to avoid. Free guide with examples.",
  ogTitle: "Resume Template Builder — ATS-Safe Templates & Examples",
  h1: "Resume Template Builder: ATS-Safe Templates & Layouts",
  primaryKeyword: "resume template builder",
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
