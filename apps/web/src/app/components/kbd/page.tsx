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
import ShortcutsExample, { code as shortcutsCode } from "./_examples/shortcuts";
import PlatformShortcutsExample, { code as platformShortcutsCode } from "./_examples/platform";
import SpecialKeysExample, { code as specialKeysCode } from "./_examples/special-keys";
import WithButtonsExample, { code as withButtonsCode } from "./_examples/with-buttons";
import CheatsheetExample, { code as cheatsheetCode } from "./_examples/cheatsheet";
import ToolbarExample, { code as toolbarCode } from "./_examples/toolbar";

const kbdProps: PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    defaultValue: "undefined",
    description: "محتوای کلید (حرف یا نماد)",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

const kbdGroupProps: PropDefinition[] = [
  {
    name: "children",
    type: "ReactNode",
    defaultValue: "undefined",
    description: "کلیدهای Kbd به همراه جداکننده",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function KbdPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">صفحه‌کلید (Keyboard)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش کلیدها و میانبرهای صفحه‌کلید.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add kbd"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="برای نمایش یک کلید از کامپوننت Kbd استفاده کنید."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="میانبرهای صفحه‌کلید"
          titleEn="Keyboard Shortcuts"
          description="با استفاده از KbdGroup می‌توانید چند کلید را کنار هم نمایش دهید."
          code={shortcutsCode}
        >
          <ShortcutsExample />
        </ComponentExample>

        <ComponentExample
          title="میانبرهای سیستم‌عامل"
          titleEn="Platform Shortcuts"
          description="نمایش تفاوت‌های میانبر بین ویندوز و مک."
          code={platformShortcutsCode}
        >
          <PlatformShortcutsExample />
        </ComponentExample>

        <ComponentExample
          title="کلیدهای خاص"
          titleEn="Special Keys"
          description="استفاده از نمادهای یونیکد برای کلیدهای ویژه."
          code={specialKeysCode}
        >
          <SpecialKeysExample />
        </ComponentExample>
      </section>

      {/* Practical Examples */}
      <ComponentExampleGroup
        title="مثال‌های کاربردی"
        titleEn="Practical Examples"
      >
        <SubExample
          title="با دکمه‌ها"
          titleEn="With Buttons"
          description="ترکیب دکمه‌ها با راهنمای کلید میانبر."
          code={withButtonsCode}
        >
          <WithButtonsExample />
        </SubExample>

        <SubExample
          title="راهنمای میانبرها"
          titleEn="Shortcut Cheatsheet"
          description="یک لیست کامل از میانبرهای کاربردی."
          code={cheatsheetCode}
        >
          <CheatsheetExample />
        </SubExample>

        <SubExample
          title="نوار ابزار"
          titleEn="Toolbar"
          description="نوار ابزار با دکمه‌های دارای میانبر."
          code={toolbarCode}
        >
          <ToolbarExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Kbd"
          description="پراپ‌های کامپوننت Kbd."
          props={kbdProps}
        />
        <PropsTable
          title="KbdGroup"
          description="پراپ‌های کامپوننت KbdGroup."
          props={kbdGroupProps}
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
              استفاده از المان kbd
            </h3>
            <p>
              این کامپوننت از المان HTML{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                &lt;kbd&gt;
              </code>{" "}
              استفاده می‌کند که به صورت معنایی نشان می‌دهد محتوا یک ورودی
              صفحه‌کلید است
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              غیرقابل تعامل
            </h3>
            <p>
              کلیدها به صورت{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                pointer-events-none
              </code>{" "}
              هستند و تنها برای نمایش استفاده می‌شوند، نه تعامل
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">محتوای واضح</h3>
            <p>
              از حروف و نمادهای واضح استفاده کنید تا کاربران به راحتی بتوانند
              آنها را تشخیص دهند
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
            <h3 className="font-semibold mb-3">استفاده از نمادها</h3>
            <p className="text-muted-foreground">
              برای کلیدهای خاص macOS از نمادهای یونیکد (⌘, ⌥, ⇧) استفاده کنید.
              برای Windows/Linux از نام کلید (Ctrl, Alt, Shift) استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی میانبرها</h3>
            <p className="text-muted-foreground">
              از KbdGroup برای نمایش میانبرهای چند کلیده استفاده کنید و بین
              کلیدها جداکننده (+) قرار دهید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">سازگاری</h3>
            <p className="text-muted-foreground">
              در کل اپلیکیشن از یک فرمت واحد برای نمایش میانبرها استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">کاربرد صحیح</h3>
            <p className="text-muted-foreground">
              از این کامپوننت تنها برای نمایش کلیدها استفاده کنید، نه برای
              دکمه‌های قابل کلیک
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
