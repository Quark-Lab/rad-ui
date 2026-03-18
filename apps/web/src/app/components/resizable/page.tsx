"use client";

import {
  InstallCodeBlock,
  InlineCodeBlock,
} from "@/components/docs/code-block";
import { ComponentExample } from "@/components/docs/component-example";
import {
  ApiReferenceSection,
  PropsTable,
  type PropDefinition,
} from "@/components/docs/props-table";
import BasicExample, { code as basicCode } from "./_examples/basic";
import VerticalExample, { code as verticalCode } from "./_examples/vertical";
import HandleExample, { code as handleCode } from "./_examples/handle";
import { code as usageCode } from "./_examples/usage";

const panelGroupProps: PropDefinition[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description: "جهت گروه پنل‌ها برای تغییر اندازه (افقی یا عمودی).",
  },
  {
    name: "dir",
    type: '"rtl" | "ltr"',
    defaultValue: '"rtl"',
    description:
      "جهت چیدمان در حالت افقی. برای RTL مقدار rtl و برای LTR مقدار ltr.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای گروه پنل‌ها.",
  },
];

const panelProps: PropDefinition[] = [
  {
    name: "defaultSize",
    type: "string",
    defaultValue: "undefined",
    description: 'اندازه اولیه پنل (مثل "50%").',
  },
  {
    name: "minSize",
    type: "number",
    defaultValue: "undefined",
    description: "حداقل اندازه پنل (درصد).",
  },
  {
    name: "maxSize",
    type: "number",
    defaultValue: "undefined",
    description: "حداکثر اندازه پنل (درصد).",
  },
];

const handleProps: PropDefinition[] = [
  {
    name: "withHandle",
    type: "boolean",
    defaultValue: "false",
    description: "نمایش هندل قابل مشاهده روی جداکننده.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای جداکننده.",
  },
];

export default function ResizablePage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          پنل قابل تغییر اندازه (Resizable)
        </h1>
        <p className="text-lg text-muted-foreground">
          ساخت گروه پنل‌ها و چیدمان‌های قابل تغییر اندازه با پشتیبانی کیبورد و
          دسترسی‌پذیری. این کامپوننت بر پایه پکیج{" "}
          <span className="font-medium">react-resizable-panels</span> ساخته شده
          است.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add resizable"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic"
          description="یک چیدمان دو ستونه با پنل تو در تو (عمودی)."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="عمودی"
          titleEn="Vertical"
          description='با orientation="vertical" می‌توانید تغییر اندازه عمودی داشته باشید.'
          code={verticalCode}
        >
          <VerticalExample />
        </ComponentExample>

        <ComponentExample
          title="هندل قابل مشاهده"
          titleEn="Handle"
          description="با withHandle یک هندل قابل دیدن روی جداکننده نمایش دهید."
          code={handleCode}
        >
          <HandleExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="ResizablePanelGroup"
          description="گروه پنل‌ها که تغییر اندازه را مدیریت می‌کند."
          props={panelGroupProps}
        />
        <PropsTable
          title="ResizablePanel"
          description="هر پنل قابل تغییر اندازه."
          props={panelProps}
        />
        <PropsTable
          title="ResizableHandle"
          description="جداکننده بین پنل‌ها."
          props={handleProps}
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
            <p>
              جداکننده‌ها قابل فوکوس هستند و کاربران می‌توانند با کیبورد اندازه
              پنل‌ها را تغییر دهند (طبق رفتار پیش‌فرض react-resizable-panels).
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              RTL (Right-to-Left)
            </h3>
            <p>
              برای چیدمان افقی در RTL، از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">dir="rtl"</code>{" "}
              روی{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                ResizablePanelGroup
              </code>{" "}
              استفاده کنید تا جهت تعاملات و چینش درست باشد.
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
            <h3 className="font-semibold mb-3">حداقل اندازه منطقی</h3>
            <p className="text-muted-foreground">
              برای جلوگیری از کوچک شدن بیش از حد پنل‌ها، از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">minSize</code>{" "}
              استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">نمایش هندل</h3>
            <p className="text-muted-foreground">
              اگر کاربران شما با قابلیت تغییر اندازه آشنا نیستند، از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                withHandle
              </code>{" "}
              استفاده کنید تا جداکننده واضح‌تر باشد.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <InlineCodeBlock code={usageCode} />
      </section>
    </div>
  );
}

