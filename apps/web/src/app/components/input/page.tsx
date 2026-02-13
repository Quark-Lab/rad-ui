"use client";

import { Input, Label, Button, Badge } from "@/registry/web/ui";
import { Search, Mail, User, Phone, MapPin } from "lucide-react";

export default function InputDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">ورودی متن (Input)</h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت ورودی متن برای دریافت داده‌های متنی کاربر با پشتیبانی از RTL،
          اعتبارسنجی، محدودیت کاراکتر و اعتبارسنجی فایل.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quarklab/rad-ui add input`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <Input type="email" placeholder="ایمیل خود را وارد کنید..." />
        </div>
      </section>

      {/* Input */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">ورودی (Input)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="input-username">نام کاربری</Label>
            <Input
              id="input-username"
              placeholder="یک نام کاربری انتخاب کنید"
            />
            <p className="text-sm text-muted-foreground">
              این نام کاربری عمومی شما خواهد بود.
            </p>
          </div>
        </div>
      </section>

      {/* Inline */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">درون‌خطی (Inline)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex w-full max-w-sm items-center gap-2">
            <Input type="email" placeholder="ایمیل" />
            <Button type="submit">جستجو</Button>
          </div>
        </div>
      </section>

      {/* Grid */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">شبکه‌ای (Grid)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="grid-first-name">نام</Label>
              <Input id="grid-first-name" placeholder="نام" />
            </div>
            <div className="space-y-2">
              <Label htmlFor="grid-last-name">نام خانوادگی</Label>
              <Input id="grid-last-name" placeholder="نام خانوادگی" />
            </div>
          </div>
        </div>
      </section>

      {/* Required */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">اجباری (Required)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="required-input">
              ورودی اجباری <span className="text-destructive">*</span>
            </Label>
            <Input
              id="required-input"
              required
              placeholder="این ورودی باید پر شود."
            />
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">حالت غیرفعال (Disabled)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="disabled">ایمیل</Label>
            <Input
              disabled
              type="email"
              placeholder="ایمیل"
              value="این فیلد در حال حاضر غیرفعال است"
            />
          </div>
        </div>
      </section>

      {/* Invalid State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نامعتبر (Invalid)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="invalid" className="text-destructive">
              ورودی نامعتبر
            </Label>
            <Input
              id="invalid"
              aria-invalid="true"
              className="border-destructive focus-visible:ring-destructive"
              placeholder="ایمیل خود را وارد کنید"
              defaultValue="invalid-input"
            />
            <p className="text-sm text-destructive">
              این فیلد حاوی خطای اعتبارسنجی است.
            </p>
          </div>
        </div>
      </section>

      {/* Badge */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با نشان (Badge)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <Label htmlFor="badge-input">آدرس وب‌هوک</Label>
              <Badge variant="secondary" className="text-[10px] h-5 px-1.5">
                آزمایشی
              </Badge>
            </div>
            <Input id="badge-input" placeholder="https://example.com/webhook" />
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">اندازه‌ها (Sizes)</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-lg font-medium mb-4">کوچک (Small)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Input size="sm" placeholder="ورودی کوچک..." />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">
              متوسط (Medium - پیش‌فرض)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Input size="md" placeholder="ورودی متوسط..." />
            </div>
          </div>
          <div>
            <h3 className="text-lg font-medium mb-4">بزرگ (Large)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <Input size="lg" placeholder="ورودی بزرگ..." />
            </div>
          </div>
        </div>
      </section>

      {/* Phone Validation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          اعتبارسنجی شماره تلفن (Phone Validation)
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          با <code dir="ltr">type=&quot;tel&quot;</code> و{" "}
          <code dir="ltr">validate</code>، فرمت بین‌المللی شماره تلفن بررسی
          می‌شود.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="phone-validate">شماره تلفن</Label>
            <Input
              id="phone-validate"
              type="tel"
              validate
              showError
              placeholder="+98 912 345 6789"
            />
          </div>
        </div>
      </section>

      {/* Number Validation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          اعتبارسنجی عددی (Number Validation)
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          با <code dir="ltr">type=&quot;number&quot;</code> و{" "}
          <code dir="ltr">validate</code>، فقط مقادیر عددی معتبر پذیرفته
          می‌شوند.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="number-validate">مبلغ</Label>
            <Input
              id="number-validate"
              type="number"
              validate
              showError
              placeholder="۱۰۰۰۰"
            />
          </div>
        </div>
      </section>

      {/* Email Validation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          اعتبارسنجی ایمیل (Email Validation)
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          با استفاده از پراپ‌های <code dir="ltr">validate</code> و{" "}
          <code dir="ltr">showError</code>، اعتبارسنجی خودکار ایمیل فعال می‌شود.
          خطا پس از خروج از فیلد (blur) نمایش داده می‌شود.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="email-validate">ایمیل</Label>
            <Input
              id="email-validate"
              type="email"
              validate
              showError
              placeholder="user@example.com"
            />
          </div>
        </div>
      </section>
      {/* Custom Pattern Validation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          اعتبارسنجی سفارشی (Custom Pattern)
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          با <code dir="ltr">validationPattern</code> می‌توانید الگوی regex
          دلخواه تعریف کنید. در این مثال فقط کد پستی ۱۰ رقمی پذیرفته می‌شود.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="custom-pattern">کد پستی</Label>
            <Input
              id="custom-pattern"
              validationPattern={/^\d{10}$/}
              validationMessage="کد پستی باید ۱۰ رقم باشد."
              showError
              placeholder="۱۲۳۴۵۶۷۸۹۰"
            />
          </div>
        </div>
      </section>

      {/* Keyboard Restriction - Digits Only */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          محدودیت کاراکتر (Keyboard Restriction)
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          با <code dir="ltr">allowedCharacters</code> می‌توانید ورود کاراکترها
          را محدود کنید. حروف غیرمجاز هنگام تایپ بلاک می‌شوند.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="digits-only">فقط اعداد</Label>
              <Input
                id="digits-only"
                allowedCharacters="digits"
                placeholder="فقط اعداد را تایپ کنید..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="alpha-only">فقط حروف</Label>
              <Input
                id="alpha-only"
                allowedCharacters="alpha"
                placeholder="فقط حروف فارسی و انگلیسی..."
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="persian-only">فقط فارسی</Label>
              <Input
                id="persian-only"
                allowedCharacters="persian"
                placeholder="فقط حروف فارسی و نشانه‌گذاری..."
              />
            </div>
          </div>
        </div>
      </section>

      {/* Max Input Length */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          محدودیت طول (Max Length)
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          با <code dir="ltr">maxInputLength</code> تعداد کاراکترهای مجاز محدود
          می‌شود و شمارنده کاراکتر نمایش داده می‌شود.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="max-length">توضیحات کوتاه</Label>
            <Input
              id="max-length"
              maxInputLength={50}
              placeholder="حداکثر ۵۰ کاراکتر..."
            />
          </div>
        </div>
      </section>

      {/* File Input */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">ورودی فایل (File)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="picture">تصویر</Label>
            <Input id="picture" type="file" />
            <p className="text-sm text-muted-foreground">
              یک تصویر برای آپلود انتخاب کنید.
            </p>
          </div>
        </div>
      </section>

      {/* File Validation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          اعتبارسنجی فایل (File Validation)
        </h2>
        <p className="text-sm text-muted-foreground mb-4">
          با <code dir="ltr">maxFileSize</code> و{" "}
          <code dir="ltr">acceptFormats</code> می‌توانید حجم و فرمت فایل را
          محدود کنید. راهنمای فرمت و حجم مجاز به صورت خودکار نمایش داده می‌شود.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="file-size">آپلود تصویر (حداکثر ۲ مگابایت)</Label>
              <Input
                id="file-size"
                type="file"
                maxFileSize={2 * 1024 * 1024}
                acceptFormats={[".png", ".jpg", ".jpeg", ".webp"]}
                showError
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="file-pdf">آپلود سند (فقط PDF)</Label>
              <Input
                id="file-pdf"
                type="file"
                maxFileSize={5 * 1024 * 1024}
                acceptFormats={[".pdf"]}
                showError
              />
            </div>
          </div>
        </div>
      </section>

      {/* Form */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">فرم کامل (Form)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="form-name">نام</Label>
                <div className="relative">
                  <User className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="form-name"
                    className="ps-9"
                    placeholder="نام کامل"
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="form-email">ایمیل</Label>
                <div className="relative">
                  <Mail className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
                  <Input
                    id="form-email"
                    className="ps-9"
                    type="email"
                    validate
                    showError
                    placeholder="user@example.com"
                  />
                </div>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="form-phone">شماره تماس</Label>
              <div className="relative">
                <Phone className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="form-phone"
                  className="ps-9"
                  type="tel"
                  validate
                  showError
                  placeholder="0912..."
                />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="form-address">آدرس</Label>
              <div className="relative">
                <MapPin className="absolute start-3 top-3 h-4 w-4 text-muted-foreground" />
                <Input
                  id="form-address"
                  className="ps-9"
                  placeholder="آدرس پستی"
                />
              </div>
            </div>

            <div className="flex justify-end gap-4">
              <Button variant="outline" type="button">
                لغو
              </Button>
              <Button type="submit">ثبت اطلاعات</Button>
            </div>
          </form>
        </div>
      </section>

      {/* RTL Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">پشتیبانی RTL</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            کامپوننت Input به طور کامل از جهت‌گیری راست‌چین پشتیبانی می‌کند.
            متن‌ها، placeholder، padding‌ها و پیام‌های خطا به طور خودکار بر اساس
            جهت سند تنظیم می‌شوند. تمام پیام‌های اعتبارسنجی پیش‌فرض به زبان
            فارسی هستند.
          </p>
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
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>size</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{`"sm" | "md" | "lg"`}</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{`"md"`}</code>
                </td>
                <td className="p-4">اندازه ورودی</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>type</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{`"text"`}</code>
                </td>
                <td className="p-4">
                  نوع ورودی HTML (text, email, tel, number, file, ...)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>validate</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>false</code>
                </td>
                <td className="p-4">
                  فعال‌سازی اعتبارسنجی خودکار بر اساس type
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>validationPattern</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>RegExp</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">الگوی regex سفارشی برای اعتبارسنجی</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>validationMessage</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">
                  پیام خطای سفارشی (جایگزین پیام فارسی پیش‌فرض)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>onValidationChange</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{`(result) => void`}</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">callback هنگام تغییر وضعیت اعتبارسنجی</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>allowedCharacters</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>
                    {`RegExp | "digits" | "alpha" | "alphanumeric" | "persian"`}
                  </code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">محدود کردن کاراکترهای مجاز هنگام تایپ</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>maxInputLength</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">
                  حداکثر طول ورودی با نمایش شمارنده کاراکتر
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>maxFileSize</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">
                  حداکثر حجم فایل به بایت (فقط برای type=&quot;file&quot;)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>acceptFormats</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{`string[]`}</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">
                  فرمت‌های مجاز فایل (فقط برای type=&quot;file&quot;)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>showError</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>false</code>
                </td>
                <td className="p-4">نمایش پیام خطا زیر ورودی</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>className</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">کلاس‌های CSS سفارشی</td>
              </tr>
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
      </section>
    </div>
  );
}
