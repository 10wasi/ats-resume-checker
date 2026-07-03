import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_RESUME_SCREENING_EXPLAINED } from "@/lib/seo/ctr-metadata";

export const resumeScreeningExplainedEntry: CareerLandingEntry = {
  id: "resume-screening-explained",
  path: "/resume-screening-explained",
  breadcrumbLabel: "Screening explained",
  ctr: CTR_RESUME_SCREENING_EXPLAINED,
  faqItems: [
    {
      question: "What is resume screening?",
      answer:
        "The process of filtering applications before interviews—often automated parsing and keyword rules first, then recruiter or hiring manager review of survivors.",
    },
    {
      question: "Who screens resumes first—ATS or humans?",
      answer:
        "In most mid-size and enterprise hiring, software parses and ranks first. Recruiters often work from filtered lists—not every uploaded file.",
    },
    {
      question: "How long does resume screening take?",
      answer:
        "Automated passes can be seconds. Recruiter skim is often 6–10 seconds per resume when reviewing a shortlist.",
    },
    {
      question: "Can I beat resume screening without lying?",
      answer:
        "Yes—clean format, honest keyword alignment, and quantified bullets raise your odds in both automated and human stages.",
    },
    {
      question: "What tools mirror screening signals?",
      answer:
        "ATS Resume Checker for parse and keyword signals; Resume Match Analyzer for posting-specific overlap; pass likelihood is an estimate, not a guarantee.",
    },
  ],
  body: `
**Resume screening explained** in plain language: your application moves through **filters** before anyone decides to interview you. Understanding the stages stops you from optimizing the wrong layer.

## The screening pipeline

1. **Apply** — You submit resume + form  
2. **Parse** — Software extracts text (format fixes matter here)  
3. **Keyword / rules rank** — Tailor for each job description  
4. **Recruiter skim** — 6–10 seconds on survivors (bullet proof matters)  
5. **Hiring manager** — Depth and fit  
6. **Interview** — Human decision

Many job seekers only optimize step 5 while failing steps 2–4 silently.

## Automated vs human screening

| Stage | What they look for | Your lever |
|-------|-------------------|------------|
| Parser | Can text be extracted? | [ATS format](/ats-resume-format) |
| Keyword rank | Do terms match the JD? | [Keywords missing](/resume-keywords-missing) |
| Recruiter skim | Clarity, title fit, metrics | [Resume review](/resume-review) |
| Manager | Depth, career story | Bullets + examples |

## Real screening scenario

**Posting:** Senior data analyst, SQL + Python required, stakeholder communication emphasized.

**Screening outcome A:** Resume parses; SQL/Python in skills only → low rank → never opened.

**Screening outcome B:** SQL/Python in bullets with dashboard outcomes → recruiter opens → phone screen.

Same qualifications. Different **searchable proof**.

## Action steps for job seekers

1. Test parse: [ATS Resume Checker](/resume-checker)
2. Test fit per job: [Resume Match Tool](/resume-job-description-match)
3. Learn rejection mechanics: [Why resume gets rejected](/why-resume-gets-rejected)
4. Fix interview drought: [Why no interviews](/why-resume-not-getting-interviews)
5. Improve scores systematically: [How to improve resume score](/how-to-improve-resume-score)

## Screening is not the whole hiring process

Even perfect screening survival does not guarantee offers—interviews, compensation, and team fit still matter. Screening optimization removes **avoidable** early exits.

## What ATS vendors actually do

The most common enterprise ATS platforms—Workday, Greenhouse, Lever, iCIMS, Taleo—share similar mechanics:

1. **Ingestion** — Resume file uploaded via portal
2. **Parse** — Structured data extracted (name, dates, employers, skills, education)
3. **Index** — Terms stored in a searchable database
4. **Filter** — Recruiter applies rules (required keywords, years, location)
5. **Rank** — Candidates sorted by match signal score

ATS systems do not "read" resumes the way a person does. They match query terms to indexed fields. That is why spelling an employer's required tool exactly as they wrote it matters.

## Six seconds: what recruiters actually scan

Research into recruiter eye-tracking shows attention goes to:
- Candidate name and current title — 2 seconds
- Current and previous employers + dates — 2 seconds
- First bullet of most recent role — 1 second
- Education — 1 second

If your title does not align and your first bullet does not show a clear win, recruiters move on. Screening optimization has two jobs: survive the software, then stop the skim.

## The hidden screening stage: application form filters

Many rejections happen before any human or ATS reads your resume file. Application form hard filters include:

- Authorized to work in [country]?
- Years of experience in [skill]?
- Required degree (yes/no)?
- Willing to relocate?

If you answer disqualifying responses, your resume is filtered out regardless of quality. Always read requirements carefully before applying.

## Improving screening survival — role-by-role

| Role type | Primary screening gap | Fix |
|-----------|-----------------------|-----|
| Tech roles | Missing stack terms from JD | [ATS keywords finder](/ats-keywords-finder) per posting |
| Finance/compliance | Certification abbreviations | Spell credentials fully in Skills section |
| Healthcare | License + EHR system names | Echo posting's exact tool names |
| Entry-level | Vague bullets, no metrics | [Achievement generator](/resume-achievement-generator) |
| Senior/director | Missing scope signals | Add team size, budget, or P&L responsibility |

## Related resources

- [Resume match score explained](/resume-match-score)
- [Resume optimization guide](/resume-optimization)
- [ATS resume mistakes](/ats-resume-mistakes)
- [Career Success Hub](/career-success-hub)
`,
};
