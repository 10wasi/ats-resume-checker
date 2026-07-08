import { slugifyHeading } from "@/components/blog/BlogExtras";

type TocEntry = { text: string; id: string; level: 2 | 3 };

function extractHeadings(content: string): TocEntry[] {
  const blocks = content.split(/\n\n+/).map((b) => b.trim());
  const entries: TocEntry[] = [];
  for (const block of blocks) {
    if (block.startsWith("## ")) {
      const text = block.slice(3).split("\n")[0].trim();
      entries.push({ text, id: slugifyHeading(text), level: 2 });
    } else if (block.startsWith("### ")) {
      const text = block.slice(4).split("\n")[0].trim();
      entries.push({ text, id: slugifyHeading(text), level: 3 });
    }
  }
  return entries;
}

type Props = {
  content: string;
  /** Minimum H2 headings before the ToC is shown. Default: 3 */
  minHeadings?: number;
};

/**
 * Table of contents extracted from markdown content.
 * Renders only when the article has enough headings to warrant navigation.
 * IDs match the anchors set by BlogContent's slugifyHeading.
 */
export function TableOfContents({ content, minHeadings = 3 }: Props) {
  const headings = extractHeadings(content);
  if (headings.length < minHeadings) return null;

  return (
    <nav
      aria-label="Table of contents"
      className="not-prose my-8 rounded-2xl border border-slate-200 bg-slate-50/70 p-5"
    >
      <p className="text-[11px] font-bold uppercase tracking-wider text-emerald-700">
        In this guide
      </p>
      <ol className="mt-3 space-y-1.5">
        {headings.map((h) => (
          <li
            key={h.id}
            className={h.level === 3 ? "pl-4" : ""}
          >
            <a
              href={`#${h.id}`}
              className={`block text-sm leading-snug transition-colors hover:text-emerald-700 ${
                h.level === 2
                  ? "font-medium text-slate-700"
                  : "text-slate-500"
              }`}
            >
              {h.level === 2 ? (
                <span className="mr-2 text-slate-300" aria-hidden>
                  →
                </span>
              ) : (
                <span className="mr-2 text-slate-200" aria-hidden>
                  ↳
                </span>
              )}
              {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
