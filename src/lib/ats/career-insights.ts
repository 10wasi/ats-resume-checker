import type { AtsAnalysisResult, CareerInsights, QaScorecardRow } from "./types";
import type { ScoreBreakdown } from "./score-engine";

function pct(part: number, max: number): number {
  if (max <= 0) return 0;
  return Math.round(Math.max(0, Math.min(100, (part / max) * 100)));
}

function defaultBreakdown(a: AtsAnalysisResult): ScoreBreakdown {
  return (
    a.score_breakdown ?? {
      skills: 0,
      experience: 0,
      ats: 0,
      formatting: 0,
      education: 0,
    }
  );
}

/**
 * Full insights from a complete analysis (before free-tier stripping).
 * Callers attach to result; public API always returns full insights.
 */
export function buildCareerInsights(a: AtsAnalysisResult): CareerInsights {
  const b = defaultBreakdown(a);
  const hasBreakdown = Boolean(a.score_breakdown);

  const narrative_summary = [
    a.section_feedback.summary.trim() ||
      `This resume presents an overall ATS index of ${Math.round(a.ats_score)}/100 when measured against our hiring-analytics rubric.`,
    a.section_feedback.experience.trim()
      ? `Experience narrative: ${a.section_feedback.experience.trim()}`
      : null,
    a.section_feedback.skills.trim()
      ? `Skills framing: ${a.section_feedback.skills.trim()}`
      : null,
  ]
    .filter(Boolean)
    .join("\n\n");

  const ats_interpretation = [
    `Text extraction and scan-structure readability score ${a.readability_score}/100.`,
    hasBreakdown
      ? `Weighted drivers: skills ${pct(b.skills, 30)}% of max (30 pts), experience ${pct(b.experience, 25)}% of max (25 pts), ATS keywords ${pct(b.ats, 20)}% of max (20 pts), formatting ${pct(b.formatting, 15)}% of max (15 pts), education ${pct(b.education, 10)}% of max (10 pts).`
      : `Use a full report to expose per-dimension point allocation.`,
    a.formatting_issues.length
      ? `${a.formatting_issues.length} formatting / structure note(s) may affect parser fidelity.`
      : "No major formatting blockers were surfaced in this pass.",
  ].join(" ");

  const job_readiness =
    a.job_match_score != null
      ? `With the supplied posting, role-alignment reads ${Math.round(a.job_match_score)}/100. Combined with keyword coverage (${a.keyword_match_score}/100), ${a.ats_score >= 65 ? "the packet looks interview-ready pending human review." : "expect to tighten keyword and proof-point alignment before high-volume ATS funnels."}`
      : `Without a target posting, job readiness reflects generic market fit only. Overall index ${Math.round(a.ats_score)}/100 and keyword coverage ${a.keyword_match_score}/100 suggest ${a.ats_score >= 65 ? "a competitive baseline" : "room to sharpen bullets and headlines before submission"}.`;

  const strengths: string[] = [];
  if (hasBreakdown) {
    if (pct(b.skills, 30) >= 70)
      strengths.push(
        "Skills block demonstrates strong role-relevant density versus the scoring model."
      );
    if (pct(b.experience, 25) >= 70)
      strengths.push(
        "Experience signals (scope, outcomes) carry above-average weight in the rubric."
      );
    if (pct(b.ats, 20) >= 70)
      strengths.push(
        "Keyword and ATS-axis alignment outperforms typical applicant baselines."
      );
  }
  if (a.keyword_match_score >= 75)
    strengths.push(
      `Keyword coverage at ${a.keyword_match_score}/100 supports funnel-stage screening.`
    );
  if (a.readability_score >= 75)
    strengths.push(
      `Readability (${a.readability_score}/100) supports fast recruiter skim.`
    );
  if (strengths.length === 0)
    strengths.push(
      "Foundation is serviceable—next pass should layer measurable outcomes and posting-specific phrasing."
    );

  const weaknesses: string[] = [];
  if (hasBreakdown) {
    const dims = [
      { label: "Skills alignment", p: pct(b.skills, 30) },
      { label: "Experience depth", p: pct(b.experience, 25) },
      { label: "ATS keyword fit", p: pct(b.ats, 20) },
      { label: "Formatting & structure", p: pct(b.formatting, 15) },
      { label: "Education relevance", p: pct(b.education, 10) },
    ].sort((x, y) => x.p - y.p);
    dims.slice(0, 2).forEach((d) => {
      if (d.p < 60)
        weaknesses.push(`${d.label} is below benchmark—prioritize in your edit queue.`);
    });
  }
  a.formatting_issues.forEach((x) => weaknesses.push(x));
  a.grammar_issues.forEach((x) => weaknesses.push(x));
  if (weaknesses.length === 0)
    weaknesses.push(
      "No critical structural weaknesses flagged—focus on incremental keyword and metrics lift."
    );

  const improvement_actions = a.suggestions.map(
    (s, i) => `Step ${i + 1}: ${s}`
  );

  const quick_fix_checklist = [
    ...a.formatting_issues.slice(0, 3),
    ...a.grammar_issues.slice(0, 2),
    ...a.suggestions.slice(0, 2),
  ].slice(0, 8);

  const common_ats_issues =
    a.formatting_issues.length > 0
      ? a.formatting_issues
      : [
          "No ATS-specific structural issues were auto-flagged—confirm headings and single-column flow manually.",
        ];

  const qa_scorecard: QaScorecardRow[] = [
    {
      label: "Parse-ready text density",
      status:
        a.readability_score >= 70
          ? "pass"
          : a.readability_score >= 50
            ? "warn"
            : "fail",
      detail: `Readability index ${a.readability_score}/100.`,
    },
    {
      label: "Keyword / listing alignment",
      status:
        a.keyword_match_score >= 72
          ? "pass"
          : a.keyword_match_score >= 50
            ? "warn"
            : "fail",
      detail: `Coverage ${a.keyword_match_score}/100${
        a.job_match_score != null
          ? ` · Posting fit ${Math.round(a.job_match_score)}/100`
          : ""
      }.`,
    },
    {
      label: "Section structure & hygiene",
      status:
        a.formatting_issues.length === 0
          ? "pass"
          : a.formatting_issues.length <= 2
            ? "warn"
            : "fail",
      detail:
        a.formatting_issues.length === 0
          ? "No formatting alerts."
          : `${a.formatting_issues.length} item(s) to review.`,
    },
    {
      label: "Proof-point strength (bullets)",
      status:
        a.improved_bullets.length >= 2
          ? "warn"
          : a.improved_bullets.length >= 1
            ? "warn"
            : "fail",
      detail: "Cross-check bullets for metrics and strong verbs.",
    },
    {
      label: "Overall ATS index",
      status:
        a.ats_score >= 72
          ? "pass"
          : a.ats_score >= 55
            ? "warn"
            : "fail",
      detail: `Composite score ${Math.round(a.ats_score)}/100.`,
    },
  ];

  return {
    insights_unlocked: true,
    narrative_summary,
    ats_interpretation,
    job_readiness,
    strengths,
    weaknesses,
    missing_skills_highlight: [...a.missing_keywords],
    improvement_actions,
    quick_fix_checklist,
    common_ats_issues,
    qa_scorecard,
  };
}

/** Strip/limit insights for Free tier — server-enforced; UI may add blur for preview. */
export function gateCareerInsightsForFree(full: CareerInsights): CareerInsights {
  const trunc = (s: string, n: number) => {
    const t = s.trim();
    if (t.length <= n) return t;
    return `${t.slice(0, n - 1).trimEnd()}…`;
  };

  return {
    insights_unlocked: false,
    narrative_summary: trunc(full.narrative_summary, 220),
    ats_interpretation: "",
    job_readiness: "",
    strengths: full.strengths.slice(0, 2),
    weaknesses: [],
    missing_skills_highlight: full.missing_skills_highlight.slice(0, 4),
    improvement_actions: full.improvement_actions.slice(0, 1),
    quick_fix_checklist: full.quick_fix_checklist.slice(0, 3),
    common_ats_issues: full.common_ats_issues.slice(0, 1),
    qa_scorecard: full.qa_scorecard.slice(0, 2).map((r) => ({
      ...r,
      detail: trunc(r.detail, 80),
    })),
  };
}
