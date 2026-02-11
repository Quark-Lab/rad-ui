"use client";

import {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
  Label,
} from "@rad-ui/ui";

export default function NativeSelectDemo() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">
          انتخابگر بومی (Native Select)
        </h1>
        <p className="text-lg text-muted-foreground">
          المان انتخابگر بومی HTML با استایل‌دهی سیستم طراحی Rad UI و پشتیبانی
          از RTL.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npm install @quarklab/rad-ui`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <NativeSelect>
            <NativeSelectOption value="">انتخاب کنید...</NativeSelectOption>
            <NativeSelectOption value="option1">گزینه ۱</NativeSelectOption>
            <NativeSelectOption value="option2">گزینه ۲</NativeSelectOption>
            <NativeSelectOption value="option3">گزینه ۳</NativeSelectOption>
          </NativeSelect>
        </div>
      </section>

      {/* With Label */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با برچسب (With Label)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="fruit">میوه مورد علاقه</Label>
            <NativeSelect id="fruit">
              <NativeSelectOption value="">انتخاب میوه</NativeSelectOption>
              <NativeSelectOption value="apple">سیب</NativeSelectOption>
              <NativeSelectOption value="banana">موز</NativeSelectOption>
              <NativeSelectOption value="orange">پرتقال</NativeSelectOption>
            </NativeSelect>
          </div>
        </div>
      </section>

      {/* Groups */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">گروه‌بندی (Groups)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="cars">انتخاب خودرو</Label>
            <NativeSelect id="cars">
              <NativeSelectOption value="">انتخاب کنید...</NativeSelectOption>
              <NativeSelectOptGroup label="آلمانی">
                <NativeSelectOption value="mercedes">
                  مرسدس بنز
                </NativeSelectOption>
                <NativeSelectOption value="bmw">بی‌ام‌و</NativeSelectOption>
                <NativeSelectOption value="audi">آئودی</NativeSelectOption>
              </NativeSelectOptGroup>
              <NativeSelectOptGroup label="ژاپنی">
                <NativeSelectOption value="toyota">تویوتا</NativeSelectOption>
                <NativeSelectOption value="honda">هوندا</NativeSelectOption>
                <NativeSelectOption value="nissan">نیسان</NativeSelectOption>
              </NativeSelectOptGroup>
            </NativeSelect>
          </div>
        </div>
      </section>

      {/* Sizes */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">اندازه‌ها (Sizes)</h2>
        <div className="p-8 rounded-lg bg-card border border-border space-y-8">
          <div className="space-y-2">
            <Label>Small (sm) - پیش‌فرض</Label>
            <NativeSelect size="sm">
              <NativeSelectOption value="sm">گزینه کوچک</NativeSelectOption>
            </NativeSelect>
          </div>
          <div className="space-y-2">
            <Label>Medium (md)</Label>
            <NativeSelect size="md">
              <NativeSelectOption value="md">گزینه متوسط</NativeSelectOption>
            </NativeSelect>
          </div>
          <div className="space-y-2">
            <Label>Large (lg)</Label>
            <NativeSelect size="lg">
              <NativeSelectOption value="lg">گزینه بزرگ</NativeSelectOption>
            </NativeSelect>
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
            <Label htmlFor="disabled">غیرفعال</Label>
            <NativeSelect id="disabled" disabled>
              <NativeSelectOption value="">
                این فیلد غیرفعال است
              </NativeSelectOption>
            </NativeSelect>
          </div>
        </div>
      </section>

      {/* Validation States */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          حالت‌های اعتبارسنجی (Validation States)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-2">
            <Label htmlFor="invalid" className="text-destructive">
              انتخاب نامعتبر
            </Label>
            <NativeSelect
              id="invalid"
              aria-invalid="true"
              className="border-destructive focus-visible:ring-destructive"
            >
              <NativeSelectOption value="">انتخاب کنید...</NativeSelectOption>
              <NativeSelectOption value="1">گزینه ۱</NativeSelectOption>
              <NativeSelectOption value="2">گزینه ۲</NativeSelectOption>
            </NativeSelect>
            <p className="text-sm text-destructive">
              لطفاً یک گزینه معتبر انتخاب کنید.
            </p>
          </div>
        </div>
      </section>

      {/* RTL Support */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">پشتیبانی RTL</h2>
        <div className="space-y-4 text-muted-foreground">
          <p>
            این کامپوننت به طور خودکار از جهت‌گیری راست‌چین پشتیبانی می‌کند.
            آیکون فلش به درستی در سمت چپ (در حالت RTL) یا سمت راست (در حالت LTR)
            قرار می‌گیرد و فاصله‌گذاری‌ها با استفاده از ویژگی‌های منطقی CSS
            (مانند <code className="bg-muted px-1 rounded">pe-8</code> و{" "}
            <code className="bg-muted px-1 rounded">end-3</code>) تنظیم شده‌اند.
          </p>
        </div>
      </section>

      {/* API Reference */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مرجع API (API Reference)
        </h2>

        <h3 className="text-xl font-medium mb-4 mt-8">NativeSelect</h3>
        <div className="overflow-x-auto">
          <table className="w-full border-collapse">
            <thead>
              <tr className="border-b border-border">
                <th className="text-right p-4 font-semibold">پراپ (Prop)</th>
                <th className="text-right p-4 font-semibold">نوع (Type)</th>
                <th className="text-right p-4 font-semibold">توضیحات</th>
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
                <td className="p-4">
                  شامل <code>NativeSelectOption</code> یا{" "}
                  <code>NativeSelectOptGroup</code>
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>className</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>string</code>
                </td>
                <td className="p-4">کلاس‌های CSS سفارشی</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>size</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"sm" | "md" | "lg"</code>
                </td>
                <td className="p-4">
                  اندازه کامپوننت. پیش‌فرض <code>"sm"</code> است.
                </td>
              </tr>
              <tr>
                <td className="p-4" dir="ltr">
                  <code>...props</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>SelectHTMLAttributes</code>
                </td>
                <td className="p-4">
                  تمام ویژگی‌های استاندارد HTML select (مانند disabled,
                  required, onChange)
                </td>
              </tr>
            </tbody>
          </table>
        </div>

        <h3 className="text-xl font-medium mb-4 mt-8">NativeSelectOption</h3>
        <p className="mb-4 text-muted-foreground">
          wrapper ساده برای تگ <code>option</code>.
        </p>

        <h3 className="text-xl font-medium mb-4 mt-8">NativeSelectOptGroup</h3>
        <p className="mb-4 text-muted-foreground">
          wrapper ساده برای تگ <code>optgroup</code>.
        </p>
      </section>
    </div>
  );
}
