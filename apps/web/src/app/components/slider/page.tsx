"use client";

import {
  InstallCodeBlock,
  InlineCodeBlock,
} from "@/components/docs/code-block";
import {
  ComponentExample,
  ComponentExampleGroup,
  SubExample,
} from "@/components/docs/component-example";
import {
  ApiReferenceSection,
  PropsTable,
  type PropDefinition,
} from "@/components/docs/props-table";
import BasicExample, { code as basicCode } from "./_examples/basic";
import WithLabelExample, { code as withLabelCode } from "./_examples/with-label";
import WithValueExample, { code as withValueCode } from "./_examples/with-value";
import RangeExample, { code as rangeCode } from "./_examples/range";
import StepsExample, { code as stepsCode } from "./_examples/steps";
import MinMaxExample, { code as minMaxCode } from "./_examples/min-max";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import UseCasesExample, { code as useCasesCode } from "./_examples/use-cases";

const sliderProps: PropDefinition[] = [
  {
    name: "value",
    type: "number[]",
    defaultValue: "undefined",
    description: "مقدار کنترل شده",
  },
  {
    name: "defaultValue",
    type: "number[]",
    defaultValue: "[0]",
    description: "مقدار پیش‌فرض (غیرکنترل شده)",
  },
  {
    name: "onValueChange",
    type: "(value: number[]) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر مقدار",
  },
  {
    name: "onValueCommit",
    type: "(value: number[]) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام اتمام تغییر (رها کردن)",
  },
  {
    name: "min",
    type: "number",
    defaultValue: "0",
    description: "حداقل مقدار",
  },
  {
    name: "max",
    type: "number",
    defaultValue: "100",
    description: "حداکثر مقدار",
  },
  {
    name: "step",
    type: "number",
    defaultValue: "1",
    description: "اندازه هر گام",
  },
  {
    name: "minStepsBetweenThumbs",
    type: "number",
    defaultValue: "0",
    description: "حداقل فاصله بین دسته‌ها",
  },
  {
    name: "orientation",
    type: '"horizontal" | "vertical"',
    defaultValue: '"horizontal"',
    description: "جهت اسلایدر",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن اسلایدر",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function SliderPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">اسلایدر (Slider)</h1>
        <p className="text-lg text-muted-foreground">
          ورودی که به کاربر امکان می‌دهد مقداری را در بازه مشخص انتخاب کند.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add slider" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده از اسلایدر."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="با برچسب"
          titleEn="With Label"
          description="استفاده از اسلایدر همراه با برچسب."
          code={withLabelCode}
        >
          <WithLabelExample />
        </ComponentExample>

        <ComponentExample
          title="با نمایش مقدار"
          titleEn="With Value Display"
          description="نمایش مقدار فعلی اسلایدر."
          code={withValueCode}
        >
          <WithValueExample />
        </ComponentExample>

        <ComponentExample
          title="اسلایدر بازه‌ای"
          titleEn="Range Slider"
          description="انتخاب بازه مقدار با استفاده از دو دسته."
          code={rangeCode}
        >
          <RangeExample />
        </ComponentExample>

        <ComponentExample
          title="گام‌های مختلف"
          titleEn="Different Steps"
          description="تنظیم دقت انتخاب با استفاده از گام‌های مختلف."
          code={stepsCode}
        >
          <StepsExample />
        </ComponentExample>

        <ComponentExample
          title="مقادیر کمینه/بیشینه"
          titleEn="Min/Max Values"
          description="تنظیم محدوده تغییرات اسلایدر."
          code={minMaxCode}
        >
          <MinMaxExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled State"
          description="اسلایدر غیرفعال که کاربر نمی‌تواند آن را تغییر دهد."
          code={disabledCode}
        >
          <DisabledExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="موارد استفاده"
          titleEn="Use Cases"
          description="مثال‌های کاربردی مانند کنترل صدا، فیلتر قیمت و محدوده سنی."
          code={useCasesCode}
        >
          <UseCasesExample />
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Slider"
          description="پراپ‌های کامپوننت Slider."
          props={sliderProps}
        />
      </ApiReferenceSection>

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
    </div>
  );
}
