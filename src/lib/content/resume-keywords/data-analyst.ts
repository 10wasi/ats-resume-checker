import type { ResumeKeywordsEntry } from "./types";
import { keywordsPageFooter } from "./shared-footer";

const SLUG = "data-analyst";
const ROLE = "Data Analyst";

export const dataAnalystKeywords: ResumeKeywordsEntry = {
  id: SLUG,
  slug: SLUG,
  path: `/resume-keywords/${SLUG}`,
  breadcrumbLabel: "Data analyst keywords",
  roleTitle: ROLE,
  ctr: {
    title: "Data Analyst Resume Keywords — ATS Skills List",
    description:
      "Data analyst resume keywords: SQL, Python, Tableau, KPIs & BI tools recruiters search. ATS lists, verbs, mistakes & example bullets—free match tool.",
    h1: "Data Analyst Resume Keywords for ATS",
    primaryKeyword: "data analyst resume keywords",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Data Analyst Resume Keywords — ATS Skills List",
    description:
      "Data analyst resume keywords: SQL, Python, Tableau, KPIs & BI tools recruiters search. ATS lists, verbs, mistakes & example bullets—free match tool.",
  },
  relatedSlugs: ["business-analyst", "software-engineer", "product-manager"],
  faqItems: [
    {
      question: "What keywords matter most for data analyst ATS scans?",
      answer:
        "SQL, Python or R, BI tools (Tableau, Power BI), data modeling, ETL, dashboards, and KPIs—embedded in bullets with business outcomes.",
    },
    {
      question: "Should data analysts list every BI tool?",
      answer:
        "List tools you use in production and match the posting. One strong Tableau + SQL story beats ten tools with no proof.",
    },
    {
      question: "How do I show analytics skills without jargon?",
      answer:
        "Tie each tool to a decision: 'Built executive dashboard in Power BI; cut weekly reporting time 6 hours.'",
    },
    {
      question: "Do I need statistics keywords on a data analyst resume?",
      answer:
        "Include A/B testing, regression, hypothesis testing, or forecasting when the role requires them and you can explain the method.",
    },
    {
      question: "How do I tailor keywords per job posting?",
      answer:
        "Use the ATS Keywords Finder on the JD, then Resume Match Analyzer. Add missing warehouse, stack, or domain terms to recent bullets.",
    },
  ],
  body: `
**Data analyst resume keywords** help ATS filters find SQL, Python, and dashboard proof before a hiring manager opens your file. Place terms in **Experience**—not only a skills footer.

## Most common ATS keywords for data analysts

SQL · Python · R · Excel · Tableau · Power BI · Looker · Google Analytics · ETL · data modeling · data visualization · KPIs · dashboards · reporting · stakeholder management · A/B testing · statistical analysis · data warehousing · Snowflake · BigQuery · Redshift · dbt · pandas · Jupyter

## Technical skills keywords

- **Query & transform** — SQL (joins, window functions), Python (pandas, NumPy), dbt, Airflow
- **Visualization** — Tableau, Power BI, Looker, matplotlib, ggplot2
- **Warehouses** — Snowflake, BigQuery, Redshift, PostgreSQL
- **Methods** — cohort analysis, funnel analysis, regression, forecasting, data quality checks
- **Delivery** — requirements gathering, dashboard design, ad hoc analysis, executive reporting

## Soft skills keywords

cross-functional collaboration · stakeholder presentations · translating data for non-technical audiences · prioritization · documentation · curiosity · attention to detail · business acumen

## Action verbs

Analyzed · Modeled · Visualized · Automated · Optimized · Forecasted · Identified · Streamlined · Built · Designed · Quantified · Monitored · Validated · Presented · Influenced

## Industry-specific phrases

- "Reduced manual reporting 80% by automating ETL pipelines in Python and Airflow"
- "Built self-serve Tableau dashboards for 40+ stakeholders across sales and product"
- "Identified $2.1M revenue opportunity through cohort analysis on subscription churn"
- "Improved data quality score from 72% to 96% via validation rules in Snowflake"

## Common keyword mistakes

- Listing SQL without showing complexity (joins, CTEs, window functions) in context
- Dashboard tools without audience or decision outcome
- Generic "data-driven" with no metric
- Copy-pasting JD requirements into a skills block
- Two-column resume hiding metrics from parsers

## Example resume section

**Experience — Spotify · Data Analyst** · Mar 2022 – Present

- Built **SQL** and **Python** pipelines ingesting 5M daily events into **Snowflake** for product analytics.
- Designed **Tableau** dashboards tracking activation KPIs; insights drove 18% lift in onboarding completion.
- Partnered with product on **A/B tests** (n=120k) validating new recommendation algorithm (+9% engagement).
- Automated weekly **Power BI** reports, saving 12 analyst hours per month.

**Skills:** SQL · Python · Tableau · Power BI · Snowflake · ETL · KPIs · A/B testing · stakeholder management

${keywordsPageFooter(SLUG, ROLE)}
`,
};
