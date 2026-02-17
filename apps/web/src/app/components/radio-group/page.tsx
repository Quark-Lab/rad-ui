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
import WithDescriptionExample, { code as withDescriptionCode } from "./_examples/with-description";
import ControlledExample, { code as controlledCode } from "./_examples/controlled";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import FormExample, { code as formCode } from "./_examples/form";
import CardStyleExample, { code as cardCode } from "./_examples/card";

const radioGroupProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار کنترل شده",
  },
  {
    name: "defaultValue",
    type: "string",
    defaultValue: "undefined",
    description: "مقدار پیش‌فرض (غیرکنترل شده)",
  },
  {
    name: "onValueChange",
    type: "(value: string) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر مقدار",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن تمام گزینه‌ها",
  },
  {
    name: "name",
    type: "string",
    defaultValue: "undefined",
    description: "نام فیلد برای ارسال فرم",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
    description: "الزامی بودن انتخاب",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"vertical"',
    description: "جهت نمایش گزینه‌ها",
  },
];

const radioGroupItemProps: PropDefinition[] = [
  {
    name: "value",
    type: "string",
    defaultValue: "-",
    description: "مقدار این گزینه (الزامی)",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن این گزینه",
  },
  {
    name: "id",
    type: "string",
    defaultValue: "undefined",
    description: "شناسه برای ارتباط با Label",
  },
];

export default function RadioGroupPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">دکمه رادیویی (Radio Group)</h1>
        <p className="text-lg text-muted-foreground">
          مجموعه‌ای از دکمه‌های قابل انتخاب که فقط یکی از آن‌ها می‌تواند در یک زمان انتخاب شود.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add radio-group" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده از گروه دکمه‌های رادیویی."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="با توضیحات"
          titleEn="With Description"
          description="افزودن توضیحات اضافی برای هر گزینه."
          code={withDescriptionCode}
        >
          <WithDescriptionExample />
        </ComponentExample>

        <ComponentExample
          title="کنترل شده"
          titleEn="Controlled"
          description="کنترل مقدار انتخاب شده با استفاده از React State."
          code={controlledCode}
        >
          <ControlledExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled State"
          description="غیرفعال کردن یک گزینه یا کل گروه."
          code={disabledCode}
        >
          <DisabledExample />
        </ComponentExample>

        <ComponentExample
          title="یکپارچگی با فرم"
          titleEn="Form Integration"
          description="استفاده از دکمه‌های رادیویی در یک فرم."
          code={formCode}
        >
          <FormExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="استایل کارتی"
          titleEn="Card Style"
          description="سفارشی‌سازی ظاهر گزینه‌ها به صورت کارت."
          code={cardCode}
        >
          <CardStyleExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="RadioGroup"
          description="پراپ‌های کامپوننت RadioGroup."
          props={radioGroupProps}
        />
        <PropsTable
          title="RadioGroupItem"
          description="پراپ‌های کامپوننت RadioGroupItem."
          props={radioGroupItemProps}
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
                - ورود به گروه یا خروج از آن
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space
                </code>{" "}
                - انتخاب گزینه فعلی
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Keys
                </code>{" "}
                - حرکت بین گزینه‌ها و انتخاب خودکار
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              نقش ARIA (ARIA Role)
            </h3>
            <p>
              کامپوننت از نقش{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                radiogroup
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">radio</code>{" "}
              استفاده می‌کند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌ها (Labels)
            </h3>
            <p>
              همیشه از Label با ویژگی htmlFor برای هر RadioGroupItem استفاده
              کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              مدیریت فوکوس (Focus Management)
            </h3>
            <p>
              از الگوی roving tabindex برای مدیریت فوکوس استفاده می‌شود که فقط
              یک آیتم در هر زمان قابل فوکوس است
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
              برچسب واضح (Clear Labels)
            </h3>
            <p className="text-muted-foreground">
              همیشه برچسب‌های واضح و مختصر برای هر گزینه استفاده کنید تا کاربر
              بتواند به راحتی تصمیم بگیرد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تعداد محدود گزینه‌ها (Limited Options)
            </h3>
            <p className="text-muted-foreground">
              برای بیش از ۵-۷ گزینه، از Select یا Combobox استفاده کنید. Radio
              Group برای تعداد محدود گزینه مناسب است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              انتخاب انحصاری (Mutually Exclusive)
            </h3>
            <p className="text-muted-foreground">
              فقط برای انتخاب‌های انحصاری استفاده کنید. برای انتخاب‌های
              چندگانه از Checkbox استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              مقدار پیش‌فرض (Default Value)
            </h3>
            <p className="text-muted-foreground">
              در بیشتر موارد، یک مقدار پیش‌فرض تنظیم کنید تا کاربر مجبور به
              انتخاب نباشد (مگر اینکه انتخاب آگاهانه ضروری باشد)
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
