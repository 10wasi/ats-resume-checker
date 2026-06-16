import Link from "next/link";
import { RESUME_KEYWORDS } from "@/lib/content/resume-keywords/registry";

export function ResumeKeywordsGrid() {
  return (
    <ul className="not-prose mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {RESUME_KEYWORDS.map((entry) => (
        <li key={entry.slug}>
          <Link
            href={entry.path}
            className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
          >
            <span className="inline-flex w-fit rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
              Keywords
            </span>
            <h3 className="mt-3 font-display text-lg font-bold text-slate-900 group-hover:text-[#16a34a]">
              {entry.roleTitle}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              ATS skills, verbs, phrases & example bullets
            </p>
            <span className="mt-4 text-sm font-semibold text-[#16a34a]">
              View keywords →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
