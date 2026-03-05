"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/web/ui";

export const code = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function MyAccordion() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>عنوان اول</AccordionTrigger>
        <AccordionContent>
          محتوای بخش اول.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>عنوان دوم</AccordionTrigger>
        <AccordionContent>
          محتوای بخش دوم.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;

export default function AccordionUsageExample() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>عنوان اول</AccordionTrigger>
        <AccordionContent>محتوای بخش اول.</AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>عنوان دوم</AccordionTrigger>
        <AccordionContent>محتوای بخش دوم.</AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
