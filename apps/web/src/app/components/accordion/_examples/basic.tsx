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

export default function BasicAccordionExample() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>آیا دسترسی‌پذیر است؟</AccordionTrigger>
        <AccordionContent>
          بله. از الگوی طراحی WAI-ARIA پیروی می‌کند.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>چگونه رمز عبور را بازنشانی کنم؟</AccordionTrigger>
        <AccordionContent>
          روی «فراموشی رمز عبور» در صفحه ورود کلیک کنید، ایمیل خود را وارد کنید؛
          لینک بازنشانی را برایتان می‌فرستیم. لینک پس از ۲۴ ساعت منقضی می‌شود.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>آیا می‌توانم طرح اشتراک را عوض کنم؟</AccordionTrigger>
        <AccordionContent>
          بله. از بخش صورتحساب در تنظیمات حساب می‌توانید طرح را تغییر دهید.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;

export default function BasicAccordionExample() {
  return (
    <Accordion type="single" collapsible defaultValue="item-1">
      <AccordionItem value="item-1">
        <AccordionTrigger>آیا دسترسی‌پذیر است؟</AccordionTrigger>
        <AccordionContent>
          بله. از الگوی طراحی WAI-ARIA پیروی می‌کند.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2">
        <AccordionTrigger>چگونه رمز عبور را بازنشانی کنم؟</AccordionTrigger>
        <AccordionContent>
          روی «فراموشی رمز عبور» در صفحه ورود کلیک کنید، ایمیل خود را وارد کنید؛
          لینک بازنشانی را برایتان می‌فرستیم. لینک پس از ۲۴ ساعت منقضی می‌شود.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>آیا می‌توانم طرح اشتراک را عوض کنم؟</AccordionTrigger>
        <AccordionContent>
          بله. از بخش صورتحساب در تنظیمات حساب می‌توانید طرح را تغییر دهید.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
