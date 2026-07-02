import Link from "next/link";

/** Compact EEAT block for guide and landing pages. */
export function GuideTrustBlock() {
  return (
    <aside
      className="not-prose rounded-2xl border border-slate-200/90 bg-slate-50/70 p-5 sm:p-6"
      aria-label="How ResumeIQ creates this guide"
    >
      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
        Trust &amp; transparency
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">
        ResumeIQ guides are written for job seekers worldwide—not keyword-stuffed
        filler. Scoring uses parser signals, keyword overlap, and format checks
        described in our{" "}
        <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
          methodology
        </Link>
        . Limits and editorial standards are in{" "}
        <Link href="/editorial-policy" className="font-semibold text-[#16a34a] underline">
          editorial policy
        </Link>
        .
      </p>
      <ul className="mt-3 flex flex-wrap gap-x-4 gap-y-1 text-xs font-semibold text-slate-600">
        <li>
          <Link href="/how-resume-analysis-works" className="text-[#16a34a] underline">
            How analysis works
          </Link>
        </li>
        <li>
          <Link href="/privacy" className="text-[#16a34a] underline">
            Privacy
          </Link>
        </li>
        <li>
          <Link href="/about" className="text-[#16a34a] underline">
            About ResumeIQ
          </Link>
        </li>
      </ul>
    </aside>
  );
}
