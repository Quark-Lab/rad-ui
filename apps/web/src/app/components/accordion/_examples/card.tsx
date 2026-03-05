"use client";

import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/registry/web/ui";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/registry/web/ui";

export const code = `import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";

export default function AccordionInCardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>اشتراک و صورتحساب</CardTitle>
        <CardDescription>
          سوالات متداول درباره حساب، طرح‌ها، پرداخت و لغو اشتراک.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="plans">
            <AccordionTrigger>چه طرح‌های اشتراکی دارید؟</AccordionTrigger>
            <AccordionContent>
              سه سطح: استارتر (۹ دلار/ماه)، حرفه‌ای (۲۹ دلار/ماه) و سازمانی
              (۹۹ دلار/ماه). هر طرح ذخیره، دسترسی API و پشتیبانی بیشتری دارد.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="billing">
            <AccordionTrigger>صورتحساب چگونه کار می‌کند؟</AccordionTrigger>
            <AccordionContent>
              صورتحساب در ابتدای هر دوره شارژ می‌شود و هر زمان می‌توانید لغو
              کنید. پشتیبانی ۲۴/۷ و اعضای نامحدود تیم در همه طرح‌ها هست.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cancel">
            <AccordionTrigger>چگونه اشتراک را لغو کنم؟</AccordionTrigger>
            <AccordionContent>
              از بخش صورتحساب در تنظیمات، گزینه «لغو اشتراک» را انتخاب کنید.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
`;

export default function AccordionInCardExample() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>اشتراک و صورتحساب</CardTitle>
        <CardDescription>
          سوالات متداول درباره حساب، طرح‌ها، پرداخت و لغو اشتراک.
        </CardDescription>
      </CardHeader>
      <CardContent>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="plans">
            <AccordionTrigger>چه طرح‌های اشتراکی دارید؟</AccordionTrigger>
            <AccordionContent>
              سه سطح: استارتر (۹ دلار/ماه)، حرفه‌ای (۲۹ دلار/ماه) و سازمانی
              (۹۹ دلار/ماه). هر طرح ذخیره، دسترسی API و پشتیبانی بیشتری دارد.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="billing">
            <AccordionTrigger>صورتحساب چگونه کار می‌کند؟</AccordionTrigger>
            <AccordionContent>
              صورتحساب در ابتدای هر دوره شارژ می‌شود و هر زمان می‌توانید لغو
              کنید. پشتیبانی ۲۴/۷ و اعضای نامحدود تیم در همه طرح‌ها هست.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="cancel">
            <AccordionTrigger>چگونه اشتراک را لغو کنم؟</AccordionTrigger>
            <AccordionContent>
              از بخش صورتحساب در تنظیمات، گزینه «لغو اشتراک» را انتخاب کنید.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </CardContent>
    </Card>
  );
}
