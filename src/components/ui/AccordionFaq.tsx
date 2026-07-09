import type { ReactNode } from "react";
import type { FaqItem } from "@/lib/seo/faq";

type Props = {
  items: FaqItem[];
  /** Optional section heading rendered as h2 */
  heading?: string;
  headingId?: string;
  intro?: ReactNode;
  className?: string;
};

/**
 * Accessible, zero-JS accordion FAQ using native <details>/<summary>.
 * Renders as a bordered card stack. All items start collapsed.
 * Compatible with FAQPage JSON-LD (emitted separately via PageFaqJsonLd).
 */
export function AccordionFaq({
  items,
  heading,
  headingId = "faq-heading",
  intro,
  className = "",
}: Props) {
  if (items.length === 0) return null;

  return (
    <section
      className={`mt-16 border-t border-slate-200 pt-14 ${className}`}
      aria-labelledby={heading ? headingId : undefined}
    >
      {heading ? (
        <h2
          id={headingId}
          className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
        >
          {heading}
        </h2>
      ) : null}
      {intro ? <div className="mt-3 text-slate-600">{intro}</div> : null}

      <div className="mt-8 divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        {items.map((item, i) => (
          <details
            key={item.question}
            className="group px-5 py-0 transition hover:bg-slate-50/60 sm:px-7 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex min-h-[56px] cursor-pointer list-none items-center justify-between gap-4 py-4 text-left text-base font-semibold text-slate-900">
              <span>
                <span className="mr-2.5 text-xs font-bold text-emerald-600" aria-hidden>
                  Q{i + 1}
                </span>
                {item.question}
              </span>
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-400 transition group-open:rotate-45 group-open:border-emerald-400 group-open:text-emerald-600"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="pb-5 pt-1 leading-relaxed text-slate-700">{item.answer}</p>
          </details>
        ))}
      </div>
    </section>
  );
}
