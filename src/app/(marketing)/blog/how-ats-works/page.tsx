import { BlogHubPage } from "@/components/blog/BlogHubPage";
import { BLOG_HUBS } from "@/lib/content/blog-hubs/registry";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

const entry = BLOG_HUBS[0];

export const metadata = buildCtrMetadata(entry.ctr, {
  canonical: entry.path,
  keywords: ["how ATS works", "how ATS filters candidates", "ATS resume checker"],
  ogType: "article",
});

export default function BlogHowAtsWorksHubPage() {
  return <BlogHubPage entry={entry} />;
}
