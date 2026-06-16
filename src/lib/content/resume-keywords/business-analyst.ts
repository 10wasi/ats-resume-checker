import type { ResumeKeywordsEntry } from "./types";
import { keywordsPageFooter } from "./shared-footer";

const SLUG = "business-analyst";
const ROLE = "Business Analyst";

export const businessAnalystKeywords: ResumeKeywordsEntry = {
  id: SLUG,
  slug: SLUG,
  path: `/resume-keywords/${SLUG}`,
  breadcrumbLabel: "Business analyst keywords",
  roleTitle: ROLE,
  ctr: {
    title: "Business Analyst Resume Keywords — ATS List",
    description:
      "Business analyst resume keywords: requirements, UAT, SQL & process mapping terms ATS recruiters search. Verbs, mistakes & examples—free checker.",
    h1: "Business Analyst Resume Keywords for ATS",
    primaryKeyword: "business analyst resume keywords",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Business Analyst Resume Keywords — ATS List",
    description:
      "Business analyst resume keywords: requirements, UAT, SQL & process mapping terms ATS recruiters search. Verbs, mistakes & examples—free checker.",
  },
  relatedSlugs: ["data-analyst", "product-manager", "project-manager"],
  exampleSlug: "data-analyst",
  faqItems: [
    {
      question: "What keywords should business analysts include for ATS?",
      answer:
        "Requirements gathering, BRD, user stories, UAT, process mapping, SQL, Agile, stakeholder management, and gap analysis—with project scope and business outcomes.",
    },
    {
      question: "BA vs data analyst keywords?",
      answer:
        "Business analysts emphasize requirements, process improvement, and stakeholder alignment; data analysts emphasize SQL depth and statistical analysis.",
    },
    {
      question: "Should business analysts list SQL?",
      answer:
        "Yes when you query data for requirements validation or reporting—place in bullets with what you analyzed.",
    },
    {
      question: "Agile keywords for business analysts?",
      answer:
        "Include user stories, backlog refinement, sprint planning, and acceptance criteria when you performed BA work in Agile squads.",
    },
    {
      question: "How do I tailor BA keywords to industry?",
      answer:
        "Finance postings need regulatory and reporting terms; SaaS needs API and integration language—use Resume Match on each JD.",
    },
  ],
  body: `
**Business analyst resume keywords** connect **requirements**, **process improvement**, and **stakeholder delivery** terms ATS filters search before interviews.

## Most common ATS keywords for business analysts

business requirements · BRD · functional requirements · user stories · use cases · gap analysis · process mapping · business process improvement · UAT · stakeholder management · Agile · Scrum · Jira · Confluence · SQL · data analysis · workflow documentation · cross-functional · change management · ERP implementation · systems integration · acceptance criteria · backlog refinement · root cause analysis · KPI tracking

## Technical skills keywords

SQL · Excel · Visio · Lucidchart · Jira · Confluence · Microsoft Power BI · Tableau · UML · BPMN · API documentation · SaaS platforms · ERP (SAP, Oracle) · CRM (Salesforce)

## Soft skills keywords

stakeholder facilitation · requirements elicitation · active listening · negotiation · presentation · analytical thinking · problem solving · translating business to technical teams · prioritization · workshop facilitation

## Action verbs

Gathered · Documented · Analyzed · Mapped · Facilitated · Defined · Validated · Implemented · Streamlined · Recommended · Partnered · Delivered · Tested · Clarified · Optimized

## Industry-specific phrases

- "Documented 45 **user stories** in **Jira** for CRM migration; reduced scope creep 30%"
- "Led **UAT** with 12 stakeholders; achieved 98% **acceptance criteria** pass rate"
- "Mapped order-to-cash **process**; identified $1.4M savings via workflow automation"
- "Partnered with engineering on **API** integration requirements for partner portal launch"

## Common keyword mistakes

- "Requirements gathering" without artifact names (BRD, user stories)
- Agile buzzwords without squad context or story volume
- SQL listed without analysis outcome
- BA title with only project coordinator ceremony keywords
- Omitting UAT when posting emphasizes testing ownership

## Example resume section

**Experience — Accenture · Business Analyst** · Aug 2020 – Present

- Elicited **business requirements** and authored **BRDs** for Salesforce CRM rollout (200+ users).
- Wrote **user stories** and **acceptance criteria** in **Jira** for 3 **Agile** squads.
- Led **UAT** cycles with cross-functional **stakeholders**; 98% test cases passed first round.
- Performed **gap analysis** and **process mapping** identifying $1.4M annual efficiency opportunity.

**Skills:** requirements gathering · user stories · UAT · Jira · SQL · process improvement · stakeholder management

${keywordsPageFooter(SLUG, ROLE, "data-analyst")}
`,
};
