import Link from "next/link";

type Props = {
  pillarHref: string;
  pillarTitle: string;
  context: string;
};

/** Links spoke pages to a canonical pillar without hiding unique intent. */
export function TopicPillarBanner({ pillarHref, pillarTitle, context }: Props) {
  return (
    <aside
      className="not-prose rounded-2xl border border-emerald-200/80 bg-emerald-50/50 p-5 sm:p-6"
      aria-label="Related master guide"
    >
      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-800">
        Part of a larger guide
      </p>
      <p className="mt-2 text-sm leading-relaxed text-slate-700">{context}</p>
      <Link
        href={pillarHref}
        className="mt-3 inline-flex text-sm font-bold text-[#16a34a] underline"
      >
        {pillarTitle} →
      </Link>
    </aside>
  );
}
