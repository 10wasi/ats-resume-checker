export const METHODOLOGY_PATH = "/methodology" as const;

export const methodologyBody = `
ResumeIQ scoring is designed to mirror **what applicant tracking systems and recruiters actually search for**—not to predict interviews or offers. Our methodology is transparent, repeatable, and built for **global job applications** (North America, Europe, Asia-Pacific, Middle East, Africa, and remote hiring worldwide).

## What ATS systems check

Most hiring platforms—Workday, Greenhouse, Lever, Taleo, SAP SuccessFactors, and regional equivalents—follow similar patterns:

1. **Parse** — Extract text from PDF or Word. Broken layouts lose data.
2. **Index** — Store skills, titles, employers, dates as searchable fields.
3. **Rank / filter** — Match resume language to job posting requirements.
4. **Human skim** — Recruiters review survivors in seconds.

ResumeIQ focuses on steps 1–3 because that is where most silent rejections happen.

## How our ATS score is calculated

The **ATS compatibility score** combines:

| Signal | Weight | What it measures |
|--------|--------|------------------|
| Layout & parse health | High | Single-column text, standard headings, extractable contact |
| Keyword proof | High | Skills and tools in experience bullets—not dumps only |
| Readability | Medium | Bullet structure, length, scan-friendly sections |
| Format flags | Penalty | Tables, columns, risky export patterns |

Scores are **0–100**. They reflect file health and keyword coverage on your master resume—not a single job posting.

## Resume match score (job-specific)

When you attach a job description, **match score** measures overlap between posting terms and your resume text. This is always posting-specific—the same file can score 80% for one role and 55% for another.

Match uses: hard skills, tools, certifications, role language, and seniority signals repeated in the JD.

## ATS pass likelihood estimate

After analysis, we show an **ATS screening estimate**—a weighted blend of ATS score, readability, keyword coverage, match (if provided), format flags, and QA checks.

**Important:** This estimates automated screening signals only. It does not predict interviews, offers, or human bias.

## How to improve your results

1. Fix **format** until extracted text reads cleanly in the checker.
2. **Tailor** keywords per posting using the Resume Match Analyzer.
3. Add **metrics** to bullets—globally, recruiters skim for outcomes.
4. Re-export and re-upload the **exact PDF** you will submit.

## Regional notes (global, not US-only)

- **CV vs resume:** Label matters less than parseable structure.
- **Spelling:** Match your target employer's market—stay consistent throughout the document.
- **Photos:** Optional in some regions; keep a text-only version for online portals.
- **Length:** 1–2 pages is common globally for experienced professionals; early-career may use one page.

## Editorial standards

Guides in our Knowledge Center and Career Hub are written for **job seekers everywhere**—with examples, FAQs, and links to free tools. We avoid country-specific resume myths when parser rules are universal.

## Try the methodology yourself

Run the [ATS Resume Checker](/resume-checker) on your file, then read [ATS score explained](/ats-score-explained) and [resume screening explained](/resume-screening-explained) for context.
`;
