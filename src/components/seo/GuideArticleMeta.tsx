import Link from "next/link";
import {
  formatContentLastUpdated,
  getContentLastUpdated,
} from "@/lib/seo/content-freshness";

type Props = {
  path: string;
  readTime?: number;
  audience?: string;
};

/**
 * Compact above-the-fold EEAT strip for guide articles.
 * Shows last updated, editorial standards, methodology, and read time.
 * Placed directly below H1 to strengthen Google's trust signals.
 */
export function GuideArticleMeta({ path, readTime = 8, audience }: Props) {
  const iso = getContentLastUpdated(path);
  const updated = formatContentLastUpdated(iso);

  return (
    <div className="not-prose mt-5 flex flex-wrap items-center gap-x-4 gap-y-2 border-b border-slate-100 pb-5 text-xs text-slate-500">
      <span className="flex items-center gap-1.5">
        <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
        </svg>
        Updated{" "}
        <time dateTime={iso} className="font-medium text-slate-600">
          {updated}
        </time>
      </span>

      <span className="flex items-center gap-1.5">
        <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        {readTime} min read
      </span>

      <span className="flex items-center gap-1.5">
        <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
        <Link href="/about" className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-emerald-700">
          ResumeIQ Editorial
        </Link>
      </span>

      <span className="flex items-center gap-1.5">
        <svg className="h-3.5 w-3.5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
        <span className="font-medium text-slate-600">Reviewed by Editorial</span>
      </span>

      <span className="flex items-center gap-1.5">
        <svg className="h-3.5 w-3.5 shrink-0 text-emerald-500" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
        </svg>
        <span className="font-medium text-slate-600">Fact checked</span>
      </span>

      <span className="flex items-center gap-1.5">
        <svg className="h-3.5 w-3.5 shrink-0 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
        </svg>
        <Link href="/methodology" className="font-medium text-slate-600 underline decoration-slate-300 underline-offset-2 hover:text-emerald-700">
          Scoring methodology
        </Link>
      </span>

      {audience ? (
        <span className="w-full text-slate-500 sm:w-auto">
          <span className="font-medium text-slate-600">For: </span>
          {audience}
        </span>
      ) : null}
    </div>
  );
}
