export const REVIEW_PROCESS_PATH = "/review-process" as const;

export const reviewProcessBody = `
This page describes how ResumeIQ reviews resume guides, tool pages, and checker output claims before publication. It complements our [editorial policy](/editorial-policy), [scoring methodology](/methodology), and [privacy policy](/privacy).

## Who reviews content

All published guides are reviewed by the **ResumeIQ Editorial Team**—a single in-house editorial function, not individual named authors or recruiter personas. We do not publish fake bylines, stock headshots, or unverifiable “HR expert” profiles.

The editorial team checks that:

- Claims match what the [free resume checker](/resume-checker) actually returns today
- Storage and privacy statements match the [privacy policy](/privacy)
- We do not promise interviews, job offers, or employer-specific ATS behavior we cannot verify
- Examples are composite or anonymized and structurally realistic—not fabricated employers or credentials

## What we review

| Content type | Review focus |
|--------------|--------------|
| Tool landing pages | Feature claims, upload limits, free vs paid wording (core checker is free; no accounts) |
| Methodology & scoring docs | Weights, limitations, and disclaimers aligned with the live score engine |
| Career guides & blog posts | Factual ATS/parser statements, actionable steps, internal links to tools |
| FAQ blocks | No references to accounts, saved scan history, or premium tiers that do not exist |
| Comparison pages | Factual category comparisons—not live pricing quotes from competitors |

## How a page is reviewed (step-by-step)

1. **Draft** — Written or updated by the ResumeIQ Editorial Team, sometimes with AI-assisted phrasing that is fully edited before publish.
2. **Product check** — Tool claims are verified against the current checker flow (upload, parse preview, score bands, optional job-description match).
3. **Policy check** — Privacy, storage, and “free” language are checked against [privacy](/privacy) and published methodology.
4. **Link check** — Guides must link to the checker or a relevant tool so readers can verify advice on their own file.
5. **Publish** — Page ships with FAQ schema where applicable; material updates adjust sitemap last-modified dates.
6. **Corrections** — Factual errors reported via [contact](/contact) are fixed promptly; significant changes are reflected on this page and affected URLs.

## What we do not do

- We do not claim guaranteed rankings, interview rates, or employer endorsements.
- We do not invent statistics without a cited, checkable source.
- We do not recommend keyword stuffing, hidden text, or deceptive formatting.
- We do not describe login, saved history, or paid upgrade paths that are not live in the product.

## How to report an error

Email us through the [contact page](/contact) with:

- The page URL
- What looks wrong (factual claim, outdated tool behavior, broken promise)
- Optional screenshot or export file (redact personal data)

We treat product-accuracy reports as high priority because misleading copy hurts job seekers and violates our own editorial standards.

## Related trust documents

- [About ResumeIQ](/about) — Mission and platform overview  
- [Editorial policy](/editorial-policy) — Content principles and independence  
- [Methodology](/methodology) — How ATS scores are calculated  
- [Privacy policy](/privacy) — Resume upload and data handling  
- [Terms of service](/terms) — Usage disclaimers  
`;
