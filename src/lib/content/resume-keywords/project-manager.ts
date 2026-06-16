import type { ResumeKeywordsEntry } from "./types";
import { keywordsPageFooter } from "./shared-footer";

const SLUG = "project-manager";
const ROLE = "Project Manager";

export const projectManagerKeywords: ResumeKeywordsEntry = {
  id: SLUG,
  slug: SLUG,
  path: `/resume-keywords/${SLUG}`,
  breadcrumbLabel: "Project manager keywords",
  roleTitle: ROLE,
  ctr: {
    title: "Project Manager Resume Keywords — ATS List",
    description:
      "Project manager resume keywords: Agile, Scrum, PMP, budget & stakeholder terms ATS filters search. Verbs, mistakes & example bullets—free match tool.",
    h1: "Project Manager Resume Keywords for ATS",
    primaryKeyword: "project manager resume keywords",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Project Manager Resume Keywords — ATS List",
    description:
      "Project manager resume keywords: Agile, Scrum, PMP, budget & stakeholder terms ATS filters search. Verbs, mistakes & example bullets—free match tool.",
  },
  relatedSlugs: ["product-manager", "business-analyst", "marketing-manager"],
  faqItems: [
    {
      question: "What keywords should project managers include for ATS?",
      answer:
        "Agile, Scrum, stakeholder management, budget, risk, roadmap, Jira, cross-functional delivery, and on-time metrics—with scope and team size in bullets.",
    },
    {
      question: "Should I list PMP on my resume for ATS?",
      answer:
        "List the full credential name if you hold it, matching how the job post spells it (PMP vs Project Management Professional).",
    },
    {
      question: "Waterfall vs Agile—which keywords matter?",
      answer:
        "Mirror the posting. Hybrid roles may need both methodology terms where you actually used them.",
    },
    {
      question: "How do I quantify project management keywords?",
      answer:
        "Team size, budget, timeline compression, on-time delivery rate, and number of concurrent projects.",
    },
    {
      question: "PM vs program manager keywords?",
      answer:
        "Program manager postings emphasize multi-project portfolios and executive stakeholders; project manager focuses on single delivery streams.",
    },
  ],
  body: `
**Project manager resume keywords** align your resume with how ATS filters search **Agile**, **stakeholder management**, and **delivery** metrics—not generic leadership fluff.

## Most common ATS keywords for project managers

Agile · Scrum · Kanban · Waterfall · PMP · PRINCE2 · stakeholder management · risk management · budget management · resource planning · cross-functional · sprint planning · Jira · Confluence · MS Project · roadmap · milestone · deliverables · scope · timeline · RAID log · vendor management · change management · on-time delivery

## Technical skills keywords

Jira · Confluence · MS Project · Smartsheet · Asana · Monday.com · Excel · Gantt charts · risk registers · budget tracking · status reporting · SharePoint

## Soft skills keywords

leadership · communication · negotiation · conflict resolution · facilitation · executive updates · team motivation · prioritization · adaptability · decision-making under pressure

## Action verbs

Led · Managed · Coordinated · Delivered · Mitigated · Planned · Executed · Facilitated · Streamlined · Negotiated · Oversaw · Controlled · Scheduled · Resolved · Championed

## Industry-specific phrases

- "Led 3 cross-functional squads (28 people) with 95% sprint commitment rate"
- "Managed $2.1M budget for platform migration; delivered 2 weeks ahead of schedule"
- "Reduced critical risks from 12 to 3 per quarter via RAID reviews in Jira"
- "Coordinated hardware-software launch across 6 vendor partners in US and EU"

## Common keyword mistakes

- Listing Agile without team size or delivery outcomes
- Budget numbers without scope or timeline context
- "Synergy" and "thought leader" instead of RAID, scope, or milestone terms
- Wrong certification spelling vs job post
- Combining PM and product owner duties without clear title alignment

## Example resume section

**Experience — Atlassian · Senior Project Manager** · Jan 2021 – Present

- Led **Agile** delivery for 3 squads (28 engineers, designers, QA) at 95% **sprint** commitment.
- Managed **$2.1M budget** for platform migration; shipped 2 weeks ahead of **milestone** date.
- Ran **risk** register reviews in **Jira**, cutting critical blockers from 12 to 3 per quarter.
- Facilitated **stakeholder** updates to executives on **roadmap** and **cross-functional** dependencies.

**Skills:** Agile · Scrum · stakeholder management · budget · risk · Jira · MS Project · vendor management

${keywordsPageFooter(SLUG, ROLE)}
`,
};
