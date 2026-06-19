import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_RESUME_NOT_PASSING_ATS } from "@/lib/seo/ctr-metadata";

export const resumeNotPassingAtsEntry: CareerLandingEntry = {
  id: "resume-not-passing-ats",
  path: "/resume-not-passing-ats",
  breadcrumbLabel: "Not passing ATS",
  ctr: CTR_RESUME_NOT_PASSING_ATS,
  faqItems: [
    {
      question: "What does resume not passing ATS mean?",
      answer:
        "Usually the applicant tracking system cannot parse your file cleanly, or your resume lacks searchable proof for required terms—so you rank low or drop out before human review.",
    },
    {
      question: "How do I test if my resume passes ATS?",
      answer:
        "Upload your PDF to the free ATS Resume Checker. Review extracted text, format warnings, keyword coverage, and pass likelihood—not a guarantee, but a strong signal.",
    },
    {
      question: "Will a Word file pass ATS better than PDF?",
      answer:
        "Both can work. A clean single-column PDF often parses best. A broken PDF is worse than a clean DOCX—always re-upload after export.",
    },
    {
      question: "Do fancy templates fail ATS?",
      answer:
        "Often yes—columns, icons, text boxes, and graphics break extraction. Use simple layouts; see ATS resume templates guide for what parses.",
    },
    {
      question: "Can I pass ATS without keyword stuffing?",
      answer:
        "Yes. Place honest skills in experience bullets with context. Match tools show gaps; you add proof—not keyword lists.",
    },
  ],
  body: `
When people say **resume not passing ATS** or **resume not working ATS**, they usually mean one of three things: the file **does not parse**, the resume **ranks too low** on keywords, or a **hard filter** removed them. Each needs a different fix.

## Parse failure vs low score

| Signal | What happened | First fix |
|--------|---------------|-----------|
| Garbled text in checker | Layout broke extraction | Single column, standard headings |
| Clean text, low keyword % | Missing JD terms | [Tailor for job description](/how-to-tailor-resume-for-job-description) |
| Clean text, good score, no response | Human skim or fit | [Why no interviews](/why-resume-not-getting-interviews) |

## Real layout examples

**Fails parsing:** Two-column design, skills in sidebar only, contact info in header graphic.

**Passes parsing:** Name and email in body text, "Experience" heading, bullets under employer names, skills woven into bullets.

Compare layouts in [ATS resume examples](/ats-resume-examples) and [resume examples library](/resume-examples).

## 5-step pass checklist

1. **Export test** — Upload PDF to [ATS Resume Checker](/resume-checker). Read extracted text.
2. **Format** — Follow [ATS resume format](/ats-resume-format); remove tables and text boxes.
3. **Keywords** — Match a real posting in [Resume Match Analyzer](/resume-job-description-match).
4. **Missing terms** — Fix gaps via [resume keywords missing](/resume-keywords-missing) workflow.
5. **Final QA** — [ATS resume checklist](/ats-resume-checklist-2026) before submit.

## Pass likelihood (not magic)

Our checker shows an **ATS screening estimate** based on format, keywords, and match signals—with a clear disclaimer. Use it to prioritize fixes, not as interview prediction.

## Next reads

- [How to improve resume score](/how-to-improve-resume-score)
- [Resume screening explained](/resume-screening-explained)
- [Why resume gets rejected](/why-resume-gets-rejected)
`,
};
