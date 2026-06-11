import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

type Props = {
  title?: string;
  description?: string;
  buttonLabel?: string;
  href?: string;
};

export function CareerToolCta({
  title = "Run the free ATS Resume Checker",
  description = "Upload PDF or paste text—get score, keyword gaps, format flags, and a prioritized improvement plan in seconds.",
  buttonLabel = "Open ATS Resume Checker →",
  href = RESUME_CHECKER_PATH,
}: Props) {
  return (
    <div className="not-prose rounded-2xl border border-emerald-200/90 bg-gradient-to-br from-emerald-50/90 to-white p-6 sm:p-8">
      <p className="text-sm font-semibold uppercase tracking-wide text-emerald-800">
        Free tool
      </p>
      <p className="mt-2 font-display text-xl font-bold text-slate-900">{title}</p>
      <p className="mt-2 text-base leading-relaxed text-slate-700">{description}</p>
      <Link
        href={href}
        className="mt-5 inline-flex items-center justify-center rounded-xl bg-[#16a34a] px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition hover:bg-[#15803d]"
      >
        {buttonLabel}
      </Link>
    </div>
  );
}
