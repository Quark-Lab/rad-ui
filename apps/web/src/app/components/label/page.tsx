"use client";

import { Label } from "@/registry/web/ui";

export default function LabelDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">برچسب (Label)</h1>
        <p className="text-lg text-muted-foreground">
          برچسب دسترسی‌پذیر برای فرم‌ها
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quark-lab/rad-ui add label`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <p className="text-muted-foreground mb-4">
          Label برای برچسب‌گذاری فیلدهای فرم استفاده می‌شود
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2 max-w-sm">
            <Label htmlFor="email">ایمیل</Label>
            <input
              type="email"
              id="email"
              className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              placeholder="your@email.com"
            />
          </div>
        </div>
      </section>

      {/* Form Controls */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          انواع کنترل‌ها (Form Controls)
        </h2>
        <p className="text-muted-foreground mb-4">
          Label با انواع مختلف فیلدهای فرم کار می‌کند
        </p>
        <div className="space-y-6">
          {/* Text Input */}
          <div>
            <h3 className="text-lg font-medium mb-3">ورودی متن (Text Input)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-2 max-w-sm">
                <Label htmlFor="name">نام</Label>
                <input
                  type="text"
                  id="name"
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="نام خود را وارد کنید"
                />
              </div>
            </div>
          </div>

          {/* Checkbox */}
          <div>
            <h3 className="text-lg font-medium mb-3">چک‌باکس (Checkbox)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="flex items-center space-x-2 space-x-reverse">
                <input
                  type="checkbox"
                  id="terms"
                  className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                />
                <Label htmlFor="terms" className="cursor-pointer">
                  شرایط و قوانین را می‌پذیرم
                </Label>
              </div>
            </div>
          </div>

          {/* Radio */}
          <div>
            <h3 className="text-lg font-medium mb-3">
              دکمه رادیویی (Radio Button)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-3">
                <div className="flex items-center space-x-2 space-x-reverse">
                  <input
                    type="radio"
                    id="option1"
                    name="options"
                    className="h-4 w-4 border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                  <Label htmlFor="option1" className="cursor-pointer">
                    گزینه اول
                  </Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <input
                    type="radio"
                    id="option2"
                    name="options"
                    className="h-4 w-4 border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                  <Label htmlFor="option2" className="cursor-pointer">
                    گزینه دوم
                  </Label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <input
                    type="radio"
                    id="option3"
                    name="options"
                    className="h-4 w-4 border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                  <Label htmlFor="option3" className="cursor-pointer">
                    گزینه سوم
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Textarea */}
          <div>
            <h3 className="text-lg font-medium mb-3">
              ناحیه متن (Textarea)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-2 max-w-sm">
                <Label htmlFor="message">پیام</Label>
                <textarea
                  id="message"
                  rows={4}
                  className="flex min-h-[80px] w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  placeholder="پیام خود را بنویسید..."
                />
              </div>
            </div>
          </div>

          {/* Select */}
          <div>
            <h3 className="text-lg font-medium mb-3">
              لیست انتخابی (Select)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-2 max-w-sm">
                <Label htmlFor="country">کشور</Label>
                <select
                  id="country"
                  className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                >
                  <option>ایران</option>
                  <option>آمریکا</option>
                  <option>کانادا</option>
                  <option>انگلستان</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Required Fields */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          فیلدهای الزامی (Required Fields)
        </h2>
        <p className="text-muted-foreground mb-4">
          نشان دادن فیلدهای الزامی با علامت ستاره
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-4 max-w-sm">
            <div className="space-y-2">
              <Label htmlFor="required-email">
                ایمیل <span className="text-destructive">*</span>
              </Label>
              <input
                type="email"
                id="required-email"
                required
                className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="your@email.com"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="optional-phone">شماره تلفن (اختیاری)</Label>
              <input
                type="tel"
                id="optional-phone"
                className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                placeholder="09123456789"
              />
            </div>
          </div>
        </div>
      </section>

      {/* With Helper Text */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          با متن کمکی (With Helper Text)
        </h2>
        <p className="text-muted-foreground mb-4">
          اضافه کردن توضیحات اضافی برای فیلدها
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2 max-w-sm">
            <Label htmlFor="username">نام کاربری</Label>
            <input
              type="text"
              id="username"
              className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              placeholder="username"
            />
            <p className="text-sm text-muted-foreground">
              نام کاربری شما باید حداقل 3 کاراکتر باشد
            </p>
          </div>
        </div>
      </section>

      {/* Disabled State */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          حالت غیرفعال (Disabled State)
        </h2>
        <p className="text-muted-foreground mb-4">
          Label به صورت خودکار با فیلدهای غیرفعال سازگار می‌شود
        </p>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-4 max-w-sm">
            <div className="space-y-2">
              <Label htmlFor="disabled-input">ورودی غیرفعال</Label>
              <input
                type="text"
                id="disabled-input"
                disabled
                className="peer flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
                placeholder="این فیلد غیرفعال است"
              />
            </div>
            <div className="flex items-center space-x-2 space-x-reverse">
              <input
                type="checkbox"
                id="disabled-checkbox"
                disabled
                className="peer h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
              />
              <Label
                htmlFor="disabled-checkbox"
                className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                چک‌باکس غیرفعال
              </Label>
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
          {/* Example 1: Login Form */}
          <div>
            <h3 className="text-lg font-medium mb-4">فرم ورود</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-sm space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="login-email">ایمیل</Label>
                  <input
                    type="email"
                    id="login-email"
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="login-password">رمز عبور</Label>
                  <input
                    type="password"
                    id="login-password"
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <input
                    type="checkbox"
                    id="remember"
                    className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                  />
                  <Label htmlFor="remember" className="cursor-pointer">
                    مرا به خاطر بسپار
                  </Label>
                </div>
              </div>
            </div>
          </div>

          {/* Example 2: Registration Form */}
          <div>
            <h3 className="text-lg font-medium mb-4">فرم ثبت‌نام</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-md space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="first-name">
                      نام <span className="text-destructive">*</span>
                    </Label>
                    <input
                      type="text"
                      id="first-name"
                      required
                      className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="last-name">
                      نام خانوادگی <span className="text-destructive">*</span>
                    </Label>
                    <input
                      type="text"
                      id="last-name"
                      required
                      className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-email">
                    ایمیل <span className="text-destructive">*</span>
                  </Label>
                  <input
                    type="email"
                    id="reg-email"
                    required
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                    placeholder="your@email.com"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="reg-password">
                    رمز عبور <span className="text-destructive">*</span>
                  </Label>
                  <input
                    type="password"
                    id="reg-password"
                    required
                    className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
                  />
                  <p className="text-sm text-muted-foreground">
                    حداقل 8 کاراکتر
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Example 3: Settings Form */}
          <div>
            <h3 className="text-lg font-medium mb-4">تنظیمات</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="max-w-md space-y-6">
                <div>
                  <h4 className="font-semibold mb-3">اعلان‌ها</h4>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="checkbox"
                        id="email-notifications"
                        defaultChecked
                        className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      />
                      <Label
                        htmlFor="email-notifications"
                        className="cursor-pointer"
                      >
                        اعلان‌های ایمیل
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="checkbox"
                        id="push-notifications"
                        className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      />
                      <Label
                        htmlFor="push-notifications"
                        className="cursor-pointer"
                      >
                        اعلان‌های Push
                      </Label>
                    </div>
                    <div className="flex items-center space-x-2 space-x-reverse">
                      <input
                        type="checkbox"
                        id="sms-notifications"
                        className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
                      />
                      <Label
                        htmlFor="sms-notifications"
                        className="cursor-pointer"
                      >
                        اعلان‌های پیامکی
                      </Label>
                    </div>
                  </div>
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
                  <code>htmlFor</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">ID فیلد فرم که به آن مرتبط است</td>
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
                <td className="p-4">متن برچسب</td>
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
              استفاده از htmlFor
            </h3>
            <p>
              همیشه از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                htmlFor
              </code>{" "}
              برای ارتباط برچسب با فیلد فرم استفاده کنید. این کار برای کاربران
              اسکرین ریدر ضروری است
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">متن توصیفی</h3>
            <p>
              متن برچسب باید واضح و توصیفی باشد. از مخفف‌ها خودداری کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              فیلدهای الزامی
            </h3>
            <p>
              فیلدهای الزامی را با علامت{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">*</code>{" "}
              یا کلمه "الزامی" مشخص کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              حالت غیرفعال
            </h3>
            <p>
              برچسب‌ها به صورت خودکار با فیلدهای غیرفعال سازگار می‌شوند و
              استایل مناسب را اعمال می‌کنند
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
            <h3 className="font-semibold mb-3">همیشه از htmlFor استفاده کنید</h3>
            <p className="text-muted-foreground">
              برای دسترسی‌پذیری بهتر، همیشه htmlFor را تنظیم کنید تا برچسب به
              فیلد فرم مرتبط شود
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">متن واضح و مختصر</h3>
            <p className="text-muted-foreground">
              از متن‌های واضح و کوتاه استفاده کنید. کاربر باید بلافاصله بفهمد
              فیلد برای چیست
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">نشان دادن فیلدهای الزامی</h3>
            <p className="text-muted-foreground">
              فیلدهای الزامی را با علامت ستاره (*) یا کلمه "الزامی" مشخص کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">متن کمکی</h3>
            <p className="text-muted-foreground">
              در صورت نیاز، متن کمکی اضافه کنید تا کاربر بفهمد چه اطلاعاتی
              باید وارد کند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گروه‌بندی منطقی</h3>
            <p className="text-muted-foreground">
              فیلدهای مرتبط را کنار هم قرار دهید و از عناوین برای گروه‌بندی
              استفاده کنید
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
            <h3 className="font-medium mb-3">پایه (Basic)</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`import { Label } from "@/components/ui/label";

<Label htmlFor="email">ایمیل</Label>
<input type="email" id="email" />`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با چک‌باکس</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<div className="flex items-center space-x-2">
  <input type="checkbox" id="terms" />
  <Label htmlFor="terms">شرایط و قوانین را می‌پذیرم</Label>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">فیلد الزامی</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Label htmlFor="email">
  ایمیل <span className="text-destructive">*</span>
</Label>
<input type="email" id="email" required />`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">با متن کمکی</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<div className="space-y-2">
  <Label htmlFor="username">نام کاربری</Label>
  <input type="text" id="username" />
  <p className="text-sm text-muted-foreground">
    حداقل 3 کاراکتر
  </p>
</div>`}</code>
              </pre>
            </div>
          </div>

          <div>
            <h3 className="font-medium mb-3">حالت غیرفعال</h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`<Label htmlFor="disabled-input">ورودی غیرفعال</Label>
<input
  type="text"
  id="disabled-input"
  disabled
  className="peer disabled:cursor-not-allowed disabled:opacity-50"
/>`}</code>
              </pre>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
