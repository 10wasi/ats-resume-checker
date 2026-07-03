import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_WHY_RESUME_GETS_REJECTED } from "@/lib/seo/ctr-metadata";

export const whyResumeGetsRejectedEntry: CareerLandingEntry = {
  id: "why-resume-gets-rejected",
  path: "/why-resume-gets-rejected",
  breadcrumbLabel: "Why rejected",
  ctr: CTR_WHY_RESUME_GETS_REJECTED,
  faqItems: [
    {
      question: "Why does my resume get rejected immediately?",
      answer:
        "Instant rejections usually mean failed filters: required degree, years of experience, location, or unparseable files. Check format and hard requirements before rewriting bullets.",
    },
    {
      question: "Is rejection always the ATS?",
      answer:
        "No. Recruiters reject for clarity, relevance, and proof. ATS filters first in many companies—but humans still decide interviews. Fix both layers.",
    },
    {
      question: "Can a good resume still get rejected?",
      answer:
        "Yes, when competition is high or the role is a stretch. A strong resume raises your odds; it does not guarantee every posting.",
    },
    {
      question: "How do I know if parsing broke my resume?",
      answer:
        "Upload to the ATS Resume Checker. If extracted text is garbled or sections are missing, parsers see the same mess.",
    },
    {
      question: "What is the fastest fix for rejections?",
      answer:
        "Single-column layout, standard headings, and matching 5 priority terms from the job post in recent experience bullets.",
    },
  ],
  body: `
**Why resume gets rejected** is not one mystery—it is a stack of filters. If you searched **resume rejected by ATS**, start with our dedicated [resume rejected by ATS guide](/resume-rejected-by-ats) and [common rejection reasons](/common-ats-resume-rejection-reasons).

## The rejection stack (real order)

1. **Application form** — Required fields, work authorization, years of experience
2. **Parser** — PDF/DOCX text extraction (layout can fail here)
3. **Keyword / rules filters** — Must-have skills, certifications, title keywords
4. **Recruiter skim** — 6–10 seconds on what survived parsing
5. **Hiring manager** — Fit, narrative, team need

Most guides only talk about step 3. Job seekers lose at steps 2 and 4 constantly.

## Example: rejection causes vs fixes

| Symptom | Likely cause | Fix |
|---------|--------------|-----|
| Zero response, any role | Parse failure | [ATS format guide](/ats-resume-format), re-checker |
| Rejections only on senior roles | Title / scope gap | Bridge bullets with team size, budget, ownership |
| Rejections on one industry | Keyword dialect | [Resume keywords by industry](/resume-keywords-by-industry) |
| Phone screens but no offers | Interview prep—not resume | Keep resume; practice stories |

## Action steps

1. Run the [ATS Resume Checker](/resume-checker)—note format issues and score.
2. Compare to a target JD with the [Resume Match Analyzer](/resume-job-description-match).
3. Walk the [ATS Resume Checklist](/ats-resume-checklist-2026) before the next batch.
4. Study [resume mistakes that cost interviews](/resume-mistakes-that-cost-interviews).
5. If filters pass but silence remains, read [why resume not getting interviews](/why-resume-not-getting-interviews).

## Screening vs rejection

[Resume screening explained](/resume-screening-explained) covers who reads your file and when. Rejection often happens **before** that human read.

## The silent rejection pattern

Most rejections never explain why. The most common causes in order:

1. **Parse failure** - Garbled text means no searchable content
2. **Missing required terms** - A filter removes you before any human reads the file
3. **Weak first bullet** - Survived filters, then lost the skim in 3 seconds
4. **Title misalignment** - Applying to a specialist role with a generalist title
5. **Overqualified signals** - Compensation indicators above posting range

Tools reveal causes 1, 2, and 3 quickly.

## Before / after: same candidate, different outcome

A finance candidate applied 30 times with a two-column Canva template and duty-only bullets. Score: 48. Result: silence.

After switching to a single-column Word export, rewriting three bullets with metrics, and tailoring keywords per posting: score 79, match 72. Three phone screens in two weeks. Same experience.

## Rejection diagnosis by symptom

| Situation | Likely cause | Fix |
|-----------|-------------|-----|
| No responses after 20+ applications | Parse or keyword failure | [ATS Resume Checker](/resume-checker) |
| Responses drop as role level rises | Scope gap in bullets | Add team size, budget, P&L signals |
| Responses vary by company size | Template format issue | [ATS format guide](/ats-resume-format) |
| Phone screens but no offers | Interview stage - not resume | Keep resume; practice stories |

## Tools

| Tool | Use when |
|------|----------|
| [Resume Checker](/resume-checker) | Parse health, keyword gaps |
| [Keywords Finder](/ats-keywords-finder) | Extract must-haves from JD |
| [Resume Match Analyzer](/resume-job-description-match) | Keyword overlap per posting |
| [Resume Examples](/resume-examples) | Bullet patterns that survive skim |
| [ATS Checklist](/ats-resume-checklist-2026) | Pre-submit QA |
`,
};
