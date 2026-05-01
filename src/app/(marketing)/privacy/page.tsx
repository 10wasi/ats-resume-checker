import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "ResumeIQ privacy policy — resumes, cookies, optional advertising (e.g. Google AdSense), and how we handle usage data for the free ATS resume checker.",
};

export default function PrivacyPage() {
  return (
    <div className="container-prose py-16">
      <p className="section-eyebrow">Legal</p>
      <h1 className="mt-6 font-display text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">
        Privacy Policy
      </h1>
      <p className="mt-3 text-sm text-slate-500">Last updated: April 30, 2026</p>
      <div className="mt-10 space-y-8 text-slate-700">
        <Section title="1. The short version">
          ResumeIQ is built so you don&apos;t have to trust us with much. We
          process your resume for the request, return your score and
          suggestions, and don&apos;t keep the file. We collect only what we
          need to run the product.
        </Section>
        <Section title="2. Files you upload">
          When you upload a PDF or DOCX, it&apos;s sent to our servers,
          extracted to text, scored, and returned to your browser session.
          We don&apos;t persist the original file or the extracted text in a
          long-term database. Standard host-level request logs may briefly
          retain metadata (timestamps, response codes) for operational
          monitoring.
        </Section>
        <Section title="3. Contact & support">
          If you email us feedback or partnership notes, we process your
          message to respond. We do not sell personal data. You can request
          deletion at the contact email below.
        </Section>
        <Section title="4. Cookies & analytics">
          We minimize tracking. If we add first-party or privacy-respecting
          analytics (for example Plausible or Fathom), we will list the
          provider here and what it measures (page views, referrers, not
          resume content).
        </Section>
        <Section title="5. Advertising (e.g. Google AdSense)">
          If we display third-party ads, vendors such as Google may use
          cookies or similar technologies to show relevant ads based on your
          visits to this and other sites. We do not give advertisers your
          résumé text or uploaded files. You can manage ad personalization in
          your Google account and learn more in Google&apos;s Ads policy and
          partner opt-out resources. When ads are live, we will update this
          section with the exact networks in use.
        </Section>
        <Section title="6. Your rights">
          You can request deletion of any data we hold about you (for example,
          a support thread). For users in the EU/UK and similar jurisdictions,
          GDPR/UK-GDPR rights apply: access, rectification, erasure,
          restriction, portability, and objection.
        </Section>
        <Section title="7. Contact">
          Questions? Email{" "}
          <a
            href="mailto:wasihuxxain01@gmail.com"
            className="font-semibold text-[#4ade80] underline decoration-[#4ade80]/40 underline-offset-4 visited:text-[#22c55e] hover:text-[#16a34a]"
          >
            wasihuxxain01@gmail.com
          </a>
          .
        </Section>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-xl font-semibold text-slate-900">{title}</h2>
      <p className="mt-3 leading-relaxed">{children}</p>
    </section>
  );
}
