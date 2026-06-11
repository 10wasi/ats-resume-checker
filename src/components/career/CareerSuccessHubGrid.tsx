import Link from "next/link";
import { CAREER_HUB_INDEX } from "@/lib/content/career-success-hub/registry";

export function CareerSuccessHubGrid() {
  return (
    <ul className="not-prose mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
      {CAREER_HUB_INDEX.map((item) => (
        <li key={item.id}>
          <Link
            href={item.path}
            className="group flex h-full flex-col rounded-2xl border border-slate-200/90 bg-white p-6 shadow-sm transition hover:border-emerald-300 hover:shadow-md"
          >
            <span className="inline-flex w-fit rounded-full bg-emerald-50 px-2.5 py-0.5 text-[10px] font-bold uppercase tracking-wide text-emerald-800">
              {item.badge}
            </span>
            <h3 className="mt-3 font-display text-lg font-bold text-slate-900 group-hover:text-[#16a34a]">
              {item.title}
            </h3>
            <p className="mt-2 flex-1 text-sm leading-relaxed text-slate-600">
              {item.description}
            </p>
            <span className="mt-4 text-sm font-semibold text-[#16a34a]">
              Open →
            </span>
          </Link>
        </li>
      ))}
    </ul>
  );
}
