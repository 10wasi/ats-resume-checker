import Link from "next/link";
import { TOPIC_CLUSTER_LINKS } from "@/lib/content/topic-cluster";

type Props = {
  heading?: string;
  className?: string;
};

export function TopicClusterLinks({
  heading = "Resume optimization resources",
  className = "",
}: Props) {
  return (
    <section
      className={`not-prose mt-14 rounded-2xl border border-slate-200/90 bg-slate-50/80 p-6 sm:p-8 ${className}`}
      aria-labelledby="topic-cluster-heading"
    >
      <h2
        id="topic-cluster-heading"
        className="font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
      >
        {heading}
      </h2>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">
        Continue optimizing with our connected tools and guides—each step links
        back to measurable ATS improvements.
      </p>
      <ul className="mt-6 grid gap-3 sm:grid-cols-2">
        {TOPIC_CLUSTER_LINKS.map((link) => (
          <li key={link.href}>
            <Link
              href={link.href}
              className="group flex h-full flex-col rounded-xl border border-white bg-white p-4 shadow-sm transition hover:border-emerald-200 hover:shadow-md"
            >
              <span className="font-semibold text-slate-900 group-hover:text-[#16a34a]">
                {link.label} →
              </span>
              <span className="mt-1 text-sm text-slate-600">{link.desc}</span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
