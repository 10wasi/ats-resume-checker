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
    logo: {
      "@type": "ImageObject",
      url: `${base}/favicon.ico`,
      width: 32,
      height: 32,
    },
    foundingDate: "2024",
    description:
      "Free resume checker and resume score checker online—ATS analysis, keyword gaps, match tool, and resume optimization for job seekers worldwide.",
    knowsAbout: [
      "resume checker",
      "resume score checker",
      "ATS resume checker",
      "free resume checker online",
      "resume match analyzer",
      "resume keywords",
      "resume optimization",
      "resume examples",
    ],
    sameAs: ["https://github.com/10wasi/ats-resume-checker"],
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
