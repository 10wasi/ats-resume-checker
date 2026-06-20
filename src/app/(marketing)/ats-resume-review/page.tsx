import { PlatformHubPage } from "@/components/hub/PlatformHubPage";
import { getPlatformHubByPath } from "@/lib/content/platform-hubs/registry";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

const hub = getPlatformHubByPath("/ats-resume-review")!;

export const metadata = buildCtrMetadata(hub.ctr, {
  canonical: hub.path,
  keywords: [
    "ATS resume review",
    "ATS resume checker",
    "resume review online",
    "resume optimization",
  ],
  ogType: "article",
});

export default function AtsResumeReviewPage() {
  return <PlatformHubPage hub={hub} />;
}
