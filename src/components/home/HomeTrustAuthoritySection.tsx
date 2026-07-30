import Link from "next/link";

/** Compact ATS education + trust — replaces the 6-card authority grid on homepage. */
const BRIEF_ITEMS = [
  {
    title: "How ATS reads resumes",
    body: "Applicant tracking systems extract text, index keywords, and rank candidates before a recruiter opens your file.",
    href: "/how-ats-works",
    cta: "How ATS works",
  },
  {
    title: "What your ATS score means",
    body: "Scores reflect parse health, keyword overlap, and structure—not a guarantee any employer uses identical weighting.",
    href: "/ats-score-explained",
    cta: "Score bands explained",
  },
  {
    title: "How AI analysis works",
    body: "Suggestions come from your uploaded text plus published scoring rules—not generic templates. Reviewed by our Editorial Team.",
    href: "/how-resume-analysis-works",
    cta: "Analysis pipeline",
  },
  {
    title: "Privacy & no resume storage",
    body: "Files are processed for your request. We do not persist uploads in a long-term database or sell resume data.",
    href: "/privacy",
    cta: "Privacy policy",
  },
];

export function HomeTrustAuthoritySection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-slate-50/80 py-8 sm:py-10"
      aria-labelledby="trust-authority-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2
          id="trust-authority-heading"
          className="text-center font-display text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
        >
          How the checker works — and what we do with your file
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-2">
          {BRIEF_ITEMS.map((item) => (
            <li
              key={item.title}
              className="rounded-xl border border-slate-200/90 bg-white p-4 shadow-sm"
            >
              <h3 className="text-sm font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-slate-600">{item.body}</p>
              <Link
                href={item.href}
                className="mt-2 inline-block text-sm font-semibold text-[#16a34a] underline underline-offset-2"
              >
                {item.cta}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-slate-500">
          <Link href="/review-process" className="underline hover:text-slate-700">
            Content review process
          </Link>
          {" · "}
          <Link href="/methodology" className="underline hover:text-slate-700">
            Scoring methodology
          </Link>
        </p>
      </div>
    </section>
  );
}
