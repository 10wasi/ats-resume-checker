import { getSiteUrl } from "@/lib/site-url";
import { OG_IMAGE_HEIGHT, OG_IMAGE_PATH, OG_IMAGE_WIDTH } from "@/lib/seo/og-defaults";

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
      url: `${base}${OG_IMAGE_PATH}`,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
    },
    foundingDate: "2024",
    description:
      "Free ATS resume checker — instant score, keyword analysis, formatting check, and recruiter suggestions for job seekers worldwide.",
    knowsAbout: [
      "free ATS resume checker",
      "ATS resume checker",
      "resume score checker",
      "resume keywords",
      "resume match analyzer",
      "applicant tracking system",
      "resume screening",
      "resume parsing",
      "resume optimization",
      "AI resume review",
      "CV checker",
      "resume formatting",
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
