"use client";

import { Skeleton } from "@/registry/web/ui";

export default function SkeletonDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">اسکلتون (Skeleton)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش‌دهنده بارگذاری برای محتوا
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quarklab/rad-ui add skeleton`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <p className="text-muted-foreground mb-4">
          Skeleton برای نمایش حالت بارگذاری محتوا استفاده می‌شود
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Skeleton className="h-4 w-[250px]" />
            <Skeleton className="h-4 w-[200px]" />
          </div>
        </div>
      </section>

      {/* Common Shapes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          اشکال رایج (Common Shapes)
        </h2>
        <p className="text-muted-foreground mb-4">
          با استفاده از className می‌توانید اندازه و شکل را تغییر دهید
        </p>
        <div className="space-y-6">
          {/* Circle */}
          <div>
            <h3 className="text-lg font-medium mb-3">دایره (Circle)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-4">
                <Skeleton className="h-12 w-12 rounded-full" />
                <Skeleton className="h-16 w-16 rounded-full" />
                <Skeleton className="h-20 w-20 rounded-full" />
              </div>
            </div>
          </div>

          {/* Rectangle */}
          <div>
            <h3 className="text-lg font-medium mb-3">مستطیل (Rectangle)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-3">
                <Skeleton className="h-4 w-full" />
                <Skeleton className="h-4 w-5/6" />
                <Skeleton className="h-4 w-4/6" />
              </div>
            </div>
          </div>

          {/* Card */}
          <div>
            <h3 className="text-lg font-medium mb-3">کارت (Card)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Skeleton className="h-[125px] w-[250px] rounded-xl" />
            </div>
          </div>
        </div>
      </section>

      {/* Common Patterns */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          الگوهای رایج (Common Patterns)
        </h2>

        <div className="space-y-6">
          {/* Avatar with Text */}
          <div>
            <h3 className="text-lg font-medium mb-3">آواتار با متن</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center space-x-4 space-x-reverse">
                <Skeleton className="h-12 w-12 rounded-full" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-[250px]" />
                  <Skeleton className="h-4 w-[200px]" />
                </div>
              </div>
            </div>
          </div>

          {/* Card with Image */}
          <div>
            <h3 className="text-lg font-medium mb-3">کارت با تصویر</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex flex-col space-y-3 max-w-sm">
                <Skeleton className="h-[200px] w-full rounded-xl" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                </div>
              </div>
            </div>
          </div>

          {/* List Items */}
          <div>
            <h3 className="text-lg font-medium mb-3">آیتم‌های لیست</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-4">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex items-center space-x-4 space-x-reverse"
                  >
                    <Skeleton className="h-10 w-10 rounded" />
                    <div className="space-y-2 flex-1">
                      <Skeleton className="h-4 w-3/4" />
                      <Skeleton className="h-3 w-1/2" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های کاربردی (Practical Examples)
        </h2>

        <div className="space-y-6">
          {/* Example 1: Blog Post Loading */}
          <div>
            <h3 className="text-lg font-medium mb-4">بارگذاری پست وبلاگ</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-2xl space-y-4">
                <Skeleton className="h-8 w-3/4" />
                <div className="flex items-center space-x-2 space-x-reverse">
                  <Skeleton className="h-6 w-6 rounded-full" />
                  <Skeleton className="h-4 w-32" />
                  <Skeleton className="h-4 w-24" />
                </div>
                <Skeleton className="h-[200px] w-full rounded-lg" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: User Profile Loading */}
          <div>
            <h3 className="text-lg font-medium mb-4">بارگذاری پروفایل کاربر</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-md space-y-6">
                <div className="flex items-center space-x-4 space-x-reverse">
                  <Skeleton className="h-20 w-20 rounded-full" />
                  <div className="space-y-2 flex-1">
                    <Skeleton className="h-6 w-48" />
                    <Skeleton className="h-4 w-32" />
                  </div>
                </div>
                <div className="space-y-2">
                  <Skeleton className="h-4 w-full" />
                  <Skeleton className="h-4 w-5/6" />
                  <Skeleton className="h-4 w-4/6" />
                </div>
                <div className="flex gap-3">
                  <Skeleton className="h-10 flex-1 rounded-lg" />
                  <Skeleton className="h-10 flex-1 rounded-lg" />
                </div>
              </div>
            </div>
          </div>

          {/* Example 3: Product Cards Grid */}
          <div>
            <h3 className="text-lg font-medium mb-4">شبکه کارت محصول</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {[...Array(3)].map((_, i) => (
                  <div key={i} className="space-y-3">
                    <Skeleton className="h-[200px] w-full rounded-lg" />
                    <Skeleton className="h-4 w-3/4" />
                    <Skeleton className="h-4 w-1/2" />
                    <Skeleton className="h-8 w-20" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Example 4: Comment Section */}
          <div>
            <h3 className="text-lg font-medium mb-4">بخش نظرات</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-2xl space-y-6">
                {[...Array(3)].map((_, i) => (
                  <div
                    key={i}
                    className="flex space-x-4 space-x-reverse"
                  >
                    <Skeleton className="h-10 w-10 rounded-full flex-shrink-0" />
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center space-x-2 space-x-reverse">
                        <Skeleton className="h-4 w-24" />
                        <Skeleton className="h-3 w-16" />
                      </div>
                      <Skeleton className="h-4 w-full" />
                      <Skeleton className="h-4 w-5/6" />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Example 5: Dashboard Widgets */}
          <div>
            <h3 className="text-lg font-medium mb-4">ویجت‌های داشبورد</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className="p-4 rounded-lg border border-border space-y-3"
                  >
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-8 w-24" />
                    <Skeleton className="h-3 w-32" />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Example 6: Table Loading */}
          <div>
            <h3 className="text-lg font-medium mb-4">بارگذاری جدول</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-3">
                <div className="grid grid-cols-4 gap-4">
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                  <Skeleton className="h-8 w-full" />
                </div>
                {[...Array(5)].map((_, i) => (
                  <div key={i} className="grid grid-cols-4 gap-4">
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                    <Skeleton className="h-10 w-full" />
                  </div>
                ))}
              </div>
            </div>
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
                  <code>className</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">
                  کلاس‌های CSS سفارشی (برای تعیین اندازه و شکل)
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Best Practices */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          بهترین شیوه‌ها (Best Practices)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-semibold mb-3">کی از Skeleton استفاده کنیم؟</h3>
            <p className="text-muted-foreground">
              از Skeleton زمانی استفاده کنید که محتوا در حال بارگذاری است و
              می‌خواهید به کاربر نشان دهید که چیزی در حال اتفاق افتادن است. این
              باعث بهبود تجربه کاربری می‌شود
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تطابق با محتوای واقعی</h3>
            <p className="text-muted-foreground">
              سعی کنید اندازه و شکل Skeleton با محتوای واقعی که بارگذاری می‌شود
              مطابقت داشته باشد. این باعث کاهش جابجایی محتوا (layout shift)
              می‌شود
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">تعداد مناسب</h3>
            <p className="text-muted-foreground">
              تعداد Skeleton ها را متناسب با تعداد آیتم‌هایی که معمولاً نمایش
              داده می‌شود تنظیم کنید. برای لیست‌ها، 3-5 آیتم کافی است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">انیمیشن</h3>
            <p className="text-muted-foreground">
              انیمیشن pulse به صورت پیش‌فرض فعال است. این انیمیشن باعث
              می‌شود کاربر متوجه شود که محتوا در حال بارگذاری است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">دسترسی‌پذیری</h3>
            <p className="text-muted-foreground">
              در صورت نیاز، می‌توانید{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-busy="true"
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              را به کانتینر اضافه کنید
            </p>
          </div>
        </div>
      </section>

      {/* Code Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          نحوه استفاده (Usage Examples)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">پایه (Basic)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Skeleton } from "@/components/ui/skeleton";

<Skeleton className="h-4 w-[250px]" />`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">آواتار دایره‌ای</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Skeleton className="h-12 w-12 rounded-full" />`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">کارت</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<div className="flex flex-col space-y-3">
  <Skeleton className="h-[125px] w-[250px] rounded-xl" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">آواتار با متن</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<div className="flex items-center space-x-4">
  <Skeleton className="h-12 w-12 rounded-full" />
  <div className="space-y-2">
    <Skeleton className="h-4 w-[250px]" />
    <Skeleton className="h-4 w-[200px]" />
  </div>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">لیست</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<div className="space-y-4">
  {[...Array(3)].map((_, i) => (
    <div key={i} className="flex items-center space-x-4">
      <Skeleton className="h-10 w-10 rounded" />
      <div className="space-y-2 flex-1">
        <Skeleton className="h-4 w-3/4" />
        <Skeleton className="h-3 w-1/2" />
      </div>
    </div>
  ))}
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
