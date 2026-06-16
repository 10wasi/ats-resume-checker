import type { ResumeKeywordsEntry } from "./types";
import { keywordsPageFooter } from "./shared-footer";

const SLUG = "customer-service";
const ROLE = "Customer Service";

export const customerServiceKeywords: ResumeKeywordsEntry = {
  id: SLUG,
  slug: SLUG,
  path: `/resume-keywords/${SLUG}`,
  breadcrumbLabel: "Customer service keywords",
  roleTitle: ROLE,
  ctr: {
    title: "Customer Service Resume Keywords — ATS List",
    description:
      "Customer service resume keywords: CRM, CSAT, ticket volume & resolution metrics ATS filters search. Verbs, mistakes & examples—free checker.",
    h1: "Customer Service Resume Keywords for ATS",
    primaryKeyword: "customer service resume keywords",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Customer Service Resume Keywords — ATS List",
    description:
      "Customer service resume keywords: CRM, CSAT, ticket volume & resolution metrics ATS filters search. Verbs, mistakes & examples—free checker.",
  },
  relatedSlugs: ["marketing-manager", "hr-manager", "accountant"],
  faqItems: [
    {
      question: "What keywords should customer service resumes include?",
      answer:
        "CRM tools (Zendesk, Salesforce Service Cloud), CSAT/NPS, average handle time, ticket volume, escalation rate, and resolution metrics—in context with team size or channel.",
    },
    {
      question: "Should I list soft skills for customer service ATS?",
      answer:
        "Yes, but pair them with metrics: de-escalation, empathy, and active listening shown through CSAT improvements or reduced escalations.",
    },
    {
      question: "Phone vs chat support keywords?",
      answer:
        "Mirror the posting—live chat, phone, email, and social support may each need explicit mention if required.",
    },
    {
      question: "How do I quantify customer service experience?",
      answer:
        "Tickets per day, CSAT scores, first-contact resolution rate, and handle time reductions.",
    },
    {
      question: "Retail vs SaaS support keywords?",
      answer:
        "SaaS adds product troubleshooting, tier-2 escalation, and knowledge base; retail adds POS and in-store service terms.",
    },
  ],
  body: `
**Customer service resume keywords** help ATS rank files that prove **CRM fluency**, **CSAT**, and **resolution speed**—not generic "people person" lines.

## Most common ATS keywords for customer service

customer support · customer success · CRM · Zendesk · Salesforce Service Cloud · Freshdesk · Intercom · CSAT · NPS · first contact resolution · average handle time · ticket volume · escalation management · de-escalation · active listening · knowledge base · SLA · call center · live chat · email support · quality assurance · training · onboarding customers

## Technical skills keywords

Zendesk · Salesforce · Freshdesk · Intercom · Jira Service Management · Microsoft Office · typing speed · multi-channel support · troubleshooting · remote desktop tools · help desk software

## Soft skills keywords

empathy · patience · communication · conflict resolution · problem solving · adaptability · teamwork · time management · cultural sensitivity · professionalism under pressure

## Action verbs

Resolved · Assisted · Supported · Escalated · Trained · Improved · Reduced · Handled · Documented · Coached · Monitored · Streamlined · Responded · De-escalated · Achieved

## Industry-specific phrases

- "Maintained CSAT 96% while handling 80+ tickets daily across chat and email"
- "Reduced average handle time 18% by updating knowledge base articles in Zendesk"
- "Trained 12 new agents on Salesforce Service Cloud workflows and SLA standards"
- "Achieved 92% first-contact resolution on tier-1 technical support queue"

## Common keyword mistakes

- "Great communication skills" without ticket volume or CSAT proof
- CRM listed without channel or resolution context
- Creative section titles parsers cannot classify
- Omitting SLA or escalation keywords when posting requires them
- One resume for retail and enterprise SaaS without tailoring

## Example resume section

**Experience — Zappos · Customer Service Lead** · Aug 2020 – Present

- Handled 75+ daily **tickets** via **Zendesk** chat and email; **CSAT** 96% over 12 months.
- Reduced **average handle time** 18% by authoring 40 **knowledge base** articles.
- Mentored 8 agents on **de-escalation** and **SLA** compliance; **escalation** rate −14%.
- Used **Salesforce** to track **customer success** metrics for VIP accounts.

**Skills:** customer support · Zendesk · Salesforce · CSAT · live chat · troubleshooting · training

${keywordsPageFooter(SLUG, ROLE)}
`,
};
