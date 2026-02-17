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
import InputExample, { code as inputCode } from "./_examples/input";
import TextareaExample, { code as textareaCode } from "./_examples/textarea";
import SliderExample, { code as sliderCode } from "./_examples/slider";
import FieldSetExample, { code as fieldSetCode } from "./_examples/fieldset";
import CheckboxExample, { code as checkboxCode } from "./_examples/checkbox";
import RadioExample, { code as radioCode } from "./_examples/radio";
import SwitchExample, { code as switchCode } from "./_examples/switch";
import FieldGroupExample, { code as fieldGroupCode } from "./_examples/field-group";
import ValidationExample, { code as validationCode } from "./_examples/validation";
import PaymentFormExample, { code as paymentFormCode } from "./_examples/payment-form";

const fieldSetProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const fieldLegendProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"legend" | "label"',
    defaultValue: '"legend"',
    description: "نوع ظاهری. نوع label اندازه برچسب را اعمال می‌کند.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const fieldProps: PropDefinition[] = [
  {
    name: "orientation",
    type: '"vertical" | "horizontal" | "responsive"',
    defaultValue: '"vertical"',
    description: "جهت چیدمان فیلد",
  },
  {
    name: "data-invalid",
    type: "boolean",
    defaultValue: "-",
    description: "فعال‌سازی حالت خطا",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const fieldErrorProps: PropDefinition[] = [
  {
    name: "errors",
    type: "Array<{ message?: string }>",
    defaultValue: "-",
    description: "آرایه خطاها (مثلاً از react-hook-form)",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const fieldDescriptionProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const fieldSeparatorProps: PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    defaultValue: "-",
    description: "متن اختیاری بین خطوط جداکننده",
  },
];

export default function FieldPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">فیلد فرم (Field)</h1>
        <p className="text-lg text-muted-foreground">
          ترکیب برچسب‌ها، کنترل‌ها و متن‌های راهنما برای ساخت فیلدهای فرم دسترسی‌پذیر و گروه‌بندی ورودی‌ها.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add field" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از فیلد با برچسب و توضیحات."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="ورودی"
          titleEn="Input"
          description="استفاده از Input داخل Field."
          code={inputCode}
        >
          <InputExample />
        </ComponentExample>

        <ComponentExample
          title="ناحیه متن"
          titleEn="Textarea"
          description="استفاده از Textarea داخل Field."
          code={textareaCode}
        >
          <TextareaExample />
        </ComponentExample>

        <ComponentExample
          title="اسلایدر"
          titleEn="Slider"
          description="استفاده از Slider داخل Field."
          code={sliderCode}
        >
          <SliderExample />
        </ComponentExample>

        <ComponentExample
          title="مجموعه فیلد"
          titleEn="FieldSet"
          description="گروه‌بندی فیلدها با FieldSet و FieldLegend."
          code={fieldSetCode}
        >
          <FieldSetExample />
        </ComponentExample>

        <ComponentExample
          title="چک‌باکس"
          titleEn="Checkbox"
          description="استفاده از Checkbox در Field با جهت افقی."
          code={checkboxCode}
        >
          <CheckboxExample />
        </ComponentExample>

        <ComponentExample
          title="دکمه رادیویی"
          titleEn="Radio"
          description="استفاده از RadioGroup در FieldSet."
          code={radioCode}
        >
          <RadioExample />
        </ComponentExample>

        <ComponentExample
          title="سوئیچ"
          titleEn="Switch"
          description="استفاده از Switch در Field با جهت افقی."
          code={switchCode}
        >
          <SwitchExample />
        </ComponentExample>

        <ComponentExample
          title="گروه فیلد"
          titleEn="Field Group"
          description="گروه‌بندی فیلدها با FieldGroup و جداکننده."
          code={fieldGroupCode}
        >
          <FieldGroupExample />
        </ComponentExample>

        <ComponentExample
          title="اعتبارسنجی"
          titleEn="Validation"
          description="نمایش پیام‌های خطا با FieldError."
          code={validationCode}
        >
          <ValidationExample />
        </ComponentExample>
      </section>

      {/* Practical Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال عملی (Practical Example)
        </h2>
        <ComponentExample
          title="فرم پرداخت"
          titleEn="Payment Form"
          description="یک فرم پرداخت کامل با استفاده از تمام اجزای Field."
          code={paymentFormCode}
        >
          <PaymentFormExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="FieldSet"
          description="محفظه‌ای که یک fieldset معنایی با فاصله‌گذاری پیش‌فرض رندر می‌کند."
          props={fieldSetProps}
        />
        <PropsTable
          title="FieldLegend"
          description="عنوان برای FieldSet."
          props={fieldLegendProps}
        />
        <PropsTable
          title="Field"
          description="پوشش‌دهنده اصلی برای یک فیلد منفرد."
          props={fieldProps}
        />
        <PropsTable
          title="FieldError"
          description="محفظه خطای دسترسی‌پذیر."
          props={fieldErrorProps}
        />
        <PropsTable
          title="FieldDescription"
          description="توضیحات کمکی برای فیلد."
          props={fieldDescriptionProps}
        />
        <PropsTable
          title="FieldSeparator"
          description="جداکننده بصری برای تفکیک بخش‌ها در یک FieldGroup."
          props={fieldSeparatorProps}
        />
      </ApiReferenceSection>

      {/* RTL Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">پشتیبانی RTL</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            کامپوننت فیلد به طور کامل از جهت‌گیری راست‌چین پشتیبانی می‌کند.
            برچسب‌ها، توضیحات و پیام‌های خطا به صورت خودکار بر اساس جهت سند
            تنظیم می‌شوند.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              در حالت <code dir="ltr">horizontal</code> برچسب و کنترل در کنار هم
              قرار می‌گیرند
            </li>
            <li>
              <code dir="ltr">FieldSet</code> و{" "}
              <code dir="ltr">FieldLegend</code> گروه‌بندی معنایی برای
              دسترسی‌پذیری فراهم می‌کنند
            </li>
            <li>
              <code dir="ltr">FieldError</code> از{" "}
              <code dir="ltr">role=&quot;alert&quot;</code> برای فن‌آوری‌های
              کمکی استفاده می‌کند
            </li>
          </ul>
        </div>
      </section>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-2 text-muted-foreground text-sm">
          <p>
            <code dir="ltr">FieldSet</code> و <code dir="ltr">FieldLegend</code>{" "}
            گروه‌بندی معنایی برای کاربران صفحه‌کلید و فن‌آوری‌های کمکی فراهم
            می‌کنند.
          </p>
          <p>
            <code dir="ltr">Field</code> با{" "}
            <code dir="ltr">role=&quot;group&quot;</code> خروجی می‌دهد تا
            کنترل‌های تودرتو برچسب‌گذاری را از <code dir="ltr">FieldLabel</code>{" "}
            به ارث ببرند.
          </p>
          <p>
            از <code dir="ltr">FieldSeparator</code> با احتیاط استفاده کنید تا
            صفحه‌خوان‌ها با مرزهای بخش روشن مواجه شوند.
          </p>
        </div>
      </section>
    </div>
  );
}
