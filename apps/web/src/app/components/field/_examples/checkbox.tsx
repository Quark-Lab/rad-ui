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

export default function CheckboxExample() {
  return (
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
                پوشه‌های دسکتاپ و اسناد شما با iCloud Drive همگام‌سازی می‌شوند.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
`;

export default function CheckboxExample() {
  return (
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
                پوشه‌های دسکتاپ و اسناد شما با iCloud Drive همگام‌سازی می‌شوند.
              </FieldDescription>
            </FieldContent>
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
