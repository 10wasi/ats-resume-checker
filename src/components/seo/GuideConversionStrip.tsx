import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Triple CTA strip — primary conversion paths without redesign. */
export function GuideConversionStrip({ className = "my-12" }: { className?: string }) {
  return (
    <div
      className={`not-prose flex flex-col gap-3 rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/80 to-white p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6 ${className}`}
    >
      <div className="max-w-md">
        <p className="text-xs font-bold uppercase tracking-wider text-emerald-800">
          Ready to apply?
        </p>
        <p className="mt-1 text-sm text-slate-700">
          Run a free AI resume scan — see ATS score, parser health, and keyword gaps in minutes.
        </p>
      </div>
      <div className="flex flex-col gap-2 sm:flex-row sm:flex-wrap sm:justify-end">
        <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-5 py-2.5 text-center text-sm">
          Check Resume
        </Link>
        <Link
          href="/how-to-improve-resume-score"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-emerald-300"
        >
          Improve Resume
        </Link>
        <Link
          href="/complete-guide-ats-resume-optimization"
          className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-5 py-2.5 text-sm font-semibold text-slate-800 hover:border-emerald-300"
        >
          Read ATS Guide
        </Link>
      </div>
    </div>
  );
}
