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
import InlineExample, { code as inlineCode } from "./_examples/inline";
import GridExample, { code as gridCode } from "./_examples/grid";
import RequiredExample, { code as requiredCode } from "./_examples/required";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import InvalidExample, { code as invalidCode } from "./_examples/invalid";
import WithBadgeExample, { code as withBadgeCode } from "./_examples/with-badge";
import SizesExample, { code as sizesCode } from "./_examples/sizes";
import ValidationExample, { code as validationCode } from "./_examples/validation";
import RestrictionsExample, { code as restrictionsCode } from "./_examples/restrictions";
import MaxLengthExample, { code as maxLengthCode } from "./_examples/max-length";
import FileInputExample, { code as fileInputCode } from "./_examples/file-input";
import FormExample, { code as formCode } from "./_examples/form";

const inputProps: PropDefinition[] = [
  {
    name: "size",
    type: '"sm" | "md" | "lg"',
    defaultValue: '"md"',
    description: "اندازه ورودی",
  },
  {
    name: "type",
    type: "string",
    defaultValue: '"text"',
    description: "نوع ورودی HTML (text, email, tel, number, file, ...)",
  },
  {
    name: "validate",
    type: "boolean",
    defaultValue: "false",
    description: "فعال‌سازی اعتبارسنجی خودکار بر اساس type",
  },
  {
    name: "validationPattern",
    type: "RegExp",
    defaultValue: "-",
    description: "الگوی regex سفارشی برای اعتبارسنجی",
  },
  {
    name: "validationMessage",
    type: "string",
    defaultValue: "-",
    description: "پیام خطای سفارشی (جایگزین پیام فارسی پیش‌فرض)",
  },
  {
    name: "onValidationChange",
    type: "(result) => void",
    defaultValue: "-",
    description: "callback هنگام تغییر وضعیت اعتبارسنجی",
  },
  {
    name: "allowedCharacters",
    type: 'RegExp | "digits" | "alpha" | "alphanumeric" | "persian"',
    defaultValue: "-",
    description: "محدود کردن کاراکترهای مجاز هنگام تایپ",
  },
  {
    name: "maxInputLength",
    type: "number",
    defaultValue: "-",
    description: "حداکثر طول ورودی با نمایش شمارنده کاراکتر",
  },
  {
    name: "maxFileSize",
    type: "number",
    defaultValue: "-",
    description: "حداکثر حجم فایل به بایت (فقط برای type='file')",
  },
  {
    name: "acceptFormats",
    type: "string[]",
    defaultValue: "-",
    description: "فرمت‌های مجاز فایل (فقط برای type='file')",
  },
  {
    name: "showError",
    type: "boolean",
    defaultValue: "false",
    description: "نمایش پیام خطا زیر ورودی",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function InputPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">ورودی متن (Input)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت ورودی متن برای دریافت داده‌های متنی کاربر با پشتیبانی از RTL،
          اعتبارسنجی، محدودیت کاراکتر و اعتبارسنجی فایل.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add input" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از ورودی متن."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="با برچسب"
          titleEn="With Label"
          description="استفاده از ورودی همراه با برچسب و توضیحات."
          code={withLabelCode}
        >
          <WithLabelExample />
        </ComponentExample>

        <ComponentExample
          title="درون‌خطی"
          titleEn="Inline"
          description="قرارگیری ورودی و دکمه در یک خط."
          code={inlineCode}
        >
          <InlineExample />
        </ComponentExample>

        <ComponentExample
          title="شبکه‌ای"
          titleEn="Grid"
          description="چیدمان ورودی‌ها در یک شبکه."
          code={gridCode}
        >
          <GridExample />
        </ComponentExample>

        <ComponentExample
          title="اجباری"
          titleEn="Required"
          description="نشان دادن فیلد اجباری."
          code={requiredCode}
        >
          <RequiredExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled"
          description="ورودی غیرفعال که کاربر نمی‌تواند آن را تغییر دهد."
          code={disabledCode}
        >
          <DisabledExample />
        </ComponentExample>

        <ComponentExample
          title="نامعتبر"
          titleEn="Invalid"
          description="نمایش حالت خطا به صورت دستی."
          code={invalidCode}
        >
          <InvalidExample />
        </ComponentExample>

        <ComponentExample
          title="با نشان"
          titleEn="With Badge"
          description="افزودن نشان به برچسب ورودی."
          code={withBadgeCode}
        >
          <WithBadgeExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه‌ها"
          titleEn="Sizes"
          description="ورودی‌ها در سه اندازه کوچک، متوسط و بزرگ موجود هستند."
          code={sizesCode}
        >
          <SizesExample />
        </ComponentExample>
      </section>

      {/* Advanced Features */}
      <ComponentExampleGroup
        title="ویژگی‌های پیشرفته"
        titleEn="Advanced Features"
      >
        <SubExample
          title="اعتبارسنجی"
          titleEn="Validation"
          description="اعتبارسنجی خودکار برای شماره تلفن، عدد، ایمیل و الگوی سفارشی."
          code={validationCode}
        >
          <ValidationExample />
        </SubExample>

        <SubExample
          title="محدودیت کاراکتر"
          titleEn="Character Restriction"
          description="محدود کردن کاراکترهای ورودی به اعداد، حروف یا فارسی."
          code={restrictionsCode}
        >
          <RestrictionsExample />
        </SubExample>

        <SubExample
          title="محدودیت طول"
          titleEn="Max Length"
          description="محدود کردن طول ورودی با نمایش شمارنده."
          code={maxLengthCode}
        >
          <MaxLengthExample />
        </SubExample>

        <SubExample
          title="ورودی فایل"
          titleEn="File Input"
          description="آپلود فایل با قابلیت محدود کردن حجم و فرمت."
          code={fileInputCode}
        >
          <FileInputExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* Practical Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">مثال عملی (Practical Example)</h2>
        <ComponentExample
          title="فرم کامل"
          titleEn="Form"
          description="یک فرم کامل با استفاده از انواع ورودی‌ها و اعتبارسنجی."
          code={formCode}
        >
          <FormExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Input"
          description="پراپ‌های کامپوننت ورودی."
          props={inputProps}
        />
      </ApiReferenceSection>

      {/* RTL Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">پشتیبانی RTL</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            کامپوننت Input به طور کامل از جهت‌گیری راست‌چین پشتیبانی می‌کند.
            متن‌ها، placeholder، padding‌ها و پیام‌های خطا به طور خودکار بر اساس
            جهت سند تنظیم می‌شوند. تمام پیام‌های اعتبارسنجی پیش‌فرض به زبان
            فارسی هستند.
          </p>
        </div>
      </section>
    </div>
  );
}
