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

const W = { skills: 30, experience: 25, ats: 20, formatting: 15, education: 10 } as const;

function pctOfMax(points: number, max: number): number {
  return Math.round((points / max) * 100);
}

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
  const likelihood = computeAtsPassLikelihood(analysis, { hasJobDescription });
  const b = analysis.score_breakdown;

  const rows: ReadinessRow[] = b
    ? [
        {
          label: "Skills coverage",
          status: rowStatus(pctOfMax(b.skills, W.skills), 70, 50),
          detail: `${b.skills}/${W.skills} pts — tools and terms parsers can index`,
        },
        {
          label: "Experience depth",
          status: rowStatus(pctOfMax(b.experience, W.experience), 70, 50),
          detail: `${b.experience}/${W.experience} pts — bullets, tenure, and impact signals`,
        },
        {
          label: "ATS keyword match",
          status: rowStatus(pctOfMax(b.ats, W.ats), 70, 50),
          detail: `${b.ats}/${W.ats} pts — structure and posting language overlap`,
        },
        {
          label: "Formatting quality",
          status: rowStatus(pctOfMax(b.formatting, W.formatting), 70, 45),
          detail: `${b.formatting}/${W.formatting} pts — layout and export parse health`,
        },
        {
          label: "Education relevance",
          status: rowStatus(pctOfMax(b.education, W.education), 60, 40),
          detail: `${b.education}/${W.education} pts — credentials section detected`,
        },
        {
          label: "Readability & structure",
          status: rowStatus(analysis.readability_score, 65, 45),
          detail: `${Math.round(analysis.readability_score)}/100 — scan-friendly layout`,
        },
      ]
    : [
        {
          label: "Overall ATS score",
          status: rowStatus(analysis.ats_score, 75, 55),
          detail: `${Math.round(analysis.ats_score)}/100 composite`,
        },
        {
          label: "Readability & structure",
          status: rowStatus(analysis.readability_score, 65, 45),
          detail: `${Math.round(analysis.readability_score)}/100`,
        },
      ];

  if (analysis.job_match_score != null) {
    rows.push({
      label: "Job description match",
      status: rowStatus(analysis.job_match_score, 70, 50),
      detail: `${Math.round(analysis.job_match_score)}% overlap with pasted posting`,
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
            Interview readiness estimate
          </p>
          <h3
            id="ats-readiness-heading"
            className="mt-1 font-display text-lg font-bold text-slate-900 sm:text-xl"
          >
            {likelihood.percent}% — {likelihood.label}
          </h3>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">{likelihood.summary}</p>
        </div>
        <span
          className={`inline-flex shrink-0 self-start rounded-full px-3 py-1 text-xs font-bold uppercase tracking-wide ${STATUS_STYLES[overallStatus]}`}
        >
          {overallStatus === "ready"
            ? "Strong signals"
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
          <p className="text-sm font-semibold text-slate-900">Top priority fixes</p>
          <ol className="mt-2 list-decimal space-y-1.5 pl-5 text-sm text-slate-700">
            {roadmap.map((step) => (
              <li key={step}>{step}</li>
            ))}
          </ol>
        </div>
      ) : null}

      <p className="mt-4 text-xs text-slate-500">
        Not a hiring guarantee.{" "}
        <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
          How scores are calculated
        </Link>
      </p>
    </section>
  );
}
