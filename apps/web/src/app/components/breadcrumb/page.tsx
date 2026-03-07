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
import CustomSeparatorExample, {
  code as customSeparatorCode,
} from "./_examples/custom-separator";
import CollapsedExample, { code as collapsedCode } from "./_examples/collapsed";
import UsageExample, { code as usageCode } from "./_examples/usage";

const sharedClassNameProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

const breadcrumbLinkProps: PropDefinition[] = [
  {
    name: "asChild",
    type: "boolean",
    defaultValue: "false",
    description:
      "با true می‌توان از المان فرزند (مثلاً Link) به‌عنوان رندر نهایی استفاده کرد.",
  },
  ...sharedClassNameProps,
];

const breadcrumbSeparatorProps: PropDefinition[] = [
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "ChevronRight",
    description: "اجزای جداکننده سفارشی (پیش‌فرض: آیکون ChevronRight)",
  },
  ...sharedClassNameProps,
];

export default function BreadcrumbPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">مسیر (Breadcrumb)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش مسیر به منبع فعلی با سلسله‌مراتب لینک‌ها. با پشتیبانی RTL،
          جداکننده سفارشی و حالت جمع‌شده (Ellipsis).
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add breadcrumb"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="نمونه پایه"
          titleEn="Basic"
          description="مسیر ساده با لینک خانه، کامپوننت‌ها و صفحه فعلی. از asChild و Link برای روتینگ استفاده شده."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="جداکننده سفارشی"
          titleEn="Custom separator"
          description="با قرار دادن children در BreadcrumbSeparator می‌توان جداکننده را سفارشی کرد (مثلاً /)."
          code={customSeparatorCode}
        >
          <CustomSeparatorExample />
        </ComponentExample>

        <ComponentExample
          title="حالت جمع‌شده"
          titleEn="Collapsed"
          description="با BreadcrumbEllipsis و DropdownMenu می‌توان بخشی از مسیر را جمع کرد."
          code={collapsedCode}
        >
          <CollapsedExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Breadcrumb"
          description="المان ریشه ناوبری که همه اجزای مسیر را در بر می‌گیرد (nav با aria-label)."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="BreadcrumbList"
          description="لیست مرتب (ol) آیتم‌های مسیر."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="BreadcrumbItem"
          description="هر آیتم مسیر (li)."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="BreadcrumbLink"
          description="لینک قابل کلیک. با asChild می‌توان از Link یا کامپوننت روتینگ استفاده کرد."
          props={breadcrumbLinkProps}
        />
        <PropsTable
          title="BreadcrumbPage"
          description="صفحه فعلی (غیرقابل کلیک)، با role و aria-current."
          props={sharedClassNameProps}
        />
        <PropsTable
          title="BreadcrumbSeparator"
          description="جداکننده بین آیتم‌ها. با children می‌توان آیکون یا متن را عوض کرد."
          props={breadcrumbSeparatorProps}
        />
        <PropsTable
          title="BreadcrumbEllipsis"
          description="نشانگر حالت جمع‌شده برای مسیرهای طولانی."
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
            <h3 className="font-semibold text-foreground mb-2">ساختار معنایی</h3>
            <p>
              از <code className="text-sm bg-muted px-2 py-1 rounded">nav</code> با{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">{'aria-label="breadcrumb"'}</code> و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">ol</code> /{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">li</code> برای سازگاری با
              خوانندگان صفحه و الگوی Breadcrumb در WAI-ARIA استفاده شده است.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">صفحه فعلی</h3>
            <p>
              <code className="text-sm bg-muted px-2 py-1 rounded">BreadcrumbPage</code> دارای{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">{'aria-current="page"'}</code> و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">{'aria-disabled="true"'}</code> است.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">پشتیبانی RTL</h3>
            <p>
              آیکون جداکننده پیش‌فرض (ChevronRight) با{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">rtl:rotate-180</code> در جهت
              راست‌به‌چپ درست نمایش داده می‌شود.
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
            <h3 className="font-semibold mb-3">چه زمانی از مسیر استفاده کنیم؟</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>صفحات چندسطحی (مثلاً فروشگاه → دسته‌بندی → محصول).</li>
              <li>ساختار سلسله‌مراتبی وب‌سایت برای ناوبری و SEO.</li>
              <li>نمایش مسیر بازگشت به صفحه قبلی یا سطح بالاتر.</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">لینک با روتینگ</h3>
            <p className="text-muted-foreground">
              برای اپ‌های Next یا React Router از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">BreadcrumbLink asChild</code> و
              قرار دادن <code className="text-sm bg-muted px-2 py-1 rounded">Link</code> به‌عنوان
              فرزند استفاده کنید تا ناوبری سمت کلاینت درست کار کند.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">مسیرهای طولانی</h3>
            <p className="text-muted-foreground">
              با <code className="text-sm bg-muted px-2 py-1 rounded">BreadcrumbEllipsis</code> و
              یک منوی کشویی می‌توان بخشی از آیتم‌ها را جمع کرد تا از شلوغی جلوگیری شود.
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
          title="جداکننده سفارشی"
          titleEn="Custom separator"
          description="استفاده از کاراکتر / به‌جای آیکون پیش‌فرض."
          code={customSeparatorCode}
        >
          <CustomSeparatorExample />
        </SubExample>
        <SubExample
          title="حالت جمع‌شده با منو"
          titleEn="Collapsed with dropdown"
          description="مسیر طولانی با BreadcrumbEllipsis و DropdownMenu."
          code={collapsedCode}
        >
          <CollapsedExample />
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
