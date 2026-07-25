import Link from "next/link";
import type { ReactNode } from "react";
import { ClusterLandingPage, clusterIntro, clusterPageMetadata } from "@/lib/content/cluster/create-cluster-page";
import type { Sprint3LandingSpec } from "@/lib/content/sprint3/landing-factory";
import { toCareerEntry } from "@/lib/content/sprint3/landing-factory";
import type { Metadata } from "next";

export function sprint3Metadata(spec: Sprint3LandingSpec): Metadata {
  return clusterPageMetadata(toCareerEntry(spec));
}

export function Sprint3LandingPage({
  spec,
  intro,
}: {
  spec: Sprint3LandingSpec;
  intro?: ReactNode;
}) {
  const entry = toCareerEntry(spec);
  return (
    <ClusterLandingPage
      entry={entry}
      intro={
        intro ?? (
          <>
            {clusterIntro(spec.ctr.primaryKeyword)}{" "}
            Explore related guides in our{" "}
            <Link href="/resume-resources" className="font-semibold text-[#16a34a] underline">
              resume resources hub
            </Link>{" "}
            and{" "}
            <Link href="/faq-center" className="font-semibold text-[#16a34a] underline">
              FAQ center
            </Link>
            .
          </>
        )
      }
    />
  );
}
