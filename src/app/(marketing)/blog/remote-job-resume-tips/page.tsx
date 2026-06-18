import { BlogHubPage } from "@/components/blog/BlogHubPage";
import { BLOG_HUBS } from "@/lib/content/blog-hubs/registry";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

const entry = BLOG_HUBS[3];

export const metadata = buildCtrMetadata(entry.ctr, {
  canonical: entry.path,
  keywords: ["resume tips for remote jobs", "global resume optimization", "CV scanner tool"],
  ogType: "article",
});

export default function BlogRemoteJobResumeTipsHubPage() {
  return <BlogHubPage entry={entry} />;
}
