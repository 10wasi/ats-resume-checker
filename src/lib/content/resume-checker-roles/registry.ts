import type { PageCtrMeta } from "@/lib/seo/ctr-metadata";
import type { FaqItem } from "@/lib/seo/faq";
import { ctrMeta, ctrTitle } from "@/lib/seo/meta-templates";

export type ResumeCheckerRoleEntry = {
  slug: string;
  path: string;
  roleLabel: string;
  ctr: PageCtrMeta;
  intro: string;
  body: string;
  faqItems: FaqItem[];
  keywordFocus: string[];
};

const ROLES: (Omit<ResumeCheckerRoleEntry, "path" | "ctr"> & { ctrHook: string })[] = [
  {
    slug: "software-engineer",
    roleLabel: "Software Engineer",
    ctrHook: "Dev Stack Keywords",
    intro:
      "Run a free ATS resume checker tuned for software engineering roles — parser test, stack keywords, and bullet strength before you apply.",
    keywordFocus: ["React", "Python", "AWS", "CI/CD", "system design"],
    body: `# Software engineer resume checker workflow

## Why dev resumes fail ATS
Two-column Canva exports scramble skills. Icons replace plain-text stack names. Sidebars hide your strongest projects from keyword search.

## What to check first
1. **Parser preview** — confirm languages and frameworks extract in order.
2. **Posting keywords** — mirror exact terms from the job (React vs ReactJS).
3. **Impact bullets** — one metric per recent role: scale, latency, users, or cost saved.
4. **Certifications** — spell out AWS/Azure/GCP credentials in full text.

## Role-specific keyword clusters
Backend: API design, microservices, PostgreSQL, Docker, Kubernetes. Frontend: TypeScript, accessibility, performance, design systems. Full-stack: end-to-end ownership, deployment pipelines, code review.

Paste your target job description in the checker to see missing terms before you submit the same PDF to every portal.`,
    faqItems: [
      {
        question: "Should developers use a one-page resume for ATS?",
        answer:
          "One page under ~5 years experience; two pages is normal for senior engineers with relevant depth — if every line proves stack and impact.",
      },
      {
        question: "Do ATS systems read GitHub links?",
        answer:
          "Some parsers strip URLs. Put critical stack proof in bullet text, not only in a link line.",
      },
    ],
  },
  {
    slug: "data-analyst",
    roleLabel: "Data Analyst",
    ctrHook: "SQL & BI Keywords",
    intro:
      "Score your data analyst resume for ATS — SQL, Python, Tableau, and stakeholder language extracted the way hiring filters search.",
    keywordFocus: ["SQL", "Python", "Tableau", "Power BI", "stakeholder"],
    body: `# Data analyst resume checker workflow

## Common parse failures
Skills trapped in chart graphics. Tools listed without project context. "Data analysis" without SQL dialect or dataset size proof.

## Checklist before apply
- Parser shows SQL, Python, and BI tools in experience bullets — not only a skills cloud.
- Recent role includes stakeholder or executive audience when the posting mentions it.
- Dashboard or pipeline work names the tool (Tableau, Looker, Power BI) plus outcome.

Run match % against the job description — analytics postings vary wildly between product, finance, and marketing analytics.`,
    faqItems: [
      {
        question: "Which keywords matter most for data analyst ATS?",
        answer:
          "SQL dialect, Python/R, visualization tools, and domain terms from the posting (funnel, cohort, forecast, ETL).",
      },
    ],
  },
  {
    slug: "marketing-manager",
    roleLabel: "Marketing Manager",
    ctrHook: "Campaign Metrics",
    intro:
      "Check marketing manager resumes for ATS keyword match — channel proof, ROI metrics, and tools recruiters filter on.",
    keywordFocus: ["SEO", "SEM", "ROI", "CRM", "content strategy"],
    body: `# Marketing manager resume checker

Marketing ATS filters search channel acronyms, budget scope, and CRM tools. Generic "managed campaigns" lines score low — name the channel, budget band, and conversion lift.

Use the checker to confirm MarTech stack terms from the posting appear in bullets with numbers: CAC, ROAS, MQL, pipeline influenced.`,
    faqItems: [
      {
        question: "Should marketing resumes include metrics?",
        answer:
          "Yes — ATS and recruiters both rank bullets with percentage or revenue outcomes above duty lists.",
      },
    ],
  },
  {
    slug: "project-manager",
    roleLabel: "Project Manager",
    ctrHook: "Agile & Scope Proof",
    intro:
      "Free ATS check for project managers — Agile terms, budget scope, and cross-functional proof parsed cleanly.",
    keywordFocus: ["Agile", "Scrum", "stakeholder", "budget", "risk"],
    body: `# Project manager resume checker

PM postings filter on methodology (Agile, Scrum, SAFe), tools (Jira, MS Project), and scope (budget, team size, geography). Place them in recent delivery bullets — not a methodology paragraph alone.`,
    faqItems: [
      {
        question: "Do ATS systems read PMP certification?",
        answer:
          'Yes — spell "Project Management Professional (PMP)" in text; abbreviations alone may miss some filters.',
      },
    ],
  },
  {
    slug: "accountant",
    roleLabel: "Accountant",
    ctrHook: "GAAP & ERP Terms",
    intro:
      "Accountant resume ATS scan — GAAP, ERP systems, and close-process keywords with parse-safe formatting.",
    keywordFocus: ["GAAP", "SAP", "QuickBooks", "reconciliation", "audit"],
    body: `# Accountant resume checker

Finance ATS filters search ERP names, compliance frameworks, and close-cycle language. Avoid tables for certifications — use plain lines in the body.`,
    faqItems: [
      {
        question: "CPA on resume for ATS?",
        answer:
          'Write "Certified Public Accountant (CPA)" in full at least once; match state licensing wording if the posting requires it.',
      },
    ],
  },
  {
    slug: "hr-manager",
    roleLabel: "HR Manager",
    ctrHook: "HRIS & Compliance",
    intro:
      "HR manager resume checker — HRIS tools, employee relations, and compliance keywords for applicant tracking filters.",
    keywordFocus: ["HRIS", "Workday", "employee relations", "compliance", "talent acquisition"],
    body: `# HR manager resume checker

HR roles filter on systems (Workday, BambooHR), compliance topics, and scale (headcount supported). Bullets should tie policy work to measurable retention or time-to-fill improvements.`,
    faqItems: [
      {
        question: "Should HR resumes list every HRIS?",
        answer:
          "List systems you can discuss in an interview — match the posting's stack first.",
      },
    ],
  },
  {
    slug: "customer-service",
    roleLabel: "Customer Service",
    ctrHook: "CSAT & CRM Proof",
    intro:
      "Customer service resume ATS test — CRM tools, CSAT metrics, and resolution-time proof recruiters search.",
    keywordFocus: ["CRM", "Zendesk", "CSAT", "resolution time", "escalation"],
    body: `# Customer service resume checker

Support ATS filters look for CRM names, channel (phone, chat, email), and volume handled. Replace "helped customers" with tickets per day and satisfaction scores.`,
    faqItems: [
      {
        question: "Are soft skills enough for ATS?",
        answer:
          "Pair soft skills with tool names and measurable service metrics in the same bullet.",
      },
    ],
  },
  {
    slug: "product-manager",
    roleLabel: "Product Manager",
    ctrHook: "Roadmap & Metrics",
    intro:
      "Product manager resume checker — roadmap, discovery, and KPI language aligned to each posting.",
    keywordFocus: ["roadmap", "discovery", "KPI", "Agile", "stakeholder"],
    body: `# Product manager resume checker

PM ATS filters search discovery, prioritization, and outcome metrics (activation, retention, revenue). Avoid feature lists without user or business impact.`,
    faqItems: [
      {
        question: "Should PM resumes mention Agile?",
        answer:
          "When the posting does — place Scrum/Kanban in delivery bullets with squad size or release cadence.",
      },
    ],
  },
  {
    slug: "graphic-designer",
    roleLabel: "Graphic Designer",
    ctrHook: "Tools in Plain Text",
    intro:
      "Graphic designer resume parser test — keep portfolio links but put Adobe tools in selectable text ATS can index.",
    keywordFocus: ["Adobe Creative Suite", "Figma", "brand guidelines", "UI", "print"],
    body: `# Graphic designer resume checker

Design resumes often fail parsing when layout is image-heavy. Export a text-first PDF; list Illustrator, Photoshop, Figma in bullets tied to deliverables — not icon rows.`,
    faqItems: [
      {
        question: "Can I link my portfolio for ATS?",
        answer:
          "Yes — but repeat critical tool names in bullet text; many parsers ignore hyperlinks.",
      },
    ],
  },
  {
    slug: "business-analyst",
    roleLabel: "Business Analyst",
    ctrHook: "Requirements & UAT",
    intro:
      "Business analyst resume ATS score — requirements, UAT, and stakeholder terms with parse-safe structure.",
    keywordFocus: ["requirements", "UAT", "SQL", "Jira", "stakeholder"],
    body: `# Business analyst resume checker

BA postings filter on elicitation, user stories, UAT, and SQL for data validation. Connect each methodology term to a delivered outcome in the same bullet.`,
    faqItems: [
      {
        question: "Do BAs need SQL on resume for ATS?",
        answer:
          "When the posting lists it — place SQL in an analysis bullet with the business question you answered.",
      },
    ],
  },
];

export const RESUME_CHECKER_ROLES: ResumeCheckerRoleEntry[] = ROLES.map((r) => ({
  ...r,
  path: `/resume-checker/${r.slug}`,
  ctr: {
    title: ctrTitle(`${r.roleLabel} Resume Checker`, r.ctrHook),
    description: ctrMeta(
      `Free ${r.roleLabel.toLowerCase()} resume checker — ATS score, parser test & keyword match vs your job post. Fix before you apply.`
    ),
    h1: `${r.roleLabel} Resume Checker — Free ATS Scan`,
    primaryKeyword: `${r.roleLabel.toLowerCase()} resume checker`,
    richSnippets: ["SoftwareApplication", "FAQPage", "HowTo", "BreadcrumbList", "Organization"],
  },
}));

export function getResumeCheckerRoleSlugs(): string[] {
  return RESUME_CHECKER_ROLES.map((r) => r.slug);
}

export function getResumeCheckerRole(slug: string): ResumeCheckerRoleEntry | undefined {
  return RESUME_CHECKER_ROLES.find((r) => r.slug === slug);
}
