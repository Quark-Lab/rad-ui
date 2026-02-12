"use client";

import * as React from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Label,
  Button,
  REGEXP_ONLY_DIGITS,
  REGEXP_ONLY_DIGITS_AND_CHARS,
} from "@/registry/web/ui";

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
function toPersianDigits(str: string): string {
  return str.replace(/\d/g, (d) => PERSIAN_DIGITS[parseInt(d)] ?? d);
}

export default function InputOTPDemo() {
  const [controlledValue, setControlledValue] = React.useState("");
  const [formValue, setFormValue] = React.useState("");
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          ورودی رمز یکبار مصرف (Input OTP)
        </h1>
        <p className="text-lg text-muted-foreground">
          کامپوننت ورودی رمز یکبار مصرف با قابلیت کپی و پیست و پشتیبانی کامل از
          RTL و دسترسی‌پذیری.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quarklab/rad-ui add input-otp`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border flex items-center justify-center">
          <InputOTP maxLength={6}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
        <div className="mt-4 bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

<InputOTP maxLength={6}>
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`}</code>
          </pre>
        </div>
      </section>

      {/* Pattern - Digits Only */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          فقط اعداد (Digits Only Pattern)
        </h2>
        <p className="text-muted-foreground mb-4">
          از پراپ <code dir="ltr">pattern</code> برای محدود کردن ورودی به اعداد
          استفاده کنید.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border flex items-center justify-center">
          <div className="space-y-2 flex flex-col items-center">
            <Label>رمز عددی</Label>
            <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </section>

      {/* Separator */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">جداکننده (Separator)</h2>
        <p className="text-muted-foreground mb-4">
          از کامپوننت <code dir="ltr">{`<InputOTPSeparator />`}</code> برای
          افزودن جداکننده بین گروه‌های ورودی استفاده کنید.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border flex items-center justify-center">
          <InputOTP maxLength={4}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={2} />
              <InputOTPSlot index={3} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </section>

      {/* Disabled */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">غیرفعال (Disabled)</h2>
        <p className="text-muted-foreground mb-4">
          از پراپ <code dir="ltr">disabled</code> برای غیرفعال کردن ورودی
          استفاده کنید.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border flex items-center justify-center">
          <InputOTP maxLength={6} disabled>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </section>

      {/* Controlled */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">کنترل‌شده (Controlled)</h2>
        <p className="text-muted-foreground mb-4">
          از پراپ‌های <code dir="ltr">value</code> و{" "}
          <code dir="ltr">onChange</code> برای کنترل مقدار ورودی استفاده کنید.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="flex flex-col items-center gap-4">
            <InputOTP
              maxLength={6}
              value={controlledValue}
              onChange={setControlledValue}
            >
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-sm text-muted-foreground text-center">
              {controlledValue === "" ? (
                <>رمز یکبار مصرف خود را وارد کنید.</>
              ) : (
                <>
                  مقدار وارد شده:{" "}
                  <span className="font-mono font-bold" dir="ltr">
                    {toPersianDigits(controlledValue)}
                  </span>
                </>
              )}
            </p>
          </div>
        </div>
      </section>

      {/* Invalid */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نامعتبر (Invalid)</h2>
        <p className="text-muted-foreground mb-4">
          برای نمایش حالت خطا از <code dir="ltr">aria-invalid</code> روی
          اسلات‌ها استفاده کنید.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border flex flex-col items-center gap-3">
          <InputOTP maxLength={6} defaultValue="000000">
            <InputOTPGroup>
              <InputOTPSlot
                index={0}
                className="border-destructive text-destructive"
              />
              <InputOTPSlot
                index={1}
                className="border-destructive text-destructive"
              />
              <InputOTPSlot
                index={2}
                className="border-destructive text-destructive"
              />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot
                index={3}
                className="border-destructive text-destructive"
              />
              <InputOTPSlot
                index={4}
                className="border-destructive text-destructive"
              />
              <InputOTPSlot
                index={5}
                className="border-destructive text-destructive"
              />
            </InputOTPGroup>
          </InputOTP>
          <p className="text-sm text-destructive">
            رمز وارد شده نامعتبر است. لطفاً دوباره تلاش کنید.
          </p>
        </div>
      </section>

      {/* Four Digits */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">چهار رقمی (Four Digits)</h2>
        <p className="text-muted-foreground mb-4">
          الگوی رایج برای کد PIN چهار رقمی.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border flex items-center justify-center">
          <div className="space-y-2 flex flex-col items-center">
            <Label>کد PIN</Label>
            <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
                <InputOTPSlot index={3} />
              </InputOTPGroup>
            </InputOTP>
          </div>
        </div>
      </section>

      {/* Alphanumeric */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          حروف و اعداد (Alphanumeric)
        </h2>
        <p className="text-muted-foreground mb-4">
          از <code dir="ltr">REGEXP_ONLY_DIGITS_AND_CHARS</code> برای پذیرش حروف
          و اعداد استفاده کنید.
        </p>
        <div className="p-8 rounded-lg bg-card border border-border flex items-center justify-center">
          <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS_AND_CHARS}>
            <InputOTPGroup>
              <InputOTPSlot index={0} />
              <InputOTPSlot index={1} />
              <InputOTPSlot index={2} />
            </InputOTPGroup>
            <InputOTPSeparator />
            <InputOTPGroup>
              <InputOTPSlot index={3} />
              <InputOTPSlot index={4} />
              <InputOTPSlot index={5} />
            </InputOTPGroup>
          </InputOTP>
        </div>
      </section>

      {/* Form Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          فرم تأیید (Verification Form)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="max-w-md mx-auto">
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <h3 className="text-xl font-semibold">تأیید ورود</h3>
                <p className="text-sm text-muted-foreground">
                  کد تأیید ارسال شده به ایمیل{" "}
                  <span className="font-medium text-foreground" dir="ltr">
                    m@example.com
                  </span>{" "}
                  را وارد کنید.
                </p>
              </div>

              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  setFormSubmitted(true);
                }}
                className="space-y-6"
              >
                <div className="space-y-2">
                  <Label htmlFor="otp-form">کد تأیید</Label>
                  <div className="flex justify-center">
                    <InputOTP
                      id="otp-form"
                      maxLength={6}
                      value={formValue}
                      onChange={setFormValue}
                    >
                      <InputOTPGroup>
                        <InputOTPSlot index={0} />
                        <InputOTPSlot index={1} />
                        <InputOTPSlot index={2} />
                      </InputOTPGroup>
                      <InputOTPSeparator />
                      <InputOTPGroup>
                        <InputOTPSlot index={3} />
                        <InputOTPSlot index={4} />
                        <InputOTPSlot index={5} />
                      </InputOTPGroup>
                    </InputOTP>
                  </div>
                  <p className="text-xs text-muted-foreground text-center">
                    کد ارسال نشد؟{" "}
                    <button
                      type="button"
                      className="text-primary underline hover:text-primary/80"
                    >
                      ارسال مجدد
                    </button>
                  </p>
                </div>

                <Button
                  type="submit"
                  className="w-full"
                  disabled={formValue.length < 6}
                >
                  تأیید
                </Button>

                {formSubmitted && formValue.length === 6 && (
                  <p className="text-sm text-center text-primary">
                    کد با موفقیت ارسال شد!
                  </p>
                )}
              </form>

              <p className="text-xs text-center text-muted-foreground">
                مشکلی در ورود دارید؟{" "}
                <a href="#" className="text-primary underline">
                  تماس با پشتیبانی
                </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* RTL Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">پشتیبانی RTL</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            کامپوننت Input OTP به طور کامل از جهت‌گیری راست‌چین پشتیبانی می‌کند.
            از آنجا که ورود ارقام همیشه از چپ به راست است، ورودی خود دارای جهت{" "}
            <code dir="ltr">dir=&quot;ltr&quot;</code> است اما برچسب‌ها و
            توضیحات اطراف آن از جهت سند پیروی می‌کنند.
          </p>
          <ul className="list-disc list-inside space-y-1">
            <li>
              حاشیه‌های اسلات‌ها از ویژگی‌های منطقی CSS استفاده می‌کنند (
              <code dir="ltr">border-inline-start</code>،{" "}
              <code dir="ltr">border-inline-end</code>)
            </li>
            <li>
              گوشه‌های گرد از <code dir="ltr">rounded-s-md</code> و{" "}
              <code dir="ltr">rounded-e-md</code> استفاده می‌کنند
            </li>
            <li>برچسب‌ها و متون راهنما با RTL هماهنگ هستند</li>
          </ul>
        </div>
        <div className="mt-6 p-8 rounded-lg bg-card border border-border">
          <div className="space-y-3 flex flex-col items-center">
            <Label>کد تأیید شما</Label>
            <InputOTP maxLength={6}>
              <InputOTPGroup>
                <InputOTPSlot index={0} />
                <InputOTPSlot index={1} />
                <InputOTPSlot index={2} />
              </InputOTPGroup>
              <InputOTPSeparator />
              <InputOTPGroup>
                <InputOTPSlot index={3} />
                <InputOTPSlot index={4} />
                <InputOTPSlot index={5} />
              </InputOTPGroup>
            </InputOTP>
            <p className="text-sm text-muted-foreground">
              کد ۶ رقمی ارسال شده به شماره تلفن خود را وارد کنید.
            </p>
          </div>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        {/* InputOTP */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          InputOTP
        </h3>
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
                  <code>maxLength</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">حداکثر تعداد کاراکترهای ورودی (اجباری)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>pattern</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string | RegExp</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">الگوی مجاز برای ورودی</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>value</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">مقدار کنترل‌شده ورودی</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>onChange</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>{"(value: string) => void"}</code>
                </td>
                <td className="p-4">-</td>
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
                <td className="p-4">غیرفعال کردن ورودی</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>containerClassName</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">کلاس‌های CSS برای محفظه بیرونی</td>
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

        {/* InputOTPSlot */}
        <h3 className="text-lg font-medium mb-4" dir="ltr">
          InputOTPSlot
        </h3>
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
                  <code>index</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4">-</td>
                <td className="p-4">شماره اندیس اسلات در ورودی OTP (اجباری)</td>
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

        {/* Pattern Constants */}
        <h3 className="text-lg font-medium mb-4">ثابت‌های الگو</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">
                  ثابت (Constant)
                </th>
                <th className="text-right p-4 font-semibold">توضیحات</th>
              </tr>
            </thead>
            <tbody>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>REGEXP_ONLY_DIGITS</code>
                </td>
                <td className="p-4">فقط ارقام (۰ تا ۹)</td>
              </tr>
              <tr>
                <td className="p-4" dir="ltr">
                  <code>REGEXP_ONLY_DIGITS_AND_CHARS</code>
                </td>
                <td className="p-4">ارقام و حروف انگلیسی</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
