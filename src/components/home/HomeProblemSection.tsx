import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Homepage problem section — why resumes fail ATS screening. */
export function HomeProblemSection() {
  const problems = [
    "Applicant tracking systems parse your file before a human reads it",
    "Missing resume keywords for ATS mean recruiters never find you in search",
    "Two-column layouts and graphics scramble extracted text",
    "Low resume match score vs the job posting you applied to",
  ];

  return (
    <section
      className="border-b border-slate-200/80 bg-slate-50/90 py-16 sm:py-20"
      aria-labelledby="home-problem-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Why resumes get rejected</p>
          <h2
            id="home-problem-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            You may be qualified—but filtered out by ATS
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Worldwide hiring runs on software that scores, parses, and filters
            applications. When your{" "}
            <strong className="font-semibold text-slate-800">resume formatting for ATS</strong>{" "}
            fails or keywords never appear in plain text, you can go silent after
            submit—not because you lack skills.
          </p>
        </div>
        <ul className="mx-auto mt-10 grid max-w-3xl gap-3">
          {problems.map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-slate-200/80 bg-white px-5 py-4 text-sm leading-relaxed text-slate-700"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-8 max-w-xl text-center text-sm text-slate-600">
          Learn{" "}
          <Link href="/how-ats-works" className="font-semibold text-[#16a34a] underline">
            how to pass ATS systems
          </Link>{" "}
          or run the free{" "}
          <Link href={RESUME_CHECKER_PATH} className="font-semibold text-[#16a34a] underline">
            AI resume checker
          </Link>{" "}
          on your file now.
        </p>
      </div>
    </section>
  );
}
