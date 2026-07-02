import Link from "next/link";
import { getProfessionHub } from "@/lib/content/profession-hubs/registry";
import { getResumeExampleBySlug } from "@/lib/content/resume-examples/registry";
import { getResumeKeywordsBySlug } from "@/lib/content/resume-keywords/registry";

type Props = { currentSlug: string; roleTitle: string };

/** Cross-links to related profession hubs from example/keyword relatedSlugs. */
export function ProfessionRelatedCareers({ currentSlug, roleTitle }: Props) {
  const example = getResumeExampleBySlug(currentSlug);
  const keywords = getResumeKeywordsBySlug(currentSlug);
  const relatedSlugs = example?.relatedSlugs ?? keywords?.relatedSlugs ?? [];

  const hubs = relatedSlugs
    .map((slug) => getProfessionHub(slug))
    .filter((h): h is NonNullable<typeof h> => h != null && h.slug !== currentSlug)
    .slice(0, 4);

  if (hubs.length === 0) return null;

  return (
    <section
      className="not-prose mt-12"
      aria-labelledby="related-careers-heading"
    >
      <h2
        id="related-careers-heading"
        className="font-display text-xl font-bold text-slate-900"
      >
        Related careers for {roleTitle.toLowerCase()} applicants
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Pivoting or applying across similar roles? Browse connected profession hubs.
      </p>
      <ul className="mt-4 grid gap-3 sm:grid-cols-2">
        {hubs.map((hub) => (
          <li key={hub.slug}>
            <Link
              href={hub.path}
              className="block rounded-xl border border-slate-200 bg-white p-4 text-sm transition hover:border-emerald-300 hover:shadow-sm"
            >
              <span className="font-semibold text-slate-900">{hub.title} hub</span>
              <p className="mt-1 text-slate-600">{hub.intro.slice(0, 100)}…</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
