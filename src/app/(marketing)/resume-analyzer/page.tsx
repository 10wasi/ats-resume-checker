import { resumeAnalyzerEntry } from "@/lib/content/cluster/entries";
import {
  ClusterLandingPage,
  clusterIntro,
  clusterPageMetadata,
} from "@/lib/content/cluster/create-cluster-page";

export const metadata = clusterPageMetadata(resumeAnalyzerEntry);

export default function ResumeAnalyzerPage() {
  return (
    <ClusterLandingPage
      entry={resumeAnalyzerEntry}
      intro={clusterIntro("resume analyzer")}
    />
  );
}
