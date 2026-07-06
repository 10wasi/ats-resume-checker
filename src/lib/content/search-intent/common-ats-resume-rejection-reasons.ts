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

## Recruiter perspective: what they see when these reasons apply

Understanding what a recruiter actually experiences on their screen explains why these issues matter:

**Reason 1 (two-column layout):** In many ATS interfaces, recruiters see extracted text — not your beautifully formatted PDF. Two-column text often renders as a scrambled mix of your skills and your employer names because the parser reads left to right across the page. Recruiters searching "Salesforce" may not find you because "Salesforce" appeared in a sidebar column that extracted out of order.

**Reason 5 (missing must-have keyword):** Recruiters often set up saved searches with required terms. If "Salesforce" or "PMP" are marked as required by the recruiter's filter and your file doesn't contain them, you do not appear in their candidate list — even if you have the experience. You are not rejected; you are invisible.

**Reason 10 (date gaps):** Parsers attempt to calculate total years of experience. If date fields are in non-standard formats (tables, text boxes, odd spacing), the parser fails to extract them correctly — sometimes reporting 0 or 1 year of experience regardless of your actual tenure. This can trigger automatic exclusion from roles requiring minimum experience.

## The cascading failure pattern

Most rejections are not caused by one issue — they cascade:

1. Poor template choice (two-column) → parser scrambles text
2. Scrambled text → keywords don't extract correctly
3. Keywords not extracted → match score is artificially low
4. Low match score → file ranks near the bottom
5. Recruiter search → your file never surfaces

The fix is also cascading: fix layout → keywords extract → score improves → ranking improves → recruiter search finds you.

Start at step 1. Everything else improves automatically when parse is fixed.

## Industry-specific rejection patterns

Different industries have characteristically different rejection reasons:

**Technology roles:** Title mismatch is the top cause. "Developer" vs "Software Engineer" vs "Software Development Engineer" are different search strings to most ATS systems. Mirror the exact title from the posting.

**Healthcare:** Missing credential fields (RN, NP, PA-C, MD) trigger immediate hard filters. Credential abbreviations must appear exactly as the system expects.

**Finance:** Years-of-experience filters are aggressive. A posting for "Senior Analyst" often filters for 5–7+ years. Check requirements before applying.

**Creative/Marketing:** Portfolio links are frequently listed as required fields in ATS forms. If the field is required and blank, the application may not submit or may auto-exclude.

**Government/Public sector:** Job announcements often use very specific mandatory keyword phrasing. Resumes that do not mirror the exact language used in the announcement score poorly in specialized government ATS systems.

## After fixing: how to verify each reason is resolved

| Reason | Verification method |
|--------|---------------------|
| Two-column layout | Copy-paste test: text reads in logical order in a plain text editor |
| Scanned PDF | Open file → can you select text with your cursor? If not, it's image-only |
| Non-standard headings | Extracted text in [checker](/resume-checker) shows your sections correctly labeled |
| Missing keyword | [Match analyzer](/resume-job-description-match) shows 0 gap for must-have terms |
| Low match score | Match score above 65–70% for posting-specific must-have terms |
| Date format issues | Checker shows your employment dates correctly extracted |

Run the full [ATS Resume Checklist](/ats-resume-checklist-2026) before each application batch.

Explore all optimization guides in the [Career Success Hub](/career-success-hub) and the [ATS Knowledge Center](/knowledge-center).
`,
};
