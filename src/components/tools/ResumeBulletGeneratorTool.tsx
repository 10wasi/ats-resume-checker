"use client";

import Link from "next/link";
import { useMemo, useState } from "react";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const VERBS = [
  "Led",
  "Built",
  "Delivered",
  "Optimized",
  "Reduced",
  "Increased",
  "Managed",
  "Implemented",
  "Designed",
  "Streamlined",
];

function buildBullets(
  role: string,
  action: string,
  metric: string,
  seed: number
): string[] {
  const r = role.trim() || "the team";
  const a = action.trim() || "key initiatives";
  const m = metric.trim() || "measurable outcomes";
  const verb = VERBS[seed % VERBS.length] ?? "Led";
  return [
    `${verb} ${a} for ${r}, resulting in ${m}.`,
    `Owned ${a} across ${r}; achieved ${m} through cross-functional collaboration.`,
    `Drove ${a} at ${r}—${m}—using data-informed prioritization and clear stakeholder communication.`,
  ];
}

export function ResumeBulletGeneratorTool() {
  const [role, setRole] = useState("");
  const [action, setAction] = useState("");
  const [metric, setMetric] = useState("");
  const [seed, setSeed] = useState(0);
  const [copiedIdx, setCopiedIdx] = useState<number | null>(null);

  const bullets = useMemo(
    () => buildBullets(role, action, metric, seed),
    [role, action, metric, seed]
  );

  const copyBullet = async (text: string, idx: number) => {
    try {
      await navigator.clipboard.writeText(text);
      setCopiedIdx(idx);
      window.setTimeout(() => setCopiedIdx(null), 2000);
    } catch {
      /* ignore */
    }
  };

  return (
    <div className="not-prose space-y-6">
      <div className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm sm:p-6">
        <p className="text-sm font-semibold text-slate-900">Bullet inputs</p>
        <p className="mt-1 text-sm text-slate-600">
          Describe what you did and the result—we draft ATS-friendly bullet patterns you
          can refine with real numbers.
        </p>
        <div className="mt-4 space-y-4">
          <div>
            <label htmlFor="bullet-role" className="text-xs font-semibold text-slate-700">
              Role / team context
            </label>
            <input
              id="bullet-role"
              value={role}
              onChange={(e) => setRole(e.target.value)}
              placeholder="e.g. 6-person product squad at SaaS startup"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="bullet-action" className="text-xs font-semibold text-slate-700">
              What you did (action + scope)
            </label>
            <input
              id="bullet-action"
              value={action}
              onChange={(e) => setAction(e.target.value)}
              placeholder="e.g. migration to microservices on AWS"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <div>
            <label htmlFor="bullet-metric" className="text-xs font-semibold text-slate-700">
              Result / metric
            </label>
            <input
              id="bullet-metric"
              value={metric}
              onChange={(e) => setMetric(e.target.value)}
              placeholder="e.g. 32% faster deploys and 99.9% uptime"
              className="mt-1 w-full rounded-lg border border-slate-200 px-3 py-2 text-sm"
            />
          </div>
          <button
            type="button"
            onClick={() => setSeed((s) => s + 1)}
            className="rounded-lg border border-emerald-300 bg-emerald-50 px-4 py-2 text-sm font-semibold text-emerald-900 hover:bg-emerald-100"
          >
            Regenerate bullets
          </button>
        </div>
      </div>

      <div className="space-y-3">
        <p className="text-sm font-semibold text-slate-900">Suggested bullets</p>
        {bullets.map((bullet, i) => (
          <div
            key={`${seed}-${i}`}
            className="flex flex-col gap-2 rounded-xl border border-slate-200 bg-slate-50/80 p-4 sm:flex-row sm:items-start sm:justify-between"
          >
            <p className="flex-1 text-sm leading-relaxed text-slate-800">{bullet}</p>
            <button
              type="button"
              onClick={() => copyBullet(bullet, i)}
              className="shrink-0 rounded-lg bg-white px-3 py-1.5 text-xs font-semibold text-[#16a34a] ring-1 ring-emerald-200 hover:bg-emerald-50"
            >
              {copiedIdx === i ? "Copied" : "Copy"}
            </button>
          </div>
        ))}
      </div>

      <div className="rounded-2xl border border-slate-200 bg-white p-5 sm:p-6">
        <p className="font-display text-lg font-semibold text-slate-900">
          Want AI rewrites on your full resume?
        </p>
        <p className="mt-2 text-sm text-slate-600">
          Run the ATS Resume Checker for score, keyword gaps, personalized improvement
          plan, and AI bullet improvements against a real job post.
        </p>
        <Link href={RESUME_CHECKER_PATH} className="btn-gradient mt-4 inline-flex px-5 text-sm">
          Analyze my resume free
        </Link>
      </div>
    </div>
  );
}
