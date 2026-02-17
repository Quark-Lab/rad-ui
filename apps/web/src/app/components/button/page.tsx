"use client";

import {
  InstallCodeBlock,
  InlineCodeBlock,
} from "@/components/docs/code-block";
import {
  ComponentExample,
  ComponentExampleGroup,
  SubExample,
} from "@/components/docs/component-example";
import {
  ApiReferenceSection,
  PropsTable,
  type PropDefinition,
} from "@/components/docs/props-table";
import { Button } from "@/registry/web/ui";
import { Heart } from "lucide-react";
import BasicExample, { code as basicCode } from "./_examples/basic";
import VariantsExample, { code as variantsCode } from "./_examples/variants";
import SizesExample, { code as sizesCode } from "./_examples/sizes";
import WithIconsExample, { code as withIconsCode } from "./_examples/with-icons";
import StatesExample, { code as statesCode } from "./_examples/states";
import UsageExample, { code as usageCode } from "./_examples/usage";

const buttonProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "destructive" | "outline" | "ghost" | "link"',
    defaultValue: '"default"',
    description: "نوع ظاهری دکمه",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "اندازه دکمه",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن دکمه",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "onClick",
    type: "() => void",
    defaultValue: "-",
    description: "تابع رویداد کلیک",
  },
];

export default function ButtonPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">دکمه (Button)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت دکمه با پشتیبانی کامل از RTL و حالت تاریک
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add button" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>
        
        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از دکمه."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="انواع"
          titleEn="Variants"
          description="دکمه‌ها در انواع مختلف برای کاربردهای متفاوت در دسترس هستند."
          code={variantsCode}
        >
          <VariantsExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه‌ها"
          titleEn="Sizes"
          description="دکمه‌ها در سه اندازه کوچک، متوسط و بزرگ موجود هستند."
          code={sizesCode}
        >
          <SizesExample />
        </ComponentExample>

        <ComponentExample
          title="با آیکون"
          titleEn="With Icons"
          description="می‌توانید از آیکون‌ها در دکمه‌ها استفاده کنید. برای RTL از کلاس‌های ms و me استفاده کنید."
          code={withIconsCode}
        >
          <WithIconsExample />
        </ComponentExample>

        <ComponentExample
          title="حالت‌ها"
          titleEn="States"
          description="نمایش دکمه در حالت‌های مختلف مانند غیرفعال."
          code={statesCode}
        >
          <StatesExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Button"
          description="پراپ‌های کامپوننت دکمه."
          props={buttonProps}
        />
      </ApiReferenceSection>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              کیبورد (Keyboard)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                یا{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space
                </code>{" "}
                - فعال کردن دکمه
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت به دکمه بعدی
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              فوکوس (Focus)
            </h3>
            <p>دکمه‌ها دارای حلقه فوکوس واضح برای کاربران کیبورد هستند</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              غیرفعال (Disabled)
            </h3>
            <p>
              دکمه‌های غیرفعال از ویژگی{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                disabled
              </code>{" "}
              استفاده می‌کنند و برای خوانندگان صفحه قابل شناسایی هستند
            </p>
          </div>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">
              انتخاب نوع مناسب (Variant Selection)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Default:</strong> برای
                اقدامات اصلی و مهم (مثل ثبت فرم)
              </li>
              <li>
                <strong className="text-foreground">Destructive:</strong> برای
                اقدامات خطرناک (مثل حذف، لغو دائم)
              </li>
              <li>
                <strong className="text-foreground">Outline:</strong> برای
                اقدامات ثانویه (مثل لغو یا بازگشت)
              </li>
              <li>
                <strong className="text-foreground">Ghost:</strong> برای اقدامات
                کم‌اهمیت یا تکراری
              </li>
              <li>
                <strong className="text-foreground">Link:</strong> برای
                لینک‌هایی که مانند دکمه عمل می‌کنند
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              آیکون‌ها در RTL (Icons in RTL)
            </h3>
            <p className="text-muted-foreground">
              از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">ms-2</code>{" "}
              برای آیکون در سمت راست متن و
              <code className="text-sm bg-muted px-2 py-1 rounded mx-1">
                me-2
              </code>{" "}
              برای آیکون در سمت چپ متن استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">متن دکمه (Button Text)</h3>
            <p className="text-muted-foreground">
              از فعل‌های واضح و کوتاه استفاده کنید. به جای "کلیک کنید" از
              "ارسال"، "ذخیره" یا "دانلود" استفاده کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <InlineCodeBlock code={usageCode} />
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="استایل سفارشی"
          titleEn="Custom Styling"
          description="می‌توانید با استفاده از className ظاهر دکمه را تغییر دهید."
          code={`<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  دکمه رنگی
</Button>`}
        >
          <Button className="bg-gradient-to-r from-purple-500 to-pink-500">
            دکمه رنگی
          </Button>
        </SubExample>
        <SubExample
          title="فقط آیکون"
          titleEn="Icon Only"
          description="دکمه‌ای که فقط شامل آیکون است."
          code={`import { Heart } from "lucide-react";

<Button size="sm" className="aspect-square p-0">
  <Heart className="h-4 w-4" />
</Button>`}
        >
          <Button size="sm" className="aspect-square p-0">
            <Heart className="h-4 w-4" />
          </Button>
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
