import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Homepage — instant answers: what, who, trust, differentiation, next step. */
export function HomeInstantAnswersSection() {
  const blocks = [
    {
      id: "what",
      title: "What is this?",
      body: "A free resume checker and resume optimization platform. Upload PDF, get ATS score, missing keywords, format fixes, match analysis, and a clear improvement plan.",
      href: RESUME_CHECKER_PATH,
      cta: "Run free checker",
    },
    {
      id: "who",
      title: "Who is it for?",
      body: "Job seekers worldwide—students, career changers, and experienced hires who apply through online portals and need files that parsers and recruiters can read.",
      href: "/free-resume-checker-online",
      cta: "Free checker online",
    },
    {
      id: "trust",
      title: "Why trust ResumeIQ?",
      body: "Published scoring methodology, privacy-first processing, free core analysis, and editorial guides linked to every tool—not a black-box score behind a paywall.",
      href: "/methodology",
      cta: "How scoring works",
    },
    {
      id: "better",
      title: "Why better than competitors?",
      body: "Free ATS score, keyword gaps, job match, checklist, skills feedback, and summary review in one workflow—features others often gate behind subscriptions.",
      href: "/how-resume-analysis-works",
      cta: "How analysis works",
    },
    {
      id: "next",
      title: "What should you do next?",
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
          <p className="section-eyebrow mx-auto">Resume checker explained</p>
          <h2
            id="instant-answers-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Five questions every job seeker asks
          </h2>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {blocks.map((b) => (
            <li
              key={b.id}
              className="flex flex-col rounded-2xl border border-slate-200 bg-slate-50/50 p-6 shadow-sm"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">{b.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">{b.body}</p>
              <Link
                href={b.href}
                className="mt-4 text-sm font-semibold text-[#16a34a] underline underline-offset-2"
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
