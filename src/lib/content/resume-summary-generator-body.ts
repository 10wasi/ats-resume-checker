export const RESUME_SUMMARY_GENERATOR_PATH = "/resume-summary-generator" as const;

export const resumeSummaryGeneratorBody = `
A professional summary is the first thing a recruiter reads after the ATS finds your file. It sets the frame for everything below—and it either earns a second look or loses one in three seconds.

The [Resume Summary Generator](/resume-summary-generator) drafts a starting point. This guide shows you how to shape it into something that works for both machines and humans.

## What makes a professional summary ATS-friendly?

Three things a summary must do for ATS performance:

1. **State the target title** — match the exact phrasing the posting uses ("Product Manager" not "Product Leader" if the JD says PM)
2. **Echo 2–3 core tools or skills** from the posting — these trigger keyword matches without requiring a full bullet
3. **Quantify scope** — years, team size, domain, or a metric establish seniority signals

A summary that does all three in two sentences scores better in keyword overlap and sets an accurate recruiter expectation.

## Before vs after: professional summary

\`\`\`
BEFORE (generic, low ATS value)
"Results-driven professional with strong communication skills
and a passion for making an impact in a collaborative
environment."

AFTER (title + tools + scope)
"Data Analyst with 4 years in B2B SaaS — SQL, Tableau, and
Python across product analytics and churn modeling. Track
record reducing time-to-insight from 2 weeks to 2 days."
\`\`\`

The "after" version:
- Names the target title ("Data Analyst")
- Mentions three searchable tools (SQL, Tableau, Python)
- States domain (B2B SaaS), scope (4 years), and one metric
- Is two sentences — enough for a scan, not a wall

## How to use the generated draft

The generator gives you a structural starting point. Your job is to:

1. **Swap in real metrics** — replace placeholders with numbers from your actual experience
2. **Mirror the job posting** — replace generic terms with vocabulary from the specific role you're targeting
3. **Cut filler phrases** — "passionate," "motivated," "team player" add nothing
4. **Keep it to 2–3 sentences** — recruiters skim; length does not imply seniority

After editing, run the [ATS Resume Checker](/resume-checker) and check that your target title and core tools appear in keyword analysis.

## When you do not need a summary

A summary is most useful when:
- You are pivoting careers and need a bridge narrative
- Your most relevant experience is buried in older roles
- The posting lists must-have tools you want front-loaded

Skip the summary (or shorten to one line) if your most recent role title and company name already tell the whole story. Adding fluff to pad the page hurts scanner signals.

## Common mistakes in summary writing

| Mistake | Why it fails | Fix |
|---------|-------------|-----|
| Objective statement instead of summary | Signals entry-level; wastes prime real estate | Lead with experience and tools |
| 5+ sentences | Pushes experience fold down; recruiter skips | Two sentences maximum |
| No keywords from the posting | Misses match signal for this role | Mirror JD language |
| Claims without proof below | "Award-winning" with no evidence | State only what bullets support |

## Related tools and guides

- [ATS Resume Checker](/resume-checker) — validate your summary and full resume
- [Resume Bullet Generator](/resume-bullet-generator) — strengthen experience bullets
- [ATS Keywords Finder](/ats-keywords-finder) — find the right words to include
- [Resume Match Analyzer](/resume-job-description-match) — see if your summary helps match %
- [ATS-Friendly Resume Guide](/ats-friendly-resume-guide) — complete build workflow
`;
