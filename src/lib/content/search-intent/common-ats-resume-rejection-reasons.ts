import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_COMMON_ATS_REJECTION_REASONS } from "@/lib/seo/ctr-metadata";

export const commonAtsRejectionReasonsEntry: CareerLandingEntry = {
  id: "common-ats-resume-rejection-reasons",
  path: "/common-ats-resume-rejection-reasons",
  breadcrumbLabel: "ATS rejection reasons",
  ctr: CTR_COMMON_ATS_REJECTION_REASONS,
  faqItems: [
    {
      question: "What are the most common ATS resume rejection reasons?",
      answer:
        "Parse failures (columns, graphics), missing must-have keywords, hard filters (years, location, degree), and unsearchable skills buried in design elements—not lack of talent.",
    },
    {
      question: "Why do ATS systems reject formatted resumes?",
      answer:
        "Parsers read left-to-right plain text. Multi-column layouts reorder content; icons replace words; headers/footers drop contact details from the body.",
    },
    {
      question: "Can keyword stuffing cause rejection?",
      answer:
        "Yes—recruiters notice unnatural blocks, and some systems flag repetition. Place terms in context inside experience bullets instead.",
    },
    {
      question: "How many rejection reasons should I fix first?",
      answer:
        "Fix format and parse health first, then top 5 missing keywords from your target posting. That covers most silent rejections.",
    },
    {
      question: "Where can I test my resume against these reasons?",
      answer:
        "Use the free ATS resume checker—it flags format issues, keyword gaps, and scoring signals tied to common rejection triggers.",
    },
  ],
  body: `
**Common ATS resume rejection reasons** repeat across industries because parsers and filters behave the same way worldwide. Fix these before rewriting your entire career narrative.

## Top 12 ATS rejection reasons (and fixes)

| # | Rejection reason | Example | Fix |
|---|------------------|---------|-----|
| 1 | **Two-column layout** | Skills sidebar only | Single column; skills in bullets |
| 2 | **Scanned/image PDF** | Phone photo of paper | Selectable-text PDF or DOCX |
| 3 | **Graphics replace text** | Skill bars, icons | Spell tools in plain text |
| 4 | **Non-standard headings** | "My Journey" vs Experience | Use Experience, Education, Skills |
| 5 | **Missing must-have keyword** | Posting requires CPA, not listed | Add where credentialed |
| 6 | **Keyword only in footer** | 40-skill list, no proof | Move to recent role bullets |
| 7 | **Title mismatch** | "Developer" vs "Software Engineer" | Mirror posting title honestly |
| 8 | **Years filter** | Requires 7+, resume shows 4 | Apply to fit roles or bridge scope |
| 9 | **Location / work auth filter** | Hard requirement | Do not waste applies; target open roles |
| 10 | **Date gaps unexplained** | Parser drops employment block | Consistent MM/YYYY, no tables |
| 11 | **File type rejected** | Portal wants DOCX, you sent PDF | Submit what the form accepts |
| 12 | **Low match vs posting** | Generic resume every time | [Tailor per job](/how-to-tailor-resume-for-job-description) |

## Examples: before and after

**Before (rejected):** Header graphic with email as image. "Core Competencies" in three columns. No employer names in extracted text.

**After (passes):** Name, email, phone in body. "Experience" with Company — Title — Dates. Bullets with tools and metrics from the posting.

See [resume examples](/resume-examples) for role-specific patterns.

## Mistakes people make after reading rejection lists

- Rewriting summary only while bullets stay generic
- Adding keywords they cannot discuss in an interview
- Switching to a new fancy template that breaks parsing again
- Ignoring match score and only chasing a higher global ATS %

## Action plan

1. Run [free ATS resume checker](/resume-checker) — note format flags
2. Read [resume rejected by ATS](/resume-rejected-by-ats) if silence continues
3. Compare to posting in [resume match analyzer](/resume-match-analyzer)
4. Walk [ATS resume mistakes](/ats-resume-mistakes) for silent triggers
5. Use [complete ATS optimization guide](/complete-guide-ats-resume-optimization) as master reference

## Tools for each rejection type

| Reason type | Tool |
|-------------|------|
| Parse / format | [ATS resume checker](/resume-checker) |
| Keywords | [Resume keyword tool](/resume-keyword-tool) |
| Match % | [Resume match tool](/resume-job-description-match) |
| Human skim | [Resume review online](/resume-review) |
| AI suggestions | [AI resume review](/ai-resume-review) |
`,
};
