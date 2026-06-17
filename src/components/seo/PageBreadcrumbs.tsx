import Link from "next/link";
import type { BreadcrumbItem } from "./BreadcrumbJsonLd";

type Props = {
  items: BreadcrumbItem[];
  className?: string;
};

export function PageBreadcrumbs({ items, className = "" }: Props) {
  return (
    <nav aria-label="Breadcrumb" className={`text-sm text-slate-500 ${className}`}>
      <ol className="flex flex-wrap items-center gap-x-2 gap-y-1">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.path} className="flex items-center gap-x-2">
              {index > 0 ? <span aria-hidden>/</span> : null}
              {isLast ? (
                <span className="text-slate-700">{item.name}</span>
              ) : (
                <Link
                  href={item.path}
                  className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/35 underline-offset-2 hover:text-[#16a34a]"
                >
                  {item.name}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
