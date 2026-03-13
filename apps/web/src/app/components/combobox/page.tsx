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
import BasicComboboxExample, { code as basicCode } from "./_examples/basic";
import ControlledComboboxExample, {
  code as controlledCode,
} from "./_examples/controlled";
import CustomItemsComboboxExample, { code as customItemsCode } from "./_examples/custom-items";
import { code as usageCode } from "./_examples/usage";

const comboboxProps: PropDefinition[] = [
  {
    name: "items",
    type: "T[]",
    defaultValue: "[]",
    description: "آرایه آیتم‌هایی که در لیست پیشنهادها نمایش داده می‌شوند.",
  },
  {
    name: "value",
    type: "T | T[] | null",
    defaultValue: "undefined",
    description: "مقدار انتخاب شده در حالت کنترل‌شده.",
  },
  {
    name: "defaultValue",
    type: "T | T[] | null",
    defaultValue: "undefined",
    description: "مقدار پیش‌فرض در حالت غیرکنترل‌شده.",
  },
  {
    name: "onValueChange",
    type: "(value: T | T[] | null) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر مقدار انتخاب شده.",
  },
  {
    name: "multiple",
    type: "boolean",
    defaultValue: "false",
    description: "فعال کردن انتخاب چندگانه.",
  },
  {
    name: "itemToStringValue",
    type: "(item: T) => string",
    defaultValue: "undefined",
    description:
      "تابع تبدیل آیتم‌های سفارشی به رشته برای نمایش و فیلتر کردن (در صورت استفاده از آبجکت).",
  },
];

const comboboxTriggerProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای دکمه/اینپوت کمبوباکس.",
  },
  {
    name: "aria-invalid",
    type: "boolean",
    defaultValue: "false",
    description: "نشان دادن حالت نامعتبر برای اعتبارسنجی فرم.",
  },
];

const comboboxOptionProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای آیتم‌های لیست.",
  },
];

export default function ComboboxPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">کمبوباکس (Combobox)</h1>
        <p className="text-lg text-muted-foreground">
          ورودی خودتکمیل با لیست پیشنهادها که امکان جستجو، فیلتر و انتخاب سریع
          مقادیر را فراهم می‌کند. مناسب برای فیلدهایی با تعداد گزینه زیاد مثل
          کشورها، زبان‌ها یا دسته‌بندی‌ها.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add combobox"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic"
          description="کمبوباکس ساده با لیست فریم‌ورک‌ها."
          code={basicCode}
        >
          <BasicComboboxExample />
        </ComponentExample>

        <ComponentExample
          title="حالت کنترل‌شده"
          titleEn="Controlled"
          description="مدیریت مقدار انتخاب شده با استفاده از state خارجی."
          code={controlledCode}
        >
          <ControlledComboboxExample />
        </ComponentExample>

        <ComponentExample
          title="آیتم‌های سفارشی"
          titleEn="Custom Items"
          description="پر کردن کمبوباکس با آبجکت‌های سفارشی و استفاده از itemToStringValue."
          code={customItemsCode}
        >
          <CustomItemsComboboxExample />
        </ComponentExample>

      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Combobox"
          description="کامپوننت ریشه کمبوباکس که منطق انتخاب و فیلتر را مدیریت می‌کند."
          props={comboboxProps}
        />
        <PropsTable
          title="ComboboxTrigger"
          description="تریگر/اینپوت کمبوباکس که کاربر در آن تایپ می‌کند."
          props={comboboxTriggerProps}
        />
        <PropsTable
          title="ComboboxOption"
          description="آیتم‌های لیست پیشنهادها."
          props={comboboxOptionProps}
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
                  Arrow Down / Arrow Up
                </code>{" "}
                — حرکت بین آیتم‌های لیست.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                — انتخاب آیتم هایلایت‌شده.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Escape
                </code>{" "}
                — بستن لیست پیشنهادها بدون تغییر مقدار.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Tab
                </code>{" "}
                — بستن لیست و حرکت به فیلد بعدی.
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌گذاری (Labelling)
            </h3>
            <p>
              برای دسترسی‌پذیری بهتر، کمبوباکس را همراه با Field و FieldLabel
              استفاده کنید یا از ویژگی‌های{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-labelledby
              </code>{" "}
              استفاده کنید.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی RTL
            </h3>
            <p>
              کمبوباکس به صورت RTL-first طراحی شده است؛ متن ورودی و آیتم‌ها
              راست‌چین هستند و آیکون فلش در سمت چپ (برای RTL) قرار می‌گیرد.
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
              استفاده به جای Select در لیست‌های بزرگ
            </h3>
            <p className="text-muted-foreground">
              زمانی که تعداد گزینه‌ها زیاد است (ده‌ها یا صدها مورد)، به جای
              Select از Combobox استفاده کنید تا کاربر بتواند با تایپ کردن سریع‌تر
              به گزینه مورد نظر برسد.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">متن راهنما (Placeholder)</h3>
            <p className="text-muted-foreground">
              از متن راهنمای واضح استفاده کنید؛ مثلاً &quot;یک کشور انتخاب
              کنید&quot; یا &quot;زبان برنامه‌نویسی را جستجو کنید&quot; تا هدف
              فیلد مشخص باشد.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              کار با آبجکت‌ها (Objects as Items)
            </h3>
            <p className="text-muted-foreground">
              برای آیتم‌های پیچیده، همیشه{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                itemToStringValue
              </code>{" "}
              را تنظیم کنید تا نحوه نمایش و فیلتر شدن آن‌ها مشخص و پایدار باشد.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          نحوه استفاده (Usage)
        </h2>
        <InlineCodeBlock code={usageCode} />
      </section>
    </div>
  );
}

