import type { CareerLandingEntry } from "@/lib/content/career-success-hub/types";
import { RESUME_REJECTED_BY_ATS_EXTRA } from "@/lib/content/money-pages/money-page-expansions";
import { CTR_RESUME_REJECTED_BY_ATS } from "@/lib/seo/ctr-metadata";

export const resumeRejectedByAtsEntry: CareerLandingEntry = {
  id: "resume-rejected-by-ats",
  path: "/resume-rejected-by-ats",
  breadcrumbLabel: "Resume rejected by ATS",
  ctr: CTR_RESUME_REJECTED_BY_ATS,
  faqItems: [
    {
      question: "How do I know if my resume was rejected by ATS?",
      answer:
        "Instant silence after apply often means parse failure or keyword filters. Upload the same PDF to the free ATS resume checker—if extracted text is garbled or your score is low, ATS likely never ranked you fairly.",
    },
    {
      question: "Can a qualified candidate be rejected by ATS?",
      answer:
        "Yes. Strong experience in a broken layout or without searchable keywords looks like a weak profile to software—even when a human would hire you.",
    },
    {
      question: "Does ATS rejection mean I should rewrite everything?",
      answer:
        "No. Fix format first, then add 5–8 posting terms into recent bullets where you have proof. Most rejections are layout or keyword gaps—not your entire career story.",
    },
    {
      question: "Is resume rejected by ATS the same as recruiter rejection?",
      answer:
        "Not always. ATS filters before humans in many companies. Recruiter rejection happens after skim. Diagnose which layer failed before editing.",
    },
    {
      question: "What is the fastest fix after ATS rejection?",
      answer:
        "Single-column export, standard headings, and matching must-have terms from the job post in experience bullets—then re-run the free checker.",
    },
  ],
  body: `
**Resume rejected by ATS** feels personal—but most rejections are mechanical. Hiring software parses your file, scores keywords, and applies filters **before** a recruiter reads your name. When that layer fails, you get silence, not feedback.

## What "rejected by ATS" actually means

| What you experience | What likely happened |
|---------------------|----------------------|
| Apply → no response in 48 hours | Parser garbled text or hard filter removed you |
| Works on some sites, not others | Portal-specific format rules or required fields |
| Rejections only on senior roles | Title / years-of-experience filter |
| Good score locally, bad on upload | Export broke between Word and PDF |

This is different from a recruiter reading and passing. See [resume screening explained](/resume-screening-explained) for the full stack.

## Real examples: rejected vs passed

**Rejected (parse failure):** Two-column Canva resume. Skills live in a sidebar graphic. Checker shows missing employers and scrambled dates.

**Rejected (keyword gap):** Clean layout but posting requires "Salesforce," "SQL," "forecasting"—none appear in plain-text bullets.

**Passed (same candidate, fixed):** Single column, "Experience" heading, bullets include posting language with metrics. Match score rises; callbacks follow.

Compare layouts in [ATS resume examples](/ats-resume-examples).

## Common mistakes that trigger ATS rejection

1. **Tables and text boxes** — Contact info trapped in header/footer
2. **Keyword stuffing footers** — Invisible or unreadable skill dumps
3. **Wrong file type** — Image PDF from a phone photo
4. **Title mismatch** — Applying as "PM" when posting says "Product Manager"
5. **Missing must-haves** — Degree, certification, or years filter you cannot override

Full list: [common ATS resume rejection reasons](/common-ats-resume-rejection-reasons).

## Fix workflow (30 minutes)

1. **Diagnose** — [Free ATS resume checker](/resume-checker) on the exact file you submit
2. **Format** — [ATS resume format](/ats-resume-format) single-column pass
3. **Keywords** — [Resume match tool](/resume-job-description-match) vs the posting
4. **Review** — [Resume review online](/resume-review) rubric for human skim
5. **QA** — [ATS resume checklist](/ats-resume-checklist-2026) before next batch

## Related guides

- [Free resume checker online](/free-resume-checker-online) — Score + review hub
- [Free ATS score checker](/free-ats-score-checker) — Quick compatibility check
- [Resume score checker](/resume-score-checker) — Interpret your ATS %
- [Why resume gets rejected](/why-resume-gets-rejected) — full rejection stack
- [Resume not passing ATS](/resume-not-passing-ats) — parse vs score diagnosis
- [Complete ATS optimization guide](/complete-guide-ats-resume-optimization) — master reference

## How to interpret "no response" vs "quick rejection"

The timing and method of non-response gives diagnostic clues:

| Signal | Likely cause | What to check |
|--------|-------------|---------------|
| No response within 48 hours of apply | Hard filter or immediate parse failure | ATS Resume Checker — extract text and format flags |
| Auto-rejection email within minutes | Required field filter (degree, visa, years) | Re-read job requirements — hard filter you cannot override |
| Response from some companies, silence from others | Format-specific parse issue | Try DOCX vs PDF — some portals handle one better |
| Phone screens for junior roles, silence for senior | Scope gap in bullets | Add team size, budget, and ownership language |
| Good response rate in past, drops after resume update | New template broke parsing | Run new version through checker immediately |

## Before vs after: same candidate, ATS rejection to phone screen

Here is a real example of the same work history producing different outcomes through layout and language changes alone:

**Before (4 weeks of silence):**
- Two-column Canva template
- Contact info in header graphic
- Skills in icon sidebar (not extractable)
- Bullets: "Responsible for managing vendor relationships"
- ATS score: 44 — multiple format flags

**After (3 phone screens in 10 days):**
- Single-column Google Docs export
- Name, email, phone in document body
- Skills listed in plain-text Skills section
- Bullet: "Negotiated 6 vendor contracts reducing SaaS spend $180K annually; managed 3 agency relationships across 4 markets"
- ATS score: 76 — no critical flags

The candidate's experience did not change. The file changed. The [ATS Resume Checker](/resume-checker) revealed the parse failures in under 2 minutes on the original file.

## What actually triggers the ATS "reject" flag vs low rank

ATS systems typically do two things: apply hard filters and rank survivors. Understanding which one you are hitting changes your fix:

**Hard filter rejection** (binary — cannot be fixed by resume quality):
- Required degree or credential you do not have
- Required work authorization you cannot claim
- Required location you are not in or willing to relocate to
- Required minimum years of experience you are significantly under

**Rank-based exclusion** (fixable):
- Parse failure means your content never gets indexed properly
- Missing must-have keywords means you rank below other candidates
- Generic bullets mean you rank below candidates with more specific proof
- Low match score means you appear further down the recruiter's sorted list

If you are hitting hard filters — stop applying to that role and find better-fit postings. If you are losing on rank — fix parse first, then keywords, then bullets. The [ATS Resume Checker](/resume-checker) diagnoses the rank-based issues directly.

## Checklist: confirm you are not hitting hard filters first

Before spending time on resume optimization, confirm:

- [ ] You meet the minimum years of experience listed (or are within 1–2 years)
- [ ] You have the required degree or certification if listed as "required" (not "preferred")
- [ ] You are authorized to work in the listed location
- [ ] You meet any explicit technical requirement listed as "must have"

If any of these fail, no resume fix helps. Redirect your application energy to roles where you clear every hard filter first.

Explore all guides in the [Career Success Hub](/career-success-hub) and the [ATS Knowledge Center](/knowledge-center).
${RESUME_REJECTED_BY_ATS_EXTRA}
`,
};
