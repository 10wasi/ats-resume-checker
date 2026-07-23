import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const FEATURES = [
  {
    title: "ATS Resume Checker",
    desc: "Free resume score checker—ATS %, format flags, and keyword gaps instantly.",
    href: RESUME_CHECKER_PATH,
    cta: "Check resume score",
  },
  {
    title: "Resume Match Analyzer",
    desc: "Resume match analyzer vs any job post—missing keywords and skill gaps.",
    href: "/resume-job-description-match",
    cta: "Match to job",
  },
  {
    title: "Resume Keyword Finder",
    desc: "Resume keyword analyzer—extract ATS terms from postings and compare ethically.",
    href: "/resume-keyword-tool",
    cta: "Find keywords",
  },
  {
    title: "Resume Examples",
    desc: "ATS-friendly resume examples by role—layouts and bullets that parse worldwide.",
    href: "/resume-examples",
    cta: "View examples",
  },
  {
    title: "ATS Resume Review",
    desc: "ATS resume review—parse health, keyword gaps, and readiness report.",
    href: "/ats-resume-review",
    cta: "ATS review",
  },
  {
    title: "ATS Guide Hub",
    desc: "Job application optimization guides—format, keywords, remote jobs, and mistakes.",
    href: "/ats-guide",
    cta: "Browse guides",
  },
];

/** Homepage pillar features — high-conversion SaaS layout. */
export function HomePillarFeaturesSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-16 sm:py-20"
      aria-labelledby="pillar-features-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Resume optimization platform</p>
          <h2
            id="pillar-features-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Core tools—checker, review, match, keywords, examples
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Free <strong className="font-semibold text-slate-800">resume analyzer online</strong>{" "}
            for international job applications—checker, match, keywords, AI review, and examples.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-slate-50/40 p-6 shadow-sm transition hover:border-emerald-300 hover:bg-white hover:shadow-md"
              >
                <h3 className="font-display text-lg font-bold text-slate-900 group-hover:text-[#16a34a]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#16a34a]">
                  {item.cta} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
