import type { JobMatchFix } from "@/lib/ats/build-job-match-report";

type Props = {
  fixes: JobMatchFix[];
  suggestions: string[];
};

/** Actionable improvement checklist from priority fixes + rule suggestions. */
export function JobMatchImprovementChecklist({ fixes, suggestions }: Props) {
  const extra = suggestions.slice(0, 3).filter(
    (s) => !fixes.some((f) => f.detail.includes(s) || f.title.includes(s))
  );

  return (
    <section className="rounded-2xl border border-brand-200/70 bg-gradient-to-br from-brand-50/30 to-white p-5 shadow-soft sm:p-6">
      <h3 className="font-display text-lg font-semibold text-zinc-950">
        Actionable improvement checklist
      </h3>
      <p className="mt-1 text-sm text-zinc-600">
        Work top to bottom on this posting—re-run the analyzer after each export change.
      </p>
      <ol className="mt-5 space-y-3">
        {fixes.map((fix, i) => (
          <li
            key={fix.title}
            className="flex gap-3 rounded-xl border border-zinc-100 bg-white p-4"
          >
            <span
              className="flex h-7 w-7 shrink-0 items-center justify-center rounded-lg bg-brand-600 text-xs font-bold text-white"
              aria-hidden
            >
              {i + 1}
            </span>
            <div>
              <p className="text-sm font-semibold text-zinc-900">{fix.title}</p>
              <p className="mt-1 text-sm text-zinc-600">{fix.detail}</p>
            </div>
          </li>
        ))}
        {extra.map((item) => (
          <li
            key={item}
            className="flex gap-3 rounded-xl border border-dashed border-zinc-200 bg-zinc-50/50 p-4"
          >
            <span className="mt-0.5 text-emerald-600" aria-hidden>
              ✓
            </span>
            <p className="text-sm text-zinc-700">{item}</p>
          </li>
        ))}
      </ol>
    </section>
  );
}
