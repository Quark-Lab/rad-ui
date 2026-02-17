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
import SidesExample, { code as sidesCode } from "./_examples/sides";
import CustomDelayExample, { code as customDelayCode } from "./_examples/custom-delay";
import WithAvatarExample, { code as withAvatarCode } from "./_examples/with-avatar";
import UserProfileExample, { code as userProfileCode } from "./_examples/user-profile";
import ProductPreviewExample, { code as productPreviewCode } from "./_examples/product-preview";

const hoverCardProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "undefined",
    description: "وضعیت باز/بسته بودن (کنترل‌شده)",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    defaultValue: "false",
    description: "وضعیت پیش‌فرض (غیرکنترل‌شده)",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر وضعیت",
  },
  {
    name: "openDelay",
    type: "number",
    defaultValue: "700",
    description: "تاخیر باز شدن به میلی‌ثانیه",
  },
  {
    name: "closeDelay",
    type: "number",
    defaultValue: "300",
    description: "تاخیر بسته شدن به میلی‌ثانیه",
  },
];

const hoverCardContentProps: PropDefinition[] = [
  {
    name: "side",
    type: '"top" | "bottom" | "left" | "right"',
    defaultValue: '"bottom"',
    description: "جهت نمایش کارت نسبت به تریگر",
  },
  {
    name: "sideOffset",
    type: "number",
    defaultValue: "4",
    description: "فاصله از تریگر به پیکسل",
  },
  {
    name: "align",
    type: '"start" | "center" | "end"',
    defaultValue: '"center"',
    description: "تراز کارت نسبت به تریگر",
  },
  {
    name: "alignOffset",
    type: "number",
    defaultValue: "0",
    description: "آفست تراز به پیکسل",
  },
];

export default function HoverCardPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">کارت پیش نمایش (Hover Card)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت کارت پیش نمایش برای نمایش اطلاعات تکمیلی هنگام هاور روی یک
          لینک یا المان استفاده می‌شود.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add hover-card"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از کارت پیش نمایش با یک لینک به عنوان تریگر."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="جهت‌های مختلف"
          titleEn="Sides"
          description="استفاده از پراپ side برای تعیین جهت نمایش کارت."
          code={sidesCode}
        >
          <SidesExample />
        </ComponentExample>

        <ComponentExample
          title="تاخیر سفارشی"
          titleEn="Custom Delay"
          description="تنظیم تاخیر باز و بسته شدن کارت با openDelay و closeDelay."
          code={customDelayCode}
        >
          <CustomDelayExample />
        </ComponentExample>

        <ComponentExample
          title="با آواتار"
          titleEn="With Avatar"
          description="نمایش پروفایل کاربر با آواتار در کارت پیش نمایش."
          code={withAvatarCode}
        >
          <WithAvatarExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="کارت پروفایل کاربر"
          titleEn="User Profile Card"
          description="نمایش اطلاعات کامل پروفایل کاربر با آواتار و تاریخ عضویت."
          code={userProfileCode}
        >
          <UserProfileExample />
        </SubExample>

        <SubExample
          title="پیش‌نمایش محصول"
          titleEn="Product Preview"
          description="نمایش پیش‌نمایش محصول با تصویر، عنوان و قیمت."
          code={productPreviewCode}
        >
          <ProductPreviewExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="HoverCard"
          description="پراپ‌های کامپوننت HoverCard."
          props={hoverCardProps}
        />
        <PropsTable
          title="HoverCardContent"
          description="پراپ‌های کامپوننت HoverCardContent."
          props={hoverCardContentProps}
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
              رفتار هاور (Hover Behavior)
            </h3>
            <p>
              این کامپوننت فقط با هاور ماوس فعال می‌شود و برای کاربران صفحه‌لمسی
              یا کیبورد قابل دسترس نیست. از این کامپوننت برای اطلاعات ضروری
              استفاده نکنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              تاخیر پیش‌فرض (Default Delay)
            </h3>
            <p>
              تاخیر پیش‌فرض ۷۰۰ms برای باز شدن به کاربران اجازه می‌دهد بدون
              فعال‌سازی ناخواسته از روی المان‌ها عبور کنند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              محدودیت‌ها (Limitations)
            </h3>
            <p>
              این کامپوننت جایگزین Tooltip نیست. برای اطلاعات کوتاه و ضروری که
              باید با کیبورد هم قابل دسترس باشد، از Tooltip استفاده کنید
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
              اطلاعات تکمیلی (Supplementary Info)
            </h3>
            <p className="text-muted-foreground">
              از HoverCard برای نمایش اطلاعات تکمیلی و غیرضروری استفاده کنید.
              اطلاعات نمایش داده شده نباید برای تکمیل یک تسک حیاتی باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">پیش‌نمایش محتوا (Preview)</h3>
            <p className="text-muted-foreground">
              این کامپوننت برای پیش‌نمایش محتوای پشت یک لینک مناسب است، مثل
              پروفایل کاربر، جزئیات محصول، یا خلاصه مقاله
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تعامل با ماوس (Mouse Only)</h3>
            <p className="text-muted-foreground">
              به یاد داشته باشید که این کامپوننت فقط با ماوس کار می‌کند. برای
              دستگاه‌های لمسی، محتوای کارت باید از طریق کلیک روی لینک قابل دسترس
              باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تاخیر مناسب (Proper Delay)</h3>
            <p className="text-muted-foreground">
              تاخیر پیش‌فرض را خیلی کم نکنید تا کاربران هنگام عبور از روی
              المان‌ها با پاپ‌آپ‌های ناخواسته مواجه نشوند
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
