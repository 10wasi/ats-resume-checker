import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Homepage — instant answers: ATS, trust, workflow, differentiation. */
export function HomeInstantAnswersSection() {
  const blocks = [
    {
      id: "ats",
      title: "Why does ATS matter?",
      body: "Applicant tracking systems filter most resumes before a recruiter opens them. If parsing fails or keywords miss, your experience never gets seen—no matter how qualified you are.",
      href: "/how-ats-works",
      cta: "How ATS works",
    },
    {
      id: "what",
      title: "What is ResumeIQ?",
      body: "A free ATS resume checker and resume analysis tool. Upload PDF or paste text—get score, keyword gaps, format flags, match %, and a prioritized improvement plan.",
      href: RESUME_CHECKER_PATH,
      cta: "Run free checker",
    },
    {
      id: "recruiter",
      title: "How do recruiters scan resumes?",
      body: "After software ranking, recruiters skim in seconds: headline, recent role, metrics, skills. We optimize for both the parser and the human scan.",
      href: "/resume-screening-explained",
      cta: "Resume screening guide",
    },
    {
      id: "trust",
      title: "Why trust this score?",
      body: "Published methodology, transparent analysis pipeline, privacy-first processing, and editorial guides—not a black-box number behind a paywall.",
      href: "/methodology",
      cta: "Scoring methodology",
    },
    {
      id: "improve",
      title: "How do I improve my resume?",
      body: "Fix format first, mirror honest posting keywords, strengthen bullets with action and outcomes, then re-scan. Every fix explains why, how, and expected impact.",
      href: "/how-to-improve-resume-score",
      cta: "Improvement guide",
    },
    {
      id: "next",
      title: "What should I do next?",
      body: "Check your resume, fix format flags, match each posting, browse keywords and examples, then re-check before you apply.",
      href: "/resource-hub",
      cta: "Resume resource hub",
    },
  ];

  return (
    <section
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="instant-answers-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Resume analysis explained</p>
          <h2
            id="instant-answers-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Everything you need before you hit apply
          </h2>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <li
              key={b.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{b.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{b.body}</p>
              <Link
                href={b.href}
                className="mt-4 text-sm font-semibold text-[#16a34a] underline underline-offset-2 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-emerald-500"
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
