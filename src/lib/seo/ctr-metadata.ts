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
  title: ctrTitle("Resume Checker", "Free ATS Score Scan"),
  description: ctrMeta(
    "Free resume checker—upload PDF, see parser output, ATS score, keyword gaps, and ranked fixes. Match any job posting in the same tool."
  ),
  ogTitle: "Resume Checker — ATS Score, Parser & Keyword Gaps",
  h1: "Free ATS Resume Checker — See Your Score Before You Apply",
  primaryKeyword: "free ATS resume checker",
  richSnippets: ["FAQPage", "SoftwareApplication", "WebSite", "Organization", "BreadcrumbList"],
};

export const CTR_RESUME_CHECKER: PageCtrMeta = {
  title: ctrTitle("Resume Checker", "ATS Score & Parser"),
  description: ctrMeta(
    "Upload PDF or paste text—see ATS score, parser output, keyword gaps, and format flags. Free resume checker workflow before every application."
  ),
  ogTitle: "Resume Checker — ATS Score, Parser & Keyword Gaps",
  h1: "Resume Checker — ATS Score, Parser & Keyword Match",
  primaryKeyword: "ATS resume checker",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_FREE_RESUME_CHECKER_ONLINE: PageCtrMeta = {
  title: ctrTitle("Online Resume Checker", "Browser Upload"),
  description: ctrMeta(
    "Run a resume checker online in your browser—paste text or upload PDF to see what hiring software extracts before you hit apply."
  ),
  ogTitle: "Online Resume Checker — Browser ATS Scan",
  h1: "Online Resume Checker",
  primaryKeyword: "online resume checker",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_FREE_ATS_SCORE_CHECKER: PageCtrMeta = {
  title: ctrTitle("ATS Compatibility Score", "Free Percentage"),
  description: ctrMeta(
    "See your resume ATS compatibility percentage, missing keywords, and format flags—then learn which fixes raise the score fastest."
  ),
  ogTitle: "ATS Compatibility Score — Free Percentage Check",
  h1: "ATS Compatibility Score Checker",
  primaryKeyword: "ATS compatibility score",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

/** Cluster card copy for homepage hub — not a separate indexable URL. */
export const CTR_FREE_ATS_RESUME_CHECKER: PageCtrMeta = {
  title: ctrTitle("Resume Scanner Hub", "Start Here"),
  description: ctrMeta(
    "Start from the homepage scanner—parser preview, ATS score, keyword gaps, and fixes on the file you plan to submit."
  ),
  ogTitle: "Resume Scanner Hub — Start Your ATS Check",
  h1: "Start your free ATS scan",
  primaryKeyword: "ATS resume scanner",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_RESUME_CHECKER_ONLINE: PageCtrMeta = {
  title: ctrTitle("ATS Resume Checker Online", "Scan Free"),
  description: ctrMeta(
    "Browser-based ATS resume checker online—upload PDF, inspect parser output, keyword gaps, and layout flags without installing software."
  ),
  ogTitle: "ATS Resume Checker Online — Scan Resume Free",
  h1: "ATS Resume Checker Online",
  primaryKeyword: "ATS resume checker online",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_KEYWORD_CHECKER: PageCtrMeta = {
  title: ctrTitle("Resume Keyword Checker", "Improve ATS Score"),
  description: ctrMeta(
    "Compare resume keywords against any job posting—surface missing hard skills, tools, and certifications before you submit."
  ),
  ogTitle: "Resume Keyword Checker — Improve ATS Score",
  h1: "Resume Keyword Checker",
  primaryKeyword: "resume keyword checker",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_SCORE_CHECKER: PageCtrMeta = {
  title: ctrTitle("ATS Score Checker", "Compatibility %"),
  description: ctrMeta(
    "Measure resume ATS score bands—interpret compatibility percentages, parse health, and keyword overlap vs a target role."
  ),
  ogTitle: "ATS Score Checker — What Your % Means",
  h1: "ATS Score Checker",
  primaryKeyword: "ATS score checker",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_ANALYZER: PageCtrMeta = {
  title: ctrTitle("Resume Analyzer", "AI Section Feedback"),
  description: ctrMeta("Analyze resume sections — bullets, summary, skills & checklist. Free online tool."),
  ogTitle: "Resume Analyzer — Improve Before You Apply",
  h1: "Resume Analyzer",
  primaryKeyword: "resume analyzer",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_PARSER: PageCtrMeta = {
  title: ctrTitle("Resume Parser Test", "What ATS Reads"),
  description: ctrMeta("See extracted resume text — test ATS parser output before you apply. Free upload."),
  ogTitle: "Resume Parser — What Hiring Software Reads",
  h1: "Resume Parser",
  primaryKeyword: "resume parser",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH: PageCtrMeta = {
  title: ctrTitle("Resume vs Job Posting", "Match % & Gaps"),
  description: ctrMeta(
    "Paste a job description, upload your resume, and see match %, missing keywords, skill gaps, and section fixes before you apply."
  ),
  ogTitle: "Resume vs Job Posting — Match Score & Keyword Gaps",
  h1: "Job Description Match — Resume vs Job Posting Analyzer",
  primaryKeyword: "job description match",
  richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_MATCH_SCORE: PageCtrMeta = {
  title: ctrTitle("Resume Match Score", "What % Is Good?"),
  description: ctrMeta(
    "Resume match score measures keyword overlap with one job posting—not overall ATS health. See 60–85% benchmarks and a 5-step fix workflow."
  ),
  ogTitle: "Resume Match Score — Benchmarks vs One Job Posting",
  h1: "Resume ATS Match Score Explained",
  primaryKeyword: "resume match score explained",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_RESUME_VS_JD: PageCtrMeta = {
  title: ctrTitle("ATS Resume vs Job Description", "Two-Layer Guide"),
  description: ctrMeta(
    "ATS check vs job match explained—parse health, match %, worked example, and free tools before you apply."
  ),
  ogTitle: "ATS Resume vs Job Description — Match Workflow",
  h1: "ATS Resume vs Job Description — Complete Guide",
  primaryKeyword: "ATS resume vs job description",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_KEYWORDS_EXPLAINED: PageCtrMeta = {
  title: ctrTitle("Resume Keywords Explained", "Types & Placement"),
  description: ctrMeta(
    "Resume keywords for ATS—hard skills, tools, titles, certs, before/after examples, and match workflow."
  ),
  ogTitle: "Resume Keywords Explained — ATS Search Terms",
  h1: "Resume Keywords Explained",
  primaryKeyword: "resume keywords explained",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_HOW_RECRUITERS_MATCH: PageCtrMeta = {
  title: ctrTitle("How Recruiters Match Resumes", "ATS + Skim"),
  description: ctrMeta(
    "How recruiters search ATS, rank candidates, and skim page one—with examples and job match checklist."
  ),
  ogTitle: "How Recruiters Match Resumes to Job Descriptions",
  h1: "How Recruiters Match Resumes to Job Descriptions",
  primaryKeyword: "how recruiters match resumes",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_WHY_ATS_REJECTS_GOOD: PageCtrMeta = {
  title: ctrTitle("Why ATS Rejects Good Resumes", "Visibility Fixes"),
  description: ctrMeta(
    "Qualified but filtered out? Parse failure, hard filters, keyword gaps—diagnose with free match tools."
  ),
  ogTitle: "Why ATS Rejects Good Resumes — Fix Visibility",
  h1: "Why ATS Rejects Good Resumes (When You're Qualified)",
  primaryKeyword: "why ATS rejects good resumes",
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
  description: ctrMeta(
    "Hub-only FAQs plus topic cards linking to scoring, privacy, ATS mechanics, tools, and interview screening guides—no duplicated answers."
  ),
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

export const CTR_REVIEW_PROCESS: PageCtrMeta = {
  title: ctrTitle("Review Process", "How We Verify Content"),
  description: ctrMeta(
    "How ResumeIQ reviews ATS checker output, guides, and FAQs—Editorial Team workflow, parse tests, and corrections."
  ),
  h1: "Review Process",
  primaryKeyword: "review process",
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
  richSnippets: ["BreadcrumbList", "FAQPage"],
};

export const CTR_TERMS: PageCtrMeta = {
  title: ctrTitle("Terms of Service", "ResumeIQ"),
  description: "Acceptable use and disclaimers for the free ATS resume checker and career tools.",
  h1: "Terms of Service",
  primaryKeyword: "terms of service",
  richSnippets: ["BreadcrumbList"],
};

export const CTR_DISCLAIMER: PageCtrMeta = {
  title: ctrTitle("Disclaimer", "ResumeIQ ATS Checker"),
  description:
    "ResumeIQ scores are guidance—not guarantees. No ATS vendor partnerships. Read limitations before applying.",
  h1: "Disclaimer",
  primaryKeyword: "ResumeIQ disclaimer",
  richSnippets: ["BreadcrumbList", "FAQPage"],
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
  title: ctrTitle("ATS Checklist", "Pre-Submit 2026"),
  description: ctrMeta(
    "ATS checklist for pre-submit QA: format, headings, keywords, and export checks—then run the free resume checker on the file you upload."
  ),
  ogTitle: "ATS Checklist — Pre-Submit Resume QA (2026)",
  h1: "ATS Checklist — Pre-Submit Resume QA",
  primaryKeyword: "ATS resume checklist",
  richSnippets: ["FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_KEYWORDS: PageCtrMeta = {
  title: ctrTitle("ATS Resume Keywords", "Where to Place"),
  description: ctrMeta(
    "Which ATS keywords matter, where to place them in bullets, and how to avoid stuffing— with examples."
  ),
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
  description: ctrMeta(
    "Single-column vs two-column, PDF vs Word—what parsers read and copy-paste test steps."
  ),
  ogTitle: "ATS Resume Format — Parser Sees This, Not Your Design",
  h1: "ATS Resume Format",
  primaryKeyword: "ATS resume format",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_ATS_MISTAKES: PageCtrMeta = {
  title: ctrTitle("ATS Resume Mistakes", "10 Silent Rejects"),
  description: ctrMeta(
    "Two columns, keyword dumps, buried titles—before/after fixes for each silent ATS reject."
  ),
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
  title: ctrTitle("Resume Examples", "20+ ATS Samples"),
  description: ctrMeta(
    "Software engineer, business analyst, nurses, engineers, warehouse, receptionist, and more ATS-friendly examples with tips and keyword lists."
  ),
  ogTitle: "Resume Examples Library — ATS Samples by Role",
  h1: "Resume Examples by Role",
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
  description: ctrMeta(
    "Diagnose parse failure, keyword filters, or title mismatch at each ATS stage—fix the right layer first."
  ),
  ogTitle: "Why Resume Gets Rejected — Diagnose by Stage",
  h1: "Why Your Resume Gets Rejected",
  primaryKeyword: "why resume gets rejected",
  richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_NOT_PASSING_ATS: PageCtrMeta = {
  title: ctrTitle("Resume Not Passing ATS", "Diagnose & Fix"),
  description: ctrMeta(
    "Resume not passing ATS? Separate parse vs keyword failure in 5 minutes with parser + match tools."
  ),
  ogTitle: "Resume Not Passing ATS — Free Diagnosis + Fix Plan",
  h1: "Resume Not Passing ATS",
  primaryKeyword: "resume not passing ATS",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_KEYWORDS_MISSING: PageCtrMeta = {
  title: ctrTitle("Resume Keywords Missing", "Gap Finder"),
  description: ctrMeta(
    "Find missing resume keywords vs any job post—before/after bullets plus free job-description match."
  ),
  ogTitle: "Resume Keywords Missing — Free Gap Finder",
  h1: "Resume Keywords Missing",
  primaryKeyword: "resume keywords missing",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_HOW_TO_TAILOR_RESUME: PageCtrMeta = {
  title: ctrTitle("Tailor Resume for Job", "15-Min Method"),
  description: ctrMeta(
    "Step-by-step: extract posting terms, edit headline plus 3 bullets, verify match %—honest tailoring without keyword stuffing."
  ),
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
  description: ctrMeta(
    "ATS parse → keyword rank → recruiter skim in 6 stages—see where your resume drops out."
  ),
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
  description: ctrMeta(
    "12 ATS rejection triggers—columns, keyword dumps, buried titles—each with a concrete fix."
  ),
  ogTitle: "12 ATS Rejection Reasons — Fix Before You Apply",
  h1: "Common ATS Resume Rejection Reasons",
  primaryKeyword: "common ATS resume rejection reasons",
  richSnippets: ["Article", "FAQPage", "ItemList", "BreadcrumbList", "Organization"],
};

export const CTR_COMPLETE_ATS_GUIDE: PageCtrMeta = {
  title: ctrTitle("ATS Resume Optimization", "Examples + Workflow"),
  description: ctrMeta(
    "Complete ATS optimization guide: parsing, keywords, match score, and recruiter skim—with before/after examples and a free checker workflow."
  ),
  ogTitle: "ATS Resume Optimization Guide — Examples & Decision Tree",
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
  description: ctrMeta(
    "60+ ATS-friendly resume headline examples by role—formulas, placement tips, and mistakes that break parser categorization."
  ),
  ogTitle: "Resume Headline Examples — ATS Formulas by Industry",
  h1: "Resume Headline Generator",
  primaryKeyword: "resume headline generator",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_COVER_LETTER_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Cover Letter Generator", "ATS Templates"),
  description: ctrMeta(
    "Cover letter templates with posting-aligned keywords—structures for referral, career change, and role-specific applications."
  ),
  ogTitle: "Cover Letter Templates — ATS-Friendly Structures",
  h1: "Cover Letter Generator",
  primaryKeyword: "cover letter generator",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_INTERVIEW_QUESTION_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Interview Questions", "100+ by Role"),
  description: ctrMeta(
    "Role-specific interview questions with STAR answer frameworks—behavioral, technical, and situational prompts by job family."
  ),
  ogTitle: "Interview Questions by Role — STAR Answer Framework",
  h1: "Interview Question Generator",
  primaryKeyword: "interview question generator",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_OBJECTIVE_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Resume Objective Generator", "40+ Examples"),
  description: ctrMeta(
    "Resume objective examples for graduates, career changers, and internships—two-line formula plus weak vs strong rewrites."
  ),
  ogTitle: "Resume Objective Examples — Formula & Mistakes",
  h1: "Resume Objective Generator",
  primaryKeyword: "resume objective generator",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
};

export const CTR_RESUME_SKILLS_GENERATOR: PageCtrMeta = {
  title: ctrTitle("Resume Skills Generator", "Lists by Role"),
  description: ctrMeta(
    "Copy-ready skills lists by role—technical, tools, and soft skills formatted for ATS parsers plus proof-in-bullet guidance."
  ),
  ogTitle: "Resume Skills Lists by Role — ATS Formatting Guide",
  h1: "Resume Skills Generator",
  primaryKeyword: "resume skills generator",
  richSnippets: ["Article", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
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
  const canonicalPath = options.canonical.startsWith("/")
    ? options.canonical
    : `/${options.canonical}`;
  const useAbsolute = options.absoluteTitle ?? true;
  const ogImages = getDefaultOgImages();
  return {
    title: useAbsolute ? { absolute: meta.title } : meta.title,
    description: meta.description,
    keywords: options.keywords,
    alternates: { canonical: `${base}${canonicalPath}` },
    openGraph: {
      title: ogTitle,
      description: meta.description,
      url: `${base}${canonicalPath}`,
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
