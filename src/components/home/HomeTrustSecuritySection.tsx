import Link from "next/link";

/** Privacy, security, and trust signals — truthful only, global wording. */
export function HomeTrustSecuritySection() {
  const signals = [
    {
      title: "No signup required",
      body: "Run your first resume scan free—upload PDF or paste text without creating an account.",
    },
    {
      title: "Privacy-first processing",
      body: "Your file is analyzed to produce scores and feedback for that request. We do not sell resume data.",
    },
    {
      title: "Encrypted connections",
      body: "Analysis runs over HTTPS. Treat uploads like any job application—avoid secrets you would not share with an employer.",
    },
    {
      title: "Transparent scoring",
      body: "Published methodology explains how ATS score, keyword match, and format flags are calculated—no black box.",
    },
    {
      title: "Fast resume analysis",
      body: "Most checks finish in under a minute with priority fixes, keyword gaps, and section feedback ready to act on.",
    },
    {
      title: "Professional recommendations",
      body: "Every fix includes why it matters, how to apply it, and expected impact—grounded in hiring software behavior.",
    },
  ];

  return (
    <section
      className="border-b border-slate-200/80 bg-white py-16 sm:py-20"
      aria-labelledby="trust-security-heading"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-2xl text-center">
          <p className="section-eyebrow mx-auto">Trust &amp; privacy</p>
          <h2
            id="trust-security-heading"
            className="mt-4 font-display text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl"
          >
            Your resume deserves honest analysis—not a sales funnel
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-slate-600">
            ResumeIQ is built for candidates worldwide who need clear feedback before they apply.
            Read our{" "}
            <Link href="/privacy" className="font-semibold text-[#16a34a] underline">
              privacy policy
            </Link>
            ,{" "}
            <Link href="/methodology" className="font-semibold text-[#16a34a] underline">
              scoring methodology
            </Link>
            , and{" "}
            <Link href="/editorial-policy" className="font-semibold text-[#16a34a] underline">
              editorial standards
            </Link>
            .
          </p>
        </div>
        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {signals.map((s) => (
            <li
              key={s.title}
              className="rounded-2xl border border-slate-200 bg-slate-50/40 p-6 shadow-sm"
            >
              <h3 className="font-display font-bold text-slate-900">{s.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">{s.body}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
