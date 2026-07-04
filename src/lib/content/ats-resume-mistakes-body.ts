export const ATS_RESUME_MISTAKES_PATH = "/ats-resume-mistakes" as const;

export const atsResumeMistakesSeo = {
  title: "ATS Resume Mistakes — Fix Before You Apply",
  description:
    "ATS resume mistakes that block resume optimization: columns, headers, keyword dumps. Fix fast, then run the free ATS Resume Checker.",
} as const;

export const atsResumeMistakesBody = `
You are qualified. You know you are qualified. And yet the portal eats your application and weeks pass with no word.

Often the culprit is not your experience—it is **ATS resume mistakes** that prevent software (and busy recruiters) from seeing it clearly.

Fix the mechanical errors first with the [ATS Resume Checklist](/ats-resume-checklist-2026), then run the [ATS Resume Checker](/resume-checker) on the file you actually upload.

## Mistake 1: Fancy templates that break parsing

Two columns, skill meters, icons, and floating text boxes look modern. Many parsers flatten them into nonsense—dates beside wrong jobs, skills listed before your name.

**Fix:** Switch to a single-column **ATS friendly resume**. See [ATS Resume Formatting Guide](/ats-resume-format) and [ATS Resume Templates Guide](/ats-resume-templates).

## Mistake 2: Contact info trapped in the header

Some systems ignore header/footer regions. Your phone number literally does not import.

**Fix:** Repeat email and phone in the document body under your name.

## Mistake 3: Non-standard section headings

"Proud Moments" does not map to Experience. Creative labels become unsearchable paragraphs.

**Fix:** Use Experience, Education, Skills—boring and effective.

## Mistake 4: Keyword stuffing without proof

Forty skills, zero bullets. Recruiters smell it; some filters downrank it.

**Fix:** Place **ATS resume keywords** in bullets where you used them. Guide: [ATS Resume Keywords](/ats-resume-keywords).

## Mistake 5: One generic resume for every job

ATS and recruiters both reward relevance. Spray-and-pray files miss posting-specific terms.

**Fix:** One strong base resume + tailored summary and 3–5 bullet tweaks per role. Use the [Resume Match Analyzer](/resume-job-description-match).

## Mistake 6: Wrong file type or corrupted export

Design-tool PDFs, scanned images, or password-protected files fail before scoring starts.

**Fix:** Export from Word/Google Docs. Run copy-paste test. Upload the same binary you tested.

## Mistake 7: Ignoring the match score

You checked format once in 2023. The job post changed; your file did not.

**Fix:** Match each priority application. Read [ATS Score Explained](/ats-score-explained) to interpret results.

## Mistake 8: Burying the role you want

A recruiter hunting "Senior Data Analyst" should see that title and domain in the first third of page one—not buried on page two under unrelated admin work.

**Fix:** Reorder bullets; tighten older roles; align summary with target title.

## Mistake 9: Typos in critical keywords

"JavaScript" vs "Javascript," "PostgreSQL" vs "Postgres"—mismatches matter when the posting is exact.

**Fix:** Mirror posting language when accurate. Industry reference: [Resume Keywords by Industry](/resume-keywords-by-industry).

## Mistake 10: Skipping the final QA pass

You edited at midnight and shipped a draft with a wrong company name.

**Fix:** Checklist + checker + human read-aloud. Ten minutes saves ten silent rejections.

## Before vs after: the same bullet, fixed

The most common candidate mistake is describing duties instead of proving impact. Here is what a recruiter and a keyword filter each gain from the rewrite:

\`\`\`
BEFORE
• Responsible for managing social media accounts and content.

AFTER
• Grew Instagram following 8K→46K in 11 months; drove 3,200
  site sessions/month via a content calendar and UTM tracking.
\`\`\`

The "after" version adds searchable tools (UTM), a metric (46K, 3,200), and a timeframe—signals both software and humans reward. Notice it is not longer keyword-stuffing; it is the same duty with proof attached.

Second example, engineering:

\`\`\`
BEFORE
• Worked on backend systems and fixed bugs.

AFTER
• Cut checkout API errors 62% by adding retry logic and
  Redis caching to a Node.js service handling 40K req/day.
\`\`\`

## Candidate mistakes vs recruiter reality

It helps to see how each mistake lands on the other side of the screen:

| What the candidate does | What the recruiter/ATS experiences |
|-------------------------|-------------------------------------|
| Uploads a two-column PDF | Search misses skills trapped in the sidebar |
| Lists 30 skills, no bullets | Reads it as padding; trusts the file less |
| Uses "Growth Ninja" as a title | Cannot match the search for "Marketing Manager" |
| Same resume for 40 jobs | Ranks below tailored candidates on every one |
| Buries the target title on page 2 | Skims 6 seconds, sees unrelated work, moves on |
| No metrics anywhere | Cannot tell a top performer from an average one |

## Insights from the hiring side

A few things recruiters rarely say out loud but that change how you should write:

- **Search comes before reading.** Many recruiters never open resumes that do not surface in a keyword search. Your best bullet is worthless if the term never appears as plain text.
- **Six seconds is real.** The first scan checks title match, current/last employer, and one or two metrics. Front-load them.
- **Consistency signals care.** Mixed date formats, two spellings of the same tool, or a stray old company name read as carelessness.
- **Recruiters also make mistakes.** Overly literal keyword searches and rigid filters reject good candidates. You cannot control that—but mirroring exact posting language (when truthful) reduces the odds of being filtered out by a synonym mismatch.

## ATS myths that cause self-inflicted rejection

| Myth | Reality |
|------|---------|
| "ATS auto-rejects most resumes with no human involved" | Most filtering is keyword search and ranking; humans review the shortlist. Fixable gaps, not a robot veto, cause most silence. |
| "White-text hidden keywords beat the system" | Recruiters see them when they copy your text; it reads as dishonest and can get you dropped. |
| "A higher word count looks more experienced" | Density of proof beats length. Two tight pages of metrics outperform three of duties. |
| "PDF always fails ATS" | Text-based PDFs from Word/Docs parse fine. Only image/scanned PDFs fail. |
| "One perfect resume works everywhere" | Baseline file, then tailor keywords per posting. Relevance is the whole game. |

## Recovery workflow

1. Run [ATS Resume Checker](/resume-checker) — note format flags and score.
2. Fix layout per [ATS Resume Format](/ats-resume-format).
3. Tailor keywords per [ATS Resume Keywords Guide](/ats-resume-keywords).
4. Match target JD in [Resume Match Analyzer](/resume-job-description-match).
5. Re-check and apply.

### Fast triage checklist

- [ ] Copy-paste test passes (text extracts in order)
- [ ] Contact info appears in the body
- [ ] Target job title is in the top third of page one
- [ ] Every recent role has at least two metric-backed bullets
- [ ] Skills mirror posting spelling exactly
- [ ] You are uploading the same file you tested

## Mistake 11: Putting a photo on your resume

In the US and Canada, a resume photo is strongly discouraged—it introduces protected-characteristic information (age, race, gender) that anti-discrimination law is designed to shield from early screening. Many North American ATS systems either skip photo regions or flag them as parse noise.

In the UK and EU, photos are similarly discouraged under GDPR and equality regulations, even though they are culturally more common in some European countries. For portal applications, a photo header blocks the contact info zone and often causes the parser to skip your name.

**Fix:** Remove the photo entirely for ATS portal submissions. If a specific market or employer explicitly requests one, supply it as a separate attachment—never embedded in the document.

## Mistake 12: "References available upon request" and an outdated objective statement

Both phrases are legacy holdovers from pre-digital recruiting:

- **"References available upon request"** — Employers know this. It wastes a line, adds no keyword value, and signals an outdated template. Remove it; provide references only when specifically asked.
- **Objective statement** — A two-line "seeking a challenging role to grow my skills" objective is ATS-neutral and recruiter-negative. Replace it with a targeted professional summary (2–3 lines) that mirrors your target title, core skills, and one proof metric.

**Fix:** Delete the references line. Replace any objective statement with a focused summary. Guide: [Resume Summary Generator](/resume-summary-generator).

## Mistake 13: Inconsistent date formats

Mixing date styles across the same resume—"Jan 2024" in one role and "01/2024" in another, or "2022–Present" vs "2022 - Present"—creates two problems:

1. **Parser confusion:** Some ATS systems extract date ranges to calculate tenure. Inconsistent formats cause miscalculation or null extraction, artificially lowering your apparent years of experience.
2. **Recruiter perception:** Mixed formats read as a rushed, unreviewed file—the opposite of the detail-oriented signal most roles require.

**Fix:** Choose one format and apply it everywhere. Recommended: **Month YYYY - Month YYYY** (e.g., "Mar 2021 - Jun 2023"). Avoid slashes in date ranges — some parsers treat them as fractions. For current roles, use "Present" rather than leaving the end date blank.

If your resume is failing ATS parsing for unclear reasons, the [Resume Parsing Guide](/resume-parsing) covers exactly how parsers extract dates, employers, and titles—and what causes them to fail.

More examples of good structure: [ATS Resume Examples](/ats-resume-examples). Full hub: [ATS Knowledge Center](/knowledge-center).

## Recovery checklist

- [ ] Single-column layout (no Canva, no tables, no icon sidebars)
- [ ] Contact info in the document body
- [ ] No photo embedded in the file
- [ ] No "references available upon request" line
- [ ] Professional summary instead of objective statement
- [ ] Consistent date format throughout
- [ ] Copy-paste test passes on your exported PDF
- [ ] [ATS Resume Checker](/resume-checker) shows no critical format flags

Browse all optimization guides in the [Career Success Hub](/career-success-hub) and the [ATS Knowledge Center](/knowledge-center).
`;
