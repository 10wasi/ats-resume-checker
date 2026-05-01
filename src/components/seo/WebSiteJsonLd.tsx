import { getSiteUrl } from "@/lib/site-url";

export function WebSiteJsonLd() {
  const base = getSiteUrl();
  const schema = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    name: "ATS Resume Checker",
    description:
      "Check ATS score of your resume and improve job chances instantly. Free CV score tool and guides.",
    url: base,
    publisher: {
      "@type": "Organization",
      name: "ATS Resume Checker",
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
