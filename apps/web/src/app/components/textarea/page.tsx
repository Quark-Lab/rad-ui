"use client";

import { useState } from "react";
import { Textarea, Label, Button } from "@/registry/web/ui";
import { Send } from "lucide-react";

export default function TextareaDemo() {
  const [message, setMessage] = useState("");
  const maxLength = 200;

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">ناحیه متن (Textarea)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت ناحیه متن برای ورودی متن چندخطی در فرم‌ها
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quark-lab/rad-ui add textarea`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <Textarea placeholder="پیام خود را اینجا بنویسید..." />
        </div>
      </section>

      {/* With Label */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با برچسب (With Label)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="message">پیام شما</Label>
            <Textarea id="message" placeholder="متن خود را وارد کنید..." />
          </div>
        </div>
      </section>

      {/* Different Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          اندازه‌های مختلف (Different Sizes)
        </h2>
        <div className="space-y-6">
          {/* Small */}
          <div>
            <h3 className="text-lg font-medium mb-4">کوچک (Small - 2 rows)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Textarea
                rows={2}
                placeholder="ناحیه متن کوچک..."
                className="min-h-[40px]"
              />
            </div>
          </div>

          {/* Medium */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              متوسط (Medium - 4 rows)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Textarea rows={4} placeholder="ناحیه متن متوسط..." />
            </div>
          </div>

          {/* Large */}
          <div>
            <h3 className="text-lg font-medium mb-4">بزرگ (Large - 8 rows)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Textarea
                rows={8}
                placeholder="ناحیه متن بزرگ..."
                className="min-h-[120px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          حالت غیرفعال (Disabled State)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="disabled">توضیحات</Label>
            <Textarea
              id="disabled"
              disabled
              placeholder="این فیلد غیرفعال است..."
              value="این متن قابل ویرایش نیست"
            />
          </div>
        </div>
      </section>

      {/* With Character Count */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          با شمارنده کاراکتر (With Character Count)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="char-count">توضیحات کوتاه</Label>
            <Textarea
              id="char-count"
              placeholder="حداکثر 200 کاراکتر..."
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              maxLength={maxLength}
            />
            <p className="text-sm text-muted-foreground text-left" dir="ltr">
              {message.length} / {maxLength}
            </p>
          </div>
        </div>
      </section>

      {/* Read-only */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          فقط خواندنی (Read-only)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="readonly">اطلاعات</Label>
            <Textarea
              id="readonly"
              readOnly
              value="این متن فقط خواندنی است و نمی‌توان آن را ویرایش کرد. برای نمایش اطلاعات ثابت استفاده می‌شود."
            />
          </div>
        </div>
      </section>

      {/* With Button */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          با دکمه (With Button)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="message-send">پیام شما</Label>
              <Textarea
                id="message-send"
                placeholder="پیام خود را بنویسید..."
              />
            </div>
            <div className="flex justify-end">
              <Button>
                <Send className="ms-2 h-4 w-4" />
                ارسال
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Validation States */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          حالت‌های اعتبارسنجی (Validation States)
        </h2>
        <div className="space-y-6">
          {/* Valid */}
          <div>
            <h3 className="text-lg font-medium mb-4">معتبر (Valid)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-2">
                <Label htmlFor="valid">نظر شما</Label>
                <Textarea
                  id="valid"
                  placeholder="نظر خود را بنویسید..."
                  className="border-green-500 focus-visible:ring-green-500"
                  defaultValue="این یک ورودی معتبر است"
                />
                <p className="text-sm text-green-600">نظر شما با موفقیت ذخیره شد!</p>
              </div>
            </div>
          </div>

          {/* Invalid */}
          <div>
            <h3 className="text-lg font-medium mb-4">نامعتبر (Invalid)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-2">
                <Label htmlFor="invalid">توضیحات</Label>
                <Textarea
                  id="invalid"
                  placeholder="لطفا توضیحات وارد کنید..."
                  aria-invalid="true"
                  className="border-destructive focus-visible:ring-destructive"
                />
                <p className="text-sm text-destructive">
                  لطفا حداقل 10 کاراکتر وارد کنید
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Resize Control */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          کنترل تغییر اندازه (Resize Control)
        </h2>
        <div className="space-y-6">
          {/* Vertical Resize */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              تغییر اندازه عمودی (Vertical Resize)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Textarea
                placeholder="می‌توانید ارتفاع را تغییر دهید..."
                className="resize-y"
              />
            </div>
          </div>

          {/* No Resize */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              بدون تغییر اندازه (No Resize)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Textarea
                placeholder="اندازه ثابت است..."
                className="resize-none"
              />
            </div>
          </div>

          {/* Both Directions */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              تغییر اندازه در دو جهت (Both Directions)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Textarea
                placeholder="می‌توانید عرض و ارتفاع را تغییر دهید..."
                className="resize"
              />
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
                  <code>placeholder</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">متن راهنما</td>
              </tr>
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
                  <code>onChange</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>(e) =&gt; void</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">تابع فراخوانی هنگام تغییر مقدار</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>rows</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">تعداد خطوط نمایشی</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>maxLength</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">حداکثر تعداد کاراکترها</td>
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
                <td className="p-4">غیرفعال کردن فیلد</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>readOnly</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>false</code>
                </td>
                <td className="p-4">فقط خواندنی</td>
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
                <td className="p-4">اجباری بودن فیلد</td>
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

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-4 text-muted-foreground">
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌ها (Labels)
            </h3>
            <p>
              همیشه از کامپوننت{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">Label</code>{" "}
              با{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                htmlFor
              </code>{" "}
              برای شناسایی فیلد استفاده کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              پیام‌های خطا (Error Messages)
            </h3>
            <p>
              از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-invalid
              </code>{" "}
              و{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-describedby
              </code>{" "}
              برای پیام‌های اعتبارسنجی استفاده کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              متن راهنما (Placeholder)
            </h3>
            <p>
              از placeholder فقط برای نمونه استفاده کنید، نه به عنوان جایگزین
              برچسب
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              فیلدهای اجباری (Required Fields)
            </h3>
            <p>
              از ویژگی{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                required
              </code>{" "}
              و نشانگر بصری (مثل ستاره) استفاده کنید
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
            <h3 className="font-semibold mb-3">اندازه مناسب (Appropriate Size)</h3>
            <p className="text-muted-foreground">
              تعداد سطرها را بر اساس مقدار متن مورد انتظار تنظیم کنید. برای
              نظرات کوتاه 2-4 سطر و برای متون طولانی‌تر 6-8 سطر مناسب است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">محدودیت کاراکتر (Character Limit)</h3>
            <p className="text-muted-foreground">
              اگر محدودیت دارید، حتما شمارنده کاراکتر نمایش دهید تا کاربر بداند
              چقدر فضا دارد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              پیام‌های راهنما (Helper Text)
            </h3>
            <p className="text-muted-foreground">
              از متن راهنما برای توضیح فرمت مورد انتظار یا الزامات خاص استفاده
              کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تغییر اندازه (Resizing)
            </h3>
            <p className="text-muted-foreground">
              به طور پیش‌فرض تنها تغییر اندازه عمودی فعال است. اگر نیاز به اندازه
              ثابت دارید از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                resize-none
              </code>{" "}
              استفاده کنید
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label"

export default function MyForm() {
  return (
    <div>
      {/* Basic */}
      <Textarea placeholder="Type here..." />

      {/* With Label */}
      <div className="space-y-2">
        <Label htmlFor="description">Description</Label>
        <Textarea id="description" placeholder="Enter description..." />
      </div>

      {/* Controlled */}
      <Textarea
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Controlled textarea..."
      />

      {/* With validation */}
      <div className="space-y-2">
        <Label htmlFor="comment">Comment</Label>
        <Textarea
          id="comment"
          aria-invalid={hasError}
          className={hasError ? "border-destructive" : ""}
        />
        {hasError && (
          <p className="text-sm text-destructive">
            Please enter at least 10 characters
          </p>
        )}
      </div>

      {/* Different sizes */}
      <Textarea rows={2} placeholder="Small..." />
      <Textarea rows={6} placeholder="Large..." />

      {/* Disabled */}
      <Textarea disabled placeholder="Disabled..." />

      {/* Read-only */}
      <Textarea readOnly value="Read-only text" />
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
              فرم نظرات با اعتبارسنجی (Comment Form with Validation)
            </h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`const [comment, setComment] = useState("");
const [error, setError] = useState("");
const minLength = 10;

const handleSubmit = () => {
  if (comment.length < minLength) {
    setError(\`Please enter at least \${minLength} characters\`);
    return;
  }
  // Submit comment
};

<div className="space-y-4">
  <div className="space-y-2">
    <Label htmlFor="comment">Your Comment *</Label>
    <Textarea
      id="comment"
      value={comment}
      onChange={(e) => {
        setComment(e.target.value);
        setError("");
      }}
      placeholder="Share your thoughts..."
      aria-invalid={!!error}
      className={error ? "border-destructive" : ""}
    />
    {error && (
      <p className="text-sm text-destructive">{error}</p>
    )}
    <p className="text-sm text-muted-foreground">
      {comment.length} / {minLength} minimum
    </p>
  </div>
  <Button onClick={handleSubmit}>Submit</Button>
</div>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
