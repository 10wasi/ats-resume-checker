import { atsResumeCheckerOnlineEntry } from "@/lib/content/cluster/entries";
import {
  ClusterLandingPage,
  clusterIntro,
  clusterPageMetadata,
} from "@/lib/content/cluster/create-cluster-page";

export const metadata = clusterPageMetadata(atsResumeCheckerOnlineEntry);

export default function AtsResumeCheckerOnlinePage() {
  return (
    <ClusterLandingPage
      entry={atsResumeCheckerOnlineEntry}
      intro={clusterIntro("ATS resume checker online")}
    />
  );
}
