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
import BasicExample, { code as basicCode } from "./_examples/basic";
import VariantsExample, { code as variantsCode } from "./_examples/variants";
import SizesExample, { code as sizesCode } from "./_examples/sizes";
import WithTextExample, { code as withTextCode } from "./_examples/with-text";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import InteractiveExample, { code as interactiveCode } from "./_examples/interactive";
import CustomStylingExample, { code as customStylingCode } from "./_examples/custom-styling";
import FormattingToolbarExample, { code as formattingToolbarCode } from "./_examples/formatting-toolbar";

const toggleProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "outline" | "ghost"',
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
    name: "pressed",
    type: "boolean",
    defaultValue: "undefined",
    description: "وضعیت فعال/غیرفعال (کنترل شده)",
  },
  {
    name: "defaultPressed",
    type: "boolean",
    defaultValue: "false",
    description: "وضعیت اولیه (غیرکنترل شده)",
  },
  {
    name: "onPressedChange",
    type: "(pressed: boolean) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر وضعیت",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن دکمه",
  },
  {
    name: "aria-label",
    type: "string",
    defaultValue: "-",
    description: "برچسب دسترسی‌پذیری (ضروری)",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function TogglePage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">دکمه دوحالته (Toggle)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت دکمه دوحالته که می‌تواند روشن یا خاموش باشد، با پشتیبانی کامل
          از RTL و حالت تاریک.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add toggle" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده از دکمه دوحالته."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="انواع"
          titleEn="Variants"
          description="انواع مختلف ظاهری دکمه دوحالته."
          code={variantsCode}
        >
          <VariantsExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه‌ها"
          titleEn="Sizes"
          description="اندازه‌های مختلف دکمه دوحالته."
          code={sizesCode}
        >
          <SizesExample />
        </ComponentExample>

        <ComponentExample
          title="با متن"
          titleEn="With Text"
          description="دکمه دوحالته همراه با آیکون و متن."
          code={withTextCode}
        >
          <WithTextExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled State"
          description="دکمه دوحالته غیرفعال."
          code={disabledCode}
        >
          <DisabledExample />
        </ComponentExample>

        <ComponentExample
          title="مثال تعاملی"
          titleEn="Interactive Example"
          description="نمایش تغییر وضعیت دکمه‌ها در کنسول."
          code={interactiveCode}
        >
          <InteractiveExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="استایل سفارشی"
          titleEn="Custom Styling"
          description="استفاده از کلاس‌های سفارشی برای تغییر ظاهر دکمه."
          code={customStylingCode}
        >
          <CustomStylingExample />
        </SubExample>

        <SubExample
          title="نوار ابزار قالب‌بندی"
          titleEn="Formatting Toolbar"
          description="استفاده از دکمه‌های دوحالته برای ساخت نوار ابزار."
          code={formattingToolbarCode}
        >
          <FormattingToolbarExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Toggle"
          description="پراپ‌های کامپوننت Toggle."
          props={toggleProps}
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
                  Space
                </code>{" "}
                - تغییر وضعیت دکمه
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                - تغییر وضعیت دکمه
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت به دکمه بعدی
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ARIA برچسب‌های (ARIA Labels)
            </h3>
            <p>
              همیشه از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              استفاده کنید تا کاربران خوانندگان صفحه بتوانند هدف دکمه را درک
              کنند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              وضعیت (State)
            </h3>
            <p>
              دکمه به‌طور خودکار ویژگی{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                data-state
              </code>{" "}
              را با مقادیر "on" یا "off" تنظیم می‌کند
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
                استفاده عمومی در نوارهای ابزار
              </li>
              <li>
                <strong className="text-foreground">Outline:</strong> برای تمایز
                بیشتر در رابط کاربری
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
              برای آیکون در سمت راست متن استفاده کنید تا در RTL صحیح نمایش
              داده شود.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              دسترسی‌پذیری (Accessibility)
            </h3>
            <p className="text-muted-foreground">
              همیشه{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              را برای دکمه‌های Toggle تنظیم کنید، به‌ویژه زمانی که فقط آیکون
              دارند.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی (Grouping)</h3>
            <p className="text-muted-foreground">
              برای دکمه‌های مرتبط مانند تراز متن یا قالب‌بندی، از گروه‌بندی
              بصری با فاصله‌گذاری مناسب استفاده کنید.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
