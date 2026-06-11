import Link from "next/link";
import { getRelatedCareerHubItems } from "@/lib/content/career-success-hub/registry";

type Props = { currentId: string };

export function CareerHubRelated({ currentId }: Props) {
  const items = getRelatedCareerHubItems(currentId);
  return (
    <section
      className="not-prose mt-14 border-t border-slate-200 pt-12"
      aria-labelledby="career-hub-related-heading"
    >
      <h2
        id="career-hub-related-heading"
        className="font-display text-xl font-bold text-slate-900"
      >
        More from the Career Success Hub
      </h2>
      <ul className="mt-5 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.id}>
            <Link
              href={item.path}
              className="block rounded-xl border border-slate-200 bg-white p-4 text-sm transition hover:border-emerald-300 hover:shadow-sm"
            >
              <span className="font-semibold text-slate-900">{item.title}</span>
              <p className="mt-1 text-slate-600">{item.description}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
