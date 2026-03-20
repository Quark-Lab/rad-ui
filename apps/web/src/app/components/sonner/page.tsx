"use client";

import { InstallCodeBlock } from "@/components/docs/code-block";
import { ComponentExample } from "@/components/docs/component-example";
import { ApiReferenceSection, PropsTable, type PropDefinition } from "@/components/docs/props-table";
import BasicExample, { code as basicCode } from "./_examples/basic";
import TypesExample, { code as typesCode } from "./_examples/types";
import PositionExample, { code as positionCode } from "./_examples/position";
import { code as usageCode } from "./_examples/usage";
import { InlineCodeBlock } from "@/components/docs/code-block";

const toasterProps: PropDefinition[] = [
  {
    name: "dir",
    type: '"rtl" | "ltr"',
    defaultValue: '"rtl"',
    description: "جهت نمایش Toast (پیش‌فرض rtl).",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای Toaster.",
  },
];

export default function SonnerPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">سونر (Sonner)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش Toast (اعلان‌های موقتی) با دکمه‌ها و پیام‌های متنی، شبیه الگوی shadcn/ui.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add sonner" language="bash" />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="پایه"
          titleEn="Basic"
          description="نمایش یک Toast با description و action."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="انواع Toast"
          titleEn="Types"
          description="استفاده از toast.success / toast.info / toast.warning / toast.error."
          code={typesCode}
        >
          <TypesExample />
        </ComponentExample>

        <ComponentExample
          title="موقعیت (Position)"
          titleEn="Position"
          description="تغییر موقعیت Toast روی صفحه."
          code={positionCode}
        >
          <PositionExample />
        </ComponentExample>
      </section>

      <ApiReferenceSection>
        <PropsTable
          title="Toaster"
          description="کامپوننتی که باید یک‌بار در برنامه (ترجیحا در RootLayout) رندر شود."
          props={toasterProps}
        />
      </ApiReferenceSection>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">دسترسی‌پذیری (Accessibility)</h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">ARIA و اعلام وضعیت</h3>
            <p>
              Toast ها به‌صورت خودکار توسط Sonner مدیریت می‌شوند و معمولاً از role/aria-live
              برای اعلام به کاربران صفحه‌خوان استفاده می‌کنند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">RTL</h3>
            <p>
              کامپوننت Toaster در Rad UI به‌صورت پیش‌فرض `dir=&quot;rtl&quot;` دارد تا چینش و تعامل‌ها با جهت RTL هماهنگ باشد.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">بهترین شیوه‌ها (Best Practices)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">یک Toaster در کل برنامه</h3>
            <p className="text-muted-foreground">
              فقط یک بار Toaster را رندر کنید تا از تکرار و رفتارهای غیرمنتظره جلوگیری شود.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استفاده در کلاینت</h3>
            <p className="text-muted-foreground">
              چون Toast ها تعامل دارند، در Next.js بهتر است Component های فراخوانی `toast(...)` در
              `use client` باشند.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <InlineCodeBlock code={usageCode} />
      </section>
    </div>
  );
}

