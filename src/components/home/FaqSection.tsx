import Link from "next/link";
import { homepageFaqItems, type FaqItem } from "@/lib/seo/faq";
import { RESUME_CHECKER_PATH } from "@/lib/site-nav";

const FAQ_RELATED: Partial<Record<string, { href: string; label: string }>> = {
  "What is a resume checker?": {
    href: "/free-resume-checker-online",
    label: "Free resume checker online",
  },
  "What is an ATS resume optimization platform?": {
    href: "/resume-optimization-platform",
    label: "Explore the platform",
  },
  "What is an ATS resume checker?": {
    href: "/ats-resume-checker",
    label: "ATS resume checker guide",
  },
  "What does my ATS score actually measure?": {
    href: "/resume-score-checker",
    label: "Resume score checker",
  },
  "What is a resume match score?": {
    href: "/resume-match-analyzer",
    label: "Resume match tool",
  },
  "Where can I find ATS resume examples?": {
    href: "/ats-resume-examples",
    label: "ATS resume examples",
  },
  "Why do resumes fail ATS systems?": {
    href: "/common-ats-resume-rejection-reasons",
    label: "ATS rejection reasons",
  },
  "How can I improve my ATS score?": {
    href: "/how-to-improve-resume-score",
    label: "Improve resume score",
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
      className="mx-auto max-w-6xl px-4 py-20 sm:px-6 sm:py-24 lg:px-8"
      aria-labelledby="home-faq-heading"
    >
      <div className="mx-auto max-w-2xl text-center">
        <p className="section-eyebrow mx-auto">FAQ</p>
        <h2
          id="home-faq-heading"
          className="mt-5 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
        >
          ATS resume checker &amp; optimization FAQ
        </h2>
        <p className="mt-4 text-lg text-slate-600">
          Plain answers about scoring,{" "}
          <Link href="/resume-review" className="font-semibold text-[#16a34a] underline">
            resume review
          </Link>
          , and honest optimization—see our{" "}
          <Link href="/faq-center" className="font-semibold text-[#16a34a] underline">
            full FAQ center
          </Link>{" "}
          for more.
        </p>
      </div>
      <div className="mx-auto mt-12 max-w-3xl divide-y divide-slate-200 overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-soft">
        {homepageFaqItems.map((item) => (
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
