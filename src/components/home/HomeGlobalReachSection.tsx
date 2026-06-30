import Link from "next/link";

const REGIONS = [
  { name: "Corporate employers", note: "High-volume applicant tracking portals worldwide" },
  { name: "Remote & hybrid roles", note: "Global teams using the same ATS stacks" },
  { name: "Public sector", note: "Structured applications with strict parsing rules" },
  { name: "Multinational hiring", note: "Cross-border postings and international candidates" },
  { name: "Growing job markets", note: "Online application pipelines expanding globally" },
  { name: "Every region", note: "Same parser logic—match language to each posting honestly" },
];

/** Homepage global reach — not US/UK-only positioning. */
export function HomeGlobalReachSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-slate-900 py-14 text-white sm:py-16"
      aria-labelledby="global-reach-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Global job applications
          </p>
          <h2
            id="global-reach-heading"
            className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl"
          >
            Built for job seekers worldwide—not one country
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-300 sm:text-lg">
            Applicant tracking systems power hiring across regions. ResumeIQ helps you
            optimize for parsers, keywords, and recruiter skim patterns whether you
            apply locally, internationally, or remotely.
          </p>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {REGIONS.map((r) => (
            <li
              key={r.name}
              className="rounded-xl border border-slate-700 bg-slate-800/60 px-5 py-4"
            >
              <p className="font-semibold text-white">{r.name}</p>
              <p className="mt-1 text-sm text-slate-400">{r.note}</p>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-slate-400">
          Use employer spelling and title norms for your target market—our guides focus
          on universal ATS rules that apply everywhere.{" "}
          <Link href="/methodology" className="font-semibold text-emerald-400 underline">
            Read our methodology
          </Link>
          .
        </p>
      </div>
    </section>
  );
}
