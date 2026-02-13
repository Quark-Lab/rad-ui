"use client";

import { Toggle } from "@/registry/web/ui";
import {
  Bold,
  Italic,
  Underline,
  AlignLeft,
  AlignCenter,
  AlignRight,
} from "lucide-react";

export default function ToggleDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">دکمه دوحالته (Toggle)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت دکمه دوحالته که می‌تواند روشن یا خاموش باشد، با پشتیبانی کامل
          از RTL و حالت تاریک
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quarklab/rad-ui add toggle`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
          <Toggle aria-label="Toggle italic">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle bold">
            <Bold className="h-4 w-4" />
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="h-4 w-4" />
          </Toggle>
        </div>
      </section>

      {/* Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">انواع (Variants)</h2>
        <div className="space-y-6">
          {/* Default Variant */}
          <div>
            <h3 className="text-lg font-medium mb-4">پیش‌فرض (Default)</h3>
            <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
              <Toggle variant="default" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="default" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="default" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          {/* Outline Variant */}
          <div>
            <h3 className="text-lg font-medium mb-4">حاشیه‌دار (Outline)</h3>
            <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
              <Toggle variant="outline" aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle underline">
                <Underline className="h-4 w-4" />
              </Toggle>
            </div>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">اندازه‌ها (Sizes)</h2>
        <div className="flex flex-wrap items-center gap-4 p-8 rounded-lg bg-card border border-border">
          <Toggle size="sm" aria-label="Toggle small">
            <Italic className="h-3 w-3" />
          </Toggle>
          <Toggle size="md" aria-label="Toggle medium">
            <Italic className="h-4 w-4" />
          </Toggle>
          <Toggle size="lg" aria-label="Toggle large">
            <Italic className="h-5 w-5" />
          </Toggle>
        </div>
      </section>

      {/* With Text */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با متن (With Text)</h2>
        <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
          <Toggle aria-label="Toggle italic">
            <Italic className="ms-2 h-4 w-4" />
            کج
          </Toggle>
          <Toggle aria-label="Toggle bold">
            <Bold className="ms-2 h-4 w-4" />
            پررنگ
          </Toggle>
          <Toggle aria-label="Toggle underline">
            <Underline className="ms-2 h-4 w-4" />
            زیرخط
          </Toggle>
        </div>
      </section>

      {/* Alignment Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال تراز متن (Text Alignment)
        </h2>
        <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
          <Toggle variant="outline" aria-label="Align right">
            <AlignRight className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Align center">
            <AlignCenter className="h-4 w-4" />
          </Toggle>
          <Toggle variant="outline" aria-label="Align left">
            <AlignLeft className="h-4 w-4" />
          </Toggle>
        </div>
      </section>

      {/* States */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">حالت‌ها (States)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">عادی (Normal)</h3>
            <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
              <Toggle aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">غیرفعال (Disabled)</h3>
            <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
              <Toggle disabled aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" disabled aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-medium mb-4">پیش‌فرض فعال (Default On)</h3>
            <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
              <Toggle defaultPressed aria-label="Toggle italic">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" defaultPressed aria-label="Toggle bold">
                <Bold className="h-4 w-4" />
              </Toggle>
            </div>
          </div>
        </div>
      </section>

      {/* All Combinations */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">ترکیبات (Combinations)</h2>
        <div className="space-y-8">
          {/* Default with all sizes */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              پیش‌فرض - تمام اندازه‌ها
            </h3>
            <div className="flex flex-wrap items-center gap-4 p-8 rounded-lg bg-card border border-border">
              <Toggle variant="default" size="sm" aria-label="Small toggle">
                <Italic className="h-3 w-3" />
              </Toggle>
              <Toggle variant="default" size="md" aria-label="Medium toggle">
                <Italic className="h-4 w-4" />
              </Toggle>
              <Toggle variant="default" size="lg" aria-label="Large toggle">
                <Italic className="h-5 w-5" />
              </Toggle>
            </div>
          </div>

          {/* Outline with all sizes */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              حاشیه‌دار - تمام اندازه‌ها
            </h3>
            <div className="flex flex-wrap items-center gap-4 p-8 rounded-lg bg-card border border-border">
              <Toggle variant="outline" size="sm" aria-label="Small toggle">
                <Bold className="h-3 w-3" />
              </Toggle>
              <Toggle variant="outline" size="md" aria-label="Medium toggle">
                <Bold className="h-4 w-4" />
              </Toggle>
              <Toggle variant="outline" size="lg" aria-label="Large toggle">
                <Bold className="h-5 w-5" />
              </Toggle>
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
          <div className="flex flex-wrap gap-4">
            <Toggle
              variant="outline"
              onPressedChange={(pressed) =>
                console.log("Italic:", pressed ? "فعال" : "غیرفعال")
              }
              aria-label="Toggle italic"
            >
              <Italic className="ms-2 h-4 w-4" />
              کج
            </Toggle>
            <Toggle
              variant="outline"
              onPressedChange={(pressed) =>
                console.log("Bold:", pressed ? "فعال" : "غیرفعال")
              }
              aria-label="Toggle bold"
            >
              <Bold className="ms-2 h-4 w-4" />
              پررنگ
            </Toggle>
            <Toggle
              variant="outline"
              onPressedChange={(pressed) =>
                console.log("Underline:", pressed ? "فعال" : "غیرفعال")
              }
              aria-label="Toggle underline"
            >
              <Underline className="ms-2 h-4 w-4" />
              زیرخط
            </Toggle>
          </div>
          <p className="text-sm text-muted-foreground mt-4">
            وضعیت دکمه‌ها را در کنسول مشاهده کنید
          </p>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>
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
                  <code>variant</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"default" | "outline"</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"default"</code>
                </td>
                <td className="p-4">نوع ظاهری دکمه</td>
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
                <td className="p-4">اندازه دکمه</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>pressed</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">وضعیت فعال/غیرفعال (کنترل شده)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>defaultPressed</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>false</code>
                </td>
                <td className="p-4">وضعیت اولیه (غیرکنترل شده)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>onPressedChange</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>(pressed: boolean) =&gt; void</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">تابع فراخوانی هنگام تغییر وضعیت</td>
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
                <td className="p-4">غیرفعال کردن دکمه</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>className</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">کلاس‌های CSS سفارشی</td>
              </tr>
              <tr>
                <td className="p-4" dir="ltr">
                  <code>aria-label</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">برچسب دسترسی‌پذیری (ضروری)</td>
              </tr>
            </tbody>
          </table>
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
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space
                </code>{" "}
                - تغییر وضعیت دکمه
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                - تغییر وضعیت دکمه
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت به دکمه بعدی
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ARIA برچسب‌های (ARIA Labels)
            </h3>
            <p>
              همیشه از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              استفاده کنید تا کاربران خوانندگان صفحه بتوانند هدف دکمه را درک
              کنند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              وضعیت (State)
            </h3>
            <p>
              دکمه به‌طور خودکار ویژگی{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                data-state
              </code>{" "}
              را با مقادیر "on" یا "off" تنظیم می‌کند
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
              انتخاب نوع مناسب (Variant Selection)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Default:</strong> برای
                استفاده عمومی در نوارهای ابزار
              </li>
              <li>
                <strong className="text-foreground">Outline:</strong> برای تمایز
                بیشتر در رابط کاربری
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              آیکون‌ها در RTL (Icons in RTL)
            </h3>
            <p className="text-muted-foreground">
              از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">ms-2</code>{" "}
              برای آیکون در سمت راست متن استفاده کنید تا در RTL صحیح نمایش
              داده شود.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              دسترسی‌پذیری (Accessibility)
            </h3>
            <p className="text-muted-foreground">
              همیشه{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              را برای دکمه‌های Toggle تنظیم کنید، به‌ویژه زمانی که فقط آیکون
              دارند.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی (Grouping)</h3>
            <p className="text-muted-foreground">
              برای دکمه‌های مرتبط مانند تراز متن یا قالب‌بندی، از گروه‌بندی
              بصری با فاصله‌گذاری مناسب استفاده کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import { Toggle } from "@/components/ui/toggle";
import { Italic, Bold } from "lucide-react";

export default function MyComponent() {
  return (
    <div>
      {/* Basic */}
      <Toggle aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>

      {/* With text */}
      <Toggle aria-label="Toggle bold">
        <Bold className="ms-2 h-4 w-4" />
        پررنگ
      </Toggle>

      {/* Outline variant */}
      <Toggle variant="outline" aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>

      {/* Different sizes */}
      <Toggle size="sm" aria-label="Small">
        <Italic className="h-3 w-3" />
      </Toggle>
      <Toggle size="lg" aria-label="Large">
        <Italic className="h-5 w-5" />
      </Toggle>

      {/* Controlled */}
      <Toggle
        pressed={isItalic}
        onPressedChange={setIsItalic}
        aria-label="Toggle italic"
      >
        <Italic className="h-4 w-4" />
      </Toggle>

      {/* Default pressed */}
      <Toggle defaultPressed aria-label="Toggle bold">
        <Bold className="h-4 w-4" />
      </Toggle>

      {/* Disabled */}
      <Toggle disabled aria-label="Toggle italic">
        <Italic className="h-4 w-4" />
      </Toggle>
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
            <h3 className="font-medium mb-3">استایل سفارشی (Custom Styling)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Toggle className="data-[state=on]:bg-green-500 data-[state=on]:text-white">
  سفارشی
</Toggle>`}</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3">
              نوار ابزار قالب‌بندی (Formatting Toolbar)
            </h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`const [formatting, setFormatting] = useState({
  bold: false,
  italic: false,
  underline: false
});

<div className="flex gap-1 p-1 border rounded-lg">
  <Toggle
    pressed={formatting.bold}
    onPressedChange={(pressed) =>
      setFormatting({ ...formatting, bold: pressed })
    }
    variant="outline"
    size="sm"
    aria-label="Toggle bold"
  >
    <Bold className="h-4 w-4" />
  </Toggle>
  <Toggle
    pressed={formatting.italic}
    onPressedChange={(pressed) =>
      setFormatting({ ...formatting, italic: pressed })
    }
    variant="outline"
    size="sm"
    aria-label="Toggle italic"
  >
    <Italic className="h-4 w-4" />
  </Toggle>
  <Toggle
    pressed={formatting.underline}
    onPressedChange={(pressed) =>
      setFormatting({ ...formatting, underline: pressed })
    }
    variant="outline"
    size="sm"
    aria-label="Toggle underline"
  >
    <Underline className="h-4 w-4" />
  </Toggle>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
