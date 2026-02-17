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
import DefaultCheckedExample, { code as defaultCheckedCode } from "./_examples/default-checked";
import DisabledExample, { code as disabledCode } from "./_examples/disabled";
import ControlledExample, { code as controlledCode } from "./_examples/controlled";
import WithDescriptionExample, { code as withDescriptionCode } from "./_examples/with-description";
import FormExample, { code as formCode } from "./_examples/form";
import SettingsExample, { code as settingsCode } from "./_examples/settings";

const switchProps: PropDefinition[] = [
  {
    name: "checked",
    type: "boolean",
    defaultValue: "undefined",
    description: "وضعیت کنترل شده",
  },
  {
    name: "defaultChecked",
    type: "boolean",
    defaultValue: "false",
    description: "وضعیت پیش‌فرض (غیرکنترل شده)",
  },
  {
    name: "onCheckedChange",
    type: "(checked: boolean) => void",
    defaultValue: "undefined",
    description: "تابع فراخوانی هنگام تغییر وضعیت",
  },
  {
    name: "disabled",
    type: "boolean",
    defaultValue: "false",
    description: "غیرفعال کردن سوئیچ",
  },
  {
    name: "required",
    type: "boolean",
    defaultValue: "false",
    description: "اجباری بودن در فرم",
  },
  {
    name: "name",
    type: "string",
    defaultValue: "undefined",
    description: "نام فیلد برای ارسال فرم",
  },
  {
    name: "value",
    type: "string",
    defaultValue: '"on"',
    description: "مقدار ارسالی در فرم",
  },
  {
    name: "className",
    type: "string",
    defaultValue: "undefined",
    description: "کلاس‌های CSS سفارشی",
  },
];

export default function SwitchPage() {
  return (
    <div className="container mx-auto px-4 md:px-8 py-8 md:py-12 max-w-5xl">
      {/* Header */}
      <div className="mb-12">
        <h1 className="text-4xl font-bold mb-4">سوئیچ (Switch)</h1>
        <p className="text-lg text-muted-foreground">
          کنترلی که به کاربر امکان می‌دهد بین حالت فعال و غیرفعال جابه‌جا شود.
        </p>
      </div>

      {/* Installation */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نصب (Installation)</h2>
        <InstallCodeBlock code="npx @quark-lab/rad-ui add switch" language="bash" />
      </section>

      {/* Examples */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">نمونه‌ها (Examples)</h2>

        <ComponentExample
          title="استفاده پایه"
          titleEn="Basic Usage"
          description="استفاده ساده از سوئیچ."
          code={basicCode}
        >
          <BasicExample />
        </ComponentExample>

        <ComponentExample
          title="با برچسب"
          titleEn="With Label"
          description="استفاده از سوئیچ همراه با برچسب."
          code={withLabelCode}
        >
          <WithLabelExample />
        </ComponentExample>

        <ComponentExample
          title="پیش‌فرض فعال"
          titleEn="Default Checked"
          description="تنظیم وضعیت پیش‌فرض سوئیچ به حالت فعال."
          code={defaultCheckedCode}
        >
          <DefaultCheckedExample />
        </ComponentExample>

        <ComponentExample
          title="حالت غیرفعال"
          titleEn="Disabled State"
          description="سوئیچ غیرفعال که کاربر نمی‌تواند آن را تغییر دهد."
          code={disabledCode}
        >
          <DisabledExample />
        </ComponentExample>

        <ComponentExample
          title="کنترل شده"
          titleEn="Controlled"
          description="مدیریت وضعیت سوئیچ از طریق state."
          code={controlledCode}
        >
          <ControlledExample />
        </ComponentExample>

        <ComponentExample
          title="با توضیحات"
          titleEn="With Description"
          description="افزودن توضیحات بیشتر برای سوئیچ."
          code={withDescriptionCode}
        >
          <WithDescriptionExample />
        </ComponentExample>

        <ComponentExample
          title="یکپارچگی با فرم"
          titleEn="Form Integration"
          description="استفاده از سوئیچ در یک فرم استاندارد."
          code={formCode}
        >
          <FormExample />
        </ComponentExample>
      </section>

      {/* Advanced Examples */}
      <ComponentExampleGroup
        title="مثال‌های پیشرفته"
        titleEn="Advanced Examples"
      >
        <SubExample
          title="پنل تنظیمات"
          titleEn="Settings Panel"
          description="گروهی از سوئیچ‌ها برای تنظیمات مختلف."
          code={settingsCode}
        >
          <SettingsExample />
        </SubExample>

        <SubExample
          title="تنظیمات با ذخیره خودکار"
          titleEn="Auto-save Settings"
          description="ذخیره خودکار تنظیمات پس از تغییر."
          code={`const [settings, setSettings] = useState({
  notifications: true,
  darkMode: false,
  analytics: true
});

// Auto-save on change
const updateSetting = (key, value) => {
  setSettings(prev => {
    const newSettings = { ...prev, [key]: value };
    // Save to API or localStorage
    localStorage.setItem('settings', JSON.stringify(newSettings));
    return newSettings;
  });
};

<div className="space-y-4">
  <div className="flex items-center justify-between">
    <Label>Enable Notifications</Label>
    <Switch
      checked={settings.notifications}
      onCheckedChange={(checked) =>
        updateSetting('notifications', checked)
      }
    />
  </div>
  {/* ... other settings */}
</div>`}
        >
          <div className="p-4 border rounded bg-muted/50 text-center text-muted-foreground">
            این یک مثال کد است و پیش‌نمایش ندارد.
          </div>
        </SubExample>
      </ComponentExampleGroup>

      {/* API Reference */}
      <ApiReferenceSection>
        <PropsTable
          title="Switch"
          description="پراپ‌های کامپوننت Switch."
          props={switchProps}
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
                  Space
                </code>{" "}
                - تغییر وضعیت سوئیچ
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">
                  Enter
                </code>{" "}
                - تغییر وضعیت سوئیچ
              </li>
              <li>
                <code className="text-sm bg-muted px-2 py-1 rounded">Tab</code>{" "}
                - حرکت به سوئیچ بعدی
              </li>
            </ul>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              ARIA نقش (ARIA Role)
            </h3>
            <p>
              کامپوننت از نقش{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">switch</code>{" "}
              استفاده می‌کند که برای خوانندگان صفحه مناسب است
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              برچسب‌ها (Labels)
            </h3>
            <p>
              همیشه از کامپوننت Label با ویژگی htmlFor استفاده کنید تا سوئیچ را
              با برچسب مرتبط کنید
            </p>
          </div>
          <div className="p-4 rounded-lg bg-card border border-border">
            <h3 className="font-semibold text-foreground mb-2">
              وضعیت (State)
            </h3>
            <p>
              وضعیت سوئیچ از طریق{" "}
              <code className="text-sm bg-muted px-2 py-1 rounded">
                aria-checked
              </code>{" "}
              به صورت خودکار اعلام می‌شود
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
              از برچسب‌هایی استفاده کنید که عملکرد سوئیچ را به وضوح توضیح
              می‌دهند. از فعل‌های عملی استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تاثیر فوری (Immediate Effect)
            </h3>
            <p className="text-muted-foreground">
              سوئیچ باید تنظیمات را بلافاصله اعمال کند. اگر نیاز به تایید دارید،
              از Checkbox استفاده کنید.
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              توضیحات کمکی (Helper Text)
            </h3>
            <p className="text-muted-foreground">
              برای تنظیمات پیچیده، متن توضیحی اضافه کنید تا کاربر بداند چه
              اتفاقی می‌افتد
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              گروه‌بندی (Grouping)
            </h3>
            <p className="text-muted-foreground">
              سوئیچ‌های مرتبط را در بخش‌های منطقی دسته‌بندی کنید (مثل اعلان‌ها،
              حریم خصوصی)
            </p>
          </div>
          <div>
            <h3 className="font-semibold mb-3">
              تفاوت با Checkbox
            </h3>
            <p className="text-muted-foreground">
              از Switch برای تنظیمات فوری (روشن/خاموش) و از Checkbox برای
              انتخاب‌های چندگانه که نیاز به ارسال دارند استفاده کنید
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
