"use client";

import { InstallCodeBlock, InlineCodeBlock } from "@/components/docs/code-block";
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
import DestructiveExample, { code as destructiveCode } from "./_examples/destructive";
import ActionExample, { code as actionCode } from "./_examples/action";
import CustomColorsExample, {
  code as customColorsCode,
} from "./_examples/custom-colors";
import UsageExample, { code as usageCode } from "./_examples/usage";

const alertProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "destructive"',
    defaultValue: '"default"',
    description: "نوع هشدار: پیش‌فرض یا مخرب (برای خطاها).",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const sharedClassNameProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function AlertPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">هشدار (Alert)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش یک callout برای جلب توجه کاربر. با پشتیبانی از انواع پیش‌فرض و
          مخرب، اقدام اختیاری و RTL.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add alert"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic"
          description="هشدار ساده با آیکون، عنوان و توضیحات."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="مخرب"
          titleEn="Destructive"
          description='برای پیام‌های خطا از variant="destructive" استفاده کنید.'
          code={destructiveCode}
        >
          <DestructiveExample />
        </ComponentExample>

        <ComponentExample
          title="با اقدام"
          titleEn="Action"
          description="با AlertAction می‌توان دکمه یا اقدام را در گوشه هشدار قرار داد."
          code={actionCode}
        >
          <ActionExample />
        </ComponentExample>

        <ComponentExample
          title="رنگ‌های سفارشی"
          titleEn="Custom Colors"
          description="با افزودن کلاس‌هایی مثل bg-amber-50 می‌توان رنگ هشدار را سفارشی کرد."
          code={customColorsCode}
        >
          <CustomColorsExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Alert"
          description={'کانتینر اصلی هشدار با نقش role="alert" برای دسترسی‌پذیری.'}
          props={alertProps}
        />
        <PropsTable
          title="AlertTitle"
          description="عنوان هشدار."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="AlertDescription"
          description="توضیحات یا محتوای متنی هشدار."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="AlertAction"
          description="المان اقدام (مثل دکمه) که در گوشه بالای هشدار قرار می‌گیرد."
          props={sharedClassNameProps}
        />
      </ApiReferenceSection>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">نقش alert</h3>
            <p>
              کامپوننت اصلی از <code className="text-sm bg-muted px-2 py-1 rounded">role="alert"</code> استفاده
              می‌کند تا خوانندگان صفحه از وجود پیام مهم مطلع شوند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">پشتیبانی RTL</h3>
            <p>
              از کلاس‌های منطقی مانند{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">ms-2</code> و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">end-4</code> برای
              فاصله آیکون و موقعیت AlertAction استفاده شده تا در جهت راست‌به‌چپ
              درست نمایش داده شود.
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
            <h3 className="font-semibold mb-3">چه زمانی از Alert استفاده کنیم؟</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>پیام‌های موفقیت یا تأیید (مثلاً پس از ذخیره فرم).</li>
              <li>هشدارهای خطا یا پرداخت ناموفق.</li>
              <li>اطلاع‌رسانی درباره ویژگی جدید یا انقضای اشتراک.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">variant مخرب</h3>
            <p className="text-muted-foreground">
              برای خطاها یا پیام‌های منفی از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">variant="destructive"</code> استفاده
              کنید تا از توکن‌های تم destructive برای رنگ و پس‌زمینه بهره ببرید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">عنوان و توضیح</h3>
            <p className="text-muted-foreground">
              عنوان را کوتاه و واضح نگه دارید و جزئیات را در AlertDescription
              قرار دهید.
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
          title="رنگ‌های سفارشی"
          titleEn="Custom Colors"
          description="هشدار با رنگ کهربایی برای اخطار انقضای اشتراک."
          code={customColorsCode}
        >
          <CustomColorsExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
