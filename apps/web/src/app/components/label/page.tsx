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
import ControlsExample, { code as controlsCode } from "./_examples/controls";
import RequiredExample, { code as requiredCode } from "./_examples/required";
import HelperTextExample, { code as helperTextCode } from "./_examples/helper-text";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import LoginFormExample, { code as loginFormCode } from "./_examples/login-form";
import RegistrationFormExample, { code as registrationFormCode } from "./_examples/registration-form";
import SettingsFormExample, { code as settingsFormCode } from "./_examples/settings-form";

const labelProps: PropDefinition[] = [
  {
    name: "htmlFor",
    type: "string",
    defaultValue: "-",
    description: "ID فیلد فرم که به آن مرتبط است",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "-",
    description: "کلاس‌های CSS سفارشی",
  },
  {
    name: "children",
    type: "ReactNode",
    defaultValue: "-",
    description: "متن برچسب",
  },
];

export default function LabelPage() {
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
        <InstallCodeBlock code="npx @quark-lab/rad-ui add label" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="Label برای برچسب‌گذاری فیلدهای فرم استفاده می‌شود."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="انواع کنترل‌ها"
          titleEn="Form Controls"
          description="Label با انواع مختلف فیلدهای فرم کار می‌کند."
          code={controlsCode}
        >
          <ControlsExample />
        </ComponentExample>

        <ComponentExample
          title="فیلدهای الزامی"
          titleEn="Required Fields"
          description="نشان دادن فیلدهای الزامی با علامت ستاره."
          code={requiredCode}
        >
          <RequiredExample />
        </ComponentExample>

        <ComponentExample
          title="با متن کمکی"
          titleEn="With Helper Text"
          description="اضافه کردن توضیحات اضافی برای فیلدها."
          code={helperTextCode}
        >
          <HelperTextExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled State"
          description="Label به صورت خودکار با فیلدهای غیرفعال سازگار می‌شود."
          code={disabledCode}
        >
          <DisabledExample />
        </ComponentExample>
      </section>

      {/* Practical Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">
          مثال‌های کاربردی (Practical Examples)
        </h2>
        
        <ComponentExample
          title="فرم ورود"
          titleEn="Login Form"
          description="یک فرم ورود ساده با استفاده از Label."
          code={loginFormCode}
        >
          <LoginFormExample />
        </ComponentExample>

        <ComponentExample
          title="فرم ثبت‌نام"
          titleEn="Registration Form"
          description="یک فرم ثبت‌نام با فیلدهای الزامی و اعتبارسنجی."
          code={registrationFormCode}
        >
          <RegistrationFormExample />
        </ComponentExample>

        <ComponentExample
          title="فرم تنظیمات"
          titleEn="Settings Form"
          description="فرم تنظیمات با استفاده از چک‌باکس‌ها و برچسب‌ها."
          code={settingsFormCode}
        >
          <SettingsFormExample />
        </ComponentExample>
      </section>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Label"
          description="پراپ‌های کامپوننت Label."
          props={labelProps}
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

      {/* Usage Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نحوه استفاده (Usage Examples)</h2>
        <InlineCodeBlock code={`import { Label } from "@/components/ui/label";

<Label htmlFor="email">ایمیل</Label>
<input type="email" id="email" />`} />
      </section>
    </div>
  );
}
