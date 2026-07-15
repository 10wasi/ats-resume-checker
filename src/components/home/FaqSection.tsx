import Link from "next/link";
import { homepageFaqCompact, type FaqItem } from "@/lib/seo/faq";

const FAQ_RELATED: Partial<Record<string, { href: string; label: string }>> = {
  "What is a free ATS resume checker?": {
    href: "/ats-resume-checker",
    label: "ATS resume checker guide",
  },
  "What does my resume ATS score measure?": {
    href: "/resume-score-checker",
    label: "Resume score checker",
  },
  "Why do resumes fail ATS systems?": {
    href: "/common-ats-resume-rejection-reasons",
    label: "ATS rejection reasons",
  },
  "How can I improve my ATS score?": {
    href: "/how-to-improve-resume-score",
    label: "Improve resume score",
  },
  "Do you store my resume?": {
    href: "/privacy",
    label: "Privacy policy",
  },
  "Which file formats work with the resume scanner?": {
    href: "/free-resume-checker-online",
    label: "Free resume checker online",
  },
  "How does the resume parser work?": {
    href: "/resume-parsing",
    label: "Resume parsing guide",
  },
  "Is this resume checker really free?": {
    href: "/methodology",
    label: "Scoring methodology",
  },
};

function FaqAnswer({ item }: { item: FaqItem }) {
  const related = FAQ_RELATED[item.question];
  return (
    <>
      <p className="mt-3 text-sm leading-relaxed text-slate-600 sm:text-base">
        {item.answer}
      </p>
      {related ? (
        <Link
          href={related.href}
          className="mt-3 inline-flex text-sm font-semibold text-[#16a34a] underline underline-offset-2"
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
      className="mx-auto max-w-6xl px-4 py-10 sm:px-6 sm:py-12 lg:px-8"
      aria-labelledby="home-faq-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <h2
          id="home-faq-heading"
          className="font-display text-xl font-bold tracking-tight text-slate-900 sm:text-2xl"
        >
          ATS resume checker FAQ
        </h2>
      </div>
      <div className="mx-auto mt-8 max-w-2xl divide-y divide-slate-200 overflow-hidden rounded-xl border border-slate-200 bg-white">
        {homepageFaqCompact.map((item) => (
          <details
            key={item.question}
            className="group px-5 py-5 transition hover:bg-slate-50/60 sm:px-7 [&_summary::-webkit-details-marker]:hidden"
          >
            <summary className="flex min-h-[44px] cursor-pointer list-none items-center justify-between gap-4 text-left text-base font-semibold text-slate-900">
              {item.question}
              <span
                className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-slate-200 bg-white text-slate-500 transition group-open:rotate-45 group-open:border-accent-400 group-open:text-accent-500"
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
            <FaqAnswer item={item} />
          </details>
        ))}
      </div>
    </section>
  );
}
