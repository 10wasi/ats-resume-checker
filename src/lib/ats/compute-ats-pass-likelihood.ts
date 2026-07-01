import type { AtsAnalysisResult } from "./types";

export type AtsPassLikelihood = {
  percent: number;
  label: string;
  tone: "high" | "moderate" | "low" | "critical";
  summary: string;
  factors: Array<{
    name: string;
    status: "good" | "warn" | "risk";
    detail: string;
  }>;
};

/**
 * Estimates likelihood of passing automated ATS screening (parse + keyword signals).
 * Not a prediction of interviews or offers.
 */
export function computeAtsPassLikelihood(
  analysis: AtsAnalysisResult,
  options?: { hasJobDescription?: boolean }
): AtsPassLikelihood {
  const hasJd = options?.hasJobDescription ?? Boolean(analysis.job_match_score != null);
  const ats = analysis.ats_score;
  const readability = analysis.readability_score;
  const keyword = analysis.keyword_match_score;
  const match = analysis.job_match_score ?? 0;
  const coverage = analysis.keyword_match_detail?.coverage_percent ?? keyword;

  let score = ats * 0.4 + readability * 0.15 + keyword * 0.2;
  if (hasJd) {
    score = ats * 0.3 + match * 0.35 + coverage * 0.2 + readability * 0.15;
  }

  const formatPenalty = Math.min(25, analysis.formatting_issues.length * 5);
  const grammarPenalty = Math.min(10, analysis.grammar_issues.length * 2);
  const missingKwPenalty = hasJd
    ? Math.min(20, analysis.missing_keywords.length * 2)
    : 0;

  const qa = analysis.career_insights?.qa_scorecard ?? [];
  const failCount = qa.filter((r) => r.status === "fail").length;
  const warnCount = qa.filter((r) => r.status === "warn").length;
  const qaPenalty = failCount * 8 + warnCount * 3;

  const percent = Math.round(
    Math.max(5, Math.min(95, score - formatPenalty - grammarPenalty - missingKwPenalty - qaPenalty))
  );

  const factors: AtsPassLikelihood["factors"] = [
    {
      name: "ATS compatibility",
      status: ats >= 70 ? "good" : ats >= 50 ? "warn" : "risk",
      detail: `Score ${Math.round(ats)}/100 — layout and structure signals`,
    },
    {
      name: "Keyword coverage",
      status: keyword >= 65 ? "good" : keyword >= 45 ? "warn" : "risk",
      detail: `Coverage ${Math.round(keyword)}/100`,
    },
  ];

  if (hasJd) {
    factors.push({
      name: "Job match",
      status: match >= 70 ? "good" : match >= 50 ? "warn" : "risk",
      detail: `Match ${Math.round(match)}% vs posting`,
    });
    if (analysis.missing_keywords.length > 0) {
      factors.push({
        name: "Missing posting terms",
        status: analysis.missing_keywords.length <= 5 ? "warn" : "risk",
        detail: `${analysis.missing_keywords.length} keywords to address in recent bullets`,
      });
    }
  }

  if (analysis.formatting_issues.length > 0) {
    factors.push({
      name: "Format risks",
      status: analysis.formatting_issues.length <= 2 ? "warn" : "risk",
      detail: analysis.formatting_issues.slice(0, 2).join("; "),
    });
  }

  factors.push({
    name: "Readability & structure",
    status: readability >= 65 ? "good" : readability >= 45 ? "warn" : "risk",
    detail: `${Math.round(readability)}/100 — scan-friendly layout for recruiters and parsers`,
  });

  if (failCount > 0) {
    factors.push({
      name: "QA checklist",
      status: "risk",
      detail: `${failCount} critical checklist item(s) failed`,
    });
  }

  let tone: AtsPassLikelihood["tone"] = "moderate";
  let label = "Moderate ATS pass likelihood";
  let summary =
    "Your resume may pass some ATS filters but likely needs targeted fixes before high-volume applications.";

  if (percent >= 78) {
    tone = "high";
    label = "High ATS pass likelihood";
    summary =
      "Parsing, structure, and keyword signals look strong for automated screening. Tailor each posting and re-export after edits.";
  } else if (percent >= 58) {
    tone = "moderate";
  } else if (percent >= 40) {
    tone = "low";
    label = "Low ATS pass likelihood";
    summary =
      "Several signals suggest ATS may rank or parse your file below competitors. Fix format flags and keyword gaps before applying.";
  } else {
    tone = "critical";
    label = "Unlikely to pass ATS screening";
    summary =
      "Major format or keyword issues detected. Resolve parsing risks and add missing terms before submitting online.";
  }

  return { percent, label, tone, summary, factors };
}
