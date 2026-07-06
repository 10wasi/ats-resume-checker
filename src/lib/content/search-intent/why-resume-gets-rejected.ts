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

## Why rejection rates vary by industry and role level

Not all rejections have the same cause. The rejection layer that matters most shifts with context:

| Context | Most common rejection layer | Fix priority |
|---------|----------------------------|--------------|
| Tech roles (software, data) | Keyword filter — tool names missing | Add exact tools from posting to bullets |
| Healthcare | Hard filter — license/credential requirement | Verify you meet requirements before applying |
| Finance | Years-of-experience filter | Apply to roles within your tenure range |
| Entry-level (any field) | Human skim — no metrics or proof | Rewrite 3 bullets with scope + result |
| Career changers | Title + keyword mismatch | Bridge language in summary; highlight transferable tools |
| Senior roles (director+) | Scope gap — no team size, budget, P&L | Add leadership metrics to top 3 bullets |

## What recruiters actually say about resume rejection

Here is how the experience looks from the other side of the screen — based on common recruiter-shared patterns:

- **"I search for the job title first."** If your target title does not appear prominently in your resume, you may not surface in recruiter search at all — even if your experience matches.
- **"I spend about 6 seconds deciding if I'll read more."** The first bullet of your most recent role is the most important sentence on the page. If it describes a duty rather than an outcome, the read stops.
- **"I can tell when someone used a template."** Cookie-cutter language ("results-oriented professional seeking a challenging role") signals a generic application to every recruiter.
- **"I rarely see the files that don't match our ATS filter."** Hard filters — location, work authorization, required degree — remove candidates before any human review. No resume quality fixes a hard filter you do not meet.
- **"Metrics make it easy to rank candidates."** "Reduced cost by 23%" is concrete; "improved efficiency" is noise. Every claim without a number is a missed opportunity.

## The 3-minute diagnosis

Before rewriting everything, spend 3 minutes on this self-diagnosis:

1. **Copy-paste test** — Can you paste your PDF into Notepad and read it in logical order? If not: fix layout first.
2. **Title check** — Does your target job title (exact phrase from the posting) appear in your resume summary or most recent role? If not: add it.
3. **First bullet test** — Does the first bullet of your most recent role contain a number and a recognizable tool or domain term? If not: rewrite it.

These three checks cover the majority of ATS and recruiter-skim failures. Everything else is refinement.

[CTA]

## What rejection does NOT mean

- It does not mean you are unqualified — parse failures reject strong candidates constantly
- It does not mean you need to rewrite your entire resume history
- It does not mean the job market is impossible — it usually means one fixable layer failed
- It does not mean cover letters will fix it — if parse or keywords are the issue, a cover letter does not change those signals

Explore all optimization guides in the [Career Success Hub](/career-success-hub) and the [ATS Knowledge Center](/knowledge-center).
`,
};
