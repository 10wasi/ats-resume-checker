import { getSiteUrl } from "@/lib/site-url";

export function WebSiteJsonLd() {
  const base = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ResumeIQ",
    description:
      "Free resume checker, ATS score tools, and job-search guides from ResumeIQ.",
    url: base,
    publisher: {
      "@type": "Organization",
      name: "ResumeIQ",
      url: base,
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
