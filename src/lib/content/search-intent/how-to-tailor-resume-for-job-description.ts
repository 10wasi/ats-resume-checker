import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_HOW_TO_TAILOR_RESUME } from "@/lib/seo/ctr-metadata";

export const howToTailorResumeEntry: CareerLandingEntry = {
  id: "how-to-tailor-resume",
  path: "/how-to-tailor-resume-for-job-description",
  breadcrumbLabel: "Tailor for JD",
  ctr: CTR_HOW_TO_TAILOR_RESUME,
  faqItems: [
    {
      question: "How do I tailor my resume for a job description?",
      answer:
        "Extract must-have terms from the posting, map each to a real bullet in your recent experience, adjust headline/title alignment, and re-run match analysis before export.",
    },
    {
      question: "Do I need a new resume for every job?",
      answer:
        "Keep one master resume. Tailor keywords, headline, and top bullets per posting—10–15 minutes per serious application.",
    },
    {
      question: "What should I never change when tailoring?",
      answer:
        "Do not invent employers, degrees, or skills. Tailoring is emphasis and language—not fabrication.",
    },
    {
      question: "Is tailoring the same as keyword stuffing?",
      answer:
        "No. Stuffing hides keywords or lists skills without proof. Tailoring weaves honest terms into bullets recruiters read.",
    },
    {
      question: "Which tool shows tailoring progress?",
      answer:
        "Resume Match Analyzer shows match % and missing keywords before and after edits.",
    },
  ],
  body: `
**How to tailor resume for job description** without rewriting your career every night: use the posting as a **checklist**, not a script.

## Tailoring workflow (per application)

### Step 1 — Highlight the posting (5 min)

Mark repeated skills, tools, certifications, and title language. Use [ATS Keywords Finder](/ats-keywords-finder) to categorize terms.

### Step 2 — Baseline match (2 min)

Paste resume + JD into [Resume Match Analyzer](/resume-job-description-match). Save match % and missing list.

### Step 3 — Edit three zones (10 min)

1. **Headline / title line** — Mirror role language when truthful ("Product Manager" vs "Program Manager" only if accurate).
2. **Top 3 bullets** of most recent role — Add missing must-haves with metrics.
3. **Summary** (if used) — 2–4 priority terms from the JD.

### Step 4 — Verify (3 min)

Re-match. Export PDF. Upload **that PDF** to [ATS Resume Checker](/resume-checker).

## Example tailoring map

| JD term | Where to prove it |
|---------|-------------------|
| "Cross-functional" | Bullet: teams you partnered with |
| "Salesforce" | Bullet: CRM workflows you owned |
| "PMP" | Certifications line (if held) |

Role keyword lists: [Resume keywords database](/resume-keywords).

## Master resume + tailored variants

Keep one source file. For each application, duplicate, tailor, export, apply. Track which version went to which company.

## When tailoring is not enough

If honest match stays below 60%, the role may be a stretch—see [why resume gets rejected](/why-resume-gets-rejected) vs fit gaps.

## Connected guides

- [Resume keywords missing](/resume-keywords-missing)
- [Resume optimization](/resume-optimization)
- [Resume examples](/resume-examples) for bullet patterns

## Tailoring for different career situations

| Situation | Primary tailoring focus |
|-----------|------------------------|
| Career change | Bridge language (transferable skills named in the new role) |
| Promotion target | Scope and leadership signals in existing bullets |
| Industry switch | Domain vocabulary from the posting |
| Global/remote | Mirror the employer market spelling and tool names |
| Return after gap | Recency signals: freelance, volunteer, course completions |

## The 15-minute tailoring habit

1. Open the JD and your master resume side by side
2. Run match analysis (2 min) - note the score and top 5 gaps
3. Edit 3 bullets to include verified missing terms (7 min)
4. Adjust title/summary line if needed (3 min)
5. Export PDF and re-check score (3 min)

Track in a simple table: Role, Company, Version sent, Date, Response.

## What over-tailoring looks like

Mirror the employer vocabulary with your real evidence. Do not copy the JD verbatim, add tools you cannot explain, or change your title to one you never held. Tailoring is emphasis and language - not fabrication.
`,
};
