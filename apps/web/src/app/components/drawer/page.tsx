"use client";

import * as React from "react";
import { useState } from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { Copy } from "lucide-react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Button,
  Input,
  Label,
  cn,
} from "@/registry/web/ui";
import { useMediaQuery } from "@/hooks/use-media-query";

const codeExamples = {
  basic: `import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export function DrawerDemo() {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="outline">باز کردن کشو</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader>
            <DrawerTitle>عنوان کشو</DrawerTitle>
            <DrawerDescription>
              این یک توضیح کوتاه درباره محتوای کشو است
            </DrawerDescription>
          </DrawerHeader>
          <div className="p-4">
            <p>محتوای اصلی کشو در اینجا قرار می‌گیرد</p>
          </div>
          <DrawerFooter>
            <Button>تایید</Button>
            <DrawerClose asChild>
              <Button variant="outline">انصراف</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}`,
  directions: `import { Drawer, DrawerContent, DrawerTrigger } from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

const DRAWER_SIDES = ["top", "right", "bottom", "left"] as const;

export function DrawerDirections() {
  return (
    <div className="flex flex-wrap gap-2">
      {DRAWER_SIDES.map((side) => (
        <Drawer key={side} direction={side}>
          <DrawerTrigger asChild>
            <Button variant="outline" className="capitalize">
              {side}
            </Button>
          </DrawerTrigger>
          <DrawerContent>
            <DrawerHeader>
              <DrawerTitle>کشو از {side}</DrawerTitle>
            </DrawerHeader>
            <div className="p-4">محتوای کشو</div>
            <DrawerFooter>
              <DrawerClose asChild>
                <Button variant="outline">بستن</Button>
              </DrawerClose>
            </DrawerFooter>
          </DrawerContent>
        </Drawer>
      ))}
    </div>
  );
}`,
  withForm: `<Drawer>
  <DrawerTrigger asChild>
    <Button variant="outline">ویرایش پروفایل</Button>
  </DrawerTrigger>
  <DrawerContent>
    <div className="mx-auto w-full max-w-sm">
      <DrawerHeader>
        <DrawerTitle>ویرایش پروفایل</DrawerTitle>
        <DrawerDescription>
          تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
        </DrawerDescription>
      </DrawerHeader>
      <div className="p-4 space-y-4">
        <div className="space-y-2">
          <Label htmlFor="name">نام</Label>
          <Input id="name" defaultValue="علی کاوسی" />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">ایمیل</Label>
          <Input id="email" type="email" defaultValue="ali@example.com" />
        </div>
      </div>
      <DrawerFooter>
        <Button>ذخیره تغییرات</Button>
        <DrawerClose asChild>
          <Button variant="outline">انصراف</Button>
        </DrawerClose>
      </DrawerFooter>
    </div>
  </DrawerContent>
</Drawer>`,
  scrollable: `<Drawer direction="right">
  <DrawerTrigger asChild>
    <Button variant="outline">محتوای قابل اسکرول</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>محتوای طولانی</DrawerTitle>
      <DrawerDescription>این کشو محتوای قابل اسکرول دارد</DrawerDescription>
    </DrawerHeader>
    <div className="overflow-y-auto px-4 flex-1">
      {Array.from({ length: 10 }).map((_, index) => (
        <p key={index} className="mb-4 leading-relaxed">
          لورم ایپسوم متن ساختگی...
        </p>
      ))}
    </div>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">بستن</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
  controlled: `const [open, setOpen] = useState(false);

<Drawer open={open} onOpenChange={setOpen}>
  <DrawerTrigger asChild>
    <Button variant="outline">کشو کنترل‌شده</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>کشو کنترل‌شده</DrawerTitle>
      <DrawerDescription>
        این کشو با استفاده از state کنترل می‌شود
      </DrawerDescription>
    </DrawerHeader>
    <DrawerFooter>
      <Button onClick={() => setOpen(false)}>بستن با کد</Button>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
  usage: `import { useState } from "react";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Button } from "@/components/ui/button";

export default function MyComponent() {
  const [open, setOpen] = useState(false);

  return (
    <div>
      {/* Basic Drawer */}
      <Drawer>
        <DrawerTrigger asChild>
          <Button>Open Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Title</DrawerTitle>
            <DrawerDescription>Description</DrawerDescription>
          </DrawerHeader>
          <div className="p-4">Content goes here</div>
          <DrawerFooter>
            <Button>Submit</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancel</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>

      {/* Side Drawer */}
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button>Open Side Drawer</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Side Panel</DrawerTitle>
          </DrawerHeader>
          <div className="p-4">Side content</div>
        </DrawerContent>
      </Drawer>

      {/* Controlled Drawer */}
      <Drawer open={open} onOpenChange={setOpen}>
        <DrawerTrigger asChild>
          <Button>Controlled</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>Controlled Drawer</DrawerTitle>
          </DrawerHeader>
          <Button onClick={() => setOpen(false)}>
            Close programmatically
          </Button>
        </DrawerContent>
      </Drawer>
    </div>
  );
}`,
  nested: `<Drawer direction="right">
  <DrawerTrigger asChild>
    <Button variant="outline">کشو تودرتو</Button>
  </DrawerTrigger>
  <DrawerContent>
    <DrawerHeader>
      <DrawerTitle>کشو اول</DrawerTitle>
    </DrawerHeader>
    <div className="p-4">
      <Drawer direction="right">
        <DrawerTrigger asChild>
          <Button>باز کردن کشو دوم</Button>
        </DrawerTrigger>
        <DrawerContent>
          <DrawerHeader>
            <DrawerTitle>کشو دوم</DrawerTitle>
          </DrawerHeader>
          <DrawerFooter>
            <DrawerClose asChild>
              <Button variant="outline">بستن</Button>
            </DrawerClose>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </div>
    <DrawerFooter>
      <DrawerClose asChild>
        <Button variant="outline">بستن</Button>
      </DrawerClose>
    </DrawerFooter>
  </DrawerContent>
</Drawer>`,
  responsiveDialog: `import * as React from "react";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";
import { useMediaQuery } from "@/hooks/use-media-query";

export function ResponsiveDialog() {
  const [open, setOpen] = React.useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">ویرایش پروفایل</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>ویرایش پروفایل</DialogTitle>
            <DialogDescription>
              تغییرات خود را اعمال کنید. پس از اتمام روی ذخیره کلیک کنید.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">ویرایش پروفایل</Button>
      </DrawerTrigger>
      <DrawerContent>
        <DrawerHeader className="text-start">
          <DrawerTitle>ویرایش پروفایل</DrawerTitle>
          <DrawerDescription>
            تغییرات خود را اعمال کنید. پس از اتمام روی ذخیره کلیک کنید.
          </DrawerDescription>
        </DrawerHeader>
        <ProfileForm className="px-4" />
        <DrawerFooter className="pt-2">
          <DrawerClose asChild>
            <Button variant="outline">انصراف</Button>
          </DrawerClose>
        </DrawerFooter>
      </DrawerContent>
    </Drawer>
  );
}

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="email">ایمیل</Label>
        <Input type="email" id="email" defaultValue="ali@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="username">نام کاربری</Label>
        <Input id="username" defaultValue="@alikawosi" />
      </div>
      <Button type="submit">ذخیره تغییرات</Button>
    </form>
  );
}`,
};

function ProfileForm({ className }: React.ComponentProps<"form">) {
  return (
    <form className={cn("grid items-start gap-6", className)}>
      <div className="grid gap-3">
        <Label htmlFor="resp-email">ایمیل</Label>
        <Input type="email" id="resp-email" defaultValue="ali@example.com" />
      </div>
      <div className="grid gap-3">
        <Label htmlFor="resp-username">نام کاربری</Label>
        <Input id="resp-username" defaultValue="@alikawosi" />
      </div>
      <Button type="submit">ذخیره تغییرات</Button>
    </form>
  );
}

function ResponsiveDialogDemo() {
  const [open, setOpen] = useState(false);
  const isDesktop = useMediaQuery("(min-width: 768px)");

  if (isDesktop) {
    return (
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogTrigger asChild>
          <Button variant="outline">ویرایش پروفایل</Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
          <DialogHeader>
            <DialogTitle>ویرایش پروفایل</DialogTitle>
            <DialogDescription>
              تغییرات خود را اعمال کنید. پس از اتمام روی ذخیره کلیک کنید.
            </DialogDescription>
          </DialogHeader>
          <ProfileForm />
        </DialogContent>
      </Dialog>
    );
  }

  return (
    <Drawer open={open} onOpenChange={setOpen}>
      <DrawerTrigger asChild>
        <Button variant="outline">ویرایش پروفایل</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm">
          <DrawerHeader className="text-start">
            <DrawerTitle>ویرایش پروفایل</DrawerTitle>
            <DrawerDescription>
              تغییرات خود را اعمال کنید. پس از اتمام روی ذخیره کلیک کنید.
            </DrawerDescription>
          </DrawerHeader>
          <ProfileForm className="px-4" />
          <DrawerFooter className="pt-2">
            <DrawerClose asChild>
              <Button variant="outline">انصراف</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}

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

export default function DrawerPage() {
  const [open, setOpen] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">کشو (Drawer)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت کشو برای نمایش پنل‌های کشویی از لبه‌های صفحه استفاده می‌شود.
          این کامپوننت برای موبایل بهینه شده و از حرکات لمسی پشتیبانی می‌کند.
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
              navigator.clipboard.writeText("npx @quark-lab/rad-ui add drawer")
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
            npx @quark-lab/rad-ui add drawer
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
            ساده‌ترین حالت استفاده از کشو که از پایین صفحه باز می‌شود
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">باز کردن کشو</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>عنوان کشو</DrawerTitle>
                    <DrawerDescription>
                      این یک توضیح کوتاه درباره محتوای کشو است
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p className="text-muted-foreground">
                      محتوای اصلی کشو در اینجا قرار می‌گیرد
                    </p>
                  </div>
                  <DrawerFooter>
                    <Button>تایید</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">انصراف</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <CodeBlock code={codeExamples.basic} />
        </div>

        {/* Directions */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">جهت‌ها (Directions)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            کشو می‌تواند از چهار جهت باز شود: بالا، راست، پایین و چپ
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex flex-wrap items-center justify-center gap-2">
            {(["top", "right", "bottom", "left"] as const).map((direction) => (
              <Drawer key={direction} direction={direction}>
                <DrawerTrigger asChild>
                  <Button variant="outline" className="capitalize">
                    {direction === "top"
                      ? "بالا"
                      : direction === "right"
                        ? "راست"
                        : direction === "bottom"
                          ? "پایین"
                          : "چپ"}
                  </Button>
                </DrawerTrigger>
                <DrawerContent>
                  <DrawerHeader>
                    <DrawerTitle>کشو از {direction}</DrawerTitle>
                    <DrawerDescription>
                      این کشو از جهت {direction} باز می‌شود
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4">
                    <p className="text-muted-foreground">محتوای کشو</p>
                  </div>
                  <DrawerFooter>
                    <DrawerClose asChild>
                      <Button variant="outline">بستن</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </DrawerContent>
              </Drawer>
            ))}
          </div>

          <CodeBlock code={codeExamples.directions} />
        </div>

        {/* With Form */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">با فرم (With Form)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            کشو با فرم ورودی برای ویرایش اطلاعات
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Drawer>
              <DrawerTrigger asChild>
                <Button variant="outline">ویرایش پروفایل</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>ویرایش پروفایل</DrawerTitle>
                    <DrawerDescription>
                      تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
                    </DrawerDescription>
                  </DrawerHeader>
                  <div className="p-4 space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="drawer-name">نام</Label>
                      <Input id="drawer-name" defaultValue="علی کاوسی" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="drawer-email">ایمیل</Label>
                      <Input
                        id="drawer-email"
                        type="email"
                        defaultValue="ali@example.com"
                      />
                    </div>
                  </div>
                  <DrawerFooter>
                    <Button>ذخیره تغییرات</Button>
                    <DrawerClose asChild>
                      <Button variant="outline">انصراف</Button>
                    </DrawerClose>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
          </div>

          <CodeBlock code={codeExamples.withForm} />
        </div>

        {/* Scrollable Content */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            محتوای قابل اسکرول (Scrollable Content)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            کشو با محتوای طولانی که قابل اسکرول است
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <Drawer direction="right">
              <DrawerTrigger asChild>
                <Button variant="outline">محتوای قابل اسکرول</Button>
              </DrawerTrigger>
              <DrawerContent>
                <DrawerHeader>
                  <DrawerTitle>محتوای طولانی</DrawerTitle>
                  <DrawerDescription>
                    این کشو محتوای قابل اسکرول دارد
                  </DrawerDescription>
                </DrawerHeader>
                <div className="overflow-y-auto px-4 flex-1">
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
                <DrawerFooter>
                  <DrawerClose asChild>
                    <Button variant="outline">بستن</Button>
                  </DrawerClose>
                </DrawerFooter>
              </DrawerContent>
            </Drawer>
          </div>

          <CodeBlock code={codeExamples.scrollable} />
        </div>

        {/* Controlled */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">کنترل شده (Controlled)</h3>
          <p className="text-sm text-muted-foreground mb-4">
            کنترل وضعیت باز/بسته کشو با استفاده از state
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex flex-col items-center justify-center gap-4">
            <Drawer open={open} onOpenChange={setOpen}>
              <DrawerTrigger asChild>
                <Button variant="outline">کشو کنترل‌شده</Button>
              </DrawerTrigger>
              <DrawerContent>
                <div className="mx-auto w-full max-w-sm">
                  <DrawerHeader>
                    <DrawerTitle>کشو کنترل‌شده</DrawerTitle>
                    <DrawerDescription>
                      این کشو با استفاده از state کنترل می‌شود
                    </DrawerDescription>
                  </DrawerHeader>
                  <DrawerFooter>
                    <Button onClick={() => setOpen(false)}>بستن با کد</Button>
                  </DrawerFooter>
                </div>
              </DrawerContent>
            </Drawer>
            <p className="text-sm text-muted-foreground">
              وضعیت کشو: {open ? "باز" : "بسته"}
            </p>
          </div>

          <CodeBlock code={codeExamples.controlled} />
        </div>

        {/* Responsive Dialog */}
        <div className="mb-8">
          <h3 className="text-lg font-semibold mb-2">
            دیالوگ واکنش‌گرا (Responsive Dialog)
          </h3>
          <p className="text-sm text-muted-foreground mb-4">
            ترکیب Dialog و Drawer برای ساخت یک دیالوگ واکنش‌گرا. در دسکتاپ
            Dialog و در موبایل Drawer نمایش داده می‌شود.
          </p>

          <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
            <ResponsiveDialogDemo />
          </div>

          <CodeBlock code={codeExamples.responsiveDialog} />
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        {/* Drawer */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">Drawer</h3>
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
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>direction</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>
                      &quot;top&quot; | &quot;right&quot; | &quot;bottom&quot; |
                      &quot;left&quot;
                    </code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>&quot;bottom&quot;</code>
                  </td>
                  <td className="p-4">جهت باز شدن کشو</td>
                </tr>
                <tr className="border-b border-border">
                  <td className="p-4" dir="ltr">
                    <code>shouldScaleBackground</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>boolean</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>true</code>
                  </td>
                  <td className="p-4">کوچک شدن پس‌زمینه هنگام باز شدن</td>
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

        {/* DrawerContent */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold mb-4">DrawerContent</h3>
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
                    <code>className</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>string</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">کلاس‌های CSS اضافی</td>
                </tr>
                <tr>
                  <td className="p-4" dir="ltr">
                    <code>children</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>React.ReactNode</code>
                  </td>
                  <td className="p-4" dir="ltr">
                    <code>undefined</code>
                  </td>
                  <td className="p-4">محتوای کشو</td>
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
                - بستن کشو
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت بین المان‌های قابل فوکوس داخل کشو
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
              وقتی کشو باز است، فوکوس در داخل آن محبوس می‌شود و کاربر نمی‌تواند
              با Tab به خارج از کشو برود
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پشتیبانی از لمس (Touch Support)
            </h3>
            <p>
              کشو از حرکات لمسی پشتیبانی می‌کند. کاربران می‌توانند با کشیدن
              انگشت کشو را ببندند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">نقش‌های ARIA</h3>
            <p>
              کشو از{" "}
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
            <h3 className="font-semibold mb-3">
              استفاده در موبایل (Mobile First)
            </h3>
            <p className="text-muted-foreground">
              کشو برای تجربه موبایل بهینه شده است. برای دسکتاپ می‌توانید از
              Dialog استفاده کنید و بر اساس سایز صفحه بین آن‌ها سوییچ کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              جهت مناسب (Appropriate Direction)
            </h3>
            <p className="text-muted-foreground">
              کشو از پایین برای اقدامات سریع و منوها مناسب است. کشو از کنار برای
              پنل‌های ناوبری و فیلترها بهتر است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">عنوان واضح (Clear Title)</h3>
            <p className="text-muted-foreground">
              همیشه از DrawerTitle استفاده کنید تا کاربران صفحه‌خوان بتوانند
              محتوای کشو را درک کنند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              دکمه‌های اقدام (Action Buttons)
            </h3>
            <p className="text-muted-foreground">
              دکمه‌های اصلی و ثانویه را در DrawerFooter قرار دهید. دکمه انصراف
              همیشه باید وجود داشته باشد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">محتوای طولانی (Long Content)</h3>
            <p className="text-muted-foreground">
              برای محتوای طولانی از overflow-y-auto استفاده کنید. فوتر همیشه
              باید قابل مشاهده باقی بماند
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
              کشو تودرتو (Nested Drawer)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              باز کردن یک کشو از داخل کشوی دیگر
            </p>

            <div className="p-8 rounded-t-lg border border-border bg-card flex items-center justify-center">
              <Drawer direction="right">
                <DrawerTrigger asChild>
                  <Button variant="outline">کشو تودرتو</Button>
                </DrawerTrigger>
                <DrawerContent>
                  <div className="mx-auto w-full max-w-sm">
                    <DrawerHeader>
                      <DrawerTitle>کشو اول</DrawerTitle>
                      <DrawerDescription>
                        می‌توانید کشوی دوم را از اینجا باز کنید
                      </DrawerDescription>
                    </DrawerHeader>
                    <div className="p-4">
                      <Drawer direction="right">
                        <DrawerTrigger asChild>
                          <Button>باز کردن کشو دوم</Button>
                        </DrawerTrigger>
                        <DrawerContent>
                          <div className="mx-auto w-full max-w-sm">
                            <DrawerHeader>
                              <DrawerTitle>کشو دوم</DrawerTitle>
                              <DrawerDescription>
                                این کشوی تودرتو است
                              </DrawerDescription>
                            </DrawerHeader>
                            <DrawerFooter>
                              <DrawerClose asChild>
                                <Button variant="outline">بستن</Button>
                              </DrawerClose>
                            </DrawerFooter>
                          </div>
                        </DrawerContent>
                      </Drawer>
                    </div>
                    <DrawerFooter>
                      <DrawerClose asChild>
                        <Button variant="outline">بستن</Button>
                      </DrawerClose>
                    </DrawerFooter>
                  </div>
                </DrawerContent>
              </Drawer>
            </div>

            <CodeBlock code={codeExamples.nested} />
          </div>
        </div>
      </section>
    </div>
  );
}
