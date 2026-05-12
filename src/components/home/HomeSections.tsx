import Link from "next/link";
import {
  IconChart,
  IconShield,
  IconSparkle,
  IconUpload,
} from "@/components/ui/Icons";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

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
            Free ATS Resume Checker · online resume checker for US &amp; UK job
            seekers
          </p>
          <h1 className="mt-6 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.85rem] lg:leading-[1.1]">
            You hit submit—then nothing. Let&apos;s fix what hiring software
            actually sees.
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
            Online applications in the US and UK usually go through applicant
            software before a recruiter reads your name. If your file is hard to
            parse or your wording doesn&apos;t match the role, you can be screened
            out on a technicality—not because you&apos;re unqualified. Our{" "}
            <strong className="font-semibold text-slate-800">
              ATS Resume Checker
            </strong>{" "}
            shows a realistic read of your content so you can tighten an{" "}
            <strong className="font-semibold text-slate-800">
              ATS friendly resume
            </strong>{" "}
            and move on with confidence.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-8 text-base">
              See my ATS score — free
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-base font-semibold text-slate-800 shadow-sm transition hover:border-accent-400 hover:text-accent-500"
            >
              Read free resume guides
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            No account, no card, no tricks—just honest feedback to help you improve your ATS score and resume optimization before the next application.
          </p>
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
                Run the ATS Resume Checker
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
      body: "Especially helpful when you're applying at volume in the US, UK, or remote-first hiring pools.",
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
          Everything you need for an ATS friendly resume—without the SaaS runaround
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
      title: "Upload your resume",
      body: "Drop in PDF or DOCX (up to 10 MB). We pull the same kind of text hiring software reads first—so you’re not optimizing a fantasy version of your file.",
    },
    {
      step: "02",
      title: "Analyze your ATS score",
      body: "Get your resume ATS score plus structure and keyword signals. Add a job post anytime to sharpen resume optimization for that specific role.",
    },
    {
      step: "03",
      title: "Improve your resume",
      body: "Apply the fixes that matter—headings, bullets, keywords—then re-check until you’re happy. Export a report when you’re ready to apply for real.",
    },
  ];
  return (
    <section className="relative border-y border-slate-200/70 bg-slate-50/80 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Simple 3-step process</p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            Upload. Analyze. Improve—then apply with your head held high
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
        <div className="mt-12 flex justify-center">
          <Link
            href={RESUME_CHECKER_PATH}
            className="btn-gradient px-8 text-base font-semibold"
          >
            Start with step 1 — upload your resume
          </Link>
        </div>
      </div>
    </section>
  );
}
