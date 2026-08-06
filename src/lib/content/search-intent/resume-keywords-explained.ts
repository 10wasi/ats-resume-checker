import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_RESUME_KEYWORDS_EXPLAINED } from "@/lib/seo/ctr-metadata";
import { JD_MATCH_SUPPORT_APPENDIX } from "./jd-match-support-appendix";

export const resumeKeywordsExplainedEntry: CareerLandingEntry = {
  id: "resume-keywords-explained",
  path: "/resume-keywords-explained",
  breadcrumbLabel: "Keywords explained",
  ctr: CTR_RESUME_KEYWORDS_EXPLAINED,
  faqItems: [
    {
      question: "What are resume keywords for ATS?",
      answer:
        "Resume keywords are the skills, tools, job titles, certifications, and domain terms recruiters and applicant tracking systems search for. They must appear in parseable text—usually experience bullets—not only in icon sidebars.",
    },
    {
      question: "Where should keywords go on a resume?",
      answer:
        "Prove high-value terms in recent experience bullets and summary. A short Skills section mirrors posting language, but bullets with metrics carry more weight in search and human skim.",
    },
    {
      question: "How many keywords should a resume have?",
      answer:
        "Mirror must-have terms from each job description where you have real experience—typically 8–15 honest terms per application, not a fixed global count.",
    },
    {
      question: "Are keywords the same as job description match?",
      answer:
        "Keywords are the building blocks. Job description match measures how many posting terms appear in your resume for one role. Use the match tool to see gaps, then add keywords with proof.",
    },
    {
      question: "What is keyword stuffing on a resume?",
      answer:
        "Hidden white text, skill dumps without context, or copying the JD word-for-word. It may inflate match scores briefly but fails recruiter review and can harm trust.",
    },
  ],
  body: `
**Resume keywords explained** in plain language: they are the **search terms** hiring software and recruiters use to find evidence you can do the job—not a magic list to paste at the bottom.

## Types of resume keywords

| Category | Examples | Where ATS looks |
|----------|----------|-----------------|
| **Hard skills** | SQL, Python, GAAP, patient assessment | Experience, Skills |
| **Tools & platforms** | Salesforce, Epic, HubSpot, AutoCAD | Bullets (preferred) |
| **Role titles** | Product Manager, Staff RN, Warehouse Lead | Headline, recent title |
| **Certifications** | PMP, CPA, BLS, AWS SAA | Certs section + bullets |
| **Domain signals** | B2B SaaS, med-surg, civil infrastructure | Summary, bullets |
| **Soft skills (when in JD)** | stakeholder management, cross-functional | Bullets with proof |

Database by role: [Resume keywords guide](/resume-keywords) · [Keywords by industry](/resume-keywords-by-industry).

## Example: before and after keyword placement

**Before (weak for ATS search):**
> Responsible for various data tasks and reports.

**After (keyword + proof):**
> Built **SQL** dashboards in **Tableau** for finance stakeholders; automated **monthly KPI** pulls saving 6 hours/week.

Run [Job Description Match](/resume-job-description-match) on your target posting to see which terms are still missing.

## How keywords connect to job description match

1. Posting lists must-have terms → **keyword set**
2. Match analyzer compares your resume text → **match %**
3. Missing list → **tailoring checklist**

Workflow: [ATS resume vs job description](/ats-resume-vs-job-description) · [Resume match score](/resume-match-score).

## Keyword research workflow (10 minutes)

1. Paste JD into [ATS Keywords Finder](/ats-keywords-finder)
2. Highlight terms that appear 2+ times or in "Requirements"
3. Map each to a bullet you can defend in an interview
4. Re-run [Job Description Match](/resume-job-description-match)
5. Confirm parse order in [ATS Resume Checker](/resume-checker)

## Common keyword mistakes

| Mistake | Fix |
|---------|-----|
| Skills only in icons or columns | Plain-text tool names in bullets |
| Synonym mismatch (K8s vs Kubernetes) | Mirror posting spelling |
| One master resume for every industry | Tailor top bullets per posting |
| Keyword block with no metrics | One outcome per recent bullet |

Deep dives: [Resume keywords missing](/resume-keywords-missing) · [ATS resume keywords](/ats-resume-keywords).

## Keywords + examples by role

Browse [resume examples](/resume-examples) for software engineer, nurse, teacher, warehouse, and more—each shows keywords inside bullets, not dumps.

${JD_MATCH_SUPPORT_APPENDIX}
`,
};
