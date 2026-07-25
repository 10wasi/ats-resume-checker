import Link from "next/link";

const TRUST_ITEMS = [
  {
    title: "How ATS works",
    body: "Applicant tracking systems parse resumes into fields and search keywords—millions of deployments use similar matching rules.",
    href: "/how-ats-works",
    cta: "Learn ATS mechanics",
  },
  {
    title: "How AI scoring works",
    body: "Scores combine parse health, keyword overlap, and structure—weighted like common ATS filters, with plain-language fix lists.",
    href: "/how-we-score-resumes",
    cta: "Scoring methodology",
  },
  {
    title: "Privacy & no resume storage",
    body: "Uploads processed per request—not sold or kept for training. You control what you download and share.",
    href: "/privacy",
    cta: "Privacy policy",
  },
  {
    title: "Instant analysis",
    body: "Upload PDF or paste text—see parser preview, ATS score, and keyword gaps in minutes, no signup required.",
    href: "/free-ats-resume-checker",
    cta: "Run free scan",
  },
  {
    title: "Keyword matching reality",
    body: "Most ATS filters index exact tool names, certifications, and metrics from your experience bullets—mirror honest posting language.",
    href: "/resume-keyword-checker",
    cta: "Keyword checker",
  },
  {
    title: "Professional recommendations",
    body: "AI suggestions follow your text plus ATS rules—not generic templates. Review editorial policy and our algorithm.",
    href: "/our-algorithm",
    cta: "How analysis works",
  },
];

export function HomeTrustAuthoritySection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-slate-50/80 py-10 sm:py-12"
      aria-labelledby="trust-authority-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2
          id="trust-authority-heading"
          className="text-center font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
        >
          Why job seekers trust ResumeIQ
        </h2>
        <p className="mx-auto mt-2 max-w-2xl text-center text-sm text-slate-600">
          Transparent ATS education, instant scans, and privacy-first processing—built for better
          applications, not vanity scores.
        </p>
        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {TRUST_ITEMS.map((item) => (
            <li
              key={item.title}
              className="flex flex-col rounded-xl border border-slate-200/90 bg-white p-5 shadow-sm"
            >
              <h3 className="font-semibold text-slate-900">{item.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{item.body}</p>
              <Link
                href={item.href}
                className="mt-3 text-sm font-semibold text-[#16a34a] underline underline-offset-2"
              >
                {item.cta}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
