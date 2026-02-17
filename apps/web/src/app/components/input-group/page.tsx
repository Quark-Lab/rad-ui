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
import AlignmentExample, { code as alignmentCode } from "./_examples/alignment";
import IconExample, { code as iconCode } from "./_examples/icon";
import TextExample, { code as textCode } from "./_examples/text";
import ButtonExample, { code as buttonCode } from "./_examples/button";
import KbdExample, { code as kbdCode } from "./_examples/kbd";
import LoadingExample, { code as loadingCode } from "./_examples/loading";
import TextareaExample, { code as textareaCode } from "./_examples/textarea";
import PracticalExample, { code as practicalCode } from "./_examples/practical";

const inputGroupProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const inputGroupAddonProps: PropDefinition[] = [
  {
    name: "align",
    type: '"inline-start" | "inline-end" | "block-start" | "block-end"',
    defaultValue: '"inline-start"',
    description: "موقعیت افزونه نسبت به ورودی",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const inputGroupButtonProps: PropDefinition[] = [
  {
    name: "size",
    type: '"xs" | "sm" | "icon-xs" | "icon-sm"',
    defaultValue: '"xs"',
    description: "اندازه دکمه",
  },
  {
    name: "variant",
    type: '"default" | "destructive" | "outline" | "ghost" | "link"',
    defaultValue: '"ghost"',
    description: "نوع ظاهری دکمه",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const inputGroupInputProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "...props",
    type: "InputHTMLAttributes",
    defaultValue: "-",
    description: "تمام ویژگی‌های استاندارد HTML input",
  },
];

const inputGroupTextareaProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "...props",
    type: "TextareaHTMLAttributes",
    defaultValue: "-",
    description: "تمام ویژگی‌های استاندارد HTML textarea",
  },
];

export default function InputGroupPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">گروه ورودی (Input Group)</h1>
        <p className="text-lg text-muted-foreground">
          افزودن آیکون‌ها، دکمه‌ها و محتوای کمکی به ورودی‌ها با پشتیبانی کامل از
          RTL.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add input-group" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده از گروه ورودی با آیکون جستجو."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="موقعیت افزونه"
          titleEn="Addon Alignment"
          description="تغییر موقعیت افزونه‌ها در شروع، پایان، بالا یا پایین ورودی."
          code={alignmentCode}
        >
          <AlignmentExample />
        </ComponentExample>

        <ComponentExample
          title="آیکون"
          titleEn="Icon"
          description="افزودن آیکون‌ها به عنوان افزونه."
          code={iconCode}
        >
          <IconExample />
        </ComponentExample>

        <ComponentExample
          title="متن"
          titleEn="Text"
          description="افزودن متن به عنوان پیشوند یا پسوند."
          code={textCode}
        >
          <TextExample />
        </ComponentExample>

        <ComponentExample
          title="دکمه"
          titleEn="Button"
          description="افزودن دکمه‌های تعاملی به ورودی."
          code={buttonCode}
        >
          <ButtonExample />
        </ComponentExample>

        <ComponentExample
          title="میانبر صفحه‌کلید"
          titleEn="Kbd"
          description="نمایش میانبر صفحه‌کلید در ورودی."
          code={kbdCode}
        >
          <KbdExample />
        </ComponentExample>

        <ComponentExample
          title="بارگذاری"
          titleEn="Loading"
          description="نمایش وضعیت بارگذاری با اسپینر."
          code={loadingCode}
        >
          <LoadingExample />
        </ComponentExample>

        <ComponentExample
          title="ناحیه متن"
          titleEn="Textarea"
          description="استفاده از گروه ورودی با ناحیه متن."
          code={textareaCode}
        >
          <TextareaExample />
        </ComponentExample>
      </section>

      {/* Practical Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          نمونه کاربردی (Practical Example)
        </h2>
        <ComponentExample
          title="فرم کامل"
          titleEn="Form"
          description="ترکیب چندین گروه ورودی در یک فرم."
          code={practicalCode}
        >
          <PracticalExample />
        </ComponentExample>
      </section>

      {/* RTL Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">پشتیبانی RTL</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            کامپوننت گروه ورودی به طور کامل از جهت‌گیری راست‌چین پشتیبانی
            می‌کند. از ویژگی‌های منطقی CSS برای تعیین موقعیت افزونه‌ها استفاده
            می‌شود.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <code dir="ltr">inline-start</code> و{" "}
              <code dir="ltr">inline-end</code> بر اساس جهت سند تنظیم می‌شوند
            </li>
            <li>
              فاصله‌گذاری از <code dir="ltr">ps-</code> و{" "}
              <code dir="ltr">pe-</code> (ویژگی‌های منطقی) استفاده می‌کند
            </li>
            <li>
              گوشه‌های گرد از <code dir="ltr">rounded-s-md</code> و{" "}
              <code dir="ltr">rounded-e-md</code> استفاده می‌کنند
            </li>
          </ul>
        </div>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="InputGroup"
          description="کامپوننت اصلی که ورودی‌ها و افزونه‌ها را در بر می‌گیرد."
          props={inputGroupProps}
        />
        <PropsTable
          title="InputGroupAddon"
          description="نمایش آیکون‌ها، متن، دکمه‌ها یا محتوای دیگر در کنار ورودی."
          props={inputGroupAddonProps}
        />
        <PropsTable
          title="InputGroupButton"
          description="نمایش دکمه‌ها در گروه ورودی."
          props={inputGroupButtonProps}
        />
        <PropsTable
          title="InputGroupInput"
          description="جایگزین Input برای استفاده در گروه ورودی."
          props={inputGroupInputProps}
        />
        <PropsTable
          title="InputGroupTextarea"
          description="جایگزین Textarea برای استفاده در گروه ورودی."
          props={inputGroupTextareaProps}
        />
      </ApiReferenceSection>
    </div>
  );
}
