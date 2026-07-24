import { resumeKeywordCheckerEntry } from "@/lib/content/cluster/entries";
import {
  ClusterLandingPage,
  clusterIntro,
  clusterPageMetadata,
} from "@/lib/content/cluster/create-cluster-page";

export const metadata = clusterPageMetadata(resumeKeywordCheckerEntry);

export default function ResumeKeywordCheckerPage() {
  return (
    <ClusterLandingPage
      entry={resumeKeywordCheckerEntry}
      intro={clusterIntro("resume keyword checker")}
    />
  );
}
