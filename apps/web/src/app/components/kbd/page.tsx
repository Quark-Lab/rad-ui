"use client";

import { Kbd, KbdGroup, Button } from "@/registry/web/ui";
import { Search, Copy, Save, Undo, Redo } from "lucide-react";

export default function KbdDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">صفحه‌کلید (Keyboard)</h1>
        <p className="text-lg text-muted-foreground">
          نمایش کلیدها و میانبرهای صفحه‌کلید
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quarklab/rad-ui add kbd`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <p className="text-muted-foreground mb-4">
          برای نمایش یک کلید از کامپوننت Kbd استفاده کنید
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center gap-4 flex-wrap">
            <Kbd>Ctrl</Kbd>
            <Kbd>Shift</Kbd>
            <Kbd>Alt</Kbd>
            <Kbd>Enter</Kbd>
            <Kbd>Tab</Kbd>
            <Kbd>Esc</Kbd>
          </div>
        </div>
      </section>

      {/* Keyboard Shortcuts */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          میانبرهای صفحه‌کلید (Keyboard Shortcuts)
        </h2>
        <p className="text-muted-foreground mb-4">
          با استفاده از KbdGroup می‌توانید چند کلید را کنار هم نمایش دهید
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-4">
            <div className="flex items-center gap-4">
              <span className="text-sm min-w-[120px]">کپی:</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <span className="text-muted-foreground">+</span>
                <Kbd>C</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm min-w-[120px]">قص:</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <span className="text-muted-foreground">+</span>
                <Kbd>X</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm min-w-[120px]">چسباندن:</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <span className="text-muted-foreground">+</span>
                <Kbd>V</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm min-w-[120px]">بازگشت:</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <span className="text-muted-foreground">+</span>
                <Kbd>Z</Kbd>
              </KbdGroup>
            </div>
            <div className="flex items-center gap-4">
              <span className="text-sm min-w-[120px]">تکرار:</span>
              <KbdGroup>
                <Kbd>Ctrl</Kbd>
                <span className="text-muted-foreground">+</span>
                <Kbd>Y</Kbd>
              </KbdGroup>
            </div>
          </div>
        </div>
      </section>

      {/* Platform Specific */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          میانبرهای سیستم‌عامل (Platform Shortcuts)
        </h2>
        <div className="grid md:grid-cols-2 gap-6">
          {/* Windows/Linux */}
          <div className="p-6 rounded-lg bg-card border border-border">
            <h3 className="text-lg font-semibold mb-4">Windows / Linux</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">ذخیره</span>
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>S</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">جستجو</span>
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>F</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">انتخاب همه</span>
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>A</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">تب جدید</span>
                <KbdGroup>
                  <Kbd>Ctrl</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>T</Kbd>
                </KbdGroup>
              </div>
            </div>
          </div>

          {/* macOS */}
          <div className="p-6 rounded-lg bg-card border border-border">
            <h3 className="text-lg font-semibold mb-4">macOS</h3>
            <div className="space-y-3">
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">ذخیره</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>S</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">جستجو</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>F</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">انتخاب همه</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>A</Kbd>
                </KbdGroup>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-muted-foreground">تب جدید</span>
                <KbdGroup>
                  <Kbd>⌘</Kbd>
                  <span className="text-muted-foreground">+</span>
                  <Kbd>T</Kbd>
                </KbdGroup>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Special Keys */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          کلیدهای خاص (Special Keys)
        </h2>
        <p className="text-muted-foreground mb-4">
          استفاده از نمادهای یونیکد برای کلیدهای ویژه
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="flex flex-col items-center gap-2">
              <Kbd>⌘</Kbd>
              <span className="text-xs text-muted-foreground">Command</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Kbd>⌥</Kbd>
              <span className="text-xs text-muted-foreground">Option</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Kbd>⇧</Kbd>
              <span className="text-xs text-muted-foreground">Shift</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Kbd>⌃</Kbd>
              <span className="text-xs text-muted-foreground">Control</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Kbd>↩</Kbd>
              <span className="text-xs text-muted-foreground">Return</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Kbd>⌫</Kbd>
              <span className="text-xs text-muted-foreground">Delete</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Kbd>⎋</Kbd>
              <span className="text-xs text-muted-foreground">Escape</span>
            </div>
            <div className="flex flex-col items-center gap-2">
              <Kbd>→</Kbd>
              <span className="text-xs text-muted-foreground">Arrow</span>
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
          {/* Example 1: With Buttons */}
          <div>
            <h3 className="text-lg font-medium mb-4">با دکمه‌ها</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex flex-wrap gap-3">
                <Button variant="outline" className="gap-2">
                  <Search className="h-4 w-4" />
                  جستجو
                  <KbdGroup>
                    <Kbd>Ctrl</Kbd>
                    <Kbd>K</Kbd>
                  </KbdGroup>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Copy className="h-4 w-4" />
                  کپی
                  <Kbd>Ctrl+C</Kbd>
                </Button>
                <Button variant="outline" className="gap-2">
                  <Save className="h-4 w-4" />
                  ذخیره
                  <Kbd>Ctrl+S</Kbd>
                </Button>
              </div>
            </div>
          </div>

          {/* Example 2: Shortcut Cheatsheet */}
          <div>
            <h3 className="text-lg font-medium mb-4">راهنمای میانبرها</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="grid md:grid-cols-2 gap-4">
                <div className="space-y-3">
                  <h4 className="font-semibold text-sm mb-2">ویرایش</h4>
                  <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm">بازگشت</span>
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <span className="text-muted-foreground">+</span>
                      <Kbd>Z</Kbd>
                    </KbdGroup>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm">تکرار</span>
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <span className="text-muted-foreground">+</span>
                      <Kbd>Y</Kbd>
                    </KbdGroup>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm">کپی</span>
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <span className="text-muted-foreground">+</span>
                      <Kbd>C</Kbd>
                    </KbdGroup>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm">چسباندن</span>
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <span className="text-muted-foreground">+</span>
                      <Kbd>V</Kbd>
                    </KbdGroup>
                  </div>
                </div>

                <div className="space-y-3">
                  <h4 className="font-semibold text-sm mb-2">ناوبری</h4>
                  <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm">جستجو</span>
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <span className="text-muted-foreground">+</span>
                      <Kbd>F</Kbd>
                    </KbdGroup>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm">رفتن به خط</span>
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <span className="text-muted-foreground">+</span>
                      <Kbd>G</Kbd>
                    </KbdGroup>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm">پالت دستورات</span>
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <span className="text-muted-foreground">+</span>
                      <Kbd>P</Kbd>
                    </KbdGroup>
                  </div>
                  <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
                    <span className="text-sm">تنظیمات</span>
                    <KbdGroup>
                      <Kbd>Ctrl</Kbd>
                      <span className="text-muted-foreground">+</span>
                      <Kbd>,</Kbd>
                    </KbdGroup>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3: Action Bar */}
          <div>
            <h3 className="text-lg font-medium mb-4">نوار ابزار</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center gap-2 flex-wrap">
                <Button size="sm" variant="ghost" className="gap-2">
                  <Undo className="h-4 w-4" />
                  <Kbd>Ctrl+Z</Kbd>
                </Button>
                <Button size="sm" variant="ghost" className="gap-2">
                  <Redo className="h-4 w-4" />
                  <Kbd>Ctrl+Y</Kbd>
                </Button>
                <div className="h-6 w-px bg-border mx-2" />
                <Button size="sm" variant="ghost" className="gap-2">
                  <Copy className="h-4 w-4" />
                  <Kbd>Ctrl+C</Kbd>
                </Button>
                <Button size="sm" variant="ghost" className="gap-2">
                  <Save className="h-4 w-4" />
                  <Kbd>Ctrl+S</Kbd>
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

        <div className="space-y-8">
          {/* Kbd */}
          <div>
            <h3 className="text-lg font-medium mb-4">Kbd</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-right p-4 font-semibold">
                      پراپ (Prop)
                    </th>
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
                      <code>children</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>ReactNode</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>undefined</code>
                    </td>
                    <td className="p-4">محتوای کلید (حرف یا نماد)</td>
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
          </div>

          {/* KbdGroup */}
          <div>
            <h3 className="text-lg font-medium mb-4">KbdGroup</h3>
            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr className="border-b border-border">
                    <th className="text-right p-4 font-semibold">
                      پراپ (Prop)
                    </th>
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
                      <code>children</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>ReactNode</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>undefined</code>
                    </td>
                    <td className="p-4">کلیدهای Kbd به همراه جداکننده</td>
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
              استفاده از المان kbd
            </h3>
            <p>
              این کامپوننت از المان HTML{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                &lt;kbd&gt;
              </code>{" "}
              استفاده می‌کند که به صورت معنایی نشان می‌دهد محتوا یک ورودی
              صفحه‌کلید است
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">غیرقابل تعامل</h3>
            <p>
              کلیدها به صورت{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                pointer-events-none
              </code>{" "}
              هستند و تنها برای نمایش استفاده می‌شوند، نه تعامل
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">محتوای واضح</h3>
            <p>
              از حروف و نمادهای واضح استفاده کنید تا کاربران به راحتی بتوانند آنها
              را تشخیص دهند
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
            <h3 className="font-semibold mb-3">استفاده از نمادها</h3>
            <p className="text-muted-foreground">
              برای کلیدهای خاص macOS از نمادهای یونیکد (⌘, ⌥, ⇧) استفاده کنید.
              برای Windows/Linux از نام کلید (Ctrl, Alt, Shift) استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی میانبرها</h3>
            <p className="text-muted-foreground">
              از KbdGroup برای نمایش میانبرهای چند کلیده استفاده کنید و بین کلیدها
              جداکننده (+) قرار دهید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">سازگاری</h3>
            <p className="text-muted-foreground">
              در کل اپلیکیشن از یک فرمت واحد برای نمایش میانبرها استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">کاربرد صحیح</h3>
            <p className="text-muted-foreground">
              از این کامپوننت تنها برای نمایش کلیدها استفاده کنید، نه برای دکمه‌های
              قابل کلیک
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
            <h3 className="font-medium mb-3">کلید تکی</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Kbd } from "@/components/ui/kbd"

<Kbd>Ctrl</Kbd>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">میانبر صفحه‌کلید</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Kbd, KbdGroup } from "@/components/ui/kbd"

<KbdGroup>
  <Kbd>Ctrl</Kbd>
  <span className="text-muted-foreground">+</span>
  <Kbd>C</Kbd>
</KbdGroup>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با دکمه</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Button } from "@/components/ui/button";
import { Kbd, KbdGroup } from "@/components/ui/kbd"

<Button variant="outline" className="gap-2">
  جستجو
  <KbdGroup>
    <Kbd>Ctrl</Kbd>
    <Kbd>K</Kbd>
  </KbdGroup>
</Button>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">کلیدهای خاص (macOS)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<KbdGroup>
  <Kbd>⌘</Kbd>
  <span>+</span>
  <Kbd>S</Kbd>
</KbdGroup>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">راهنمای میانبرها</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<div className="space-y-2">
  <div className="flex justify-between">
    <span>کپی</span>
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>C</Kbd>
    </KbdGroup>
  </div>
  <div className="flex justify-between">
    <span>چسباندن</span>
    <KbdGroup>
      <Kbd>Ctrl</Kbd>
      <span>+</span>
      <Kbd>V</Kbd>
    </KbdGroup>
  </div>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
