import type { AtsAnalysisResult } from "@/lib/ats/types";

type Item = {
  label: string;
  detail: string;
  status: "included" | "partial" | "add-jd";
};

function buildItems(analysis: AtsAnalysisResult, showJobMatch: boolean): Item[] {
  const hasJd = showJobMatch && analysis.job_match_score != null;
  const hasKeywords =
    analysis.missing_keywords.length > 0 || (analysis.matched_keywords?.length ?? 0) > 0;
  const hasFormat = analysis.formatting_issues.length > 0;
  const hasSkills =
    (analysis.detected_skills?.length ?? 0) > 0 ||
    (analysis.career_insights?.missing_skills_highlight?.length ?? 0) > 0;
  const hasChecklist =
    (analysis.career_insights?.quick_fix_checklist?.length ?? 0) > 0 ||
    analysis.suggestions.length > 0;
  const hasSummary =
    Boolean(analysis.section_feedback?.summary) ||
    Boolean(analysis.career_insights?.narrative_summary);
  const hasActionVerbs =
    (analysis.ai_resume_improvements?.action_verbs?.length ?? 0) > 0;
  const hasGrammar = analysis.grammar_issues.length > 0;
  const hasWeakBullets =
    (analysis.ai_resume_improvements?.experience_bullets?.length ?? 0) > 0 ||
    analysis.improved_bullets.length > 0;
  const hasMissingSections = (analysis.missing_sections?.length ?? 0) > 0;
  const hasJdMatch = hasJd && analysis.keyword_match_detail != null;

  return [
    {
      label: "Overall resume score",
      detail: `${Math.round(analysis.ats_score)}/100 ATS composite`,
      status: "included" as const,
    },
    {
      label: "ATS compatibility",
      detail: analysis.ats_compatibility_rating?.label ?? "Compatibility rating",
      status: "included" as const,
    },
    {
      label: "Keyword match",
      detail: hasJdMatch
        ? `${analysis.keyword_match_detail!.coverage_percent}% posting overlap`
        : hasJd
          ? "Match score in report"
          : "Add job description for match %",
      status: hasJdMatch ? ("included" as const) : ("add-jd" as const),
    },
    {
      label: "Missing sections",
      detail: hasMissingSections
        ? `${analysis.missing_sections!.join(", ")} not detected`
        : "Experience, skills, education found",
      status: hasMissingSections ? ("included" as const) : ("included" as const),
    },
    {
      label: "Missing keywords",
      detail: hasKeywords
        ? `${analysis.missing_keywords.length} gaps flagged`
        : hasJd
          ? "No major gaps detected"
          : "Add job description for tailored gaps",
      status: hasJd ? "included" : "add-jd",
    },
    {
      label: "Formatting problems",
      detail: hasFormat
        ? `${analysis.formatting_issues.length} layout flags`
        : "No major format flags",
      status: "included",
    },
    {
      label: "Skills analysis",
      detail: hasSkills ? "Detected skills & gaps listed" : "Skills scan in report",
      status: hasSkills ? "included" : "partial",
    },
    {
      label: "Weak bullet points",
      detail: hasWeakBullets ? "Bullets flagged for stronger impact" : "No weak bullets flagged",
      status: hasWeakBullets ? "included" : "partial",
    },
    {
      label: "Grammar & clarity",
      detail: hasGrammar
        ? `${analysis.grammar_issues.length} wording fixes`
        : "No grammar flags",
      status: "included",
    },
    {
      label: "Resume summary review",
      detail: hasSummary ? "Section feedback included" : "Summary notes below",
      status: hasSummary ? "included" : "partial",
    },
    {
      label: "Action verbs",
      detail: hasActionVerbs ? "Tailored verb list in AI section" : "See improved bullets",
      status: hasActionVerbs ? "included" : "partial",
    },
    {
      label: "Improvement checklist",
      detail: hasChecklist ? "Priority fixes ordered" : "Suggestions in report",
      status: hasChecklist ? "included" : "partial",
    },
    {
      label: "Job match score",
      detail: hasJd
        ? `${Math.round(analysis.job_match_score!)}% vs posting`
        : "Paste JD on next run for match %",
      status: hasJd ? "included" : "add-jd",
    },
    {
      label: "Download reports",
      detail: "Full text + PDF export in toolbar above",
      status: "included",
    },
  ];
}

const statusStyles = {
  included: "bg-emerald-100 text-emerald-900 ring-emerald-200",
  partial: "bg-slate-100 text-slate-800 ring-slate-200",
  "add-jd": "bg-amber-100 text-amber-950 ring-amber-200",
};

const statusLabel = {
  included: "Included",
  partial: "See below",
  "add-jd": "Add JD",
};

/** At-a-glance index so users never see only a score. */
export function AnalysisReportIndex({
  analysis,
  showJobMatch,
}: {
  analysis: AtsAnalysisResult;
  showJobMatch: boolean;
}) {
  const items = buildItems(analysis, showJobMatch);

  return (
    <section
      className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 to-white p-5 shadow-soft sm:p-6"
      aria-labelledby="report-index-heading"
    >
      <h3
        id="report-index-heading"
        className="font-display text-lg font-bold text-slate-900 sm:text-xl"
      >
        Your complete analysis — not just a score
      </h3>
      <p className="mt-2 text-sm text-slate-600">
        Every section below is included in this report. Scroll for details or download the
        full export.
      </p>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2" role="list">
        {items.map((item) => (
          <li
            key={item.label}
            className="flex items-start justify-between gap-3 rounded-xl border border-white/80 bg-white/90 px-3 py-3"
          >
            <div className="min-w-0">
              <p className="text-sm font-semibold text-slate-900">{item.label}</p>
              <p className="mt-0.5 text-xs text-slate-600">{item.detail}</p>
            </div>
            <span
              className={`shrink-0 rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1 ${statusStyles[item.status]}`}
            >
              {statusLabel[item.status]}
            </span>
          </li>
        ))}
      </ul>
    </section>
  );
}
