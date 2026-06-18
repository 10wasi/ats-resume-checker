import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

/** Homepage topical authority — links to pillar hubs and guides. */
export function HomeTopicAuthoritySection() {
  const pillars = [
    {
      title: "How ATS Scoring Works",
      desc: "Transparent methodology: what ATS checks, how scores are calculated, and what we do not claim.",
      href: "/methodology",
      badge: "Methodology",
    },
    {
      title: "ATS Resume FAQ Center",
      desc: "Answers on scoring, tools, interview readiness, and global job applications.",
      href: "/faq-center",
      badge: "FAQ",
    },
    {
      title: "ATS Knowledge Center",
      desc: "Ten pillar guides on format, keywords, match score, mistakes, and checklist QA.",
      href: "/knowledge-center",
      badge: "Guides",
    },
    {
      title: "Career Success Hub",
      desc: "Checker, match tool, keywords checker, examples, and step-by-step workflows.",
      href: "/career-success-hub",
      badge: "Hub",
    },
    {
      title: "ATS Friendly Resume Hub",
      desc: "Role guides, templates, examples, and tools for ATS-friendly resumes.",
      href: "/ats-resume-hub",
      badge: "Hub",
    },
    {
      title: "Ultimate ATS Resume Guide",
      desc: "Complete optimization path: format, keywords, scoring, and pre-submit QA.",
      href: "/ultimate-ats-resume-guide",
      badge: "Guide",
    },
    {
      title: "Resume Keywords Database",
      desc: "ATS keyword lists, verbs, and example bullets for ten professions.",
      href: "/resume-keywords",
      badge: "Database",
    },
    {
      title: "How ATS Resume Checker Works",
      desc: "Upload workflow, scoring signals, and what to fix before you apply.",
      href: "/ats-resume-checker",
      badge: "Tool guide",
    },
  ];

  return (
    <section
      className="border-b border-slate-200/70 bg-slate-50/50 py-16 sm:py-20"
      aria-labelledby="topic-authority-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Topical authority</p>
          <h2
            id="topic-authority-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Deep ATS resume resources—not scattered tips
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            ResumeIQ is organized around{" "}
            <strong className="font-semibold text-slate-800">resume optimization</strong>,
            <strong className="font-semibold text-slate-800"> ATS keywords</strong>, and{" "}
            <strong className="font-semibold text-slate-800">resume match score</strong>
            —with hubs, guides, and free tools that link together. Start with the{" "}
            <Link
              href={RESUME_CHECKER_PATH}
              className="font-semibold text-[#16a34a] underline underline-offset-2"
            >
              ATS Resume Checker
            </Link>
            , then drill into the resource that matches your gap.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {pillars.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <span className="inline-flex w-fit rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                  {item.badge}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-900 group-hover:text-[#16a34a]">
                  {item.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {item.desc}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#16a34a]">
                  Explore →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
