import type { CareerLandingEntry } from "./types";
import { CTR_RESUME_OPTIMIZATION } from "@/lib/seo/ctr-metadata";

export const resumeOptimizationEntry: CareerLandingEntry = {
  id: "resume-optimization",
  path: "/resume-optimization",
  breadcrumbLabel: "Resume optimization",
  ctr: CTR_RESUME_OPTIMIZATION,
  faqItems: [
    {
      question: "What is resume optimization?",
      answer:
        "Resume optimization is the process of improving how your resume parses in ATS software, matches job descriptions, and presents quantified proof to recruiters. It combines format, keywords, bullets, and export QA—not keyword stuffing.",
    },
    {
      question: "How long does resume optimization take?",
      answer:
        "A first pass takes 30–60 minutes: checker run, match analysis, bullet rewrites, and checklist. Maintenance per application is 10–15 minutes of keyword tailoring.",
    },
    {
      question: "Does resume optimization guarantee an interview?",
      answer:
        "No tool can guarantee interviews. Optimization raises the odds your resume is parsed, ranked, and read—especially when you align with each posting's language.",
    },
    {
      question: "Should I optimize for ATS or humans?",
      answer:
        "Both. ATS gets you into the queue; humans decide interviews. Use plain layout for applications and keep a designed version for networking if needed.",
    },
    {
      question: "What tools do I need for resume optimization?",
      answer:
        "Start with the ATS Resume Checker, Resume Match Analyzer, ATS Keywords Finder, and ATS Resume Checklist—all free on ResumeIQ.",
    },
  ],
  body: `
**Resume optimization** is a repeatable workflow—not a one-time rewrite. This page is your map from "uploaded resume" to "higher ATS score and resume match score" using tools that connect end to end.

## The 5-step resume optimization workflow

### 1. Baseline your ATS score

Upload your current PDF to the [ATS Resume Checker](/resume-checker). Note your score, format warnings, and missing keyword categories. Read [ATS Score Explained](/ats-score-explained) so you know what moved the needle.

### 2. Match to a real job post

Paste the job description into the [Resume Match Analyzer](/resume-job-description-match). Export the missing keywords list. This is your tailoring target—not every synonym, but hard skills and tools repeated in the posting.

### 3. Fix format before content

Columns, tables, and header/footer text break parsers. Follow the [ATS Resume Formatting Guide](/ats-resume-format) and validate with a second checker run after export.

### 4. Upgrade bullets with proof

Use the [Resume Bullet Generator](/resume-bullet-generator) to draft impact patterns, then add real metrics. For full-document suggestions, run the checker with a job description attached for AI rewrite hints.

### 5. Pre-submit QA

Walk the [ATS Resume Checklist](/ats-resume-checklist-2026). Re-run match score. Apply only when score and readability both pass your bar.

## Resume optimization by layer

| Layer | What to fix | Resource |
|-------|-------------|----------|
| Parse | Layout, fonts, PDF export | [ATS format guide](/ats-resume-format) |
| Keywords | Skills, tools, certifications | [ATS keywords guide](/ats-resume-keywords) |
| Match | Job-specific gaps | [Resume match tool](/resume-job-description-match) |
| Proof | Metrics in bullets | [Resume examples](/resume-examples) |
| Mistakes | Columns, graphics, typos | [ATS mistakes guide](/ats-resume-mistakes) |

## Industry tailoring

Generic optimization hits a ceiling. Use role guides and examples:

- [Software engineer resume](/resume-examples/software-engineer)
- [Data analyst resume](/resume-examples/data-analyst)
- [Product manager resume](/resume-examples/product-manager)
- [Marketing manager resume](/resume-examples/marketing-manager)

Each page lists industry keywords, common mistakes, and an ATS-friendly sample.

## Avoid these optimization traps

- **Keyword stuffing** — Invisible text and skill dumps trigger filters and hurt human reads.
- **Chasing 100% match** — 70–85% aligned with honest experience beats a fabricated 95%.
- **Skipping export test** — Always re-upload after Word or Canva export.

## Go deeper

The [Ultimate ATS Resume Guide](/ultimate-ats-resume-guide) and [Knowledge Center](/knowledge-center) expand each step. The [Career Success Hub](/career-success-hub) links every tool in one place.
`,
};
