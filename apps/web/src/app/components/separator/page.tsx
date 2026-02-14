"use client";

import { Separator } from "@/registry/web/ui";

export default function SeparatorDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">جداکننده (Separator)</h1>
        <p className="text-lg text-muted-foreground">
          جداکننده برای تفکیک بصری یا معنایی محتوا استفاده می‌شود
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quark-lab/rad-ui add separator`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">استفاده پایه (Basic Usage)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">راد UI</h4>
            <p className="text-sm text-muted-foreground">
              کتابخانه کامپوننت UI با پشتیبانی کامل از RTL
            </p>
          </div>
          <Separator className="my-4" />
          <div className="space-y-1">
            <h4 className="text-sm font-medium leading-none">ویژگی‌ها</h4>
            <p className="text-sm text-muted-foreground">
              طراحی مدرن، دارک مود، و دسترسی‌پذیر
            </p>
          </div>
        </div>
      </section>

      {/* Horizontal Separator */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">جداکننده افقی (Horizontal)</h2>
        <p className="text-muted-foreground mb-4">
          حالت پیش‌فرض، برای جدا کردن بخش‌های عمودی محتوا
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div>
            <h3 className="text-lg font-semibold">بخش اول</h3>
            <p className="text-muted-foreground">
              این محتوای بخش اول است که در بالا قرار دارد
            </p>
          </div>
          <Separator className="my-6" />
          <div>
            <h3 className="text-lg font-semibold">بخش دوم</h3>
            <p className="text-muted-foreground">
              این محتوای بخش دوم است که در پایین قرار دارد
            </p>
          </div>
        </div>
      </section>

      {/* Vertical Separator */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">جداکننده عمودی (Vertical)</h2>
        <p className="text-muted-foreground mb-4">
          برای جدا کردن آیتم‌های افقی مثل منوها و لیست‌ها
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex h-5 items-center space-x-4 space-x-reverse text-sm">
            <div>خانه</div>
            <Separator orientation="vertical" />
            <div>درباره ما</div>
            <Separator orientation="vertical" />
            <div>تماس</div>
            <Separator orientation="vertical" />
            <div>بلاگ</div>
          </div>
        </div>
      </section>

      {/* Practical Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">مثال‌های کاربردی (Practical Examples)</h2>

        {/* Example 1: Card with sections */}
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">کارت با بخش‌های مختلف</h3>
            <div className="p-6 rounded-lg bg-card border border-border max-w-md">
              <div className="space-y-1">
                <h4 className="font-medium">اطلاعات حساب</h4>
                <p className="text-sm text-muted-foreground">
                  نام کاربری: user@example.com
                </p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-1">
                <h4 className="font-medium">اشتراک</h4>
                <p className="text-sm text-muted-foreground">
                  پلن فعلی: حرفه‌ای
                </p>
              </div>
              <Separator className="my-4" />
              <div className="space-y-1">
                <h4 className="font-medium">پرداخت</h4>
                <p className="text-sm text-muted-foreground">
                  روش پرداخت: کارت اعتباری
                </p>
              </div>
            </div>
          </div>

          {/* Example 2: Breadcrumb navigation */}
          <div>
            <h3 className="text-lg font-medium mb-4">مسیر صفحه (Breadcrumb)</h3>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex items-center space-x-2 space-x-reverse text-sm">
                <span className="text-primary">خانه</span>
                <Separator orientation="vertical" className="h-4" />
                <span className="text-primary">کامپوننت‌ها</span>
                <Separator orientation="vertical" className="h-4" />
                <span className="text-muted-foreground">جداکننده</span>
              </div>
            </div>
          </div>

          {/* Example 3: Footer links */}
          <div>
            <h3 className="text-lg font-medium mb-4">لینک‌های فوتر</h3>
            <div className="p-6 rounded-lg bg-card border border-border">
              <div className="flex flex-wrap items-center gap-4 text-sm">
                <a href="#" className="hover:text-primary transition-colors">
                  حریم خصوصی
                </a>
                <Separator orientation="vertical" className="h-4" />
                <a href="#" className="hover:text-primary transition-colors">
                  شرایط استفاده
                </a>
                <Separator orientation="vertical" className="h-4" />
                <a href="#" className="hover:text-primary transition-colors">
                  تماس با ما
                </a>
                <Separator orientation="vertical" className="h-4" />
                <a href="#" className="hover:text-primary transition-colors">
                  پشتیبانی
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">مرجع API (API Reference)</h2>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                <th className="text-right p-4 font-semibold">نوع (Type)</th>
                <th className="text-right p-4 font-semibold">پیش‌فرض (Default)</th>
                <th className="text-right p-4 font-semibold">توضیحات (Description)</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>orientation</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"horizontal" | "vertical"</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"horizontal"</code>
                </td>
                <td className="p-4">جهت قرارگیری جداکننده</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>decorative</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>true</code>
                </td>
                <td className="p-4">
                  آیا جداکننده صرفاً تزئینی است (بدون معنای معنایی)
                </td>
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
            <h3 className="font-semibold text-foreground mb-2">WAI-ARIA</h3>
            <p>
              این کامپوننت از مشخصات{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                separator
              </code>{" "}
              WAI-ARIA پیروی می‌کند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              حالت Decorative
            </h3>
            <p>
              وقتی <code className="text-sm bg-muted px-2 py-1 rounded">decorative</code>{" "}
              روی <code className="text-sm bg-muted px-2 py-1 rounded">true</code> است،
              جداکننده به عنوان یک المان صرفاً بصری نشانه‌گذاری می‌شود
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
            <h3 className="font-semibold mb-3">کی از جداکننده استفاده کنیم؟</h3>
            <ul className="space-y-2 text-muted-foreground list-disc list-inside">
              <li>برای جدا کردن بخش‌های مختلف محتوا</li>
              <li>در منوها برای جدا کردن آیتم‌های مختلف</li>
              <li>در کارت‌ها برای سازماندهی اطلاعات</li>
              <li>در فوترها و هدرها برای تفکیک لینک‌ها</li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">فاصله‌گذاری (Spacing)</h3>
            <p className="text-muted-foreground">
              از کلاس‌های{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">my-4</code> یا{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">my-6</code> برای
              افقی و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">mx-4</code> برای
              عمودی استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استایل سفارشی (Custom Styling)</h3>
            <p className="text-muted-foreground">
              می‌توانید با <code className="text-sm bg-muted px-2 py-1 rounded">className</code>{" "}
              رنگ، ضخامت و سایر ویژگی‌ها را تغییر دهید
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
            <h3 className="font-medium mb-3">افقی (Horizontal)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Separator } from "@/components/ui/separator";

<div>
  <div>بخش اول</div>
  <Separator className="my-4" />
  <div>بخش دوم</div>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">عمودی (Vertical)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Separator } from "@/components/ui/separator";

<div className="flex items-center gap-4">
  <span>خانه</span>
  <Separator orientation="vertical" className="h-4" />
  <span>درباره ما</span>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با استایل سفارشی</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Separator className="my-6 bg-primary h-[2px]" />`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
