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
import { MoreHorizontal, Calendar, MapPin, Copy } from "lucide-react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";

// Code examples as constants
const basicExampleCode = `import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
  CardFooter,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function BasicCard() {
  return (
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
  );
}`;

const sizeExampleCode = `<Card size="sm">
  <CardHeader>
    <CardTitle>کارت کوچک</CardTitle>
    <CardDescription>این کارت از اندازه کوچک استفاده می‌کند.</CardDescription>
  </CardHeader>
  <CardContent>
    <p>فاصله‌گذاری کمتر برای فضای محدود</p>
  </CardContent>
  <CardFooter>
    <Button variant="outline" size="sm">مشاهده</Button>
  </CardFooter>
</Card>`;

const actionExampleCode = `import { MoreHorizontal } from "lucide-react";

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
    <p>در این بخش می‌توانید نام، ایمیل و رمز عبور خود را تغییر دهید.</p>
  </CardContent>
  <CardFooter className="gap-2">
    <Button>ذخیره تغییرات</Button>
    <Button variant="outline">انصراف</Button>
  </CardFooter>
</Card>`;

const imageExampleCode = `import { Calendar, MapPin } from "lucide-react";
import { Badge } from "@/components/ui/badge";

<Card className="max-w-sm overflow-hidden">
  <img
    src="/event-image.jpg"
    alt="تصویر رویداد"
    className="aspect-video w-full object-cover"
  />
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
</Card>`;

const loginExampleCode = `<Card className="w-full max-w-sm">
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
        className="w-full px-3 py-2 border border-border rounded-md"
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
        className="w-full px-3 py-2 border border-border rounded-md"
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
</Card>`;

const usageExampleCode = `import {
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
}`;

const customStylingCode = `<Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20">
  <CardHeader>
    <CardTitle>کارت سفارشی</CardTitle>
    <CardDescription>با گرادیان و حاشیه سفارشی</CardDescription>
  </CardHeader>
  <CardContent>
    <p>این کارت از استایل‌های سفارشی استفاده می‌کند.</p>
  </CardContent>
</Card>`;

const hoverCardCode = `<Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer">
  <CardHeader>
    <CardTitle>کارت تعاملی</CardTitle>
    <CardDescription>موس را روی کارت ببرید</CardDescription>
  </CardHeader>
  <CardContent>
    <p>این کارت هنگام هاور افکت‌های زیبایی دارد.</p>
  </CardContent>
</Card>`;

const gridLayoutCode = `<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
  <Card>
    <CardHeader>
      <CardTitle>کارت اول</CardTitle>
    </CardHeader>
    <CardContent>محتوای کارت اول</CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle>کارت دوم</CardTitle>
    </CardHeader>
    <CardContent>محتوای کارت دوم</CardContent>
  </Card>
  <Card>
    <CardHeader>
      <CardTitle>کارت سوم</CardTitle>
    </CardHeader>
    <CardContent>محتوای کارت سوم</CardContent>
  </Card>
</div>`;

// Copy button component
function CopyButton({ code }: { code: string }) {
  return (
    <button
      onClick={() => navigator.clipboard.writeText(code)}
      className="absolute top-3 right-3 z-10 p-2 rounded-md bg-background/80 hover:bg-background border border-border text-muted-foreground hover:text-foreground transition-colors"
      aria-label="Copy code"
    >
      <Copy className="h-4 w-4" />
    </button>
  );
}

// Code block component
function CodeBlock({ code }: { code: string }) {
  return (
    <details className="mt-0">
      <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground py-3 border border-t-0 border-border rounded-b-lg px-4 bg-muted/50">
        مشاهده کد
      </summary>
      <div
        className="relative rounded-b-lg overflow-x-auto border border-t-0 border-border bg-muted"
        dir="ltr"
      >
        <CopyButton code={code} />
        <SyntaxHighlighter
          language="tsx"
          style={oneLight}
          showLineNumbers
          customStyle={{
            margin: 0,
            borderRadius: 0,
            fontSize: "0.875rem",
            background: "transparent",
          }}
          codeTagProps={{ style: { background: "transparent" } }}
        >
          {code}
        </SyntaxHighlighter>
      </div>
    </details>
  );
}

// Simple code block for installation (no collapsible, just code with copy)
function InstallCodeBlock({ code }: { code: string }) {
  return (
    <div className="relative bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
      <CopyButton code={code} />
      <pre className="text-sm">
        <code>{code}</code>
      </pre>
    </div>
  );
}

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
        <InstallCodeBlock code="npx @quark-lab/rad-ui add card" />
      </section>

      {/* Basic Example */}
      <section className="mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            نمونه پایه (Basic Example)
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            ساده‌ترین شکل استفاده از کامپوننت کارت با عنوان، توضیحات، محتوا و
            فوتر.
          </p>

          {/* Live Preview */}
          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Card className="max-w-sm">
              <CardHeader>
                <CardTitle>عنوان کارت</CardTitle>
                <CardDescription>
                  توضیحات کارت در اینجا نمایش داده می‌شود.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <p>محتوای اصلی کارت در این بخش قرار می‌گیرد.</p>
              </CardContent>
              <CardFooter>
                <Button>اقدام</Button>
              </CardFooter>
            </Card>
          </div>

          <CodeBlock code={basicExampleCode} />
        </div>
      </section>

      {/* Size Variants */}
      <section className="mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2">اندازه‌ها (Sizes)</h2>
          <p className="text-sm text-muted-foreground mb-4">
            از پراپ{" "}
            <code className="text-sm bg-muted px-2 py-1 rounded">
              size="sm"
            </code>{" "}
            برای کارت‌های فشرده‌تر استفاده کنید.
          </p>

          {/* Live Preview */}
          <div className="p-8 rounded-t-lg border border-border bg-card">
            <div className="grid gap-6 md:grid-cols-2">
              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  پیش‌فرض (Default)
                </p>
                <Card>
                  <CardHeader>
                    <CardTitle>کارت پیش‌فرض</CardTitle>
                    <CardDescription>
                      این کارت از اندازه پیش‌فرض استفاده می‌کند.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      فاصله‌گذاری بیشتر برای خوانایی بهتر
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      مشاهده
                    </Button>
                  </CardFooter>
                </Card>
              </div>
              <div>
                <p className="text-sm text-muted-foreground mb-3">
                  کوچک (Small)
                </p>
                <Card size="sm">
                  <CardHeader>
                    <CardTitle>کارت کوچک</CardTitle>
                    <CardDescription>
                      این کارت از اندازه کوچک استفاده می‌کند.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">
                      فاصله‌گذاری کمتر برای فضای محدود
                    </p>
                  </CardContent>
                  <CardFooter>
                    <Button variant="outline" size="sm">
                      مشاهده
                    </Button>
                  </CardFooter>
                </Card>
              </div>
            </div>
          </div>

          <CodeBlock code={sizeExampleCode} />
        </div>
      </section>

      {/* With CardAction */}
      <section className="mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            با اقدام (With Action)
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            از{" "}
            <code className="text-sm bg-muted px-2 py-1 rounded">
              CardAction
            </code>{" "}
            برای قرار دادن دکمه یا بج در گوشه هدر استفاده کنید.
          </p>

          {/* Live Preview */}
          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Card className="max-w-md">
              <CardHeader>
                <CardTitle>تنظیمات حساب</CardTitle>
                <CardDescription>
                  اطلاعات حساب کاربری خود را مدیریت کنید.
                </CardDescription>
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

          <CodeBlock code={actionExampleCode} />
        </div>
      </section>

      {/* With Image */}
      <section className="mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2">با تصویر (With Image)</h2>
          <p className="text-sm text-muted-foreground mb-4">
            تصویر را قبل از CardHeader قرار دهید تا کارت با تصویر ایجاد شود.
          </p>

          {/* Live Preview */}
          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Card className="max-w-sm overflow-hidden">
              <div className="aspect-video bg-muted flex items-center justify-center">
                <span className="text-muted-foreground text-sm">
                  تصویر رویداد
                </span>
              </div>
              <CardHeader>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary">ویژه</Badge>
                </div>
                <CardTitle>همایش طراحی سیستم</CardTitle>
                <CardDescription>
                  یک گفتگوی عملی درباره API کامپوننت‌ها، دسترسی‌پذیری و ارسال
                  سریع‌تر.
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

          <CodeBlock code={imageExampleCode} />
        </div>
      </section>

      {/* Login Card Example */}
      <section className="mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2">
            کارت ورود (Login Card)
          </h2>
          <p className="text-sm text-muted-foreground mb-4">
            نمونه‌ای از استفاده کارت برای فرم ورود کاربر.
          </p>

          {/* Live Preview */}
          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
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
                    <a
                      href="#"
                      className="text-sm text-primary hover:underline"
                    >
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

          <CodeBlock code={loginExampleCode} />
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
                    <code>"default" | "sm"</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>"default"</code>
                  </td>
                  <td className="p-4">اندازه کارت و فاصله‌گذاری داخلی</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>className</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>string</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>-</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS سفارشی</td>
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
                    <code>-</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS سفارشی</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CardTitle */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-4">CardTitle</h3>
          <p className="text-muted-foreground mb-4">
            برای عنوان کارت استفاده می‌شود. از تگ h3 استفاده می‌کند.
          </p>
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
                    <code>-</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS سفارشی</td>
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
                    <code>-</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS سفارشی</td>
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
                    <code>-</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS سفارشی</td>
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
                    <code>-</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS سفارشی</td>
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
                    <code>-</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS سفارشی</td>
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
              CardTitle از تگ{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">h3</code>{" "}
              استفاده می‌کند که برای خوانندگان صفحه سلسله‌مراتب مناسبی ایجاد
              می‌کند.
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی از RTL
            </h3>
            <p>
              تمام کامپوننت‌ها از ویژگی‌های منطقی CSS استفاده می‌کنند و در هر دو
              جهت RTL و LTR به درستی کار می‌کنند.
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
            <h3 className="font-semibold mb-3">ساختار کارت (Card Structure)</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">CardHeader:</strong> همیشه
                با عنوان شروع کنید تا کاربر بداند کارت درباره چیست
              </li>
              <li>
                <strong className="text-foreground">CardContent:</strong> محتوای
                اصلی را در این بخش قرار دهید
              </li>
              <li>
                <strong className="text-foreground">CardFooter:</strong> اقدامات
                مانند دکمه‌ها را در فوتر قرار دهید
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              انتخاب اندازه (Size Selection)
            </h3>
            <ul className="space-y-2 text-muted-foreground">
              <li>
                <strong className="text-foreground">Default:</strong> برای
                کارت‌های اصلی با محتوای بیشتر
              </li>
              <li>
                <strong className="text-foreground">Small:</strong> برای
                کارت‌های فشرده در گرید یا سایدبار
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-semibold mb-3">استفاده از CardAction</h3>
            <p className="text-muted-foreground">
              CardAction برای دکمه‌های منو (سه نقطه)، بج‌ها یا آیکون‌های وضعیت
              مناسب است. از قرار دادن چند دکمه در آن خودداری کنید.
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <div>
          <h2 className="text-2xl font-semibold mb-2">نحوه استفاده (Usage)</h2>
          <p className="text-sm text-muted-foreground mb-4">
            نمونه کامل از نحوه ایمپورت و استفاده از کامپوننت کارت.
          </p>

          {/* Live Preview */}
          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Card>
              <CardHeader>
                <CardTitle>عنوان کارت</CardTitle>
                <CardDescription>توضیحات کارت</CardDescription>
                <CardAction>
                  <Button variant="ghost" size="sm">
                    ...
                  </Button>
                </CardAction>
              </CardHeader>
              <CardContent>
                <p>محتوای کارت</p>
              </CardContent>
              <CardFooter>
                <Button>اقدام</Button>
              </CardFooter>
            </Card>
          </div>

          <CodeBlock code={usageExampleCode} />
        </div>
      </section>

      {/* Advanced Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های پیشرفته (Advanced Examples)
        </h2>

        {/* Custom Styling */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-2">
            استایل سفارشی (Custom Styling)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            با استفاده از کلاس‌های Tailwind می‌توانید ظاهر کارت را سفارشی کنید.
          </p>

          {/* Live Preview */}
          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Card className="bg-gradient-to-br from-primary/10 to-primary/5 border-primary/20 max-w-sm">
              <CardHeader>
                <CardTitle>کارت سفارشی</CardTitle>
                <CardDescription>با گرادیان و حاشیه سفارشی</CardDescription>
              </CardHeader>
              <CardContent>
                <p>این کارت از استایل‌های سفارشی استفاده می‌کند.</p>
              </CardContent>
            </Card>
          </div>

          <CodeBlock code={customStylingCode} />
        </div>

        {/* Interactive Cards */}
        <div className="mb-12">
          <h3 className="text-lg font-semibold mb-2">
            کارت تعاملی (Interactive Card)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            افزودن افکت‌های هاور برای کارت‌های قابل کلیک.
          </p>

          {/* Live Preview */}
          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Card className="transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer max-w-sm">
              <CardHeader>
                <CardTitle>کارت تعاملی</CardTitle>
                <CardDescription>موس را روی کارت ببرید</CardDescription>
              </CardHeader>
              <CardContent>
                <p>این کارت هنگام هاور افکت‌های زیبایی دارد.</p>
              </CardContent>
            </Card>
          </div>

          <CodeBlock code={hoverCardCode} />
        </div>

        {/* Grid Layout */}
        <div>
          <h3 className="text-lg font-semibold mb-2">
            چیدمان گرید (Grid Layout)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            نمایش چندین کارت در یک گرید ریسپانسیو.
          </p>

          {/* Live Preview */}
          <div className="p-8 rounded-t-lg border border-border bg-card">
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>کارت اول</CardTitle>
                </CardHeader>
                <CardContent>محتوای کارت اول</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>کارت دوم</CardTitle>
                </CardHeader>
                <CardContent>محتوای کارت دوم</CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>کارت سوم</CardTitle>
                </CardHeader>
                <CardContent>محتوای کارت سوم</CardContent>
              </Card>
            </div>
          </div>

          <CodeBlock code={gridLayoutCode} />
        </div>
      </section>
    </div>
  );
}
