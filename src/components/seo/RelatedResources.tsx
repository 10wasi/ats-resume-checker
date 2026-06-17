import Link from "next/link";
import { getRelatedResources } from "@/lib/seo/related-resources";

type Props = {
  path: string;
  heading?: string;
  eyebrow?: string;
  excludeHref?: string;
  limit?: number;
  className?: string;
};

export function RelatedResources({
  path,
  heading = "Related resources",
  eyebrow = "ATS resume optimization",
  excludeHref,
  limit = 6,
  className = "",
}: Props) {
  const items = getRelatedResources(path, { excludeHref, limit });
  if (items.length === 0) return null;

  return (
    <nav
      className={`not-prose mt-14 rounded-2xl border border-slate-200/90 bg-slate-50/60 p-6 sm:p-8 ${className}`}
      aria-label="Related resources"
    >
      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
        {eyebrow}
      </p>
      <h2 className="mt-2 font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl">
        {heading}
      </h2>
      <p className="mt-2 text-sm text-slate-600">
        Continue with connected tools and guides—each link supports measurable ATS
        improvements, not thin tips.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <li key={item.href}>
            <Link
              href={item.href}
              className="group flex h-full flex-col rounded-xl border border-slate-200/80 bg-white p-4 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
            >
              <span className="font-display text-sm font-bold text-slate-900 group-hover:text-[#16a34a]">
                {item.title}
              </span>
              <span className="mt-1 flex-1 text-xs leading-relaxed text-slate-600">
                {item.description}
              </span>
              <span className="mt-3 text-xs font-semibold text-[#16a34a]">
                Open resource →
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}
