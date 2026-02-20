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
import OutlineExample, { code as outlineCode } from "./_examples/outline";
import BackgroundExample, {
  code as backgroundCode,
} from "./_examples/background";
import AvatarExample, { code as avatarCode } from "./_examples/avatar";
import AvatarGroupExample, {
  code as avatarGroupCode,
} from "./_examples/avatar-group";
import InputGroupExample, {
  code as inputGroupCode,
} from "./_examples/input-group";
import UsageExample, { code as usageCode } from "./_examples/usage";

const emptyProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const emptyMediaProps: PropDefinition[] = [
  {
    name: "variant",
    type: '"default" | "icon"',
    defaultValue: '"default"',
    description: "نوع نمایش رسانه (پیش‌فرض یا آیکون)",
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

export default function EmptyPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">خالی (Empty)</h1>
        <p className="text-lg text-muted-foreground">
          از کامپوننت Empty برای نمایش حالت خالی استفاده کنید.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add empty" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic Example"
          description="ساده‌ترین شکل استفاده از کامپوننت Empty با آیکون، عنوان، توضیحات و دکمه."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="حاشیه‌دار"
          titleEn="Outline"
          description="استفاده از کلاس border برای ایجاد حالت خالی با حاشیه."
          code={outlineCode}
        >
          <OutlineExample />
        </ComponentExample>

        <ComponentExample
          title="با پس‌زمینه"
          titleEn="Background"
          description="استفاده از کلاس‌های bg-* برای افزودن پس‌زمینه به حالت خالی."
          code={backgroundCode}
        >
          <BackgroundExample />
        </ComponentExample>

        <ComponentExample
          title="با آواتار"
          titleEn="Avatar"
          description="استفاده از کامپوننت EmptyMedia برای نمایش آواتار در حالت خالی."
          code={avatarCode}
        >
          <AvatarExample />
        </ComponentExample>

        <ComponentExample
          title="گروه آواتار"
          titleEn="Avatar Group"
          description="استفاده از EmptyMedia برای نمایش گروهی از آواتارها."
          code={avatarGroupCode}
        >
          <AvatarGroupExample />
        </ComponentExample>

        <ComponentExample
          title="با گروه ورودی"
          titleEn="InputGroup"
          description="می‌توانید کامپوننت InputGroup را به EmptyContent اضافه کنید."
          code={inputGroupCode}
        >
          <InputGroupExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Empty"
          description="کامپوننت اصلی که به عنوان کانتینر برای حالت خالی عمل می‌کند."
          props={emptyProps}
        />
        <PropsTable
          title="EmptyHeader"
          description="رسانه، عنوان و توضیحات حالت خالی را در بر می‌گیرد."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="EmptyMedia"
          description="برای نمایش رسانه حالت خالی مانند آیکون یا تصویر استفاده می‌شود. همچنین می‌توانید از آن برای نمایش کامپوننت‌های دیگر مانند آواتار استفاده کنید."
          props={emptyMediaProps}
        />
        <PropsTable
          title="EmptyTitle"
          description="برای نمایش عنوان حالت خالی استفاده می‌شود. از تگ h3 استفاده می‌کند."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="EmptyDescription"
          description="برای نمایش توضیحات حالت خالی استفاده می‌شود."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="EmptyContent"
          description="برای نمایش محتوای حالت خالی مانند دکمه، ورودی یا لینک استفاده می‌شود."
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
            <h3 className="font-semibold text-foreground mb-2">
              ساختار معنایی (Semantic Structure)
            </h3>
            <p>
              EmptyTitle از تگ{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">h3</code>{" "}
              استفاده می‌کند که برای خوانندگان صفحه سلسله‌مراتب مناسبی ایجاد
              می‌کند.
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
              کنتراست رنگ (Color Contrast)
            </h3>
            <p>
              تمام ترکیب‌های رنگی استانداردهای WCAG 2.1 AA را رعایت می‌کنند.
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
              ساختار حالت خالی (Empty Structure)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">EmptyHeader:</strong> همیشه
                با رسانه (آیکون یا تصویر) شروع کنید تا کاربر بداند چه چیزی
                خالی است
              </li>
              <li>
                <strong className="text-foreground">EmptyTitle:</strong> عنوان
                واضح و مختصر برای توضیح وضعیت خالی
              </li>
              <li>
                <strong className="text-foreground">EmptyDescription:</strong>{" "}
                توضیحات مفصل‌تر برای راهنمایی کاربر
              </li>
              <li>
                <strong className="text-foreground">EmptyContent:</strong>{" "}
                اقدامات یا ورودی‌هایی که کاربر می‌تواند انجام دهد
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استفاده از EmptyMedia</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">variant="icon":</strong> برای
                آیکون‌های ساده که نیاز به استایل خاص دارند
              </li>
              <li>
                <strong className="text-foreground">variant="default":</strong>{" "}
                برای تصاویر، آواتارها یا کامپوننت‌های دیگر
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استایل‌دهی سفارشی</h3>
            <p className="text-muted-foreground">
              می‌توانید با استفاده از کلاس‌های Tailwind مانند{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">border</code>{" "}
              یا{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                bg-muted/50
              </code>{" "}
              ظاهر حالت خالی را سفارشی کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <ComponentExample
        title="نحوه استفاده"
        titleEn="Usage"
        description="نمونه کامل از نحوه ایمپورت و استفاده از کامپوننت Empty."
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
          title="حاشیه‌دار"
          titleEn="Outline"
          description="استفاده از کلاس border برای ایجاد حالت خالی با حاشیه."
          code={outlineCode}
        >
          <OutlineExample />
        </SubExample>
        <SubExample
          title="با پس‌زمینه"
          titleEn="Background"
          description="استفاده از کلاس‌های bg-* برای افزودن پس‌زمینه به حالت خالی."
          code={backgroundCode}
        >
          <BackgroundExample />
        </SubExample>
        <SubExample
          title="با گروه ورودی"
          titleEn="InputGroup"
          description="استفاده از InputGroup در EmptyContent برای جستجو یا ورودی."
          code={inputGroupCode}
        >
          <InputGroupExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
