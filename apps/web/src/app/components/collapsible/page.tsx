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
import BasicCollapsibleExample, {
  code as basicCode,
} from "./_examples/basic";
import ControlledCollapsibleExample, {
  code as controlledCode,
} from "./_examples/controlled";
import CollapsibleSettingsPanel, {
  code as settingsPanelCode,
} from "./_examples/settings-panel";
import CollapsibleFileTreeExample, {
  code as fileTreeCode,
} from "./_examples/file-tree";

const collapsibleProps: PropDefinition[] = [
  {
    name: "open",
    type: "boolean",
    defaultValue: "undefined",
    description:
      "وضعیت باز/بسته به صورت کنترل‌شده. در صورت استفاده باید همراه با onOpenChange باشد.",
  },
  {
    name: "defaultOpen",
    type: "boolean",
    defaultValue: "false",
    description: "باز بودن اولیه کامپوننت در حالت غیرکنترل‌شده.",
  },
  {
    name: "onOpenChange",
    type: "(open: boolean) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر وضعیت باز/بسته.",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن تعامل با کامپوننت.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای ریشه Collapsible.",
  },
];

const collapsibleTriggerProps: PropDefinition[] = [
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description:
      "در صورت true شدن، به جای دکمه پیش‌فرض، کامپوننت فرزند به عنوان ریشه رندر می‌شود.",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای تریگر.",
  },
];

const collapsibleContentProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description:
      "کلاس‌های CSS سفارشی برای محتوای جمع‌شونده (روی روت محتوا اعمال می‌شود).",
  },
];

const usageCode = `import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function CollapsibleUsage() {
  return (
    <Collapsible className="space-y-2">
      <CollapsibleTrigger className="text-sm font-medium underline-offset-4 hover:underline">
        آیا می‌توانم از این کامپوننت در پروژه استفاده کنم؟
      </CollapsibleTrigger>
      <CollapsibleContent className="text-sm text-muted-foreground">
        بله. استفاده شخصی و تجاری آزاد است و نیازی به ذکر منبع نیست.
      </CollapsibleContent>
    </Collapsible>
  );
}
`;

export default function CollapsiblePage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">کالپس (Collapsible)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت تعاملی برای باز و بسته کردن بخش‌های محتوا؛ مناسب برای
          جزئیات اضافی، تنظیمات پیشرفته و ساخت درخت فایل. کاملاً سازگار با
          RTL و قابل ترکیب با سایر کامپوننت‌های Rad UI.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add collapsible"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic"
          description="کالپس ساده برای نمایش جزئیات بیشتر یک کارت محصول."
          code={basicCode}
        >
          <BasicCollapsibleExample />
        </ComponentExample>

        <ComponentExample
          title="حالت کنترل‌شده"
          titleEn="Controlled State"
          description="مدیریت وضعیت باز/بسته توسط state خارجی با onOpenChange."
          code={controlledCode}
        >
          <ControlledCollapsibleExample />
        </ComponentExample>

        <ComponentExample
          title="پنل تنظیمات"
          titleEn="Settings Panel"
          description="استفاده از Collapsible برای نمایش تنظیمات پیشرفته در فرم."
          code={settingsPanelCode}
        >
          <CollapsibleSettingsPanel />
        </ComponentExample>

        <ComponentExample
          title="درخت فایل"
          titleEn="File Tree"
          description="ساخت درخت فایل چندسطحی با کالپس‌های تو در تو."
          code={fileTreeCode}
        >
          <CollapsibleFileTreeExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Collapsible"
          description="کامپوننت ریشه که وضعیت باز/بسته را مدیریت می‌کند."
          props={collapsibleProps}
        />
        <PropsTable
          title="CollapsibleTrigger"
          description="تریگری که با کلیک روی آن محتوا باز یا بسته می‌شود."
          props={collapsibleTriggerProps}
        />
        <PropsTable
          title="CollapsibleContent"
          description="محتوای جمع‌شونده که زیر تریگر نمایش داده می‌شود."
          props={collapsibleContentProps}
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
              نقش و وضعیت (Role & State)
            </h3>
            <p>
              کالپس بر پایه Radix Collapsible ساخته شده و به صورت خودکار نقش‌ها
              و وضعیت{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                data-state="open" | "closed"
              </code>{" "}
              را مدیریت می‌کند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              کیبورد (Keyboard)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                و{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space
                </code>{" "}
                — باز یا بسته کردن کالپس در هنگام فوکوس روی تریگر.
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Tab
                </code>{" "}
                — حرکت بین تریگر و سایر المان‌های قابل فوکوس.
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی RTL
            </h3>
            <p>
              از کلاس‌هایی مثل{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                ms-auto
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                text-start
              </code>{" "}
              استفاده کنید تا چیدمان در جهت راست‌به‌چپ و چپ‌به‌راست درست عمل
              کند.
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
              چه زمانی از Collapsible استفاده کنیم؟
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>نمایش جزئیات سفارش، محصول یا رکورد دیتابیس.</li>
              <li>تنظیمات پیشرفته که همیشه لازم نیست دیده شوند.</li>
              <li>درخت فایل یا ساختار‌های سلسله‌مراتبی کوچک.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">برچسب‌گذاری واضح</h3>
            <p className="text-muted-foreground">
              متن تریگر را واضح و توصیفی انتخاب کنید تا کاربر بداند با باز
              کردن چه محتوایی نمایش داده می‌شود.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">ترکیب با سایر کامپوننت‌ها</h3>
            <p className="text-muted-foreground">
              Collapsible را می‌توانید با کامپوننت‌هایی مثل Card، Field،
              Input و Tabs ترکیب کنید تا الگوهای UI غنی‌تری بسازید.
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

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="ترکیب با فیلترها"
          titleEn="Combined with Filters"
          description="مخفی کردن فیلترهای پیشرفته برای ساده نگه داشتن رابط کاربری."
          code={`import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export function AdvancedFilters() {
  return (
    <Collapsible className="space-y-2">
      <CollapsibleTrigger className="text-sm font-medium text-primary underline-offset-4 hover:underline">
        فیلترهای پیشرفته
      </CollapsibleTrigger>
      <CollapsibleContent className="grid gap-3 text-sm text-muted-foreground">
        {/* فیلدهای فیلتر اینجا قرار می‌گیرند */}
      </CollapsibleContent>
    </Collapsible>
  );
}`}
        >
          <p className="text-sm text-muted-foreground">
            از Collapsible برای پنهان کردن فیلترهای پیشرفته استفاده کنید تا
            فرم‌های جستجو تمیز و مینیمال بمانند.
          </p>
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}

