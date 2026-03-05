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

export default function MultipleAccordionExample() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="notifications">
        <AccordionTrigger>تنظیمات اعلان</AccordionTrigger>
        <AccordionContent>
          نحوه دریافت اعلان‌ها را مدیریت کنید. می‌توانید اعلان ایمیل برای
          به‌روزرسانی‌ها یا اعلان push برای دستگاه همراه را فعال کنید.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="privacy">
        <AccordionTrigger>حریم خصوصی و امنیت</AccordionTrigger>
        <AccordionContent>
          تنظیمات حریم خصوصی و امنیت حساب شما.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="billing">
        <AccordionTrigger>صورتحساب و اشتراک</AccordionTrigger>
        <AccordionContent>
          مدیریت روش پرداخت و طرح اشتراک شما.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
`;

export default function MultipleAccordionExample() {
  return (
    <Accordion type="multiple" className="w-full">
      <AccordionItem value="notifications">
        <AccordionTrigger>تنظیمات اعلان</AccordionTrigger>
        <AccordionContent>
          نحوه دریافت اعلان‌ها را مدیریت کنید. می‌توانید اعلان ایمیل برای
          به‌روزرسانی‌ها یا اعلان push برای دستگاه همراه را فعال کنید.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="privacy">
        <AccordionTrigger>حریم خصوصی و امنیت</AccordionTrigger>
        <AccordionContent>
          تنظیمات حریم خصوصی و امنیت حساب شما.
        </AccordionContent>
      </AccordionItem>
      <AccordionItem value="billing">
        <AccordionTrigger>صورتحساب و اشتراک</AccordionTrigger>
        <AccordionContent>
          مدیریت روش پرداخت و طرح اشتراک شما.
        </AccordionContent>
      </AccordionItem>
    </Accordion>
  );
}
