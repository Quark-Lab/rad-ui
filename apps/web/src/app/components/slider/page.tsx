"use client";

import { useState } from "react";
import { Slider, Label } from "@/registry/web/ui";
import { Volume2, DollarSign } from "lucide-react";

export default function SliderDemo() {
  const [volume, setVolume] = useState([50]);
  const [priceRange, setPriceRange] = useState([20, 80]);
  const [brightness, setBrightness] = useState([75]);

  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">اسلایدر (Slider)</h1>
        <p className="text-lg text-muted-foreground">
          ورودی که به کاربر امکان می‌دهد مقداری را در بازه مشخص انتخاب کند
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`npx @quark-lab/rad-ui add slider`}</code>
          </pre>
        </div>
      </section>

      {/* Basic Usage */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          استفاده پایه (Basic Usage)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <Slider defaultValue={[33]} max={100} step={1} />
        </div>
      </section>

      {/* With Label */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">با برچسب (With Label)</h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-4">
            <Label>صدا</Label>
            <Slider defaultValue={[50]} max={100} step={1} />
          </div>
        </div>
      </section>

      {/* With Value Display */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          با نمایش مقدار (With Value Display)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label htmlFor="volume">صدا</Label>
              <span className="text-sm text-muted-foreground">{volume}%</span>
            </div>
            <div className="flex items-center gap-4">
              <Volume2 className="h-4 w-4 text-muted-foreground" />
              <Slider
                id="volume"
                value={volume}
                onValueChange={setVolume}
                max={100}
                step={1}
                className="flex-1"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Range Slider */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          اسلایدر بازه‌ای (Range Slider)
        </h2>
        <div className="p-8 rounded-lg bg-card border border-border">
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <Label>محدوده قیمت</Label>
              <span className="text-sm text-muted-foreground" dir="ltr">
                ${priceRange[0]} - ${priceRange[1]}
              </span>
            </div>
            <div className="flex items-center gap-4">
              <DollarSign className="h-4 w-4 text-muted-foreground" />
              <Slider
                value={priceRange}
                onValueChange={setPriceRange}
                max={100}
                step={1}
                minStepsBetweenThumbs={1}
                className="flex-1"
              />
            </div>
            <p className="text-xs text-muted-foreground">
              تعداد دسته‌ها به صورت خودکار بر اساس طول آرایه مقدار تعیین می‌شود. برای اسلایدر بازه‌ای، آرایه با دو مقدار استفاده کنید
            </p>
          </div>
        </div>
      </section>

      {/* Different Steps */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          گام‌های مختلف (Different Steps)
        </h2>
        <div className="space-y-8">
          {/* Step 1 */}
          <div>
            <h3 className="text-lg font-medium mb-4">گام 1 (Step: 1)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-2">
                <Label>دقیق (0-100)</Label>
                <Slider defaultValue={[50]} max={100} step={1} />
              </div>
            </div>
          </div>

          {/* Step 5 */}
          <div>
            <h3 className="text-lg font-medium mb-4">گام 5 (Step: 5)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-2">
                <Label>متوسط (0-100)</Label>
                <Slider defaultValue={[50]} max={100} step={5} />
              </div>
            </div>
          </div>

          {/* Step 10 */}
          <div>
            <h3 className="text-lg font-medium mb-4">گام 10 (Step: 10)</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-2">
                <Label>درشت (0-100)</Label>
                <Slider defaultValue={[50]} max={100} step={10} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Min/Max Values */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مقادیر کمینه/بیشینه (Min/Max Values)
        </h2>
        <div className="space-y-8">
          {/* 0-50 */}
          <div>
            <h3 className="text-lg font-medium mb-4">بازه 0-50</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>0</span>
                  <span>50</span>
                </div>
                <Slider defaultValue={[25]} min={0} max={50} step={1} />
              </div>
            </div>
          </div>

          {/* 10-200 */}
          <div>
            <h3 className="text-lg font-medium mb-4">بازه 10-200</h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-2">
                <div className="flex justify-between text-sm text-muted-foreground">
                  <span>10</span>
                  <span>200</span>
                </div>
                <Slider defaultValue={[100]} min={10} max={200} step={5} />
              </div>
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
            <Label className="opacity-50">غیرفعال</Label>
            <Slider defaultValue={[60]} max={100} disabled />
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          موارد استفاده (Use Cases)
        </h2>
        <div className="space-y-8">
          {/* Volume Control */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              کنترل صدا (Volume Control)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>سطح صدا</Label>
                  <span className="text-sm text-muted-foreground">
                    {brightness}%
                  </span>
                </div>
                <Slider
                  value={brightness}
                  onValueChange={setBrightness}
                  max={100}
                  step={1}
                />
                <p className="text-xs text-muted-foreground">
                  برای تنظیم سطح صدا از اسلایدر استفاده کنید
                </p>
              </div>
            </div>
          </div>

          {/* Price Filter */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              فیلتر قیمت (Price Filter)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>محدوده قیمت</Label>
                  <span className="text-sm text-muted-foreground" dir="ltr">
                    ${priceRange[0]} - ${priceRange[1]}
                  </span>
                </div>
                <Slider
                  value={priceRange}
                  onValueChange={setPriceRange}
                  max={100}
                  step={1}
                  minStepsBetweenThumbs={5}
                />
                <p className="text-xs text-muted-foreground">
                  محدوده قیمت محصولات را مشخص کنید
                </p>
              </div>
            </div>
          </div>

          {/* Age Range */}
          <div>
            <h3 className="text-lg font-medium mb-4">
              محدوده سنی (Age Range)
            </h3>
            <div className="p-8 rounded-lg bg-card border border-border">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <Label>سن</Label>
                  <span className="text-sm text-muted-foreground">
                    18-65 سال
                  </span>
                </div>
                <Slider
                  defaultValue={[18, 65]}
                  min={0}
                  max={100}
                  step={1}
                  minStepsBetweenThumbs={1}
                />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <span>0 سال</span>
                  <span>100 سال</span>
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
                  <code>value</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number[]</code>
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
                  <code>number[]</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>[0]</code>
                </td>
                <td className="p-4">مقدار پیش‌فرض (غیرکنترل شده)</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>onValueChange</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>(value: number[]) =&gt; void</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">تابع فراخوانی هنگام تغییر مقدار</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>onValueCommit</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>(value: number[]) =&gt; void</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>undefined</code>
                </td>
                <td className="p-4">
                  تابع فراخوانی هنگام اتمام تغییر (رها کردن)
                </td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>min</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>0</code>
                </td>
                <td className="p-4">حداقل مقدار</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>max</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>100</code>
                </td>
                <td className="p-4">حداکثر مقدار</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>step</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>1</code>
                </td>
                <td className="p-4">اندازه هر گام</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>minStepsBetweenThumbs</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>number</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>0</code>
                </td>
                <td className="p-4">حداقل فاصله بین دسته‌ها</td>
              </tr>
              <tr className="border-b border-border">
                <td className="p-4" dir="ltr">
                  <code>orientation</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"horizontal" | "vertical"</code>
                </td>
                <td className="p-4" dir="ltr">
                  <code>"horizontal"</code>
                </td>
                <td className="p-4">جهت اسلایدر</td>
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
                <td className="p-4">غیرفعال کردن اسلایدر</td>
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
                  Arrow Keys
                </code>{" "}
                - افزایش/کاهش به اندازه step
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Shift + Arrow
                </code>{" "}
                - تغییرات بزرگتر
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Page Up/Down
                </code>{" "}
                - پرش‌های بزرگ
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Home</code>{" "}
                - رفتن به حداقل
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">End</code>{" "}
                - رفتن به حداکثر
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ARIA برچسب‌ها (ARIA Labels)
            </h3>
            <p>
              از{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-label
              </code>{" "}
              برای توضیح هدف اسلایدر استفاده کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ورودی‌های مخفی (Hidden Inputs)
            </h3>
            <p>
              اسلایدر به صورت خودکار ورودی‌های مخفی برای ارسال فرم ایجاد می‌کند
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
              نمایش مقدار (Show Value)
            </h3>
            <p className="text-muted-foreground">
              همیشه مقدار فعلی را نمایش دهید تا کاربر بداند چه عددی را انتخاب
              کرده است
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">گام مناسب (Appropriate Step)</h3>
            <p className="text-muted-foreground">
              اندازه گام را بر اساس دقت مورد نیاز تنظیم کنید. برای تنظیمات دقیق
              از step کوچک استفاده کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              برچسب‌گذاری (Labeling)
            </h3>
            <p className="text-muted-foreground">
              برای اسلایدر برچسب واضح و مقادیر min/max قرار دهید تا کاربر بازه را
              بداند
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              استفاده از بازه (Using Range)
            </h3>
            <p className="text-muted-foreground">
              برای فیلترها (مثل قیمت، سن) از اسلایدر بازه‌ای با دو دسته استفاده
              کنید
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              بازخورد بصری (Visual Feedback)
            </h3>
            <p className="text-muted-foreground">
              تغییرات را به صورت آنی نشان دهید تا کاربر نتیجه را ببیند
            </p>
          </div>
        </div>
      </section>

      {/* Code Example */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage)</h2>
        <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
          <pre className="text-sm">
            <code>{`import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { useState } from "react";

export default function Settings() {
  const [volume, setVolume] = useState([50]);
  const [price, setPrice] = useState([20, 80]);

  return (
    <div>
      {/* Basic */}
      <Slider defaultValue={[33]} max={100} step={1} />

      {/* With Label */}
      <div className="space-y-2">
        <Label>Volume</Label>
        <Slider defaultValue={[50]} max={100} />
      </div>

      {/* Controlled with Display */}
      <div className="space-y-2">
        <div className="flex justify-between">
          <Label>Volume</Label>
          <span>{volume}%</span>
        </div>
        <Slider
          value={volume}
          onValueChange={setVolume}
          max={100}
        />
      </div>

      {/* Range Slider */}
      <Slider
        defaultValue={[20, 80]}
        max={100}
        minStepsBetweenThumbs={5}
      />

      {/* Custom Range */}
      <Slider
        defaultValue={[50]}
        min={10}
        max={200}
        step={5}
      />

      {/* Disabled */}
      <Slider defaultValue={[60]} disabled />
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
              فیلتر محصولات (Product Filter)
            </h3>
            <div className="bg-muted p-6 rounded-lg overflow-x-auto" dir="ltr">
              <pre className="text-sm">
                <code>{`const [filters, setFilters] = useState({
  price: [0, 1000],
  rating: [3]
});

const updatePriceRange = (value) => {
  setFilters(prev => ({ ...prev, price: value }));
  // Fetch filtered products
  fetchProducts({ minPrice: value[0], maxPrice: value[1] });
};

<div className="space-y-6">
  {/* Price Range */}
  <div className="space-y-2">
    <div className="flex justify-between">
      <Label>Price Range</Label>
      <span>\${filters.price[0]} - \${filters.price[1]}</span>
    </div>
    <Slider
      value={filters.price}
      onValueChange={updatePriceRange}
      max={1000}
      step={10}
      minStepsBetweenThumbs={10}
    />
  </div>

  {/* Minimum Rating */}
  <div className="space-y-2">
    <div className="flex justify-between">
      <Label>Minimum Rating</Label>
      <span>{filters.rating} stars</span>
    </div>
    <Slider
      value={filters.rating}
      onValueChange={(v) =>
        setFilters(prev => ({ ...prev, rating: v }))
      }
      min={1}
      max={5}
      step={1}
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
