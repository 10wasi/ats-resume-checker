import Link from "next/link";
import { homepageFaqItems, type FaqItem } from "@/lib/seo/faq";

const FAQ_RELATED: Partial<Record<string, { href: string; label: string }>> = {
  "How is my ATS score calculated?": {
    href: "/methodology",
    label: "Scoring methodology",
  },
  "Do you store my resume?": {
    href: "/privacy",
    label: "Privacy policy",
  },
};

function FaqAnswer({ item }: { item: FaqItem }) {
  const related = FAQ_RELATED[item.question];
  return (
    <>
      <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.answer}</p>
      {related ? (
        <Link
          href={related.href}
          className="mt-2 inline-flex text-xs font-semibold text-[#16a34a] underline underline-offset-2"
        >
          {related.label} →
        </Link>
      ) : null}
    </>
  );
}

export function FaqSection() {
  return (
    <section
      className="mx-auto max-w-3xl px-4 py-8 sm:px-6 sm:py-10 lg:px-8"
      aria-labelledby="home-faq-heading"
    >
      <h2
        id="home-faq-heading"
        className="text-center font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
      >
        ATS resume checker FAQ — 30+ expert answers
      </h2>
      <p className="mt-2 text-center text-sm text-slate-600">
        What is ATS, how parsers read PDFs, Canva risks, score improvement, and free AI resume
        checking—each answer targets a different search question.
      </p>
      <div className="mt-5 divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
        {homepageFaqItems.map((item) => (
          <details
            key={item.question}
            className="group px-4 py-4 sm:px-5 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-3 text-left text-sm font-semibold text-slate-900">
              {item.question}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 text-slate-400 transition group-open:rotate-45"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-3 w-3" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <FaqAnswer item={item} />
          </details>
        ))}
      </div>
    </section>
  );
}
