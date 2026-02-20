"use client";

import { InstallCodeBlock } from "@/components/docs/code-block";
import { InlineCodeBlock } from "@/components/docs/code-block";
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
import SideExample, { code as sideCode } from "./_examples/side";
import WithKbdExample, { code as withKbdCode } from "./_examples/with-kbd";
import DisabledButtonExample, {
  code as disabledButtonCode,
} from "./_examples/disabled-button";
import UsageExample, { code as usageCode } from "./_examples/usage";

const tooltipProviderProps: PropDefinition[] = [
  {
    name: "delayDuration",
    type: "number",
    defaultValue: "700",
    description: "تاخیر نمایش به میلی‌ثانیه",
  },
  {
    name: "skipDelayDuration",
    type: "number",
    defaultValue: "300",
    description: "تاخیر بین نمایش چند تولتیپ متوالی",
  },
  {
    name: "disableHoverableContent",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن تعامل با محتوای تولتیپ",
  },
];

const tooltipProps: PropDefinition[] = [
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
];

const tooltipContentProps: PropDefinition[] = [
  {
    name: "side",
    type: '"top" | "bottom" | "left" | "right"',
    defaultValue: '"top"',
    description: "جهت نمایش تولتیپ نسبت به تریگر",
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
    description: "تراز تولتیپ نسبت به تریگر",
  },
  {
    name: "alignOffset",
    type: "number",
    defaultValue: "0",
    description: "آفست تراز به پیکسل",
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

export default function TooltipPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">تولتیپ (Tooltip)</h1>
        <p className="text-lg text-muted-foreground">
          یک پاپ‌آپ که اطلاعات مرتبط با یک المان را هنگام دریافت فوکوس کیبورد یا
          هاور ماوس نمایش می‌دهد.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add tooltip" />
        <div className="mt-4 p-4 rounded-lg bg-card border border-border">
          <p className="text-sm text-muted-foreground">
            <strong className="text-foreground">نکته مهم:</strong> باید{" "}
            <code className="text-sm bg-muted px-2 py-1 rounded">
              TooltipProvider
            </code>{" "}
            را در ریشه برنامه خود اضافه کنید. این کار قبلاً در{" "}
            <code className="text-sm bg-muted px-2 py-1 rounded">
              layout.tsx
            </code>{" "}
            انجام شده است.
          </p>
        </div>
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic"
          description="یک تولتیپ ساده که با هاور یا فوکوس فعال می‌شود."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="جهت"
          titleEn="Side"
          description="استفاده از پراپ side برای تغییر موقعیت تولتیپ."
          code={sideCode}
        >
          <SideExample />
        </ComponentExample>

        <ComponentExample
          title="با کلید میانبر"
          titleEn="With Keyboard Shortcut"
          description="نمایش کلیدهای میانبر در تولتیپ."
          code={withKbdCode}
        >
          <WithKbdExample />
        </ComponentExample>

        <ComponentExample
          title="دکمه غیرفعال"
          titleEn="Disabled Button"
          description="نمایش تولتیپ روی دکمه غیرفعال با استفاده از span wrapper."
          code={disabledButtonCode}
        >
          <DisabledButtonExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="TooltipProvider"
          description="ارائه‌دهنده زمینه برای تولتیپ‌ها. باید در ریشه برنامه قرار گیرد."
          props={tooltipProviderProps}
        />
        <PropsTable
          title="Tooltip"
          description="کامپوننت اصلی که به عنوان کانتینر برای تولتیپ عمل می‌کند."
          props={tooltipProps}
        />
        <PropsTable
          title="TooltipTrigger"
          description="عنصری که تولتیپ را فعال می‌کند. معمولاً یک دکمه یا لینک است."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="TooltipContent"
          description="محتوای تولتیپ که نمایش داده می‌شود."
          props={tooltipContentProps}
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
              پشتیبانی از کیبورد (Keyboard Support)
            </h3>
            <p>
              تولتیپ با فوکوس کیبورد نیز فعال می‌شود، برخلاف HoverCard که فقط
              با هاور کار می‌کند. این باعث می‌شود برای کاربران صفحه‌لمسی و
              کیبورد قابل دسترس باشد.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی از RTL
            </h3>
            <p>
              تمام کامپوننت‌ها از ویژگی‌های منطقی CSS استفاده می‌کنند و در هر
              دو جهت RTL و LTR به درستی کار می‌کنند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              مدیریت فوکوس (Focus Management)
            </h3>
            <p>
              تولتیپ به صورت خودکار با فوکوس و هاور مدیریت می‌شود و از استانداردهای
              WAI-ARIA پیروی می‌کند.
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
              استفاده از TooltipProvider
            </h3>
            <p className="text-muted-foreground">
              TooltipProvider باید در ریشه برنامه قرار گیرد تا تمام تولتیپ‌ها
              بتوانند از تنظیمات مشترک استفاده کنند. این کار در{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                layout.tsx
              </code>{" "}
              انجام شده است.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">محتوا</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">مختصر:</strong> تولتیپ باید
                متن کوتاه و مفید داشته باشد
              </li>
              <li>
                <strong className="text-foreground">مکمل:</strong> اطلاعات
                تکمیلی که در رابط اصلی نیست
              </li>
              <li>
                <strong className="text-foreground">غیرضروری:</strong> از
                تولتیپ برای اطلاعات ضروری استفاده نکنید
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">دکمه‌های غیرفعال</h3>
            <p className="text-muted-foreground">
              برای نمایش تولتیپ روی دکمه‌های غیرفعال، دکمه را در یک{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">span</code>{" "}
              با <code className="text-sm bg-muted px-2 py-1 rounded">asChild</code>{" "}
              قرار دهید تا رویدادهای ماوس به درستی کار کنند.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <ComponentExample
        title="نحوه استفاده"
        titleEn="Usage"
        description="نمونه کامل از نحوه ایمپورت و استفاده از کامپوننت تولتیپ."
        code={usageCode}
      >
        <UsageExample />
      </ComponentExample>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="جهت"
          titleEn="Side"
          description="استفاده از پراپ side برای کنترل جهت نمایش تولتیپ."
          code={sideCode}
        >
          <SideExample />
        </SubExample>
        <SubExample
          title="با کلید میانبر"
          titleEn="With Keyboard Shortcut"
          description="نمایش کلیدهای میانبر در تولتیپ."
          code={withKbdCode}
        >
          <WithKbdExample />
        </SubExample>
        <SubExample
          title="دکمه غیرفعال"
          titleEn="Disabled Button"
          description="نمایش تولتیپ روی دکمه‌های غیرفعال."
          code={disabledButtonCode}
        >
          <DisabledButtonExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
