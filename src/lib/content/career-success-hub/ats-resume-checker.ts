import type { CareerLandingEntry } from "./types";
import { CTR_ATS_RESUME_CHECKER_LANDING } from "@/lib/seo/ctr-metadata";

export const atsResumeCheckerEntry: CareerLandingEntry = {
  id: "ats-resume-checker",
  path: "/ats-resume-checker",
  breadcrumbLabel: "ATS resume checker",
  ctr: CTR_ATS_RESUME_CHECKER_LANDING,
  faqItems: [
    {
      question: "What is an ATS resume checker?",
      answer:
        "An ATS resume checker simulates how applicant tracking systems parse your resume—extracting text, mapping sections, and scoring keyword relevance. It helps you fix issues before employers' software silently filters you out.",
    },
    {
      question: "Is this ATS resume checker really free?",
      answer:
        "Yes. Upload or paste your resume for score, keyword gaps, format warnings, and improvement suggestions—no credit card or account required for standard use.",
    },
    {
      question: "PDF or Word—which works better for ATS?",
      answer:
        "Both can work if exported simply. PDFs from design tools often break parsing. After export, always run the checker on the exact file you will submit.",
    },
    {
      question: "How is ATS resume checker different from resume match?",
      answer:
        "The checker scores overall ATS compatibility. Match analysis compares you to one job description. Use checker for baseline health, match for each application.",
    },
    {
      question: "What should I do after running the ATS resume checker?",
      answer:
        "Fix format flags first, add missing keywords from your target posting, upgrade bullets, then re-run. Follow the ATS Resume Checklist before you apply.",
    },
  ],
  body: `
An **ATS resume checker** answers one question: *Can hiring software read and rank your resume?* ResumeIQ's checker scores parsing, keywords, and format—then gives you a prioritized fix list.

## What you get from the ATS resume checker

- **ATS compatibility score** — Baseline health for parsers and recruiters
- **Keyword gap analysis** — Skills and tools to add (especially with a job description)
- **Format & structure flags** — Columns, tables, and risky layout patterns
- **Strengths & weaknesses** — What is working and what blocks visibility
- **Improvement plan** — Ordered next steps, not vague advice
- **Optional AI rewrites** — Stronger bullets when you attach a job post

[Open the free ATS Resume Checker →](/resume-checker)

## Who should use an ATS resume checker?

- **Active job seekers** applying through company portals and job boards
- **Career changers** validating a new layout before a pivot
- **Students & new grads** learning what "ATS friendly" actually means
- **Experienced hires** who have not updated format since pre-ATS norms

## ATS resume checker workflow

1. Upload your current resume (PDF or paste text)
2. Optionally paste a job description for tailored keyword and rewrite suggestions
3. Fix high-priority format issues from the report
4. Run [Resume Match Analyzer](/resume-job-description-match) for the same posting
5. Complete the [ATS Resume Checklist](/ats-resume-checklist-2026) and re-export

## Learn while you fix

- [ATS Score Explained](/ats-score-explained) — What the number means
- [ATS Resume Format](/ats-resume-format) — Layout rules that parse
- [ATS Resume Keywords](/ats-resume-keywords) — Ethical placement
- [ATS Resume Mistakes](/ats-resume-mistakes) — Silent rejection triggers
- [Resume Examples](/resume-examples) — Role-specific benchmarks

## Part of a complete platform

The ATS resume checker is the hub of the [Career Success Hub](/career-success-hub)—connected to match tools, keyword finders, bullet generators, and nine industry resume guides. One workflow, no paywall for core analysis.
`,
};
