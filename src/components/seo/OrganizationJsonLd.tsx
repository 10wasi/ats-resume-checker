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
      "Free ATS Resume Checker with resume match score, ATS keywords analysis, and resume optimization tools to build an ATS friendly resume.",
    knowsAbout: [
      "ATS Resume Checker",
      "ATS friendly resume",
      "resume match score",
      "ATS keywords",
      "resume optimization",
    ],
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
