import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Homepage — global audiences + interview outcome framing. */
export function HomeWhoItsForSection() {
  const audiences = [
    {
      title: "Students & fresh graduates",
      body: "Learn what ATS friendly means on your real file—not generic tips that ignore your layout.",
    },
    {
      title: "Experienced professionals",
      body: "Validate every PDF before you apply—catch parse failures and keyword gaps in minutes.",
    },
    {
      title: "Career changers",
      body: "Test a new layout and keyword set before pivoting roles. Score moves prove the template works.",
    },
    {
      title: "Remote workers",
      body: "Tailor language to each posting—match score shows overlap before you submit internationally.",
    },
    {
      title: "Freelancers & contractors",
      body: "Turn project history into parser-friendly bullets recruiters can skim in seconds.",
    },
    {
      title: "Executives & senior hires",
      body: "Keep impact on page one—summary and experience feedback tuned for leadership roles.",
    },
    {
      title: "International applicants",
      body: "Built for employer portals worldwide—match spelling and titles to each posting honestly.",
    },
    {
      title: "Government & public sector",
      body: "Plain-text structure and standard headings help strict applicant systems read your file.",
    },
    {
      title: "Internship seekers",
      body: "Strengthen early-career bullets with action verbs and skills employers search for.",
    },
    {
      title: "Active job seekers",
      body: "Re-check after every edit until format flags clear and keyword match improves.",
    },
    {
      title: "CV & resume users",
      body: "Same resume scanner whether your market calls it a CV or resume—one upload, full analysis.",
    },
    {
      title: "Anyone applying online",
      body: "If you submit through a portal, you are likely filtered by applicant tracking software first.",
    },
  ];

  const outcomes = [
    "See what hiring software reads from your PDF",
    "Fix format before rewriting your entire career story",
    "Match each posting with job-description analysis",
    "Get why, how, and expected impact on every recommendation",
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
              A resume checker for every candidate, everywhere
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              Whether you are a student, executive, career changer, or remote applicant—ResumeIQ
              helps you pass applicant tracking systems and earn the recruiter skim that follows.
            </p>
            <ul className="mt-8 grid gap-3 sm:grid-cols-2">
              {audiences.map((a) => (
                <li
                  key={a.title}
                  className="rounded-2xl border border-slate-200 bg-white p-4 shadow-sm"
                >
                  <h3 className="font-display text-sm font-bold text-slate-900">{a.title}</h3>
                  <p className="mt-1.5 text-xs leading-relaxed text-slate-600 sm:text-sm">
                    {a.body}
                  </p>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-2xl border border-emerald-200/80 bg-gradient-to-br from-emerald-50/90 to-white p-6 sm:p-8">
            <h3 className="font-display text-xl font-bold text-slate-900">
              What happens after you check your resume
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
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:flex-wrap">
              <Link href={RESUME_CHECKER_PATH} className="btn-gradient w-full px-6 sm:w-auto">
                Run free resume scan
              </Link>
              <Link
                href="/resume-score-checker"
                className="inline-flex min-h-12 w-full items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-center text-sm font-semibold leading-snug text-slate-800 transition hover:border-emerald-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500 sm:w-auto"
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
