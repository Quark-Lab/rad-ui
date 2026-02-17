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
import PatternExample, { code as patternCode } from "./_examples/pattern";
import SeparatorExample, { code as separatorCode } from "./_examples/separator";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import ControlledExample, { code as controlledCode } from "./_examples/controlled";
import InvalidExample, { code as invalidCode } from "./_examples/invalid";
import FourDigitsExample, { code as fourDigitsCode } from "./_examples/four-digits";
import AlphanumericExample, { code as alphanumericCode } from "./_examples/alphanumeric";
import FormExample, { code as formCode } from "./_examples/form";

const inputOTPProps: PropDefinition[] = [
  {
    name: "maxLength",
    type: "number",
    defaultValue: "-",
    description: "حداکثر تعداد کاراکترهای ورودی (اجباری)",
  },
  {
    name: "pattern",
    type: "string | RegExp",
    defaultValue: "-",
    description: "الگوی مجاز برای ورودی",
  },
  {
    name: "value",
    type: "string",
    defaultValue: "-",
    description: "مقدار کنترل‌شده ورودی",
  },
  {
    name: "onChange",
    type: "(value: string) => void",
    defaultValue: "-",
    description: "تابع فراخوانی هنگام تغییر مقدار",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن ورودی",
  },
  {
    name: "containerClassName",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS برای محفظه بیرونی",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const inputOTPSlotProps: PropDefinition[] = [
  {
    name: "index",
    type: "number",
    defaultValue: "-",
    description: "شماره اندیس اسلات در ورودی OTP (اجباری)",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function InputOTPPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          ورودی رمز یکبار مصرف (Input OTP)
        </h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت ورودی رمز یکبار مصرف با قابلیت کپی و پیست و پشتیبانی کامل از
          RTL و دسترسی‌پذیری.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add input-otp" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده از ورودی OTP با ۶ رقم."
          code={basicCode}
          previewClassName="flex items-center justify-center"
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="فقط اعداد"
          titleEn="Digits Only"
          description="محدود کردن ورودی به اعداد با استفاده از الگو."
          code={patternCode}
          previewClassName="flex items-center justify-center"
        >
          <PatternExample />
        </ComponentExample>

        <ComponentExample
          title="جداکننده"
          titleEn="Separator"
          description="افزودن جداکننده بین گروه‌های ورودی."
          code={separatorCode}
          previewClassName="flex items-center justify-center"
        >
          <SeparatorExample />
        </ComponentExample>

        <ComponentExample
          title="غیرفعال"
          titleEn="Disabled"
          description="غیرفعال کردن ورودی."
          code={disabledCode}
          previewClassName="flex items-center justify-center"
        >
          <DisabledExample />
        </ComponentExample>

        <ComponentExample
          title="کنترل‌شده"
          titleEn="Controlled"
          description="کنترل مقدار ورودی و نمایش آن."
          code={controlledCode}
        >
          <ControlledExample />
        </ComponentExample>

        <ComponentExample
          title="نامعتبر"
          titleEn="Invalid"
          description="نمایش حالت خطا برای ورودی."
          code={invalidCode}
        >
          <InvalidExample />
        </ComponentExample>

        <ComponentExample
          title="چهار رقمی"
          titleEn="Four Digits"
          description="الگوی رایج برای کد PIN چهار رقمی."
          code={fourDigitsCode}
          previewClassName="flex items-center justify-center"
        >
          <FourDigitsExample />
        </ComponentExample>

        <ComponentExample
          title="حروف و اعداد"
          titleEn="Alphanumeric"
          description="پذیرش حروف و اعداد در ورودی."
          code={alphanumericCode}
          previewClassName="flex items-center justify-center"
        >
          <AlphanumericExample />
        </ComponentExample>
      </section>

      {/* Practical Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          نمونه کاربردی (Practical Example)
        </h2>
        <ComponentExample
          title="فرم تأیید"
          titleEn="Verification Form"
          description="نمونه کامل فرم تأیید رمز یکبار مصرف."
          code={formCode}
        >
          <FormExample />
        </ComponentExample>
      </section>

      {/* RTL Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">پشتیبانی RTL</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            کامپوننت Input OTP به طور کامل از جهت‌گیری راست‌چین پشتیبانی می‌کند.
            از آنجا که ورود ارقام همیشه از چپ به راست است، ورودی خود دارای جهت{" "}
            <code dir="ltr">dir=&quot;ltr&quot;</code> است اما برچسب‌ها و
            توضیحات اطراف آن از جهت سند پیروی می‌کنند.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              حاشیه‌های اسلات‌ها از ویژگی‌های منطقی CSS استفاده می‌کنند (
              <code dir="ltr">border-inline-start</code>،{" "}
              <code dir="ltr">border-inline-end</code>)
            </li>
            <li>
              گوشه‌های گرد از <code dir="ltr">rounded-s-md</code> و{" "}
              <code dir="ltr">rounded-e-md</code> استفاده می‌کنند
            </li>
            <li>برچسب‌ها و متون راهنما با RTL هماهنگ هستند</li>
          </ul>
        </div>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="InputOTP"
          description="کامپوننت اصلی ورودی رمز یکبار مصرف."
          props={inputOTPProps}
        />
        <PropsTable
          title="InputOTPSlot"
          description="کامپوننت نمایش هر رقم یا کاراکتر."
          props={inputOTPSlotProps}
        />
        
        {/* Pattern Constants - Custom Table since it's not standard props */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">ثابت‌های الگو</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-4 font-semibold">
                    ثابت (Constant)
                  </th>
                  <th className="text-right p-4 font-semibold">توضیحات</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>REGEXP_ONLY_DIGITS</code>
                  </td>
                  <td className="p-4">فقط ارقام (۰ تا ۹)</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>REGEXP_ONLY_DIGITS_AND_CHARS</code>
                  </td>
                  <td className="p-4">ارقام و حروف انگلیسی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </ApiReferenceSection>
    </div>
  );
}
