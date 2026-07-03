export const RESUME_SKILLS_ANALYZER_PATH = "/resume-skills-analyzer" as const;

export const resumeSkillsAnalyzerBody = `
Before you can tailor keywords, you need to know which skills are already present and credible in your resume—and which only exist as wishful thinking in a Skills section with no backup.

The [Resume Skills Analyzer](/resume-skills-analyzer) maps your current skill coverage. This guide explains how to act on what you find.

## What the skills analyzer detects

The tool scans your resume for:

| Signal | What it tells you |
|--------|------------------|
| Mentioned technical skills | Tools, languages, platforms in any section |
| Skills with bullet proof | Terms that appear in Experience context |
| Skills section only | Listed but not backed by a role |
| Keyword density | How often each term repeats |
| Gap vs job description | Missing terms when a posting is provided |

This is the difference between a skills *audit* and a skills *list*. The list shows what you claim; the audit shows what you can defend.

## Why "Skills section only" is a red flag

Recruiters and hiring managers notice when a resume has:

\`\`\`
Skills: Python, SQL, Tableau, Spark, Kubernetes, TensorFlow,
        Airflow, dbt, BigQuery, Looker, Snowflake, AWS, GCP
\`\`\`

...followed by experience bullets that never mention a single one of those tools.

The Skills list becomes a liability—it signals padding. Fix it by removing tools you only used once in a tutorial, and adding a bullet for each tool that genuinely belongs.

## The skill credibility test

For every tool in your Skills section, ask:

1. **Can I describe a project or role where I used this?** If no, remove it.
2. **Does at least one Experience bullet prove it?** If no, add one or move the skill lower.
3. **Is the spelling an exact match to how employers write it?** (JavaScript not "Java Script," PostgreSQL not "Postgres SQL")
4. **Am I using the same name the target posting uses?** Mirror their vocabulary.

## Workflow: skills audit → resume fix

1. Upload your resume to the [skills analyzer](/resume-skills-analyzer)
2. Note every skill flagged as "section only" — no bullet proof
3. For each one: either add a bullet, or remove the skill
4. Add 3–5 missing skills from your target posting (ones you *can* defend)
5. Re-run the [ATS Resume Checker](/resume-checker) to confirm they appear in extracted text
6. Check [Resume Match Analyzer](/resume-job-description-match) for posting-specific overlap

## Profession-specific skill priorities

Skills that tend to carry more weight (because they trigger ATS searches) in common roles:

| Role | High-weight skills to prove in bullets |
|------|----------------------------------------|
| Software Engineer | Language + cloud + CI/CD combo |
| Data Analyst | SQL + a BI tool (Tableau/Looker/Power BI) |
| Product Manager | Roadmap tools + Agile + a metric domain |
| Marketing | CRM + channel + a performance metric |
| Finance | ERP/accounting software + compliance framework |
| Healthcare | EMR system (Epic, Cerner) + license acronyms |

Skills without proof in the right field rarely move the needle—but skills *with* proof in a bullet are exactly what domain searches find.

## Related tools and guides

- [ATS Keywords Finder](/ats-keywords-finder) — extract role-specific terms from any posting
- [Resume Match Analyzer](/resume-job-description-match) — compare your full resume to a JD
- [ATS Resume Keywords guide](/ats-resume-keywords) — placement strategy and ethical limits
- [Resume Keywords by Industry](/resume-keywords-by-industry) — sector word lists
- [ATS Resume Checker](/resume-checker) — full parse, score, and keyword analysis
`;
