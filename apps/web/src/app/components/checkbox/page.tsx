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
import ControlledExample, { code as controlledCode } from "./_examples/controlled";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import FormExample, { code as formCode } from "./_examples/form";
import TermsExample, { code as termsCode } from "./_examples/terms";
import UsageExample, { code as usageCode } from "./_examples/usage";
import MultipleExample, { code as multipleCode } from "./_examples/multiple";

const checkboxProps: PropDefinition[] = [
  {
    name: "checked",
    type: 'boolean | "indeterminate"',
    defaultValue: "undefined",
    description: "وضعیت انتخاب شده (کنترل‌شده)",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    defaultValue: "false",
    description: "وضعیت پیش‌فرض (غیرکنترل‌شده)",
  },
  {
    name: "onCheckedChange",
    type: '(checked: boolean | "indeterminate") => void',
    defaultValue: "-",
    description: "تابع فراخوانی هنگام تغییر وضعیت",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن چک‌باکس",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
    description: "الزامی بودن در فرم",
  },
  {
    name: "name",
    type: "string",
    defaultValue: "-",
    description: "نام فیلد برای ارسال فرم",
  },
  {
    name: "value",
    type: "string",
    defaultValue: '"on"',
    description: "مقدار ارسالی در فرم",
  },
  {
    name: "id",
    type: "string",
    defaultValue: "-",
    description: "شناسه یکتا برای ارتباط با Label",
  },
];

export default function CheckboxPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">چک‌باکس (Checkbox)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت چک‌باکس برای انتخاب یک یا چند گزینه از مجموعه‌ای از انتخاب‌ها استفاده می‌شود.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add checkbox" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>
        
        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از چک‌باکس همراه با برچسب."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="با برچسب"
          titleEn="With Label"
          description="استفاده از چک‌باکس در کنار Label برای توضیحات بیشتر."
          code={withLabelCode}
        >
          <WithLabelExample />
        </ComponentExample>

        <ComponentExample
          title="کنترل شده"
          titleEn="Controlled"
          description="مدیریت وضعیت چک‌باکس با استفاده از React State."
          code={controlledCode}
        >
          <ControlledExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled"
          description="چک‌باکس‌هایی که کاربر نمی‌تواند با آن‌ها تعامل داشته باشد."
          code={disabledCode}
        >
          <DisabledExample />
        </ComponentExample>

        <ComponentExample
          title="مثال فرم"
          titleEn="Form Example"
          description="استفاده از چک‌باکس‌ها در یک فرم تنظیمات واقعی."
          code={formCode}
        >
          <FormExample />
        </ComponentExample>

        <ComponentExample
          title="پذیرش قوانین"
          titleEn="Terms Acceptance"
          description="استفاده از چک‌باکس برای تایید قوانین قبل از ادامه."
          code={termsCode}
        >
          <TermsExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Checkbox"
          description="پراپ‌های کامپوننت چک‌باکس."
          props={checkboxProps}
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
                - تغییر وضعیت چک‌باکس
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت به چک‌باکس بعدی
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌ها (Labels)
            </h3>
            <p>
              همیشه از کامپوننت Label با ویژگی htmlFor استفاده کنید تا چک‌باکس
              را با برچسب مرتبط کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              وضعیت (State)
            </h3>
            <p>
              وضعیت چک‌باکس از طریق{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-checked
              </code>{" "}
              به صورت خودکار اعلام می‌شود
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
            <h3 className="font-semibold mb-3">برچسب واضح (Clear Labels)</h3>
            <p className="text-muted-foreground">
              همیشه از Label همراه با Checkbox استفاده کنید و برچسب‌های واضح و
              مختصر بنویسید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              انتخاب‌های مستقل (Independent Choices)
            </h3>
            <p className="text-muted-foreground">
              از Checkbox برای انتخاب‌های مستقل استفاده کنید. برای انتخاب‌های
              انحصاری از Radio Button استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تفاوت با Switch
            </h3>
            <p className="text-muted-foreground">
              از Checkbox برای انتخاب‌های چندگانه که نیاز به تایید دارند و از
              Switch برای تنظیمات فوری (روشن/خاموش) استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              گروه‌بندی (Grouping)
            </h3>
            <p className="text-muted-foreground">
              چک‌باکس‌های مرتبط را در گروه‌های منطقی دسته‌بندی کنید و از تعداد
              زیاد چک‌باکس در یک گروه خودداری کنید
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
          title="انتخاب چندگانه"
          titleEn="Multiple Selection"
          description="پیاده‌سازی الگوی انتخاب همه / هیچکدام با حالت indeterminate."
          code={multipleCode}
        >
          <MultipleExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
