const reasons = [
  {
    title: "Resume parser fails",
    body: "Columns and tables scramble extracted text — your experience never reaches recruiters.",
  },
  {
    title: "Keyword match too low",
    body: "ATS filters rank candidates who mirror posting language in experience bullets.",
  },
  {
    title: "Bullets lack proof",
    body: "Duty lists without metrics score low in resume review and human screening.",
  },
];

export function HomeWhyAtsRejectsSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-10 sm:py-12"
      aria-labelledby="why-rejects-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2
          id="why-rejects-heading"
          className="text-center font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
        >
          Why ATS rejects most resumes
        </h2>
        <ul className="mt-6 grid gap-3 sm:grid-cols-3">
          {reasons.map((r) => (
            <li
              key={r.title}
              className="rounded-xl border border-slate-200 bg-slate-50/50 p-4"
            >
              <h3 className="text-sm font-semibold text-slate-900">{r.title}</h3>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">{r.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
