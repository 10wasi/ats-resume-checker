import type { ResumeKeywordsEntry } from "./types";
import { keywordsPageFooter } from "./shared-footer";

const SLUG = "product-manager";
const ROLE = "Product Manager";

export const productManagerKeywords: ResumeKeywordsEntry = {
  id: SLUG,
  slug: SLUG,
  path: `/resume-keywords/${SLUG}`,
  breadcrumbLabel: "Product manager keywords",
  roleTitle: ROLE,
  ctr: {
    title: "Product Manager Resume Keywords — ATS Guide",
    description:
      "Product manager resume keywords: roadmap, OKRs, user research, SQL & shipping metrics. ATS lists, verbs, mistakes & example section—free checker.",
    h1: "Product Manager Resume Keywords for ATS",
    primaryKeyword: "product manager resume keywords",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Product Manager Resume Keywords — ATS Guide",
    description:
      "Product manager resume keywords: roadmap, OKRs, user research, SQL & shipping metrics. ATS lists, verbs, mistakes & example section—free checker.",
  },
  relatedSlugs: ["project-manager", "business-analyst", "software-engineer"],
  faqItems: [
    {
      question: "What ATS keywords do product managers need?",
      answer:
        "Roadmap, OKRs, user research, prioritization, A/B testing, SQL/analytics, go-to-market, and shipping metrics—always tied to adoption, retention, or revenue outcomes.",
    },
    {
      question: "Should PMs list technical skills?",
      answer:
        "Yes when accurate: SQL, APIs, experimentation platforms, and basic stack literacy help ATS filters for technical PM roles.",
    },
    {
      question: "How is PM keyword strategy different from project managers?",
      answer:
        "PM keywords emphasize discovery, product outcomes (DAU, conversion), and experimentation—not delivery methodology alone.",
    },
    {
      question: "Can I use the same resume for B2B and B2C PM roles?",
      answer:
        "Tailor domain terms per posting—marketplace, SaaS, fintech, consumer app—using Resume Match Analyzer on each JD.",
    },
    {
      question: "Where should product metrics appear?",
      answer:
        "In experience bullets under each product surface you owned—onboarding, billing, growth—not only in summary buzzwords.",
    },
  ],
  body: `
**Product manager resume keywords** signal shipping proof, experimentation, and metrics—not vision decks. ATS and hiring managers search **roadmap**, **OKRs**, and **user research** before reading case studies.

## Most common ATS keywords for product managers

product roadmap · OKRs · KPIs · user research · user interviews · product discovery · PRD · backlog prioritization · A/B testing · go-to-market · cross-functional · stakeholder management · Agile · Scrum · SQL · Amplitude · Mixpanel · Jira · Figma · retention · activation · conversion · ARR · NPS · B2B SaaS · platform · API products

## Technical skills keywords

SQL · Amplitude · Mixpanel · Google Analytics · Looker · Jira · Confluence · Figma · LaunchDarkly · experimentation platforms · API documentation · wireframing · prototyping · data-informed prioritization

## Soft skills keywords

stakeholder alignment · executive communication · conflict resolution · negotiation · presentation skills · customer empathy · strategic thinking · influence without authority · roadmap communication

## Action verbs

Shipped · Launched · Prioritized · Defined · Drove · Partnered · Analyzed · Experimented · Scaled · Improved · Owned · Delivered · Influenced · Validated · Iterated · Optimized

## Industry-specific phrases

- "Increased activation 24% through onboarding experiments tracked in Amplitude"
- "Owned billing roadmap generating $4.2M ARR in first year post-launch"
- "Ran 14 A/B tests on signup flow; lifted conversion from 31% to 55%"
- "Defined OKRs with engineering and design squads (9 people) for quarterly roadmap"

## Common keyword mistakes

- Feature lists without adoption or revenue metrics
- "Passionate product leader" summaries with no shipped products
- Confusing PM with project manager titles and ceremony keywords only
- Keyword stuffing with Agile terms unrelated to outcomes
- Portfolio PDF submitted instead of plain ATS version

## Example resume section

**Experience — Notion · Senior Product Manager** · Mar 2022 – Present

- Owned growth **roadmap** for self-serve onboarding; **A/B tests** improved **activation** 24% in two quarters.
- Partnered with eng and design (9 people) to launch tiered billing—**$4.2M ARR** year one.
- Used **SQL** and **Amplitude** to diagnose drop-off; prioritized backlog via **OKRs** and **user research** (30+ interviews).

**Skills:** product discovery · roadmap · OKRs · A/B testing · SQL · Amplitude · Jira · stakeholder management · B2B SaaS

${keywordsPageFooter(SLUG, ROLE)}
`,
};
