/** Unique ATS optimization sections for /ats-resume/* pages (not shared with examples library). */

const BASE = `
## ATS submission checklist for this role

Before you upload to any employer portal:

1. Export a **plain single-column PDF**—no portfolio layout for the ATS copy.
2. Run the [ATS Resume Checker](/resume-checker) on the exact file you will submit.
3. Paste your target posting into the [Resume Match Analyzer](/resume-job-description-match).
4. Walk the [ATS Resume Checklist](/ats-resume-checklist-2026).
5. Read [Resume Match Score Guide](/resume-match-score) if match % is below your target.

Also see the full sample in the [Resume Examples Library](/resume-examples)—this ATS guide focuses on parser behavior and keyword strategy for the role.
`;

export const ATS_GUIDE_SECTIONS: Record<string, string> = {
  "software-engineer": `
## ATS keyword strategy for software engineers

Hiring systems search stack tokens before humans open GitHub. Prioritize:

- **Languages & frameworks** in Experience bullets—not only a Skills footer
- **Cloud & CI/CD** terms exactly as written in the posting (AWS vs Amazon Web Services)
- **Scale metrics**—requests/sec, users, deploy frequency, test coverage

Avoid keyword clouds listing 30 technologies. Three proven tools per recent role beats ten untouched buzzwords.

${BASE}
`,
  "data-analyst": `
## ATS keyword strategy for data analysts

Filters weight **SQL**, **Python/R**, **BI tools**, and **stakeholder delivery**. Place warehouse names (Snowflake, BigQuery) next to outcomes—"Built executive dashboard in Tableau; cut reporting time 6h → 45m."

If the posting mentions experimentation or A/B tests, cite a real example with sample size and decision made.

${BASE}
`,
  "product-manager": `
## ATS keyword strategy for product managers

PM ATS filters look for **discovery**, **roadmap**, **OKRs**, and **shipping metrics**—not vision statements. Mirror posting language for B2B vs B2C, platform vs growth, and analytics tools (Amplitude, Mixpanel, SQL).

Quantify experiments: hypothesis, ship, measurable lift. That satisfies both parsers and PM interview loops.

${BASE}
`,
  "project-manager": `
## ATS keyword strategy for project managers

Postings blend **methodology** (Agile, Scrum, Waterfall), **scale** (budget, team size), and **tools** (Jira, MS Project). Spell certifications fully if the JD uses long form (Project Management Professional).

Do not confuse program manager scope with project manager delivery—title alignment matters for literal ATS matches.

${BASE}
`,
  "marketing-manager": `
## ATS keyword strategy for marketing managers

Channel keywords must sit beside **ROI**: SEO/SEM, email, CRM, CAC, pipeline influenced. Match tool names from the posting—HubSpot, Salesforce, Google Analytics, Marketo.

Creative portfolios are for networking; employer portals need the plain ATS resume version tested with the checker.

${BASE}
`,
  "customer-service": `
## ATS keyword strategy for customer service

Support ATS scans **CRM** (Zendesk, Salesforce Service Cloud), **CSAT/NPS**, **AHT**, and **ticket volume**. Lead with metrics recruiters can compare across candidates—satisfaction %, cases per day, escalation reduction.

Plain language beats branded "Customer Hero" section titles parsers cannot classify.

${BASE}
`,
  accountant: `
## ATS keyword strategy for accountants

Finance ATS filters search **GAAP**, **month-end close**, **reconciliations**, and **ERP** systems (NetSuite, SAP, QuickBooks). List CPA or CMA once in credentials; match spelling in the job post.

Avoid dense journal-entry prose—use bullets with scope (entities, GL accounts) and accuracy or cycle-time results.

${BASE}
`,
  "hr-manager": `
## ATS keyword strategy for HR managers

HR ATS looks for **talent acquisition volume**, **HRIS** (Workday, BambooHR), **employee relations**, and **compliance** keywords. Replace generic "people person" lines with hires per quarter, time-to-fill, and policy rollouts.

Employee counts and geography scope help senior HR filters rank your file.

${BASE}
`,
  "graphic-designer": `
## ATS keyword strategy for graphic designers

Maintain two versions: **portfolio PDF** for humans, **plain ATS resume** for applications. List **Adobe CC** tools, **brand systems**, **campaign types**, and **deliverables** as text— not icon grids.

Quantify where possible: assets produced, turnaround time, brand consistency across N touchpoints.

${BASE}
`,
};

export function getAtsGuideSection(slug: string): string {
  return ATS_GUIDE_SECTIONS[slug] ?? BASE;
}
