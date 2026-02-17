"use client";

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldSeparator,
  FieldContent,
  Checkbox,
} from "@/registry/web/ui";

export const code = `import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldSeparator,
  FieldContent,
} from "@/components/ui/field";
import { Checkbox } from "@/components/ui/checkbox";

export default function FieldGroupExample() {
  return (
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
  );
}
`;

export default function FieldGroupExample() {
  return (
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
  );
}
