import { getSiteUrl } from "@/lib/site-url";
import { RESUME_JD_MATCH_PATH } from "@/lib/content/resume-job-description-match-body";
import { ENTITY_IDS, entityRefOrganization } from "@/lib/seo/entity-graph";

/** WebApplication schema for job description match — linked to canonical product @id. */
export function ResumeJdMatchWebApplicationJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const url = `${base}${RESUME_JD_MATCH_PATH}`;

  const schema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": `${url}#webapplication`,
    name: "ResumeIQ Job Description Match Analyzer",
    description:
      "Match resume to job description — ATS compatibility score, keyword match %, missing skills, section feedback, and improvement checklist.",
    url,
    applicationCategory: "BusinessApplication",
    operatingSystem: "Any",
    browserRequirements: "Requires JavaScript",
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
    isAccessibleForFree: true,
    provider: entityRefOrganization(),
    isPartOf: { "@id": ENTITY_IDS.product() },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
