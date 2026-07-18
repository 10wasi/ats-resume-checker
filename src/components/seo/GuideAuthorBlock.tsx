import Link from "next/link";

/** Compact author / expertise block for E-E-A-T on guides and tools. */
export function GuideAuthorBlock() {
  return (
    <div className="not-prose flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm">
      <div
        className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-bold text-white"
        aria-hidden
      >
        RQ
      </div>
      <div className="min-w-0 flex-1 text-sm leading-relaxed text-slate-700">
        <p className="font-semibold text-slate-900">
          Written by{" "}
          <Link href="/about" className="text-[#16a34a] underline">
            ResumeIQ Editorial
          </Link>
        </p>
        <p className="mt-1">
          Career content team focused on applicant tracking systems, resume parsing, and ethical
          keyword placement. Reviewed against{" "}
          <Link href="/how-we-score-resumes" className="font-semibold text-[#16a34a] underline">
            our scoring methodology
          </Link>{" "}
          and{" "}
          <Link href="/editorial-policy" className="font-semibold text-[#16a34a] underline">
            editorial policy
          </Link>
          .
        </p>
        <p className="mt-2 text-xs text-slate-500">
          Sources: SHRM hiring workflow research, LinkedIn Global Talent Trends (recruiter skim
          time), and parse testing on real PDF/DOCX exports—not affiliate claims from ATS vendors.
        </p>
      </div>
    </div>
  );
}
