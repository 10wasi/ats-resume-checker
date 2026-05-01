import { homepageFaqItems } from "@/lib/seo/faq";

export function FaqSection() {
  return (
    <section className="mx-auto max-w-6xl px-4 py-24 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-eyebrow mx-auto">FAQ</p>
        <h2 className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          Honest answers, not marketing fluff
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          The stuff people actually email us about — answered straight.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        {homepageFaqItems.map((item) => (
          <details
            key={item.question}
            className="group px-5 py-5 transition hover:bg-slate-50/60 sm:px-7 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900">
              {item.question}
              <span
                className="flex h-7 w-7 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-45 group-open:border-accent-400 group-open:text-accent-500"
                aria-hidden
              >
                <svg viewBox="0 0 24 24" className="h-3.5 w-3.5" fill="none">
                  <path
                    d="M12 5v14M5 12h14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>
              </span>
            </summary>
            <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
              {item.answer}
            </p>
          </details>
        ))}
      </div>
    </section>
  );
}
