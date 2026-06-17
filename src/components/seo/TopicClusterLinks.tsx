import { RelatedResources } from "./RelatedResources";

type Props = {
  path?: string;
  heading?: string;
  className?: string;
};

/** Workflow cluster — delegates to curated RelatedResources registry. */
export function TopicClusterLinks({
  path = "/",
  heading = "Related resources",
  className = "",
}: Props) {
  return (
    <RelatedResources
      path={path}
      heading={heading}
      eyebrow="Resume optimization workflow"
      className={className}
    />
  );
}
