export const METHODOLOGY_PATH = "/methodology" as const;

export const methodologyBody = `
ResumeIQ scoring is designed to mirror **what applicant tracking systems and recruiters actually search for**—not to predict interviews or offers. Our methodology is transparent, repeatable, and built for **global job applications** across regions, remote hiring, and international employer portals.

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

### Skills sub-score

We detect tools, technologies, and competencies mentioned in your text. Skills listed only in graphics or sidebars may score lower if parsers cannot read them.

### Keyword sub-score

With a job description, we compare posting terms to your bullets and skills sections. Ethical placement in experience lines scores higher than invisible stuffing.

## Resume match score (job-specific)

When you attach a job description, **match score** measures overlap between posting terms and your resume text. This is always posting-specific—the same file can score 80% for one role and 55% for another.

Match uses: hard skills, tools, certifications, role language, and seniority signals repeated in the JD.

## ATS pass likelihood estimate

After analysis, we show an **ATS screening estimate**—a weighted blend of ATS score, readability, keyword coverage, match (if provided), format flags, and QA checks.

**Important:** This estimates automated screening signals only. It does not predict interviews, offers, or human bias.

## How we test parsing (our process)

We do not guess how a resume will parse—we build our checks against observable parser behavior. Our testing process:

1. **Text-extraction baseline.** Every uploaded file is run through text extraction first. If the raw text stream is out of order or missing sections, we flag format before scoring keywords—because that is exactly what a real ATS import would surface.
2. **Layout stress tests.** We validate detectors against known failure patterns: two-column layouts, header/footer contact blocks, text boxes, image-based logos, and custom bullet glyphs. These are the layouts that historically scramble on import.
3. **Keyword placement checks.** We compare terms found in a Skills list against terms proven in Experience bullets, because a skill that only appears in a dump carries less weight with recruiters and some filters.
4. **Regression on real resumes.** When we adjust a detector, we re-run it against a set of previously analyzed resumes to confirm scores move for the right reasons and do not swing arbitrarily.

## What we can and cannot detect

Being honest about limits is part of the methodology:

| We can detect | We cannot detect |
|---------------|------------------|
| Whether text extracts in a logical order | Which specific ATS an employer uses |
| Missing/late contact information | A recruiter's personal preferences |
| Keyword coverage vs a pasted job description | Internal referrals or unposted shortlists |
| Common format flags (columns, boxes, images) | Whether you meet undisclosed hard requirements |
| Readability and bullet-proof density | Culture fit or interview performance |

If a claim requires knowing an employer's private configuration, we do not make it. We report signals you can act on.

## Editorial and review process

- **Written for job seekers, not for keyword density.** Every guide answers a real question with examples and a next step.
- **Reviewed for accuracy.** We correct guidance when parser behavior or hiring norms change, and we show a last-updated signal on guides.
- **No fabricated statistics.** We avoid citing rejection percentages that cannot be verified. Where we give benchmarks, we label them as practical ranges, not official thresholds.
- **Corrections welcome.** Found something inaccurate? Tell us via [contact](/contact); standards live in our [editorial policy](/editorial-policy).

## How resume scoring differs from competitors

Many tools hide keyword lists or match scores behind subscriptions. ResumeIQ publishes this methodology and keeps core scoring free so you can verify changes on your own file.

## How to improve your results

1. Fix **format** until extracted text reads cleanly in the [resume checker](/resume-checker).
2. **Tailor** keywords per posting using the [Resume Match Analyzer](/resume-match-analyzer).
3. Add **metrics** to bullets—recruiters globally skim for outcomes.
4. Re-export and re-upload the **exact PDF** you will submit.
5. Read [how to improve resume score](/how-to-improve-resume-score) for a structured plan.

## Global resume notes

- **CV vs resume:** Label matters less than parseable structure.
- **Spelling:** Match your target employer's market—stay consistent throughout the document.
- **Photos:** Optional in some markets; keep a text-only version for online portals.
- **Length:** 1–2 pages is common for experienced professionals; early-career may use one page.
- **Remote roles:** Same parser rules apply—keywords and clarity still drive visibility.

## Privacy and data security

Trust in a scoring tool depends on how it treats your file:

- Your resume is processed to generate your score and recommendations—not sold to recruiters or listed in a candidate marketplace.
- Keep your authoritative copy in your own storage; export before major edits.
- Do not upload confidential documents you are not permitted to share.

Full details are in our [privacy policy](/privacy). For how the analysis pipeline handles your file end to end, see [how resume analysis works](/how-resume-analysis-works).

## Editorial standards

Guides in our Knowledge Center and Career Hub are written for **job seekers everywhere**—with examples, FAQs, and links to free tools. We focus on universal parser rules rather than country-specific myths.

## Related resources

- [How ATS works](/how-ats-works) — Parser and filter overview  
- [Resume score checker](/resume-score-checker) — What your % means  
- [ATS score explained](/ats-score-explained) — Score semantics  
- [Resume screening explained](/resume-screening-explained) — Full hiring stack  
- [Free resume checker online](/free-resume-checker-online) — Apply the methodology  

Run the [ATS Resume Checker](/resume-checker) on your file to see these signals on your own resume.
`;
