import Link from "next/link";
import {
  IconChart,
  IconShield,
  IconSparkle,
  IconUpload,
} from "@/components/ui/Icons";
import { HomeHeroPasteForm } from "@/components/home/HomeHeroPasteForm";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";
import { CTR_HOME } from "@/lib/seo/ctr-metadata";

export function HeroSection() {
  return (
    <section className="relative overflow-hidden border-b border-slate-200/70 bg-white">
      <div className="pointer-events-none absolute inset-0 bg-mesh" aria-hidden />
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-[600px] bg-grid opacity-[0.55]"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-b from-transparent to-white"
        aria-hidden
      />
      <div className="relative mx-auto max-w-6xl px-4 pb-24 pt-20 sm:px-6 sm:pb-28 sm:pt-24 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <p className="section-eyebrow">
            <IconSparkle className="h-3.5 w-3.5 shrink-0 text-[#4ade80]" />
            Global ATS resume optimization · free tools
          </p>
          <h1 className="mt-6 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]">
            {CTR_HOME.h1}
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
            Improve your resume score and get more interviews worldwide. Free{" "}
            <strong className="font-semibold text-slate-800">ATS Resume Checker</strong>,{" "}
            <strong className="font-semibold text-slate-800">AI resume checker</strong>, and{" "}
            <strong className="font-semibold text-slate-800">CV scanner tool</strong>—paste
            below or upload on the next screen.
          </p>
          <HomeHeroPasteForm />
          <p className="mt-6 text-sm text-slate-500">
            Improve your resume score and get more interviews worldwide · Free · No signup
          </p>
          <ul className="mx-auto mt-8 flex max-w-xl flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-medium text-slate-500">
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              See why resumes get rejected
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Missing keywords &amp; match %
            </li>
            <li className="flex items-center gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              Action steps—not generic ATS tips
            </li>
          </ul>
        </div>

        <div className="relative mx-auto mt-16 max-w-4xl">
          <div className="absolute inset-0 -z-10 rounded-[2rem] bg-brand-gradient opacity-30 blur-2xl" />
          <div className="card-glass overflow-hidden rounded-3xl">
            <div className="flex items-center justify-between gap-4 border-b border-white/60 bg-white/60 px-5 py-3">
              <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
                <span className="h-2.5 w-2.5 rounded-full bg-rose-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-amber-400" />
                <span className="h-2.5 w-2.5 rounded-full bg-emerald-400" />
                <span className="ml-2 hidden sm:inline">
                  ATS checker · score preview
                </span>
              </div>
              <span className="pill border-emerald-200 bg-emerald-50 text-emerald-700">
                Live
              </span>
            </div>
            <div className="grid gap-6 p-6 sm:grid-cols-3 sm:p-8">
              <ScoreTile label="ATS readability" value={92} tone="emerald" />
              <ScoreTile label="Keyword match" value={78} tone="mint" />
              <ScoreTile label="Impact bullets" value={64} tone="amber" />
            </div>
            <div className="grid gap-3 border-t border-white/60 bg-white/40 p-6 text-left sm:grid-cols-2 sm:p-8">
              <FixRow
                title="Add 4 missing keywords"
                detail="‘TypeScript’, ‘CI/CD’, ‘code review’, ‘mentor’"
              />
              <FixRow
                title="Tighten 3 weak bullets"
                detail="Lead with impact verbs, add metrics where you can."
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Core platform tools — internal linking hub for SEO and discovery. */
export function HomeCoreToolsGridSection() {
  const tools = [
    {
      title: "ATS Resume Checker",
      desc: "Upload or paste your resume for an ATS score, compatibility rating, strengths, weaknesses, and priority fixes.",
      href: RESUME_CHECKER_PATH,
      cta: "Run free check",
      badge: "Core tool",
    },
    {
      title: "Resume Match Analyzer",
      desc: "Paste a job description to get resume match score, missing keywords, and categorized skill gaps.",
      href: "/resume-job-description-match",
      cta: "Match to posting",
      badge: "Match score",
    },
    {
      title: "Resume Examples Library",
      desc: "See good vs bad layouts, bullet patterns, and ATS resume examples that parse cleanly in 2026.",
      href: "/resume-examples",
      cta: "View examples",
      badge: "Examples",
    },
    {
      title: "ATS Resume Checklist",
      desc: "Print-friendly pre-submit checklist for layout, keywords, contact block, and final export QA.",
      href: "/ats-resume-checklist-2026",
      cta: "Open checklist",
      badge: "Checklist",
    },
    {
      title: "ATS Keywords Finder",
      desc: "Paste a job post—extract technical skills, tools, certifications, and soft skills instantly.",
      href: "/ats-keywords-finder",
      cta: "Find keywords",
      badge: "Keywords",
    },
    {
      title: "Resume Keywords Database",
      desc: "ATS keyword lists by profession—skills, verbs, phrases, and example bullets.",
      href: "/resume-keywords",
      cta: "Browse keywords",
      badge: "Database",
    },
    {
      title: "Resume Bullet Generator",
      desc: "Draft impact-style bullets from your role, action, and metrics—copy and refine for ATS.",
      href: "/resume-bullet-generator",
      cta: "Generate bullets",
      badge: "Bullets",
    },
    {
      title: "Resume Skills Analyzer",
      desc: "Scan resume text for skills and tools—compare against a job post to spot honest gaps.",
      href: "/resume-skills-analyzer",
      cta: "Analyze skills",
      badge: "Skills",
    },
    {
      title: "Resume Summary Generator",
      desc: "Draft professional summary lines from role, years, and highlights—copy and tailor.",
      href: "/resume-summary-generator",
      cta: "Draft summary",
      badge: "Summary",
    },
    {
      title: "Resume Achievement Generator",
      desc: "Turn one win into impact bullets with action, metric, and context inputs.",
      href: "/resume-achievement-generator",
      cta: "Generate achievements",
      badge: "Achievements",
    },
    {
      title: "AI Resume Rewrite",
      desc: "Full-resume AI rewrites, improvement plan, and ATS score in the checker flow.",
      href: RESUME_CHECKER_PATH,
      cta: "Run checker",
      badge: "AI",
    },
  ];
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-16 sm:py-20"
      aria-labelledby="core-tools-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">ATS resume optimization platform</p>
          <h2
            id="core-tools-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Everything you need to improve ATS visibility
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Six core tools for global job applications:{" "}
            <strong className="font-semibold text-slate-800">ATS Resume Checker</strong>,{" "}
            <strong className="font-semibold text-slate-800">Resume Match Analyzer</strong>,{" "}
            <strong className="font-semibold text-slate-800">Resume Keywords Finder</strong>,{" "}
            <strong className="font-semibold text-slate-800">Resume Bullet Generator</strong>,{" "}
            <strong className="font-semibold text-slate-800">Resume Examples Library</strong>, and{" "}
            <Link href="/knowledge-center" className="font-semibold text-[#16a34a] underline">
              ATS optimization guides
            </Link>
            —plus AI rewrites and profession keyword lists.
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {tools.map((tool) => (
            <li key={tool.title}>
              <Link
                href={tool.href}
                className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
              >
                <span className="inline-flex w-fit rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
                  {tool.badge}
                </span>
                <h3 className="mt-3 font-display text-lg font-bold text-slate-900 group-hover:text-[#16a34a]">
                  {tool.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {tool.desc}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#16a34a]">
                  {tool.cta} →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** ATS resume examples — showcase + link to full guide. */
export function HomeAtsResumeExamplesSection() {
  const examples = [
    {
      title: "Single-column ATS layout",
      good: "Standard headings, plain-text skills, bullets in body—parses in logical order.",
      bad: "Two-column Canva templates that scramble experience and skills on extract.",
      href: "/ats-resume-examples",
    },
    {
      title: "Impact bullets with metrics",
      good: "Led migration of 12 services, cutting deploy time 40% using CI/CD and AWS.",
      bad: "Responsible for various projects and team collaboration duties.",
      href: "/resume-examples/software-engineer",
    },
    {
      title: "Keyword placement",
      good: "Posting terms in summary, skills, and recent experience bullets—with proof.",
      bad: "Hidden keyword block in white font or skills cloud with no context.",
      href: "/ats-resume-keywords",
    },
  ];
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-16 sm:py-20"
      aria-labelledby="ats-examples-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">ATS resume examples</p>
          <h2
            id="ats-examples-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            What strong ATS resumes look like in 2026
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Learn from real patterns—not generic templates. These{" "}
            <strong className="font-semibold text-slate-900">
              ATS resume examples
            </strong>{" "}
            show how layout, keywords, and bullets work together for{" "}
            <strong className="font-semibold text-slate-900">
              resume optimization
            </strong>
            .
          </p>
        </div>
        <ul className="mt-12 grid gap-6 lg:grid-cols-3">
          {examples.map((ex) => (
            <li
              key={ex.title}
              className="flex flex-col rounded-2xl border border-slate-200/90 bg-slate-50/50 p-6"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">
                {ex.title}
              </h3>
              <div className="mt-4 space-y-3 text-sm">
                <p className="rounded-lg border border-emerald-200/80 bg-emerald-50/60 px-3 py-2.5 leading-relaxed text-slate-700">
                  <span className="font-bold text-emerald-800">Strong: </span>
                  {ex.good}
                </p>
                <p className="rounded-lg border border-rose-200/80 bg-rose-50/50 px-3 py-2.5 leading-relaxed text-slate-700">
                  <span className="font-bold text-rose-800">Weak: </span>
                  {ex.bad}
                </p>
              </div>
              <Link
                href={ex.href}
                className="mt-4 text-sm font-semibold text-[#16a34a] underline decoration-[#4ade80]/50 underline-offset-4"
              >
                Read full examples →
              </Link>
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-600">
          Browse the{" "}
          <Link
            href="/resume-examples"
            className="font-semibold text-[#16a34a] underline underline-offset-2"
          >
            Resume Examples Library
          </Link>{" "}
          and{" "}
          <Link
            href="/knowledge-center"
            className="font-semibold text-[#16a34a] underline underline-offset-2"
          >
            ATS Knowledge Center
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

/** Resume keywords by profession — links to keyword database. */
export function HomeResumeKeywordsByProfessionSection() {
  const professions = [
    { label: "Software engineer", href: "/resume-keywords/software-engineer" },
    { label: "Data analyst", href: "/resume-keywords/data-analyst" },
    { label: "Product manager", href: "/resume-keywords/product-manager" },
    { label: "Project manager", href: "/resume-keywords/project-manager" },
    { label: "Marketing manager", href: "/resume-keywords/marketing-manager" },
    { label: "Business analyst", href: "/resume-keywords/business-analyst" },
    { label: "Accountant", href: "/resume-keywords/accountant" },
    { label: "HR manager", href: "/resume-keywords/hr-manager" },
    { label: "Customer service", href: "/resume-keywords/customer-service" },
    { label: "Graphic designer", href: "/resume-keywords/graphic-designer" },
  ];
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-16 sm:py-20"
      aria-labelledby="keywords-by-profession-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Keyword database</p>
          <h2
            id="keywords-by-profession-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900"
          >
            Resume keywords by profession
          </h2>
          <p className="mt-4 text-slate-600">
            ATS-friendly keyword lists—technical skills, verbs, phrases, and example bullets—for
            ten common roles. Browse the full{" "}
            <Link
              href="/resume-keywords"
              className="font-semibold text-[#16a34a] underline underline-offset-2"
            >
              Resume Keywords Database
            </Link>
            , then test gaps in the{" "}
            <Link
              href="/resume-job-description-match"
              className="font-semibold text-[#16a34a] underline underline-offset-2"
            >
              Resume Match Analyzer
            </Link>
            .
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {professions.map((p) => (
            <li key={p.href}>
              <Link
                href={p.href}
                className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 hover:text-[#16a34a]"
              >
                {p.label}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-8 text-center text-sm text-slate-600">
          Extract posting-specific terms with the{" "}
          <Link href="/ats-keywords-finder" className="font-semibold text-[#16a34a] underline">
            ATS Keywords Finder
          </Link>{" "}
          · Placement guide:{" "}
          <Link href="/ats-resume-keywords" className="font-semibold text-[#16a34a] underline">
            ATS Resume Keywords
          </Link>
        </p>
      </div>
    </section>
  );
}

/** ATS keywords guide + finder preview. */
export function HomeKeywordsGuidePreviewSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-slate-50/80 py-16 sm:py-20"
      aria-labelledby="keywords-preview-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">ATS keywords</p>
            <h2
              id="keywords-preview-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900"
            >
              Find ATS keywords—then place them with proof
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Extract terms from any job post with the free{" "}
              <strong className="font-semibold text-slate-900">ATS Keywords Finder</strong>
              , then learn ethical placement in our{" "}
              <Link
                href="/ats-resume-keywords"
                className="font-semibold text-[#16a34a] underline underline-offset-2"
              >
                ATS keywords guide
              </Link>
              .
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/ats-keywords-finder" className="btn-gradient px-6 text-sm">
                ATS Keywords Finder
              </Link>
              <Link
                href="/resume-keywords-by-industry"
                className="inline-flex h-11 items-center rounded-xl border border-slate-200 bg-white px-5 text-sm font-semibold text-slate-800 hover:border-emerald-300"
              >
                Keywords by industry
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-soft">
            <p className="text-xs font-semibold text-slate-500">Sample extraction</p>
            <div className="mt-4 flex flex-wrap gap-2">
              {["Python", "SQL", "Tableau", "stakeholder", "AWS", "Agile"].map(
                (kw) => (
                  <span
                    key={kw}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-950"
                  >
                    {kw}
                  </span>
                )
              )}
            </div>
            <p className="mt-4 text-xs text-slate-600">
              Paste a real posting to see skills, tools, certs, and soft skills—copy
              with one click.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Role-specific ATS resume guides — long-tail internal links. */
export function HomeRoleExamplesSection() {
  const roles = [
    { label: "Software engineers", href: "/ats-resume/software-engineer" },
    { label: "Data analysts", href: "/ats-resume/data-analyst" },
    { label: "Product managers", href: "/ats-resume/product-manager" },
    { label: "Project managers", href: "/ats-resume/project-manager" },
    { label: "Marketing managers", href: "/ats-resume/marketing-manager" },
    { label: "Customer service", href: "/ats-resume/customer-service" },
    { label: "Accountants", href: "/ats-resume/accountant" },
    { label: "HR managers", href: "/ats-resume/hr-manager" },
    { label: "Graphic designers", href: "/ats-resume/graphic-designer" },
  ];
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-16 sm:py-20"
      aria-labelledby="role-guides-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">By role</p>
          <h2
            id="role-guides-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900"
          >
            ATS resume guides for your profession
          </h2>
          <p className="mt-4 text-slate-600">
            Role-specific examples, keyword tips, and mistakes—plus the{" "}
            <Link href="/resume-examples" className="font-semibold text-[#16a34a] underline">
              full examples library
            </Link>
            .
          </p>
        </div>
        <ul className="mt-10 flex flex-wrap justify-center gap-3">
          {roles.map((r) => (
            <li key={r.href}>
              <Link
                href={r.href}
                className="inline-flex rounded-full border border-slate-200 bg-slate-50 px-4 py-2 text-sm font-semibold text-slate-800 transition hover:border-emerald-300 hover:text-[#16a34a]"
              >
                {r.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Resume match analyzer preview — drives traffic to JD match tool. */
export function HomeResumeMatchPreviewSection() {
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-16 sm:py-20"
      aria-labelledby="match-preview-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">Resume match analyzer</p>
            <h2
              id="match-preview-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900"
            >
              Compare your resume to any job description
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Paste a posting and see your match score, missing{" "}
              <strong className="font-semibold text-slate-900">
                ATS keywords
              </strong>
              , found terms, and skill gaps—so you know what to tailor before
              you apply. Same honest{" "}
              <strong className="font-semibold text-slate-900">
                resume optimization
              </strong>{" "}
              workflow, focused on one role at a time.
            </p>
            <Link
              href="/resume-job-description-match"
              className="btn-gradient mt-6 inline-flex px-7 text-sm"
            >
              Run resume match analyzer
            </Link>
          </div>
          <div className="rounded-2xl border border-slate-200/90 bg-slate-50/80 p-5 shadow-soft sm:p-6">
            <p className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
              Match preview
            </p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              <div className="rounded-xl border border-white bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-slate-500">
                  Overall match
                </p>
                <p className="mt-1 font-display text-3xl font-bold text-slate-900">
                  72<span className="text-lg text-slate-500">%</span>
                </p>
                <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-100">
                  <div className="h-full w-[72%] rounded-full bg-gradient-to-r from-brand-500 to-brand-600" />
                </div>
              </div>
              <div className="rounded-xl border border-white bg-white p-4 shadow-sm">
                <p className="text-xs font-semibold text-slate-500">
                  ATS compatibility
                </p>
                <p className="mt-1 font-display text-xl font-bold text-emerald-700">
                  Good
                </p>
                <p className="mt-2 text-xs text-slate-600">
                  Layout parses cleanly; keyword gaps remain.
                </p>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-700">
                Missing keywords
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["React", "CI/CD", "Stakeholder", "SQL"].map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full border border-amber-200 bg-amber-50 px-2.5 py-0.5 text-xs font-semibold text-amber-950"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
            <div className="mt-4">
              <p className="text-xs font-semibold text-slate-700">
                Found keywords
              </p>
              <div className="mt-2 flex flex-wrap gap-2">
                {["JavaScript", "Agile", "Git", "API"].map((kw) => (
                  <span
                    key={kw}
                    className="rounded-full border border-emerald-200 bg-emerald-50 px-2.5 py-0.5 text-xs font-semibold text-emerald-950"
                  >
                    {kw}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Final conversion CTA. */
export function HomeStrongCtaSection() {
  return (
    <section className="container-page pb-24 pt-8">
      <div className="relative overflow-hidden rounded-3xl bg-slate-950 px-6 py-16 text-center shadow-soft-lg sm:px-12 sm:py-20">
        <div
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_60%_at_50%_-10%,rgba(74,222,128,0.35),transparent_60%)]"
          aria-hidden
        />
        <div className="relative">
          <p className="text-xs font-bold uppercase tracking-wider text-emerald-400">
            Free · No account required
          </p>
          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Improve your resume in minutes—then apply with confidence
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg leading-relaxed text-slate-300">
            Get your ATS resume score, fix missing keywords, and raise match % with free{" "}
            <strong className="font-semibold text-white">resume optimization tools</strong>—built
            for job seekers worldwide.
          </p>
          <div className="mt-9 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-8 text-base font-semibold">
              Improve Resume Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Social proof strip — trust without inflated metrics. */
export function HomeTrustedBySection() {
  const stats = [
    { value: "Free", label: "No signup required to run your first check" },
    { value: "Minutes", label: "Upload, paste a job post, get actionable fixes" },
    { value: "Global", label: "Built for job seekers in every region and remote hiring" },
  ];
  return (
    <section className="border-b border-slate-200/70 bg-white py-12 sm:py-14">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="text-center text-sm font-semibold uppercase tracking-wider text-slate-500">
          Trusted by job seekers optimizing real applications
        </p>
        <div className="mt-8 grid gap-6 sm:grid-cols-3">
          {stats.map((s) => (
            <div
              key={s.label}
              className="rounded-2xl border border-slate-100 bg-slate-50/50 px-6 py-6 text-center"
            >
              <p className="font-display text-2xl font-bold text-[#16a34a] sm:text-3xl">
                {s.value}
              </p>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.label}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/** Why ATS rejects — emotional + educational. */
export function HomeWhyAtsRejectsSection() {
  return (
    <section
      className="border-b border-slate-200/80 bg-slate-50/90 py-16 sm:py-20"
      aria-labelledby="why-ats-rejects-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Why ATS rejects resumes</p>
          <h2
            id="why-ats-rejects-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            You are not always rejected—you are sometimes unread
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            You can be qualified and still go quiet after you hit apply. Often
            the issue is not your experience—it is how hiring software reads
            your file. When text extracts in the wrong order, or your{" "}
            <strong className="font-semibold text-slate-900">ATS keywords</strong>{" "}
            never show up in plain language, recruiters may never see your best
            work. That is fixable with the right{" "}
            <strong className="font-semibold text-slate-900">
              resume optimization
            </strong>{" "}
            pass before you submit.
          </p>
        </div>
        <ul className="mx-auto mt-12 grid max-w-4xl gap-4 sm:grid-cols-2">
          {[
            "Broken PDF extraction—text order scrambled or missing",
            "Two-column templates that confuse ATS parsers",
            "Skills trapped in icons, charts, or headers/footers",
            "Low resume match score vs the posting you applied to",
            "Job titles and tools that do not mirror posting language",
            "Bullets with tasks but no measurable outcomes",
          ].map((item) => (
            <li
              key={item}
              className="flex gap-3 rounded-xl border border-slate-200/80 bg-white px-5 py-4 text-sm leading-relaxed text-slate-700"
            >
              <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
              {item}
            </li>
          ))}
        </ul>
        <p className="mx-auto mt-10 max-w-2xl text-center text-sm text-slate-600">
          Learn fixes in our{" "}
          <Link
            href="/blog/why-resume-rejected-ats-top-reasons-fixes"
            className="font-semibold text-[#16a34a] underline decoration-[#4ade80]/40 underline-offset-2"
          >
            ATS rejection reasons guide
          </Link>
          .
        </p>
      </div>
    </section>
  );
}

/** Problems the checker surfaces — Jobscan-style clarity. */
export function HomeProblemsWeDetectSection() {
  const problems = [
    {
      title: "Missing keywords",
      body: "Compare your resume to a job description and see which posting terms are absent.",
    },
    {
      title: "Formatting & parsing risks",
      body: "Catch layouts that break extraction—columns, graphics, weak headings.",
    },
    {
      title: "Weak impact bullets",
      body: "Spot vague bullets and get stronger phrasing ideas with metrics where honest.",
    },
    {
      title: "Low keyword match %",
      body: "See matched vs total posting terms—not just a vague score.",
    },
    {
      title: "ATS compatibility rating",
      body: "Understand overall readiness: Excellent, Good, Fair, or Needs work.",
    },
    {
      title: "Priority fixes",
      body: "Know what to fix first: layout, keywords, summary, or experience proof.",
    },
  ];
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-16 sm:py-20"
      aria-labelledby="problems-detect-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">What we detect</p>
          <h2
            id="problems-detect-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            ATS problems we detect
          </h2>
          <p className="mt-4 text-base text-slate-600 sm:text-lg">
            The{" "}
            <strong className="font-semibold text-slate-900">
              ATS Resume Checker
            </strong>{" "}
            flags what actually moves the needle: parsing,{" "}
            <strong className="font-semibold text-slate-900">ATS keywords</strong>
            , bullet strength, and fit against a real job post—not vague grammar
            scores.
          </p>
        </div>
        <ul className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((p) => (
            <li
              key={p.title}
              className="card-elevated flex h-full flex-col p-6"
            >
              <h3 className="font-display text-lg font-bold text-slate-900">
                {p.title}
              </h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                {p.body}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Checklist preview + link to full resource. */
export function HomeChecklistSection() {
  const items = [
    "Copy-paste test passed—logical text order",
    "Single-column ATS resume format for uploads",
    "Must-have posting keywords in experience bullets",
    "Contact info in body; standard headings",
    "Ran online resume checker on export you will submit",
  ];
  return (
    <section
      className="border-b border-slate-200/80 bg-gradient-to-b from-emerald-50/40 to-white py-16 sm:py-20"
      aria-labelledby="home-checklist-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <p className="section-eyebrow">ATS checklist preview</p>
            <h2
              id="home-checklist-heading"
              className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900"
            >
              ATS checklist preview — before you hit submit
            </h2>
            <p className="mt-4 text-base leading-relaxed text-slate-600">
              Five essentials every{" "}
              <strong className="font-semibold text-slate-900">
                ATS friendly resume
              </strong>{" "}
              should pass. Open the full{" "}
              <Link
                href="/ats-resume-checklist-2026"
                className="font-semibold text-[#16a34a] underline decoration-[#4ade80]/40 underline-offset-2"
              >
                ATS resume checklist
              </Link>{" "}
              for a printable version before every application batch.
            </p>
            <Link
              href="/ats-resume-checklist-2026"
              className="mt-6 inline-flex text-sm font-semibold text-[#16a34a] underline decoration-[#4ade80]/50 underline-offset-4"
            >
              Open full checklist →
            </Link>
          </div>
          <ul className="space-y-3 rounded-2xl border border-emerald-200/80 bg-white p-6 shadow-soft sm:p-8">
            {items.map((item) => (
              <li key={item} className="flex gap-3 text-sm text-slate-700">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-emerald-100 text-emerald-800">
                  ✓
                </span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

/** Authority hub — internal linking pillar. */
export function HomeAuthorityHubSection() {
  const guides = [
    {
      title: "ATS resume examples",
      href: "/ats-resume-examples",
      desc: "Good vs bad layouts and bullet patterns that parse cleanly.",
    },
    {
      title: "ATS resume keywords",
      href: "/ats-resume-keywords",
      desc: "Ethical keyword placement to improve ATS score and visibility.",
    },
    {
      title: "ATS resume format",
      href: "/ats-resume-format",
      desc: "Templates, typography, and formatting rules that parse in 2026.",
    },
    {
      title: "ATS resume mistakes",
      href: "/ats-resume-mistakes",
      desc: "Mistakes that trigger rejections—and fast fixes.",
    },
    {
      title: "ATS score explained",
      href: "/ats-score-explained",
      desc: "What your score means and how to improve before you apply.",
    },
    {
      title: "Career Success Hub",
      href: "/career-success-hub",
      desc: "Resume checker, match tool, optimization guides, and role examples in one hub.",
    },
    {
      title: "Knowledge Center",
      href: "/knowledge-center",
      desc: "Ten guides, tools, and checklists in one library.",
    },
  ];
  return (
    <section
      className="border-b border-slate-200/70 bg-slate-50/80 py-16 sm:py-20"
      aria-labelledby="authority-hub-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Resume resources</p>
          <h2
            id="authority-hub-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Guides to improve ATS compatibility
          </h2>
          <p className="mt-4 text-slate-600">
            Deep dives written for job seekers—not keyword fluff. Start with the{" "}
            <Link
              href="/ats-resume-hub"
              className="font-semibold text-[#16a34a] underline underline-offset-2"
            >
              ATS resume hub
            </Link>
            .
          </p>
        </div>
        <ul className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {guides.map((g) => (
            <li key={g.href}>
              <Link
                href={g.href}
                className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
              >
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {g.title}
                </h3>
                <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
                  {g.desc}
                </p>
                <span className="mt-4 text-sm font-semibold text-[#16a34a]">
                  Read guide →
                </span>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Problem → solution band for homepage conversion and SEO context. */
export function ProblemSolutionSection() {
  return (
    <section
      className="border-b border-slate-200/80 bg-slate-50/90 py-16 sm:py-20"
      aria-labelledby="problem-solution-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Why silence isn&apos;t always about you</p>
          <h2
            id="problem-solution-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Rejection often starts in the software—not in your story
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            The goal isn&apos;t to &quot;beat&quot; a robot. It&apos;s to{" "}
            <strong className="font-semibold text-slate-900">improve your ATS score</strong>{" "}
            the honest way: clear structure, relevant keywords, and a file that
            behaves like an{" "}
            <strong className="font-semibold text-slate-900">
              ATS compatible resume
            </strong>
            .
          </p>
        </div>
        <div className="mt-14 grid gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="rounded-3xl border border-slate-200/80 bg-white p-8 shadow-soft">
            <h3 className="font-display text-xl font-bold text-slate-900">
              Why resumes get rejected early
            </h3>
            <ul className="mt-5 space-y-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                PDFs that look fine on screen but extract like a jigsaw puzzle
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Fancy layouts that shuffle your skills away from experience
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Language that doesn&apos;t match how the employer describes the role
              </li>
              <li className="flex gap-3">
                <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-rose-400" />
                Bullets that list tasks but never show impact
              </li>
            </ul>
          </div>
          <div className="rounded-3xl border border-emerald-200/80 bg-gradient-to-br from-white via-emerald-50/40 to-white p-8 shadow-soft">
            <h3 className="font-display text-xl font-bold text-slate-900">
              How ATS works—and how we help
            </h3>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              Most applicant systems ingest your file, pull out text, and file it
              under headings like Experience and Skills. Recruiters search for
              tools and phrases that match the job. If your resume never maps
              cleanly—or those phrases aren&apos;t there—you simply don&apos;t surface the
              same way.
            </p>
            <p className="mt-4 text-sm leading-relaxed text-slate-600 sm:text-base">
              This tool gives you a practical preview: structure risks, keyword fit,
              and plain-language suggestions so you can fix what matters before you
              send another application into the void.
            </p>
            <div className="mt-6">
              <Link
                href={RESUME_CHECKER_PATH}
                className="btn-gradient inline-flex px-7 text-sm sm:text-base"
              >
                Analyze My Resume Free
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/** Compact trust row below key sections. */
export function HomeTrustStrip() {
  const items = [
    {
      title: "No signup pressure",
      body: "Use it when you need it—no forced account or trial countdown.",
    },
    {
      title: "Beginner-friendly",
      body: "We explain what to fix and why, without HR jargon or gatekeeping.",
    },
    {
      title: "Built for competitive markets",
      body: "Especially helpful when you apply at volume—locally, internationally, or for remote roles worldwide.",
    },
  ];
  return (
    <section className="border-b border-slate-200/70 bg-white py-10 sm:py-12">
      <div className="mx-auto grid max-w-6xl gap-6 px-4 sm:grid-cols-3 sm:px-6 lg:px-8">
        {items.map((item) => (
          <div
            key={item.title}
            className="flex gap-4 rounded-2xl border border-slate-100 bg-slate-50/60 px-5 py-4"
          >
            <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#4ade80]/15 text-[#16a34a]">
              <IconShield className="h-5 w-5" aria-hidden />
            </span>
            <div>
              <p className="font-semibold text-slate-900">{item.title}</p>
              <p className="mt-1 text-sm leading-relaxed text-slate-600">
                {item.body}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

/**
 * Trust + education grid: ATS context for global job seekers + internal links.
 */
export function HomeAtsEducationSection() {
  const blocks = [
    {
      title: "Why ATS-friendly resumes matter",
      body: "In busy hiring queues, software often ingests your file before a person does. An ATS friendly resume—clean text, clear headings—helps you improve your visibility without gaming the system.",
      href: "/blog/how-to-make-your-resume-ats-friendly-2026-complete-guide",
      cta: "Read the 2026 guide",
    },
    {
      title: "How ATS systems read your file",
      body: "Most tools pull out skills, titles, and dates into searchable fields. If your layout hides text or shuffles order, recruiters may not find you when they search— even with great experience.",
      href: "/blog/how-to-make-your-resume-ats-friendly-2026-complete-guide",
      cta: "How parsing works",
    },
    {
      title: "Common resume mistakes",
      body: "Image-only PDFs, flashy multi-column templates, and buzzword-heavy bullets with no proof are repeat offenders. Small fixes can improve your ATS score more than another font change.",
      href: "/blog/10-resume-mistakes-ats-rejections-2026",
      cta: "10 mistakes to avoid",
    },
    {
      title: "Why resumes get rejected early",
      body: "Sometimes it is fit; often it is format or missing keywords next to real skills. Separating parser issues from a true role mismatch saves you from rewriting the wrong thing.",
      href: "/blog/why-resume-rejected-ats-top-reasons-fixes",
      cta: "Rejection reasons + fixes",
    },
  ];
  return (
    <section
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="home-ats-edu-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Understanding ATS</p>
          <h2
            id="home-ats-edu-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            What you are up against—and how resume optimization helps
          </h2>
          <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
            Whether you apply in North America, Europe, Asia-Pacific, the Middle
            East, Africa, or remotely, the same rules tend to apply: build an{" "}
            <strong className="font-semibold text-slate-900">
              ATS compatible resume
            </strong>
            , align honest keywords, and check before you send.
          </p>
        </div>
        <ul className="mt-14 grid gap-6 sm:grid-cols-2 lg:gap-8">
          {blocks.map((b) => (
            <li key={b.title}>
              <article className="flex h-full flex-col rounded-2xl border border-slate-200/90 bg-slate-50/40 p-6 shadow-sm transition hover:border-emerald-200/80 hover:bg-white hover:shadow-md sm:p-7">
                <h3 className="font-display text-lg font-bold text-slate-900">
                  {b.title}
                </h3>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-slate-600 sm:text-[15px]">
                  {b.body}
                </p>
                <Link
                  href={b.href}
                  className="mt-5 inline-flex text-sm font-semibold text-[#16a34a] underline decoration-[#4ade80]/50 underline-offset-4 transition hover:text-[#15803d]"
                >
                  {b.cta} →
                </Link>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

/** Short, skimmable tips for retention and trust. */
export function HomeQuickResumeTipsSection() {
  const tips = [
    {
      title: "Lead with fit",
      body: "Put role-relevant wins in the top third of page one—recruiters skim there first.",
    },
    {
      title: "Mirror the posting—honestly",
      body: "Reuse phrases from the job description only where you can explain them in an interview.",
    },
    {
      title: "One column wins",
      body: "Simple layouts are easier for ATS and for tired humans on a phone screen.",
    },
    {
      title: "Prove, don't declare",
      body: 'Swap "hard worker" for a bullet with scope, tool, or outcome.',
    },
    {
      title: "Re-check after edits",
      body: "Run the online resume checker again on the exact file you will upload.",
    },
    {
      title: "Keep a master file",
      body: "Duplicate and tailor per role cluster instead of starting from scratch every time.",
    },
  ];
  return (
    <section
      className="border-b border-slate-200/70 bg-gradient-to-b from-slate-50/90 to-white py-16 sm:py-20"
      aria-labelledby="home-quick-tips-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div className="max-w-xl">
            <p className="section-eyebrow">Quick wins</p>
            <h2
              id="home-quick-tips-heading"
              className="mt-3 font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
            >
              Resume tips you can use in the next ten minutes
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              Small changes add up. Pair these with our{" "}
              <strong className="font-semibold text-slate-900">
                ATS Resume Checker
              </strong>{" "}
              to see what moves the needle for your file.
            </p>
          </div>
          <Link
            href={RESUME_CHECKER_PATH}
            className="inline-flex h-11 shrink-0 items-center justify-center rounded-xl bg-slate-900 px-5 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800"
          >
            Analyze My Resume Free
          </Link>
        </div>
        <ul className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {tips.map((t) => (
            <li key={t.title}>
              <div className="h-full rounded-xl border border-slate-200/80 bg-white px-4 py-4 shadow-sm sm:px-5 sm:py-5">
                <p className="text-sm font-semibold text-slate-900">{t.title}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  {t.body}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

function ScoreTile({
  label,
  value,
  tone,
}: {
  label: string;
  value: number;
  tone: "emerald" | "mint" | "amber";
}) {
  const ring = {
    emerald: "from-emerald-400 to-emerald-600",
    mint: "from-brand-400 to-brand-600",
    amber: "from-amber-400 to-orange-500",
  }[tone];
  return (
    <div className="rounded-2xl border border-white/70 bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <p className="text-xs font-semibold uppercase tracking-wide text-slate-500">
          {label}
        </p>
        <span
          className={`inline-flex h-8 w-8 items-center justify-center rounded-full bg-gradient-to-br ${ring} text-[10px] font-bold text-white`}
        >
          {value}
        </span>
      </div>
      <div className="mt-4 h-2 w-full overflow-hidden rounded-full bg-slate-100">
        <div
          className={`h-full rounded-full bg-gradient-to-r ${ring}`}
          style={{ width: `${value}%` }}
        />
      </div>
      <p className="mt-2 text-xs text-slate-500">{value}/100</p>
    </div>
  );
}

function FixRow({ title, detail }: { title: string; detail: string }) {
  return (
    <div className="flex gap-3 rounded-xl bg-white/70 p-4 ring-1 ring-slate-100">
      <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-md bg-brand-100 text-accent-600">
        <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" aria-hidden>
          <path
            d="M5 12l5 5L20 7"
            stroke="currentColor"
            strokeWidth="2.4"
            fill="none"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      <div>
        <p className="text-sm font-semibold text-slate-900">{title}</p>
        <p className="mt-0.5 text-xs text-slate-600">{detail}</p>
      </div>
    </div>
  );
}

export function FeatureHighlights() {
  const items = [
    {
      title: "ATS score analysis",
      body: "See how strong your resume looks against common ATS-style signals—readability, structure, and fit—so you know what to tackle first.",
      icon: IconChart,
    },
    {
      title: "Keyword & resume optimization",
      body: "Paste a job description to spot gaps in language: where you match, what’s missing, and how to weave terms in without sounding fake.",
      icon: IconSparkle,
    },
    {
      title: "Formatting & parsing checks",
      body: "Catch layout habits that break extraction—before a portal mangles your experience into the wrong order.",
      icon: IconShield,
    },
    {
      title: "Actionable improvement insights",
      body: "Plain-English suggestions you can apply tonight: stronger bullets, clearer sections, and a more confident story on page one.",
      icon: IconSparkle,
    },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-eyebrow mx-auto">What you get</p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            How our ATS Resume Checker works
          </h2>
        <p className="mt-4 text-lg text-slate-600">
          This is a focused{" "}
          <strong className="font-semibold text-slate-900">online resume checker</strong>{" "}
          for people who are tired of guessing why their applications vanish.
        </p>
      </div>
      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {items.map((item) => (
          <div
            key={item.title}
            className="card-elevated group p-6"
          >
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#4ade80] text-white shadow-[0_4px_16px_-4px_rgba(34,197,94,0.45)] ring-1 ring-white/30">
              <item.icon className="h-5 w-5" />
            </div>
            <h3 className="mt-5 text-base font-semibold text-slate-900">
              {item.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-600">
              {item.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function HowItWorksSection() {
  const steps = [
    {
      step: "01",
      title: "Paste your resume",
      body: "Paste text on the homepage or upload PDF/DOCX on the checker—same parsing hiring software uses worldwide.",
    },
    {
      step: "02",
      title: "Get your ATS score",
      body: "See ATS score %, missing keywords, formatting issues, and readability—free resume score checker results in minutes.",
    },
    {
      step: "03",
      title: "Improve with suggestions",
      body: "Apply AI resume suggestions, fix keywords, and re-check until your resume optimization score improves.",
    },
  ];
  return (
    <section className="relative border-y border-slate-200/70 bg-slate-50/80 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Simple 3-step process</p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Upload. Analyze. Improve—then apply with confidence
          </h2>
        </div>
        <ol className="mt-14 grid gap-6 md:grid-cols-3">
          {steps.map((s) => (
            <li
              key={s.step}
              className="card-elevated relative overflow-hidden p-6"
            >
              <span className="font-display text-5xl font-bold tracking-tight text-gradient">
                {s.step}
              </span>
              <h3 className="mt-3 text-lg font-semibold text-slate-900">
                {s.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {s.body}
              </p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href={RESUME_CHECKER_PATH}
            className="btn-gradient px-8 text-base font-semibold"
          >
            Check Resume Score
          </Link>
          <Link
            href="/blog/how-to-make-your-resume-ats-friendly-2026-complete-guide"
            className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-6 text-sm font-semibold text-slate-700 shadow-sm transition hover:border-accent-400 hover:text-accent-600"
          >
            Read the ATS-friendly guide
          </Link>
        </div>
      </div>
    </section>
  );
}
