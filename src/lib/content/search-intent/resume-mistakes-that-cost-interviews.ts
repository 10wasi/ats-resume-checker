import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_RESUME_MISTAKES_INTERVIEWS } from "@/lib/seo/ctr-metadata";

export const resumeMistakesCostInterviewsEntry: CareerLandingEntry = {
  id: "resume-mistakes-interviews",
  path: "/resume-mistakes-that-cost-interviews",
  breadcrumbLabel: "Costly mistakes",
  ctr: CTR_RESUME_MISTAKES_INTERVIEWS,
  faqItems: [
    {
      question: "What resume mistakes cost interviews?",
      answer:
        "Unparseable layout, vague bullets, missing metrics, wrong file type, typos in contact info, and keyword dumps without proof—each can end your application before a conversation.",
    },
    {
      question: "Are resume mistakes different from ATS mistakes?",
      answer:
        "Overlap heavily. ATS mistakes block parsing; human mistakes lose the skim even when parsing works. Fix technical issues first, then clarity and proof.",
    },
    {
      question: "Which mistake is most common?",
      answer:
        "Duty-only bullets without outcomes—recruiters cannot tell impact in six seconds.",
    },
    {
      question: "Can one typo cost an interview?",
      answer:
        "In competitive pools, yes—especially in headline, company names, or contact details. It signals carelessness.",
    },
    {
      question: "How do I audit mistakes quickly?",
      answer:
        "Run the ATS Resume Checker for format/keywords, then use our mistakes checklist and resume review rubric.",
    },
  ],
  body: `
Some **resume mistakes that cost interviews** are obvious typos. Others are silent—your resume looks fine to you but fails parsers or recruiter skim patterns.

## Top 10 interview-costing mistakes

1. **Two-column or infographic layout** — Text extraction fails → [not passing ATS](/resume-not-passing-ats)
2. **"Responsible for…" bullets** — No outcomes; swap for action + metric
3. **Missing contact in plain text** — Icons-only email/phone
4. **Keyword footer** — 30 skills, zero proof in experience
5. **Wrong file** — Corrupt PDF, .pages export, password-protected
6. **Title drift** — Resume says "Consultant," posting says "Implementation Manager"
7. **Wall of text** — No white space; recruiters skip
8. **Typos in tools** — "Java script," "Power point" break search
9. **No numbers** — Peers with metrics win the skim
10. **One generic resume** — Low match on every tailored role

Technical deep dive: [ATS resume mistakes](/ats-resume-mistakes).

## Before / after bullet examples

| Mistake | Fix |
|---------|-----|
| "Managed social media" | "Grew Instagram 12% MoM via A/B content tests (Hootsuite)" |
| "Used Excel" | "Built Excel models tracking $2.1M pipeline for 8 account execs" |
| "Team player" | Cut—replace with collaboration proof in a bullet |

More patterns: [resume examples](/resume-examples).

## Action checklist

1. [ATS Resume Checker](/resume-checker) — format + keywords
2. [Resume Match Analyzer](/resume-job-description-match) — per posting
3. [ATS resume checklist](/ats-resume-checklist-2026) — pre-submit
4. [Free resume review](/resume-review) rubric — human read
5. [Why resume gets rejected](/why-resume-gets-rejected) — filter stack

## Prevention habit

Tailor each serious application: [how to tailor resume](/how-to-tailor-resume-for-job-description). Track which version you sent.

## Hiring manager perspective: what actually kills applications

Recruiters and hiring managers who review large volumes of applications cite the same patterns repeatedly:

- **Generic summary** - Same opening paragraph for every role signals no research
- **No numbers anywhere** - Duties without outcomes make comparison impossible
- **Skills section mismatch** - 25 skills listed, none mentioned in experience bullets
- **Date gaps with no explanation** - Leave gaps unexplained and they become questions
- **Wrong level of detail** - Senior candidates describing tasks; junior candidates omitting depth

Fixing these does not require inventing experience. It requires reframing real work with context, scale, and outcome.

## Before / after: rewriting a duty into an achievement

\BEFORE: Coordinated with stakeholders on project timelines.

AFTER: Aligned 6 stakeholders across 3 departments on a
       12-week ERP go-live; delivered on schedule with zero
       post-launch critical defects.
\
The after version names: what (stakeholder alignment), scope (6 people, 3 departments), timeline (12 weeks), and result (on-schedule, zero defects). ATS indexes ERP. Recruiters remember the number.

## ATS mistakes vs human-readable mistakes

| Mistake type | Detected by | Fix |
|-------------|------------|-----|
| Two-column layout | ATS parser | Single column export |
| Missing JD keywords | ATS keyword rank | [Keywords finder](/ats-keywords-finder) |
| Duty-only bullets | Recruiter skim | Achievement rewrites |
| Wrong file format | Portal upload | Re-export as PDF |
| Generic summary | Hiring manager | Role-specific 2-sentence opener |

Some mistakes block software. Others pass software but lose humans. You need to survive both.
`,
};
