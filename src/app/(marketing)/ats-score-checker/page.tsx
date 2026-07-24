import { atsScoreCheckerEntry } from "@/lib/content/cluster/entries";
import {
  ClusterLandingPage,
  clusterIntro,
  clusterPageMetadata,
} from "@/lib/content/cluster/create-cluster-page";

export const metadata = clusterPageMetadata(atsScoreCheckerEntry);

export default function AtsScoreCheckerPage() {
  return (
    <ClusterLandingPage
      entry={atsScoreCheckerEntry}
      intro={clusterIntro("ATS score checker and resume ATS score")}
    />
  );
}
