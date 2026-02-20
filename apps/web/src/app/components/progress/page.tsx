"use client";

import { InstallCodeBlock } from "@/components/docs/code-block";
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
import LabelExample, { code as labelCode } from "./_examples/label";
import ControlledExample, { code as controlledCode } from "./_examples/controlled";
import UsageExample, { code as usageCode } from "./_examples/usage";

const progressProps: PropDefinition[] = [
  {
    name: "value",
    type: "number | null",
    defaultValue: "null",
    description: "مقدار فعلی پیشرفت (۰ تا ۱۰۰ یا مطابق max)",
  },
  {
    name: "max",
    type: "number",
    defaultValue: "100",
    description: "حداکثر مقدار",
  },
  {
    name: "getValueLabel",
    type: "(value: number, max: number) => string",
    defaultValue: "undefined",
    description: "برچسب سفارشی برای خوانندگان صفحه",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function ProgressPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">پیشرفت (Progress)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش میزان پیشرفت انجام یک کار، معمولاً به صورت نوار پیشرفت.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add progress" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic"
          description="یک نوار پیشرفت ساده با مقدار مشخص."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="با برچسب"
          titleEn="Label"
          description="استفاده از کامپوننت Field برای افزودن برچسب و نمایش درصد."
          code={labelCode}
        >
          <LabelExample />
        </ComponentExample>

        <ComponentExample
          title="کنترل‌شده"
          titleEn="Controlled"
          description="نوار پیشرفتی که با اسلایدر کنترل می‌شود."
          code={controlledCode}
        >
          <ControlledExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Progress"
          description="کامپوننت اصلی نوار پیشرفت. مقدار value بین ۰ تا max (پیش‌فرض ۱۰۰) است."
          props={progressProps}
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
              نقش progressbar (WAI-ARIA)
            </h3>
            <p>
              کامپوننت از Radix UI Progress استفاده می‌کند و الزامات نقش
              progressbar در WAI-ARIA 1.2 را رعایت می‌کند تا خوانندگان صفحه
              بتوانند وضعیت پیشرفت را اعلام کنند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی از RTL
            </h3>
            <p>
              نوار پیشرفت با جهت RTL سازگار است و از کلاس‌های منطقی استفاده
              می‌کند.
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
            <h3 className="font-semibold mb-3">مقدار (Value)</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">value:</strong> عدد بین ۰ تا
                max (پیش‌فرض ۱۰۰). برای حالت نامشخص از <code className="text-sm bg-muted px-2 py-1 rounded">null</code> استفاده کنید.
              </li>
              <li>
                <strong className="text-foreground">max:</strong> برای مقیاس‌های
                غیر از ۰–۱۰۰، پراپ max را تنظیم کنید.
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">برچسب و توضیح</h3>
            <p className="text-muted-foreground">
              برای پیشرفت آپلود یا کارهای طولانی، از Field و FieldLabel استفاده
              کنید و در صورت نیاز درصد را کنار نوار نمایش دهید.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <ComponentExample
        title="نحوه استفاده"
        titleEn="Usage"
        description="نمونه کامل از نحوه ایمپورت و استفاده از کامپوننت Progress."
        code={usageCode}
      >
        <UsageExample />
      </ComponentExample>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="با برچسب"
          titleEn="Label"
          description="نمایش برچسب و درصد کنار نوار پیشرفت."
          code={labelCode}
        >
          <LabelExample />
        </SubExample>
        <SubExample
          title="کنترل‌شده"
          titleEn="Controlled"
          description="کنترل مقدار پیشرفت با اسلایدر."
          code={controlledCode}
        >
          <ControlledExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
