import { getSiteUrl } from "@/lib/site-url";

export const OG_IMAGE_PATH = "/opengraph-image" as const;
export const OG_IMAGE_WIDTH = 1200;
export const OG_IMAGE_HEIGHT = 630;
export const OG_IMAGE_ALT =
  "ResumeIQ — Free Resume Checker & ATS Score for job seekers worldwide";

/** Shared Open Graph / Twitter image metadata for buildCtrMetadata and layout. */
export function getDefaultOgImages() {
  const base = getSiteUrl().replace(/\/$/, "");
  return [
    {
      url: `${base}${OG_IMAGE_PATH}`,
      width: OG_IMAGE_WIDTH,
      height: OG_IMAGE_HEIGHT,
      alt: OG_IMAGE_ALT,
    },
  ];
}
