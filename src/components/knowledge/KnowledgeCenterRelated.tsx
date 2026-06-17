import Link from "next/link";
import {
  getKnowledgePage,
  getRelatedKnowledgePages,
  KNOWLEDGE_CENTER_PATH,
} from "@/lib/content/knowledge-center-pages";

type Props = {
  excludeId: string;
  /** Override default related pages (same id as registry). */
  relatedIds?: string[];
  heading?: string;
};

function resolvePages(excludeId: string, relatedIds?: string[]) {
  if (relatedIds?.length) {
    return relatedIds
      .map((id) => getKnowledgePage(id))
      .filter((p) => p !== undefined);
  }
  return getRelatedKnowledgePages(excludeId, 4);
}

export function KnowledgeCenterRelated({
  excludeId,
  relatedIds,
  heading = "Related resources",
}: Props) {
  const pages = resolvePages(excludeId, relatedIds);

  return (
    <nav
      className="not-prose mt-14 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-8"
      aria-label="Related knowledge center guides"
    >
      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
        ATS Knowledge Center
      </p>
      <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        {heading}
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Explore more guides or browse the full{" "}
        <Link
          href={KNOWLEDGE_CENTER_PATH}
          className="font-semibold text-[#16a34a] underline underline-offset-2"
        >
          ATS Knowledge Center
        </Link>
        .
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {pages.map((page) => (
          <li key={page.id}>
            <Link
              href={page.href}
              className="group flex h-full flex-col rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
            >
              <span className="font-display text-sm font-bold text-slate-900 group-hover:text-[#16a34a]">
                {page.title}
              </span>
              <span className="mt-1 flex-1 text-xs leading-relaxed text-slate-600">
                {page.description}
              </span>
              <span className="mt-3 text-xs font-semibold text-[#16a34a]">
                {page.cta} →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
