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
import SizesExample, { code as sizesCode } from "./_examples/sizes";
import ColorsExample, { code as colorsCode } from "./_examples/colors";
import WithButtonsExample, { code as withButtonsCode } from "./_examples/with-buttons";
import WithTextExample, { code as withTextCode } from "./_examples/with-text";
import CenteredExample, { code as centeredCode } from "./_examples/centered";
import LoadingButtonExample, { code as loadingButtonCode } from "./_examples/loading-button";
import FullPageExample, { code as fullPageCode } from "./_examples/full-page";
import InlineExample, { code as inlineCode } from "./_examples/inline";
import CardOverlayExample, { code as cardOverlayCode } from "./_examples/card-overlay";
import FormSubmissionExample, { code as formSubmissionCode } from "./_examples/form-submission";

const spinnerProps: PropDefinition[] = [
  {
    name: "size",
    type: '"sm" | "default" | "lg" | "xl"',
    defaultValue: '"default"',
    description: "اندازه اسپینر",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی (برای رنگ)",
  },
  {
    name: "srText",
    type: "string",
    defaultValue: '"Loading..."',
    description: "متن برای اسکرین ریدرها",
  },
];

export default function SpinnerPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">اسپینر (Spinner)</h1>
        <p className="text-lg text-muted-foreground">
          نشان‌دهنده بارگذاری برای عملیات‌های ناهمزمان.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add spinner"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="Spinner برای نمایش حالت بارگذاری استفاده می‌شود."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="اندازه‌ها"
          titleEn="Sizes"
          description="چهار اندازه مختلف برای موارد مختلف."
          code={sizesCode}
        >
          <SizesExample />
        </ComponentExample>

        <ComponentExample
          title="رنگ‌ها"
          titleEn="Colors"
          description="می‌توانید رنگ اسپینر را با className تغییر دهید."
          code={colorsCode}
        >
          <ColorsExample />
        </ComponentExample>

        <ComponentExample
          title="با دکمه"
          titleEn="With Button"
          description="نمایش اسپینر در دکمه‌های در حال بارگذاری."
          code={withButtonsCode}
        >
          <WithButtonsExample />
        </ComponentExample>

        <ComponentExample
          title="با متن"
          titleEn="With Text"
          description="ترکیب اسپینر با متن توضیحی."
          code={withTextCode}
        >
          <WithTextExample />
        </ComponentExample>

        <ComponentExample
          title="وسط‌چین"
          titleEn="Centered"
          description="نمایش اسپینر در وسط صفحه یا کانتینر."
          code={centeredCode}
        >
          <CenteredExample />
        </ComponentExample>
      </section>

      {/* Practical Examples */}
      <ComponentExampleGroup
        title="مثال‌های کاربردی"
        titleEn="Practical Examples"
      >
        <SubExample
          title="دکمه بارگذاری"
          titleEn="Loading Button"
          description="استفاده از اسپینر در دکمه‌ها."
          code={loadingButtonCode}
        >
          <LoadingButtonExample />
        </SubExample>

        <SubExample
          title="بارگذاری صفحه کامل"
          titleEn="Full Page Loading"
          description="نمایش وضعیت بارگذاری برای کل صفحه."
          code={fullPageCode}
        >
          <FullPageExample />
        </SubExample>

        <SubExample
          title="بارگذاری درون‌خطی"
          titleEn="Inline Loading"
          description="نمایش وضعیت بارگذاری در کنار متن."
          code={inlineCode}
        >
          <InlineExample />
        </SubExample>

        <SubExample
          title="اورلی بارگذاری کارت"
          titleEn="Card Loading Overlay"
          description="نمایش اسپینر روی کارت هنگام به‌روزرسانی."
          code={cardOverlayCode}
        >
          <CardOverlayExample />
        </SubExample>

        <SubExample
          title="ارسال فرم"
          titleEn="Form Submission"
          description="غیرفعال کردن فرم هنگام ارسال."
          code={formSubmissionCode}
        >
          <FormSubmissionExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Spinner"
          description="پراپ‌های کامپوننت Spinner."
          props={spinnerProps}
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
              role و aria-label
            </h3>
            <p>
              اسپینر به صورت خودکار{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                role="status"
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              دارد
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              متن اسکرین ریدر
            </h3>
            <p>
              یک{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                sr-only
              </code>{" "}
              span برای اسکرین ریدرها اضافه شده است
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              سفارشی‌سازی متن
            </h3>
            <p>
              می‌توانید متن اسکرین ریدر را با prop{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">srText</code>{" "}
              تغییر دهید
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
            <h3 className="font-semibold mb-3">کی از Spinner استفاده کنیم؟</h3>
            <p className="text-muted-foreground">
              از Spinner زمانی استفاده کنید که عملیاتی در حال انجام است و کاربر
              باید منتظر بماند (مثل ارسال فرم، بارگذاری داده، یا پردازش)
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">متن توضیحی</h3>
            <p className="text-muted-foreground">
              همیشه یک متن توضیحی همراه اسپینر قرار دهید تا کاربر بداند چه
              اتفاقی در حال رخ دادن است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">اندازه مناسب</h3>
            <p className="text-muted-foreground">
              از اندازه مناسب برای محیط استفاده کنید: sm برای دکمه‌ها، default
              برای کارت‌ها، lg/xl برای صفحات کامل
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">غیرفعال کردن تعامل</h3>
            <p className="text-muted-foreground">
              هنگام نمایش اسپینر، دکمه‌ها و فرم‌ها را غیرفعال کنید تا از ارسال
              مجدد جلوگیری شود
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">زمان‌بندی</h3>
            <p className="text-muted-foreground">
              برای عملیات‌های سریع (کمتر از 500ms) ممکن است نمایش اسپینر نیاز
              نباشد. برای عملیات‌های طولانی، پیشرفت را نشان دهید
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
