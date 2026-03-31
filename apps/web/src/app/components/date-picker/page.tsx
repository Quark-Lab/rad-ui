"use client";

import { InstallCodeBlock } from "@/components/docs/code-block";
import { InlineCodeBlock } from "@/components/docs/code-block";
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
import RangeExample, { code as rangeCode } from "./_examples/range";
import WithPresetsExample, {
  code as withPresetsCode,
} from "./_examples/with-presets";
import UsageExample, { code as usageCode } from "./_examples/usage";

const datePickerProps: PropDefinition[] = [
  {
    name: "date",
    type: "Date | undefined",
    defaultValue: "undefined",
    description: "تاریخ انتخاب‌شده",
  },
  {
    name: "onDateChange",
    type: "(date: Date | undefined) => void",
    defaultValue: "-",
    description: "تابع رویداد تغییر تاریخ",
  },
  {
    name: "placeholder",
    type: "string",
    defaultValue: '"انتخاب تاریخ"',
    description: "متن جایگزین وقتی تاریخی انتخاب نشده",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن انتخابگر تاریخ",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای دکمه تریگر",
  },
  {
    name: "calendarClassName",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای تقویم",
  },
];

const dateRangePickerProps: PropDefinition[] = [
  {
    name: "dateRange",
    type: "DateRange | undefined",
    defaultValue: "undefined",
    description: "بازه تاریخی انتخاب‌شده",
  },
  {
    name: "onDateRangeChange",
    type: "(range: DateRange | undefined) => void",
    defaultValue: "-",
    description: "تابع رویداد تغییر بازه تاریخ",
  },
  {
    name: "placeholder",
    type: "string",
    defaultValue: '"انتخاب بازه تاریخ"',
    description: "متن جایگزین وقتی بازه‌ای انتخاب نشده",
  },
  {
    name: "numberOfMonths",
    type: "number",
    defaultValue: "2",
    description: "تعداد ماه‌های نمایش‌داده‌شده",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن انتخابگر بازه تاریخ",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای دکمه تریگر",
  },
];

export default function DatePickerPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          انتخابگر تاریخ (Date Picker)
        </h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت انتخابگر تاریخ با پشتیبانی از تقویم شمسی (جلالی) و انتخاب
          بازه.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add date-picker"
          language="bash"
        />
        <p className="text-sm text-muted-foreground mt-4">
          کامپوننت‌های{" "}
          <code className="text-sm bg-muted px-2 py-1 rounded">Calendar</code>
          ،{" "}
          <code className="text-sm bg-muted px-2 py-1 rounded">Popover</code> و{" "}
          <code className="text-sm bg-muted px-2 py-1 rounded">Button</code>{" "}
          به‌صورت خودکار به‌عنوان وابستگی نصب می‌شوند.
        </p>
        <p className="text-sm text-muted-foreground mt-2">
          برای استفاده از مثال پیش‌تنظیم‌ها، کامپوننت{" "}
          <code className="text-sm bg-muted px-2 py-1 rounded">Select</code> را
          جداگانه نصب کنید:{" "}
          <code className="text-sm bg-muted px-2 py-1 rounded" dir="ltr">
            npx @quark-lab/rad-ui add select
          </code>
        </p>
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic"
          description="انتخاب تک‌تاریخ با پاپ‌اور و تقویم شمسی."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="انتخاب بازه تاریخ"
          titleEn="Range Picker"
          description="انتخاب بازه تاریخی با نمایش دو ماه."
          code={rangeCode}
        >
          <RangeExample />
        </ComponentExample>

        <ComponentExample
          title="با پیش‌تنظیم‌ها"
          titleEn="With Presets"
          description="انتخاب سریع تاریخ با پیش‌تنظیم‌های آماده مانند امروز، فردا و هفته آینده."
          code={withPresetsCode}
        >
          <WithPresetsExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="DatePicker"
          description="پراپ‌های کامپوننت انتخابگر تاریخ."
          props={datePickerProps}
        />
        <PropsTable
          title="DateRangePicker"
          description="پراپ‌های کامپوننت انتخابگر بازه تاریخ."
          props={dateRangePickerProps}
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
                - باز کردن پاپ‌اور
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Escape
                </code>{" "}
                - بستن پاپ‌اور
              </li>
              <li>کلیدهای جهت‌دار - ناوبری در تقویم</li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              فوکوس (Focus)
            </h3>
            <p>
              پس از باز شدن پاپ‌اور، فوکوس به تقویم منتقل می‌شود. با بستن
              پاپ‌اور، فوکوس به دکمه تریگر بازمی‌گردد.
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
            <h3 className="font-semibold mb-3">نمایش تاریخ (Date Display)</h3>
            <p className="text-muted-foreground">
              کامپوننت به‌صورت پیش‌فرض تاریخ را با فرمت شمسی نمایش می‌دهد. از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                toLocaleDateString(&quot;fa-IR&quot;)
              </code>{" "}
              استفاده می‌شود.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">پیش‌تنظیم‌ها (Presets)</h3>
            <p className="text-muted-foreground">
              برای تجربه کاربری بهتر، پیش‌تنظیم‌هایی مانند «امروز»، «فردا» و
              «هفته آینده» اضافه کنید. برای این مثال به کامپوننت{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">Select</code>{" "}
              نیاز دارید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              متن جایگزین (Placeholder)
            </h3>
            <p className="text-muted-foreground">
              همیشه یک متن جایگزین فارسی مانند «انتخاب تاریخ» نمایش دهید تا
              کاربر متوجه عملکرد دکمه شود.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <ComponentExample
          title="استفاده ساده"
          titleEn="Simple Usage"
          description="ساده‌ترین حالت استفاده از انتخابگر تاریخ."
          code={usageCode}
        >
          <UsageExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="با حالت تاریخ‌تولد"
          titleEn="Date of Birth"
          description="استفاده از منوی کشویی ماه و سال برای انتخاب سریع‌تر تاریخ تولد."
          code={`import { DatePicker } from "@/components/ui/date-picker";

<DatePicker
  date={date}
  onDateChange={setDate}
  placeholder="تاریخ تولد"
  captionLayout="dropdown"
/>`}
        >
          <div className="text-sm text-muted-foreground">
            از captionLayout=&quot;dropdown&quot; برای انتخاب سریع ماه و سال
            استفاده کنید.
          </div>
        </SubExample>
        <SubExample
          title="فرمت سفارشی"
          titleEn="Custom Format"
          description="نمایش تاریخ با فرمت سفارشی."
          code={`const formatDate = (date: Date) => {
  return new Intl.DateTimeFormat("fa-IR", {
    year: "numeric",
    month: "long",
    day: "numeric",
  }).format(date);
};

// نمونه خروجی: ۱۰ فروردین ۱۴۰۵`}
        >
          <div className="text-sm text-muted-foreground">
            از Intl.DateTimeFormat برای فرمت‌بندی سفارشی تاریخ شمسی استفاده
            کنید.
          </div>
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
