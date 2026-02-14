"use client";

import * as React from "react";
import {
  InputGroup,
  InputGroupAddon,
  InputGroupButton,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
  Label,
  Kbd,
  Button,
} from "@/registry/web/ui";
import { Search, Copy, Eye, EyeOff, Mail, Globe, Loader2 } from "lucide-react";

export default function InputGroupDemo() {
  const [showPassword, setShowPassword] = React.useState(false);
  const [searchQuery, setSearchQuery] = React.useState("");
  const [charCount, setCharCount] = React.useState(0);
  const maxChars = 280;

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">گروه ورودی (Input Group)</h1>
        <p className="text-lg text-muted-foreground">
          افزودن آیکون‌ها، دکمه‌ها و محتوای کمکی به ورودی‌ها با پشتیبانی کامل از
          RTL.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quark-lab/rad-ui add input-group`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm space-y-2">
            <Label>جستجو</Label>
            <InputGroup>
              <InputGroupInput placeholder="جستجو..." />
              <InputGroupAddon align="inline-end">
                <Search className="size-4" />
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
        <div className="mt-4 bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import {
  InputGroup,
  InputGroupAddon,
  InputGroupInput,
} from "@/components/ui/input-group";

<InputGroup>
  <InputGroupInput placeholder="جستجو..." />
  <InputGroupAddon align="inline-end">
    <SearchIcon />
  </InputGroupAddon>
</InputGroup>`}</code>
          </pre>
        </div>
      </section>

      {/* Align - inline-start */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          موقعیت افزونه (Addon Alignment)
        </h2>

        <div className="space-y-8">
          {/* inline-start */}
          <div>
            <h3 className="text-lg font-medium mb-3">
              شروع خطی (inline-start)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              افزونه در ابتدای ورودی قرار می‌گیرد. این حالت پیش‌فرض است.
            </p>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-sm space-y-2">
                <Label>ایمیل</Label>
                <InputGroup>
                  <InputGroupInput placeholder="ایمیل خود را وارد کنید" />
                  <InputGroupAddon align="inline-start">
                    <Mail className="size-4" />
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </div>

          {/* inline-end */}
          <div>
            <h3 className="text-lg font-medium mb-3">
              انتهای خطی (inline-end)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              افزونه در انتهای ورودی قرار می‌گیرد.
            </p>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-sm space-y-2">
                <Label>جستجو</Label>
                <InputGroup>
                  <InputGroupInput placeholder="جستجو..." />
                  <InputGroupAddon align="inline-end">
                    <Search className="size-4" />
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </div>

          {/* block-start */}
          <div>
            <h3 className="text-lg font-medium mb-3">
              بالای بلوک (block-start)
            </h3>
            <p className="text-sm text-muted-foreground mb-4">
              افزونه در بالای ورودی قرار می‌گیرد.
            </p>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-sm space-y-2">
                <Label>ناحیه متن</Label>
                <InputGroup className="flex-col">
                  <InputGroupTextarea
                    placeholder="پیام خود را بنویسید..."
                    rows={3}
                  />
                  <InputGroupAddon align="block-start">
                    <InputGroupText>script.js</InputGroupText>
                    <InputGroupButton>
                      <Copy className="size-3.5" />
                      کپی
                    </InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </div>

          {/* block-end */}
          <div>
            <h3 className="text-lg font-medium mb-3">پایین بلوک (block-end)</h3>
            <p className="text-sm text-muted-foreground mb-4">
              افزونه در پایین ورودی قرار می‌گیرد.
            </p>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-sm space-y-2">
                <Label>ناحیه متن</Label>
                <InputGroup className="flex-col">
                  <InputGroupTextarea
                    placeholder="پیام خود را بنویسید..."
                    rows={3}
                    maxLength={maxChars}
                    value={searchQuery}
                    onChange={(e) => {
                      setSearchQuery(e.target.value);
                      setCharCount(e.target.value.length);
                    }}
                  />
                  <InputGroupAddon align="block-end">
                    <InputGroupText>
                      {charCount}/{maxChars}
                    </InputGroupText>
                    <InputGroupButton>ارسال</InputGroupButton>
                  </InputGroupAddon>
                </InputGroup>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Icon Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">آیکون (Icon)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm space-y-4">
            <div className="space-y-2">
              <Label>جستجو</Label>
              <InputGroup>
                <InputGroupInput placeholder="جستجو..." />
                <InputGroupAddon align="inline-start">
                  <Search className="size-4" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label>ایمیل</Label>
              <InputGroup>
                <InputGroupInput placeholder="user@example.com" />
                <InputGroupAddon align="inline-end">
                  <Mail className="size-4" />
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Text Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">متن (Text)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm space-y-4">
            <div className="space-y-2">
              <Label>آدرس وب‌سایت</Label>
              <InputGroup>
                <InputGroupInput placeholder="example.com" />
                <InputGroupAddon align="inline-start">
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label>ایمیل شرکت</Label>
              <InputGroup>
                <InputGroupInput placeholder="نام کاربری" />
                <InputGroupAddon align="inline-end">
                  <InputGroupText>@company.com</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label>قیمت</Label>
              <InputGroup>
                <InputGroupInput placeholder="0" type="number" />
                <InputGroupAddon align="inline-start">
                  <InputGroupText>تومان</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Button Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">دکمه (Button)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm space-y-4">
            <div className="space-y-2">
              <Label>جستجوی وب‌سایت</Label>
              <InputGroup>
                <InputGroupInput placeholder="جستجو..." />
                <InputGroupAddon align="inline-start">
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <InputGroupButton>
                    <Search className="size-3.5" />
                    جستجو
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label>رمز عبور</Label>
              <InputGroup>
                <InputGroupInput
                  type={showPassword ? "text" : "password"}
                  placeholder="رمز عبور"
                />
                <InputGroupAddon align="inline-end">
                  <InputGroupButton
                    size="icon-xs"
                    aria-label={showPassword ? "مخفی کردن" : "نمایش"}
                    onClick={() => setShowPassword(!showPassword)}
                  >
                    {showPassword ? (
                      <EyeOff className="size-3.5" />
                    ) : (
                      <Eye className="size-3.5" />
                    )}
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Kbd Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">میانبر صفحه‌کلید (Kbd)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm space-y-2">
            <Label>جستجوی سریع</Label>
            <InputGroup>
              <InputGroupInput placeholder="جستجو..." />
              <InputGroupAddon align="inline-end">
                <Kbd>⌘K</Kbd>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      {/* Spinner / Loading */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">بارگذاری (Loading)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm space-y-2">
            <Label>در حال ذخیره</Label>
            <InputGroup>
              <InputGroupInput placeholder="در حال ذخیره..." disabled />
              <InputGroupAddon align="inline-end">
                <Loader2 className="size-4 animate-spin" />
                <InputGroupText>ذخیره...</InputGroupText>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      {/* Textarea Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">ناحیه متن (Textarea)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm space-y-2">
            <Label>پیام</Label>
            <InputGroup className="flex-col">
              <InputGroupTextarea
                placeholder="پیام خود را بنویسید..."
                rows={4}
              />
              <InputGroupAddon align="block-end">
                <InputGroupText>۰/۲۸۰</InputGroupText>
                <InputGroupButton>ارسال</InputGroupButton>
              </InputGroupAddon>
            </InputGroup>
          </div>
        </div>
      </section>

      {/* Combined / Practical Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          نمونه کاربردی (Practical Example)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <form className="max-w-md space-y-4">
            <div className="space-y-2">
              <Label>نام کامل</Label>
              <InputGroup>
                <InputGroupInput placeholder="نام و نام خانوادگی" />
                <InputGroupAddon align="inline-start">
                  <Globe className="size-4" />
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label>ایمیل</Label>
              <InputGroup>
                <InputGroupInput placeholder="user" />
                <InputGroupAddon align="inline-end">
                  <InputGroupText>@company.com</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label>آدرس وب‌سایت</Label>
              <InputGroup>
                <InputGroupInput placeholder="example.com" />
                <InputGroupAddon align="inline-start">
                  <InputGroupText>https://</InputGroupText>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="space-y-2">
              <Label>توضیحات</Label>
              <InputGroup className="flex-col">
                <InputGroupTextarea
                  placeholder="توضیحات را بنویسید..."
                  rows={3}
                />
                <InputGroupAddon align="block-end">
                  <InputGroupText className="flex-1">
                    حداکثر ۵۰۰ کاراکتر
                  </InputGroupText>
                  <InputGroupButton>
                    <Copy className="size-3.5" />
                    کپی
                  </InputGroupButton>
                </InputGroupAddon>
              </InputGroup>
            </div>
            <div className="flex justify-end gap-3 pt-2">
              <Button variant="outline" type="button">
                لغو
              </Button>
              <Button type="submit">ذخیره</Button>
            </div>
          </form>
        </div>
      </section>

      {/* RTL Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">پشتیبانی RTL</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            کامپوننت گروه ورودی به طور کامل از جهت‌گیری راست‌چین پشتیبانی
            می‌کند. از ویژگی‌های منطقی CSS برای تعیین موقعیت افزونه‌ها استفاده
            می‌شود.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              <code dir="ltr">inline-start</code> و{" "}
              <code dir="ltr">inline-end</code> بر اساس جهت سند تنظیم می‌شوند
            </li>
            <li>
              فاصله‌گذاری از <code dir="ltr">ps-</code> و{" "}
              <code dir="ltr">pe-</code> (ویژگی‌های منطقی) استفاده می‌کند
            </li>
            <li>
              گوشه‌های گرد از <code dir="ltr">rounded-s-md</code> و{" "}
              <code dir="ltr">rounded-e-md</code> استفاده می‌کنند
            </li>
          </ul>
        </div>
        <div className="mt-6 p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm space-y-4">
            <div className="space-y-2">
              <Label>جستجو</Label>
              <InputGroup>
                <InputGroupInput placeholder="عبارت مورد نظر..." />
                <InputGroupAddon align="inline-start">
                  <Search className="size-4" />
                </InputGroupAddon>
                <InputGroupAddon align="inline-end">
                  <Kbd>⌘K</Kbd>
                </InputGroupAddon>
              </InputGroup>
              <p className="text-xs text-muted-foreground">
                آیکون در سمت راست و میانبر در سمت چپ قرار می‌گیرد.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        {/* InputGroup */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          InputGroup
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          کامپوننت اصلی که ورودی‌ها و افزونه‌ها را در بر می‌گیرد.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                <th className="text-right p-4 font-semibold">نوع (Type)</th>
                <th className="text-right p-4 font-semibold">
                  پیش‌فرض (Default)
                </th>
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4" dir="ltr">
                  <code>className</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">کلاس‌های CSS سفارشی</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* InputGroupAddon */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          InputGroupAddon
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          نمایش آیکون‌ها، متن، دکمه‌ها یا محتوای دیگر در کنار ورودی.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                <th className="text-right p-4 font-semibold">نوع (Type)</th>
                <th className="text-right p-4 font-semibold">
                  پیش‌فرض (Default)
                </th>
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>align</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>
                    {
                      '"inline-start" | "inline-end" | "block-start" | "block-end"'
                    }
                  </code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>&quot;inline-start&quot;</code>
                </td>
                <td className="p-4">موقعیت افزونه نسبت به ورودی</td>
              </tr>
              <tr>
                <td className="p-4" dir="ltr">
                  <code>className</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">کلاس‌های CSS سفارشی</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* InputGroupButton */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          InputGroupButton
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          نمایش دکمه‌ها در گروه ورودی.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                <th className="text-right p-4 font-semibold">نوع (Type)</th>
                <th className="text-right p-4 font-semibold">
                  پیش‌فرض (Default)
                </th>
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>size</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{'"xs" | "sm" | "icon-xs" | "icon-sm"'}</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>&quot;xs&quot;</code>
                </td>
                <td className="p-4">اندازه دکمه</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>variant</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>
                    {'"default" | "destructive" | "outline" | "ghost" | "link"'}
                  </code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>&quot;ghost&quot;</code>
                </td>
                <td className="p-4">نوع ظاهری دکمه</td>
              </tr>
              <tr>
                <td className="p-4" dir="ltr">
                  <code>className</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">کلاس‌های CSS سفارشی</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* InputGroupInput */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          InputGroupInput
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          جایگزین <code dir="ltr">{`<Input />`}</code> برای استفاده در گروه
          ورودی. استایل‌های گروه به صورت خودکار اعمال می‌شود.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                <th className="text-right p-4 font-semibold">نوع (Type)</th>
                <th className="text-right p-4 font-semibold">
                  پیش‌فرض (Default)
                </th>
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4" dir="ltr">
                  <code>...props</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>InputHTMLAttributes</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">تمام ویژگی‌های استاندارد HTML input</td>
              </tr>
            </tbody>
          </table>
        </div>

        {/* InputGroupTextarea */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          InputGroupTextarea
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          جایگزین <code dir="ltr">{`<Textarea />`}</code> برای استفاده در گروه
          ورودی.
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
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4" dir="ltr">
                  <code>...props</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>TextareaHTMLAttributes</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">تمام ویژگی‌های استاندارد HTML textarea</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
