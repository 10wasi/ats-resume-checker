import { getSiteUrl } from "@/lib/site-url";

/** Editorial team Organization schema — transparent team entity, not a fake individual. */
export function EditorialPersonJsonLd() {
  const base = getSiteUrl().replace(/\/$/, "");
  const schema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "@id": `${base}/about#editorial-team`,
    name: "ResumeIQ Editorial Team",
    url: `${base}/review-process`,
    description:
      "In-house editorial team that writes and reviews ResumeIQ resume guides, tool pages, and FAQ content.",
    parentOrganization: {
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
