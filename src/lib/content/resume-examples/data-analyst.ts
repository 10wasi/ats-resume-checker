import type { ResumeExampleEntry } from "./types";

const SLUG = "data-analyst";

export const dataAnalystExample: ResumeExampleEntry = {
  id: "data-analyst",
  slug: SLUG,
  path: `/resume-examples/${SLUG}`,
  breadcrumbLabel: "Data analyst resume",
  ctr: {
    title: "Data Analyst Resume Example — ATS Friendly (Free)",
    description:
      "ATS-friendly data analyst resume example: SQL, Python, dashboards, and metrics that parse. Test your file free with our ATS Resume Checker.",
    ogTitle: "Data Analyst Resume Example for ATS in 2026",
    h1: "Data Analyst Resume Example (ATS-Friendly)",
    primaryKeyword: "data analyst resume example",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Data Analyst Resume Example — ATS Friendly (Free)",
    description:
      "ATS-friendly data analyst resume example: SQL, Python, dashboards, and metrics that parse. Test your file free with our ATS Resume Checker.",
  },
  keywords: [
    "data analyst resume example",
    "ATS friendly resume",
    "SQL resume example",
    "ATS Resume Checker",
    "resume optimization",
  ],
  relatedSlugs: ["software-engineer", "accountant", "marketing-manager"],
  faqItems: [
    {
      question: "What skills should a data analyst resume highlight for ATS?",
      answer:
        "SQL, Excel, Python or R, Tableau or Power BI, and data modeling terms from the job post. Place them in experience bullets with outcomes—query time saved, reports automated, decisions influenced.",
    },
    {
      question: "Should data analysts include a portfolio on their resume?",
      answer:
        "Yes—a plain-text link to a portfolio or GitHub with notebook projects helps humans. Ensure project titles and tools also appear in searchable body text.",
    },
    {
      question: "How do I show SQL skills without keyword stuffing?",
      answer:
        "Write bullets like 'Built 15-table star schema in PostgreSQL' or 'Automated weekly KPI pull in SQL reducing manual work 6 hours.' Proof beats a standalone Skills line.",
    },
    {
      question: "Is a data analyst resume one or two pages?",
      answer:
        "One page for early career; two pages if you have multiple analytics roles with strong quantified results. Keep the most relevant tools on page one.",
    },
    {
      question: "How do I match my data analyst resume to a job description?",
      answer:
        "Paste the posting into the Resume Match Analyzer, add missing tools and domain terms to recent bullets, then re-check in the ATS Resume Checker.",
    },
  ],
  body: `
Hiring teams search for **SQL**, **Tableau**, and **stakeholder reporting**—not "data enthusiast." This **data analyst resume example** shows how to line up keywords with proof.

Validate your version in the [ATS Resume Checker](/resume-checker) and compare to postings in the [Resume Match Analyzer](/resume-job-description-match).

## ATS-friendly data analyst resume example

**Jordan Lee**  
Chicago, IL · (312) 555-0198 · jordan.lee@email.com · linkedin.com/in/jordanlee

**Professional Summary**  
Data analyst with 4+ years turning messy operational data into executive dashboards. Expert in SQL, Python, and Tableau; experienced in e-commerce and SaaS metrics.

**Experience**

**Shopify Plus Partner · Data Analyst** · Mar 2022 – Present  
- Built self-serve Tableau suite tracking conversion, AOV, and churn for 12 merchant accounts.  
- Wrote SQL pipelines in BigQuery processing 8M rows/day; cut report runtime from 45 min to 6 min.  
- Partnered with product on A/B test analysis using Python (pandas, scipy) for 14 experiments in 2024.

**Grubhub · Junior Data Analyst** · Jul 2020 – Feb 2022  
- Automated weekly ops KPI email in SQL + Excel, saving 5 hours of manual pulls per week.  
- Documented data dictionary for 40+ tables used by analytics and finance teams.  
- Supported forecasting model inputs improving delivery-time estimates within ±4 minutes.

**Skills**  
SQL, Python, R, Excel, Tableau, Power BI, BigQuery, PostgreSQL, pandas, A/B testing, data visualization, stakeholder reporting

**Education**  
B.S. Statistics, University of Illinois Chicago, 2020

## Why this resume works

- **Tool names in context** — SQL, Tableau, and Python appear where work happened.  
- **Business outcomes** — report runtime, hours saved, experiment count.  
- **Domain signal** — e-commerce and SaaS metrics help match industry postings.  
- **Parser-safe layout** — no tables, icons, or multi-column design.  
- **Clear progression** — Junior to Analyst title shows growth without clutter.

## ATS optimization tips for data analysts

1. Copy exact tool names from the job post (Power BI vs Tableau, Snowflake vs BigQuery).  
2. Include **data modeling**, **ETL**, or **KPI** if the role uses them.  
3. Quantify: rows processed, dashboards built, stakeholders served.  
4. Put certification names in full once—"Google Data Analytics Certificate."  
5. Run [resume match score](/resume-job-description-match) before each priority application.

Keyword guide: [ATS Keywords](/ats-resume-keywords).

## Common mistakes on data analyst resumes

- Listing "Microsoft Office" but omitting SQL and BI tools the posting requires.  
- Bullets that describe duties without numbers ("made reports for team").  
- Embedding charts as images—ATS cannot read them.  
- Creative section names like "Data Journey" instead of Experience.  
- One generic resume for analyst vs business intelligence vs analytics engineer roles.

Fix format issues first: [ATS Resume Format](/ats-resume-format).

## Test your data analyst resume

- [ATS Resume Checker](/resume-checker) — score and parsing QA.  
- [Resume Match Analyzer](/resume-job-description-match) — keyword overlap vs job post.  
- [Resume Examples Library](/resume-examples) — more role-specific samples.
`,
};
