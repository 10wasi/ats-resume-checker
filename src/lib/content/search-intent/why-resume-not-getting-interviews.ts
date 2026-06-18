import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_WHY_NOT_GETTING_INTERVIEWS } from "@/lib/seo/ctr-metadata";

export const whyResumeNotGettingInterviewsEntry: CareerLandingEntry = {
  id: "why-not-getting-interviews",
  path: "/why-resume-not-getting-interviews",
  breadcrumbLabel: "Why no interviews",
  ctr: CTR_WHY_NOT_GETTING_INTERVIEWS,
  faqItems: [
    {
      question: "Why am I not getting interviews even with experience?",
      answer:
        "Often the resume never reaches a human—parsing breaks, keywords miss the posting, or bullets lack proof. Run the ATS Resume Checker and Resume Match Analyzer before assuming it is only competition.",
    },
    {
      question: "How many applications before I should change strategy?",
      answer:
        "If 30+ tailored applications produce zero screens, audit format and match score—not just volume. Fix mechanical rejection first, then adjust targeting.",
    },
    {
      question: "Does a low ATS score mean no interviews?",
      answer:
        "A low score signals parse or keyword risk. Many qualified people lose screens because recruiters never see their file. Improving score and match is faster than rewriting your entire career story.",
    },
    {
      question: "Should I rewrite my whole resume?",
      answer:
        "Start with the top 3 missing keywords and 3 weakest bullets from checker results. Full rewrites are rarely needed unless you are changing fields.",
    },
    {
      question: "What free tools diagnose interview drought?",
      answer:
        "ATS Resume Checker for format and score, Resume Match Analyzer per posting, and the guides on rejection reasons and screening on ResumeIQ.",
    },
  ],
  body: `
You applied to dozens of roles. You meet the requirements. Still no interviews. Before you blame the market, check whether your resume is **failing screening**—most job seekers never see that layer.

## Real example: same candidate, two outcomes

| Version | What changed | Result |
|---------|--------------|--------|
| **A** | Generic PDF, two-column Canva layout, duty bullets | 0 callbacks in 8 weeks |
| **B** | Single column, 4 missing JD terms in bullets, one metric per role | 3 screens in 2 weeks |

The skills did not change—**visibility** did. That is why we built a free [ATS Resume Checker](/resume-checker) workflow.

## 6 reasons your resume is not getting interviews

1. **Screening never sees you** — Broken PDF text, tables, or headers hide your experience. See [resume not passing ATS](/resume-not-passing-ats).
2. **Wrong keywords for the posting** — Your resume is strong but speaks a different language than the job ad. Use [resume keywords missing](/resume-keywords-missing) fixes.
3. **Weak first screen** — Recruiters skim 6–10 seconds. Vague bullets lose to quantified peers. Compare [resume examples](/resume-examples).
4. **Title mismatch** — "Business analyst" on the resume vs "Data analyst" on the posting without a bridge term.
5. **Applying too broadly** — Low match scores across unrelated posts. Learn [how to tailor resume for job description](/how-to-tailor-resume-for-job-description).
6. **Human factors** — Salary band, location, or true fit gaps. Tools cannot fix fit—but they separate **fixable** vs **targeting** problems.

## Action plan (tonight)

1. Upload your resume to the [ATS Resume Checker](/resume-checker). Fix format flags first.
2. Paste your top target job into the [Resume Match Analyzer](/resume-job-description-match). Note match % and missing terms.
3. Add 3–5 honest keywords into recent bullets—not a skills dump.
4. Re-export PDF and re-run the checker on the **exact file** you will submit.
5. Read [why resume gets rejected](/why-resume-gets-rejected) if score is fine but silence continues.

## When it is not your resume

If match score is above 75%, format is clean, and bullets show metrics, shift focus: networking, referrals, and role fit. Our [resume screening explained](/resume-screening-explained) guide shows where humans enter the process.

## Related guides

- [Resume mistakes that cost interviews](/resume-mistakes-that-cost-interviews)
- [How to improve resume score](/how-to-improve-resume-score)
- [Resume optimization workflow](/resume-optimization)
`,
};
