export function buildAtsUserMessage(resumeText: string, jobDescription: string) {
  const jdBlock =
    jobDescription.trim().length > 0
      ? `JOB DESCRIPTION (use for tailored missing_keywords, section_feedback, and improved_bullets):\n"""\n${jobDescription.trim()}\n"""\n`
      : "No job description was provided. Infer a sensible target role from the resume only.\n";

  return `RESUME TEXT:\n"""\n${resumeText}\n"""\n\n${jdBlock}

You are an expert resume coach. Return ONLY valid JSON (no markdown, no prose).

IMPORTANT: Do NOT output any numeric scores. Scoring is computed separately by code.

Return exactly these keys:
- missing_keywords: string[] (important terms from the posting or inferred role that are absent or weak in the resume — max 12)
- formatting_issues: string[] (ATS or readability issues you notice; max 10)
- grammar_issues: string[] (concise issues + quick fix hints; max 8)
- section_feedback: object with keys "summary", "experience", "skills" — each a short actionable paragraph
- improved_bullets: string[] (2-5 rewritten bullets based on weak lines in the resume — strong verbs, metrics where possible)
- ai_resume_improvements: object with:
  - summary: { "original": string (quote or paraphrase their current summary; if none, say "No summary detected"), "improved": string (2-3 line ATS-friendly professional summary) }
  - skills: { "original": string (their skills block or top skills as written), "improved": string (grouped, ATS-friendly skills section text) }
  - experience_bullets: array of { "original": string, "improved": string } (3-5 pairs — rewrite weak bullets from the resume)
  - keyword_suggestions: string[] (8-12 ATS-friendly terms to weave in where truthful)
  - rewrite_suggestions: string[] (4-6 specific edit instructions for this file)
  - achievement_statements: array of { "original": string, "improved": string } (2-3 pairs — metric-heavy achievement lines)
  - action_verbs: string[] (8-12 strong verbs tailored to their target role)

Rules:
- Be specific to THIS resume; no generic filler.
- "original" fields must reflect actual resume content when present; never invent employers or metrics they did not imply.
- missing_keywords should complement (not duplicate) obvious section headers — focus on skills/tools/phrases a hiring manager would search for.`;
}
