import type { AtsAnalysisResult } from "@/lib/ats/types";

/** Resume structure metrics from parser — competitor-style transparency. */
export function AnalysisStructureStats({ analysis }: { analysis: AtsAnalysisResult }) {
  const stats = analysis.resume_structure_stats;
  if (!stats) return null;

  const metricPct =
    stats.bulletCount > 0
      ? Math.round((stats.bulletsWithMetrics / stats.bulletCount) * 100)
      : 0;

  const items = [
    {
      label: "Experience bullets",
      value: String(stats.bulletCount),
      why: "Parsers index bullet text for keyword search—too few bullets hide your impact.",
    },
    {
      label: "Bullets with metrics",
      value: `${stats.bulletsWithMetrics} (${metricPct}%)`,
      why: "Recruiters and ATS both favor numbers—scope, %, revenue, or volume where truthful.",
    },
    {
      label: "Years of experience",
      value:
        stats.estimatedYearsExperience > 0
          ? `~${stats.estimatedYearsExperience} yrs`
          : "Not detected",
      why: "Tenure signals help filters match seniority to the posting.",
    },
    ...(stats.jdCoveragePercent != null
      ? [
          {
            label: "Posting keyword overlap",
            value: `${stats.jdCoveragePercent}%`,
            why: "How much of the job description language appears in your resume text.",
          },
        ]
      : []),
  ];

  return (
    <section
      className="rounded-2xl border border-zinc-200/90 bg-white p-5 shadow-soft sm:p-6"
      aria-labelledby="structure-stats-heading"
    >
      <h3
        id="structure-stats-heading"
        className="font-display text-lg font-semibold text-zinc-950"
      >
        Resume structure analysis
      </h3>
      <p className="mt-1 text-sm text-zinc-600">
        Parser-derived signals—what hiring software can actually measure from your file.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li
            key={item.label}
            className="rounded-xl border border-zinc-100 bg-zinc-50/60 px-4 py-3"
          >
            <div className="flex items-baseline justify-between gap-2">
              <p className="text-sm font-semibold text-zinc-900">{item.label}</p>
              <p className="text-sm font-bold tabular-nums text-emerald-800">{item.value}</p>
            </div>
            <p className="mt-1.5 text-xs leading-relaxed text-zinc-600">
              <span className="font-medium text-zinc-700">Why: </span>
              {item.why}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
