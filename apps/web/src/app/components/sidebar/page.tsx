"use client";

import { InstallCodeBlock, InlineCodeBlock } from "@/components/docs/code-block";
import { ComponentExample } from "@/components/docs/component-example";
import { ApiReferenceSection, PropsTable, type PropDefinition } from "@/components/docs/props-table";
import BasicExample, { code as basicCode } from "./_examples/basic";
import ControlledExample, { code as controlledCode } from "./_examples/controlled";
import { code as usageCode } from "./_examples/usage";

const sidebarProviderProps: PropDefinition[] = [
  {
    name: "defaultOpen",
    type: "boolean",
    defaultValue: "true",
    description: "وضعیت پیش‌فرض باز/بسته بودن سایدبار.",
  },
  {
    name: "open",
    type: "boolean",
    defaultValue: "undefined",
    description: "وضعیت کنترل‌شده سایدبار.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "undefined",
    description: "تابع تغییر وضعیت در حالت کنترل‌شده.",
  },
];

const sidebarProps: PropDefinition[] = [
  {
    name: "side",
    type: '"left" | "right"',
    defaultValue: '"right"',
    description: "سمت نمایش سایدبار.",
  },
  {
    name: "variant",
    type: '"sidebar" | "floating" | "inset"',
    defaultValue: '"sidebar"',
    description: "حالت ظاهری سایدبار.",
  },
  {
    name: "collapsible",
    type: '"offcanvas" | "icon" | "none"',
    defaultValue: '"offcanvas"',
    description: "نوع جمع‌شدن سایدبار.",
  },
  {
    name: "dir",
    type: '"rtl" | "ltr"',
    defaultValue: '"rtl"',
    description: "جهت نمایش، مخصوصا در موبایل.",
  },
];

export default function SidebarPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">نوار کناری (Sidebar)</h1>
        <p className="text-lg text-muted-foreground">
          سایدبار قابل ترکیب و شخصی‌سازی برای ساخت ناوبری اپلیکیشن، با پشتیبانی از
          RTL و حالت‌های offcanvas/icon.
        </p>
      </div>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add sidebar" language="bash" />
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic"
          description="یک سایدبار ساده با آیتم‌های منو و دکمه Trigger."
          code={basicCode}
          previewCentered={false}
          previewClassName="p-0 overflow-hidden"
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="کنترل‌شده"
          titleEn="Controlled"
          description="مدیریت وضعیت سایدبار با state بیرونی."
          code={controlledCode}
          previewCentered={false}
          previewClassName="p-0 overflow-hidden"
        >
          <ControlledExample />
        </ComponentExample>
      </section>

      <ApiReferenceSection>
        <PropsTable
          title="SidebarProvider"
          description="کانتکست مدیریت وضعیت سایدبار."
          props={sidebarProviderProps}
        />
        <PropsTable
          title="Sidebar"
          description="کانتینر اصلی سایدبار با حالت‌های مختلف."
          props={sidebarProps}
        />
      </ApiReferenceSection>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">دسترسی‌پذیری</h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-2 font-semibold text-foreground">کلید میان‌بر</h3>
            <p>
              با <code className="rounded bg-muted px-2 py-1 text-sm">⌘/Ctrl + B</code>{" "}
              می‌توانید سایدبار را باز/بسته کنید.
            </p>
          </div>
          <div className="rounded-lg border border-border bg-card p-4">
            <h3 className="mb-2 font-semibold text-foreground">پشتیبانی از RTL</h3>
            <p>
              کامپوننت برای RTL آماده است و در حالت موبایل می‌توانید جهت را با
              پراپ <code className="rounded bg-muted px-2 py-1 text-sm">dir</code>{" "}
              تنظیم کنید.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده</h2>
        <InlineCodeBlock code={usageCode} />
      </section>
    </div>
  );
}

