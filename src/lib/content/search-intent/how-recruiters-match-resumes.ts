import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_HOW_RECRUITERS_MATCH } from "@/lib/seo/ctr-metadata";
import { JD_MATCH_SUPPORT_APPENDIX } from "./jd-match-support-appendix";

export const howRecruitersMatchResumesEntry: CareerLandingEntry = {
  id: "how-recruiters-match-resumes",
  path: "/how-recruiters-match-resumes",
  breadcrumbLabel: "Recruiter matching",
  ctr: CTR_HOW_RECRUITERS_MATCH,
  faqItems: [
    {
      question: "How do recruiters match resumes to job descriptions?",
      answer:
        "Recruiters search applicant tracking systems by title, skills, and keywords, then skim survivors for proof—metrics, recent role fit, and clear layout. Software ranking and human review both depend on parseable text.",
    },
    {
      question: "Do recruiters read every resume?",
      answer:
        "Rarely for high-volume roles. ATS filters and keyword search narrow the pool; recruiters often spend seconds on page one of each survivor.",
    },
    {
      question: "What do recruiters search for in ATS?",
      answer:
        "Exact or close variants of job title, must-have tools, certifications, location, and years of experience—depending on how the req was configured.",
    },
    {
      question: "How is recruiter matching different from ATS score?",
      answer:
        "ATS score on ResumeIQ estimates parse health and general compatibility. Recruiter matching for a specific req is closer to job description match %—posting-specific overlap.",
    },
    {
      question: "Can I optimize for recruiters without keyword stuffing?",
      answer:
        "Yes. Mirror posting language in bullets where you have real outcomes. Recruiters reward proof, not synonym lists.",
    },
  ],
  body: `
**How recruiters match resumes** to openings: a mix of **software search**, **ranking**, and a **6-second human skim**—not a single mystery score.

## The matching pipeline (recruiter view)

| Stage | Who | What they match on |
|-------|-----|-------------------|
| 1. Parse | ATS | Can text be extracted? |
| 2. Index | ATS | Skills, titles, employers indexed |
| 3. Search | Recruiter / ATS | Keywords from the req |
| 4. Rank | ATS rules | Match %, filters, knockouts |
| 5. Skim | Recruiter | Title, company, metrics on page 1 |
| 6. Deep read | Recruiter | Fit narrative, red flags |

Full screening map: [Resume screening explained](/resume-screening-explained).

## What recruiters search in ATS (examples)

For a **Senior Accountant** req, recruiters often search:

- CPA or CPA-eligible
- GAAP, month-end close
- NetSuite or SAP
- 5+ years (filter)

If your resume says "handled finances" without **GAAP** or **close** in searchable text, you may never appear in results—even if qualified.

Test searchability: [ATS Resume Checker](/resume-checker) parser preview.

## Recruiter skim vs job description match

**Job description match** on ResumeIQ approximates stage 3–4: posting terms found vs missing.

**Recruiter skim** favors:

- Role title aligned to the posting
- One metric per recent bullet
- Tools named in the first half of page one

Simulate both: [Job Description Match](/resume-job-description-match) then ask a colleague to read only your first 1/3 page for 10 seconds.

## Worked example: two candidates, same job

| Signal | Candidate A | Candidate B |
|--------|-------------|-------------|
| Layout | Two-column Canva | Single-column Word |
| Match % vs JD | 72% | 71% |
| Parser | Scrambled experience order | Clean |
| Recruiter outcome | Often filtered out | Shortlist |

Match % alone did not decide—**parse order** eliminated Candidate A. Fix format first: [ATS resume format](/ats-resume-format).

## How to align with recruiter matching (checklist)

1. **Parse test** — copy-paste from PDF; logical order?
2. **Match test** — paste JD; note missing must-haves
3. **Title line** — mirrors posting when truthful
4. **Top bullets** — tools + metrics from the req
5. **Re-match** — export the same file you will upload

Tailoring guide: [How to tailor resume for job description](/how-to-tailor-resume-for-job-description).

## When good candidates still do not match

See [Why ATS rejects good resumes](/why-ats-rejects-good-resumes) — filters, title rules, and domain gaps beyond keywords.

${JD_MATCH_SUPPORT_APPENDIX}
`,
};
