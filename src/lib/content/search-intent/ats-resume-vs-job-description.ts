import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { CTR_ATS_RESUME_VS_JD } from "@/lib/seo/ctr-metadata";
import { JD_MATCH_SUPPORT_APPENDIX } from "./jd-match-support-appendix";

export const atsResumeVsJobDescriptionEntry: CareerLandingEntry = {
  id: "ats-resume-vs-job-description",
  path: "/ats-resume-vs-job-description",
  breadcrumbLabel: "Resume vs JD",
  ctr: CTR_ATS_RESUME_VS_JD,
  faqItems: [
    {
      question: "What is the difference between an ATS resume check and job description match?",
      answer:
        "An ATS resume check scores parse health, structure, and general keyword proof on your master file. Job description match compares that same resume to one posting and returns overlap %, missing terms, and skill gaps for that role only.",
    },
    {
      question: "Should I run ATS check or JD match first?",
      answer:
        "Run the ATS check first. If parsers scramble your layout, keyword edits for a posting will not help. Fix format, then run job description match on the clean export.",
    },
    {
      question: "Can the same resume have a high ATS score but low match score?",
      answer:
        "Yes. A well-formatted resume can score 80+ globally yet match 55% for a specialized posting if must-have tools or domain terms are missing from recent bullets.",
    },
    {
      question: "How often should I compare my resume to a job description?",
      answer:
        "Run match analysis for every priority application—not a generic batch send. Re-match after you edit headline, summary, or top bullets.",
    },
    {
      question: "Is job description matching the same as keyword stuffing?",
      answer:
        "No. Matching maps honest experience to posting language. Stuffing lists skills without proof or copies the JD verbatim—recruiters reject both.",
    },
  ],
  body: `
**ATS resume vs job description** is not one test—it is two layers hiring software runs before a recruiter reads your file.

## What each layer measures

| Layer | Question it answers | Tool on ResumeIQ |
|-------|---------------------|------------------|
| **ATS resume check** | Does software read my file cleanly? | [ATS Resume Checker](/resume-checker) |
| **Job description match** | Does my language overlap this posting? | [Job Description Match](/resume-job-description-match) |

Think of ATS check as **infrastructure** and JD match as **translation** for one role.

## Worked example: same file, two scores

**Maria, data analyst** uploads a single-column PDF:

- **ATS score: 84** — clean parse, standard headings, metrics in bullets
- **Match vs fintech posting: 58%** — missing Snowflake, regulatory reporting, stakeholder management in experience
- **Match vs healthcare posting: 79%** — Epic, cohort analysis, and SQL already in bullets

Maria did not need a new resume—she needed **posting-specific tailoring** after confirming parse health.

## Step-by-step workflow

### Step 1 — Baseline ATS check (2 min)

Upload the exact PDF you will submit. Fix any parser flags before touching keywords. See [resume parser test](/resume-parser).

### Step 2 — Paste the job description (1 min)

Use the full responsibilities + requirements block in [Job Description Match](/resume-job-description-match).

### Step 3 — Read match % and gaps (3 min)

Note missing technical skills, tools, certifications, and section feedback. Prioritize must-haves repeated in the posting.

### Step 4 — Edit three zones (10 min)

1. Headline / title line aligned to the posting
2. Top 2–3 bullets in your latest role
3. Skills order or summary line

Guide: [How to tailor resume for job description](/how-to-tailor-resume-for-job-description).

### Step 5 — Re-match and export (3 min)

Target higher honest overlap. Export PDF. Re-upload to the checker—not the in-app draft.

## When ATS pass still loses the role

Qualified candidates fail when:

- **Hard filters** — years of experience, clearance, location
- **Title mismatch** — posting says "Senior PM," resume says "Coordinator" with no bridge language
- **Domain gap** — honest match below 60% for a stretch role

See [why ATS rejects good resumes](/why-ats-rejects-good-resumes) for the full list.

## Comparison pages & examples

- [ResumeIQ vs Jobscan](/resumeiq-vs-jobscan) — match-focused tools compared
- [Resume examples by role](/resume-examples) — bullet patterns that parse
- [Resume match score explained](/resume-match-score) — what % bands mean

${JD_MATCH_SUPPORT_APPENDIX}
`,
};
