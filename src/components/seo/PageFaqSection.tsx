import type { ReactNode } from "react";
import type { FaqItem } from "@/lib/seo/faq";
import { AccordionFaq } from "@/components/ui/AccordionFaq";

type Props = {
  heading: string;
  items: FaqItem[];
  intro?: ReactNode;
  id?: string;
  className?: string;
};

export function PageFaqSection({
  heading,
  items,
  intro,
  id = "page-faq-heading",
  className = "",
}: Props) {
  return (
    <AccordionFaq
      items={items}
      heading={heading}
      headingId={id}
      intro={intro}
      className={className}
    />
  );
}
