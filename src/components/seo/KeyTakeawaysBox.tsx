type Props = {
  items: string[];
  heading?: string;
};

/** Scannable summary box for long guides — improves mobile UX and helpful content signals. */
export function KeyTakeawaysBox({
  items,
  heading = "Key takeaways",
}: Props) {
  return (
    <aside
      className="not-prose my-8 rounded-2xl border border-emerald-200/80 bg-emerald-50/40 p-5 sm:p-6"
      aria-label={heading}
    >
      <h2 className="font-display text-lg font-bold text-slate-900">{heading}</h2>
      <ul className="mt-3 space-y-2 text-sm leading-relaxed text-slate-700">
        {items.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald-500" aria-hidden />
            {item}
          </li>
        ))}
      </ul>
    </aside>
  );
}
