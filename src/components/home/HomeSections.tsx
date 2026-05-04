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
            Free AI resume checker · ATS resume score · CV checker online free
          </p>
          <h1 className="mt-6 text-balance font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl lg:text-[2.75rem] lg:leading-[1.12]">
            Free ATS Resume Checker – Improve Your CV Score Instantly (2026)
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-pretty text-lg leading-relaxed text-slate-600">
            Check your resume score and strengthen every job application resume.
            Upload or paste your CV, add a job post optionally, and get an
            honest ATS-style score plus keyword and formatting feedback — no
            login.
          </p>
          <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:items-center">
            <Link href={RESUME_CHECKER_PATH} className="btn-gradient px-8 text-base">
              Improve Your Resume
            </Link>
            <Link
              href="/blog"
              className="inline-flex h-12 items-center justify-center rounded-xl border border-slate-200 bg-white px-8 text-base font-semibold text-slate-800 shadow-sm transition hover:border-accent-400 hover:text-accent-500"
            >
              Resume tips &amp; guides
            </Link>
          </div>
          <p className="mt-6 text-sm text-slate-500">
            100% free utility — no paywall, no credit card, no email gate.
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
      title: "See exactly what ATS reads",
      body: "Preview your real extracted text before any score, so the feedback is grounded — not a black box.",
      icon: IconUpload,
    },
    {
      title: "AI feedback that actually helps",
      body: "Specific keyword gaps, bullet rewrites, and formatting risks — written like a hiring manager would, not a chatbot.",
      icon: IconSparkle,
    },
    {
      title: "Match any job posting",
      body: "Paste a listing and we score keyword fit, seniority signals, and missing experience — in one report.",
      icon: IconChart,
    },
    {
      title: "Private by default",
      body: "Your file is processed for the request and never shared. No public profiles, no shadow databases.",
      icon: IconShield,
    },
  ];

  return (
    <section className="relative mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-eyebrow mx-auto">Why use this free tool</p>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Built like a search utility — fast, clear, no clutter
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Think of it as a job resume checker meets AI resume analyzer: you get
          structure, keywords, and formatting notes without a SaaS onboarding
          flow.
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
      body: "PDF or DOCX, up to 10 MB. We extract the same text most ATS read first.",
    },
    {
      step: "02",
      title: "Paste a job description (optional)",
      body: "Adds keyword optimization and posting alignment to your ATS resume score.",
    },
    {
      step: "03",
      title: "Improve your resume",
      body: "Tap Improve Your Resume to see your score, strengths, weaknesses, and suggestions — export a report when you are happy.",
    },
  ];
  return (
    <section className="relative border-y border-slate-200/70 bg-slate-50/80 py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">How it works</p>
          <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
            From upload to interview-ready in three steps
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
      </div>
    </section>
  );
}
