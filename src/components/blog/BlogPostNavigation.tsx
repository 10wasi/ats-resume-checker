import Link from "next/link";
import type { BlogPostMeta } from "@/lib/blog/navigation";

type Props = {
  prev: BlogPostMeta | null;
  next: BlogPostMeta | null;
  popular: BlogPostMeta[];
};

export function BlogPostNavigation({ prev, next, popular }: Props) {
  return (
    <div className="not-prose mt-16 space-y-12 border-t border-slate-200 pt-12">
      {(prev || next) && (
        <nav aria-label="Article navigation" className="grid gap-4 sm:grid-cols-2">
          {prev ? (
            <Link
              href={`/blog/${prev.slug}`}
              className="group rounded-2xl border border-slate-200 bg-slate-50/60 p-5 transition hover:border-emerald-300 hover:bg-white"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                ← Previous article
              </span>
              <span className="mt-2 block font-display text-base font-bold text-slate-900 group-hover:text-[#16a34a]">
                {prev.title}
              </span>
            </Link>
          ) : (
            <div />
          )}
          {next ? (
            <Link
              href={`/blog/${next.slug}`}
              className="group rounded-2xl border border-slate-200 bg-slate-50/60 p-5 text-right transition hover:border-emerald-300 hover:bg-white sm:col-start-2"
            >
              <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
                Next article →
              </span>
              <span className="mt-2 block font-display text-base font-bold text-slate-900 group-hover:text-[#16a34a]">
                {next.title}
              </span>
            </Link>
          ) : null}
        </nav>
      )}

      {popular.length > 0 && (
        <section aria-labelledby="popular-articles-heading">
          <p className="section-eyebrow">Popular on ResumeIQ</p>
          <h2
            id="popular-articles-heading"
            className="mt-3 font-display text-xl font-bold text-slate-900 sm:text-2xl"
          >
            Most-read ATS guides
          </h2>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2">
            {popular.map((p) => (
              <li key={p.slug}>
                <Link
                  href={`/blog/${p.slug}`}
                  className="flex flex-col rounded-xl border border-slate-200/90 bg-white px-4 py-3 text-sm transition hover:border-emerald-300"
                >
                  <span className="font-semibold text-slate-900">{p.title}</span>
                  <span className="mt-1 line-clamp-2 text-slate-600">{p.description}</span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      )}
    </div>
  );
}
