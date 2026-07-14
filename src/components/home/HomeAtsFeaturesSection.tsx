const features = [
  {
    icon: "📊",
    title: "ATS resume score",
    body: "0–100 compatibility rating based on parse health, structure, and keyword coverage.",
  },
  {
    icon: "🔑",
    title: "Keyword analysis",
    body: "See missing terms vs any job description — fix gaps before you apply.",
  },
  {
    icon: "📐",
    title: "Format check",
    body: "Flags columns, headers, fonts, and export issues that break resume scanners.",
  },
  {
    icon: "🎯",
    title: "Job match %",
    body: "Paste a posting to get resume match score and role-specific keyword overlap.",
  },
  {
    icon: "✨",
    title: "AI suggestions",
    body: "Bullet rewrites and resume optimization tips tailored to your text — not generic templates.",
  },
  {
    icon: "✅",
    title: "Priority fix plan",
    body: "Ranked action list so you fix what moves your resume ATS score fastest.",
  },
];

export function HomeAtsFeaturesSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-slate-50/60 py-14 sm:py-16"
      aria-labelledby="ats-features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Resume scanner outputs</p>
          <h2
            id="ats-features-heading"
            className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
          >
            Everything in your ATS resume review
          </h2>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f) => (
            <li
              key={f.title}
              className="flex gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm"
            >
              <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-lg ring-1 ring-slate-200/80">
                {f.icon}
              </span>
              <div>
                <h3 className="font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-slate-600">{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
