export const ATS_KEYWORDS_FINDER_PATH = "/ats-keywords-finder" as const;

export const atsKeywordsFinderBody = `
Most resume advice tells you to "add keywords." This page tells you **which ones, from where, and exactly where to place them**—so your resume surfaces in recruiter searches without keyword stuffing.

The [ATS keywords finder tool](/ats-keywords-finder) extracts the specific terms from any job description. This guide explains what to do with them.

## Why job-description keywords beat generic lists

Every job posting is its own vocabulary test. The recruiter who wrote it chose specific words—"Snowflake" not "data warehouse," "JIRA" not "project management tools," "A/B testing" not "experimentation." Applicant tracking systems and recruiter searches are often literal.

A generic keyword list can improve your baseline score. But only posting-specific terms move your **resume match score** for that role.

## What the tool extracts

Paste any job description and the finder identifies:

| Category | Examples |
|----------|---------|
| Hard skills & tools | Python, Salesforce, SAP, AutoCAD |
| Certifications | PMP, CPA, AWS SAA, CISSP |
| Domain phrases | "pipeline generation," "informed consent," "SOX compliance" |
| Title signals | Role-level language — "senior," "lead," "director" |
| Soft-skill patterns | Only when unusually specific to the post |

It does not pad your resume with generic filler. It shows what *this employer* is searching for.

## The keyword placement workflow

After running the finder, follow this sequence:

1. **Sort by must-have vs nice-to-have.** Terms in "Requirements" outweigh "Preferred." Terms repeated 2+ times in the description are signals the employer will actually search.
2. **Match to your real experience.** Discard anything you cannot defend in a phone screen.
3. **Place in experience bullets first.** A keyword in a bullet ("Led migration to Snowflake, cutting query time 60%") beats the same word only in a Skills list.
4. **Add remaining honest terms to Skills.** Breadth without proof still helps search visibility—just not recruiter trust.
5. **Re-run match analysis.** Use the [Resume Match Analyzer](/resume-job-description-match) to see the overlap after edits.
6. **Validate in the checker.** Upload the exact PDF you will submit to the [ATS Resume Checker](/resume-checker) and confirm keywords appear in extracted text.

## Before vs after: keyword placement in action

\`\`\`
JOB POST REQUIRES: "Tableau, stakeholder reporting, SQL"

BEFORE (Skills only)
Skills: Tableau, Excel, SQL, PowerPoint, Looker

AFTER (Bullet proof + Skills)
• Built Tableau dashboards for weekly stakeholder reporting
  covering 4M rows of SQL-based pipeline data; reduced
  report prep from 3 hours to 20 minutes.
Skills: Tableau, SQL, Excel, Looker, PowerPoint
\`\`\`

The "after" version contains the same skills but now proves them with context, scope, and a metric. ATS finds "Tableau," "stakeholder reporting," and "SQL." Recruiter reads an achievement. Both audiences win.

## Common mistakes when using keyword tools

- **Adding everything the tool returns** regardless of your actual experience
- **Synonyms without proof** — "cloud computing" when the post says "AWS Lambda"
- **Skills section only** — tools buried without a single supporting bullet
- **Testing the wrong file** — editing a draft but uploading an older PDF
- **One set of keywords for all jobs** — tailor per posting, not per industry

## How many keywords to add per application?

There is no magic number. A practical guide:

| Your starting match | Target after edits | Honest keyword additions |
|---------------------|--------------------|--------------------------|
| Below 50% | 65–70% | 8–12 terms with bullet proof |
| 50–65% | 70–80% | 4–7 targeted edits |
| 65–80% | 80%+ | 2–4 precision tweaks |

Do not chase 95%+ unless every requirement matches your background. Overstating hurts interviews.

## Related tools and guides

- [Resume Match Analyzer](/resume-job-description-match) — calculate overlap % after edits
- [ATS Resume Checker](/resume-checker) — validate full parse + score
- [ATS Resume Keywords guide](/ats-resume-keywords) — placement strategy
- [Resume Keywords by Industry](/resume-keywords-by-industry) — sector-specific terms
- [ATS Resume Checklist](/ats-resume-checklist-2026) — final QA before apply
`;
