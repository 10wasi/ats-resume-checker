import Link from "next/link";
import type { AtsAnalysisResult } from "@/lib/ats/types";
import { computeAtsPassLikelihood } from "@/lib/ats/compute-ats-pass-likelihood";

type Props = {
  analysis: AtsAnalysisResult;
  hasJobDescription?: boolean;
  className?: string;
};

type ReadinessRow = {
  label: string;
  status: "ready" | "attention" | "critical";
  detail: string;
};

function rowStatus(score: number, warnAt: number, critAt: number): ReadinessRow["status"] {
  if (score >= warnAt) return "ready";
  if (score >= critAt) return "attention";
  return "critical";
}

const STATUS_STYLES: Record<ReadinessRow["status"], string> = {
  ready: "bg-emerald-100 text-emerald-900",
  attention: "bg-amber-100 text-amber-950",
  critical: "bg-rose-100 text-rose-950",
};

export function AtsReadinessReport({
  analysis,
  hasJobDescription,
  className = "",
}: Props) {
  const atsScore = analysis.ats_score ?? 0;
  const formatIssues = analysis.formatting_issues.length;
  const missingKw = analysis.missing_keywords.length;
  const matchScore = analysis.job_match_score;

  const formatScore = Math.max(0, 100 - formatIssues * 18);
  const keywordScore =
    missingKw === 0
      ? 92
      : missingKw <= 3
        ? 72
        : missingKw <= 8
          ? 52
          : 32;

  const likelihood = computeAtsPassLikelihood(analysis, { hasJobDescription });

  const rows: ReadinessRow[] = [
    {
      label: "Overall ATS score",
      status: rowStatus(atsScore, 75, 55),
      detail: `${Math.round(atsScore)}% — structure, clarity, and baseline compatibility`,
    },
    {
      label: "Parse & format",
      status: rowStatus(formatScore, 70, 45),
      detail:
        formatIssues === 0
          ? "No major format flags detected"
          : `${formatIssues} format issue${formatIssues === 1 ? "" : "s"} to fix before upload`,
    },
    {
      label: "Keyword coverage",
      status: rowStatus(keywordScore, 70, 45),
      detail:
        missingKw === 0
          ? "No obvious keyword gaps in scan"
          : `${missingKw} missing keyword${missingKw === 1 ? "" : "s"} — add where you have proof`,
    },
  ];

  if (matchScore != null) {
    rows.push({
      label: "Job description match",
      status: rowStatus(matchScore, 70, 50),
      detail: `${Math.round(matchScore)}% overlap with pasted posting`,
    });
  }

  const roadmap = (
    analysis.career_insights?.quick_fix_checklist ??
    analysis.career_insights?.improvement_actions ??
    analysis.suggestions
  ).slice(0, 3);

  const overallStatus: ReadinessRow["status"] =
    likelihood.tone === "high"
      ? "ready"
      : likelihood.tone === "moderate"
        ? "attention"
        : "critical";

  return (
    <section
      className={`rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6 ${className}`}
      aria-labelledby="ats-readiness-heading"
    >
      <div className="flex flex-col gap-3 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
            ATS readiness report
          </p>
          <h3
            id="ats-readiness-heading"
            className="mt-1 font-display text-lg font-bold text-slate-900 sm:text-xl"
          >
            {likelihood.label}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            Snapshot of parse health, keywords, and match signals—not a hiring guarantee.
          </p>
        </div>
        <span
          className={`inline-flex shrink-0 self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${STATUS_STYLES[overallStatus]}`}
        >
          {overallStatus === "ready"
            ? "Submission ready"
            : overallStatus === "attention"
              ? "Needs polish"
              : "Fix before apply"}
        </span>
      </div>

      <ul className="mt-5 space-y-2">
        {rows.map((row) => (
          <li
            key={row.label}
            className="flex flex-col gap-1 rounded-xl border border-slate-100 bg-slate-50/80 px-4 py-3 sm:flex-row sm:items-center sm:justify-between"
          >
            <div>
              <p className="text-sm font-semibold text-slate-900">{row.label}</p>
              <p className="text-xs text-slate-600">{row.detail}</p>
            </div>
            <span
              className={`inline-flex w-fit rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase ${STATUS_STYLES[row.status]}`}
            >
              {row.status === "ready" ? "OK" : row.status === "attention" ? "Review" : "Fix"}
            </span>
          </li>
        ))}
      </ul>

      {roadmap.length > 0 ? (
        <div className="mt-5">
          <p className="text-sm font-semibold text-slate-900">Improvement roadmap</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-slate-700">
            {roadmap.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      ) : null}

      <p className="mt-4 text-xs text-slate-500">
        How scoring works:{" "}
        <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
          methodology
        </Link>
      </p>
    </section>
  );
}
