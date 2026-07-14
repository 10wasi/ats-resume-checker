import Link from "next/link";

const tools = [
  {
    emoji: "✅",
    title: "ATS Resume Checker",
    desc: "Score your resume, find missing keywords, and get a priority fix list.",
    href: "/resume-checker",
    badge: "Core",
    badgeColor: "bg-emerald-100 text-emerald-800",
  },
  {
    emoji: "🎯",
    title: "Resume Match Analyzer",
    desc: "Paste a job description and see exactly how well your resume fits.",
    href: "/resume-job-description-match",
    badge: "Match",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    emoji: "✍️",
    title: "Resume Summary Generator",
    desc: "Draft an ATS-friendly professional summary in seconds.",
    href: "/resume-summary-generator",
    badge: "Generator",
    badgeColor: "bg-violet-100 text-violet-800",
  },
  {
    emoji: "💡",
    title: "Resume Bullet Generator",
    desc: "Turn your role and metrics into strong impact bullets.",
    href: "/resume-bullet-generator",
    badge: "Generator",
    badgeColor: "bg-violet-100 text-violet-800",
  },
  {
    emoji: "🔑",
    title: "ATS Keywords Finder",
    desc: "Extract all critical keywords from any job posting instantly.",
    href: "/ats-keywords-finder",
    badge: "Keywords",
    badgeColor: "bg-amber-100 text-amber-800",
  },
  {
    emoji: "🏆",
    title: "Resume Achievement Generator",
    desc: "Convert your wins into quantified, ATS-ready achievement bullets.",
    href: "/resume-achievement-generator",
    badge: "Generator",
    badgeColor: "bg-violet-100 text-violet-800",
  },
  {
    emoji: "📰",
    title: "Resume Headline Generator",
    desc: "Write a sharp, role-specific headline that grabs attention in 6 seconds.",
    href: "/resume-headline-generator",
    badge: "Generator",
    badgeColor: "bg-violet-100 text-violet-800",
  },
  {
    emoji: "📄",
    title: "Cover Letter Generator",
    desc: "Build an ATS-compatible cover letter with keyword alignment tips.",
    href: "/cover-letter-generator",
    badge: "Generator",
    badgeColor: "bg-violet-100 text-violet-800",
  },
  {
    emoji: "🔍",
    title: "Resume Grammar Checker",
    desc: "Spot grammar, tense, and tone issues that weaken your resume.",
    href: "/resume-grammar-checker",
    badge: "Checker",
    badgeColor: "bg-slate-100 text-slate-700",
  },
  {
    emoji: "📐",
    title: "Resume Formatter",
    desc: "Format guide to make your resume ATS-compatible and recruiter-ready.",
    href: "/resume-formatter",
    badge: "Guide",
    badgeColor: "bg-slate-100 text-slate-700",
  },
  {
    emoji: "🧠",
    title: "Resume Skills Analyzer",
    desc: "Compare your skills to a job post and close the gaps.",
    href: "/resume-skills-analyzer",
    badge: "Analyzer",
    badgeColor: "bg-blue-100 text-blue-800",
  },
  {
    emoji: "📋",
    title: "Resume Template Builder",
    desc: "ATS-safe resume templates with formatting rules and examples.",
    href: "/resume-template-builder",
    badge: "Templates",
    badgeColor: "bg-slate-100 text-slate-700",
  },
  {
    emoji: "🎯",
    title: "Resume Objective Generator",
    desc: "40+ objective examples for new graduates, career changers, and interns.",
    href: "/resume-objective-generator",
    badge: "Generator",
    badgeColor: "bg-violet-100 text-violet-800",
  },
  {
    emoji: "⚙️",
    title: "Resume Skills Generator",
    desc: "ATS-ready skills lists by role — what to include and how to format.",
    href: "/resume-skills-generator",
    badge: "Generator",
    badgeColor: "bg-violet-100 text-violet-800",
  },
];

export function HomeRelatedToolsSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-20 sm:py-24"
      aria-labelledby="related-tools-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Resume optimization platform</p>
          <h2
            id="related-tools-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            14 free resume tools — one platform
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600">
            Every tool is free, instant, and requires no signup. Start with the ATS checker, then use the generators to fix what it finds.
          </p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tools.map((tool) => (
            <li key={tool.href}>
              <Link
                href={tool.href}
                className="group flex h-full items-start gap-4 rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-slate-50 text-xl ring-1 ring-slate-200/80">
                  {tool.emoji}
                </span>
                <div className="min-w-0">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className={`rounded-full px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide ${tool.badgeColor}`}>
                      {tool.badge}
                    </span>
                  </div>
                  <p className="mt-1 font-display font-bold text-slate-900 group-hover:text-[#16a34a]">
                    {tool.title}
                  </p>
                  <p className="mt-1 text-sm leading-relaxed text-slate-600">
                    {tool.desc}
                  </p>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
