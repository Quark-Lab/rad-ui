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
import SingleSelectionExample, { code as singleSelectionCode } from "./_examples/single";
import MultipleSelectionExample, { code as multipleSelectionCode } from "./_examples/multiple";
import VariantsExample, { code as variantsCode } from "./_examples/variants";
import SizesExample, { code as sizesCode } from "./_examples/sizes";
import WithTextExample, { code as withTextCode } from "./_examples/with-text";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import InteractiveExample, { code as interactiveCode } from "./_examples/interactive";
import FormattingToolbarExample, { code as formattingToolbarCode } from "./_examples/formatting-toolbar";

const toggleGroupProps: PropDefinition[] = [
  {
    name: "type",
    type: '"single" | "multiple"',
    defaultValue: "undefined",
    description: "نوع انتخاب (تکی یا چندگانه)",
  },
  {
    name: "variant",
    type: '"default" | "outline" | "ghost"',
    defaultValue: '"default"',
    description: "نوع ظاهری گروه",
  },
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "اندازه گروه",
  },
  {
    name: "value",
    type: "string | string[]",
    defaultValue: "undefined",
    description: "مقدار کنترل شده",
  },
  {
    name: "defaultValue",
    type: "string | string[]",
    defaultValue: "undefined",
    description: "مقدار پیش‌فرض (غیرکنترل شده)",
  },
  {
    name: "onValueChange",
    type: "(value) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر مقدار",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن کل گروه",
  },
];

const toggleGroupItemProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "-",
    description: "مقدار یکتای این آیتم",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن این آیتم",
  },
  {
    name: "aria-label",
    type: "string",
    defaultValue: "-",
    description: "برچسب دسترسی‌پذیری",
  },
];

export default function ToggleGroupPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          گروه دکمه دوحالته (Toggle Group)
        </h1>
        <p className="text-lg text-muted-foreground">
          مجموعه‌ای از دکمه‌های دوحالته که می‌توانند روشن یا خاموش باشند، با
          پشتیبانی از انتخاب تکی یا چندگانه.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add toggle-group" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="انتخاب تکی"
          titleEn="Single Selection"
          description="گروه دکمه با امکان انتخاب تنها یک گزینه."
          code={singleSelectionCode}
        >
          <SingleSelectionExample />
        </ComponentExample>

        <ComponentExample
          title="انتخاب چندگانه"
          titleEn="Multiple Selection"
          description="گروه دکمه با امکان انتخاب چندین گزینه همزمان."
          code={multipleSelectionCode}
        >
          <MultipleSelectionExample />
        </ComponentExample>

        <ComponentExample
          title="انواع"
          titleEn="Variants"
          description="انواع مختلف ظاهری گروه دکمه دوحالته."
          code={variantsCode}
        >
          <VariantsExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه‌ها"
          titleEn="Sizes"
          description="اندازه‌های مختلف گروه دکمه دوحالته."
          code={sizesCode}
        >
          <SizesExample />
        </ComponentExample>

        <ComponentExample
          title="با متن"
          titleEn="With Text"
          description="گروه دکمه همراه با آیکون و متن."
          code={withTextCode}
        >
          <WithTextExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled State"
          description="غیرفعال کردن کل گروه یا آیتم‌های خاص."
          code={disabledCode}
        >
          <DisabledExample />
        </ComponentExample>

        <ComponentExample
          title="مثال تعاملی"
          titleEn="Interactive Example"
          description="نمایش تغییر وضعیت گزینه‌ها در کنسول."
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
          title="نوار ابزار قالب‌بندی کامل"
          titleEn="Full Formatting Toolbar"
          description="ترکیب گروه‌های دکمه برای ساخت نوار ابزار ویرایشگر متن."
          code={formattingToolbarCode}
        >
          <FormattingToolbarExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="ToggleGroup"
          description="پراپ‌های کامپوننت ToggleGroup."
          props={toggleGroupProps}
        />
        <PropsTable
          title="ToggleGroupItem"
          description="پراپ‌های کامپوننت ToggleGroupItem."
          props={toggleGroupItemProps}
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
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت به داخل/خارج گروه
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space
                </code>{" "}
                یا{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                - تغییر وضعیت آیتم
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Keys
                </code>{" "}
                - حرکت بین آیتم‌ها
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Home</code>{" "}
                - رفتن به اولین آیتم
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">End</code>{" "}
                - رفتن به آخرین آیتم
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ARIA برچسب‌های (ARIA Labels)
            </h3>
            <p>
              برای هر آیتم از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              استفاده کنید تا هدف واضح باشد
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">Roving Focus</h3>
            <p>
              گروه از الگوی roving tabindex برای مدیریت فوکوس استفاده می‌کند که
              تجربه کیبورد را بهبود می‌بخشد
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
              انتخاب نوع مناسب (Type Selection)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Single:</strong> زمانی که
                فقط یک گزینه باید انتخاب شود (مثل تراز متن، نمای صفحه)
              </li>
              <li>
                <strong className="text-foreground">Multiple:</strong> زمانی که
                چندین گزینه می‌توانند همزمان فعال باشند (مثل قالب‌بندی متن)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">دسترسی‌پذیری (Accessibility)</h3>
            <p className="text-muted-foreground">
              همیشه{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              معنادار برای هر آیتم فراهم کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">آیکون‌ها (Icons)</h3>
            <p className="text-muted-foreground">
              از آیکون‌های واضح و شناخته شده استفاده کنید که هدف هر آیتم را مشخص
              کنند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی (Grouping)</h3>
            <p className="text-muted-foreground">
              آیتم‌های مرتبط را در یک گروه قرار دهید. برای دسته‌های مختلف از
              گروه‌های جداگانه استفاده کنید
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
