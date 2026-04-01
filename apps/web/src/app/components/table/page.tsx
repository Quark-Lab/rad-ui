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
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/registry/web/ui";
import BasicExample, { code as basicCode } from "./_examples/basic";
import FooterExample, { code as footerCode } from "./_examples/footer";
import { code as usageCode } from "./_examples/usage";

const tableProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای جدول",
  },
  {
    name: "children",
    type: "React.ReactNode",
    defaultValue: "-",
    description:
      "محتوای جدول شامل TableHeader، TableBody، TableFooter و TableCaption",
  },
];

const tableHeadProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای سرستون",
  },
  {
    name: "colSpan",
    type: "number",
    defaultValue: "-",
    description: "تعداد ستون‌هایی که سرستون باید پوشش دهد",
  },
];

const tableCellProps: PropDefinition[] = [
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی برای سلول",
  },
  {
    name: "colSpan",
    type: "number",
    defaultValue: "-",
    description: "تعداد ستون‌هایی که سلول باید پوشش دهد",
  },
];

export default function TablePage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">جدول (Table)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت جدول واکنش‌گرا با پشتیبانی کامل از RTL و حالت تاریک
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock
          code="npx @quark-lab/rad-ui add table"
          language="bash"
        />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="ساده‌ترین حالت استفاده از جدول با سرستون، ردیف‌ها و توضیحات."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="با پاورقی"
          titleEn="With Footer"
          description="استفاده از TableFooter برای نمایش مجموع یا خلاصه داده‌ها."
          code={footerCode}
        >
          <FooterExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Table"
          description="پراپ‌های کامپوننت اصلی جدول. جدول در یک container با اسکرول افقی قرار می‌گیرد."
          props={tableProps}
        />
        <PropsTable
          title="TableHead"
          description="پراپ‌های سرستون جدول."
          props={tableHeadProps}
        />
        <PropsTable
          title="TableCell"
          description="پراپ‌های سلول جدول."
          props={tableCellProps}
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
              از المان‌های معنایی HTML مانند{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                &lt;table&gt;
              </code>
              ،{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                &lt;thead&gt;
              </code>
              ،{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                &lt;tbody&gt;
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                &lt;caption&gt;
              </code>{" "}
              استفاده می‌شود که به خوانندگان صفحه کمک می‌کند ساختار جدول را
              درک کنند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ناوبری کیبورد (Keyboard Navigation)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت بین عناصر قابل فوکوس در جدول
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Keys
                </code>{" "}
                - ناوبری بین سلول‌ها (در صورت استفاده از Data Table)
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              توضیحات جدول (Table Caption)
            </h3>
            <p>
              از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                TableCaption
              </code>{" "}
              برای توصیف محتوای جدول استفاده کنید تا کاربران خواننده صفحه
              بتوانند هدف جدول را درک کنند.
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
              استفاده از TableCaption (Use TableCaption)
            </h3>
            <p className="text-muted-foreground">
              همیشه از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                TableCaption
              </code>{" "}
              برای توصیف محتوای جدول استفاده کنید. این کار به دسترسی‌پذیری
              کمک می‌کند.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تراز متن در RTL (Text Alignment in RTL)
            </h3>
            <p className="text-muted-foreground">
              برای تراز متن از کلاس‌های منطقی مانند{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                text-start
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                text-end
              </code>{" "}
              استفاده کنید تا جدول در هر دو جهت RTL و LTR به درستی نمایش
              داده شود.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              جدول‌های واکنش‌گرا (Responsive Tables)
            </h3>
            <p className="text-muted-foreground">
              کامپوننت Table به صورت پیش‌فرض در یک container با اسکرول افقی
              قرار دارد. برای جدول‌های بزرگ، داده‌ها به صورت خودکار قابل
              اسکرول خواهند بود.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              پاورقی جدول (Table Footer)
            </h3>
            <p className="text-muted-foreground">
              از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                TableFooter
              </code>{" "}
              برای نمایش مجموع، میانگین یا سایر خلاصه‌های داده‌ها استفاده
              کنید.
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
          title="جدول با استایل سفارشی"
          titleEn="Custom Styled Table"
          description="می‌توانید با className ظاهر جدول و سلول‌ها را تغییر دهید."
          code={`<Table>
  <TableHeader>
    <TableRow>
      <TableHead className="bg-primary/10">عنوان</TableHead>
      <TableHead className="bg-primary/10">مقدار</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="bg-muted/30">
      <TableCell>آیتم ۱</TableCell>
      <TableCell>۱۰۰</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        >
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead className="bg-primary/10">عنوان</TableHead>
                <TableHead className="bg-primary/10">مقدار</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="bg-muted/30">
                <TableCell>آیتم ۱</TableCell>
                <TableCell>۱۰۰</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </SubExample>
        <SubExample
          title="جدول بدون حاشیه"
          titleEn="Borderless Table"
          description="حذف حاشیه ردیف‌ها با className سفارشی."
          code={`<Table>
  <TableHeader>
    <TableRow className="border-0 hover:bg-transparent">
      <TableHead>نام</TableHead>
      <TableHead>نقش</TableHead>
    </TableRow>
  </TableHeader>
  <TableBody>
    <TableRow className="border-0">
      <TableCell>علی</TableCell>
      <TableCell>توسعه‌دهنده</TableCell>
    </TableRow>
    <TableRow className="border-0">
      <TableCell>سارا</TableCell>
      <TableCell>طراح</TableCell>
    </TableRow>
  </TableBody>
</Table>`}
        >
          <Table>
            <TableHeader>
              <TableRow className="border-0 hover:bg-transparent">
                <TableHead>نام</TableHead>
                <TableHead>نقش</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="border-0">
                <TableCell>علی</TableCell>
                <TableCell>توسعه‌دهنده</TableCell>
              </TableRow>
              <TableRow className="border-0">
                <TableCell>سارا</TableCell>
                <TableCell>طراح</TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
