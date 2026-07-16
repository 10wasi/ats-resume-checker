const steps = [
  {
    step: "1",
    title: "Upload & parser test",
    body: "PDF or DOCX — see what hiring software extracts before you apply.",
  },
  {
    step: "2",
    title: "ATS score & keyword match",
    body: "0–100 score plus missing terms vs any job description.",
  },
  {
    step: "3",
    title: "AI resume analysis",
    body: "Bullet rewrites from your text — not generic templates.",
  },
  {
    step: "4",
    title: "Priority fix plan",
    body: "Ranked actions to improve your resume ATS score fastest.",
  },
];

export function HomeAtsFeaturesSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-slate-50/60 py-8 sm:py-10"
      aria-labelledby="ats-features-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="ats-features-heading"
          className="text-center font-display text-lg font-bold tracking-tight text-slate-900 sm:text-xl"
        >
          Upload → score → AI analysis → improve
        </h2>
        <p className="mt-2 text-center text-sm text-slate-600">
          Scores parse health and keyword fit — not grammar alone.
        </p>
        <ol className="mt-6 grid gap-2 sm:grid-cols-2">
          {steps.map((s) => (
            <li
              key={s.step}
              className="flex gap-3 rounded-lg border border-slate-200/90 bg-white px-4 py-3"
            >
              <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-emerald-50 text-xs font-bold text-emerald-700">
                {s.step}
              </span>
              <div>
                <h3 className="text-sm font-semibold text-slate-900">{s.title}</h3>
                <p className="mt-0.5 text-sm leading-snug text-slate-600">{s.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
