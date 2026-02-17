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
import WithLabelExample, { code as withLabelCode } from "./_examples/with-label";
import GroupsExample, { code as groupsCode } from "./_examples/groups";
import SizesExample, { code as sizesCode } from "./_examples/sizes";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import ValidationExample, { code as validationCode } from "./_examples/validation";

const nativeSelectProps: PropDefinition[] = [
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"sm"',
    description: "اندازه کامپوننت",
  },
  {
    name: "children",
    type: "ReactNode",
    defaultValue: "-",
    description: "شامل NativeSelectOption یا NativeSelectOptGroup",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "...props",
    type: "SelectHTMLAttributes",
    defaultValue: "-",
    description: "تمام ویژگی‌های استاندارد HTML select (مانند disabled, required, onChange)",
  },
];

export default function NativeSelectPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          انتخابگر بومی (Native Select)
        </h1>
        <p className="text-lg text-muted-foreground">
          المان انتخابگر بومی HTML با استایل‌دهی سیستم طراحی Rad UI و پشتیبانی
          از RTL.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add native-select" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از انتخابگر بومی."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="با برچسب"
          titleEn="With Label"
          description="استفاده از انتخابگر همراه با برچسب."
          code={withLabelCode}
        >
          <WithLabelExample />
        </ComponentExample>

        <ComponentExample
          title="گروه‌بندی"
          titleEn="Groups"
          description="استفاده از optgroup برای گروه‌بندی گزینه‌ها."
          code={groupsCode}
        >
          <GroupsExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه‌ها"
          titleEn="Sizes"
          description="انتخابگرها در سه اندازه کوچک، متوسط و بزرگ موجود هستند."
          code={sizesCode}
        >
          <SizesExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled State"
          description="انتخابگر غیرفعال که کاربر نمی‌تواند آن را تغییر دهد."
          code={disabledCode}
        >
          <DisabledExample />
        </ComponentExample>

        <ComponentExample
          title="حالت‌های اعتبارسنجی"
          titleEn="Validation States"
          description="نمایش حالت خطا برای انتخابگر."
          code={validationCode}
        >
          <ValidationExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="NativeSelect"
          description="پراپ‌های کامپوننت NativeSelect."
          props={nativeSelectProps}
        />
        <div className="mb-8">
          <h3 className="text-xl font-medium mb-4 mt-8">NativeSelectOption</h3>
          <p className="mb-4 text-muted-foreground">
            wrapper ساده برای تگ <code>option</code>.
          </p>

          <h3 className="text-xl font-medium mb-4 mt-8">NativeSelectOptGroup</h3>
          <p className="mb-4 text-muted-foreground">
            wrapper ساده برای تگ <code>optgroup</code>.
          </p>
        </div>
      </ApiReferenceSection>

      {/* RTL Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">پشتیبانی RTL</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            این کامپوننت به طور خودکار از جهت‌گیری راست‌چین پشتیبانی می‌کند.
            آیکون فلش به درستی در سمت چپ (در حالت RTL) یا سمت راست (در حالت LTR)
            قرار می‌گیرد و فاصله‌گذاری‌ها با استفاده از ویژگی‌های منطقی CSS
            (مانند <code className="bg-muted px-1 rounded">pe-8</code> و{" "}
            <code className="bg-muted px-1 rounded">end-3</code>) تنظیم شده‌اند.
          </p>
        </div>
      </section>
    </div>
  );
}
