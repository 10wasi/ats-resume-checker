/** 50 SEO blog ideas — commercial intent, snippets, PAA, long-tail. Not yet published. */
export type BlogContentPlanItem = {
  slug: string;
  title: string;
  primaryKeyword: string;
  intent: "commercial" | "informational" | "snippet" | "paa";
  priority: "P1" | "P2" | "P3";
  featuredSnippetTarget?: string;
  cluster: string;
};

export const BLOG_CONTENT_PLAN: BlogContentPlanItem[] = [
  { slug: "free-ats-resume-checker-score-in-seconds", title: "Free ATS Resume Checker: Score Your Resume in Seconds", primaryKeyword: "free ATS resume checker", intent: "commercial", priority: "P1", cluster: "ATS Resume Checker" },
  { slug: "ats-score-checker-what-good-score-means", title: "ATS Score Checker: What a Good Score Actually Means", primaryKeyword: "ATS score checker", intent: "snippet", priority: "P1", featuredSnippetTarget: "What is a good ATS score?", cluster: "Resume Score" },
  { slug: "resume-parser-test-before-you-apply", title: "Resume Parser Test: See What ATS Extracts Before You Apply", primaryKeyword: "resume parser test", intent: "commercial", priority: "P1", cluster: "Resume Parser" },
  { slug: "resume-scanner-vs-grammar-checker", title: "Resume Scanner vs Grammar Checker: Which Fixes ATS Rejections?", primaryKeyword: "resume scanner", intent: "commercial", priority: "P1", cluster: "Resume Scanner" },
  { slug: "how-to-pass-ats-in-2026", title: "How to Pass ATS in 2026: 9 Fixes That Actually Work", primaryKeyword: "how to pass ATS", intent: "paa", priority: "P1", cluster: "ATS Resume" },
  { slug: "can-ats-read-pdf-resume", title: "Can ATS Read PDF Resumes? Copy-Paste Test Explained", primaryKeyword: "can ATS read PDF resume", intent: "paa", priority: "P1", featuredSnippetTarget: "Can ATS read PDF?", cluster: "Resume Formatting" },
  { slug: "canva-resume-ats-friendly", title: "Are Canva Resumes ATS Friendly? What to Use Instead", primaryKeyword: "Canva resume ATS", intent: "paa", priority: "P1", cluster: "Resume Formatting" },
  { slug: "resume-keywords-from-job-description", title: "How to Pull Resume Keywords From a Job Description (Ethically)", primaryKeyword: "resume keywords job description", intent: "snippet", priority: "P1", cluster: "Resume Keywords" },
  { slug: "resume-match-score-explained", title: "Resume Match Score Explained: % vs ATS Score", primaryKeyword: "resume match score", intent: "snippet", priority: "P1", cluster: "Resume Score" },
  { slug: "software-engineer-resume-ats-keywords", title: "Software Engineer Resume ATS Keywords Recruiters Search For", primaryKeyword: "software engineer resume ATS", intent: "commercial", priority: "P1", cluster: "Software Engineer Resume" },
  { slug: "data-analyst-resume-keywords-2026", title: "Data Analyst Resume Keywords: SQL, Python & BI Tools List", primaryKeyword: "data analyst resume keywords", intent: "commercial", priority: "P1", cluster: "Data Analyst Resume" },
  { slug: "marketing-manager-resume-ats-guide", title: "Marketing Manager Resume: ATS Format + Keyword Checklist", primaryKeyword: "marketing manager resume ATS", intent: "commercial", priority: "P1", cluster: "Marketing Resume" },
  { slug: "project-manager-resume-ats-bullets", title: "Project Manager Resume Bullets That Pass ATS Filters", primaryKeyword: "project manager resume ATS", intent: "commercial", priority: "P1", cluster: "Project Manager Resume" },
  { slug: "customer-service-resume-ats-examples", title: "Customer Service Resume Examples That Parse in ATS", primaryKeyword: "customer service resume ATS", intent: "commercial", priority: "P2", cluster: "Customer Service Resume" },
  { slug: "sales-resume-keywords-that-rank", title: "Sales Resume Keywords That Rank in Applicant Tracking Systems", primaryKeyword: "sales resume keywords", intent: "commercial", priority: "P2", cluster: "Sales Resume" },
  { slug: "remote-job-resume-keywords", title: "Remote Job Resume Keywords: What ATS Filters Look For", primaryKeyword: "remote job resume keywords", intent: "commercial", priority: "P2", cluster: "Remote Jobs Resume" },
  { slug: "fresh-graduate-resume-ats-no-experience", title: "Fresh Graduate Resume: ATS Tips When You Have No Experience", primaryKeyword: "fresh graduate resume ATS", intent: "commercial", priority: "P2", cluster: "Fresh Graduate Resume" },
  { slug: "ai-resume-checker-vs-human-review", title: "AI Resume Checker vs Human Review: When to Trust Each", primaryKeyword: "AI resume checker", intent: "commercial", priority: "P1", cluster: "AI Resume" },
  { slug: "cv-vs-resume-ats-differences", title: "CV vs Resume for ATS: Length, Format & Keyword Differences", primaryKeyword: "CV vs resume ATS", intent: "snippet", priority: "P2", cluster: "CV vs Resume" },
  { slug: "cover-letter-ats-keywords", title: "Cover Letter ATS Keywords: Do Recruiters Even Read Them?", primaryKeyword: "cover letter ATS keywords", intent: "informational", priority: "P2", cluster: "Cover Letter" },
  { slug: "resume-summary-examples-ats", title: "Resume Summary Examples That Pass ATS (By Role)", primaryKeyword: "resume summary examples ATS", intent: "snippet", priority: "P2", cluster: "Resume Summary" },
  { slug: "resume-skills-section-ats-format", title: "Resume Skills Section: ATS Format vs Skills Cloud", primaryKeyword: "resume skills section ATS", intent: "paa", priority: "P2", cluster: "Resume Skills" },
  { slug: "resume-action-verbs-that-impress-ats", title: "200+ Resume Action Verbs That Impress ATS and Recruiters", primaryKeyword: "resume action verbs", intent: "snippet", priority: "P2", cluster: "Resume Action Verbs" },
  { slug: "resume-headline-formulas-ats", title: "Resume Headline Formulas That Parse Cleanly in ATS", primaryKeyword: "resume headline ATS", intent: "informational", priority: "P2", cluster: "Resume Headlines" },
  { slug: "resume-sections-order-ats", title: "Resume Sections Order for ATS: What Goes First", primaryKeyword: "resume sections order ATS", intent: "paa", priority: "P2", cluster: "Resume Sections" },
  { slug: "resume-mistakes-ats-rejects-silently", title: "7 Resume Mistakes ATS Rejects Silently (No Email Back)", primaryKeyword: "resume mistakes ATS", intent: "paa", priority: "P1", cluster: "Resume Mistakes" },
  { slug: "resume-templates-ats-safe-ranked", title: "Resume Templates Ranked by ATS Parse Safety (2026)", primaryKeyword: "ATS safe resume templates", intent: "commercial", priority: "P2", cluster: "Resume Templates" },
  { slug: "resume-examples-before-after-ats", title: "Resume Examples: Before & After ATS Fixes (Real Patterns)", primaryKeyword: "resume examples ATS", intent: "commercial", priority: "P2", cluster: "Resume Examples" },
  { slug: "resume-optimization-checklist-apply-faster", title: "Resume Optimization Checklist: Fix Before Every Application", primaryKeyword: "resume optimization checklist", intent: "commercial", priority: "P1", cluster: "Resume Optimization" },
  { slug: "resume-writing-tips-ats-2026", title: "Resume Writing Tips for ATS: Write for Software First", primaryKeyword: "resume writing ATS", intent: "informational", priority: "P2", cluster: "Resume Writing" },
  { slug: "resume-improvement-plan-7-days", title: "7-Day Resume Improvement Plan Using a Free ATS Checker", primaryKeyword: "resume improvement plan", intent: "commercial", priority: "P2", cluster: "Resume Improvement" },
  { slug: "applicant-tracking-system-explained-simple", title: "Applicant Tracking System Explained in Plain English", primaryKeyword: "applicant tracking system explained", intent: "snippet", priority: "P1", cluster: "Applicant Tracking System" },
  { slug: "interview-prep-after-ats-pass", title: "Interview Prep After Your Resume Passes ATS Screening", primaryKeyword: "interview prep after ATS", intent: "informational", priority: "P3", cluster: "Interview Preparation" },
  { slug: "career-change-resume-ats-keywords", title: "Career Change Resume: ATS Keywords Without Looking Fake", primaryKeyword: "career change resume ATS", intent: "commercial", priority: "P2", cluster: "Career Advice" },
  { slug: "linkedin-vs-resume-ats", title: "LinkedIn vs Resume for ATS: What Actually Gets Submitted", primaryKeyword: "LinkedIn vs resume ATS", intent: "informational", priority: "P3", cluster: "Career Advice" },
  { slug: "two-column-resume-ats-risk", title: "Two-Column Resume: Why ATS Scrambles Your Experience", primaryKeyword: "two column resume ATS", intent: "paa", priority: "P1", cluster: "Resume Formatting" },
  { slug: "resume-fonts-ats-safe-list", title: "ATS-Safe Resume Fonts: Calibri, Arial & What to Avoid", primaryKeyword: "ATS safe resume fonts", intent: "snippet", priority: "P2", cluster: "Resume Formatting" },
  { slug: "how-long-recruiters-scan-resume", title: "How Long Recruiters Scan a Resume (After ATS Ranking)", primaryKeyword: "how long recruiters scan resume", intent: "paa", priority: "P2", cluster: "Resume Review" },
  { slug: "resume-review-checklist-recruiters", title: "Resume Review Checklist Recruiters Use in 6 Seconds", primaryKeyword: "resume review checklist", intent: "commercial", priority: "P1", cluster: "Resume Review" },
  { slug: "jobscan-alternative-free-ats-checker", title: "Jobscan Alternative: Free ATS Checker Comparison (Honest)", primaryKeyword: "Jobscan alternative free", intent: "commercial", priority: "P1", cluster: "ATS Resume Checker" },
  { slug: "resumeworded-alternative-ats-score", title: "ResumeWorded Alternative: Free ATS Score & Parser Test", primaryKeyword: "ResumeWorded alternative", intent: "commercial", priority: "P1", cluster: "ATS Resume Checker" },
  { slug: "why-resume-upload-fails-ats", title: "Why Your Resume Upload Fails in ATS Portals", primaryKeyword: "resume upload fails ATS", intent: "paa", priority: "P2", cluster: "Resume Parser" },
  { slug: "resume-analysis-report-explained", title: "Resume Analysis Report Explained: Score, Gaps & Fixes", primaryKeyword: "resume analysis report", intent: "commercial", priority: "P1", cluster: "Resume Analysis" },
  { slug: "ats-friendly-resume-format-step-by-step", title: "ATS Friendly Resume Format: Step-by-Step Export Guide", primaryKeyword: "ATS friendly resume format", intent: "snippet", priority: "P1", cluster: "ATS Friendly Resume" },
  { slug: "resume-keyword-stuffing-vs-optimization", title: "Keyword Stuffing vs Resume Optimization: What ATS Penalizes", primaryKeyword: "resume keyword stuffing", intent: "paa", priority: "P2", cluster: "Resume Keywords" },
  { slug: "hr-manager-resume-ats-keywords", title: "HR Manager Resume ATS Keywords & Bullets That Rank", primaryKeyword: "HR manager resume ATS", intent: "commercial", priority: "P2", cluster: "Career Advice" },
  { slug: "accountant-resume-ats-certifications", title: "Accountant Resume: ATS Keywords for CPA, GAAP & ERP Tools", primaryKeyword: "accountant resume ATS", intent: "commercial", priority: "P2", cluster: "Career Advice" },
  { slug: "graphic-designer-resume-ats-portfolio", title: "Graphic Designer Resume: ATS Text vs Portfolio Links", primaryKeyword: "graphic designer resume ATS", intent: "commercial", priority: "P3", cluster: "Career Advice" },
  { slug: "product-manager-resume-metrics-ats", title: "Product Manager Resume Metrics ATS Recruiters Search", primaryKeyword: "product manager resume ATS", intent: "commercial", priority: "P2", cluster: "Career Advice" },
  { slug: "resume-checker-for-internships", title: "Free Resume Checker for Internships & Entry-Level Roles", primaryKeyword: "resume checker internship", intent: "commercial", priority: "P2", cluster: "Resume Checker" },
  { slug: "how-accurate-ats-resume-checkers", title: "How Accurate Are ATS Resume Checkers? Limits Explained", primaryKeyword: "how accurate ATS resume checker", intent: "paa", priority: "P1", featuredSnippetTarget: "How accurate is ATS resume checker?", cluster: "Resume Score" },
];
