"use client";

import { InstallCodeBlock, InlineCodeBlock } from "@/components/docs/code-block";
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
import BasicAccordionExample, {
  code as basicCode,
} from "./_examples/basic";
import MultipleAccordionExample, {
  code as multipleCode,
} from "./_examples/multiple";
import DisabledAccordionExample, {
  code as disabledCode,
} from "./_examples/disabled";
import AccordionInCardExample, {
  code as cardCode,
} from "./_examples/card";
import AccordionUsageExample, { code as usageCode } from "./_examples/usage";

const accordionProps: PropDefinition[] = [
  {
    name: "type",
    type: '"single" | "multiple"',
    defaultValue: '"single"',
    description:
      "نوع آکاردئون: فقط یک آیتم باز (single) یا چند آیتم هم‌زمان (multiple).",
  },
  {
    name: "collapsible",
    type: "boolean",
    defaultValue: "false",
    description:
      "در حالت single، آیا کلیک روی آیتم باز شده آن را می‌بندد یا خیر.",
  },
  {
    name: "value",
    type: "string | string[]",
    defaultValue: "undefined",
    description: "مقدار کنترل‌شده آیتم(های) باز.",
  },
  {
    name: "defaultValue",
    type: "string | string[]",
    defaultValue: "undefined",
    description: "مقدار پیش‌فرض آیتم(های) باز (غیرکنترل‌شده).",
  },
  {
    name: "onValueChange",
    type: "(value: string | string[]) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر آیتم(های) باز.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای روت آکاردئون.",
  },
];

const accordionItemProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "-",
    description: "شناسه یکتای آیتم برای کنترل باز/بسته.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن این آیتم و جلوگیری از باز/بسته شدن.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای آیتم.",
  },
];

const accordionTriggerProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای تریگر.",
  },
];

const accordionContentProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای محتوا (روی div داخلی اعمال می‌شود).",
  },
];

export default function AccordionPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">آکاردئون (Accordion)</h1>
        <p className="text-lg text-muted-foreground">
          مجموعه‌ای عمودی از عناوین تعاملی که هر کدام با کلیک بخشی از محتوا را
          نمایش می‌دهند. با پشتیبانی کامل از RTL و الگوی دسترسی‌پذیر WAI-ARIA.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add accordion"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic"
          description="آکاردئون ساده با یک آیتم باز در هر زمان. اولین آیتم به‌طور پیش‌فرض باز است."
          code={basicCode}
        >
          <BasicAccordionExample />
        </ComponentExample>

        <ComponentExample
          title="چند آیتم باز"
          titleEn="Multiple"
          description='با type="multiple" چند آیتم می‌توانند هم‌زمان باز باشند.'
          code={multipleCode}
        >
          <MultipleAccordionExample />
        </ComponentExample>

        <ComponentExample
          title="آیتم غیرفعال"
          titleEn="Disabled"
          description="با پراپ disabled روی AccordionItem می‌توان یک آیتم را غیرفعال کرد."
          code={disabledCode}
        >
          <DisabledAccordionExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Accordion"
          description="کامپوننت ریشه که وضعیت باز/بسته آیتم‌ها را مدیریت می‌کند."
          props={accordionProps}
        />
        <PropsTable
          title="AccordionItem"
          description="هر بخش قابل باز/بسته در آکاردئون."
          props={accordionItemProps}
        />
        <PropsTable
          title="AccordionTrigger"
          description="دکمه‌ای که با کلیک آن محتوا باز یا بسته می‌شود."
          props={accordionTriggerProps}
        />
        <PropsTable
          title="AccordionContent"
          description="محتوای قابل جمع شدن که زیر تریگر نمایش داده می‌شود."
          props={accordionContentProps}
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
              الگوی WAI-ARIA
            </h3>
            <p>
              آکاردئون از الگوی طراحی WAI-ARIA برای آکاردئون پیروی می‌کند:
              نقش‌های مناسب، وضعیت expanded/collapsed و ارتباط تریگر با محتوا
              برای خوانندگان صفحه و کیبورد.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">کیبورد</h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Tab
                </code>{" "}
                — حرکت بین تریگرها.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                و{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">Space</code>{" "}
                — باز یا بسته کردن آیتم فوکوس‌شده.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  ArrowDown
                </code>{" "}
                /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  ArrowUp
                </code>{" "}
                — حرکت به تریگر بعدی/قبلی.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Home</code> /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">End</code> —
                رفتن به اولین یا آخرین تریگر.
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">پشتیبانی RTL</h3>
            <p>
              از <code className="text-sm bg-muted px-2 py-1 rounded">text-start</code> و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">ms-2</code> برای
              چیدمان و فاصله آیکون استفاده شده تا در جهت راست‌به‌چپ درست نمایش
              داده شود.
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
            <h3 className="font-semibold mb-3">چه زمانی از آکاردئون استفاده کنیم؟</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>سوالات متداول (FAQ) و محتوای قابل جمع‌شدن.</li>
              <li>لیست آیتم‌هایی که هر کدام توضیح یا جزئیات بیشتری دارند.</li>
              <li>تنظیمات یا بخش‌های طولانی که نمی‌خواهید همه را یک‌جا نشان دهید.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">single در مقابل multiple</h3>
            <p className="text-muted-foreground">
              برای FAQ معمولاً <code className="text-sm bg-muted px-2 py-1 rounded">type="single"</code> و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">collapsible</code> مناسب است. برای
              مقایسه چند بخش یا مرور سریع،{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">type="multiple"</code> مفید است.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">عنوان تریگر</h3>
            <p className="text-muted-foreground">
              عناوین را کوتاه و واضح نگه دارید تا کاربر قبل از باز کردن بداند
              محتوا درباره چیست.
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
          title="آکاردئون داخل کارت"
          titleEn="Accordion in Card"
          description="قرار دادن آکاردئون درون کارت برای بخش‌بندی و ظاهر منظم (مثلاً FAQ یا تنظیمات)."
          code={cardCode}
        >
          <AccordionInCardExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
