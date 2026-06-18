import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const PILLARS = [
  {
    title: "ATS Resume Checker",
    desc: "Get your ATS resume score instantly—parse health, keyword gaps, and format flags.",
    href: RESUME_CHECKER_PATH,
    cta: "Check resume score",
  },
  {
    title: "Resume Match Analyzer",
    desc: "Resume match score vs any job description—missing keywords and skill gaps.",
    href: "/resume-match-analyzer",
    cta: "Match to job post",
  },
  {
    title: "Resume Keyword Tool",
    desc: "Extract, compare, and place ATS keywords ethically—from posting to bullets.",
    href: "/resume-keyword-tool",
    cta: "Find keywords",
  },
  {
    title: "Resume Examples Library",
    desc: "ATS-friendly samples by role—layouts, bullets, and keyword patterns that parse.",
    href: "/resume-examples",
    cta: "View examples",
  },
  {
    title: "ATS Guide Hub",
    desc: "Pillar guides, blog clusters, and workflows for professional resume optimization.",
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
            Fix resume issues that block interviews
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Five connected tools—{" "}
            <strong className="font-semibold text-slate-800">ATS Resume Checker</strong>,{" "}
            <strong className="font-semibold text-slate-800">Resume Match Analyzer</strong>,{" "}
            keyword optimization, examples, and guides—for global job applications.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {PILLARS.map((item) => (
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
