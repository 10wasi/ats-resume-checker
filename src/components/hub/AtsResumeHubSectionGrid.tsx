import Link from "next/link";
import { ATS_HUB_SECTIONS } from "@/lib/content/ats-resume-hub-sections";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export function AtsResumeHubSectionGrid() {
  return (
    <section
      className="not-prose"
      aria-labelledby="hub-sections-heading"
    >
      <div className="rounded-2xl border border-emerald-200/70 bg-gradient-to-br from-emerald-50/40 via-white to-white p-5 sm:p-8">
        <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
          Hub index
        </p>
        <h2
          id="hub-sections-heading"
          className="mt-2 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Nine paths to an ATS friendly resume
        </h2>
        <p className="mt-3 max-w-3xl text-sm leading-relaxed text-slate-600 sm:text-base">
          Every section links to a guide, tool, or checklist. Start with the{" "}
          <Link
            href={RESUME_CHECKER_PATH}
            className="font-semibold text-[#16a34a] underline underline-offset-2"
          >
            ATS Resume Checker
          </Link>
          , then follow the path that matches your problem.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {ATS_HUB_SECTIONS.map((section, i) => (
            <li key={section.id}>
              <Link
                href={section.href}
                className="group flex h-full flex-col rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400">
                  Section {i + 1}
                </span>
                <h3 className="mt-2 font-display text-base font-bold text-slate-900 group-hover:text-[#16a34a] sm:text-lg">
                  {section.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {section.description}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#16a34a]">
                  {section.cta} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
