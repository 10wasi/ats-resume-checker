export const HOW_ATS_WORKS_PATH = "/how-ats-works" as const;

export const howAtsWorksBody = `
Applicant tracking systems (ATS) are the software layer between your application and a human recruiter. Understanding how they work—globally, not just in one country—helps you **improve resume score** signals and avoid silent rejections.

## What is an ATS?

An **ATS** (applicant tracking system) stores job applications, parses resume files into searchable fields, and helps recruiters filter and rank candidates. Common platforms include Workday, Greenhouse, Lever, Taleo, SAP SuccessFactors, and regional equivalents used by employers worldwide.

ATS is not a single "American hiring system." Multinational companies, remote-first teams, and local champions all use similar parsing and keyword search patterns.

## What ATS checks on your resume

1. **Parse** — Can text be extracted from PDF or Word in logical order?
2. **Index** — Are skills, titles, employers, and dates stored as searchable fields?
3. **Match** — Does resume language overlap with the job posting's requirements?
4. **Filter** — Do minimum criteria (years, certifications, location) pass automated rules?
5. **Human skim** — Recruiters review survivors in seconds—often searching the same keywords.

ResumeIQ focuses on steps 1–3 because that is where most fixable failures happen before anyone reads your story.

## How resume scoring works (simplified)

| Signal | Why it matters |
|--------|----------------|
| Layout & parse health | Broken columns and graphics lose data |
| Keyword proof in bullets | Skills must appear with experience context |
| Standard headings | Experience, Education, Skills map to fields |
| Format flags | Tables, icons, and risky PDF exports |

Your **ATS compatibility score** reflects these signals on your master resume. A separate **resume match score** measures overlap with one job description.

Read the full [Methodology](/methodology) for weights, disclaimers, and what we do not claim.

## How keyword matching works

ATS and recruiters search for concrete terms: job titles, tools, certifications, methodologies. A **resume keyword analyzer** workflow:

1. Extract terms from the posting ([Resume Keyword Tool](/resume-keyword-tool))
2. Compare to your resume ([Resume Match Analyzer](/resume-match-analyzer))
3. Add missing keywords only where you have honest proof
4. Re-run the [ATS Resume Checker](/resume-checker) on your export

Avoid stuffing—unrelated keyword lists can hurt recruiter trust.

## How to improve your scores

1. Fix parse issues first (single column, plain text, standard headings)
2. Upgrade bullets with metrics and posting-aligned language
3. Tailor headline and summary per application
4. Run checklist QA before submit ([ATS Resume Checklist](/ats-resume-checklist-2026))
5. Compare to [Resume Examples Library](/resume-examples) for your role

## Try it on your file

[Get your ATS resume score instantly →](/resume-checker)

Questions? See the [FAQ Center](/faq-center) or [ATS Guide Hub](/ats-guide).
`;
