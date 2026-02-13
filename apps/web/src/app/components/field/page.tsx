"use client";

import * as React from "react";
import {
  Field,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
  Input,
  Textarea,
  Checkbox,
  Switch,
  RadioGroup,
  RadioGroupItem,
  Slider,
  Label,
  Button,
} from "@/registry/web/ui";

export default function FieldDemo() {
  const [sliderValue, setSliderValue] = React.useState([400]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">فیلد فرم (Field)</h1>
        <p className="text-lg text-muted-foreground">
          ترکیب برچسب‌ها، کنترل‌ها و متن‌های راهنما برای ساخت فیلدهای فرم
          دسترسی‌پذیر و گروه‌بندی ورودی‌ها.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quarklab/rad-ui add field`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm">
            <Field>
              <FieldLabel htmlFor="basic-name">نام کامل</FieldLabel>
              <Input id="basic-name" placeholder="نام خود را وارد کنید" />
              <FieldDescription>
                این نام در پروفایل شما نمایش داده می‌شود.
              </FieldDescription>
            </Field>
          </div>
        </div>
        <div className="mt-4 bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";

<Field>
  <FieldLabel htmlFor="name">نام کامل</FieldLabel>
  <Input id="name" placeholder="نام خود را وارد کنید" />
  <FieldDescription>
    این نام در پروفایل شما نمایش داده می‌شود.
  </FieldDescription>
</Field>`}</code>
          </pre>
        </div>
      </section>

      {/* Anatomy */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">ساختار (Anatomy)</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            خانواده <code dir="ltr">Field</code> برای ساخت فرم‌های دسترسی‌پذیر
            طراحی شده است. ساختار معمول یک فیلد به صورت زیر است:
          </p>
        </div>
        <div className="mt-4 bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`<Field>
  <FieldLabel htmlFor="input-id">Label</FieldLabel>
  {/* Input, Select, Switch, etc. */}
  <FieldDescription>Optional helper text.</FieldDescription>
  <FieldError>Validation message.</FieldError>
</Field>`}</code>
          </pre>
        </div>
        <div className="mt-4 space-y-2 text-muted-foreground text-sm">
          <p>
            <code dir="ltr">Field</code> پوشش‌دهنده اصلی برای یک فیلد منفرد است.
          </p>
          <p>
            <code dir="ltr">FieldContent</code> یک ستون flex برای گروه‌بندی
            برچسب و توضیحات است.
          </p>
          <p>
            فیلدهای مرتبط را با <code dir="ltr">FieldGroup</code> گروه‌بندی کنید
            و از <code dir="ltr">FieldSet</code> با{" "}
            <code dir="ltr">FieldLegend</code> برای گروه‌بندی معنایی استفاده
            کنید.
          </p>
        </div>
      </section>

      {/* Input Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">ورودی (Input)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm space-y-6">
            <Field>
              <FieldLabel htmlFor="field-username">نام کاربری</FieldLabel>
              <Input
                id="field-username"
                placeholder="یک نام کاربری انتخاب کنید"
              />
              <FieldDescription>
                نام کاربری یکتا برای حساب شما.
              </FieldDescription>
            </Field>
            <Field>
              <FieldLabel htmlFor="field-password">رمز عبور</FieldLabel>
              <Input
                id="field-password"
                type="password"
                placeholder="رمز عبور"
              />
              <FieldDescription>
                حداقل ۸ کاراکتر باید داشته باشد.
              </FieldDescription>
            </Field>
          </div>
        </div>
      </section>

      {/* Textarea Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">ناحیه متن (Textarea)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm">
            <Field>
              <FieldLabel htmlFor="field-feedback">بازخورد</FieldLabel>
              <Textarea
                id="field-feedback"
                placeholder="نظر خود را بنویسید..."
                rows={4}
              />
              <FieldDescription>
                نظرات خود درباره خدمات ما را با ما به اشتراک بگذارید.
              </FieldDescription>
            </Field>
          </div>
        </div>
      </section>

      {/* Slider Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">اسلایدر (Slider)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm">
            <Field>
              <FieldLabel>محدوده قیمت</FieldLabel>
              <Slider
                value={sliderValue}
                onValueChange={setSliderValue}
                min={0}
                max={1000}
                step={50}
              />
              <FieldDescription>
                بودجه خود را تنظیم کنید ({sliderValue[0]} تومان).
              </FieldDescription>
            </Field>
          </div>
        </div>
      </section>

      {/* FieldSet Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">مجموعه فیلد (FieldSet)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-md">
            <FieldSet>
              <FieldLegend>اطلاعات آدرس</FieldLegend>
              <FieldDescription>
                آدرس شما برای ارسال سفارش مورد نیاز است.
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="fs-street">آدرس خیابان</FieldLabel>
                  <Input id="fs-street" placeholder="خیابان و کوچه" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="fs-city">شهر</FieldLabel>
                  <Input id="fs-city" placeholder="شهر" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="fs-postal">کد پستی</FieldLabel>
                  <Input id="fs-postal" placeholder="کد پستی ۱۰ رقمی" />
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>
        </div>
      </section>

      {/* Checkbox Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">چک‌باکس (Checkbox)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-md">
            <FieldSet>
              <FieldLegend>موارد نمایشی</FieldLegend>
              <FieldDescription>
                موارد مورد نظر برای نمایش در دسکتاپ را انتخاب کنید.
              </FieldDescription>
              <FieldGroup>
                <Field orientation="horizontal">
                  <Checkbox id="check-hdd" />
                  <FieldLabel htmlFor="check-hdd">دیسک‌های سخت</FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="check-ext" />
                  <FieldLabel htmlFor="check-ext">دیسک‌های خارجی</FieldLabel>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="check-cd" />
                  <FieldLabel htmlFor="check-cd">CD، DVD و iPod</FieldLabel>
                </Field>
                <FieldSeparator />
                <Field orientation="horizontal">
                  <Checkbox id="check-sync" />
                  <FieldContent>
                    <FieldLabel htmlFor="check-sync">
                      همگام‌سازی دسکتاپ و اسناد
                    </FieldLabel>
                    <FieldDescription>
                      پوشه‌های دسکتاپ و اسناد شما با iCloud Drive همگام‌سازی
                      می‌شوند.
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>
        </div>
      </section>

      {/* Radio Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">دکمه رادیویی (Radio)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-md">
            <FieldSet>
              <FieldLegend>طرح اشتراک</FieldLegend>
              <FieldDescription>
                طرح‌های سالانه و مادام‌العمر تخفیف قابل توجهی دارند.
              </FieldDescription>
              <RadioGroup defaultValue="monthly">
                <FieldGroup>
                  <Field orientation="horizontal">
                    <RadioGroupItem value="monthly" id="radio-monthly" />
                    <FieldLabel htmlFor="radio-monthly">
                      ماهانه (۹۹,۰۰۰ تومان/ماه)
                    </FieldLabel>
                  </Field>
                  <Field orientation="horizontal">
                    <RadioGroupItem value="yearly" id="radio-yearly" />
                    <FieldLabel htmlFor="radio-yearly">
                      سالانه (۹۹۰,۰۰۰ تومان/سال)
                    </FieldLabel>
                  </Field>
                  <Field orientation="horizontal">
                    <RadioGroupItem value="lifetime" id="radio-lifetime" />
                    <FieldLabel htmlFor="radio-lifetime">
                      مادام‌العمر (۲,۹۹۰,۰۰۰ تومان)
                    </FieldLabel>
                  </Field>
                </FieldGroup>
              </RadioGroup>
            </FieldSet>
          </div>
        </div>
      </section>

      {/* Switch Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">سوئیچ (Switch)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm">
            <Field orientation="horizontal">
              <Switch id="switch-mfa" />
              <FieldLabel htmlFor="switch-mfa">
                احراز هویت دو مرحله‌ای
              </FieldLabel>
            </Field>
          </div>
        </div>
      </section>

      {/* Field Group Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">گروه فیلد (Field Group)</h2>
        <p className="text-muted-foreground mb-4">
          فیلدها را با <code dir="ltr">FieldGroup</code> روی هم قرار دهید. از{" "}
          <code dir="ltr">FieldSeparator</code> برای جدا کردن بخش‌ها استفاده
          کنید.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-md">
            <FieldSet>
              <FieldLegend>اعلان‌ها</FieldLegend>
              <FieldDescription>
                هنگام پاسخ به درخواست‌ها اطلاع‌رسانی دریافت کنید.
              </FieldDescription>
              <FieldGroup>
                <Field orientation="horizontal">
                  <Checkbox id="fg-push" defaultChecked />
                  <FieldContent>
                    <FieldLabel htmlFor="fg-push">اعلان‌های فوری</FieldLabel>
                    <FieldDescription>
                      دریافت اعلان در دستگاه شما.
                    </FieldDescription>
                  </FieldContent>
                </Field>
                <FieldSeparator />
                <Field orientation="horizontal">
                  <Checkbox id="fg-email" />
                  <FieldContent>
                    <FieldLabel htmlFor="fg-email">اعلان ایمیلی</FieldLabel>
                    <FieldDescription>
                      دریافت اعلان از طریق ایمیل.
                    </FieldDescription>
                  </FieldContent>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="fg-sms" />
                  <FieldContent>
                    <FieldLabel htmlFor="fg-sms">اعلان پیامکی</FieldLabel>
                    <FieldDescription>
                      دریافت پیامک برای رویدادهای مهم.
                    </FieldDescription>
                  </FieldContent>
                </Field>
              </FieldGroup>
            </FieldSet>
          </div>
        </div>
      </section>

      {/* Validation / Error Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          اعتبارسنجی و خطا (Validation)
        </h2>
        <div className="space-y-4 text-muted-foreground mb-4">
          <p>
            برای نمایش حالت خطا، از <code dir="ltr">data-invalid</code> روی{" "}
            <code dir="ltr">Field</code> و <code dir="ltr">aria-invalid</code>{" "}
            روی ورودی استفاده کنید.
          </p>
        </div>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-sm space-y-6">
            <Field data-invalid="true">
              <FieldLabel htmlFor="err-email">ایمیل</FieldLabel>
              <Input
                id="err-email"
                type="email"
                aria-invalid
                defaultValue="invalid-email"
                className="border-destructive focus-visible:ring-destructive"
              />
              <FieldError>یک آدرس ایمیل معتبر وارد کنید.</FieldError>
            </Field>
            <Field data-invalid="true">
              <FieldLabel htmlFor="err-username">نام کاربری</FieldLabel>
              <Input
                id="err-username"
                aria-invalid
                defaultValue="admin"
                className="border-destructive focus-visible:ring-destructive"
              />
              <FieldError>
                این نام کاربری قبلاً استفاده شده است. نام دیگری انتخاب کنید.
              </FieldError>
            </Field>
          </div>
        </div>
      </section>

      {/* Payment Form - Practical Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          فرم کامل (Practical Example)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-lg">
            <FieldSet>
              <FieldLegend>اطلاعات پرداخت</FieldLegend>
              <FieldDescription>
                تمام تراکنش‌ها امن و رمزنگاری شده هستند.
              </FieldDescription>
              <FieldGroup>
                <Field>
                  <FieldLabel htmlFor="pay-name">نام روی کارت</FieldLabel>
                  <Input id="pay-name" placeholder="نام کامل" />
                </Field>
                <Field>
                  <FieldLabel htmlFor="pay-card">شماره کارت</FieldLabel>
                  <Input
                    id="pay-card"
                    placeholder="شماره کارت ۱۶ رقمی"
                    dir="ltr"
                  />
                  <FieldDescription>
                    شماره کارت ۱۶ رقمی خود را وارد کنید.
                  </FieldDescription>
                </Field>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <Field>
                    <FieldLabel htmlFor="pay-month">ماه</FieldLabel>
                    <Input id="pay-month" placeholder="MM" dir="ltr" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="pay-year">سال</FieldLabel>
                    <Input id="pay-year" placeholder="YYYY" dir="ltr" />
                  </Field>
                  <Field>
                    <FieldLabel htmlFor="pay-cvv">CVV</FieldLabel>
                    <Input id="pay-cvv" placeholder="CVV" dir="ltr" />
                  </Field>
                </div>
                <FieldSeparator />
                <Field>
                  <FieldLabel htmlFor="pay-address">آدرس صورتحساب</FieldLabel>
                  <Input id="pay-address" placeholder="آدرس" />
                  <FieldDescription>
                    آدرس صورتحساب مرتبط با روش پرداخت شما.
                  </FieldDescription>
                </Field>
                <Field orientation="horizontal">
                  <Checkbox id="pay-same" />
                  <FieldLabel htmlFor="pay-same">
                    آدرس صورتحساب همان آدرس ارسال است
                  </FieldLabel>
                </Field>
                <Field>
                  <FieldLabel htmlFor="pay-comments">توضیحات</FieldLabel>
                  <Textarea
                    id="pay-comments"
                    placeholder="توضیحات اختیاری..."
                    rows={3}
                  />
                </Field>
              </FieldGroup>
            </FieldSet>
            <div className="flex justify-end gap-3 mt-6">
              <Button variant="outline" type="button">
                لغو
              </Button>
              <Button type="submit">ثبت</Button>
            </div>
          </div>
        </div>
      </section>

      {/* RTL Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">پشتیبانی RTL</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            کامپوننت فیلد به طور کامل از جهت‌گیری راست‌چین پشتیبانی می‌کند.
            برچسب‌ها، توضیحات و پیام‌های خطا به صورت خودکار بر اساس جهت سند
            تنظیم می‌شوند.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              در حالت <code dir="ltr">horizontal</code> برچسب و کنترل در کنار هم
              قرار می‌گیرند
            </li>
            <li>
              <code dir="ltr">FieldSet</code> و{" "}
              <code dir="ltr">FieldLegend</code> گروه‌بندی معنایی برای
              دسترسی‌پذیری فراهم می‌کنند
            </li>
            <li>
              <code dir="ltr">FieldError</code> از{" "}
              <code dir="ltr">role=&quot;alert&quot;</code> برای فن‌آوری‌های
              کمکی استفاده می‌کند
            </li>
          </ul>
        </div>
      </section>

      {/* Accessibility */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          دسترسی‌پذیری (Accessibility)
        </h2>
        <div className="space-y-2 text-muted-foreground text-sm">
          <p>
            <code dir="ltr">FieldSet</code> و <code dir="ltr">FieldLegend</code>{" "}
            گروه‌بندی معنایی برای کاربران صفحه‌کلید و فن‌آوری‌های کمکی فراهم
            می‌کنند.
          </p>
          <p>
            <code dir="ltr">Field</code> با{" "}
            <code dir="ltr">role=&quot;group&quot;</code> خروجی می‌دهد تا
            کنترل‌های تودرتو برچسب‌گذاری را از <code dir="ltr">FieldLabel</code>{" "}
            به ارث ببرند.
          </p>
          <p>
            از <code dir="ltr">FieldSeparator</code> با احتیاط استفاده کنید تا
            صفحه‌خوان‌ها با مرزهای بخش روشن مواجه شوند.
          </p>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        {/* FieldSet */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          FieldSet
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          محفظه‌ای که یک <code dir="ltr">fieldset</code> معنایی با فاصله‌گذاری
          پیش‌فرض رندر می‌کند.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ</th>
                <th className="text-right p-4 font-semibold">نوع</th>
                <th className="text-right p-4 font-semibold">پیش‌فرض</th>
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

        {/* FieldLegend */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          FieldLegend
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ</th>
                <th className="text-right p-4 font-semibold">نوع</th>
                <th className="text-right p-4 font-semibold">پیش‌فرض</th>
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>variant</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{'"legend" | "label"'}</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>&quot;legend&quot;</code>
                </td>
                <td className="p-4">
                  نوع ظاهری. نوع label اندازه برچسب را اعمال می‌کند.
                </td>
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

        {/* Field */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          Field
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          پوشش‌دهنده اصلی برای یک فیلد منفرد. کنترل جهت‌گیری، حالت خطا و
          فاصله‌گذاری.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ</th>
                <th className="text-right p-4 font-semibold">نوع</th>
                <th className="text-right p-4 font-semibold">پیش‌فرض</th>
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>orientation</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{'"vertical" | "horizontal" | "responsive"'}</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>&quot;vertical&quot;</code>
                </td>
                <td className="p-4">جهت چیدمان فیلد</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>data-invalid</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>boolean</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">فعال‌سازی حالت خطا</td>
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

        {/* FieldError */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          FieldError
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          محفظه خطای دسترسی‌پذیر که فرزندان یا آرایه{" "}
          <code dir="ltr">errors</code> می‌پذیرد.
        </p>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ</th>
                <th className="text-right p-4 font-semibold">نوع</th>
                <th className="text-right p-4 font-semibold">پیش‌فرض</th>
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>errors</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{"Array<{ message?: string }>"}</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">آرایه خطاها (مثلاً از react-hook-form)</td>
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

        {/* FieldDescription */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          FieldDescription
        </h3>
        <div className="overflow-x-auto mb-8">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ</th>
                <th className="text-right p-4 font-semibold">نوع</th>
                <th className="text-right p-4 font-semibold">پیش‌فرض</th>
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

        {/* FieldSeparator */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          FieldSeparator
        </h3>
        <p className="text-sm text-muted-foreground mb-3">
          جداکننده بصری برای تفکیک بخش‌ها در یک{" "}
          <code dir="ltr">FieldGroup</code>. محتوای درون‌خطی اختیاری می‌پذیرد.
        </p>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ</th>
                <th className="text-right p-4 font-semibold">نوع</th>
                <th className="text-right p-4 font-semibold">پیش‌فرض</th>
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td className="p-4" dir="ltr">
                  <code>children</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>ReactNode</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">متن اختیاری بین خطوط جداکننده</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
