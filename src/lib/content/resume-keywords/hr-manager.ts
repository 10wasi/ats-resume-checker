import type { ResumeKeywordsEntry } from "./types";
import { keywordsPageFooter } from "./shared-footer";

const SLUG = "hr-manager";
const ROLE = "HR Manager";

export const hrManagerKeywords: ResumeKeywordsEntry = {
  id: SLUG,
  slug: SLUG,
  path: `/resume-keywords/${SLUG}`,
  breadcrumbLabel: "HR manager keywords",
  roleTitle: ROLE,
  ctr: {
    title: "HR Manager Resume Keywords — ATS Guide",
    description:
      "HR manager resume keywords: talent acquisition, HRIS, employee relations & compliance terms ATS searches. Lists, verbs & examples—free checker.",
    h1: "HR Manager Resume Keywords for ATS",
    primaryKeyword: "HR manager resume keywords",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "HR Manager Resume Keywords — ATS Guide",
    description:
      "HR manager resume keywords: talent acquisition, HRIS, employee relations & compliance terms ATS searches. Lists, verbs & examples—free checker.",
  },
  relatedSlugs: ["customer-service", "project-manager", "accountant"],
  faqItems: [
    {
      question: "What HR keywords do ATS systems prioritize?",
      answer:
        "Talent acquisition, HRIS (Workday, BambooHR), employee relations, performance management, compliance, onboarding, and benefits administration—with hiring volume metrics.",
    },
    {
      question: "Should HR managers list soft skills?",
      answer:
        "Yes—coaching, conflict resolution, and change management—but pair with hires per quarter, retention, or time-to-fill metrics.",
    },
    {
      question: "HR generalist vs HR manager keywords?",
      answer:
        "Manager roles emphasize policy ownership, team leadership, and workforce planning; generalist may focus broader operational HR terms.",
    },
    {
      question: "How do I show HRIS skills on a resume?",
      answer:
        "Name systems in bullets: 'Implemented onboarding workflow in Workday reducing paperwork errors 30%.'",
    },
    {
      question: "Compliance keywords for HR?",
      answer:
        "Include FMLA, EEO, OSHA, or state-specific terms when accurate and relevant to the posting.",
    },
  ],
  body: `
**HR manager resume keywords** signal **hiring volume**, **HRIS fluency**, and **employee relations** proof—beyond generic people skills parsers cannot rank.

## Most common ATS keywords for HR managers

talent acquisition · recruiting · onboarding · employee relations · performance management · HRIS · Workday · BambooHR · ADP · benefits administration · compensation · workforce planning · compliance · FMLA · EEO · policy development · training and development · succession planning · employee engagement · retention · HR analytics · conflict resolution · change management · labor relations

## Technical skills keywords

Workday · BambooHR · ADP · Greenhouse · Lever · iCIMS · Microsoft Excel · HR analytics · ATS platforms · payroll systems · LMS platforms · survey tools (Culture Amp, Qualtrics)

## Soft skills keywords

coaching · mediation · confidentiality · strategic partnership with leadership · inclusive hiring · communication · empathy · organizational development · influence · presentation skills

## Action verbs

Recruited · Onboarded · Developed · Implemented · Resolved · Reduced · Improved · Partnered · Led · Streamlined · Negotiated · Facilitated · Analyzed · Designed · Championed

## Industry-specific phrases

- "Reduced time-to-fill 22% by restructuring interview process in Greenhouse"
- "Onboarded 180 employees annually via Workday workflows with 98% documentation accuracy"
- "Led employee relations cases with 95% resolution without escalation to legal"
- "Designed performance management program improving engagement scores 12 points"

## Common keyword mistakes

- "People person" without hires, retention, or HRIS proof
- Listing HRIS in skills without workflow or volume context
- Omitting compliance terms when regulated industry posting requires them
- Confusing HR coordinator duties with manager-level workforce planning keywords
- Generic culture bullets without engagement or retention metrics

## Example resume section

**Experience — Salesforce · HR Manager** · Mar 2021 – Present

- Led **talent acquisition** for 45 roles/year; **time-to-fill** improved 22% using **Greenhouse** pipelines.
- Managed **employee relations** for 800-person division; 95% cases resolved without legal escalation.
- Implemented **onboarding** in **Workday** for 180 hires annually; documentation errors −30%.
- Partnered with leadership on **performance management** and **succession planning** initiatives.

**Skills:** talent acquisition · Workday · employee relations · onboarding · compliance · HRIS · recruiting

${keywordsPageFooter(SLUG, ROLE)}
`,
};
