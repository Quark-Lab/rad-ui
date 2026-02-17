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
import SizesExample, { code as sizesCode } from "./_examples/sizes";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import CharacterCountExample, { code as characterCountCode } from "./_examples/character-count";
import ReadOnlyExample, { code as readOnlyCode } from "./_examples/read-only";
import WithButtonExample, { code as withButtonCode } from "./_examples/with-button";
import ValidationExample, { code as validationCode } from "./_examples/validation";
import ResizeExample, { code as resizeCode } from "./_examples/resize";
import CommentFormExample, { code as commentFormCode } from "./_examples/comment-form";

const textareaProps: PropDefinition[] = [
  {
    name: "placeholder",
    type: "string",
    defaultValue: "undefined",
    description: "متن راهنما",
  },
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
    name: "onChange",
    type: "(e) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر مقدار",
  },
  {
    name: "rows",
    type: "number",
    defaultValue: "undefined",
    description: "تعداد خطوط نمایشی",
  },
  {
    name: "maxLength",
    type: "number",
    defaultValue: "undefined",
    description: "حداکثر تعداد کاراکترها",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن فیلد",
  },
  {
    name: "readOnly",
    type: "boolean",
    defaultValue: "false",
    description: "فقط خواندنی",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
    description: "اجباری بودن فیلد",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "...props",
    type: "TextareaHTMLAttributes",
    defaultValue: "-",
    description: "تمام ویژگی‌های استاندارد HTML textarea",
  },
];

export default function TextareaPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">ناحیه متن (Textarea)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت ناحیه متن برای ورودی متن چندخطی در فرم‌ها.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add textarea" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده از ناحیه متن."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="با برچسب"
          titleEn="With Label"
          description="استفاده از ناحیه متن همراه با برچسب."
          code={withLabelCode}
        >
          <WithLabelExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه‌های مختلف"
          titleEn="Different Sizes"
          description="تنظیم تعداد خطوط پیش‌فرض ناحیه متن."
          code={sizesCode}
        >
          <SizesExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled State"
          description="ناحیه متن غیرفعال که کاربر نمی‌تواند آن را ویرایش کند."
          code={disabledCode}
        >
          <DisabledExample />
        </ComponentExample>

        <ComponentExample
          title="با شمارنده کاراکتر"
          titleEn="With Character Count"
          description="نمایش تعداد کاراکترهای وارد شده."
          code={characterCountCode}
        >
          <CharacterCountExample />
        </ComponentExample>

        <ComponentExample
          title="فقط خواندنی"
          titleEn="Read-only"
          description="ناحیه متن که فقط برای نمایش متن است و قابل ویرایش نیست."
          code={readOnlyCode}
        >
          <ReadOnlyExample />
        </ComponentExample>

        <ComponentExample
          title="با دکمه"
          titleEn="With Button"
          description="ترکیب ناحیه متن با دکمه ارسال."
          code={withButtonCode}
        >
          <WithButtonExample />
        </ComponentExample>

        <ComponentExample
          title="حالت‌های اعتبارسنجی"
          titleEn="Validation States"
          description="نمایش وضعیت‌های معتبر و نامعتبر."
          code={validationCode}
        >
          <ValidationExample />
        </ComponentExample>

        <ComponentExample
          title="کنترل تغییر اندازه"
          titleEn="Resize Control"
          description="کنترل قابلیت تغییر اندازه ناحیه متن توسط کاربر."
          code={resizeCode}
        >
          <ResizeExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="فرم نظرات با اعتبارسنجی"
          titleEn="Comment Form with Validation"
          description="فرم کامل ثبت نظر با اعتبارسنجی طول متن."
          code={commentFormCode}
        >
          <CommentFormExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Textarea"
          description="پراپ‌های کامپوننت Textarea."
          props={textareaProps}
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
              برچسب‌ها (Labels)
            </h3>
            <p>
              همیشه از کامپوننت{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">Label</code>{" "}
              با{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                htmlFor
              </code>{" "}
              برای شناسایی فیلد استفاده کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پیام‌های خطا (Error Messages)
            </h3>
            <p>
              از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-invalid
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-describedby
              </code>{" "}
              برای پیام‌های اعتبارسنجی استفاده کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              متن راهنما (Placeholder)
            </h3>
            <p>
              از placeholder فقط برای نمونه استفاده کنید، نه به عنوان جایگزین
              برچسب
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              فیلدهای اجباری (Required Fields)
            </h3>
            <p>
              از ویژگی{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                required
              </code>{" "}
              و نشانگر بصری (مثل ستاره) استفاده کنید
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
            <h3 className="font-semibold mb-3">اندازه مناسب (Appropriate Size)</h3>
            <p className="text-muted-foreground">
              تعداد سطرها را بر اساس مقدار متن مورد انتظار تنظیم کنید. برای
              نظرات کوتاه 2-4 سطر و برای متون طولانی‌تر 6-8 سطر مناسب است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">محدودیت کاراکتر (Character Limit)</h3>
            <p className="text-muted-foreground">
              اگر محدودیت دارید، حتما شمارنده کاراکتر نمایش دهید تا کاربر بداند
              چقدر فضا دارد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              پیام‌های راهنما (Helper Text)
            </h3>
            <p className="text-muted-foreground">
              از متن راهنما برای توضیح فرمت مورد انتظار یا الزامات خاص استفاده
              کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تغییر اندازه (Resizing)
            </h3>
            <p className="text-muted-foreground">
              به طور پیش‌فرض تنها تغییر اندازه عمودی فعال است. اگر نیاز به اندازه
              ثابت دارید از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                resize-none
              </code>{" "}
              استفاده کنید
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
