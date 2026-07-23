import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_CV_CHECKER } from "@/lib/seo/ctr-metadata";

export const cvCheckerEntry: CareerLandingEntry = {
  id: "cv-checker",
  path: "/cv-checker",
  breadcrumbLabel: "CV checker",
  ctr: CTR_CV_CHECKER,
  faqItems: [
    {
      question: "Is a CV checker the same as an ATS resume checker?",
      answer:
        "For online applications, yes—parsers extract text from CV or resume files the same way. ResumeIQ accepts PDF and DOCX whether you label it CV or resume.",
    },
    {
      question: "Does CV checker work for international job seekers?",
      answer:
        "Yes. Format rules (single column, plain text, standard headings) apply globally. Mirror spelling and terms from each employer's posting.",
    },
    {
      question: "Can I check my CV online for free?",
      answer:
        "Yes. Upload or paste your CV at the free checker—ATS score, keyword scan, and format flags with no signup for standard use.",
    },
    {
      question: "CV vs resume length—does the checker care?",
      answer:
        "Parsers care about extractable structure, not cultural CV vs resume labels. Two-page CVs with clear headings parse fine; broken layouts do not.",
    },
    {
      question: "What should I fix after a CV check?",
      answer:
        "Format issues first, then missing keywords from your target role. Use the match tool when applying to a specific posting.",
    },
  ],
  body: `
A **CV checker** answers whether hiring software can read your file and whether your language matches what recruiters search for—whether you call it a CV or resume.

## Free CV checker online

ResumeIQ's [free ATS resume checker](/resume-checker) works as a **CV checker online**:

- Upload PDF or DOCX (paste text works too)
- See ATS compatibility score and readability
- Get missing keywords and format warnings
- Optional job description for match % and AI suggestions

No account required for standard checks.

## CV checker vs resume checker

| Term | Typical use | Parser behavior |
|------|-------------|-----------------|
| CV | Academia, longer form, some markets | Same extraction rules |
| Resume | Corporate roles, 1–2 pages | Same extraction rules |

What matters: **plain text, standard sections, honest keywords**—not the filename label.

## Common CV mistakes (global)

1. **Photo-heavy templates** — Text hidden in design layers
2. **Multi-column EU templates** — Reordered parse output
3. **Skills only in charts** — Not searchable
4. **Missing local keywords** — Posting says "programme" vs "program"
5. **Non-selectable PDF export** — Fails on every portal

Fix with [ATS resume format](/ats-resume-format) and [ATS resume examples](/ats-resume-examples).

## Example: CV check results

**Input:** Two-page CV, clean headings, PDF export from Word  
**Output:** Score 81%, 3 missing keywords from target posting, no format flags  
**Next step:** Match tool → add terms to recent role → re-export

## Connected tools

| Goal | Tool |
|------|------|
| Score & parse test | [CV checker / resume checker](/resume-checker) |
| vs job posting | [Resume match tool](/resume-job-description-match) |
| Online review | [Resume review online](/resume-review) |
| AI pass | [AI resume review](/ai-resume-review) |
| Master guide | [Complete ATS guide](/complete-guide-ats-resume-optimization) |

## Rejection help

If your CV gets silence after apply: [resume rejected by ATS](/resume-rejected-by-ats) and [common rejection reasons](/common-ats-resume-rejection-reasons).
`,
};
