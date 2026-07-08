import type { CareerLandingEntry } from "./types";
import { CTR_ATS_GUIDE_LANDING } from "@/lib/seo/ctr-metadata";

export const ATS_GUIDE_PATH = "/ats-guide" as const;

export const atsGuideEntry: CareerLandingEntry = {
  id: "ats-guide",
  path: ATS_GUIDE_PATH,
  breadcrumbLabel: "ATS guide hub",
  ctr: CTR_ATS_GUIDE_LANDING,
  faqItems: [
    {
      question: "What is ATS resume optimization?",
      answer:
        "ATS resume optimization means formatting and wording your resume so applicant tracking systems can parse it, index skills, and match you to job requirements—without hiding proof from recruiters.",
    },
    {
      question: "Where should I start?",
      answer:
        "Run the ATS Resume Checker for a baseline score, read How ATS Works, then use the Resume Match Analyzer for each target posting.",
    },
    {
      question: "Are these guides free?",
      answer:
        "Yes. Guides, checklists, and core tools are free. Each guide links back to the checker so you can verify changes on your own file.",
    },
    {
      question: "Do guides work for CVs and international applications?",
      answer:
        "Yes. Parser rules are similar globally. Match employer spelling and section norms for your target market—structure and plain text matter most.",
    },
  ],
  body: `
The **ATS Guide Hub** is your structured map for **ATS resume optimization**—the process of formatting, wording, and tailoring your resume so applicant tracking systems parse it correctly, index your skills, and surface you to recruiters. This hub connects pillar guides, tools, and original examples for job seekers applying worldwide.

## What is ATS resume optimization — and why does it matter?

An **applicant tracking system (ATS)** is software used by over 98% of Fortune 500 companies and the majority of mid-size employers to receive, parse, and rank incoming applications. Your resume reaches the ATS before any human sees it.

ATS optimization means addressing three distinct layers:

1. **Parse quality** — Can the software extract your name, title, dates, and employer correctly from your file?
2. **Keyword ranking** — Does your resume contain the specific tools, skills, and role terms the recruiter's search expects?
3. **Match alignment** — Does your profile align closely enough with each posting to survive recruiter filters?

Candidates who skip ATS optimization often have strong credentials but score below 50% on keyword match and fail parsing tests — not because their experience is weak, but because their file structure and language mismatch what software expects.

## How long does ATS optimization take?

A realistic breakdown for a first optimization pass:

| Task | Time |
|------|------|
| ATS resume checker baseline run | 5 minutes |
| Format fixes (layout, export, contact block) | 20–45 minutes |
| Keyword tailoring per job post | 15–20 minutes |
| Bullet upgrades with metrics | 30–60 minutes |
| Pre-submit QA + second checker run | 10 minutes |

Total first pass: **90–140 minutes**. Per-application maintenance after that: **15–20 minutes**.

## The optimization learning path

Work through these resources in order. Each one addresses a distinct layer of the ATS process.

### Step 1 — Understand the system

Before changing your resume, understand how ATS works in practice. Many optimization myths (write white keywords, hit 100% match, use tables for skimmability) come from misunderstanding what ATS software actually does.

Read [How ATS Works](/how-ats-works) — the five-layer process from upload to recruiter screen, including how different vendors behave differently.

### Step 2 — Get your baseline score

Run the [ATS Resume Checker](/resume-checker) on your current file before making any changes. Note:
- Overall ATS score and what it measures
- Format warnings (layout, headers, text boxes, export quality)
- Keyword gaps vs. your most recent target posting
- Section completeness flags

Read [ATS Score Explained](/ats-score-explained) to interpret your result correctly — a 68% score means something specific and actionable, not a vague failure.

### Step 3 — Fix format first

**Format issues cause parse failures that no amount of keywords can fix.** If your text extraction shows scrambled content, stop and fix the layout first.

The [ATS Resume Format guide](/ats-resume-format) covers: column layouts, header/footer text, font embedding in PDFs, table misuse, text boxes, and the copy-paste test that confirms your file is parse-safe.

### Step 4 — Optimize keywords ethically

Keyword optimization means weaving job-specific language into your experience bullets — not padding a skills section or hiding invisible text. Read the [ATS Resume Keywords guide](/ats-resume-keywords) for placement rules and the difference between hard skills, soft skills, and tool mentions.

Use the [ATS Keywords Finder](/ats-keywords-finder) to extract terms from a specific posting and identify your gaps.

### Step 5 — Tailor per posting

A master resume that scores 72% across all applications is outperformed by a tailored resume that scores 85% on one role. Use the [Resume Match Analyzer](/resume-job-description-match) to see your overlap with each posting and prioritize the gaps worth addressing.

### Step 6 — Pre-submit checklist

Before every application, run through the [ATS Resume Checklist](/ats-resume-checklist-2026). It covers: export format, contact block, date consistency, keyword placement, and file naming.

## ATS resume optimization by job category

Different fields have different keyword density and format expectations:

- **Technology roles** — Tool names (Python, Docker, Kubernetes) carry disproportionate weight. Use exact vendor spellings.
- **Finance roles** — Certifications (CPA, CFA, Series 7) and regulatory terms matter. Include them verbatim.
- **Healthcare** — Licensure, credential codes, and compliance terms (HIPAA, EMR system names) are hard filters.
- **Marketing** — Platform names (HubSpot, Salesforce, Meta Ads) and campaign metrics.
- **Operations/management** — Process methodologies (Lean, Six Sigma, Agile) and scope indicators (team size, budget, regions).

For role-specific keyword lists and example bullets, see [Resume Keywords by Industry](/resume-keywords-by-industry).

## Common ATS optimization misconceptions

| Claim | Reality |
|-------|---------|
| "Use white text keywords" | Triggers spam filters in modern ATS. Immediate disqualification risk. |
| "Chase 100% match score" | 70–85% on a real posting beats a fabricated 98%. Fabricated experience fails at interview. |
| "ATS systems are all the same" | Workday, Greenhouse, Lever, iCIMS have different parsing behavior. |
| "A great design beats a plain layout" | No. ATS reads text, not visual hierarchy. Clean single-column files parse best. |
| "One resume works for all applications" | It does not. Keyword requirements differ significantly by role, level, and sector. |

## Pillar guides

- [ATS Knowledge Center](/knowledge-center) — Sixteen comprehensive guides
- [Ultimate ATS Resume Guide](/ultimate-ats-resume-guide) — End-to-end optimization path
- [ATS Resume Format](/ats-resume-format) — Layouts that parse cleanly
- [ATS Resume Keywords](/ats-resume-keywords) — Ethical keyword placement
- [ATS Score Explained](/ats-score-explained) — Interpret your score correctly
- [ATS Resume Checklist](/ats-resume-checklist-2026) — Pre-submit quality assurance
- [ATS-Friendly Resume Guide](/ats-friendly-resume-guide) — Complete format walkthrough

## Tools in every workflow

Every guide links to the [ATS Resume Checker](/resume-checker), [Resume Match Analyzer](/resume-match-analyzer), [ATS Keywords Finder](/ats-keywords-finder), and [Resume Examples Library](/resume-examples) — so you read, fix, and re-test in one connected loop.
`,
};
