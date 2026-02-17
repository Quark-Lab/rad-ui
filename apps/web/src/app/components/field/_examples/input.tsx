"use client";

import { Field, FieldLabel, FieldDescription, Input } from "@/registry/web/ui";

export const code = `import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function InputExample() {
  return (
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
  );
}
`;

export default function InputExample() {
  return (
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
  );
}
