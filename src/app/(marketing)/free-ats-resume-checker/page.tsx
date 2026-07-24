import {
  atsResumeCheckerOnlineEntry,
  freeAtsResumeCheckerEntry,
  resumeAnalyzerEntry,
  resumeKeywordCheckerEntry,
  atsScoreCheckerEntry,
  resumeParserEntry,
} from "@/lib/content/cluster/entries";
import {
  ClusterLandingPage,
  clusterIntro,
  clusterPageMetadata,
} from "@/lib/content/cluster/create-cluster-page";

export const metadata = clusterPageMetadata(freeAtsResumeCheckerEntry);

export default function FreeAtsResumeCheckerPage() {
  return (
    <ClusterLandingPage
      entry={freeAtsResumeCheckerEntry}
      intro={clusterIntro("free ATS resume checker")}
    />
  );
}
