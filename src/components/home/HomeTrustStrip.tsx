import Link from "next/link";

const trustItems = [
  {
    label: "No resume storage",
    detail: "Processed per request — not sold or kept.",
    href: "/privacy",
    linkText: "Privacy policy",
  },
  {
    label: "Secure processing",
    detail: "Encrypted connections. You control downloads.",
    href: "/privacy",
    linkText: "Data security",
  },
  {
    label: "How scores are calculated",
    detail: "Parse health, keywords & structure — weighted like ATS filters.",
    href: "/methodology",
    linkText: "Scoring methodology",
  },
  {
    label: "How AI recommendations work",
    detail: "Suggestions from your text + ATS rules, not blind templates.",
    href: "/methodology",
    linkText: "AI review process",
  },
];

export function HomeTrustStrip() {
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-6 sm:py-8"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2
          id="trust-heading"
          className="text-center text-sm font-bold uppercase tracking-wider text-slate-500"
        >
          Trust &amp; methodology
        </h2>
        <ul className="mt-4 grid gap-3 sm:grid-cols-2">
          {trustItems.map((item) => (
            <li key={item.label} className="rounded-lg border border-slate-100 bg-slate-50/50 px-4 py-3 text-sm text-slate-600">
              <p className="font-semibold text-slate-900">{item.label}</p>
              <p className="mt-0.5 leading-snug">{item.detail}</p>
              <Link
                href={item.href}
                className="mt-1 inline-block text-xs font-semibold text-[#16a34a] underline underline-offset-2"
              >
                {item.linkText}
              </Link>
            </li>
          ))}
        </ul>
        <p className="mt-4 text-center text-xs text-slate-500">
          Last updated July 2026 ·{" "}
          <Link href="/editorial-policy" className="underline">
            ResumeIQ editorial team
          </Link>
        </p>
      </div>
    </section>
  );
}
