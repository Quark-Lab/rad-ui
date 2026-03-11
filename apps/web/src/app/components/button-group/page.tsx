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
import OrientationExample, { code as orientationCode } from "./_examples/orientation";
import SeparatorExample, { code as separatorCode } from "./_examples/separator";
import SplitExample, { code as splitCode } from "./_examples/split";
import InputExample, { code as inputCode } from "./_examples/input";

const buttonGroupProps: PropDefinition[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description: "جهت چیدمان دکمه‌ها در گروه",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای ریشه گروه",
  },
];

const buttonGroupSeparatorProps: PropDefinition[] = [
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"vertical"',
    description: "جهت جداکننده متناسب با جهت گروه",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای جداکننده",
  },
];

const buttonGroupTextProps: PropDefinition[] = [
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description:
      "در صورت true شدن، به جای span المان فرزند را به عنوان ریشه رندر می‌کند",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای متن",
  },
];

const usageCode = `import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
  ButtonGroupText,
} from "@/components/ui/button-group";

export default function ButtonGroupUsage() {
  return (
    <ButtonGroup aria-label="گروه دکمه‌های عملیات">
      <ButtonGroupText>وضعیت</ButtonGroupText>
      <Button variant="outline">پیش‌نویس</Button>
      <Button variant="outline">منتشر شده</Button>
      <ButtonGroupSeparator />
      <Button>ذخیره</Button>
    </ButtonGroup>
  );
}
`;

export default function ButtonGroupPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          گروه دکمه‌ها (Button Group)
        </h1>
        <p className="text-lg text-muted-foreground">
          کانتینری برای گروه‌بندی دکمه‌های مرتبط با استایل و فاصله‌گذاری
          یکسان، با پشتیبانی کامل از RTL.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add button-group"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت گروه‌بندی دکمه‌ها در کنار هم."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="جهت چیدمان"
          titleEn="Orientation"
          description="تغییر جهت گروه بین حالت افقی و عمودی."
          code={orientationCode}
        >
          <OrientationExample />
        </ComponentExample>

        <ComponentExample
          title="جداکننده"
          titleEn="Separator"
          description="افزودن جداکننده بصری بین دکمه‌ها برای تفکیک عملیات."
          code={separatorCode}
        >
          <SeparatorExample />
        </ComponentExample>

        <ComponentExample
          title="دکمه دو بخشی"
          titleEn="Split Button"
          description="ترکیب دکمه اصلی با منوی گزینه‌های بیشتر."
          code={splitCode}
        >
          <SplitExample />
        </ComponentExample>

        <ComponentExample
          title="گروه همراه با ورودی"
          titleEn="With Input"
          description="گروه‌بندی دکمه‌ها همراه با فیلد ورودی برای اکشن‌های مرتبط."
          code={inputCode}
        >
          <InputExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="ButtonGroup"
          description="پراپ‌های کامپوننت ButtonGroup."
          props={buttonGroupProps}
        />
        <PropsTable
          title="ButtonGroupSeparator"
          description="پراپ‌های کامپوننت ButtonGroupSeparator."
          props={buttonGroupSeparatorProps}
        />
        <PropsTable
          title="ButtonGroupText"
          description="پراپ‌های کامپوننت ButtonGroupText."
          props={buttonGroupTextProps}
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
              نقش گروه (Group Role)
            </h3>
            <p>
              کامپوننت <code className="text-sm bg-muted px-2 py-1 rounded">ButtonGroup</code>{" "}
              به صورت پیش‌فرض از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">role="group"</code>{" "}
              استفاده می‌کند تا مجموعه‌ای از دکمه‌های مرتبط را به خوانندگان
              صفحه معرفی کند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌گذاری (Labelling)
            </h3>
            <p>
              برای توصیف هدف گروه از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              یا{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-labelledby
              </code>{" "}
              استفاده کنید تا کاربران با فناوری‌های کمکی بهتر متوجه هدف گروه
              شوند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              جهت RTL (RTL Direction)
            </h3>
            <p>
              چیدمان دکمه‌ها و فاصله‌گذاری آن‌ها با در نظر گرفتن{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">dir="rtl"</code>{" "}
              طراحی شده و در هر دو حالت جهت افقی و عمودی به درستی کار می‌کند.
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
              گروه‌بندی عملیات مرتبط (Group Related Actions)
            </h3>
            <p className="text-muted-foreground">
              از ButtonGroup برای قرار دادن عملیات مرتبط در کنار هم استفاده کنید؛
              مثل دکمه‌های مربوط به وضعیت محتوا، فیلترها یا دسته‌ای از اکشن‌های
              ثانویه.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              استفاده از جداکننده (Separators)
            </h3>
            <p className="text-muted-foreground">
              زمانی که در یک گروه چند دسته عملیات دارید، از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                ButtonGroupSeparator
              </code>{" "}
              برای تفکیک بصری استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              برچسب‌گذاری واضح (Clear Labelling)
            </h3>
            <p className="text-muted-foreground">
              از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                ButtonGroupText
              </code>{" "}
              یا یک برچسب مجزا برای توضیح هدف گروه استفاده کنید، مخصوصاً در
              فرم‌ها و نوار ابزارها.
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
          title="نوار ابزار فیلتر"
          titleEn="Filter Toolbar"
          description="مثالی از استفاده ButtonGroup برای ساخت نوار ابزار فیلتر محتوا."
          code={`import {
  Button,
  ButtonGroup,
  ButtonGroupSeparator,
} from "@/components/ui/button-group";

export function FilterToolbar() {
  return (
    <ButtonGroup aria-label="فیلتر محتوا">
      <Button variant="outline">همه</Button>
      <Button variant="outline">منتشر شده</Button>
      <Button variant="outline">پیش‌نویس</Button>
      <ButtonGroupSeparator />
      <Button>اعمال فیلتر</Button>
    </ButtonGroup>
  );
}`}
        >
          <div dir="rtl">
            {/* Reuse basic structure for live preview */}
            <InlineCodeBlock code={`<FilterToolbar />`} />
          </div>
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}

