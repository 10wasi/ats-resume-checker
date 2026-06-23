import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Appended long-form sections for money pages (~700+ words each). */

export const FREE_RESUME_CHECKER_ONLINE_EXTRA = `
## Who should use a free resume checker online

Anyone who applies through employer portals, job boards, or ATS-backed career sites benefits from a pre-submit scan. The checker is especially valuable when:

- You redesigned your resume in Canva, Figma, or a template site
- You are applying to competitive roles with hundreds of applicants per posting
- You changed jobs recently and need to validate a new export
- You apply internationally or for remote roles with automated screening

## Deep dive: what hiring software extracts

ATS parsers attempt to map your document into fields: name, contact, employers, titles, dates, education, skills. When extraction fails:

- Recruiter searches for "Python" never find you—even if the word appears visually
- Years-of-experience filters miscount your tenure
- Skills sections in sidebars or icons may be ignored entirely

The free resume checker online shows **extracted text** beside your score so you can verify field mapping before submission.

## Resume checker online vs desktop Word check

Saving in Word and uploading PDF can change layout. Headers, footers, and table-based contact blocks often break between export steps. Rule: always run the checker on the **exact binary file** attached to the application—not the editable draft.

## Comparison: free resume checker online options

| Approach | Limitation | ResumeIQ |
|----------|------------|----------|
| Manual proofreading | Misses parser behavior | Shows extracted text |
| Paywalled scanners | Hidden keyword lists | Free gaps + checklist |
| Generic resume tips | Not file-specific | Scores your actual PDF |
| One-time career coach | Expensive per session | Re-check unlimited |

## Interview outcomes: what improves after fixing score

Candidates who fix parse issues and keyword gaps typically report:

- Faster responses from applications (not guaranteed, but common)
- Higher match scores when tailoring per posting
- Confidence that silence is not always "unqualified"—sometimes fixable format

Pair score improvements with [resume match tool](/resume-match-analyzer) tailoring for each role.

## Step-by-step: weekly optimization routine

**Monday:** Export master resume PDF → run [free resume checker](${RESUME_CHECKER_PATH}) → note format flags  
**Tuesday:** Fix layout using [ATS resume format](/ats-resume-format) rules → re-check  
**Wednesday:** Pick 3 target postings → extract keywords with [ATS keywords finder](/ats-keywords-finder)  
**Thursday:** Tailor bullets → run match analysis per posting  
**Friday:** [ATS checklist](/ats-resume-checklist-2026) → apply batch → track callbacks

## Common mistakes with free online resume checkers

1. **Checking the wrong file** — Word draft vs submitted PDF  
2. **Ignoring extracted text** — score looks OK but order is scrambled  
3. **Chasing 100** — diminishing returns after format + top keywords fixed  
4. **Skipping match** — high baseline, low role overlap  
5. **Keyword stuffing** — footer dumps that humans and some ATS penalize

## Resume rejected? Start here

If applications go silent, read [resume rejected by ATS](/resume-rejected-by-ats) then return to this checker with the same PDF you submitted.

## Tool ecosystem links

- [ATS resume checker](/ats-resume-checker) — Full ATS workflow guide  
- [Resume score checker](/resume-score-checker) — Interpret your %  
- [Free ATS score checker](/free-ats-score-checker) — Quick compatibility check  
- [Resume examples](/resume-examples) — Layout benchmarks  
- [Resume keywords database](/resume-keywords) — Role-specific terms  
- [How ATS scoring works](/methodology) — Transparent methodology  
`;

export const FREE_ATS_SCORE_CHECKER_EXTRA = `
## Who needs a free ATS score checker

| Situation | Why score first |
|-----------|-----------------|
| First job search | Learn baseline before tailoring |
| Template change | Verify export did not break parse |
| Mass applying | Catch broken PDF before 50 uploads |
| Career pivot | Test new keyword set for target role |
| Post-rejection | Diagnose if ATS layer failed |

## How ATS score is calculated (summary)

ResumeIQ blends parse health, keyword proof in bullets, readability, and format penalties. Scores are **directional**—they prioritize fixes, not predict interviews. Full detail: [methodology](/methodology).

## Score interpretation workshop

Work through these questions after each scan:

1. Does extracted text show employers in correct order?  
2. Are must-have tools from the posting in experience bullets?  
3. Are format flags zero or explained (e.g., minor table)?  
4. If JD attached: is match above 65% for roles you qualify for?  
5. Did score change after re-export? If not, edits may be cosmetic.

## Example: engineer score journey

**Week 1:** Score 54 — two-column template, skills in graphic sidebar  
**Week 1 fix:** Single column → score 71  
**Week 2:** Added Kubernetes, Terraform, CI/CD from target postings → score 79  
**Week 2 match:** 68% for platform engineer JD → added two bullets with posting terms → match 76%  
**Outcome:** Callback rate improved—not from score alone, but from readable + aligned file

## Free ATS score checker vs paid alternatives

Many paid tools show a teaser score then hide keyword lists. ResumeIQ shows:

- Full missing keyword list (with JD)  
- Format flag explanations  
- Quick-fix checklist  
- Skills and summary feedback  
- Unlimited re-checks

## Integrate score checker into apply workflow

Before every application batch:

1. [Free ATS score checker](${RESUME_CHECKER_PATH}) on master PDF  
2. [Resume match tool](/resume-match-analyzer) for each priority posting  
3. [Resume keywords database](/resume-keywords) for role-specific terms  
4. [Resume examples](/resume-examples) to benchmark bullet style  
5. Re-score after edits

## When score is high but callbacks are low

- Match may be low for roles you want—tailor per posting  
- Human skim issues—run [resume review](/resume-review)  
- Role mismatch—score cannot fix experience gaps  
- Market timing—score helps visibility, not demand

## Related guides

- [Free resume checker online](/free-resume-checker-online)  
- [Resume score checker](/resume-score-checker)  
- [ATS resume checker](/ats-resume-checker)  
- [How to improve resume score](/how-to-improve-resume-score)  
- [Resume rejected by ATS](/resume-rejected-by-ats)  
`;

export const RESUME_SCORE_CHECKER_EXTRA = `
## Resume score checker for every career stage

**Students:** Learn if your first resume parses—often more valuable than generic campus advice.  
**Mid-career:** Catch template drift after years on outdated layouts.  
**Senior leaders:** Ensure two-page executive resumes still extract titles and scope correctly.  
**Career changers:** Validate new keyword emphasis before pivot applications.

## Component scores explained

Beyond the headline ATS %, ResumeIQ surfaces:

- **Skills signal** — tools and competencies detected in text  
- **Keyword match** — overlap with job description when provided  
- **Readability** — bullet structure and scan patterns  
- **Format flags** — layout risks that reduce parse quality

Use component signals to decide whether to fix layout or copy first.

## Resume score vs interview rate

A higher score increases **visibility** in automated screening—it does not guarantee interviews. Interviews require fit, timing, and human judgment. Treat the resume score checker as a **visibility tool**, not an outcome predictor.

## Tailoring workflow with score tracking

Keep a simple log:

| Date | File version | ATS score | Match (role) | Notes |
|------|--------------|-----------|--------------|-------|
| Jun 1 | v3.pdf | 72 | — | Fixed columns |
| Jun 3 | v3.pdf | 72 | 58% PM role | Missing Agile terms |
| Jun 4 | v4.pdf | 74 | 71% PM role | Added sprint bullets |

Tracking proves which edits move numbers—avoid random rewrites.

## Keywords that move resume score fastest

Terms repeated in job posts for your target role—when truthfully present in your work:

- Core tools (SQL, Salesforce, Figma, etc.)  
- Methodologies (Agile, Six Sigma, ITIL)  
- Domain phrases (B2B SaaS, supply chain, clinical trials)  
- Seniority signals (lead, principal, cross-functional)

Source lists from [resume keywords database](/resume-keywords) and [ATS keywords finder](/ats-keywords-finder).

## Format fixes that raise score without rewriting history

- Move contact info into document body  
- Replace creative section titles with Experience, Education, Skills  
- Remove text boxes and floating graphics  
- Use standard fonts at 10.5–12 pt  
- Export PDF with selectable text

Details: [ATS resume format](/ats-resume-format).

## Connect score checker to rejection diagnosis

Low score + silence → likely ATS layer. High score + silence → match or human skim. Use [resume rejected by ATS](/resume-rejected-by-ats) and [resume screening explained](/resume-screening-explained) to pick the right fix path.

## Tool links

- [Free resume checker online](/free-resume-checker-online)  
- [Free ATS score checker](/free-ats-score-checker)  
- [ATS resume checker](/ats-resume-checker)  
- [Resume match tool](/resume-match-analyzer)  
- [Complete optimization guide](/complete-guide-ats-resume-optimization)  
`;

export const RESUME_REJECTED_BY_ATS_EXTRA = `
## The rejection timeline most candidates never see

| Stage | What happens | Your signal |
|-------|--------------|-------------|
| Upload | Portal receives file | Confirmation email |
| Parse | ATS extracts text | You see nothing |
| Index | Profile stored searchable | You see nothing |
| Filter | Keywords, years, degree rules | Silence |
| Recruiter skim | 6-second human review | Interview or pass |
| Interview | Human conversation | Callback |

**Resume rejected by ATS** usually means failure at parse, index, or filter—not always at recruiter skim.

## Industry examples of ATS rejection

**Healthcare:** Missing license keywords or degree filters—even with experience.  
**Technology:** Tools in sidebar graphics not indexed; "Engineer" vs "Software Engineer" title mismatch.  
**Finance:** Compliance terms absent from bullets; CFA/CPA in skills box not parsed.  
**Marketing:** Portfolio links without plain-text channel terms (SEO, PPC, GA4) in experience.

Browse [resume keywords](/resume-keywords) by role to spot common must-haves.

## Recovery plan: 7 days after ATS rejection

**Day 1:** Upload same PDF to [free resume checker](${RESUME_CHECKER_PATH}) — read extracted text  
**Day 2:** Fix layout per [ATS resume format](/ats-resume-format) — re-score  
**Day 3:** Pick 3 target jobs — run [resume match tool](/resume-match-analyzer)  
**Day 4:** Add keywords to bullets with proof — re-match  
**Day 5:** [Resume review](/resume-review) rubric for human skim  
**Day 6:** [ATS checklist](/ats-resume-checklist-2026) on final export  
**Day 7:** Apply new batch — track responses vs old file

## Myths about ATS rejection

| Myth | Reality |
|------|---------|
| "ATS rejects 75% automatically" | Varies by company; many use light filters |
| "White font keywords work" | Risky—many systems strip hidden text |
| "Creative resumes always fail" | Clean creative can work if text extracts |
| "One perfect resume for all jobs" | Tailoring match matters per posting |
| "ATS is only in big companies" | SMBs and boards use similar tools |

## When rejection is not ATS

Sometimes silence is recruiter volume, internal hire, or role cancellation. ATS diagnosis helps when:

- Same resume works on some portals but not others  
- Score is low with clear format flags  
- Match is low for roles you qualify for  
- Extracted text is garbled

## Build a rejection-proof routine

1. Never apply without checker on exact PDF  
2. Tailor top 3 bullets per posting  
3. Keep master + tailored versions labeled clearly  
4. Re-check after every template vendor update  
5. Log score/match per application for learning

## Connected resources

- [Common ATS rejection reasons](/common-ats-resume-rejection-reasons)  
- [Resume not passing ATS](/resume-not-passing-ats)  
- [Why resume gets rejected](/why-resume-gets-rejected)  
- [Free resume checker online](/free-resume-checker-online)  
- [Resume score checker](/resume-score-checker)  
- [How to improve resume score](/how-to-improve-resume-score)  
`;
