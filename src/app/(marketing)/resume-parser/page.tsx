import { resumeParserEntry } from "@/lib/content/cluster/entries";
import {
  ClusterLandingPage,
  clusterIntro,
  clusterPageMetadata,
} from "@/lib/content/cluster/create-cluster-page";

export const metadata = clusterPageMetadata(resumeParserEntry);

export default function ResumeParserPage() {
  return (
    <ClusterLandingPage
      entry={resumeParserEntry}
      intro={clusterIntro("resume parser and ATS text extraction")}
    />
  );
}
