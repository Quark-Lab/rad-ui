"use client";

import { Spinner, Button } from "@rad-ui/ui";
import { useState } from "react";

export default function SpinnerDemo() {
  const [isLoading, setIsLoading] = useState(false);

  const handleClick = () => {
    setIsLoading(true);
    setTimeout(() => setIsLoading(false), 2000);
  };

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">اسپینر (Spinner)</h1>
        <p className="text-lg text-muted-foreground">
          نشان‌دهنده بارگذاری برای عملیات‌های ناهمزمان
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npm install @rad-ui/ui`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <p className="text-muted-foreground mb-4">
          Spinner برای نمایش حالت بارگذاری استفاده می‌شود
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center justify-center">
            <Spinner />
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">اندازه‌ها (Sizes)</h2>
        <p className="text-muted-foreground mb-4">
          چهار اندازه مختلف برای موارد مختلف
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-end gap-8 justify-center">
            <div className="flex flex-col items-center gap-2">
              <Spinner size="sm" />
              <span className="text-xs text-muted-foreground">کوچک</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="default" />
              <span className="text-xs text-muted-foreground">پیش‌فرض</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="lg" />
              <span className="text-xs text-muted-foreground">بزرگ</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner size="xl" />
              <span className="text-xs text-muted-foreground">خیلی بزرگ</span>
            </div>
          </div>
        </div>
      </section>

      {/* Colors */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">رنگ‌ها (Colors)</h2>
        <p className="text-muted-foreground mb-4">
          می‌توانید رنگ اسپینر را با className تغییر دهید
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-8 justify-center flex-wrap">
            <div className="flex flex-col items-center gap-2">
              <Spinner className="text-primary" />
              <span className="text-xs text-muted-foreground">Primary</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="text-destructive" />
              <span className="text-xs text-muted-foreground">Destructive</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="text-blue-500" />
              <span className="text-xs text-muted-foreground">Blue</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="text-green-500" />
              <span className="text-xs text-muted-foreground">Green</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="text-purple-500" />
              <span className="text-xs text-muted-foreground">Purple</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Spinner className="text-orange-500" />
              <span className="text-xs text-muted-foreground">Orange</span>
            </div>
          </div>
        </div>
      </section>

      {/* With Buttons */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          با دکمه (With Button)
        </h2>
        <p className="text-muted-foreground mb-4">
          نمایش اسپینر در دکمه‌های در حال بارگذاری
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-4 flex-wrap justify-center">
            <Button disabled>
              <Spinner size="sm" className="me-2" />
              در حال بارگذاری...
            </Button>
            <Button variant="outline" onClick={handleClick} disabled={isLoading}>
              {isLoading ? (
                <>
                  <Spinner size="sm" className="me-2" />
                  لطفاً صبر کنید
                </>
              ) : (
                "کلیک کنید"
              )}
            </Button>
            <Button variant="destructive" disabled>
              <Spinner size="sm" className="me-2" />
              در حال حذف...
            </Button>
          </div>
        </div>
      </section>

      {/* With Text */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با متن (With Text)</h2>
        <p className="text-muted-foreground mb-4">
          ترکیب اسپینر با متن توضیحی
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-4 max-w-md mx-auto">
            <div className="flex items-center gap-3">
              <Spinner size="sm" />
              <span className="text-sm">در حال بارگذاری...</span>
            </div>
            <div className="flex items-center gap-3">
              <Spinner size="default" className="text-primary" />
              <span>در حال پردازش درخواست شما</span>
            </div>
            <div className="flex items-center gap-3">
              <Spinner size="lg" className="text-blue-500" />
              <div>
                <p className="font-medium">لطفاً صبر کنید</p>
                <p className="text-sm text-muted-foreground">
                  این ممکن است چند لحظه طول بکشد
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Centered */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          وسط‌چین (Centered)
        </h2>
        <p className="text-muted-foreground mb-4">
          نمایش اسپینر در وسط صفحه یا کانتینر
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="h-40 flex items-center justify-center">
            <Spinner size="lg" />
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های کاربردی (Practical Examples)
        </h2>

        <div className="space-y-6">
          {/* Example 1: Loading Button */}
          <div>
            <h3 className="text-lg font-medium mb-4">دکمه بارگذاری</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-4 flex-wrap">
                <Button>
                  <Spinner size="sm" className="me-2" />
                  ارسال فرم
                </Button>
                <Button variant="outline">
                  <Spinner size="sm" className="me-2" />
                  ذخیره تغییرات
                </Button>
                <Button variant="ghost">
                  <Spinner size="sm" className="me-2" />
                  بارگذاری بیشتر
                </Button>
              </div>
            </div>
          </div>

          {/* Example 2: Full Page Loading */}
          <div>
            <h3 className="text-lg font-medium mb-4">بارگذاری صفحه کامل</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="h-64 flex flex-col items-center justify-center gap-4">
                <Spinner size="xl" className="text-primary" />
                <div className="text-center">
                  <p className="font-medium mb-1">در حال بارگذاری</p>
                  <p className="text-sm text-muted-foreground">
                    لطفاً چند لحظه صبر کنید...
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3: Inline Loading */}
          <div>
            <h3 className="text-lg font-medium mb-4">بارگذاری درون‌خطی</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-md space-y-4">
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">در حال آپلود فایل...</span>
                    <Spinner size="sm" />
                  </div>
                  <div className="mt-2 h-2 bg-background rounded-full overflow-hidden">
                    <div className="h-full bg-primary w-2/3 rounded-full" />
                  </div>
                </div>
                <div className="p-4 rounded-lg bg-muted/50">
                  <div className="flex items-center justify-between">
                    <span className="text-sm">در حال پردازش تصویر...</span>
                    <Spinner size="sm" className="text-blue-500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 4: Card Loading Overlay */}
          <div>
            <h3 className="text-lg font-medium mb-4">اورلی بارگذاری کارت</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-sm mx-auto relative">
                <div className="p-6 rounded-lg border border-border">
                  <h4 className="font-semibold mb-2">اطلاعات کاربر</h4>
                  <div className="space-y-2 text-sm text-muted-foreground">
                    <p>نام: علی محمدی</p>
                    <p>ایمیل: ali@example.com</p>
                    <p>تلفن: 09123456789</p>
                  </div>
                </div>
                <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
                  <div className="flex flex-col items-center gap-2">
                    <Spinner size="lg" />
                    <span className="text-sm font-medium">
                      در حال به‌روزرسانی...
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 5: Form Submission */}
          <div>
            <h3 className="text-lg font-medium mb-4">ارسال فرم</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-md mx-auto space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">نام</label>
                  <input
                    type="text"
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    placeholder="نام خود را وارد کنید"
                    disabled
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">ایمیل</label>
                  <input
                    type="email"
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
                    placeholder="your@email.com"
                    disabled
                  />
                </div>
                <Button className="w-full" disabled>
                  <Spinner size="sm" className="me-2" />
                  در حال ارسال...
                </Button>
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
                  <code>size</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"sm" | "default" | "lg" | "xl"</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"default"</code>
                </td>
                <td className="p-4">اندازه اسپینر</td>
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
                <td className="p-4">کلاس‌های CSS سفارشی (برای رنگ)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>srText</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"Loading..."</code>
                </td>
                <td className="p-4">متن برای اسکرین ریدرها</td>
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
              role و aria-label
            </h3>
            <p>
              اسپینر به صورت خودکار{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                role="status"
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              دارد
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              متن اسکرین ریدر
            </h3>
            <p>
              یک{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                sr-only
              </code>{" "}
              span برای اسکرین ریدرها اضافه شده است
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              سفارشی‌سازی متن
            </h3>
            <p>
              می‌توانید متن اسکرین ریدر را با prop{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">srText</code>{" "}
              تغییر دهید
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
            <h3 className="font-semibold mb-3">کی از Spinner استفاده کنیم؟</h3>
            <p className="text-muted-foreground">
              از Spinner زمانی استفاده کنید که عملیاتی در حال انجام است و کاربر
              باید منتظر بماند (مثل ارسال فرم، بارگذاری داده، یا پردازش)
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">متن توضیحی</h3>
            <p className="text-muted-foreground">
              همیشه یک متن توضیحی همراه اسپینر قرار دهید تا کاربر بداند چه
              اتفاقی در حال رخ دادن است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">اندازه مناسب</h3>
            <p className="text-muted-foreground">
              از اندازه مناسب برای محیط استفاده کنید: sm برای دکمه‌ها، default
              برای کارت‌ها، lg/xl برای صفحات کامل
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">غیرفعال کردن تعامل</h3>
            <p className="text-muted-foreground">
              هنگام نمایش اسپینر، دکمه‌ها و فرم‌ها را غیرفعال کنید تا از ارسال
              مجدد جلوگیری شود
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">زمان‌بندی</h3>
            <p className="text-muted-foreground">
              برای عملیات‌های سریع (کمتر از 500ms) ممکن است نمایش اسپینر نیاز
              نباشد. برای عملیات‌های طولانی، پیشرفت را نشان دهید
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
                <code>{`import { Spinner } from "@rad-ui/ui";

<Spinner />`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با اندازه</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Spinner size="sm" />
<Spinner size="default" />
<Spinner size="lg" />
<Spinner size="xl" />`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با رنگ سفارشی</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Spinner className="text-primary" />
<Spinner className="text-blue-500" />
<Spinner className="text-destructive" />`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">در دکمه</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Button, Spinner } from "@rad-ui/ui";

<Button disabled>
  <Spinner size="sm" className="me-2" />
  در حال بارگذاری...
</Button>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با متن سفارشی</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Spinner srText="در حال بارگذاری اطلاعات..." />`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
