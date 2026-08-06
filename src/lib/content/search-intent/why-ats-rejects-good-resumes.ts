import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_WHY_ATS_REJECTS_GOOD } from "@/lib/seo/ctr-metadata";
import { JD_MATCH_SUPPORT_APPENDIX } from "./jd-match-support-appendix";

export const whyAtsRejectsGoodResumesEntry: CareerLandingEntry = {
  id: "why-ats-rejects-good-resumes",
  path: "/why-ats-rejects-good-resumes",
  breadcrumbLabel: "Good candidates rejected",
  ctr: CTR_WHY_ATS_REJECTS_GOOD,
  faqItems: [
    {
      question: "Why does ATS reject qualified candidates?",
      answer:
        "Often parse failure, hard filters (years, location, clearance), title mismatch, or missing searchable keywords—not lack of ability. The resume file failed visibility, not the person.",
    },
    {
      question: "Can ATS reject you even with a strong match score?",
      answer:
        "Yes. Knockout questions, visa status, salary band, or experience minimums can filter before match % matters. Match score helps tailoring; it does not override every employer rule.",
    },
    {
      question: "How do I know if I was rejected by ATS or a recruiter?",
      answer:
        "Instant silence after apply often means parse or filter failure. A rejection after weeks may be human fit. Run parser and match tests on the file you submitted to rule out technical rejection.",
    },
    {
      question: "Is a two-column resume why good resumes fail?",
      answer:
        "Frequently. Design templates scramble order so experience and skills never index. Single-column exports fix a large share of silent rejections.",
    },
    {
      question: "What should I fix first if I am qualified but not hearing back?",
      answer:
        "Parser health, then job-description match on your top posting, then bullet proof. See ATS resume vs job description for the ordered workflow.",
    },
  ],
  body: `
**Why ATS rejects good resumes** is usually a **visibility** problem: hiring software never surfaces your proof—not a judgment that you cannot do the job.

## Top reasons qualified files fail (ranked)

| Reason | What happens | Fix |
|--------|--------------|-----|
| **Parse failure** | Text order scrambled; skills skipped | Single-column export; [parser test](/resume-parser) |
| **Hard filters** | Years, location, clearance knockouts | Apply when honest fit; do not fabricate |
| **Title mismatch** | Req says "Engineer III," resume says "Developer" | Align headline when accurate |
| **Keyword gap** | Must-haves not in searchable bullets | [Job Description Match](/resume-job-description-match) |
| **Buried proof** | Metrics on page 2; generic summary | Strengthen page-one bullets |
| **Wrong file** | Scanned PDF, image-only export | DOCX or selectable PDF |

Related: [Why resume gets rejected](/why-resume-gets-rejected) · [Common ATS rejection reasons](/common-ats-resume-rejection-reasons).

## Example: qualified nurse, silent rejection

**Profile:** 6 years med-surg, strong outcomes, applied to ICU posting.

| Issue | Detail |
|-------|--------|
| File | Canva two-column; license in sidebar graphic |
| Parser | Epic and ACLS not in body text |
| Match | 52% — missing ventilator, ICU ratios in bullets |
| Outcome | Filtered before nurse manager review |

**Fix path:** Word export → license + Epic in bullets → tailor 3 bullets to ICU posting → re-match → 78%.

Example format: [Nurse resume example](/resume-examples/nurse).

## Good resume vs visible resume

| You have | ATS may see |
|----------|-------------|
| 5 years Python | Blank if in icon sidebar |
| PMP certification | Missing if only in header image |
| $2M quota attainment | Lost if PDF is scan-only |

Run the [ATS Resume Checker](/resume-checker) on the **exact upload**—not a screen capture.

## Diagnostic workflow (20 minutes)

1. **Parser** — Does extracted text match what you read?
2. **Match** — Paste target JD; list top 5 gaps
3. **Format** — [ATS resume mistakes](/ats-resume-mistakes)
4. **Tailor** — [How to tailor for job description](/how-to-tailor-resume-for-job-description)
5. **Re-check** — Same PDF you will submit

## When rejection is not fixable by resume alone

- Req filled internally
- Visa / work authorization filters
- Mass apply to stretch roles (match consistently below 55%)

Match score helps you **prioritize** applications—not guarantee every req.

Compare tools: [ResumeIQ vs Jobscan](/resumeiq-vs-jobscan) · [Career Success Hub](/career-success-hub).

${JD_MATCH_SUPPORT_APPENDIX}
`,
};
