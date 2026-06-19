import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Answers: why trust, vs competitors, unique value, after score. */
export function HomeWhyTrustSection() {
  const blocks = [
    {
      title: "Why trust ResumeIQ?",
      body: "Transparent scoring methodology, privacy-first processing, and free core analysis—no credit card wall on your first scan. We explain what ATS checks and what we do not claim.",
      href: "/methodology",
      cta: "Read methodology",
    },
    {
      title: "Better than paywalled checkers?",
      body: "Unlike tools that hide keyword gaps behind subscriptions, ResumeIQ gives ATS score, missing keywords, format flags, match analysis, and AI bullet suggestions in one free workflow.",
      href: "/ats-resume-checker",
      cta: "See how it works",
    },
    {
      title: "Unique value",
      body: "A connected platform—not a single score. Checker, resume match tool, keyword database, examples library, and guides link together so every scan leads to a clear next step.",
      href: "/career-success-hub",
      cta: "Explore tools",
    },
    {
      title: "After your score",
      body: "You get missing keywords, formatting issues, readability %, improvement checklist, example links, and one-click re-scan—so you improve and measure progress, not hit a dead end.",
      href: RESUME_CHECKER_PATH,
      cta: "Check resume score",
    },
  ];

  return (
    <section
      className="border-b border-slate-200/70 bg-white py-16 sm:py-20"
      aria-labelledby="why-trust-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Authority & transparency</p>
          <h2
            id="why-trust-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            A resume optimization tool you can verify—not just trust
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Built for job seekers worldwide who want honest{" "}
            <strong className="font-semibold text-slate-800">resume feedback</strong> before
            they apply—not vague “ATS tips.”
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2">
          {blocks.map((b) => (
            <li
              key={b.title}
              className="rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{b.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{b.body}</p>
              <Link
                href={b.href}
                className="mt-4 inline-block text-sm font-semibold text-[#16a34a] underline"
              >
                {b.cta} →
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export function HomeMethodologyPreviewSection() {
  const signals = [
    { label: "Parse health", detail: "Layout, headings, extractable contact" },
    { label: "Keyword proof", detail: "Skills in experience bullets—not dumps only" },
    { label: "Readability", detail: "Bullet structure and scan-friendly sections" },
    { label: "Match overlap", detail: "Job-specific keyword comparison when you paste a post" },
  ];

  return (
    <section
      className="border-b border-slate-200/70 bg-slate-900 py-16 text-white sm:py-20"
      aria-labelledby="methodology-preview-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            ATS methodology
          </p>
          <h2
            id="methodology-preview-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight sm:text-4xl"
          >
            How we score resumes (transparent)
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Scores reflect measurable signals—not interview predictions. Same parser patterns
            employers use worldwide.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {signals.map((s) => (
            <li
              key={s.label}
              className="rounded-xl border border-slate-700 bg-slate-800/60 px-4 py-4"
            >
              <p className="font-semibold text-white">{s.label}</p>
              <p className="mt-1 text-sm text-slate-400">{s.detail}</p>
            </li>
          ))}
        </ul>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/methodology" className="btn-gradient px-6">
            Full methodology
          </Link>
          <Link
            href="/how-ats-works"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-600 px-6 text-sm font-semibold text-white transition hover:border-slate-400"
          >
            How ATS works
          </Link>
        </div>
      </div>
    </section>
  );
}

/** Honest competitor positioning — no fake claims. */
export function HomeVsCompetitorsSection() {
  const rows = [
    { us: "Free ATS score & keyword scan", them: "Often paywalled after first view" },
    { us: "Resume match analyzer included", them: "Separate product or tier" },
    { us: "Keyword database + finder tools", them: "Limited without subscription" },
    { us: "Transparent methodology page", them: "Black-box scoring common" },
    { us: "Global job application focus", them: "Often US-centric messaging" },
  ];

  return (
    <section
      className="border-b border-slate-200/70 bg-white py-16 sm:py-20"
      aria-labelledby="vs-competitors-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Why ResumeIQ</p>
          <h2
            id="vs-competitors-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Best resume checker tool—without the subscription trap
          </h2>
          <p className="mt-4 text-slate-600">
            Compared to typical resume optimization platforms, ResumeIQ keeps core analysis
            free and connects every tool in one journey.
          </p>
        </div>
        <div className="mx-auto mt-10 max-w-3xl overflow-hidden rounded-2xl border border-slate-200">
          <table className="w-full text-left text-sm">
            <thead className="bg-slate-50 text-xs font-bold uppercase tracking-wider text-slate-500">
              <tr>
                <th className="px-5 py-3">ResumeIQ</th>
                <th className="px-5 py-3">Typical paid checker</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-100">
              {rows.map((row) => (
                <tr key={row.us}>
                  <td className="px-5 py-3 font-medium text-slate-900">{row.us}</td>
                  <td className="px-5 py-3 text-slate-600">{row.them}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <p className="mx-auto mt-6 max-w-xl text-center text-xs text-slate-500">
          We are not affiliated with Jobscan, Resume Worded, Teal, Enhancv, or Kickresume.
          Comparison reflects common market patterns—not live feature audits.
        </p>
      </div>
    </section>
  );
}

export function HomeToolEcosystemSection() {
  const tools = [
    { name: "ATS Resume Checker", href: RESUME_CHECKER_PATH },
    { name: "Resume Match Tool", href: "/resume-match-analyzer" },
    { name: "Resume Keywords Database", href: "/resume-keywords" },
    { name: "Resume Examples", href: "/resume-examples" },
    { name: "ATS Guides", href: "/ats-guide" },
    { name: "AI Resume Suggestions", href: "/ai-resume-rewrite" },
  ];

  return (
    <section
      className="border-b border-slate-200/70 bg-slate-50/80 py-14 sm:py-16"
      aria-labelledby="ecosystem-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <h2
          id="ecosystem-heading"
          className="text-center font-display text-2xl font-bold text-slate-900 sm:text-3xl"
        >
          Tool ecosystem—one resume optimization platform
        </h2>
        <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-slate-600">
          Every page links to the tools you need next. No scattered logins or duplicate checkers.
        </p>
        <ul className="mt-8 flex flex-wrap justify-center gap-3">
          {tools.map((t) => (
            <li key={t.href}>
              <Link
                href={t.href}
                className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-800 shadow-sm transition hover:border-emerald-300 hover:text-[#16a34a]"
              >
                {t.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
