import type { ResumeKeywordsEntry } from "./types";
import { keywordsPageFooter } from "./shared-footer";

const SLUG = "marketing-manager";
const ROLE = "Marketing Manager";

export const marketingManagerKeywords: ResumeKeywordsEntry = {
  id: SLUG,
  slug: SLUG,
  path: `/resume-keywords/${SLUG}`,
  breadcrumbLabel: "Marketing manager keywords",
  roleTitle: ROLE,
  ctr: {
    title: "Marketing Manager Resume Keywords — ATS List",
    description:
      "Marketing manager resume keywords: SEO, SEM, CRM, CAC & campaign ROI terms ATS recruiters search. Verbs, mistakes & examples—free checker.",
    h1: "Marketing Manager Resume Keywords for ATS",
    primaryKeyword: "marketing manager resume keywords",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Marketing Manager Resume Keywords — ATS List",
    description:
      "Marketing manager resume keywords: SEO, SEM, CRM, CAC & campaign ROI terms ATS recruiters search. Verbs, mistakes & examples—free checker.",
  },
  relatedSlugs: ["graphic-designer", "product-manager", "customer-service"],
  faqItems: [
    {
      question: "What marketing keywords do ATS systems look for?",
      answer:
        "Channel terms (SEO, SEM, email, social), tools (HubSpot, Google Analytics, Salesforce), and ROI metrics—pipeline influenced, conversion rate, CAC, campaign revenue.",
    },
    {
      question: "Should I list every campaign I ran?",
      answer:
        "Pick 3–5 bullets per role with strongest quantified outcomes and channel keywords from the target posting.",
    },
    {
      question: "How do I show digital marketing without fluff?",
      answer:
        "Tie each channel to a result: 'Increased organic traffic 41% via technical SEO and content hub.'",
    },
    {
      question: "Creative resume vs ATS resume for marketing?",
      answer:
        "Use a plain single-column ATS version for applications; keep designed PDFs for networking. Test with the checker before upload.",
    },
    {
      question: "B2B vs B2C marketing keywords?",
      answer:
        "Mirror the posting—pipeline, ABM, and lead gen for B2B; retention, LTV, and brand for B2C.",
    },
  ],
  body: `
**Marketing manager resume keywords** must pair **channel proof** with **numbers**—SEO, paid media, and CRM tools inside bullets parsers and recruiters can search.

## Most common ATS keywords for marketing managers

SEO · SEM · PPC · Google Ads · content marketing · email marketing · social media · brand strategy · demand generation · lead generation · marketing automation · HubSpot · Salesforce · Google Analytics · GA4 · CAC · ROAS · conversion rate · pipeline · MQL · SQL · CRM · A/B testing · campaign management · market research · positioning

## Technical skills keywords

HubSpot · Salesforce · Marketo · Google Analytics · GA4 · Google Tag Manager · Meta Ads Manager · LinkedIn Campaign Manager · Mailchimp · SEMrush · Ahrefs · Canva · WordPress · HTML basics · SQL for marketing analytics

## Soft skills keywords

cross-functional collaboration · brand storytelling · data-driven decision making · vendor management · budget ownership · creative briefing · presentation to executives · customer-centric messaging

## Action verbs

Launched · Optimized · Increased · Generated · Reduced · Managed · Developed · Executed · Analyzed · Scaled · Targeted · Converted · Influenced · Drove · Measured

## Industry-specific phrases

- "Increased organic traffic 41% through technical SEO and content hub strategy"
- "Reduced CAC 22% by restructuring paid search and retargeting in Google Ads"
- "Generated $3.8M pipeline influenced via ABM campaigns in HubSpot and Salesforce"
- "Improved email conversion 18% through segmentation and lifecycle automation"

## Common keyword mistakes

- Adjectives without metrics ("innovative campaigns")
- Channel list with no tool or revenue tie-in
- Design-heavy resume breaking ATS parse
- Copying job description into summary
- Ignoring CRM and analytics tool names from posting

## Example resume section

**Experience — HubSpot · Marketing Manager** · Jun 2021 – Present

- Led **SEO** and **content marketing** program; **organic traffic** +41% YoY via technical fixes and hub strategy.
- Managed **Google Ads** and **LinkedIn** campaigns with **ROAS** 4.2x at $120k monthly spend.
- Built **HubSpot** workflows generating 2,400 **MQLs** per quarter; **Salesforce** integration improved **pipeline** visibility.
- Ran **A/B tests** on landing pages lifting **conversion rate** 18%.

**Skills:** SEO · SEM · HubSpot · Salesforce · Google Analytics · content marketing · CAC · demand generation

${keywordsPageFooter(SLUG, ROLE)}
`,
};
