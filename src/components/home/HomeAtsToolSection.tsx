import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

export function HomeAtsToolSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-gradient-to-b from-slate-50 to-white py-12 sm:py-14"
      aria-labelledby="ats-tool-heading"
    >
      <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
        <h2
          id="ats-tool-heading"
          className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          Upload your resume — get your ATS score free
        </h2>
        <p className="mt-3 text-base text-slate-600">
          PDF, DOCX, or pasted text. Instant resume score checker — no account required.
        </p>

        <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center">
          <Link
            href={RESUME_CHECKER_PATH}
            className="btn-gradient px-8 text-base font-semibold"
          >
            Upload PDF or DOCX
          </Link>
          <Link
            href={`${RESUME_CHECKER_PATH}#paste`}
            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300"
          >
            Paste resume text
          </Link>
        </div>
      </div>
    </section>
  );
}
