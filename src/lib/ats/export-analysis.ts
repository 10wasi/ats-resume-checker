import type { AtsAnalysisResult } from "@/lib/ats/types";

function line(label: string, value: string | number | undefined | null): string {
  if (value === undefined || value === null || value === "") return "";
  return `${label}: ${value}`;
}

function list(section: string, items: string[]): string {
  if (!items.length) return `${section}\n(none listed)\n`;
  return `${section}\n${items.map((s) => `• ${s}`).join("\n")}\n`;
}

export function buildAnalysisExportText(
  analysis: AtsAnalysisResult,
  meta?: { fileName?: string; generatedAt?: Date }
): string {
  const at = meta?.generatedAt ?? new Date();
  const lines: string[] = [
    "RESUMEIQ — RESUME ANALYSIS EXPORT",
    "==================================",
    "",
    `Generated: ${at.toISOString()}`,
    meta?.fileName ? `Source file: ${meta.fileName}` : "",
    "",
    "SCORES",
    "------",
    line("ATS score", analysis.ats_score),
    "",
    analysis.score_breakdown
      ? [
          "SCORE BREAKDOWN (rule-based max: skills 30, exp 25, ATS 20, format 15, edu 10)",
          "--------------",
          line("Skills match", analysis.score_breakdown.skills),
          line("Experience relevance", analysis.score_breakdown.experience),
          line("ATS keyword optimization", analysis.score_breakdown.ats),
          line("Formatting quality", analysis.score_breakdown.formatting),
          line("Education relevance", analysis.score_breakdown.education),
          "",
        ].join("\n")
      : "SCORE BREAKDOWN\n--------------\n(Full point breakdown unavailable for this run.)\n\n",
    list("TOP SUGGESTIONS", analysis.suggestions),
    "",
    line("Keyword match", analysis.keyword_match_score),
    line("Readability", analysis.readability_score),
    analysis.job_match_score != null
      ? line("Job match", analysis.job_match_score)
      : "",
    "",
    list("MISSING KEYWORDS", analysis.missing_keywords),
    "",
    list("FORMATTING / ATS ISSUES", analysis.formatting_issues),
    "",
    list("GRAMMAR / WORDING", analysis.grammar_issues),
    "",
    "SECTION FEEDBACK",
    "----------------",
    `Summary:\n${analysis.section_feedback.summary}\n`,
    `Experience:\n${analysis.section_feedback.experience}\n`,
    `Skills:\n${analysis.section_feedback.skills}\n`,
    "IMPROVED BULLETS",
    "----------------",
    analysis.improved_bullets.length
      ? analysis.improved_bullets.map((b, i) => `${i + 1}. ${b}`).join("\n")
      : "(none)",
    "",
    "---",
    "Exported from ResumeIQ — resumeiq.app",
  ];
  return lines.filter(Boolean).join("\n");
}

export function downloadTextFile(filename: string, content: string) {
  const blob = new Blob([content], { type: "text/plain;charset=utf-8" });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  a.rel = "noopener";
  document.body.appendChild(a);
  a.click();
  a.remove();
  URL.revokeObjectURL(url);
}
