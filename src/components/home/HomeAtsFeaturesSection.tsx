const features = [
  {
    icon: "📊",
    title: "ATS score & resume parser test",
    body: "0–100 score plus parse preview — see exactly what hiring software extracts from your file.",
  },
  {
    icon: "🔑",
    title: "Resume keyword match",
    body: "Paste a job description to find missing terms and match % before you apply.",
  },
  {
    icon: "✨",
    title: "AI resume analysis",
    body: "Bullet rewrites and optimization tips based on your text — not generic templates.",
  },
  {
    icon: "✅",
    title: "Priority fix plan",
    body: "Ranked actions so you improve resume ATS score in the right order.",
  },
];

export function HomeAtsFeaturesSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-slate-50/60 py-10 sm:py-12"
      aria-labelledby="ats-features-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2
          id="ats-features-heading"
          className="text-center font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
        >
          Upload → score → AI analysis → improve
        </h2>
        <ul className="mt-8 grid gap-3 sm:grid-cols-2">
          {features.map((f) => (
            <li
              key={f.title}
              className="flex gap-3 rounded-xl border border-slate-200/90 bg-white p-4"
            >
              <span className="text-lg" aria-hidden>
                {f.icon}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{f.title}</h3>
                <p className="mt-0.5 text-sm leading-relaxed text-slate-600">{f.body}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
