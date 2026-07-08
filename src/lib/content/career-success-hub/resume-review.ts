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
A strong **resume review online** targets the two layers every application must pass: machine readability and human appeal. Most candidates focus only on one. Run this review alongside the [free ATS resume checker](/resume-checker) and [AI resume review](/ai-resume-review) to address both in a single session.

## What a resume review actually covers

A resume review is a structured pass through your resume to assess:

- **Content quality** — Do your bullets prove value, or just describe duties?
- **ATS compatibility** — Does your layout, format, and keyword coverage survive automated screening?
- **Recruiter readability** — Can a recruiter extract your key qualifications in 6–10 seconds?
- **Role alignment** — Does each application version match the specific posting's language?

A review is not a full rewrite. It is a diagnostic pass that finds the highest-priority fixes.

## The 10-minute resume review rubric

Work through each item top to bottom. Mark each section: Pass, Fix, or Rewrite.

**Section 1 — Professional summary**
- Does it name your role, years of experience, and a top domain?
- Does it mention 2–3 specific tools or skills relevant to the target role?
- Is it under 3 sentences? (Longer summaries are skimmed past.)

**Section 2 — Most recent role bullets**
- Do at least 3 of 5 bullets contain a number or scope indicator?
- Do bullets start with action verbs (Built, Led, Reduced, Increased)?
- Do any bullets use "Responsible for" language? Replace all of them.

**Section 3 — Keyword alignment**
- Paste the job description into the [Resume Match Analyzer](/resume-job-description-match).
- Are your top 5 missing keywords genuinely in your experience?
- Add them to bullets where honest — not to a standalone keyword list.

**Section 4 — Format and parse safety**
- Is the layout single-column? (Two-column layouts scramble ATS parse order.)
- Is contact information in the document body, not in a header region?
- Are there any text boxes, tables used for layout, or embedded icons?
- Run the [ATS Resume Checker](/resume-checker) and confirm extracted text reads in correct order.

**Section 5 — Consistency and polish**
- Are all dates in Month YYYY format? (Inconsistent formats trigger parse flags.)
- Is your current role in present tense, past roles in past tense?
- Are tool and platform names spelled correctly? (JavaScript not Javascript; Salesforce not salesforce.)

## Before vs after: resume review in practice

**Before review — Marketing Manager**

Summary: "Results-oriented marketing professional with over 8 years of experience in digital and traditional channels."

Top bullet: "Responsible for managing social media and content creation across platforms."

Issues: Generic summary with no tools or metrics; duty-description bullet; no platforms named.

**After review — same candidate**

Summary: "Marketing Manager with 8 years in B2C digital. Led HubSpot CRM migration and grew email list from 12K to 47K subscribers in 14 months."

Top bullet: "Managed Meta Ads and Google Ads campaigns with combined $800K annual budget; reduced CPL 34% through audience segmentation and creative A/B testing."

ATS score improvement: 54 → 81. Interview callbacks: 1 in 6 weeks → 4 in 3 weeks.

## Resume review vs resume optimization

| Aspect | Resume review | Resume optimization |
|--------|---------------|---------------------|
| Primary goal | Content quality and clarity | ATS parse rate and match score |
| Key activity | Section-by-section rubric pass | Checker run, keyword gap analysis, format fixes |
| Who does it | Self-review or peer review | ATS tools + structured workflow |
| Output | Stronger bullets, cleaner prose | Higher score, more interview calls |
| Time required | 15–30 minutes | 60–120 minutes first time |

These are complementary, not competing. Review first for content quality, then [optimize for ATS](/resume-optimization) using the checker and match tools.

## Recruiter perspective: what gets past the 6-second skim

When a recruiter opens your file after ATS screening, they typically:

1. Check if your current title broadly matches the role
2. Read your most recent company and employment duration
3. Scan the first bullet of your most recent role for recognizable impact
4. Look for a skills or tools section to confirm technical fit

If those four scans don't confirm fit, they move on. Your review should optimize for those four moments before anything else.

## Common review mistakes by role level

**Entry-level candidates**
- Over-relying on GPA and coursework instead of project outcomes and transferable skills
- Not including internship or freelance work that demonstrates real-world tools
- Generic objective statements that add no signal (remove and replace with a 2-line summary)

**Mid-career professionals**
- Including pre-2015 roles in full detail — compress or remove roles beyond 10–12 years
- Using the same resume for every application without keyword tailoring
- Weak or absent metrics in bullet points

**Senior/executive candidates**
- Not using the professional summary to articulate scope (team size, budget, P&L)
- Too many bullet points per role — senior resumes should have 3–4 focused bullets showing strategic impact
- Missing board, advisory, or speaking profile if relevant for C-suite roles

## Resume review checklist — final pass

Before submitting, confirm:

- [ ] Summary names role, domain, years, and 2 specific tools
- [ ] All bullets start with action verbs
- [ ] At least 60% of bullets contain a metric or scope indicator
- [ ] Layout is single-column; no text boxes or decorative icons
- [ ] Contact info is in the document body
- [ ] Dates are consistent (Month YYYY throughout)
- [ ] ATS checker score is above 70%
- [ ] Match score vs target posting is above 65%
- [ ] PDF exports with selectable text

## Role-specific examples

Compare your draft against proven ATS-friendly layouts in the [Resume Examples Library](/resume-examples) — software engineer, data analyst, product manager, marketing manager, and more. Each example includes industry keywords, common mistakes, and annotated bullet patterns.
`,
};
