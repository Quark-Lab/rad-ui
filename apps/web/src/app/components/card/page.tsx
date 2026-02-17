"use client";

import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
  Button,
  Badge,
} from "@/registry/web/ui";
import { MoreHorizontal, Calendar, MapPin } from "lucide-react";

export default function CardDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">کارت (Card)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت کارت برای گروه‌بندی محتوا و اقدامات مرتبط با پشتیبانی کامل از
          RTL و حالت تاریک
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quark-lab/rad-ui add card`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه پایه (Basic Example)</h2>
        <div className="p-8 rounded-lg bg-background border border-border">
          <Card className="max-w-sm">
            <CardHeader>
              <CardTitle>عنوان کارت</CardTitle>
              <CardDescription>توضیحات کارت در اینجا نمایش داده می‌شود.</CardDescription>
            </CardHeader>
            <CardContent>
              <p>محتوای اصلی کارت در این بخش قرار می‌گیرد.</p>
            </CardContent>
            <CardFooter>
              <Button>اقدام</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Size Variants */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">اندازه‌ها (Sizes)</h2>
        <p className="text-muted-foreground mb-6">
          از پراپ <code className="text-sm bg-muted px-2 py-1 rounded">size="sm"</code> برای کارت‌های فشرده‌تر استفاده کنید.
        </p>
        <div className="grid gap-6 md:grid-cols-2 p-8 rounded-lg bg-background border border-border">
          <div>
            <p className="text-sm text-muted-foreground mb-3">پیش‌فرض (Default)</p>
            <Card>
              <CardHeader>
                <CardTitle>کارت پیش‌فرض</CardTitle>
                <CardDescription>این کارت از اندازه پیش‌فرض استفاده می‌کند.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  فاصله‌گذاری بیشتر برای خوانایی بهتر
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">مشاهده</Button>
              </CardFooter>
            </Card>
          </div>
          <div>
            <p className="text-sm text-muted-foreground mb-3">کوچک (Small)</p>
            <Card size="sm">
              <CardHeader>
                <CardTitle>کارت کوچک</CardTitle>
                <CardDescription>این کارت از اندازه کوچک استفاده می‌کند.</CardDescription>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  فاصله‌گذاری کمتر برای فضای محدود
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="outline" size="sm">مشاهده</Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* With CardAction */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با اقدام (With Action)</h2>
        <p className="text-muted-foreground mb-6">
          از <code className="text-sm bg-muted px-2 py-1 rounded">CardAction</code> برای قرار دادن دکمه یا بج در گوشه هدر استفاده کنید.
        </p>
        <div className="p-8 rounded-lg bg-background border border-border">
          <Card className="max-w-md">
            <CardHeader>
              <CardTitle>تنظیمات حساب</CardTitle>
              <CardDescription>اطلاعات حساب کاربری خود را مدیریت کنید.</CardDescription>
              <CardAction>
                <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </CardAction>
            </CardHeader>
            <CardContent>
              <p className="text-sm text-muted-foreground">
                در این بخش می‌توانید نام، ایمیل و رمز عبور خود را تغییر دهید.
              </p>
            </CardContent>
            <CardFooter className="gap-2">
              <Button>ذخیره تغییرات</Button>
              <Button variant="outline">انصراف</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* With Image */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با تصویر (With Image)</h2>
        <p className="text-muted-foreground mb-6">
          تصویر را قبل از CardHeader قرار دهید تا کارت با تصویر ایجاد شود.
        </p>
        <div className="p-8 rounded-lg bg-background border border-border">
          <Card className="max-w-sm overflow-hidden">
            <div className="aspect-video bg-muted flex items-center justify-center">
              <span className="text-muted-foreground text-sm">تصویر رویداد</span>
            </div>
            <CardHeader>
              <div className="flex items-center gap-2 mb-2">
                <Badge variant="secondary">ویژه</Badge>
              </div>
              <CardTitle>همایش طراحی سیستم</CardTitle>
              <CardDescription>
                یک گفتگوی عملی درباره API کامپوننت‌ها، دسترسی‌پذیری و ارسال سریع‌تر.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex flex-col gap-2 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Calendar className="h-4 w-4" />
                  <span>۲۵ اسفند ۱۴۰۴</span>
                </div>
                <div className="flex items-center gap-2">
                  <MapPin className="h-4 w-4" />
                  <span>تهران، ایران</span>
                </div>
              </div>
            </CardContent>
            <CardFooter>
              <Button className="w-full">مشاهده رویداد</Button>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* Login Card Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">کارت ورود (Login Card)</h2>
        <div className="p-8 rounded-lg bg-background border border-border flex justify-center">
          <Card className="w-full max-w-sm">
            <CardHeader>
              <CardTitle>ورود به حساب</CardTitle>
              <CardDescription>
                ایمیل خود را وارد کنید تا وارد حساب کاربری شوید.
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <label className="text-sm font-medium">ایمیل</label>
                <input
                  type="email"
                  placeholder="example@email.com"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background text-foreground"
                  dir="ltr"
                />
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="text-sm font-medium">رمز عبور</label>
                  <a href="#" className="text-sm text-primary hover:underline">
                    فراموشی رمز عبور؟
                  </a>
                </div>
                <input
                  type="password"
                  className="w-full px-3 py-2 border border-border rounded-md bg-background"
                  dir="ltr"
                />
              </div>
            </CardContent>
            <CardFooter className="flex-col gap-4">
              <Button className="w-full">ورود</Button>
              <p className="text-sm text-muted-foreground text-center">
                حساب ندارید؟{" "}
                <a href="#" className="text-primary hover:underline">
                  ثبت‌نام کنید
                </a>
              </p>
            </CardFooter>
          </Card>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        {/* Card */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">Card</h3>
          <p className="text-muted-foreground mb-4">
            کامپوننت اصلی که به عنوان کانتینر برای محتوای کارت عمل می‌کند.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-right p-4 font-semibold">نوع (Type)</th>
                  <th className="text-right p-4 font-semibold">پیش‌فرض (Default)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr"><code>size</code></td>
                  <td className="p-4" dir="ltr"><code>"default" | "sm"</code></td>
                  <td className="p-4" dir="ltr"><code>"default"</code></td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr"><code>className</code></td>
                  <td className="p-4" dir="ltr"><code>string</code></td>
                  <td className="p-4" dir="ltr"><code>-</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CardHeader */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">CardHeader</h3>
          <p className="text-muted-foreground mb-4">
            برای عنوان، توضیحات و اقدام اختیاری استفاده می‌شود.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-right p-4 font-semibold">نوع (Type)</th>
                  <th className="text-right p-4 font-semibold">پیش‌فرض (Default)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr"><code>className</code></td>
                  <td className="p-4" dir="ltr"><code>string</code></td>
                  <td className="p-4" dir="ltr"><code>-</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CardTitle */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">CardTitle</h3>
          <p className="text-muted-foreground mb-4">
            برای عنوان کارت استفاده می‌شود.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-right p-4 font-semibold">نوع (Type)</th>
                  <th className="text-right p-4 font-semibold">پیش‌فرض (Default)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr"><code>className</code></td>
                  <td className="p-4" dir="ltr"><code>string</code></td>
                  <td className="p-4" dir="ltr"><code>-</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CardDescription */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">CardDescription</h3>
          <p className="text-muted-foreground mb-4">
            برای متن کمکی زیر عنوان استفاده می‌شود.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-right p-4 font-semibold">نوع (Type)</th>
                  <th className="text-right p-4 font-semibold">پیش‌فرض (Default)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr"><code>className</code></td>
                  <td className="p-4" dir="ltr"><code>string</code></td>
                  <td className="p-4" dir="ltr"><code>-</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CardAction */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">CardAction</h3>
          <p className="text-muted-foreground mb-4">
            محتوا را در گوشه بالای هدر قرار می‌دهد (مثلاً دکمه یا بج).
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-right p-4 font-semibold">نوع (Type)</th>
                  <th className="text-right p-4 font-semibold">پیش‌فرض (Default)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr"><code>className</code></td>
                  <td className="p-4" dir="ltr"><code>string</code></td>
                  <td className="p-4" dir="ltr"><code>-</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CardContent */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">CardContent</h3>
          <p className="text-muted-foreground mb-4">
            برای بدنه اصلی کارت استفاده می‌شود.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-right p-4 font-semibold">نوع (Type)</th>
                  <th className="text-right p-4 font-semibold">پیش‌فرض (Default)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr"><code>className</code></td>
                  <td className="p-4" dir="ltr"><code>string</code></td>
                  <td className="p-4" dir="ltr"><code>-</code></td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CardFooter */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">CardFooter</h3>
          <p className="text-muted-foreground mb-4">
            برای اقدامات و محتوای ثانویه در پایین کارت استفاده می‌شود.
          </p>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-right p-4 font-semibold">نوع (Type)</th>
                  <th className="text-right p-4 font-semibold">پیش‌فرض (Default)</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr"><code>className</code></td>
                  <td className="p-4" dir="ltr"><code>string</code></td>
                  <td className="p-4" dir="ltr"><code>-</code></td>
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
              ساختار معنایی (Semantic Structure)
            </h3>
            <p>
              CardTitle از تگ <code className="text-sm bg-muted px-2 py-1 rounded">h3</code> استفاده می‌کند
              که برای خوانندگان صفحه سلسله‌مراتب مناسبی ایجاد می‌کند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی از RTL
            </h3>
            <p>
              تمام کامپوننت‌ها از ویژگی‌های منطقی CSS استفاده می‌کنند و در هر دو جهت RTL و LTR به درستی کار می‌کنند.
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
              ساختار کارت (Card Structure)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">CardHeader:</strong> همیشه با عنوان شروع کنید تا کاربر بداند کارت درباره چیست
              </li>
              <li>
                <strong className="text-foreground">CardContent:</strong> محتوای اصلی را در این بخش قرار دهید
              </li>
              <li>
                <strong className="text-foreground">CardFooter:</strong> اقدامات مانند دکمه‌ها را در فوتر قرار دهید
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              انتخاب اندازه (Size Selection)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Default:</strong> برای کارت‌های اصلی با محتوای بیشتر
              </li>
              <li>
                <strong className="text-foreground">Small:</strong> برای کارت‌های فشرده در گرید یا سایدبار
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              استفاده از CardAction
            </h3>
            <p className="text-muted-foreground">
              CardAction برای دکمه‌های منو (سه نقطه)، بج‌ها یا آیکون‌های وضعیت مناسب است. از قرار دادن چند دکمه در آن خودداری کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>عنوان کارت</CardTitle>
        <CardDescription>توضیحات کارت</CardDescription>
        <CardAction>
          <Button variant="ghost" size="sm">...</Button>
        </CardAction>
      </CardHeader>
      <CardContent>
        <p>محتوای کارت</p>
      </CardContent>
      <CardFooter>
        <Button>اقدام</Button>
      </CardFooter>
    </Card>
  );
}`}</code>
          </pre>
        </div>
      </section>
    </div>
  );
}
