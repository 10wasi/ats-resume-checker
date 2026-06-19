import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Homepage section — maps to actual GSC query intents. */
export function HomeGscIntentSection() {
  const intents = [
    {
      query: "Resume rejected by ATS",
      href: "/resume-rejected-by-ats",
      desc: "Why hiring software filters you out—and the fix workflow.",
    },
    {
      query: "Common ATS rejection reasons",
      href: "/common-ats-resume-rejection-reasons",
      desc: "Top 12 rejection triggers with examples and fixes.",
    },
    {
      query: "Resume score check",
      href: "/resume-score-checker",
      desc: "What your ATS % means and how to improve it.",
    },
    {
      query: "Free ATS resume checker",
      href: "/ats-resume-checker",
      desc: "Free ATS score checker—upload PDF, get keyword gaps.",
    },
    {
      query: "Resume review online",
      href: "/resume-review",
      desc: "10-minute recruiter rubric plus ATS scan.",
    },
    {
      query: "AI resume review",
      href: "/ai-resume-review",
      desc: "AI score, format flags, and bullet suggestions.",
    },
    {
      query: "Resume not working ATS",
      href: "/resume-not-passing-ats",
      desc: "Parse vs keyword diagnosis before you re-apply.",
    },
    {
      query: "CV checker",
      href: "/cv-checker",
      desc: "Free CV checker online—works worldwide.",
    },
  ];

  return (
    <section
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="gsc-intent-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Search what you need</p>
          <h2
            id="gsc-intent-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Guides matched to real job-seeker searches
          </h2>
          <p className="mt-4 text-slate-600">
            Rejection reasons, score checks, reviews, and CV scans—each guide links to the{" "}
            <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
              free ATS checker
            </Link>{" "}
            as the fix step.
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {intents.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="flex h-full flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-5 transition hover:border-emerald-300 hover:bg-white hover:shadow-sm"
              >
                <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
                  {item.query}
                </p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.desc}</p>
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center">
          <Link
            href="/complete-guide-ats-resume-optimization"
            className="text-sm font-semibold text-[#16a34a] underline underline-offset-2"
          >
            Complete guide to ATS resume optimization →
          </Link>
        </p>
      </div>
    </section>
  );
}

/** Story-first homepage block: rejection → ATS → scores → interviews → checker CTA. */
export function HomeSearchIntentStorySection() {
  const steps = [
    {
      title: "Why resumes get rejected",
      body: "Parser failures, missing keywords, and hard filters remove most applicants before a human reads their name.",
      href: "/common-ats-resume-rejection-reasons",
    },
    {
      title: "How ATS works",
      body: "Hiring software extracts text, stores profiles, and lets recruiters search by skills and titles.",
      href: "/how-ats-works",
    },
    {
      title: "Improve resume scores",
      body: "Fix format first, then add posting keywords into bullets you can defend in an interview.",
      href: "/how-to-improve-resume-score",
    },
    {
      title: "Get more interviews",
      body: "Tailor each application, run a resume review, and match the job description before submit.",
      href: "/why-resume-not-getting-interviews",
    },
  ];

  return (
    <section
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="intent-story-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">The real problem</p>
            <h2
              id="intent-story-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
            >
              Qualified people get filtered out every day
            </h2>
            <p className="mt-4 text-lg leading-relaxed text-slate-600">
              The story is not &ldquo;run a checker.&rdquo; It is: understand rejection, learn how ATS
              works, raise your score, and turn applications into interviews—then use our{" "}
              <strong className="font-semibold text-slate-800">free ATS resume checker</strong> to
              verify each fix.
            </p>
            <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-8 inline-flex px-6">
              Diagnose my resume free
            </Link>
          </div>
          <ol className="space-y-4">
            {steps.map((step, i) => (
              <li key={step.href}>
                <Link
                  href={step.href}
                  className="flex gap-4 rounded-2xl border border-slate-200 bg-slate-50/80 p-5 transition hover:border-emerald-200 hover:bg-white"
                >
                  <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-emerald-100 text-sm font-bold text-emerald-800">
                    {i + 1}
                  </span>
                  <div>
                    <p className="font-display font-bold text-slate-900">{step.title}</p>
                    <p className="mt-1 text-sm text-slate-600">{step.body}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ol>
        </div>
      </div>
    </section>
  );
}
