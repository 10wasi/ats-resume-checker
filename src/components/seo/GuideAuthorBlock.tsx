import Link from "next/link";
import { ContentFreshnessLabel } from "@/components/seo/ContentFreshnessLabel";

type Props = { path?: string };

/** Full author / EEAT box — bio, review process, references. */
export function GuideAuthorBlock({ path }: Props) {
  return (
    <aside
      className="not-prose rounded-2xl border border-slate-200/90 bg-white p-5 shadow-sm sm:p-6"
      aria-label="Author and editorial review"
    >
      <div className="flex gap-4">
        <div
          className="flex h-14 w-14 shrink-0 items-center justify-center rounded-full bg-gradient-to-br from-emerald-400 to-emerald-600 text-sm font-bold text-white"
          aria-hidden
        >
          RQ
        </div>
        <div className="min-w-0 flex-1">
          <p className="font-display text-base font-bold text-slate-900">
            <Link href="/about" className="text-[#16a34a] underline">
              ResumeIQ Editorial Team
            </Link>
          </p>
          <p className="mt-1 text-sm text-slate-600">
            Career writers &amp; resume strategists — 8+ years covering applicant tracking
            systems, AI resume tools, and global hiring workflows.
          </p>
        </div>
      </div>

      <dl className="mt-5 grid gap-3 text-sm sm:grid-cols-2">
        <div>
          <dt className="font-semibold text-slate-900">Reviewed by</dt>
          <dd className="mt-0.5 text-slate-600">ResumeIQ Editorial (methodology-aligned)</dd>
        </div>
        <div>
          <dt className="font-semibold text-slate-900">Fact checked</dt>
          <dd className="mt-0.5 text-slate-600">
            Parse tests on PDF/DOCX exports +{" "}
            <Link href="/editorial-policy" className="text-[#16a34a] underline">
              editorial policy
            </Link>
          </dd>
        </div>
      </dl>

      {path ? <ContentFreshnessLabel path={path} className="mt-4" /> : null}

      <div className="mt-4 border-t border-slate-100 pt-4">
        <p className="text-xs font-bold uppercase tracking-wider text-slate-500">References</p>
        <ul className="mt-2 space-y-1 text-xs text-slate-600">
          <li>
            SHRM —{" "}
            <a
              href="https://www.shrm.org/topics-tools/news/talent-acquisition"
              className="underline hover:text-emerald-700"
              rel="noopener noreferrer"
              target="_blank"
            >
              Talent acquisition &amp; hiring workflow
            </a>
          </li>
          <li>
            <Link href="/methodology" className="underline hover:text-emerald-700">
              ResumeIQ scoring methodology
            </Link>
            {" · "}
            <Link href="/how-we-score-resumes" className="underline hover:text-emerald-700">
              How we score resumes
            </Link>
          </li>
        </ul>
      </div>
    </aside>
  );
}
