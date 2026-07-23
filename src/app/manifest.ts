import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "ResumeIQ — Free ATS Resume Checker",
    short_name: "ResumeIQ",
    description:
      "Free ATS resume checker: score, keyword gaps, format fixes, and match analysis for job seekers worldwide.",
    start_url: "/resume-checker",
    display: "standalone",
    background_color: "#f8f9fb",
    theme_color: "#16a34a",
    icons: [
      {
        src: "/icon",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/apple-icon",
        sizes: "180x180",
        type: "image/png",
        purpose: "any",
      },
    ],
  };
}
