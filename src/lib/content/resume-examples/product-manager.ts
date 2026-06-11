import type { ResumeExampleEntry } from "./types";

const SLUG = "product-manager";

export const productManagerExample: ResumeExampleEntry = {
  id: "product-manager",
  slug: SLUG,
  path: `/resume-examples/${SLUG}`,
  breadcrumbLabel: "Product manager resume",
  ctr: {
    title: "Product Manager Resume — ATS Example & Keywords",
    description:
      "ATS-friendly product manager resume: roadmap, OKRs, user research & SQL keywords with metrics. Free ATS checker + match tool included.",
    ogTitle: "Product Manager Resume Example for ATS (2026)",
    h1: "Product Manager Resume: ATS-Friendly Example & Tips",
    primaryKeyword: "product manager resume",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Product Manager Resume — ATS Example & Keywords",
    description:
      "ATS-friendly product manager resume: roadmap, OKRs, user research & SQL keywords with metrics. Free ATS checker + match tool included.",
  },
  keywords: [
    "product manager resume",
    "PM resume example",
    "ATS friendly resume",
    "ATS Resume Checker",
    "product roadmap resume",
  ],
  relatedSlugs: ["project-manager", "software-engineer", "marketing-manager"],
  faqItems: [
    {
      question: "What should a product manager resume include for ATS?",
      answer:
        "Roadmap, OKRs, user research, A/B testing, SQL/analytics, stakeholder management, and shipping metrics—tied to revenue, retention, or adoption outcomes.",
    },
    {
      question: "How is a product manager resume different from a project manager resume?",
      answer:
        "PM resumes emphasize discovery, prioritization, and product outcomes (DAU, conversion, NPS). Project manager resumes emphasize delivery methodology, budgets, and timelines. Do not swap titles casually.",
    },
    {
      question: "Should product managers list technical skills on a resume?",
      answer:
        "Yes—SQL, APIs, experimentation tools, and basic stack literacy help ATS filters. Place them in context: 'Used SQL and Amplitude to diagnose 18% drop-off in onboarding.'",
    },
    {
      question: "One page or two for a product manager resume?",
      answer:
        "One page for associate/early PM roles; two pages for senior PMs with multiple shipped products. Keep the most recent 8–10 years detailed.",
    },
    {
      question: "How do I tailor a PM resume to a job description?",
      answer:
        "Run the Resume Match Analyzer on the posting, align domain keywords (B2B SaaS, marketplace, fintech), and mirror their prioritization language (OKRs vs KPIs).",
    },
  ],
  body: `
Product manager resumes get filtered on **roadmap**, **user research**, and **shipping outcomes**—not vision statements without proof. This **product manager resume** example shows parse-friendly structure and keywords that match how ATS and hiring managers search.

Test your file: [ATS Resume Checker](/resume-checker). Match a posting: [Resume Match Analyzer](/resume-job-description-match). Full workflow: [resume optimization](/resume-optimization).

## ATS-friendly product manager resume example

**Jordan Lee**  
San Francisco, CA · (415) 555-0192 · jordan.lee@email.com · linkedin.com/in/jordanlee

**Professional Summary**  
Product manager with 6+ years in B2B SaaS. Shipped onboarding and billing features that lifted activation 24% and reduced churn 11%. Skilled in discovery, OKRs, SQL, and cross-functional delivery.

**Experience**

**Notion · Senior Product Manager** · Mar 2022 – Present  
- Owned growth roadmap for self-serve onboarding; ran 14 A/B tests improving activation from 31% to 55% in two quarters.  
- Partnered with design and engineering (squad of 9) to launch tiered billing—$4.2M ARR in year one.  
- Built prioritization framework from support tickets, NPS, and Amplitude funnels; cut time-to-decision 30%.

**Stripe · Product Manager** · Jun 2019 – Feb 2022  
- Led API documentation and developer dashboard improvements; developer NPS +19 pts, support tickets −22%.  
- Wrote PRDs and success metrics for fraud review tooling used by 40+ internal analysts.  
- Analyzed cohort retention in SQL; identified onboarding gap driving 60% of week-one drop-off.

**Education**  
B.S. Information Systems · UC San Diego · 2019

**Skills**  
Product discovery · Roadmapping · OKRs · SQL · Amplitude · Jira · Figma · A/B testing · Stakeholder management

## Industry keywords for product managers

| Category | Example ATS keywords |
|----------|---------------------|
| Discovery | User interviews, jobs-to-be-done, prototypes, usability testing |
| Delivery | Roadmap, PRD, backlog grooming, sprint planning, ship cadence |
| Metrics | OKRs, KPIs, activation, retention, conversion, NPS, ARR |
| Tools | Jira, Amplitude, Mixpanel, SQL, Figma, Looker, LaunchDarkly |
| Domain | B2B SaaS, marketplace, payments, platform, API products |

Extract posting-specific terms with the [ATS Keywords Finder](/ats-keywords-finder).

## Common product manager resume mistakes

- **Feature lists without outcomes** — "Launched notifications" → "Launched lifecycle notifications; DAU +12% in 90 days."
- **Confusing PM with project manager** — If you ran ceremonies but not discovery, title accurately.
- **Buzzword summaries** — "Passionate product leader" → replace with shipped products and metrics.
- **Design-heavy PDFs** — Use a plain single-column version for online applications; test with the [ATS Resume Checklist](/ats-resume-checklist-2026).

## Resume optimization tips for PMs

1. Lead with the product surface you owned (onboarding, billing, API)—not company mission.
2. Quantify experiments: sample size, lift, and decision made.
3. Mirror the job post's stack and domain language.
4. Link to a portfolio or case study in plain text if allowed.
5. Re-run [resume match score](/resume-job-description-match) after each tailoring pass.

## Related role guides

- [ATS resume for product managers](/ats-resume/product-manager)
- [Project manager resume example](/resume-examples/project-manager)
- [Software engineer resume example](/resume-examples/software-engineer)
`,
};
