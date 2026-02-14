"use client";

import { Button } from "@/registry/web/ui";
import { Download, Heart, Send } from "lucide-react";

export default function ButtonDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">دکمه (Button)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت دکمه با پشتیبانی کامل از RTL و حالت تاریک
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quark-lab/rad-ui add button`}</code>
          </pre>
        </div>
      </section>

      {/* Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">انواع (Variants)</h2>
        <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
          <Button variant="default">پیش‌فرض</Button>
          <Button variant="destructive">حذف</Button>
          <Button variant="outline">حاشیه‌دار</Button>
          <Button variant="ghost">شبح</Button>
          <Button variant="link">لینک</Button>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">اندازه‌ها (Sizes)</h2>
        <div className="flex flex-wrap items-center gap-4 p-8 rounded-lg bg-card border border-border">
          <Button size="sm">کوچک</Button>
          <Button size="md">متوسط</Button>
          <Button size="lg">بزرگ</Button>
        </div>
      </section>

      {/* With Icons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با آیکون (With Icons)</h2>
        <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
          <Button>
            <Download className="ms-2 h-4 w-4" />
            دانلود
          </Button>
          <Button variant="outline">
            ارسال
            <Send className="me-2 h-4 w-4" />
          </Button>
          <Button variant="ghost">
            <Heart className="ms-2 h-4 w-4" />
            علاقه‌مندی
          </Button>
        </div>
      </section>

      {/* States */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">حالت‌ها (States)</h2>
        <div className="flex flex-wrap gap-4 p-8 rounded-lg bg-card border border-border">
          <Button>عادی</Button>
          <Button disabled>غیرفعال</Button>
        </div>
      </section>

      {/* All Variants with All Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">ترکیبات (Combinations)</h2>
        <div className="space-y-8">
          {/* Default Variant */}
          <div>
            <h3 className="text-lg font-medium mb-4">پیش‌فرض (Default)</h3>
            <div className="flex flex-wrap items-center gap-4 p-8 rounded-lg bg-card border border-border">
              <Button variant="default" size="sm">
                کوچک
              </Button>
              <Button variant="default" size="md">
                متوسط
              </Button>
              <Button variant="default" size="lg">
                بزرگ
              </Button>
            </div>
          </div>

          {/* Outline Variant */}
          <div>
            <h3 className="text-lg font-medium mb-4">حاشیه‌دار (Outline)</h3>
            <div className="flex flex-wrap items-center gap-4 p-8 rounded-lg bg-card border border-border">
              <Button variant="outline" size="sm">
                کوچک
              </Button>
              <Button variant="outline" size="md">
                متوسط
              </Button>
              <Button variant="outline" size="lg">
                بزرگ
              </Button>
            </div>
          </div>

          {/* Ghost Variant */}
          <div>
            <h3 className="text-lg font-medium mb-4">شبح (Ghost)</h3>
            <div className="flex flex-wrap items-center gap-4 p-8 rounded-lg bg-card border border-border">
              <Button variant="ghost" size="sm">
                کوچک
              </Button>
              <Button variant="ghost" size="md">
                متوسط
              </Button>
              <Button variant="ghost" size="lg">
                بزرگ
              </Button>
            </div>
          </div>

          {/* Link Variant */}
          <div>
            <h3 className="text-lg font-medium mb-4">لینک (Link)</h3>
            <div className="flex flex-wrap items-center gap-4 p-8 rounded-lg bg-card border border-border">
              <Button variant="link" size="sm">
                کوچک
              </Button>
              <Button variant="link" size="md">
                متوسط
              </Button>
              <Button variant="link" size="lg">
                بزرگ
              </Button>
            </div>
          </div>

          {/* Destructive Variant */}
          <div>
            <h3 className="text-lg font-medium mb-4">حذف (Destructive)</h3>
            <div className="flex flex-wrap items-center gap-4 p-8 rounded-lg bg-card border border-border">
              <Button variant="destructive" size="sm">
                کوچک
              </Button>
              <Button variant="destructive" size="md">
                متوسط
              </Button>
              <Button variant="destructive" size="lg">
                بزرگ
              </Button>
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
            <Button onClick={() => alert("دکمه کلیک شد!")}>کلیک کن</Button>
            <Button
              variant="outline"
              onClick={() => console.log("Button clicked!")}
            >
              لاگ در کنسول
            </Button>
            <Button
              variant="ghost"
              onClick={() => (window.location.href = "/")}
            >
              بازگشت به خانه
            </Button>
          </div>
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
                  <code>
                    "default" | "destructive" | "outline" | "ghost" | "link"
                  </code>
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
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>onClick</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>() =&gt; void</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">تابع رویداد کلیک</td>
              </tr>
              <tr>
                <td className="p-4" dir="ltr">
                  <code>...props</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>HTMLButtonAttributes</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">تمام ویژگی‌های استاندارد HTML button</td>
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
                  Enter
                </code>{" "}
                یا{" "}
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space
                </code>{" "}
                - فعال کردن دکمه
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت به دکمه بعدی
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              فوکوس (Focus)
            </h3>
            <p>دکمه‌ها دارای حلقه فوکوس واضح برای کاربران کیبورد هستند</p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              غیرفعال (Disabled)
            </h3>
            <p>
              دکمه‌های غیرفعال از ویژگی{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                disabled
              </code>{" "}
              استفاده می‌کنند و برای خوانندگان صفحه قابل شناسایی هستند
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
                اقدامات اصلی و مهم (مثل ثبت فرم)
              </li>
              <li>
                <strong className="text-foreground">Destructive:</strong> برای
                اقدامات خطرناک (مثل حذف، لغو دائم)
              </li>
              <li>
                <strong className="text-foreground">Outline:</strong> برای
                اقدامات ثانویه (مثل لغو یا بازگشت)
              </li>
              <li>
                <strong className="text-foreground">Ghost:</strong> برای اقدامات
                کم‌اهمیت یا تکراری
              </li>
              <li>
                <strong className="text-foreground">Link:</strong> برای
                لینک‌هایی که مانند دکمه عمل می‌کنند
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
              برای آیکون در سمت راست متن و
              <code className="text-sm bg-muted px-2 py-1 rounded mx-1">
                me-2
              </code>{" "}
              برای آیکون در سمت چپ متن استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">متن دکمه (Button Text)</h3>
            <p className="text-muted-foreground">
              از فعل‌های واضح و کوتاه استفاده کنید. به جای "کلیک کنید" از
              "ارسال"، "ذخیره" یا "دانلود" استفاده کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return (
    <div>
      <Button>پیش‌فرض</Button>
      <Button variant="destructive">حذف</Button>
      <Button variant="outline">حاشیه‌دار</Button>
      <Button variant="ghost">شبح</Button>
      <Button variant="link">لینک</Button>

      <Button size="sm">کوچک</Button>
      <Button size="md">متوسط</Button>
      <Button size="lg">بزرگ</Button>

      <Button disabled>غیرفعال</Button>
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
                <code>{`<Button className="bg-gradient-to-r from-purple-500 to-pink-500">
  دکمه رنگی
</Button>`}</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3">با رویداد (With Event Handler)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Button onClick={() => {
  console.log("کلیک شد!");
  // انجام عملیات
}}>
  کلیک کن
</Button>`}</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3">فقط آیکون (Icon Only)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Heart } from "lucide-react";

<Button size="sm" className="aspect-square p-0">
  <Heart className="h-4 w-4" />
</Button>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
