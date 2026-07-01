import Link from "next/link";
import type { AtsAnalysisResult } from "@/lib/ats/types";
import { buildResultRecommendations } from "@/lib/ats/build-result-recommendations";
import { computeAtsPassLikelihood } from "@/lib/ats/compute-ats-pass-likelihood";

type Props = {
  analysis: AtsAnalysisResult;
  showJobMatch: boolean;
};

const READINESS_STYLES = {
  high: "bg-emerald-100 text-emerald-900 ring-emerald-200",
  moderate: "bg-amber-100 text-amber-950 ring-amber-200",
  low: "bg-orange-100 text-orange-950 ring-orange-200",
  critical: "bg-rose-100 text-rose-950 ring-rose-200",
};

/** Recruiter + score context surfaced above the fold — not buried mid-report. */
export function AnalysisScoreContextCard({ analysis, showJobMatch }: Props) {
  const hasJd = showJobMatch && analysis.job_match_score != null;
  const recs = buildResultRecommendations(analysis, { hasJobDescription: hasJd });
  const likelihood = computeAtsPassLikelihood(analysis, { hasJobDescription: hasJd });

  return (
    <section
      className="rounded-2xl border border-zinc-200/90 bg-gradient-to-br from-white via-slate-50/80 to-emerald-50/30 p-5 shadow-soft sm:p-6"
      aria-labelledby="score-context-heading"
    >
      <div className="flex flex-col gap-4 lg:flex-row lg:items-start lg:justify-between">
        <div className="min-w-0 flex-1">
          <p className="text-[11px] font-bold uppercase tracking-wider text-zinc-500">
            Recruiter &amp; ATS perspective
          </p>
          <h3
            id="score-context-heading"
            className="mt-1 font-display text-lg font-bold text-zinc-950 sm:text-xl"
          >
            Why this score matters
          </h3>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">{recs.whyScoreMatters}</p>
          <p className="mt-3 text-sm leading-relaxed text-zinc-700">
            <span className="font-semibold text-zinc-900">Recruiter skim: </span>
            {recs.recruiterNote}
          </p>
          {recs.roleRelevanceNote ? (
            <p className="mt-3 text-sm leading-relaxed text-zinc-600">
              <span className="font-semibold text-zinc-800">Role fit: </span>
              {recs.roleRelevanceNote}
            </p>
          ) : null}
        </div>
        <div className="shrink-0 rounded-2xl border border-white/80 bg-white/90 p-5 shadow-sm lg:max-w-[220px]">
          <p className="text-[10px] font-bold uppercase tracking-wider text-zinc-500">
            Estimated interview readiness
          </p>
          <p className="mt-2 font-display text-4xl font-bold tabular-nums text-zinc-950">
            {likelihood.percent}%
          </p>
          <p className="mt-1 text-xs font-semibold text-zinc-700">{likelihood.label}</p>
          <p className="mt-2 text-xs leading-relaxed text-zinc-500">
            Based on ATS compatibility, structure, keywords, and format—not a hiring guarantee.
          </p>
          <span
            className={`mt-3 inline-flex rounded-full px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide ring-1 ${READINESS_STYLES[likelihood.tone]}`}
          >
            ATS risk: {likelihood.tone}
          </span>
        </div>
      </div>
      <p className="mt-4 text-xs text-zinc-500">
        Scoring limits &amp; methodology:{" "}
        <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
          how scores are calculated
        </Link>
      </p>
    </section>
  );
}
