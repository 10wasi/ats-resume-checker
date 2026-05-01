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

Rules:
- Be specific to THIS resume; no generic filler.
- missing_keywords should complement (not duplicate) obvious section headers — focus on skills/tools/phrases a hiring manager would search for.`;
}
