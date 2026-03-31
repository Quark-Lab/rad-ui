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
import DropdownCaptionExample, {
  code as dropdownCaptionCode,
} from "./_examples/dropdown-caption";
import { code as usageCode } from "./_examples/usage";

const calendarProps: PropDefinition[] = [
  {
    name: "mode",
    type: '"single" | "range" | "multiple"',
    defaultValue: "-",
    description: "حالت انتخاب تاریخ",
  },
  {
    name: "selected",
    type: "Date | DateRange | Date[]",
    defaultValue: "undefined",
    description: "تاریخ(های) انتخاب‌شده",
  },
  {
    name: "onSelect",
    type: "(date: Date | DateRange | Date[]) => void",
    defaultValue: "-",
    description: "تابع رویداد انتخاب تاریخ",
  },
  {
    name: "locale",
    type: "Locale",
    defaultValue: "faIR",
    description: "زبان و محلی‌سازی تقویم (پیش‌فرض: فارسی)",
  },
  {
    name: "dir",
    type: '"rtl" | "ltr"',
    defaultValue: '"rtl"',
    description: "جهت نمایش تقویم",
  },
  {
    name: "captionLayout",
    type: '"label" | "dropdown"',
    defaultValue: '"label"',
    description: "نوع نمایش عنوان ماه و سال",
  },
  {
    name: "showOutsideDays",
    type: "boolean",
    defaultValue: "true",
    description: "نمایش روزهای خارج از ماه جاری",
  },
  {
    name: "numberOfMonths",
    type: "number",
    defaultValue: "1",
    description: "تعداد ماه‌های نمایش‌داده‌شده",
  },
  {
    name: "disabled",
    type: "Date[] | ((date: Date) => boolean)",
    defaultValue: "undefined",
    description: "تاریخ‌هایی که غیرفعال هستند",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function CalendarPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">تقویم (Calendar)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت تقویم با پشتیبانی پیش‌فرض از تقویم شمسی (جلالی) و حالت RTL.
          بر اساس react-day-picker ساخته شده است.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add calendar"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از تقویم با انتخاب تک‌تاریخ."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="انتخاب بازه"
          titleEn="Range Selection"
          description="انتخاب بازه تاریخی با نمایش دو ماه."
          code={rangeCode}
        >
          <RangeExample />
        </ComponentExample>

        <ComponentExample
          title="انتخابگر ماه و سال"
          titleEn="Month & Year Dropdown"
          description="نمایش منوی کشویی برای انتخاب سریع ماه و سال."
          code={dropdownCaptionCode}
        >
          <DropdownCaptionExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Calendar"
          description="پراپ‌های کامپوننت تقویم."
          props={calendarProps}
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
                  ArrowLeft
                </code>{" "}
                /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  ArrowRight
                </code>{" "}
                - حرکت بین روزها
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  ArrowUp
                </code>{" "}
                /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  ArrowDown
                </code>{" "}
                - حرکت بین هفته‌ها
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                یا{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space
                </code>{" "}
                - انتخاب تاریخ
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Home
                </code>{" "}
                /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  End
                </code>{" "}
                - رفتن به اول / آخر هفته
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  PageUp
                </code>{" "}
                /{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  PageDown
                </code>{" "}
                - حرکت بین ماه‌ها
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">ARIA</h3>
            <p>
              تقویم از نقش{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">grid</code>{" "}
              استفاده می‌کند و هر روز دارای نقش{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                gridcell
              </code>{" "}
              است. روزهای غیرفعال با{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-disabled
              </code>{" "}
              مشخص می‌شوند.
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
              تقویم شمسی (Persian Calendar)
            </h3>
            <p className="text-muted-foreground">
              تقویم به‌صورت پیش‌فرض از تقویم شمسی (جلالی) استفاده می‌کند.
              برای تغییر به تقویم میلادی، می‌توانید import را از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                react-day-picker/persian
              </code>{" "}
              به{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                react-day-picker
              </code>{" "}
              تغییر دهید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              استفاده با پاپ‌اور (With Popover)
            </h3>
            <p className="text-muted-foreground">
              برای ساخت یک انتخابگر تاریخ (Date Picker)، تقویم را با کامپوننت
              پاپ‌اور ترکیب کنید. صفحه{" "}
              <a
                href="/components/date-picker"
                className="text-primary hover:underline"
              >
                انتخابگر تاریخ
              </a>{" "}
              را ببینید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              انتخاب بازه (Range Selection)
            </h3>
            <p className="text-muted-foreground">
              از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                mode=&quot;range&quot;
              </code>{" "}
              برای انتخاب بازه تاریخی استفاده کنید. برای نمایش بهتر، تعداد
              ماه‌ها را به ۲ تنظیم کنید.
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
          title="غیرفعال کردن تاریخ‌ها"
          titleEn="Disabled Dates"
          description="می‌توانید تاریخ‌های خاصی را غیرفعال کنید."
          code={`import { Calendar } from "@/components/ui/calendar";

<Calendar
  mode="single"
  disabled={(date) =>
    date > new Date() || date < new Date("1900-01-01")
  }
  className="rounded-lg border border-border"
/>`}
        >
          <div className="text-sm text-muted-foreground">
            تاریخ‌های آینده و قبل از ۱۹۰۰ غیرفعال هستند.
          </div>
        </SubExample>
        <SubExample
          title="تقویم میلادی"
          titleEn="Gregorian Calendar"
          description="برای استفاده از تقویم میلادی، import را تغییر دهید."
          code={`// در فایل calendar.tsx این خط را تغییر دهید:
// قبل:
import { DayPicker } from "react-day-picker/persian";
// بعد:
import { DayPicker } from "react-day-picker";`}
        >
          <div className="text-sm text-muted-foreground">
            تقویم میلادی با تغییر یک خط import فعال می‌شود.
          </div>
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
