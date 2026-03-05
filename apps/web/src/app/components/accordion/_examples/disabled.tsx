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

export default function DisabledAccordionExample() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>آیا به تاریخچه حساب دسترسی دارم؟</AccordionTrigger>
        <AccordionContent>
          بله. از بخش تنظیمات می‌توانید تاریخچه را مشاهده کنید.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>اطلاعات ویژگی پریمیوم</AccordionTrigger>
        <AccordionContent>
          این آیتم غیرفعال است و فقط برای نمایش است.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>چگونه ایمیل خود را به‌روز کنم؟</AccordionTrigger>
        <AccordionContent>
          از بخش پروفایل در تنظیمات حساب، آدرس ایمیل را ویرایش کنید.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;

export default function DisabledAccordionExample() {
  return (
    <Accordion type="single" collapsible className="w-full">
      <AccordionItem value="item-1">
        <AccordionTrigger>آیا به تاریخچه حساب دسترسی دارم؟</AccordionTrigger>
        <AccordionContent>
          بله. از بخش تنظیمات می‌توانید تاریخچه را مشاهده کنید.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-2" disabled>
        <AccordionTrigger>اطلاعات ویژگی پریمیوم</AccordionTrigger>
        <AccordionContent>
          این آیتم غیرفعال است و فقط برای نمایش است.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="item-3">
        <AccordionTrigger>چگونه ایمیل خود را به‌روز کنم؟</AccordionTrigger>
        <AccordionContent>
          از بخش پروفایل در تنظیمات حساب، آدرس ایمیل را ویرایش کنید.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
