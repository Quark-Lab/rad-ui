"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/web/ui";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
  LayoutGrid,
  LayoutList,
  Rows3,
} from "lucide-react";

export default function ToggleGroupDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          گروه دکمه دوحالته (Toggle Group)
        </h1>
        <p className="text-lg text-muted-foreground">
          مجموعه‌ای از دکمه‌های دوحالته که می‌توانند روشن یا خاموش باشند، با
          پشتیبانی از انتخاب تکی یا چندگانه
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quark-lab/rad-ui add toggle-group`}</code>
          </pre>
        </div>
      </section>

      {/* Single Selection */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          انتخاب تکی (Single Selection)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <ToggleGroup type="single" defaultValue="center">
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="text-sm text-muted-foreground mt-4">
            فقط یک گزینه می‌تواند در یک زمان انتخاب شود
          </p>
        </div>
      </section>

      {/* Multiple Selection */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          انتخاب چندگانه (Multiple Selection)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <ToggleGroup type="multiple" defaultValue={["bold"]}>
            <ToggleGroupItem value="bold" aria-label="Toggle bold">
              <Bold className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="italic" aria-label="Toggle italic">
              <Italic className="h-4 w-4" />
            </ToggleGroupItem>
            <ToggleGroupItem value="underline" aria-label="Toggle underline">
              <Underline className="h-4 w-4" />
            </ToggleGroupItem>
          </ToggleGroup>
          <p className="text-sm text-muted-foreground mt-4">
            چند گزینه می‌توانند همزمان انتخاب شوند
          </p>
        </div>
      </section>

      {/* Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">انواع (Variants)</h2>
        <div className="space-y-6">
          {/* Default Variant */}
          <div>
            <h3 className="text-lg font-medium mb-4">پیش‌فرض (Default)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <ToggleGroup type="single" variant="default">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          {/* Outline Variant */}
          <div>
            <h3 className="text-lg font-medium mb-4">حاشیه‌دار (Outline)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <ToggleGroup type="single" variant="outline">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">اندازه‌ها (Sizes)</h2>
        <div className="space-y-6">
          {/* Small */}
          <div>
            <h3 className="text-lg font-medium mb-4">کوچک (Small)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <ToggleGroup type="single" size="sm" variant="outline">
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <LayoutGrid className="h-3 w-3" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List view">
                  <LayoutList className="h-3 w-3" />
                </ToggleGroupItem>
                <ToggleGroupItem value="rows" aria-label="Rows view">
                  <Rows3 className="h-3 w-3" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          {/* Medium */}
          <div>
            <h3 className="text-lg font-medium mb-4">متوسط (Medium)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <ToggleGroup type="single" size="md" variant="outline">
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <LayoutGrid className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List view">
                  <LayoutList className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="rows" aria-label="Rows view">
                  <Rows3 className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          {/* Large */}
          <div>
            <h3 className="text-lg font-medium mb-4">بزرگ (Large)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <ToggleGroup type="single" size="lg" variant="outline">
                <ToggleGroupItem value="grid" aria-label="Grid view">
                  <LayoutGrid className="h-5 w-5" />
                </ToggleGroupItem>
                <ToggleGroupItem value="list" aria-label="List view">
                  <LayoutList className="h-5 w-5" />
                </ToggleGroupItem>
                <ToggleGroupItem value="rows" aria-label="Rows view">
                  <Rows3 className="h-5 w-5" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </section>

      {/* With Text */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با متن (With Text)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <ToggleGroup type="single" variant="outline" defaultValue="center">
            <ToggleGroupItem value="right" aria-label="Align right">
              <AlignRight className="ms-2 h-4 w-4" />
              راست
            </ToggleGroupItem>
            <ToggleGroupItem value="center" aria-label="Align center">
              <AlignCenter className="ms-2 h-4 w-4" />
              وسط
            </ToggleGroupItem>
            <ToggleGroupItem value="left" aria-label="Align left">
              <AlignLeft className="ms-2 h-4 w-4" />
              چپ
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
      </section>

      {/* Disabled State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          حالت غیرفعال (Disabled State)
        </h2>
        <div className="space-y-6">
          {/* Entire Group Disabled */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              غیرفعال کردن کل گروه (Entire Group)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <ToggleGroup type="single" variant="outline" disabled>
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic">
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>

          {/* Individual Items Disabled */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              غیرفعال کردن اقلام جداگانه (Individual Items)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <ToggleGroup type="single" variant="outline">
                <ToggleGroupItem value="bold" aria-label="Bold">
                  <Bold className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="italic" aria-label="Italic" disabled>
                  <Italic className="h-4 w-4" />
                </ToggleGroupItem>
                <ToggleGroupItem value="underline" aria-label="Underline">
                  <Underline className="h-4 w-4" />
                </ToggleGroupItem>
              </ToggleGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Interactive Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال تعاملی (Interactive Example)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-4">
            <ToggleGroup
              type="multiple"
              variant="outline"
              onValueChange={(value) =>
                console.log("Selected formatting:", value)
              }
            >
              <ToggleGroupItem value="bold" aria-label="Bold">
                <Bold className="ms-2 h-4 w-4" />
                پررنگ
              </ToggleGroupItem>
              <ToggleGroupItem value="italic" aria-label="Italic">
                <Italic className="ms-2 h-4 w-4" />
                کج
              </ToggleGroupItem>
              <ToggleGroupItem value="underline" aria-label="Underline">
                <Underline className="ms-2 h-4 w-4" />
                زیرخط
              </ToggleGroupItem>
            </ToggleGroup>
            <p className="text-sm text-muted-foreground">
              گزینه‌های انتخاب شده را در کنسول مشاهده کنید
            </p>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        {/* ToggleGroup Props */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">ToggleGroup</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-right p-4 font-semibold">نوع (Type)</th>
                  <th className="text-right p-4 font-semibold">
                    پیش‌فرض (Default)
                  </th>
                  <th className="text-right p-4 font-semibold">
                    توضیحات (Description)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>type</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>"single" | "multiple"</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>-</code>
                  </td>
                  <td className="p-4">نوع انتخاب (تکی یا چندگانه)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>variant</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>"default" | "outline"</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>"default"</code>
                  </td>
                  <td className="p-4">نوع ظاهری گروه</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>size</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>"sm" | "md" | "lg"</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>"md"</code>
                  </td>
                  <td className="p-4">اندازه گروه</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>value</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>string | string[]</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">مقدار کنترل شده</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>defaultValue</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>string | string[]</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">مقدار پیش‌فرض (غیرکنترل شده)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>onValueChange</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>(value) =&gt; void</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">تابع فراخوانی هنگام تغییر مقدار</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>disabled</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>false</code>
                  </td>
                  <td className="p-4">غیرفعال کردن کل گروه</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* ToggleGroupItem Props */}
        <div>
          <h3 className="text-xl font-semibold mb-4">ToggleGroupItem</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-right p-4 font-semibold">نوع (Type)</th>
                  <th className="text-right p-4 font-semibold">
                    پیش‌فرض (Default)
                  </th>
                  <th className="text-right p-4 font-semibold">
                    توضیحات (Description)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>value</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>string</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>-</code>
                  </td>
                  <td className="p-4">مقدار یکتای این آیتم</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>disabled</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>false</code>
                  </td>
                  <td className="p-4">غیرفعال کردن این آیتم</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>aria-label</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>string</code>
                  </td>
                  <td className="p-4">-</td>
                  <td className="p-4">برچسب دسترسی‌پذیری</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

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
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت به داخل/خارج گروه
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space
                </code>{" "}
                یا{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                - تغییر وضعیت آیتم
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Keys
                </code>{" "}
                - حرکت بین آیتم‌ها
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Home</code>{" "}
                - رفتن به اولین آیتم
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">End</code>{" "}
                - رفتن به آخرین آیتم
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ARIA برچسب‌های (ARIA Labels)
            </h3>
            <p>
              برای هر آیتم از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              استفاده کنید تا هدف واضح باشد
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">Roving Focus</h3>
            <p>
              گروه از الگوی roving tabindex برای مدیریت فوکوس استفاده می‌کند که
              تجربه کیبورد را بهبود می‌بخشد
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
              انتخاب نوع مناسب (Type Selection)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Single:</strong> زمانی که
                فقط یک گزینه باید انتخاب شود (مثل تراز متن، نمای صفحه)
              </li>
              <li>
                <strong className="text-foreground">Multiple:</strong> زمانی که
                چندین گزینه می‌توانند همزمان فعال باشند (مثل قالب‌بندی متن)
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">دسترسی‌پذیری (Accessibility)</h3>
            <p className="text-muted-foreground">
              همیشه{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              معنادار برای هر آیتم فراهم کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">آیکون‌ها (Icons)</h3>
            <p className="text-muted-foreground">
              از آیکون‌های واضح و شناخته شده استفاده کنید که هدف هر آیتم را مشخص
              کنند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی (Grouping)</h3>
            <p className="text-muted-foreground">
              آیتم‌های مرتبط را در یک گروه قرار دهید. برای دسته‌های مختلف از
              گروه‌های جداگانه استفاده کنید
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export default function MyComponent() {
  return (
    <div>
      {/* Single selection */}
      <ToggleGroup type="single" defaultValue="center">
        <ToggleGroupItem value="left" aria-label="Align left">
          <AlignLeft className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="center" aria-label="Align center">
          <AlignCenter className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="right" aria-label="Align right">
          <AlignRight className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      {/* Multiple selection */}
      <ToggleGroup type="multiple">
        <ToggleGroupItem value="bold" aria-label="Bold">
          <Bold className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="italic" aria-label="Italic">
          <Italic className="h-4 w-4" />
        </ToggleGroupItem>
        <ToggleGroupItem value="underline" aria-label="Underline">
          <Underline className="h-4 w-4" />
        </ToggleGroupItem>
      </ToggleGroup>

      {/* With variant and size */}
      <ToggleGroup type="single" variant="outline" size="lg">
        <ToggleGroupItem value="grid">Grid</ToggleGroupItem>
        <ToggleGroupItem value="list">List</ToggleGroupItem>
      </ToggleGroup>

      {/* Controlled */}
      <ToggleGroup
        type="single"
        value={alignment}
        onValueChange={setAlignment}
      >
        <ToggleGroupItem value="left">Left</ToggleGroupItem>
        <ToggleGroupItem value="center">Center</ToggleGroupItem>
        <ToggleGroupItem value="right">Right</ToggleGroupItem>
      </ToggleGroup>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Advanced Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های پیشرفته (Advanced Examples)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">
              نوار ابزار قالب‌بندی کامل (Full Formatting Toolbar)
            </h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`const [formatting, setFormatting] = useState([]);
const [alignment, setAlignment] = useState("right");

<div className="flex gap-2 p-2 border rounded-lg">
  <ToggleGroup
    type="multiple"
    value={formatting}
    onValueChange={setFormatting}
    variant="outline"
    size="sm"
  >
    <ToggleGroupItem value="bold" aria-label="Bold">
      <Bold className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="italic" aria-label="Italic">
      <Italic className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="underline" aria-label="Underline">
      <Underline className="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>

  <div className="w-px bg-border" />

  <ToggleGroup
    type="single"
    value={alignment}
    onValueChange={setAlignment}
    variant="outline"
    size="sm"
  >
    <ToggleGroupItem value="right" aria-label="Align right">
      <AlignRight className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="center" aria-label="Align center">
      <AlignCenter className="h-4 w-4" />
    </ToggleGroupItem>
    <ToggleGroupItem value="left" aria-label="Align left">
      <AlignLeft className="h-4 w-4" />
    </ToggleGroupItem>
  </ToggleGroup>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
