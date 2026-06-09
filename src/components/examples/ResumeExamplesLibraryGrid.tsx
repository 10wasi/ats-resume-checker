import Link from "next/link";
import { RESUME_EXAMPLES } from "@/lib/content/resume-examples/registry";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export function ResumeExamplesLibraryGrid() {
  return (
    <section className="not-prose" aria-labelledby="resume-examples-grid-heading">
      <div className="rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50/40 via-white to-white p-5 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
          By role
        </p>
        <h2
          id="resume-examples-grid-heading"
          className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Eight ATS-friendly resume examples
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Each sample includes a full example, why it works, ATS tips, and
          mistakes to avoid. Validate your own file in the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#16a34a] underline underline-offset-2"
          >
            ATS Resume Checker
          </Link>
          .
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {RESUME_EXAMPLES.map((ex, i) => (
            <li key={ex.slug}>
              <Link
                href={ex.path}
                className="group flex h-full flex-col rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Example {i + 1}
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-slate-900 group-hover:text-[#16a34a] sm:text-lg">
                  {ex.breadcrumbLabel}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {ex.ctr.primaryKeyword} with ATS optimization tips.
                </p>
                <span className="mt-4 text-sm font-semibold text-[#16a34a]">
                  View example →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
