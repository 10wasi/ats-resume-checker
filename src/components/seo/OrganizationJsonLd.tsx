import { getSiteUrl } from "@/lib/site-url";

/** Site-wide Organization schema for trust and knowledge panel signals. */
export function OrganizationJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "ResumeIQ",
    alternateName: "ATS Resume Checker",
    url: base,
    logo: `${base}/favicon.ico`,
    description:
      "Free ATS Resume Checker and resume optimization tools for job seekers in the US and UK.",
    sameAs: [],
    contactPoint: {
      "@type": "ContactPoint",
      contactType: "customer support",
      url: `${base}/contact`,
      availableLanguage: ["English"],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
