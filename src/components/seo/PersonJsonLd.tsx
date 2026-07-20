import { getSiteUrl } from "@/lib/site-url";

/** Editorial team Person schema — strengthens E-E-A-T sitewide. */
export function EditorialPersonJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "ResumeIQ Editorial",
    url: `${base}/about`,
    jobTitle: "Resume & ATS Content Team",
    worksFor: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: base,
    },
    knowsAbout: [
      "applicant tracking systems",
      "resume optimization",
      "resume keywords",
      "resume parsing",
      "job application strategy",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
