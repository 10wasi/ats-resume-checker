import type { ResumeKeywordsEntry } from "./types";
import { keywordsPageFooter } from "./shared-footer";

const SLUG = "accountant";
const ROLE = "Accountant";

export const accountantKeywords: ResumeKeywordsEntry = {
  id: SLUG,
  slug: SLUG,
  path: `/resume-keywords/${SLUG}`,
  breadcrumbLabel: "Accountant keywords",
  roleTitle: ROLE,
  ctr: {
    title: "Accountant Resume Keywords — ATS Skills List",
    description:
      "Accountant resume keywords: GAAP, reconciliations, ERP & close cycle terms ATS searches. Verbs, mistakes & example bullets—free match tool.",
    h1: "Accountant Resume Keywords for ATS",
    primaryKeyword: "accountant resume keywords",
    richSnippets: ["Article", "FAQPage", "BreadcrumbList", "Organization"],
  },
  seo: {
    title: "Accountant Resume Keywords — ATS Skills List",
    description:
      "Accountant resume keywords: GAAP, reconciliations, ERP & close cycle terms ATS searches. Verbs, mistakes & example bullets—free match tool.",
  },
  relatedSlugs: ["business-analyst", "hr-manager", "data-analyst"],
  faqItems: [
    {
      question: "What keywords should accountants include for ATS?",
      answer:
        "GAAP, reconciliations, month-end close, accounts payable/receivable, ERP systems, audit support, and variance analysis—with entity scope and accuracy metrics.",
    },
    {
      question: "Should I list CPA on my accountant resume?",
      answer:
        "List CPA or CMA in credentials if held; match spelling used in the job description.",
    },
    {
      question: "How do I list ERP keywords?",
      answer:
        "Name systems in bullets where you used them: 'Led month-end close in NetSuite for 3 legal entities.'",
    },
    {
      question: "Staff vs senior accountant keywords?",
      answer:
        "Senior roles add consolidation, SOX, forecasting, and team leadership terms; staff roles emphasize reconciliations and AP/AR volume.",
    },
    {
      question: "Industry-specific accounting keywords?",
      answer:
        "Public accounting: audit, tax, engagements. Corporate: close, FP&A, intercompany. Mirror the posting's sector.",
    },
  ],
  body: `
**Accountant resume keywords** align with how finance ATS filters search **GAAP**, **reconciliations**, and **ERP** systems—always with scope and accuracy proof.

## Most common ATS keywords for accountants

GAAP · IFRS · accounts payable · accounts receivable · general ledger · reconciliations · month-end close · journal entries · variance analysis · financial reporting · budgeting · forecasting · audit support · tax preparation · SOX compliance · internal controls · ERP · NetSuite · SAP · QuickBooks · Excel · pivot tables · financial statements · P&L · balance sheet · cash flow

## Technical skills keywords

NetSuite · SAP · Oracle · QuickBooks · Microsoft Excel · pivot tables · VLOOKUP · Power BI · SQL (basic) · Blackline · Workiva · ADP · payroll systems

## Soft skills keywords

attention to detail · analytical thinking · time management during close · cross-department collaboration · confidentiality · problem solving · process improvement · deadline-driven execution

## Action verbs

Reconciled · Prepared · Analyzed · Audited · Streamlined · Reduced · Managed · Reported · Forecasted · Implemented · Verified · Coordinated · Ensured · Documented · Optimized

## Industry-specific phrases

- "Completed **month-end close** for 4 entities in NetSuite within 5 business days"
- "Reduced **reconciliation** discrepancies 40% via standardized **journal entry** templates"
- "Supported external **audit** with clean **GAAP** documentation for $120M revenue division"
- "Automated **AP** workflow cutting processing time 25% using Excel macros"

## Common keyword mistakes

- Listing every ERP ever touched without production use
- GAAP mentioned only in skills block—not in close or reporting bullets
- Dense journal-entry prose instead of outcome bullets
- Wrong certification abbreviation vs job post
- Omitting SOX or consolidation when senior role requires them

## Example resume section

**Experience — Deloitte · Staff Accountant** · Jul 2020 – Present

- Executed **month-end close** and **reconciliations** for $85M revenue division under **GAAP**.
- Prepared **financial statements** and **variance analysis** for leadership review each quarter.
- Supported external **audit** with documentation for **general ledger** and **internal controls**.
- Improved **accounts payable** cycle time 25% via process changes in **NetSuite**.

**Skills:** GAAP · reconciliations · NetSuite · Excel · financial reporting · audit support · AP/AR

${keywordsPageFooter(SLUG, ROLE)}
`,
};
