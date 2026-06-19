import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_AI_RESUME_REVIEW } from "@/lib/seo/ctr-metadata";

export const aiResumeReviewEntry: CareerLandingEntry = {
  id: "ai-resume-review",
  path: "/ai-resume-review",
  breadcrumbLabel: "AI resume review",
  ctr: CTR_AI_RESUME_REVIEW,
  faqItems: [
    {
      question: "What is an AI resume review?",
      answer:
        "Software reads your resume text, scores ATS compatibility, flags format issues, compares keywords to a job post, and suggests bullet improvements—faster than a manual first pass.",
    },
    {
      question: "Is AI resume review better than a human review?",
      answer:
        "AI catches parse and keyword gaps humans miss in seconds. Humans judge narrative and fit. Use both: AI checker first, then the resume review rubric.",
    },
    {
      question: "Is ResumeIQ AI resume review free?",
      answer:
        "Yes for core analysis—ATS score, keyword gaps, format flags, and improvement checklist. No signup required for standard checks.",
    },
    {
      question: "Can AI rewrite my resume automatically?",
      answer:
        "ResumeIQ suggests improved bullets and highlights gaps—you approve every change. See also [AI resume rewrite](/ai-resume-rewrite) for how rewrites work.",
    },
    {
      question: "Will AI review guarantee interviews?",
      answer:
        "No tool guarantees outcomes. AI review reduces preventable ATS rejections and gives actionable fixes—not interview promises.",
    },
  ],
  body: `
An **AI resume review** gives you a structured first pass: what parsers extract, which keywords are missing, where format breaks, and which bullets need metrics—before you pay a coach or send another blind application.

## What AI resume review checks

| Signal | Why it matters |
|--------|----------------|
| Text extraction | Proves ATS can read your file |
| ATS score | Baseline compatibility |
| Keyword gaps | Search terms recruiters filter on |
| Format warnings | Columns, tables, risky layouts |
| Match % (with JD) | Role-specific overlap |
| Bullet suggestions | Stronger impact language |

[Start free AI resume review →](/resume-checker)

## AI review vs human resume review

| Layer | AI review | Human review |
|-------|-----------|--------------|
| Speed | Seconds | 15–60 minutes |
| Parse health | Excellent | Often skipped |
| Keyword mapping | Systematic | Variable |
| Story & fit | Limited | Strong |
| Cost | Free (ResumeIQ) | Often paid |

Pair AI with our [resume review online](/resume-review) rubric for the full picture.

## Example AI review output

After upload, you typically see:

- **ATS score 68%** — format OK, keywords thin
- **Missing:** "Stakeholder management," "Agile," "Jira"
- **Format flag:** Table detected in skills section
- **Roadmap:** Fix table → add 3 terms to recent bullets → re-check

Same flow powers [AI resume rewrite](/ai-resume-rewrite) suggestions when you attach a job description.

## Common mistakes when using AI review

- Accepting every rewrite without interview prep
- Chasing score alone without [match analysis](/resume-job-description-match)
- Ignoring format flags because the PDF "looks fine"
- Using AI on a scanned image PDF (garbage in, garbage out)

## Workflow

1. [Free ATS resume checker](/resume-checker) — AI score + gaps
2. Paste job post — unlock match % and tailored keywords
3. [Resume score check](/resume-score-checker) — interpret your numbers
4. [Resume review online](/resume-review) — human-readability pass
5. [Complete optimization guide](/complete-guide-ats-resume-optimization) — long-term system

## Related

- [CV checker](/cv-checker) — same tools work for CV uploads worldwide
- [Free ATS resume checker](/ats-resume-checker) — dedicated landing
- [Methodology](/methodology) — how scoring works transparently
`,
};
