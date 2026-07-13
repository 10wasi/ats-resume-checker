import Link from "next/link";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const improvements = [
  {
    section: "Professional Summary",
    scoreBefore: 42,
    scoreAfter: 88,
    before: "Motivated software developer with experience in web development and strong communication skills.",
    after: "Backend Engineer with 4 years building Node.js microservices. Reduced API error rate 62% and cut deploy time from 45 min to 8 min via CI/CD.",
    fixes: [
      { label: "Tools named", detail: "Node.js, CI/CD added" },
      { label: "Metric added", detail: "62% error reduction" },
      { label: "Role-specific", detail: "Replaced vague 'developer'" },
      { label: "Passive removed", detail: "Active ownership language" },
    ],
  },
  {
    section: "Experience Bullet",
    scoreBefore: 38,
    scoreAfter: 91,
    before: "Responsible for managing social media accounts and content creation for company brand.",
    after: "Grew Instagram 8K→46K in 11 months using HubSpot; drove 3,200 site sessions/month and reduced CPC 28%.",
    fixes: [
      { label: "Quantified growth", detail: "8K→46K followers" },
      { label: "Tool named", detail: "HubSpot added" },
      { label: "Business outcome", detail: "Sessions + CPC metric" },
      { label: "Action verb", detail: "'Grew' replaces 'Responsible for'" },
    ],
  },
];

function ScoreArc({ before, after }: { before: number; after: number }) {
  return (
    <div className="flex items-center gap-3">
      <div className="flex flex-col items-center rounded-xl bg-red-50 px-4 py-3 ring-1 ring-red-200">
        <span className="font-display text-2xl font-bold text-red-600">{before}</span>
        <span className="text-[10px] font-bold uppercase tracking-wide text-red-500">Before</span>
      </div>
      <div className="flex flex-col items-center gap-1">
        <span className="text-xl text-slate-300" aria-hidden>→</span>
        <span className="rounded-full bg-emerald-100 px-2 py-0.5 text-[10px] font-bold text-emerald-700">
          +{after - before} pts
        </span>
      </div>
      <div className="flex flex-col items-center rounded-xl bg-emerald-50 px-4 py-3 ring-1 ring-emerald-200">
        <span className="font-display text-2xl font-bold text-emerald-700">{after}</span>
        <span className="text-[10px] font-bold uppercase tracking-wide text-emerald-600">After</span>
      </div>
    </div>
  );
}

export function HomeResumeImprovementSection() {
  return (
    <section
      className="border-b border-slate-200/80 bg-white py-20 sm:py-24"
      aria-labelledby="improvement-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Resume improvement examples</p>
          <h2
            id="improvement-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            The exact changes that raise your ATS score
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            Not general advice — specific rewrites showing what changed, why it raised the score, and which fix had the most impact.
          </p>
        </div>

        <div className="mt-14 space-y-10">
          {improvements.map((item) => (
            <article
              key={item.section}
              className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm"
            >
              {/* Header */}
              <div className="flex flex-col items-start justify-between gap-4 border-b border-slate-100 bg-slate-50/60 px-6 py-5 sm:flex-row sm:items-center">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-600">
                    Section improved
                  </span>
                  <h3 className="mt-0.5 font-display text-xl font-bold text-slate-900">
                    {item.section}
                  </h3>
                </div>
                <ScoreArc before={item.scoreBefore} after={item.scoreAfter} />
              </div>

              {/* Text comparison */}
              <div className="grid gap-0 md:grid-cols-2">
                <div className="border-b border-slate-100 p-6 md:border-b-0 md:border-r">
                  <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-rose-600">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-xs font-bold">✗</span>
                    Before — score {item.scoreBefore}
                  </p>
                  <p className="rounded-xl border border-red-100 bg-red-50/50 p-4 text-sm leading-relaxed text-slate-700 italic">
                    &ldquo;{item.before}&rdquo;
                  </p>
                </div>
                <div className="p-6">
                  <p className="mb-3 flex items-center gap-2 text-sm font-semibold text-emerald-700">
                    <span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-xs font-bold">✓</span>
                    After — score {item.scoreAfter}
                  </p>
                  <p className="rounded-xl border border-emerald-100 bg-emerald-50/50 p-4 text-sm leading-relaxed text-slate-700 italic">
                    &ldquo;{item.after}&rdquo;
                  </p>
                </div>
              </div>

              {/* Fix breakdown */}
              <div className="border-t border-slate-100 bg-slate-50/40 px-6 py-5">
                <p className="mb-3 text-[11px] font-bold uppercase tracking-wider text-slate-400">
                  What changed — 4 specific fixes
                </p>
                <div className="grid gap-2 sm:grid-cols-2 lg:grid-cols-4">
                  {item.fixes.map((f) => (
                    <div
                      key={f.label}
                      className="rounded-xl border border-emerald-200/70 bg-white px-3 py-2.5"
                    >
                      <p className="text-xs font-bold text-emerald-700">{f.label}</p>
                      <p className="mt-0.5 text-xs text-slate-600">{f.detail}</p>
                    </div>
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-slate-600">
            Our ATS checker identifies the same issues in your resume and shows you the exact fixes to make.
          </p>
          <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-5 inline-flex px-8 text-base">
            Improve my resume free
          </Link>
          <p className="mt-3 text-sm text-slate-500">No signup · PDF or paste text · 2 min results</p>
        </div>
      </div>
    </section>
  );
}
