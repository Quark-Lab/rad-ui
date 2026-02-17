"use client";

import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
  Button,
  Input,
  Label,
} from "@/registry/web/ui";

const codeExamples = {
  basic: `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export function SheetDemo() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">باز کردن شیت</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>عنوان شیت</SheetTitle>
          <SheetDescription>
            این یک توضیح کوتاه درباره محتوای شیت است
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p>محتوای اصلی شیت</p>
        </div>
      </SheetContent>
    </Sheet>
  );
}`,
  side: `import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

const SHEET_SIDES = [
  { side: "top", label: "بالا" },
  { side: "right", label: "راست" },
  { side: "bottom", label: "پایین" },
  { side: "left", label: "چپ" },
] as const;

export function SheetSide() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIDES.map(({ side, label }) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{label}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>شیت از سمت {label}</SheetTitle>
            </SheetHeader>
            <div className="py-4">
              <p>این شیت از سمت {label} باز می‌شود</p>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}`,
  withForm: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="outline">ویرایش پروفایل</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>ویرایش پروفایل</SheetTitle>
      <SheetDescription>
        تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
      </SheetDescription>
    </SheetHeader>
    <div className="grid gap-4 py-4">
      <div className="grid gap-2">
        <Label htmlFor="name">نام</Label>
        <Input id="name" defaultValue="علی کاوسی" />
      </div>
      <div className="grid gap-2">
        <Label htmlFor="username">نام کاربری</Label>
        <Input id="username" defaultValue="@alikawosi" />
      </div>
    </div>
    <SheetFooter>
      <SheetClose asChild>
        <Button variant="outline">انصراف</Button>
      </SheetClose>
      <Button type="submit">ذخیره تغییرات</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
  noCloseButton: `<SheetContent showCloseButton={false}>
  <SheetHeader>
    <SheetTitle>بدون دکمه بستن</SheetTitle>
    <SheetDescription>
      این شیت دکمه X در گوشه بالا ندارد
    </SheetDescription>
  </SheetHeader>
  <SheetFooter>
    <SheetClose asChild>
      <Button variant="outline">بستن</Button>
    </SheetClose>
  </SheetFooter>
</SheetContent>`,
  controlled: `const [open, setOpen] = useState(false);

<Sheet open={open} onOpenChange={setOpen}>
  <SheetTrigger asChild>
    <Button variant="outline">شیت کنترل‌شده</Button>
  </SheetTrigger>
  <SheetContent>
    <SheetHeader>
      <SheetTitle>شیت کنترل‌شده</SheetTitle>
      <SheetDescription>
        این شیت با استفاده از state کنترل می‌شود
      </SheetDescription>
    </SheetHeader>
    <SheetFooter>
      <Button onClick={() => setOpen(false)}>بستن با کد</Button>
    </SheetFooter>
  </SheetContent>
</Sheet>`,
  scrollable: `<SheetContent>
  <SheetHeader>
    <SheetTitle>محتوای قابل اسکرول</SheetTitle>
    <SheetDescription>...</SheetDescription>
  </SheetHeader>
  <div className="flex-1 overflow-y-auto">
    {/* Long content here */}
  </div>
  <SheetFooter>
    <SheetClose asChild>
      <Button variant="outline">بستن</Button>
    </SheetClose>
  </SheetFooter>
</SheetContent>`,
  usage: `import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Basic Sheet */}
      <Sheet>
        <SheetTrigger asChild>
          <Button>Open Sheet</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Title</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
          <p>Content goes here</p>
          <SheetFooter>
            <SheetClose asChild>
              <Button variant="outline">Cancel</Button>
            </SheetClose>
            <Button>Confirm</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>

      {/* Sheet with side */}
      <Sheet>
        <SheetTrigger asChild>
          <Button>Left Sheet</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      {/* Controlled Sheet */}
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button>Controlled</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Controlled Sheet</SheetTitle>
          </SheetHeader>
          <Button onClick={() => setOpen(false)}>
            Close programmatically
          </Button>
        </SheetContent>
      </Sheet>
    </div>
  );
}`,
  navigation: `<Sheet>
  <SheetTrigger asChild>
    <Button variant="ghost" size="icon">
      <Menu className="h-5 w-5" />
    </Button>
  </SheetTrigger>
  <SheetContent side="left">
    <SheetHeader>
      <SheetTitle>منوی ناوبری</SheetTitle>
    </SheetHeader>
    <nav className="flex flex-col gap-2 py-4">
      <a href="/" className="px-4 py-2 hover:bg-muted rounded-md">
        خانه
      </a>
      <a href="/products" className="px-4 py-2 hover:bg-muted rounded-md">
        محصولات
      </a>
      <a href="/about" className="px-4 py-2 hover:bg-muted rounded-md">
        درباره ما
      </a>
      <a href="/contact" className="px-4 py-2 hover:bg-muted rounded-md">
        تماس با ما
      </a>
    </nav>
  </SheetContent>
</Sheet>`,
  preventClose: `<SheetContent
  onPointerDownOutside={(e) => e.preventDefault()}
  onEscapeKeyDown={(e) => e.preventDefault()}
  onInteractOutside={(e) => e.preventDefault()}
>
  <SheetHeader>
    <SheetTitle>فرم اجباری</SheetTitle>
    <SheetDescription>
      این فرم باید تکمیل شود
    </SheetDescription>
  </SheetHeader>
  {/* Form content */}
  <SheetFooter>
    <Button type="submit">ارسال</Button>
  </SheetFooter>
</SheetContent>`,
};

function CodeBlock({
  code,
  language = "tsx",
}: {
  code: string;
  language?: string;
}) {
  const copyToClipboard = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <details className="mt-0">
      <summary className="cursor-pointer text-sm text-muted-foreground hover:text-foreground py-3 border border-t-0 border-border rounded-b-lg px-4 bg-muted/50">
        مشاهده کد
      </summary>
      <div
        className="relative rounded-b-lg overflow-x-auto border border-t-0 border-border bg-muted"
        dir="ltr"
      >
        <button
          onClick={copyToClipboard}
          className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
          aria-label="Copy code"
        >
          <Copy className="h-4 w-4" />
        </button>
        <SyntaxHighlighter
          language={language}
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

export default function SheetPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">شیت (Sheet)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت شیت یک پنل کشویی است که از لبه‌های صفحه (بالا، راست، پایین، چپ)
          باز می‌شود و برای نمایش محتوای تکمیلی استفاده می‌شود
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div
          className="relative rounded-lg overflow-x-auto border border-border bg-muted"
          dir="ltr"
        >
          <button
            onClick={() =>
              navigator.clipboard.writeText("npx @quark-lab/rad-ui add sheet")
            }
            className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
          <SyntaxHighlighter
            language="bash"
            style={oneLight}
            showLineNumbers
            customStyle={{
              margin: 0,
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              background: "transparent",
            }}
            codeTagProps={{ style: { background: "transparent" } }}
          >
            npx @quark-lab/rad-ui add sheet
          </SyntaxHighlighter>
        </div>
      </section>

      {/* Component-specific demos */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        {/* Basic Usage */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            استفاده پایه (Basic Usage)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            ساده‌ترین حالت استفاده از شیت با عنوان و توضیحات
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">باز کردن شیت</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>عنوان شیت</SheetTitle>
                  <SheetDescription>
                    این یک توضیح کوتاه درباره محتوای شیت است
                  </SheetDescription>
                </SheetHeader>
                <div className="py-4">
                  <p className="text-muted-foreground">
                    محتوای اصلی شیت در اینجا قرار می‌گیرد
                  </p>
                </div>
              </SheetContent>
            </Sheet>
          </div>

          <CodeBlock code={codeExamples.basic} />
        </div>

        {/* Side Variants */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            جهت‌های مختلف (Side Variants)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            از پراپ side برای تعیین جهت باز شدن شیت استفاده کنید. مقادیر مجاز:
            top، right، bottom، left
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <div className="flex flex-wrap gap-2">
              {(
                [
                  { side: "top", label: "بالا" },
                  { side: "right", label: "راست" },
                  { side: "bottom", label: "پایین" },
                  { side: "left", label: "چپ" },
                ] as const
              ).map(({ side, label }) => (
                <Sheet key={side}>
                  <SheetTrigger asChild>
                    <Button variant="outline">{label}</Button>
                  </SheetTrigger>
                  <SheetContent side={side}>
                    <SheetHeader>
                      <SheetTitle>شیت از سمت {label}</SheetTitle>
                      <SheetDescription>
                        این شیت از سمت {label} باز می‌شود
                      </SheetDescription>
                    </SheetHeader>
                    <div className="py-4">
                      <p className="text-muted-foreground">
                        محتوای شیت در اینجا قرار می‌گیرد
                      </p>
                    </div>
                  </SheetContent>
                </Sheet>
              ))}
            </div>
          </div>

          <CodeBlock code={codeExamples.side} />
        </div>

        {/* With Form */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">با فرم (With Form)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            شیت با فرم ورودی برای ویرایش اطلاعات
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">ویرایش پروفایل</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>ویرایش پروفایل</SheetTitle>
                  <SheetDescription>
                    تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
                  </SheetDescription>
                </SheetHeader>
                <div className="grid gap-4 py-4">
                  <div className="grid gap-2">
                    <Label htmlFor="name">نام</Label>
                    <Input id="name" defaultValue="علی کاوسی" />
                  </div>
                  <div className="grid gap-2">
                    <Label htmlFor="username">نام کاربری</Label>
                    <Input id="username" defaultValue="@alikawosi" />
                  </div>
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">انصراف</Button>
                  </SheetClose>
                  <Button type="submit">ذخیره تغییرات</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <CodeBlock code={codeExamples.withForm} />
        </div>

        {/* No Close Button */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            بدون دکمه بستن (No Close Button)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            مخفی کردن دکمه X در گوشه بالای شیت با showCloseButton=false
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">بدون دکمه X</Button>
              </SheetTrigger>
              <SheetContent showCloseButton={false}>
                <SheetHeader>
                  <SheetTitle>بدون دکمه بستن</SheetTitle>
                  <SheetDescription>
                    این شیت دکمه X در گوشه بالا ندارد. برای بستن از دکمه
                    پایین استفاده کنید
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">بستن</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <CodeBlock code={codeExamples.noCloseButton} />
        </div>

        {/* Controlled */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">کنترل شده (Controlled)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            کنترل وضعیت باز/بسته شیت با استفاده از state
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex flex-col items-center justify-center gap-4">
            <Sheet open={open} onOpenChange={setOpen}>
              <SheetTrigger asChild>
                <Button variant="outline">شیت کنترل‌شده</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>شیت کنترل‌شده</SheetTitle>
                  <SheetDescription>
                    این شیت با استفاده از state کنترل می‌شود
                  </SheetDescription>
                </SheetHeader>
                <SheetFooter>
                  <Button onClick={() => setOpen(false)}>بستن با کد</Button>
                </SheetFooter>
              </SheetContent>
            </Sheet>
            <p className="text-sm text-muted-foreground">
              وضعیت شیت: {open ? "باز" : "بسته"}
            </p>
          </div>

          <CodeBlock code={codeExamples.controlled} />
        </div>

        {/* Scrollable Content */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            محتوای قابل اسکرول (Scrollable Content)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            شیت با محتوای طولانی که قابل اسکرول است
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="outline">محتوای طولانی</Button>
              </SheetTrigger>
              <SheetContent>
                <SheetHeader>
                  <SheetTitle>محتوای قابل اسکرول</SheetTitle>
                  <SheetDescription>
                    این شیت محتوای طولانی دارد که قابل اسکرول است
                  </SheetDescription>
                </SheetHeader>
                <div className="flex-1 overflow-y-auto py-4">
                  {Array.from({ length: 10 }).map((_, index) => (
                    <p key={index} className="mb-4 leading-relaxed">
                      لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ
                      و با استفاده از طراحان گرافیک است. چاپگرها و متون بلکه
                      روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای
                      شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف
                      بهبود ابزارهای کاربردی می باشد.
                    </p>
                  ))}
                </div>
                <SheetFooter>
                  <SheetClose asChild>
                    <Button variant="outline">بستن</Button>
                  </SheetClose>
                </SheetFooter>
              </SheetContent>
            </Sheet>
          </div>

          <CodeBlock code={codeExamples.scrollable} />
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        {/* Sheet */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Sheet</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-start p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-start p-4 font-semibold">نوع (Type)</th>
                  <th className="text-start p-4 font-semibold">
                    پیش‌فرض (Default)
                  </th>
                  <th className="text-start p-4 font-semibold">
                    توضیحات (Description)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>open</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">وضعیت باز/بسته بودن (کنترل‌شده)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>defaultOpen</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>false</code>
                  </td>
                  <td className="p-4">وضعیت پیش‌فرض (غیرکنترل‌شده)</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>onOpenChange</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>(open: boolean) =&gt; void</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">تابع فراخوانی هنگام تغییر وضعیت</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>modal</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>true</code>
                  </td>
                  <td className="p-4">
                    حالت مودال (بلاک کردن تعامل با پس‌زمینه)
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* SheetContent */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">SheetContent</h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse">
              <thead>
                <tr className="border-b border-border">
                  <th className="text-start p-4 font-semibold">پراپ (Prop)</th>
                  <th className="text-start p-4 font-semibold">نوع (Type)</th>
                  <th className="text-start p-4 font-semibold">
                    پیش‌فرض (Default)
                  </th>
                  <th className="text-start p-4 font-semibold">
                    توضیحات (Description)
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>side</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; | &quot;left&quot;</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;right&quot;</code>
                  </td>
                  <td className="p-4">جهت باز شدن شیت</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>showCloseButton</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>true</code>
                  </td>
                  <td className="p-4">نمایش دکمه بستن در گوشه بالا</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>onEscapeKeyDown</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>(event) =&gt; void</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">هندلر فشردن کلید Escape</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>onPointerDownOutside</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>(event) =&gt; void</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">هندلر کلیک خارج از شیت</td>
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
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Escape
                </code>{" "}
                - بستن شیت
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت بین المان‌های قابل فوکوس داخل شیت
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Shift + Tab
                </code>{" "}
                - حرکت به عقب بین المان‌ها
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              تله فوکوس (Focus Trap)
            </h3>
            <p>
              وقتی شیت باز است، فوکوس در داخل آن محبوس می‌شود و کاربر
              نمی‌تواند با Tab به خارج از شیت برود
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              بازگشت فوکوس (Focus Return)
            </h3>
            <p>
              پس از بستن شیت، فوکوس به المانی که شیت را باز کرده بود
              برمی‌گردد
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">نقش‌های ARIA</h3>
            <p>
              شیت از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                role=&quot;dialog&quot;
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-modal=&quot;true&quot;
              </code>{" "}
              استفاده می‌کند
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
            <h3 className="font-semibold mb-3">عنوان واضح (Clear Title)</h3>
            <p className="text-muted-foreground">
              همیشه از SheetTitle استفاده کنید تا کاربران صفحه‌خوان بتوانند
              محتوای شیت را درک کنند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">انتخاب جهت مناسب (Choose Side Wisely)</h3>
            <p className="text-muted-foreground">
              جهت راست برای تنظیمات و فرم‌ها، جهت چپ برای منوی ناوبری، و جهت‌های
              بالا/پایین برای اعلان‌ها و فیلترها مناسب هستند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              دکمه‌های اقدام (Action Buttons)
            </h3>
            <p className="text-muted-foreground">
              دکمه‌های اصلی و ثانویه را در SheetFooter قرار دهید. دکمه انصراف
              همیشه باید وجود داشته باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              محتوای طولانی (Long Content)
            </h3>
            <p className="text-muted-foreground">
              برای محتوای طولانی از یک div با flex-1 و overflow-y-auto استفاده
              کنید تا محتوا قابل اسکرول باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تفاوت با Drawer و Dialog
            </h3>
            <p className="text-muted-foreground">
              از Sheet برای پنل‌های کناری بدون حرکت لمسی استفاده کنید. از Drawer
              برای محتوای موبایل با قابلیت کشیدن و از Dialog برای مودال‌های
              مرکزی استفاده کنید
            </p>
          </div>
        </div>
      </section>

      {/* Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div
          className="relative rounded-lg overflow-x-auto border border-border bg-muted"
          dir="ltr"
        >
          <button
            onClick={() => navigator.clipboard.writeText(codeExamples.usage)}
            className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
            aria-label="Copy code"
          >
            <Copy className="h-4 w-4" />
          </button>
          <SyntaxHighlighter
            language="tsx"
            style={oneLight}
            showLineNumbers
            customStyle={{
              margin: 0,
              borderRadius: "0.5rem",
              fontSize: "0.875rem",
              background: "transparent",
            }}
            codeTagProps={{ style: { background: "transparent" } }}
          >
            {codeExamples.usage}
          </SyntaxHighlighter>
        </div>
      </section>

      {/* Advanced Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های پیشرفته (Advanced Examples)
        </h2>
        <div className="space-y-8">
          <div>
            <h3 className="text-lg font-semibold mb-2">
              منوی ناوبری (Navigation Menu)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              استفاده از شیت برای منوی ناوبری موبایل
            </p>
            <div
              className="relative rounded-lg overflow-x-auto border border-border bg-muted"
              dir="ltr"
            >
              <button
                onClick={() =>
                  navigator.clipboard.writeText(codeExamples.navigation)
                }
                className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
                aria-label="Copy code"
              >
                <Copy className="h-4 w-4" />
              </button>
              <SyntaxHighlighter
                language="tsx"
                style={oneLight}
                showLineNumbers
                customStyle={{
                  margin: 0,
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  background: "transparent",
                }}
                codeTagProps={{ style: { background: "transparent" } }}
              >
                {codeExamples.navigation}
              </SyntaxHighlighter>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-2">
              جلوگیری از بسته شدن (Prevent Close)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              جلوگیری از بسته شدن شیت با کلیک خارج یا کلید Escape
            </p>
            <div
              className="relative rounded-lg overflow-x-auto border border-border bg-muted"
              dir="ltr"
            >
              <button
                onClick={() =>
                  navigator.clipboard.writeText(codeExamples.preventClose)
                }
                className="absolute top-3 right-3 p-2 rounded-md bg-muted/80 hover:bg-muted text-muted-foreground hover:text-foreground transition-colors z-10"
                aria-label="Copy code"
              >
                <Copy className="h-4 w-4" />
              </button>
              <SyntaxHighlighter
                language="tsx"
                style={oneLight}
                showLineNumbers
                customStyle={{
                  margin: 0,
                  borderRadius: "0.5rem",
                  fontSize: "0.875rem",
                  background: "transparent",
                }}
                codeTagProps={{ style: { background: "transparent" } }}
              >
                {codeExamples.preventClose}
              </SyntaxHighlighter>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
