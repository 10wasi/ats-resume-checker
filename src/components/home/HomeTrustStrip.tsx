import Link from "next/link";

const trustItems = [
  {
    label: "No resume storage",
    detail: "Processed per request — not sold or kept on servers.",
    href: "/privacy",
    linkText: "Privacy policy",
  },
  {
    label: "Secure processing",
    detail: "Encrypted connections. You control what you download.",
    href: "/privacy",
    linkText: "Data security",
  },
  {
    label: "AI analysis",
    detail: "Suggestions from your text + ATS rules — not blind templates.",
    href: "/methodology",
    linkText: "How AI review works",
  },
  {
    label: "Score methodology",
    detail: "Parse health, keywords, structure — weighted like real ATS filters.",
    href: "/methodology",
    linkText: "How scores are calculated",
  },
  {
    label: "Updated July 2026",
    detail: "ResumeIQ editorial team · applicant tracking system resume expertise.",
    href: "/editorial-policy",
    linkText: "Editorial policy",
  },
];

export function HomeTrustStrip() {
  return (
    <section
      className="border-b border-slate-200/70 bg-white py-8 sm:py-10"
      aria-labelledby="trust-heading"
    >
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <h2 id="trust-heading" className="sr-only">
          Trust and data handling
        </h2>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {trustItems.map((item) => (
            <li key={item.label} className="text-sm text-slate-600">
              <p className="font-semibold text-slate-900">{item.label}</p>
              <p className="mt-0.5 leading-relaxed">{item.detail}</p>
              <Link
                href={item.href}
                className="mt-1 inline-block text-xs font-semibold text-[#16a34a] underline underline-offset-2"
              >
                {item.linkText}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
