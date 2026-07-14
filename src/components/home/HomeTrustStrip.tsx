import Link from "next/link";

export function HomeTrustStrip() {
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-8"
      aria-label="Trust and methodology"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <ul className="grid gap-4 text-sm text-slate-600 sm:grid-cols-2 lg:grid-cols-4">
          <li>
            <span className="font-semibold text-slate-900">Last updated:</span>{" "}
            July 2026
          </li>
          <li>
            <span className="font-semibold text-slate-900">By:</span> ResumeIQ editorial team
          </li>
          <li>
            <span className="font-semibold text-slate-900">Privacy:</span> Files processed per request —{" "}
            <Link href="/privacy" className="text-[#16a34a] underline">
              not sold or stored
            </Link>
          </li>
          <li>
            <span className="font-semibold text-slate-900">Scoring:</span>{" "}
            <Link href="/methodology" className="text-[#16a34a] underline">
              ATS methodology
            </Link>{" "}
            + AI-assisted review
          </li>
        </ul>
      </div>
    </section>
  );
}
