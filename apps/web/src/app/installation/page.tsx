"use client";

import { motion } from "framer-motion";
import { Terminal, Package, Settings, Palette, ArrowLeft } from "lucide-react";
import Link from "next/link";
import { cn, Button, Separator } from "@/registry/web/ui";

export default function InstallationPage() {
  return (
    <div className="min-h-screen pt-24 pb-20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="mb-12"
        >
          <h1 className="text-4xl sm:text-5xl font-bold mb-4">
            نصب و راه‌اندازی
          </h1>
          <p className="text-lg text-muted-foreground leading-relaxed">
            نحوه نصب وابستگی‌ها و ساختاردهی پروژه با راد
          </p>
        </motion.div>

        {/* Quick Start */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="mb-16"
        >
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="flex items-center gap-3 mb-4">
              <div className="p-2 rounded-lg bg-primary/10">
                <Terminal className="h-5 w-5 text-primary" />
              </div>
              <h2 className="text-2xl font-bold">شروع سریع</h2>
            </div>
            <p className="text-muted-foreground mb-6">
              برای شروع سریع، فقط یک دستور کافی است:
            </p>
            <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
              <code className="text-foreground">npx @quark-lab/rad-ui init</code>
            </div>
            <p className="text-sm text-muted-foreground mt-4">
              این دستور پروژه شما را شناسایی کرده و تنظیمات لازم را انجام می‌دهد.
            </p>
          </div>
        </motion.section>

        <Separator className="my-12" />

        {/* Step-by-Step Guide */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="space-y-12"
        >
          <h2 className="text-3xl font-bold mb-8">راهنمای گام‌به‌گام</h2>

          {/* Step 1: Prerequisites */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                ۱
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">پیش‌نیازها</h3>
                <p className="text-muted-foreground mb-4">
                  قبل از نصب راد، مطمئن شوید که موارد زیر را نصب کرده‌اید:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4">
                  <li>React 18 یا بالاتر</li>
                  <li>Tailwind CSS 3.x یا 4.x</li>
                  <li>Node.js 16 یا بالاتر</li>
                </ul>
                <div className="mt-4 p-4 bg-muted/50 rounded-lg">
                  <p className="text-sm text-muted-foreground">
                    <strong>نکته:</strong> راد با تمام مدیران بسته (npm, pnpm, yarn, bun) سازگار است.
                  </p>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Step 2: Initialize Project */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                ۲
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Package className="h-5 w-5" />
                  راه‌اندازی پروژه
                </h3>
                <p className="text-muted-foreground mb-4">
                  دستور زیر را در ریشه پروژه خود اجرا کنید:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                  <code className="text-foreground">npx @quark-lab/rad-ui init</code>
                </div>
                <p className="text-muted-foreground mb-4">
                  این دستور از شما چند سوال می‌پرسد:
                </p>
                <div className="space-y-3">
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <p className="font-medium mb-2">انتخاب تم</p>
                    <p className="text-sm text-muted-foreground">
                      یکی از ۵ تم فارسی را انتخاب کنید: کاهگل، فیروزه، لاجورد، پسته، یا انار
                    </p>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <p className="font-medium mb-2">مسیر کامپوننت‌ها</p>
                    <p className="text-sm text-muted-foreground">
                      مسیری که می‌خواهید کامپوننت‌ها در آن ذخیره شوند (پیش‌فرض: <code className="bg-muted px-1 rounded">src/components/ui</code>)
                    </p>
                  </div>
                  <div className="p-4 bg-card border border-border rounded-lg">
                    <p className="font-medium mb-2">نسخه Tailwind</p>
                    <p className="text-sm text-muted-foreground">
                      نسخه Tailwind CSS شما به صورت خودکار شناسایی می‌شود (v3 یا v4)
                    </p>
                  </div>
                </div>
                <div className="mt-6 p-4 bg-primary/5 border border-primary/20 rounded-lg">
                  <p className="text-sm">
                    <strong>فایل‌های ایجاد شده:</strong>
                  </p>
                  <ul className="list-disc list-inside space-y-1 text-sm text-muted-foreground mr-4 mt-2">
                    <li><code className="bg-muted px-1 rounded">rad-ui.json</code> - فایل پیکربندی</li>
                    <li><code className="bg-muted px-1 rounded">src/app/globals.css</code> - متغیرهای تم</li>
                    <li><code className="bg-muted px-1 rounded">src/lib/utils.ts</code> - توابع کمکی</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Step 3: Add Components */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                ۳
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3">افزودن کامپوننت</h3>
                <p className="text-muted-foreground mb-4">
                  حالا می‌توانید کامپوننت‌های مورد نیاز خود را اضافه کنید:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                  <code className="text-foreground">npx @quark-lab/rad-ui add button</code>
                </div>
                <p className="text-muted-foreground mb-4">
                  این دستور:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground mr-4 mb-4">
                  <li>کامپوننت را دانلود می‌کند</li>
                  <li>وابستگی‌های داخلی را به صورت خودکار نصب می‌کند</li>
                  <li>بسته‌های npm مورد نیاز را اضافه می‌کند</li>
                </ul>
                <div className="bg-card border border-border rounded-lg p-4">
                  <p className="font-medium mb-2">مثال استفاده:</p>
                  <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                    <code className="text-foreground">
{`import { Button } from "@/components/ui/button";

export default function MyComponent() {
  return <Button>کلیک کنید</Button>;
}`}
                    </code>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Step 4: Configuration */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                ۴
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Settings className="h-5 w-5" />
                  پیکربندی
                </h3>
                <p className="text-muted-foreground mb-4">
                  فایل <code className="bg-muted px-1 rounded">rad-ui.json</code> تنظیمات پروژه شما را نگه می‌دارد:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <code className="text-foreground">
{`{
  "theme": "kahgel",
  "tailwindVersion": "v3",
  "paths": {
    "components": "src/components/ui",
    "utils": "src/lib/utils.ts"
  },
  "aliases": {
    "@": "./src"
  }
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>

          <Separator />

          {/* Step 5: Tailwind Configuration */}
          <div className="space-y-6">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold">
                ۵
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold mb-3 flex items-center gap-2">
                  <Palette className="h-5 w-5" />
                  تنظیمات Tailwind
                </h3>
                <p className="text-muted-foreground mb-4">
                  راد با هر دو نسخه Tailwind CSS v3 و v4 سازگار است. برای پشتیبانی از RTL، پلاگین زیر را نصب کنید:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto mb-4">
                  <code className="text-foreground">npm install tailwindcss-rtl</code>
                </div>
                <p className="text-muted-foreground mb-4">
                  سپس در <code className="bg-muted px-1 rounded">tailwind.config.ts</code> اضافه کنید:
                </p>
                <div className="bg-muted/50 rounded-lg p-4 font-mono text-sm overflow-x-auto">
                  <code className="text-foreground">
{`module.exports = {
  plugins: [
    require('tailwindcss-rtl'),
  ],
}`}
                  </code>
                </div>
              </div>
            </div>
          </div>
        </motion.section>

        <Separator className="my-12" />

        {/* Next Steps */}
        <motion.section
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl p-8"
        >
          <h2 className="text-2xl font-bold mb-4">مراحل بعدی</h2>
          <p className="text-muted-foreground mb-6">
            حالا که راد را نصب کردید، می‌توانید کامپوننت‌ها را کاوش کنید:
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link href="/components">
              <Button size="lg" className="gap-2">
                مشاهده کامپوننت‌ها
                <ArrowLeft className="h-4 w-4" />
              </Button>
            </Link>
            <Link href="/components/button">
              <Button size="lg" variant="outline">
                شروع با Button
              </Button>
            </Link>
          </div>
        </motion.section>
      </div>
    </div>
  );
}
