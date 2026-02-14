"use client";

import { useState } from "react";
import { Switch, Label } from "@/registry/web/ui";

export default function SwitchDemo() {
  const [isEnabled, setIsEnabled] = useState(false);
  const [airplane, setAirplane] = useState(false);
  const [marketing, setMarketing] = useState(true);
  const [security, setSecurity] = useState(false);

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">سوئیچ (Switch)</h1>
        <p className="text-lg text-muted-foreground">
          کنترلی که به کاربر امکان می‌دهد بین حالت فعال و غیرفعال جابه‌جا شود
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quark-lab/rad-ui add switch`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <Switch />
        </div>
      </section>

      {/* With Label */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با برچسب (With Label)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Switch id="airplane-mode" />
            <Label htmlFor="airplane-mode">حالت هواپیما</Label>
          </div>
        </div>
      </section>

      {/* Default Checked */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          پیش‌فرض فعال (Default Checked)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Switch id="notifications" defaultChecked />
            <Label htmlFor="notifications">اعلان‌ها</Label>
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          حالت غیرفعال (Disabled State)
        </h2>
        <div className="space-y-6">
          {/* Disabled Unchecked */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              غیرفعال - خاموش (Disabled Off)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Switch id="disabled-off" disabled />
                <Label htmlFor="disabled-off" className="opacity-50">
                  غیرفعال شده
                </Label>
              </div>
            </div>
          </div>

          {/* Disabled Checked */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              غیرفعال - روشن (Disabled On)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Switch id="disabled-on" disabled defaultChecked />
                <Label htmlFor="disabled-on" className="opacity-50">
                  همیشه فعال
                </Label>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Controlled */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          کنترل شده (Controlled)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-4">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Switch
                id="controlled"
                checked={isEnabled}
                onCheckedChange={setIsEnabled}
              />
              <Label htmlFor="controlled">فعال کردن ویژگی</Label>
            </div>
            <p className="text-sm text-muted-foreground">
              وضعیت فعلی: {isEnabled ? "فعال" : "غیرفعال"}
            </p>
          </div>
        </div>
      </section>

      {/* With Description */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          با توضیحات (With Description)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="marketing">ایمیل‌های بازاریابی</Label>
                <p className="text-sm text-muted-foreground">
                  دریافت ایمیل‌ها درباره محصولات جدید و پیشنهادات ویژه
                </p>
              </div>
              <Switch
                id="marketing"
                checked={marketing}
                onCheckedChange={setMarketing}
              />
            </div>

            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="security">اعلان‌های امنیتی</Label>
                <p className="text-sm text-muted-foreground">
                  دریافت اعلان درباره فعالیت‌های مشکوک در حساب کاربری
                </p>
              </div>
              <Switch
                id="security"
                checked={security}
                onCheckedChange={setSecurity}
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form Integration */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          یکپارچگی با فرم (Form Integration)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <form
            className="space-y-6"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData(e.currentTarget);
              console.log("Form data:", Object.fromEntries(formData));
            }}
          >
            <div className="flex items-center justify-between">
              <div className="space-y-0.5">
                <Label htmlFor="form-airplane">حالت هواپیما</Label>
                <p className="text-sm text-muted-foreground">
                  غیرفعال کردن تمام اتصالات بی‌سیم
                </p>
              </div>
              <Switch
                id="form-airplane"
                name="airplaneMode"
                checked={airplane}
                onCheckedChange={setAirplane}
              />
            </div>

            <div className="flex gap-4">
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90"
              >
                ذخیره تنظیمات
              </button>
              <button
                type="button"
                onClick={() => {
                  setAirplane(false);
                  console.log("Settings reset");
                }}
                className="px-4 py-2 border border-border rounded-md hover:bg-muted"
              >
                بازنشانی
              </button>
            </div>
          </form>
        </div>
      </section>

      {/* Settings Panel Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          پنل تنظیمات (Settings Panel)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold mb-4">اعلان‌ها</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>پیام‌های جدید</Label>
                    <p className="text-sm text-muted-foreground">
                      نمایش اعلان هنگام دریافت پیام جدید
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>اعلان‌های دسکتاپ</Label>
                    <p className="text-sm text-muted-foreground">
                      نمایش اعلان‌ها روی دسکتاپ
                    </p>
                  </div>
                  <Switch />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>صدای اعلان</Label>
                    <p className="text-sm text-muted-foreground">
                      پخش صدا هنگام دریافت اعلان
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>
              </div>
            </div>

            <div className="border-t border-border pt-6">
              <h3 className="text-lg font-semibold mb-4">حریم خصوصی</h3>
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>نمایش وضعیت آنلاین</Label>
                    <p className="text-sm text-muted-foreground">
                      نمایش وضعیت حضور شما به دیگران
                    </p>
                  </div>
                  <Switch defaultChecked />
                </div>

                <div className="flex items-center justify-between">
                  <div className="space-y-0.5">
                    <Label>اشتراک‌گذاری موقعیت</Label>
                    <p className="text-sm text-muted-foreground">
                      به اشتراک گذاشتن موقعیت مکانی شما
                    </p>
                  </div>
                  <Switch />
                </div>
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
                  <code>checked</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">وضعیت کنترل شده</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>defaultChecked</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>false</code>
                </td>
                <td className="p-4">وضعیت پیش‌فرض (غیرکنترل شده)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>onCheckedChange</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>(checked: boolean) =&gt; void</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">تابع فراخوانی هنگام تغییر وضعیت</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>disabled</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>false</code>
                </td>
                <td className="p-4">غیرفعال کردن سوئیچ</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>required</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>false</code>
                </td>
                <td className="p-4">اجباری بودن در فرم</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>name</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">نام فیلد برای ارسال فرم</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>value</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"on"</code>
                </td>
                <td className="p-4">مقدار ارسالی در فرم</td>
              </tr>
              <tr>
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
            <h3 className="font-semibold text-foreground mb-2">
              کیبورد (Keyboard)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space
                </code>{" "}
                - تغییر وضعیت سوئیچ
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                - تغییر وضعیت سوئیچ
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت به سوئیچ بعدی
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ARIA نقش (ARIA Role)
            </h3>
            <p>
              کامپوننت از نقش{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">switch</code>{" "}
              استفاده می‌کند که برای خوانندگان صفحه مناسب است
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌ها (Labels)
            </h3>
            <p>
              همیشه از کامپوننت Label با ویژگی htmlFor استفاده کنید تا سوئیچ را
              با برچسب مرتبط کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              وضعیت (State)
            </h3>
            <p>
              وضعیت سوئیچ از طریق{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-checked
              </code>{" "}
              به صورت خودکار اعلام می‌شود
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
              برچسب واضح (Clear Labels)
            </h3>
            <p className="text-muted-foreground">
              از برچسب‌هایی استفاده کنید که عملکرد سوئیچ را به وضوح توضیح
              می‌دهند. از فعل‌های عملی استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تاثیر فوری (Immediate Effect)
            </h3>
            <p className="text-muted-foreground">
              سوئیچ باید تنظیمات را بلافاصله اعمال کند. اگر نیاز به تایید دارید،
              از Checkbox استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              توضیحات کمکی (Helper Text)
            </h3>
            <p className="text-muted-foreground">
              برای تنظیمات پیچیده، متن توضیحی اضافه کنید تا کاربر بداند چه
              اتفاقی می‌افتد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              گروه‌بندی (Grouping)
            </h3>
            <p className="text-muted-foreground">
              سوئیچ‌های مرتبط را در بخش‌های منطقی دسته‌بندی کنید (مثل اعلان‌ها،
              حریم خصوصی)
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تفاوت با Checkbox
            </h3>
            <p className="text-muted-foreground">
              از Switch برای تنظیمات فوری (روشن/خاموش) و از Checkbox برای
              انتخاب‌های چندگانه که نیاز به ارسال دارند استفاده کنید
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function Settings() {
  const [enabled, setEnabled] = useState(false);

  return (
    <div>
      {/* Basic */}
      <Switch />

      {/* With Label */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <Switch id="airplane" />
        <Label htmlFor="airplane">Airplane Mode</Label>
      </div>

      {/* Default Checked */}
      <Switch defaultChecked />

      {/* Controlled */}
      <Switch
        checked={enabled}
        onCheckedChange={setEnabled}
      />

      {/* With Description */}
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="marketing">Marketing emails</Label>
          <p className="text-sm text-muted-foreground">
            Receive emails about new products
          </p>
        </div>
        <Switch id="marketing" />
      </div>

      {/* Disabled */}
      <Switch disabled />
      <Switch disabled defaultChecked />

      {/* In Form */}
      <form>
        <Switch name="notifications" />
        <button type="submit">Save</button>
      </form>
    </div>
  );
}`}</code>
          </pre>
        </div>
      </section>

      {/* Advanced Examples */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های پیشرفته (Advanced Examples)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="font-medium mb-3">
              تنظیمات با ذخیره خودکار (Auto-save Settings)
            </h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`const [settings, setSettings] = useState({
  notifications: true,
  darkMode: false,
  analytics: true
});

// Auto-save on change
const updateSetting = (key, value) => {
  setSettings(prev => {
    const newSettings = { ...prev, [key]: value };
    // Save to API or localStorage
    localStorage.setItem('settings', JSON.stringify(newSettings));
    return newSettings;
  });
};

<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label>Enable Notifications</Label>
    <Switch
      checked={settings.notifications}
      onCheckedChange={(checked) =>
        updateSetting('notifications', checked)
      }
    />
  </div>
  <div className="flex items-center justify-between">
    <Label>Dark Mode</Label>
    <Switch
      checked={settings.darkMode}
      onCheckedChange={(checked) =>
        updateSetting('darkMode', checked)
      }
    />
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
