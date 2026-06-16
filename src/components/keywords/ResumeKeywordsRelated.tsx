import Link from "next/link";
import { getRelatedResumeKeywords } from "@/lib/content/resume-keywords/registry";

type Props = { currentSlug: string };

export function ResumeKeywordsRelated({ currentSlug }: Props) {
  const items = getRelatedResumeKeywords(currentSlug);
  return (
    <section
      className="not-prose mt-14 border-t border-slate-200 pt-12"
      aria-labelledby="keywords-related-heading"
    >
      <h2
        id="keywords-related-heading"
        className="font-display text-xl font-bold text-slate-900"
      >
        Related profession keyword lists
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.slug}>
            <Link
              href={item.path}
              className="block rounded-xl border border-slate-200 bg-white p-4 text-sm transition hover:border-emerald-300 hover:shadow-sm"
            >
              <span className="font-semibold text-slate-900">
                {item.roleTitle} resume keywords
              </span>
              <p className="mt-1 text-slate-600">{item.ctr.description.slice(0, 100)}…</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
