import { PlatformHubPage } from "@/components/hub/PlatformHubPage";
import { getPlatformHubByPath } from "@/lib/content/platform-hubs/registry";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

const hub = getPlatformHubByPath("/resume-checker-online")!;

export const metadata = buildCtrMetadata(hub.ctr, {
  canonical: hub.path,
  keywords: [
    "resume checker free online",
    "resume score checker",
    "free ATS resume checker",
    "resume optimization platform",
  ],
  ogType: "article",
});

export default function ResumeCheckerOnlinePage() {
  return <PlatformHubPage hub={hub} />;
}
