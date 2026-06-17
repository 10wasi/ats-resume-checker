import type { ReactNode } from "react";
import type { FaqItem } from "@/lib/seo/faq";

type Props = {
  heading: string;
  items: FaqItem[];
  intro?: ReactNode;
  id?: string;
  className?: string;
};

export function PageFaqSection({
  heading,
  items,
  intro,
  id = "page-faq-heading",
  className = "",
}: Props) {
  if (items.length === 0) return null;

  return (
    <section
      className={`mt-16 border-t border-slate-200 pt-14 ${className}`}
      aria-labelledby={id}
    >
      <h2
        id={id}
        className="font-display text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl"
      >
        {heading}
      </h2>
      {intro ? <div className="mt-3 text-slate-600">{intro}</div> : null}
      <div className="mt-10 space-y-10">
        {items.map((item) => (
          <div key={item.question}>
            <h3 className="text-lg font-semibold text-slate-900">{item.question}</h3>
            <p className="mt-2 leading-relaxed text-slate-700">{item.answer}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
