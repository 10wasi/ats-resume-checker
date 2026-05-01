export type BlogPost = {
  slug: string;
  /** Visible page title / H1 */
  title: string;
  /** `<title>` and social; keyword-focused when different from H1 */
  seoTitle?: string;
  description: string;
  date: string;
  author: string;
  content: string;
  coverVariant?: "sky" | "indigo" | "violet" | "emerald" | "amber";
  tags?: string[];
  /** Extra meta keywords for `<meta name="keywords">` */
  keywords?: string[];
};
