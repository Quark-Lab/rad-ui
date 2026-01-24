"use client";

import { useState } from "react";
import { Checkbox, Label } from "@rad-ui/ui";

export default function CheckboxPage() {
  const [singleChecked, setSingleChecked] = useState(false);
  const [termsAccepted, setTermsAccepted] = useState(false);
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">چک‌باکس (Checkbox)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت چک‌باکس برای انتخاب یک یا چند گزینه از مجموعه‌ای از انتخاب‌ها استفاده می‌شود
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npm install @radix-ui/react-checkbox`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="flex items-center space-x-2 space-x-reverse">
              <Checkbox id="basic" />
              <Label htmlFor="basic" className="cursor-pointer">
                پذیرفتن قوانین و مقررات
              </Label>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm">
              <code>{`import { Checkbox, Label } from "@rad-ui/ui";

export function CheckboxDemo() {
  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      <Checkbox id="basic" />
      <Label htmlFor="basic">پذیرفتن قوانین و مقررات</Label>
    </div>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* With Label */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با برچسب (With Label)</h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="terms1" />
                <Label htmlFor="terms1" className="cursor-pointer">
                  قوانین و مقررات را می‌پذیرم
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="marketing" />
                <Label htmlFor="marketing" className="cursor-pointer">
                  از ارسال ایمیل‌های تبلیغاتی مطلع باشم
                </Label>
              </div>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm">
              <code>{`<div className="space-y-4">
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox id="terms1" />
    <Label htmlFor="terms1">قوانین و مقررات را می‌پذیرم</Label>
  </div>
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox id="marketing" />
    <Label htmlFor="marketing">از ارسال ایمیل‌های تبلیغاتی مطلع باشم</Label>
  </div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Controlled */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">کنترل شده (Controlled)</h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox
                  id="controlled"
                  checked={singleChecked}
                  onCheckedChange={(checked) => setSingleChecked(checked as boolean)}
                />
                <Label htmlFor="controlled" className="cursor-pointer">
                  این چک‌باکس کنترل‌شده است
                </Label>
              </div>
              <p className="text-sm text-muted-foreground">
                وضعیت: {singleChecked ? "انتخاب شده" : "انتخاب نشده"}
              </p>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm">
              <code>{`const [checked, setChecked] = useState(false);

<div className="flex items-center space-x-2 space-x-reverse">
  <Checkbox
    id="controlled"
    checked={checked}
    onCheckedChange={(checked) => setChecked(checked)}
  />
  <Label htmlFor="controlled">این چک‌باکس کنترل‌شده است</Label>
</div>
<p>وضعیت: {checked ? "انتخاب شده" : "انتخاب نشده"}</p>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Disabled */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">حالت غیرفعال (Disabled State)</h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-4">
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="disabled1" disabled />
                <Label htmlFor="disabled1" className="cursor-not-allowed opacity-50">
                  چک‌باکس غیرفعال (انتخاب نشده)
                </Label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <Checkbox id="disabled2" disabled checked />
                <Label htmlFor="disabled2" className="cursor-not-allowed opacity-50">
                  چک‌باکس غیرفعال (انتخاب شده)
                </Label>
              </div>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm">
              <code>{`<div className="space-y-4">
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox id="disabled1" disabled />
    <Label htmlFor="disabled1">چک‌باکس غیرفعال (انتخاب نشده)</Label>
  </div>
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox id="disabled2" disabled checked />
    <Label htmlFor="disabled2">چک‌باکس غیرفعال (انتخاب شده)</Label>
  </div>
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Form Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">مثال فرم (Form Example)</h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">تنظیمات اعلان‌ها</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="email-notif"
                      checked={notifications.email}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({
                          ...prev,
                          email: checked as boolean,
                        }))
                      }
                    />
                    <div className="flex flex-col">
                      <Label htmlFor="email-notif" className="cursor-pointer">
                        اعلان‌های ایمیل
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        دریافت اعلان‌ها از طریق ایمیل
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="sms-notif"
                      checked={notifications.sms}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({
                          ...prev,
                          sms: checked as boolean,
                        }))
                      }
                    />
                    <div className="flex flex-col">
                      <Label htmlFor="sms-notif" className="cursor-pointer">
                        اعلان‌های پیامکی
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        دریافت اعلان‌ها از طریق پیامک
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <Checkbox
                      id="push-notif"
                      checked={notifications.push}
                      onCheckedChange={(checked) =>
                        setNotifications((prev) => ({
                          ...prev,
                          push: checked as boolean,
                        }))
                      }
                    />
                    <div className="flex flex-col">
                      <Label htmlFor="push-notif" className="cursor-pointer">
                        اعلان‌های فشاری
                      </Label>
                      <p className="text-sm text-muted-foreground">
                        دریافت اعلان‌های فشاری در مرورگر
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="pt-4 border-t">
                <h4 className="text-sm font-semibold mb-2">تنظیمات فعلی:</h4>
                <div className="text-sm text-muted-foreground space-y-1">
                  <p>ایمیل: {notifications.email ? "فعال" : "غیرفعال"}</p>
                  <p>پیامک: {notifications.sms ? "فعال" : "غیرفعال"}</p>
                  <p>اعلان فشاری: {notifications.push ? "فعال" : "غیرفعال"}</p>
                </div>
              </div>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm overflow-x-auto">
              <code>{`const [notifications, setNotifications] = useState({
  email: true,
  sms: false,
  push: true,
});

<div className="space-y-4">
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox
      id="email-notif"
      checked={notifications.email}
      onCheckedChange={(checked) =>
        setNotifications((prev) => ({ ...prev, email: checked }))
      }
    />
    <div className="flex flex-col">
      <Label htmlFor="email-notif">اعلان‌های ایمیل</Label>
      <p className="text-sm text-muted-foreground">
        دریافت اعلان‌ها از طریق ایمیل
      </p>
    </div>
  </div>
  {/* ... similar for other options */}
</div>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Terms Acceptance */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          پذیرش قوانین (Terms Acceptance)
        </h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-4">
              <div className="flex items-start space-x-2 space-x-reverse">
                <Checkbox
                  id="terms"
                  checked={termsAccepted}
                  onCheckedChange={(checked) => setTermsAccepted(checked as boolean)}
                  className="mt-1"
                />
                <div className="flex flex-col">
                  <Label htmlFor="terms" className="cursor-pointer">
                    قوانین و مقررات را مطالعه کرده و می‌پذیرم
                  </Label>
                  <p className="text-sm text-muted-foreground mt-1">
                    با ثبت‌نام، شما{" "}
                    <a href="#" className="text-primary hover:underline">
                      شرایط استفاده
                    </a>{" "}
                    و{" "}
                    <a href="#" className="text-primary hover:underline">
                      سیاست حفظ حریم خصوصی
                    </a>{" "}
                    ما را می‌پذیرید
                  </p>
                </div>
              </div>
              <button
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                disabled={!termsAccepted}
              >
                ادامه ثبت‌نام
              </button>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm overflow-x-auto">
              <code>{`const [termsAccepted, setTermsAccepted] = useState(false);

<div className="space-y-4">
  <div className="flex items-start space-x-2 space-x-reverse">
    <Checkbox
      id="terms"
      checked={termsAccepted}
      onCheckedChange={(checked) => setTermsAccepted(checked)}
      className="mt-1"
    />
    <div className="flex flex-col">
      <Label htmlFor="terms">قوانین و مقررات را مطالعه کرده و می‌پذیرم</Label>
      <p className="text-sm text-muted-foreground">
        با ثبت‌نام، شما شرایط استفاده و سیاست حفظ حریم خصوصی ما را می‌پذیرید
      </p>
    </div>
  </div>
  <button disabled={!termsAccepted}>ادامه ثبت‌نام</button>
</div>`}</code>
            </pre>
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
                  <code>
                  checked</code>
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
                <td className="p-4">غیرفعال کردن چک‌باکس</td>
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
                <td className="p-4">الزامی بودن در فرم</td>
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
              <tr>
                <td className="p-4" dir="ltr">
                  <code>value</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>&quot;on&quot;</code>
                </td>
                <td className="p-4">مقدار ارسالی در فرم</td>
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
                - تغییر وضعیت چک‌باکس
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت به چک‌باکس بعدی
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌ها (Labels)
            </h3>
            <p>
              همیشه از کامپوننت Label با ویژگی htmlFor استفاده کنید تا چک‌باکس
              را با برچسب مرتبط کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              وضعیت (State)
            </h3>
            <p>
              وضعیت چک‌باکس از طریق{" "}
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
            <h3 className="font-semibold mb-3">برچسب واضح (Clear Labels)</h3>
            <p className="text-muted-foreground">
              همیشه از Label همراه با Checkbox استفاده کنید و برچسب‌های واضح و
              مختصر بنویسید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              انتخاب‌های مستقل (Independent Choices)
            </h3>
            <p className="text-muted-foreground">
              از Checkbox برای انتخاب‌های مستقل استفاده کنید. برای انتخاب‌های
              انحصاری از Radio Button استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تفاوت با Switch
            </h3>
            <p className="text-muted-foreground">
              از Checkbox برای انتخاب‌های چندگانه که نیاز به تایید دارند و از
              Switch برای تنظیمات فوری (روشن/خاموش) استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              گروه‌بندی (Grouping)
            </h3>
            <p className="text-muted-foreground">
              چک‌باکس‌های مرتبط را در گروه‌های منطقی دسته‌بندی کنید و از تعداد
              زیاد چک‌باکس در یک گروه خودداری کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              توضیحات کمکی (Helper Text)
            </h3>
            <p className="text-muted-foreground">
              برای گزینه‌های پیچیده، متن توضیحی اضافه کنید تا کاربر بهتر متوجه
              شود چه انتخابی می‌کند
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm overflow-x-auto">
            <code>{`import { useState } from "react";
import { Checkbox, Label } from "@rad-ui/ui";

export default function MyComponent() {
  const [checked, setChecked] = useState(false);

  return (
    <div>
      {/* Basic */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="basic" />
        <Label htmlFor="basic">Accept terms</Label>
      </div>

      {/* Controlled */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox
          id="controlled"
          checked={checked}
          onCheckedChange={setChecked}
        />
        <Label htmlFor="controlled">Controlled checkbox</Label>
      </div>

      {/* Default Checked */}
      <Checkbox defaultChecked />

      {/* Disabled */}
      <Checkbox disabled />
      <Checkbox disabled checked />

      {/* With description */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="desc" />
        <div className="flex flex-col">
          <Label htmlFor="desc">Enable notifications</Label>
          <p className="text-sm text-muted-foreground">
            Receive notifications about updates
          </p>
        </div>
      </div>
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
              فرم تنظیمات با حالت ذخیره خودکار (Settings with Auto-save)
            </h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`const [settings, setSettings] = useState({
  notifications: true,
  marketing: false,
  updates: true
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
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox
      id="notif"
      checked={settings.notifications}
      onCheckedChange={(checked) =>
        updateSetting('notifications', checked)
      }
    />
    <Label htmlFor="notif">Enable Notifications</Label>
  </div>
  <div className="flex items-center space-x-2 space-x-reverse">
    <Checkbox
      id="marketing"
      checked={settings.marketing}
      onCheckedChange={(checked) =>
        updateSetting('marketing', checked)
      }
    />
    <Label htmlFor="marketing">Marketing Emails</Label>
  </div>
</div>`}</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3">
              انتخاب همه / هیچکدام (Select All / None)
            </h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`const [items, setItems] = useState([
  { id: 1, label: 'Item 1', checked: false },
  { id: 2, label: 'Item 2', checked: false },
  { id: 3, label: 'Item 3', checked: false }
]);

const allChecked = items.every(item => item.checked);
const someChecked = items.some(item => item.checked);

const toggleAll = () => {
  setItems(items.map(item => ({ ...item, checked: !allChecked })));
};

const toggleItem = (id) => {
  setItems(items.map(item =>
    item.id === id ? { ...item, checked: !item.checked } : item
  ));
};

<div className="space-y-4">
  <div className="flex items-center space-x-2 space-x-reverse border-b pb-2">
    <Checkbox
      checked={allChecked}
      onCheckedChange={toggleAll}
      aria-label="Select all"
    />
    <Label>Select All</Label>
  </div>
  {items.map(item => (
    <div key={item.id} className="flex items-center space-x-2 space-x-reverse ml-6">
      <Checkbox
        id={item.id}
        checked={item.checked}
        onCheckedChange={() => toggleItem(item.id)}
      />
      <Label htmlFor={item.id}>{item.label}</Label>
    </div>
  ))}
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
