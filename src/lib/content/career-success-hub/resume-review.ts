import type { CareerLandingEntry } from "./types";
import { CTR_RESUME_REVIEW } from "@/lib/seo/ctr-metadata";

export const resumeReviewEntry: CareerLandingEntry = {
  id: "resume-review",
  path: "/resume-review",
  breadcrumbLabel: "Resume review",
  ctr: CTR_RESUME_REVIEW,
  faqItems: [
    {
      question: "What is the difference between a resume review and an ATS check?",
      answer:
        "A resume review covers content quality, clarity, and impact. An ATS check tests parsing, keyword coverage, and format compatibility. Use both before you apply—the ATS Resume Checker covers technical signals; this guide covers human readability.",
    },
    {
      question: "How long should a resume review take?",
      answer:
        "A focused 15-minute review catches most fatal issues: weak bullets, missing metrics, layout risks, and keyword gaps. Run the checker first, then work through the rubric below.",
    },
    {
      question: "Should I pay for a professional resume review?",
      answer:
        "Paid reviews help for career pivots or executive roles. For most applicants, a structured self-review plus our free ATS Resume Checker and Resume Match Analyzer delivers 80% of the value at no cost.",
    },
    {
      question: "What do recruiters look at first on a resume?",
      answer:
        "Title alignment, recent role relevance, quantified outcomes, and skim-friendly structure. If ATS filters you out first, humans never see those strengths—fix parsing and keywords before polishing prose.",
    },
    {
      question: "How often should I review my resume?",
      answer:
        "Before every application batch and after any major role change. Re-run the Resume Match Analyzer when targeting a new job family or industry.",
    },
  ],
  body: `
A strong **resume review** is not about rewriting everything—it is about catching what makes recruiters pass in under ten seconds. Pair this guide with our [ATS Resume Checker](/resume-checker) so you review both **human appeal** and **machine readability**.

## The 10-minute resume review rubric

Work top to bottom. Score each section pass / fix / rewrite.

1. **Headline & title** — Does your headline match the role you are applying for? Avoid clever titles parsers cannot map.
2. **First 3 bullets** — Do they show scope, action, and a number? If not, rewrite before anything else.
3. **Keyword alignment** — Paste the job post into the [Resume Match Analyzer](/resume-job-description-match). Missing high-priority terms belong in recent experience—not a keyword footer.
4. **Format sanity** — Single column, standard headings, no text boxes. See the [ATS Resume Formatting Guide](/ats-resume-format).
5. **Contact block** — Email, phone, city, LinkedIn URL in plain text—not icons only.
6. **Length & focus** — Last 10–12 years detailed; older roles compressed or removed.
7. **Typos & consistency** — Date format, tense (present for current role), and tool name spelling (e.g. JavaScript not Javascript).
8. **Export test** — Save PDF, re-upload to the checker. Garbled text means the layout breaks ATS.

## Resume review vs resume optimization

| Step | Resume review | Resume optimization |
|------|---------------|---------------------|
| Goal | Clarity & impact | ATS visibility & match score |
| Tools | Rubric + human read | Checker, keywords, format guides |
| Output | Stronger bullets | Higher parse rate & keyword coverage |

After review, follow the [resume optimization workflow](/resume-optimization) to systematically raise your score.

## Common resume review mistakes

- **Vanity metrics** — "Improved efficiency" without a baseline. Replace with time saved, revenue, or error reduction.
- **Duty lists** — "Responsible for…" bullets. Lead with verbs and outcomes.
- **Design over parse** — Infographics score well on Pinterest, not in Workday. Use the [ATS Resume Checklist](/ats-resume-checklist-2026) before upload.
- **One resume for every job** — Keep a master file; tailor keywords per posting using the [ATS Keywords Finder](/ats-keywords-finder).

## Role-specific examples

Compare your draft to proven layouts in the [Resume Examples Library](/resume-examples)—software engineer, data analyst, product manager, marketing, and more. Each example includes industry keywords and mistake callouts.

## Your next step

Run the [ATS Resume Checker](/resume-checker) free. You get a score, keyword gaps, format flags, and an improvement plan—then use this rubric to polish what humans read.
`,
};
