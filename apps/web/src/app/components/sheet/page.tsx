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
import SideExample, { code as sideCode } from "./_examples/side";
import WithFormExample, { code as withFormCode } from "./_examples/with-form";
import NoCloseButtonExample, { code as noCloseButtonCode } from "./_examples/no-close-button";
import ControlledExample, { code as controlledCode } from "./_examples/controlled";
import ScrollableExample, { code as scrollableCode } from "./_examples/scrollable";
import NavigationExample, { code as navigationCode } from "./_examples/navigation";
import PreventCloseExample, { code as preventCloseCode } from "./_examples/prevent-close";

const sheetProps: PropDefinition[] = [
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
    name: "modal",
    type: "boolean",
    defaultValue: "true",
    description: "حالت مودال (بلاک کردن تعامل با پس‌زمینه)",
  },
];

const sheetContentProps: PropDefinition[] = [
  {
    name: "side",
    type: '"top" | "right" | "bottom" | "left"',
    defaultValue: '"right"',
    description: "جهت باز شدن برگه",
  },
  {
    name: "showCloseButton",
    type: "boolean",
    defaultValue: "true",
    description: "نمایش دکمه بستن در گوشه بالا",
  },
  {
    name: "onEscapeKeyDown",
    type: "(event) => void",
    defaultValue: "undefined",
    description: "هندلر فشردن کلید Escape",
  },
  {
    name: "onPointerDownOutside",
    type: "(event) => void",
    defaultValue: "undefined",
    description: "هندلر کلیک خارج از برگه",
  },
];

export default function SheetPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">برگه (Sheet)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت برگه یک پنل کشویی است که از لبه‌های صفحه (بالا، راست، پایین،
          چپ) باز می‌شود و برای نمایش محتوای تکمیلی استفاده می‌شود.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add sheet"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از برگه با عنوان و توضیحات."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="جهت‌های مختلف"
          titleEn="Side Variants"
          description="از پراپ side برای تعیین جهت باز شدن برگه استفاده کنید."
          code={sideCode}
        >
          <SideExample />
        </ComponentExample>

        <ComponentExample
          title="با فرم"
          titleEn="With Form"
          description="برگه با فرم ورودی برای ویرایش اطلاعات."
          code={withFormCode}
        >
          <WithFormExample />
        </ComponentExample>

        <ComponentExample
          title="بدون دکمه بستن"
          titleEn="No Close Button"
          description="مخفی کردن دکمه X در گوشه بالای برگه با showCloseButton=false."
          code={noCloseButtonCode}
        >
          <NoCloseButtonExample />
        </ComponentExample>

        <ComponentExample
          title="کنترل شده"
          titleEn="Controlled"
          description="کنترل وضعیت باز/بسته برگه با استفاده از state."
          code={controlledCode}
        >
          <ControlledExample />
        </ComponentExample>

        <ComponentExample
          title="محتوای قابل اسکرول"
          titleEn="Scrollable Content"
          description="برگه با محتوای طولانی که قابل اسکرول است."
          code={scrollableCode}
        >
          <ScrollableExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="منوی ناوبری"
          titleEn="Navigation Menu"
          description="استفاده از برگه برای منوی ناوبری موبایل."
          code={navigationCode}
        >
          <NavigationExample />
        </SubExample>

        <SubExample
          title="جلوگیری از بسته شدن"
          titleEn="Prevent Close"
          description="جلوگیری از بسته شدن برگه با کلیک خارج یا کلید Escape."
          code={preventCloseCode}
        >
          <PreventCloseExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Sheet"
          description="پراپ‌های کامپوننت Sheet."
          props={sheetProps}
        />
        <PropsTable
          title="SheetContent"
          description="پراپ‌های کامپوننت SheetContent."
          props={sheetContentProps}
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
                  Escape
                </code>{" "}
                - بستن برگه
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت بین المان‌های قابل فوکوس داخل برگه
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Shift + Tab
                </code>{" "}
                - حرکت به عقب بین المان‌ها
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              تله فوکوس (Focus Trap)
            </h3>
            <p>
              وقتی برگه باز است، فوکوس در داخل آن محبوس می‌شود و کاربر نمی‌تواند
              با Tab به خارج از برگه برود
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">نقش‌های ARIA</h3>
            <p>
              برگه از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                role=&quot;dialog&quot;
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-modal=&quot;true&quot;
              </code>{" "}
              استفاده می‌کند
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
            <h3 className="font-semibold mb-3">عنوان واضح (Clear Title)</h3>
            <p className="text-muted-foreground">
              همیشه از SheetTitle استفاده کنید تا کاربران صفحه‌خوان بتوانند
              محتوای برگه را درک کنند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              انتخاب جهت مناسب (Choose Side Wisely)
            </h3>
            <p className="text-muted-foreground">
              جهت راست برای تنظیمات و فرم‌ها، جهت چپ برای منوی ناوبری، و جهت‌های
              بالا/پایین برای اعلان‌ها و فیلترها مناسب هستند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              دکمه‌های اقدام (Action Buttons)
            </h3>
            <p className="text-muted-foreground">
              دکمه‌های اصلی و ثانویه را در SheetFooter قرار دهید. دکمه انصراف
              همیشه باید وجود داشته باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تفاوت با Drawer و Dialog
            </h3>
            <p className="text-muted-foreground">
              از Sheet برای پنل‌های کناری بدون حرکت لمسی استفاده کنید. از Drawer
              برای محتوای موبایل با قابلیت کشیدن و از Dialog برای مودال‌های
              مرکزی استفاده کنید
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
