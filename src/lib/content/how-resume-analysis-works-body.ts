export const HOW_RESUME_ANALYSIS_WORKS_PATH = "/how-resume-analysis-works" as const;

export const howResumeAnalysisWorksBody = `
When you upload a resume to ResumeIQ, the system runs a **multi-stage analysis** designed to mirror how applicant tracking systems and recruiters evaluate files—not to predict job offers.

[Run free resume checker →](/resume-checker)

## Stage 1 — Text extraction

Your PDF or DOCX is converted to plain text. If extraction fails (scanned images, broken exports, text in graphics), downstream scores reflect that parse failure. **Always review extracted text** in the checker before trusting keyword scores.

## Stage 2 — Structure & format signals

The engine checks for patterns that break parsers:

- Multi-column layouts and tables  
- Contact info in headers/footers  
- Non-standard section titles  
- Dense graphics or icon-based skills blocks  

These produce **format flags** and reduce the formatting sub-score.

## Stage 3 — Keyword & skills analysis

Without a job description, the checker scores general keyword breadth and skills proof in bullets.

With a job description attached:

- **Match score** — Overlap between posting language and your resume  
- **Missing keywords** — Terms recruiters may search for  
- **Skills gaps** — Hard vs soft skill categories  

Keywords must appear in defensible context—footer dumps score poorly and read hollow to humans.

## Stage 4 — Readability & experience signals

Readability measures bullet structure, section clarity, and scan-friendly layout. Experience sub-score reflects whether roles, dates, and outcomes are extractable and substantive.

## Stage 5 — AI qualitative layer (when available)

Language models may generate:

- Section feedback (summary, experience, skills)  
- Improved bullet suggestions  
- Summary rewrites  
- Action verb recommendations  
- Achievement statement upgrades  

AI output is **draft quality**—verify facts before applying to your resume.

## Stage 6 — Composite ATS score

The headline **0–100 ATS score** blends:

| Component | Max points (typical) |
|-----------|---------------------|
| Skills proof | 30 |
| Experience quality | 25 |
| Keyword / ATS alignment | 20 |
| Formatting | 15 |
| Education signals | 10 |

Full weighting: [methodology](/methodology).

## What you receive after analysis

Every complete run includes:

- Overall ATS score and compatibility rating  
- Keyword match and readability metrics  
- Missing keywords and format problems  
- Skills analysis and strengths/weaknesses  
- Quick-fix checklist and priority suggestions  
- Summary and section commentary  
- Downloadable text and PDF reports  
- Links to guides for the next fix step  

Nothing ends at a single number.

## How this differs from employer ATS

Employers use proprietary systems with private rules. ResumeIQ approximates **common parser behavior** and **keyword search patterns** used globally. Use results to prioritize edits—not as a guarantee any specific company will rank you identically.

## Improve after your report

1. Fix format until extracted text is clean  
2. Add posting keywords into recent bullets  
3. Run [resume match tool](/resume-match-analyzer) per application  
4. Re-check with the [free resume checker](/resume-checker)  
5. Read [how to improve resume score](/how-to-improve-resume-score) for a structured plan  

Related: [How ATS works](/how-ats-works) · [ATS score explained](/ats-score-explained) · [Editorial policy](/editorial-policy)
`;
