"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem, Label } from "@rad-ui/ui";

export default function RadioGroupPage() {
  const [selectedOption, setSelectedOption] = useState("comfortable");
  const [notifyMethod, setNotifyMethod] = useState("email");
  const [plan, setPlan] = useState("free");

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">دکمه رادیویی (Radio Group)</h1>
        <p className="text-lg text-muted-foreground">
          مجموعه‌ای از دکمه‌های قابل انتخاب که فقط یکی از آن‌ها می‌تواند در یک زمان انتخاب شود
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npm install @radix-ui/react-radio-group`}</code>
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
            <RadioGroup defaultValue="option-one">
              <div className="flex flex-row-reverse items-center gap-2">
                <RadioGroupItem value="option-one" id="option-one" />
                <Label htmlFor="option-one">گزینه اول</Label>
              </div>
              <div className="flex flex-row-reverse items-center gap-2">
                <RadioGroupItem value="option-two" id="option-two" />
                <Label htmlFor="option-two">گزینه دوم</Label>
              </div>
              <div className="flex flex-row-reverse items-center gap-2">
                <RadioGroupItem value="option-three" id="option-three" />
                <Label htmlFor="option-three">گزینه سوم</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm">
              <code>{`import { RadioGroup, RadioGroupItem, Label } from "@rad-ui/ui";

export function RadioGroupDemo() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">گزینه اول</Label>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">گزینه دوم</Label>
      </div>
    </RadioGroup>
  );
}`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* With Description */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          با توضیحات (With Description)
        </h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <RadioGroup defaultValue="comfortable">
              <div className="flex flex-row-reverse items-center gap-2">
                <RadioGroupItem value="default" id="r1" />
                <div className="flex flex-col items-end">
                  <Label htmlFor="r1">پیش‌فرض</Label>
                  <p className="text-sm text-muted-foreground">
                    فاصله‌گذاری استاندارد برای اکثر موارد استفاده
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center gap-2">
                <RadioGroupItem value="comfortable" id="r2" />
                <div className="flex flex-col items-end">
                  <Label htmlFor="r2">راحت</Label>
                  <p className="text-sm text-muted-foreground">
                    فاصله‌گذاری بیشتر برای خوانایی بهتر
                  </p>
                </div>
              </div>
              <div className="flex flex-row-reverse items-center gap-2">
                <RadioGroupItem value="compact" id="r3" />
                <div className="flex flex-col items-end">
                  <Label htmlFor="r3">فشرده</Label>
                  <p className="text-sm text-muted-foreground">
                    فاصله‌گذاری کمتر برای نمایش بیشتر
                  </p>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm">
              <code>{`<RadioGroup defaultValue="comfortable">
  <div className="flex flex-row-reverse items-center gap-2">
    <RadioGroupItem value="default" id="r1" />
    <div className="flex flex-col items-end">
      <Label htmlFor="r1">پیش‌فرض</Label>
      <p className="text-sm text-muted-foreground">
        فاصله‌گذاری استاندارد
      </p>
    </div>
  </div>
</RadioGroup>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Controlled */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          کنترل شده (Controlled)
        </h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <div className="space-y-4">
              <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
                <div className="flex flex-row-reverse items-center gap-2">
                  <RadioGroupItem value="default" id="c1" />
                  <Label htmlFor="c1">پیش‌فرض</Label>
                </div>
                <div className="flex flex-row-reverse items-center gap-2">
                  <RadioGroupItem value="comfortable" id="c2" />
                  <Label htmlFor="c2">راحت</Label>
                </div>
                <div className="flex flex-row-reverse items-center gap-2">
                  <RadioGroupItem value="compact" id="c3" />
                  <Label htmlFor="c3">فشرده</Label>
                </div>
              </RadioGroup>
              <p className="text-sm text-muted-foreground">
                گزینه انتخاب شده: {selectedOption}
              </p>
            </div>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm">
              <code>{`const [value, setValue] = useState("comfortable");

<RadioGroup value={value} onValueChange={setValue}>
  <div className="flex flex-row-reverse items-center gap-2">
    <RadioGroupItem value="default" id="c1" />
    <Label htmlFor="c1">پیش‌فرض</Label>
  </div>
</RadioGroup>
<p>Selected: {value}</p>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          حالت غیرفعال (Disabled State)
        </h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <RadioGroup defaultValue="option-one">
              <div className="flex flex-row-reverse items-center gap-2">
                <RadioGroupItem value="option-one" id="d1" />
                <Label htmlFor="d1">گزینه فعال</Label>
              </div>
              <div className="flex flex-row-reverse items-center gap-2">
                <RadioGroupItem value="option-two" id="d2" disabled />
                <Label htmlFor="d2" className="opacity-50">
                  گزینه غیرفعال
                </Label>
              </div>
              <div className="flex flex-row-reverse items-center gap-2">
                <RadioGroupItem value="option-three" id="d3" />
                <Label htmlFor="d3">گزینه دیگر</Label>
              </div>
            </RadioGroup>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm">
              <code>{`<RadioGroup defaultValue="option-one">
  <div className="flex flex-row-reverse items-center gap-2">
    <RadioGroupItem value="option-one" id="d1" />
    <Label htmlFor="d1">گزینه فعال</Label>
  </div>
  <div className="flex flex-row-reverse items-center gap-2">
    <RadioGroupItem value="option-two" id="d2" disabled />
    <Label htmlFor="d2">گزینه غیرفعال</Label>
  </div>
</RadioGroup>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Form Integration */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          یکپارچگی با فرم (Form Integration)
        </h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <form
              className="space-y-6"
              onSubmit={(e) => {
                e.preventDefault();
                console.log("Notify method:", notifyMethod);
              }}
            >
              <div className="space-y-3">
                <Label className="text-base font-semibold">
                  چگونه می‌خواهید مطلع شوید؟
                </Label>
                <RadioGroup
                  value={notifyMethod}
                  onValueChange={setNotifyMethod}
                  name="notifyMethod"
                >
                  <div className="flex flex-row-reverse items-center gap-2">
                    <RadioGroupItem value="email" id="email" />
                    <div className="flex flex-col items-end">
                      <Label htmlFor="email">ایمیل</Label>
                      <p className="text-sm text-muted-foreground">
                        دریافت اعلان از طریق ایمیل
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse items-center gap-2">
                    <RadioGroupItem value="sms" id="sms" />
                    <div className="flex flex-col items-end">
                      <Label htmlFor="sms">پیامک</Label>
                      <p className="text-sm text-muted-foreground">
                        دریافت اعلان از طریق پیامک
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-row-reverse items-center gap-2">
                    <RadioGroupItem value="push" id="push" />
                    <div className="flex flex-col items-end">
                      <Label htmlFor="push">اعلان فشاری</Label>
                      <p className="text-sm text-muted-foreground">
                        دریافت اعلان فشاری در مرورگر
                      </p>
                    </div>
                  </div>
                </RadioGroup>
              </div>
              <button
                type="submit"
                className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
              >
                ذخیره تنظیمات
              </button>
            </form>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm">
              <code>{`const [method, setMethod] = useState("email");

<form onSubmit={(e) => {
  e.preventDefault();
  console.log("Method:", method);
}}>
  <RadioGroup value={method} onValueChange={setMethod} name="method">
    <div className="flex flex-row-reverse items-center gap-2">
      <RadioGroupItem value="email" id="email" />
      <div className="flex flex-col items-end">
        <Label htmlFor="email">Email</Label>
        <p className="text-sm text-muted-foreground">
          Receive notifications via email
        </p>
      </div>
    </div>
  </RadioGroup>
  <button type="submit">Save</button>
</form>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* Card Style */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استایل کارتی (Card Style)
        </h2>
        <div className="space-y-6">
          <div className="p-8 border rounded-lg bg-card">
            <RadioGroup value={plan} onValueChange={setPlan}>
              <div className="grid gap-4">
                <div
                  className={`relative flex items-start flex-row-reverse gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    plan === "free"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setPlan("free")}
                >
                  <RadioGroupItem value="free" id="free" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="free" className="cursor-pointer flex flex-col items-end">
                      <div className="font-semibold">رایگان</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        برای شروع کار و آزمایش ویژگی‌ها
                      </p>
                      <p className="text-sm font-medium mt-2">۰ تومان / ماه</p>
                    </Label>
                  </div>
                </div>
                <div
                  className={`relative flex items-start flex-row-reverse gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    plan === "pro"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setPlan("pro")}
                >
                  <RadioGroupItem value="pro" id="pro" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="pro" className="cursor-pointer flex flex-col items-end">
                      <div className="font-semibold">حرفه‌ای</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        برای کسب‌وکارهای در حال رشد
                      </p>
                      <p className="text-sm font-medium mt-2">۲۹۹,۰۰۰ تومان / ماه</p>
                    </Label>
                  </div>
                </div>
                <div
                  className={`relative flex items-start flex-row-reverse gap-2 p-4 border-2 rounded-lg cursor-pointer transition-colors ${
                    plan === "enterprise"
                      ? "border-primary bg-primary/5"
                      : "border-border hover:border-primary/50"
                  }`}
                  onClick={() => setPlan("enterprise")}
                >
                  <RadioGroupItem value="enterprise" id="enterprise" className="mt-1" />
                  <div className="flex-1">
                    <Label htmlFor="enterprise" className="cursor-pointer flex flex-col items-end">
                      <div className="font-semibold">سازمانی</div>
                      <p className="text-sm text-muted-foreground mt-1">
                        برای سازمان‌های بزرگ با نیازهای سفارشی
                      </p>
                      <p className="text-sm font-medium mt-2">تماس بگیرید</p>
                    </Label>
                  </div>
                </div>
              </div>
            </RadioGroup>
          </div>
          <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
            <pre className="text-sm">
              <code>{`const [plan, setPlan] = useState("free");

<RadioGroup value={plan} onValueChange={setPlan}>
  <div
    className={\`p-4 border-2 rounded-lg \${
      plan === "free" ? "border-primary" : "border-border"
    }\`}
    onClick={() => setPlan("free")}
  >
    <RadioGroupItem value="free" id="free" />
    <Label htmlFor="free">
      <div className="font-semibold">Free</div>
      <p className="text-sm">For getting started</p>
    </Label>
  </div>
</RadioGroup>`}</code>
            </pre>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-semibold mb-4">RadioGroup</h3>
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
                      <code>value</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>string</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>undefined</code>
                    </td>
                    <td className="p-4">مقدار کنترل شده</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4" dir="ltr">
                      <code>defaultValue</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>string</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>undefined</code>
                    </td>
                    <td className="p-4">مقدار پیش‌فرض (غیرکنترل شده)</td>
                  </tr>
                  <tr className="border-b border-border">
                    <td className="p-4" dir="ltr">
                      <code>onValueChange</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>(value: string) =&gt; void</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>undefined</code>
                    </td>
                    <td className="p-4">تابع فراخوانی هنگام تغییر مقدار</td>
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
                    <td className="p-4">غیرفعال کردن تمام گزینه‌ها</td>
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
                      <code>required</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>boolean</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>false</code>
                    </td>
                    <td className="p-4">الزامی بودن انتخاب</td>
                  </tr>
                  <tr>
                    <td className="p-4" dir="ltr">
                      <code>orientation</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>"horizontal" | "vertical"</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>"vertical"</code>
                    </td>
                    <td className="p-4">جهت نمایش گزینه‌ها</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold mb-4">RadioGroupItem</h3>
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
                      <code>value</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>string</code>
                    </td>
                    <td className="p-4">-</td>
                    <td className="p-4">مقدار این گزینه (الزامی)</td>
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
                    <td className="p-4">غیرفعال کردن این گزینه</td>
                  </tr>
                  <tr>
                    <td className="p-4" dir="ltr">
                      <code>id</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>string</code>
                    </td>
                    <td className="p-4" dir="ltr">
                      <code>undefined</code>
                    </td>
                    <td className="p-4">شناسه برای ارتباط با Label</td>
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
              کیبورد (Keyboard)
            </h3>
            <ul className="list-disc list-inside space-y-1">
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - ورود به گروه یا خروج از آن
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Space
                </code>{" "}
                - انتخاب گزینه فعلی
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Arrow Keys
                </code>{" "}
                - حرکت بین گزینه‌ها و انتخاب خودکار
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              نقش ARIA (ARIA Role)
            </h3>
            <p>
              کامپوننت از نقش{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                radiogroup
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">radio</code>{" "}
              استفاده می‌کند
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌ها (Labels)
            </h3>
            <p>
              همیشه از Label با ویژگی htmlFor برای هر RadioGroupItem استفاده
              کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              مدیریت فوکوس (Focus Management)
            </h3>
            <p>
              از الگوی roving tabindex برای مدیریت فوکوس استفاده می‌شود که فقط
              یک آیتم در هر زمان قابل فوکوس است
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
              همیشه برچسب‌های واضح و مختصر برای هر گزینه استفاده کنید تا کاربر
              بتواند به راحتی تصمیم بگیرد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تعداد محدود گزینه‌ها (Limited Options)
            </h3>
            <p className="text-muted-foreground">
              برای بیش از ۵-۷ گزینه، از Select یا Combobox استفاده کنید. Radio
              Group برای تعداد محدود گزینه مناسب است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              انتخاب انحصاری (Mutually Exclusive)
            </h3>
            <p className="text-muted-foreground">
              فقط برای انتخاب‌های انحصاری استفاده کنید. برای انتخاب‌های
              چندگانه از Checkbox استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              مقدار پیش‌فرض (Default Value)
            </h3>
            <p className="text-muted-foreground">
              در بیشتر موارد، یک مقدار پیش‌فرض تنظیم کنید تا کاربر مجبور به
              انتخاب نباشد (مگر اینکه انتخاب آگاهانه ضروری باشد)
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              توضیحات کمکی (Helper Text)
            </h3>
            <p className="text-muted-foreground">
              برای گزینه‌های پیچیده، توضیحات کمکی اضافه کنید تا کاربر تفاوت
              بین گزینه‌ها را بهتر درک کند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              ترتیب منطقی (Logical Order)
            </h3>
            <p className="text-muted-foreground">
              گزینه‌ها را به ترتیب منطقی (مثل محبوب‌ترین، الفبایی، یا عددی)
              مرتب کنید
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import { useState } from "react";
import { RadioGroup, RadioGroupItem, Label } from "@rad-ui/ui";

export default function MyComponent() {
  const [value, setValue] = useState("option-one");

  return (
    <div>
      {/* Basic */}
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2 space-x-reverse">
          <RadioGroupItem value="option-one" id="option-one" />
          <Label htmlFor="option-one">Option One</Label>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <RadioGroupItem value="option-two" id="option-two" />
          <Label htmlFor="option-two">Option Two</Label>
        </div>
      </RadioGroup>

      {/* Controlled */}
      <RadioGroup value={value} onValueChange={setValue}>
        <div className="flex items-center space-x-2 space-x-reverse">
          <RadioGroupItem value="option-one" id="r1" />
          <Label htmlFor="r1">Option One</Label>
        </div>
      </RadioGroup>

      {/* With Description */}
      <RadioGroup defaultValue="comfortable">
        <div className="flex items-center space-x-2 space-x-reverse">
          <RadioGroupItem value="comfortable" id="r2" />
          <div className="flex flex-col">
            <Label htmlFor="r2">Comfortable</Label>
            <p className="text-sm text-muted-foreground">
              More spacing for better readability
            </p>
          </div>
        </div>
      </RadioGroup>

      {/* Disabled */}
      <RadioGroup defaultValue="option-one">
        <div className="flex items-center space-x-2 space-x-reverse">
          <RadioGroupItem value="option-one" id="d1" />
          <Label htmlFor="d1">Enabled</Label>
        </div>
        <div className="flex items-center space-x-2 space-x-reverse">
          <RadioGroupItem value="option-two" id="d2" disabled />
          <Label htmlFor="d2">Disabled</Label>
        </div>
      </RadioGroup>

      {/* In Form */}
      <form>
        <RadioGroup name="preference" defaultValue="email">
          <div className="flex items-center space-x-2 space-x-reverse">
            <RadioGroupItem value="email" id="email" />
            <Label htmlFor="email">Email</Label>
          </div>
        </RadioGroup>
        <button type="submit">Submit</button>
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
              انتخاب پلن با قیمت‌گذاری (Pricing Plan Selection)
            </h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`const [plan, setPlan] = useState("pro");

const plans = [
  { id: "free", name: "Free", price: "$0", features: ["10 projects", "5GB storage"] },
  { id: "pro", name: "Pro", price: "$29", features: ["Unlimited projects", "100GB storage"] },
  { id: "enterprise", name: "Enterprise", price: "Custom", features: ["Custom everything"] }
];

<RadioGroup value={plan} onValueChange={setPlan}>
  {plans.map((item) => (
    <div
      key={item.id}
      className={\`p-4 border-2 rounded-lg \${
        plan === item.id ? "border-primary bg-primary/5" : "border-border"
      }\`}
      onClick={() => setPlan(item.id)}
    >
      <div className="flex items-start space-x-3 space-x-reverse">
        <RadioGroupItem value={item.id} id={item.id} className="mt-1" />
        <div className="flex-1">
          <Label htmlFor={item.id} className="cursor-pointer">
            <div className="font-semibold">{item.name}</div>
            <div className="text-2xl font-bold mt-1">{item.price}</div>
            <ul className="mt-2 space-y-1">
              {item.features.map((feature, i) => (
                <li key={i} className="text-sm text-muted-foreground">
                  • {feature}
                </li>
              ))}
            </ul>
          </Label>
        </div>
      </div>
    </div>
  ))}
</RadioGroup>`}</code>
              </pre>
            </div>
          </div>
          <div>
            <h3 className="font-medium mb-3">
              فرم چندمرحله‌ای با اعتبارسنجی (Multi-step Form with Validation)
            </h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`const [experience, setExperience] = useState("");
const [error, setError] = useState("");

const handleSubmit = () => {
  if (!experience) {
    setError("Please select your experience level");
    return;
  }
  // Continue with form submission
};

<div className="space-y-4">
  <div>
    <Label className="text-base">What's your experience level?</Label>
    <RadioGroup
      value={experience}
      onValueChange={(value) => {
        setExperience(value);
        setError("");
      }}
    >
      <div className="flex items-center space-x-2 space-x-reverse">
        <RadioGroupItem value="beginner" id="beginner" />
        <Label htmlFor="beginner">Beginner</Label>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <RadioGroupItem value="intermediate" id="intermediate" />
        <Label htmlFor="intermediate">Intermediate</Label>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <RadioGroupItem value="advanced" id="advanced" />
        <Label htmlFor="advanced">Advanced</Label>
      </div>
    </RadioGroup>
    {error && (
      <p className="text-sm text-destructive mt-2">{error}</p>
    )}
  </div>
  <button onClick={handleSubmit}>Continue</button>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
