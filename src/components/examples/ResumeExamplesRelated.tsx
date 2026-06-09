import Link from "next/link";
import {
  getRelatedResumeExamples,
  RESUME_EXAMPLES_LIBRARY_PATH,
} from "@/lib/content/resume-examples/registry";

type Props = {
  currentSlug: string;
  heading?: string;
};

export function ResumeExamplesRelated({
  currentSlug,
  heading = "More resume examples in the library",
}: Props) {
  const examples = getRelatedResumeExamples(currentSlug, 4);

  return (
    <nav
      className="not-prose mt-14 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-8"
      aria-label="Related resume examples"
    >
      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
        Resume Examples Library
      </p>
      <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        {heading}
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Browse all roles in the{" "}
        <Link
          href={RESUME_EXAMPLES_LIBRARY_PATH}
          className="font-semibold text-[#16a34a] underline underline-offset-2"
        >
          Resume Examples Library
        </Link>
        .
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {examples.map((ex) => (
          <li key={ex.slug}>
            <Link
              href={ex.path}
              className="group flex h-full flex-col rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
            >
              <span className="font-display text-sm font-bold text-slate-900 group-hover:text-[#16a34a]">
                {ex.ctr.h1.replace(" (ATS-Friendly)", "")}
              </span>
              <span className="mt-1 flex-1 text-xs leading-relaxed text-slate-600">
                {ex.seo.description}
              </span>
              <span className="mt-3 text-xs font-semibold text-[#16a34a]">
                View example →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
