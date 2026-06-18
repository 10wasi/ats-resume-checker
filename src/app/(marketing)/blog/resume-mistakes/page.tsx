import { BlogHubPage } from "@/components/blog/BlogHubPage";
import { BLOG_HUBS } from "@/lib/content/blog-hubs/registry";
import { buildCtrMetadata } from "@/lib/seo/ctr-metadata";

const entry = BLOG_HUBS[1];

export const metadata = buildCtrMetadata(entry.ctr, {
  canonical: entry.path,
  keywords: ["ATS resume mistakes", "why my resume is not getting interviews", "resume feedback tool"],
  ogType: "article",
});

export default function BlogResumeMistakesHubPage() {
  return <BlogHubPage entry={entry} />;
}
