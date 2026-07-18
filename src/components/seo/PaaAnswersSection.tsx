import { AccordionFaq } from "@/components/ui/AccordionFaq";
import { getPaaItemsForPath } from "@/lib/seo/paa-snippets";

type Props = {
  path: string;
  className?: string;
};

/** Visible People Also Ask block — complements FAQ schema on high-intent pages. */
export function PaaAnswersSection({ path, className = "mt-12" }: Props) {
  const items = getPaaItemsForPath(path);
  return (
    <AccordionFaq
      items={items}
      heading="People also ask"
      headingId="paa-heading"
      className={className}
    />
  );
}
