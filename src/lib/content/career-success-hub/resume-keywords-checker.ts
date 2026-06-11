import type { CareerLandingEntry } from "./types";
import { CTR_RESUME_KEYWORDS_CHECKER } from "@/lib/seo/ctr-metadata";

export const resumeKeywordsCheckerEntry: CareerLandingEntry = {
  id: "resume-keywords-checker",
  path: "/resume-keywords-checker",
  breadcrumbLabel: "Resume keywords checker",
  ctr: CTR_RESUME_KEYWORDS_CHECKER,
  faqItems: [
    {
      question: "What is a resume keywords checker?",
      answer:
        "A resume keywords checker compares the skills and terms in your resume against a job description or industry benchmark. It highlights missing ATS keywords so you can tailor ethically—not stuff.",
    },
    {
      question: "Where should resume keywords go?",
      answer:
        "In recent experience bullets, skills section, and summary—woven into accomplishments. Avoid invisible text, white-font lists, and skills you cannot discuss in an interview.",
    },
    {
      question: "How many keywords should a resume have?",
      answer:
        "Quality over quantity. Cover must-have tools and skills from the posting in context. Ten well-placed terms beat fifty in a block.",
    },
    {
      question: "Can I check keywords without a job description?",
      answer:
        "Yes—use industry guides like [Resume Keywords by Industry](/resume-keywords-by-industry) and role examples. For best results, always match a real posting.",
    },
    {
      question: "What is the best free resume keywords checker?",
      answer:
        "Use the ATS Keywords Finder to extract terms from a job post, then the Resume Match Analyzer to see gaps in your resume. Both are free on ResumeIQ.",
    },
  ],
  body: `
Recruiters search ATS databases for **resume keywords**—skills, tools, certifications, and domain terms. A **resume keywords checker** shows what you are missing before you apply, so you tailor with evidence instead of guessing.

## Two-step keywords workflow (free)

### Step 1 — Extract keywords from the job post

Paste the job description into the [ATS Keywords Finder](/ats-keywords-finder). You get categorized terms: technical skills, tools, soft skills, and certifications.

### Step 2 — Check your resume against those terms

Run the [Resume Match Analyzer](/resume-job-description-match) with the same posting. Missing keywords appear in a prioritized list—copy them and map each to a bullet you can substantiate.

For a full health check, also run the [ATS Resume Checker](/resume-checker) to catch format issues that hide keywords from parsers.

## Where to place ATS keywords (ethically)

Read the full [ATS Resume Keywords Guide](/ats-resume-keywords). Quick rules:

- **Recent roles first** — Weight what you did in the last 3–5 years.
- **Mirror posting language** — "JavaScript" vs "JS" matters when the ATS is literal.
- **Context beats lists** — "Built ETL pipelines in Python (Airflow) processing 2M rows/day" beats "Python, Airflow, ETL."
- **No stuffing** — Skill clouds and invisible text hurt more than they help.

## Industry keyword starting points

| Role | Example terms | Guide |
|------|---------------|-------|
| Software engineer | React, AWS, CI/CD, APIs | [SE example](/resume-examples/software-engineer) |
| Data analyst | SQL, Python, Tableau, KPIs | [DA example](/resume-examples/data-analyst) |
| Product manager | Roadmap, OKRs, user research | [PM example](/resume-examples/product-manager) |
| Marketing | SEO, CRM, CAC, campaigns | [Marketing example](/resume-examples/marketing-manager) |

See also [resume keywords by industry](/resume-keywords-by-industry) for cross-sector patterns.

## Common keyword mistakes

- Dumping every tool you ever touched in a skills paragraph
- Copy-pasting the job description into your summary
- Ignoring acronyms and spelling variants (PMP vs Project Management Professional)
- Forgetting to re-export PDF after edits—stale files fail silently

## After you fix keywords

Walk the [ATS Resume Checklist](/ats-resume-checklist-2026), re-run match score, and browse [resume optimization](/resume-optimization) for the full workflow. All tools live in the [Career Success Hub](/career-success-hub).
`,
};
