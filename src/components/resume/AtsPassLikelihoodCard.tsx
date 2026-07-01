import type { AtsAnalysisResult } from "@/lib/ats/types";
import { computeAtsPassLikelihood } from "@/lib/ats/compute-ats-pass-likelihood";

type Props = {
  analysis: AtsAnalysisResult;
  hasJobDescription?: boolean;
  className?: string;
};

const TONE_STYLES = {
  high: "border-emerald-200 bg-emerald-50/80 text-emerald-950",
  moderate: "border-amber-200 bg-amber-50/80 text-amber-950",
  low: "border-orange-200 bg-orange-50/80 text-orange-950",
  critical: "border-rose-200 bg-rose-50/80 text-rose-950",
};

const BAR_STYLES = {
  high: "bg-emerald-500",
  moderate: "bg-amber-500",
  low: "bg-orange-500",
  critical: "bg-rose-500",
};

const FACTOR_STATUS_STYLES = {
  good: "border-emerald-200 bg-emerald-50/80 text-emerald-950",
  warn: "border-amber-200 bg-amber-50/80 text-amber-950",
  risk: "border-rose-200 bg-rose-50/80 text-rose-950",
};

export function AtsPassLikelihoodCard({
  analysis,
  hasJobDescription,
  className = "",
}: Props) {
  const likelihood = computeAtsPassLikelihood(analysis, {
    hasJobDescription,
  });

  return (
    <section
      className={`rounded-2xl border p-5 sm:p-6 ${TONE_STYLES[likelihood.tone]} ${className}`}
      aria-labelledby="ats-pass-likelihood-heading"
    >
      <div className="flex flex-col gap-4 sm:flex-row sm:items-start sm:justify-between">
        <div>
          <p className="text-[11px] font-bold uppercase tracking-wider opacity-80">
            ATS screening estimate
          </p>
          <h3
            id="ats-pass-likelihood-heading"
            className="mt-1 font-display text-lg font-bold sm:text-xl"
          >
            {likelihood.label}
          </h3>
          <p className="mt-2 text-sm leading-relaxed opacity-90">
            {likelihood.summary}
          </p>
          <p className="mt-2 text-xs opacity-75">
            Estimates automated screening signals—not interview or offer probability.
          </p>
        </div>
        <div className="flex shrink-0 flex-col items-center">
          <span className="font-display text-4xl font-bold tabular-nums">
            {likelihood.percent}%
          </span>
          <span className="text-xs font-semibold uppercase tracking-wide opacity-80">
            pass likelihood
          </span>
        </div>
      </div>
      <div className="mt-4 h-2 overflow-hidden rounded-full bg-white/60">
        <div
          className={`h-full rounded-full transition-all ${BAR_STYLES[likelihood.tone]}`}
          style={{ width: `${likelihood.percent}%` }}
        />
      </div>
      <ul className="mt-5 grid gap-2 sm:grid-cols-2" role="list">
        {likelihood.factors.map((f) => (
          <li
            key={f.name}
            className={`rounded-lg border px-3 py-2 text-xs leading-relaxed ${FACTOR_STATUS_STYLES[f.status]}`}
          >
            <span className="font-semibold">{f.name}</span>
            <span className="opacity-90"> — {f.detail}</span>
          </li>
        ))}
      </ul>
    </section>
  );
}
