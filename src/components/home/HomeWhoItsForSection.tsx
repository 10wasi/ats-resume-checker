import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Homepage — who the resume checker is for + interview outcome framing. */
export function HomeWhoItsForSection() {
  const audiences = [
    {
      title: "Active job seekers",
      body: "Validate every PDF before you mass apply—catch parse failures and keyword gaps in minutes.",
    },
    {
      title: "Career changers",
      body: "Test a new layout and keyword set before pivoting roles. Score moves prove the template works.",
    },
    {
      title: "Students & new grads",
      body: "Learn what ATS friendly means on your real file—not generic tips that ignore your layout.",
    },
    {
      title: "Global applicants",
      body: "Built for company portals worldwide—remote roles, international employers, and local ATS vendors.",
    },
  ];

  const outcomes = [
    "See what hiring software reads from your PDF",
    "Fix format before rewriting your entire career story",
    "Match each posting with job-description analysis",
    "Re-check after edits until flags are clear",
  ];

  return (
    <section
      className="border-b border-slate-200/80 bg-slate-50/50 py-16 sm:py-20"
      aria-labelledby="who-its-for-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-start">
          <div>
            <p className="section-eyebrow">Who it&apos;s for</p>
            <h2
              id="who-its-for-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              A resume checker for anyone who applies online
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              ResumeIQ helps you get more interviews by making your resume readable to software{" "}
              <em>and</em> recruiters—before silence turns into discouragement.
            </p>
            <ul className="mt-8 grid gap-4 sm:grid-cols-2">
              {audiences.map((a) => (
                <li
                  key={a.title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <h3 className="font-display font-bold text-slate-900">{a.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">{a.body}</p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-white p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-slate-900">
              What the tool does for you
            </h3>
            <ul className="mt-6 space-y-3">
              {outcomes.map((o) => (
                <li key={o} className="flex gap-3 text-sm text-slate-700 sm:text-base">
                  <span
                    className="mt-1.5 h-2 w-2 shrink-0 rounded-full bg-emerald-500"
                    aria-hidden
                  />
                  {o}
                </li>
              ))}
            </ul>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-6 text-center">
                Check resume free
              </Link>
              <Link
                href="/resume-score-checker"
                className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-800 transition hover:border-emerald-300"
              >
                Resume score guide
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
