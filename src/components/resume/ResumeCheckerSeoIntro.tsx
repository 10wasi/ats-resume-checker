import Link from "next/link";
import { TopicClusterLinks } from "@/components/seo/TopicClusterLinks";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { CTR_RESUME_CHECKER } from "@/lib/seo/ctr-metadata";

const CHECKER_GUIDE_LINKS = [
  { href: "/free-resume-checker-online", label: "Free resume checker online" },
  { href: "/resume-score-checker", label: "Resume score checker guide" },
  { href: "/free-ats-score-checker", label: "Free ATS score checker" },
  { href: "/ats-resume-checker", label: "ATS resume checker free online" },
  { href: "/resume-rejected-by-ats", label: "Resume rejected by ATS" },
  { href: "/resume-match-analyzer", label: "Resume match tool" },
  { href: "/resume-keywords", label: "Resume keywords database" },
  { href: "/resume-examples", label: "Resume examples library" },
];

const TRUST_GUIDES = [
  {
    title: "Free resume review rubric",
    body: "Recruiter scan checklist plus ATS section feedback before you apply.",
    href: "/resume-review",
  },
  {
    title: "How ATS scoring works",
    body: "Parse health, keyword weighting, and format flags—see our transparent methodology.",
    href: "/methodology",
  },
  {
    title: "What resume score means",
    body: "Interpret your ATS %, benchmarks, and the difference vs job match score.",
    href: "/resume-score-checker",
  },
  {
    title: "How to improve resume score",
    body: "Three-pass workflow: format, keywords in bullets, re-check after export.",
    href: "/how-to-improve-resume-score",
  },
];

/** Single-page SEO copy for /resume-checker (one H1; supporting H2s only here). */
export function ResumeCheckerSeoIntro() {
  return (
    <section
      className="mx-auto w-full max-w-[1600px] border-b border-zinc-200/90 bg-white px-4 pb-10 pt-2 sm:px-6 sm:pb-12 lg:px-8"
      aria-labelledby="resume-ats-heading"
    >
      <h1
        id="resume-ats-heading"
        className="max-w-4xl text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
      >
        {CTR_RESUME_CHECKER.h1}
      </h1>
      <p className="mt-4 max-w-3xl text-pretty text-base leading-relaxed text-slate-600 sm:text-lg">
        The <strong className="font-semibold text-slate-800">free resume checker</strong> job
        seekers use before every apply—upload PDF, get your{" "}
        <strong className="font-semibold text-slate-800">resume score</strong>, missing keywords,
        and format fixes. Paste a job post for sharper{" "}
        <strong className="font-semibold text-slate-800">resume optimization</strong>.
      </p>

      <h2 className="mt-10 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
        How the resume checker works
      </h2>
      <ol className="mt-3 max-w-3xl list-decimal space-y-2 pl-5 text-sm leading-relaxed text-slate-600 sm:text-base">
        <li>
          <strong className="text-slate-800">Upload your resume</strong> — PDF, DOCX, or paste
          text. Review extracted text to see what ATS parsers read.
        </li>
        <li>
          <strong className="text-slate-800">Get your resume score</strong> — ATS compatibility %,
          keyword gaps, format flags, and a prioritized fix list.
        </li>
        <li>
          <strong className="text-slate-800">Fix and re-check</strong> — edit, re-export, run the
          resume score checker again until flags are clear.
        </li>
      </ol>

      <h2 className="mt-10 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
        Understand your resume score
      </h2>
      <ul className="mt-3 grid gap-4 sm:grid-cols-3 lg:max-w-5xl">
        {TRUST_GUIDES.map((g) => (
          <li
            key={g.href}
            className="rounded-xl border border-slate-200 bg-slate-50/80 p-4"
          >
            <h3 className="text-sm font-bold text-slate-900">{g.title}</h3>
            <p className="mt-1 text-sm text-slate-600">{g.body}</p>
            <Link
              href={g.href}
              className="mt-2 inline-block text-sm font-semibold text-[#16a34a] underline underline-offset-2"
            >
              Read guide →
            </Link>
          </li>
        ))}
      </ul>

      <h2 className="mt-10 text-lg font-semibold tracking-tight text-slate-900 sm:text-xl">
        Resume checker guides
      </h2>
      <ul className="mt-3 grid gap-2 sm:grid-cols-2 lg:max-w-4xl">
        {CHECKER_GUIDE_LINKS.map(({ href, label }) => (
          <li key={href}>
            <Link
              href={href}
              className="text-sm font-medium text-[#16a34a] underline decoration-emerald-300 underline-offset-2 hover:text-[#15803d] sm:text-base"
            >
              {label}
            </Link>
          </li>
        ))}
      </ul>

      <TopicClusterLinks path={RESUME_CHECKER_PATH} className="mt-10" />
    </section>
  );
}
