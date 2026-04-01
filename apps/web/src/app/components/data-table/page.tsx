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
import FullExample, { code as fullCode } from "./_examples/full";
import { code as usageCode } from "./_examples/usage";

const dataTableProps: PropDefinition[] = [
  {
    name: "columns",
    type: "ColumnDef<TData, TValue>[]",
    defaultValue: "-",
    description: "آرایه‌ای از تعریف ستون‌ها که ساختار جدول را مشخص می‌کند",
  },
  {
    name: "data",
    type: "TData[]",
    defaultValue: "-",
    description: "آرایه‌ای از داده‌ها که در جدول نمایش داده می‌شوند",
  },
];

const columnDefProps: PropDefinition[] = [
  {
    name: "accessorKey",
    type: "string",
    defaultValue: "-",
    description: "کلید دسترسی به داده در هر ردیف",
  },
  {
    name: "header",
    type: "string | ((props) => ReactNode)",
    defaultValue: "-",
    description:
      "محتوای سرستون — می‌تواند یک رشته یا تابعی برای رندر سفارشی باشد",
  },
  {
    name: "cell",
    type: "((props) => ReactNode)",
    defaultValue: "-",
    description: "تابع رندر سفارشی برای محتوای هر سلول",
  },
  {
    name: "enableSorting",
    type: "boolean",
    defaultValue: "true",
    description: "فعال یا غیرفعال کردن مرتب‌سازی برای این ستون",
  },
  {
    name: "enableHiding",
    type: "boolean",
    defaultValue: "true",
    description: "فعال یا غیرفعال کردن امکان مخفی کردن این ستون",
  },
];

const tableOptionsProps: PropDefinition[] = [
  {
    name: "getCoreRowModel",
    type: "() => RowModel<TData>",
    defaultValue: "-",
    description: "مدل اصلی ردیف‌ها — همیشه الزامی است",
  },
  {
    name: "getPaginationRowModel",
    type: "() => RowModel<TData>",
    defaultValue: "-",
    description: "فعال‌سازی صفحه‌بندی خودکار",
  },
  {
    name: "getSortedRowModel",
    type: "() => RowModel<TData>",
    defaultValue: "-",
    description: "فعال‌سازی مرتب‌سازی خودکار",
  },
  {
    name: "getFilteredRowModel",
    type: "() => RowModel<TData>",
    defaultValue: "-",
    description: "فعال‌سازی فیلتر خودکار",
  },
  {
    name: "state",
    type: "Partial<TableState>",
    defaultValue: "-",
    description:
      "وضعیت کنترل‌شده جدول شامل مرتب‌سازی، فیلتر، صفحه‌بندی و غیره",
  },
];

export default function DataTablePage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">جدول داده (Data Table)</h1>
        <p className="text-lg text-muted-foreground">
          جدول داده‌های قدرتمند با استفاده از TanStack Table و کامپوننت{" "}
          <code className="text-sm bg-muted px-2 py-1 rounded">
            {"<Table />"}
          </code>{" "}
          — شامل مرتب‌سازی، فیلتر، صفحه‌بندی، انتخاب ردیف و مخفی‌سازی ستون‌ها.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="space-y-4">
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              ابتدا کامپوننت{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                Table
              </code>{" "}
              را نصب کنید:
            </p>
            <InstallCodeBlock
              code="npx @quark-lab/rad-ui add table"
              language="bash"
            />
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-2">
              سپس وابستگی{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                @tanstack/react-table
              </code>{" "}
              را اضافه کنید:
            </p>
            <InstallCodeBlock
              code="npm install @tanstack/react-table"
              language="bash"
            />
          </div>
        </div>
      </section>

      {/* Basic Example */}
      <ComponentExample
        title="جدول پایه"
        titleEn="Basic Table"
        description="ساده‌ترین حالت استفاده از Data Table با تعریف ستون‌ها و نمایش داده‌ها."
        code={basicCode}
        previewCentered={false}
      >
        <BasicExample />
      </ComponentExample>

      {/* Full Example */}
      <ComponentExample
        title="جدول کامل"
        titleEn="Full-Featured Table"
        description="جدول با مرتب‌سازی، فیلتر ایمیل، صفحه‌بندی، نمایش/مخفی‌سازی ستون‌ها، انتخاب ردیف و عملیات ردیف."
        code={fullCode}
        previewCentered={false}
      >
        <FullExample />
      </ComponentExample>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="DataTable"
          description="پراپ‌های کامپوننت DataTable. این یک کامپوننت جنریک است که نوع داده و ستون‌ها را دریافت می‌کند."
          props={dataTableProps}
        />
        <PropsTable
          title="ColumnDef"
          description="تعریف هر ستون جدول. از @tanstack/react-table استفاده می‌شود."
          props={columnDefProps}
        />
        <PropsTable
          title="Table Options"
          description="گزینه‌های useReactTable برای فعال‌سازی قابلیت‌های مختلف جدول."
          props={tableOptionsProps}
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
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                &lt;tbody&gt;
              </code>{" "}
              استفاده می‌شود که به صفحه‌خوان‌ها کمک می‌کند ساختار جدول را درک
              کنند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ناوبری کیبورد (Keyboard Navigation)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Tab
                </code>{" "}
                — حرکت بین عناصر قابل فوکوس (چک‌باکس‌ها، دکمه‌های مرتب‌سازی،
                منوی عملیات)
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space / Enter
                </code>{" "}
                — فعال‌سازی چک‌باکس انتخاب ردیف
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Keys
                </code>{" "}
                — ناوبری در منوی کشویی عملیات
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌های ARIA
            </h3>
            <p>
              چک‌باکس‌های انتخاب ردیف دارای{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              هستند. دکمه‌های صفحه‌بندی با{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                sr-only
              </code>{" "}
              توضیحات مناسبی دارند. ردیف‌های انتخاب‌شده با{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                data-state=&quot;selected&quot;
              </code>{" "}
              مشخص می‌شوند.
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
              جداسازی ستون‌ها و جدول (Separate Columns and Table)
            </h3>
            <p className="text-muted-foreground">
              تعریف ستون‌ها را در فایل جداگانه‌ای مانند{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                columns.tsx
              </code>{" "}
              قرار دهید و کامپوننت DataTable را در فایل{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                data-table.tsx
              </code>{" "}
              بنویسید. صفحه سرور فقط داده‌ها را دریافت و به DataTable پاس
              می‌دهد.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              استفاده از فرمت فارسی برای اعداد (Persian Number Formatting)
            </h3>
            <p className="text-muted-foreground">
              برای نمایش مبالغ و اعداد از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                Intl.NumberFormat(&quot;fa-IR&quot;)
              </code>{" "}
              استفاده کنید تا اعداد با فرمت فارسی نمایش داده شوند.
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
              استفاده کنید. برای فاصله‌گذاری از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                ms-
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                me-
              </code>{" "}
              به جای{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                ml-
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                mr-
              </code>{" "}
              استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              قابلیت استفاده مجدد (Reusability)
            </h3>
            <p className="text-muted-foreground">
              اگر جدول مشابهی را در چند صفحه استفاده می‌کنید، DataTable را به
              یک کامپوننت مشترک در{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                components/ui/data-table.tsx
              </code>{" "}
              انتقال دهید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              ایمیل‌ها به صورت LTR (LTR Emails)
            </h3>
            <p className="text-muted-foreground">
              محتوای ایمیل و آدرس‌های وب را با{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                dir=&quot;ltr&quot;
              </code>{" "}
              نمایش دهید تا ترتیب کاراکترها صحیح باشد.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <p className="text-muted-foreground mb-4">
          ساختار پروژه پیشنهادی برای استفاده از Data Table. فایل ستون‌ها و
          کامپوننت DataTable در فایل‌های جداگانه قرار می‌گیرند و صفحه سرور فقط
          داده‌ها را دریافت و پاس می‌دهد.
        </p>
        <InlineCodeBlock code={usageCode} />
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="قالب‌بندی سلول سفارشی"
          titleEn="Custom Cell Formatting"
          description="می‌توانید با تابع cell در تعریف ستون، محتوای هر سلول را سفارشی کنید."
          code={`const columns: ColumnDef<Payment>[] = [
  {
    accessorKey: "amount",
    header: () => <div className="text-end">مبلغ</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));
      const formatted = new Intl.NumberFormat("fa-IR").format(amount);
      return (
        <div className="text-end font-medium">{formatted} تومان</div>
      );
    },
  },
  {
    accessorKey: "status",
    header: "وضعیت",
    cell: ({ row }) => {
      const status = row.getValue("status") as string;
      const variantMap = {
        "موفق": "default",
        "در انتظار": "secondary",
        "ناموفق": "destructive",
        "در حال پردازش": "outline",
      };
      return <Badge variant={variantMap[status]}>{status}</Badge>;
    },
  },
];`}
          previewCentered={false}
        >
          <div className="w-full overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b">
                  <th className="h-10 px-2 text-start font-medium">وضعیت</th>
                  <th className="h-10 px-2 text-end font-medium">مبلغ</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="p-2">
                    <span className="inline-flex items-center rounded-full border border-transparent bg-primary px-2.5 py-0.5 text-xs font-semibold text-primary-foreground">
                      موفق
                    </span>
                  </td>
                  <td className="p-2 text-end font-medium">
                    ۳۱۶,۰۰۰ تومان
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="p-2">
                    <span className="inline-flex items-center rounded-full border border-transparent bg-destructive px-2.5 py-0.5 text-xs font-semibold text-destructive-foreground">
                      ناموفق
                    </span>
                  </td>
                  <td className="p-2 text-end font-medium">
                    ۷۲۱,۰۰۰ تومان
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </SubExample>
        <SubExample
          title="عملیات ردیف"
          titleEn="Row Actions"
          description="با استفاده از DropdownMenu می‌توانید منوی عملیات برای هر ردیف ایجاد کنید."
          code={`{
  id: "actions",
  enableHiding: false,
  cell: ({ row }) => {
    const payment = row.original;
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" className="h-8 w-8 p-0">
            <span className="sr-only">باز کردن منو</span>
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          <DropdownMenuLabel>عملیات</DropdownMenuLabel>
          <DropdownMenuItem
            onClick={() =>
              navigator.clipboard.writeText(payment.id)
            }
          >
            کپی شناسه پرداخت
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>مشاهده مشتری</DropdownMenuItem>
          <DropdownMenuItem>جزئیات پرداخت</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  },
}`}
          previewCentered={false}
        >
          <div className="w-full flex items-center justify-center p-4">
            <p className="text-sm text-muted-foreground">
              مثال عملی را در جدول کامل بالا مشاهده کنید — ستون آخر هر ردیف
              شامل منوی عملیات است.
            </p>
          </div>
        </SubExample>
      </ComponentExampleGroup>
    </div>
  );
}
