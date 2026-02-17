"use client";

import { Field, FieldLabel, FieldError, Input } from "@/registry/web/ui";

export const code = `import {
  Field,
  FieldLabel,
  FieldError,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function ValidationExample() {
  return (
    <div className="max-w-sm space-y-6">
      <Field data-invalid="true">
        <FieldLabel htmlFor="err-email">ایمیل</FieldLabel>
        <Input
          id="err-email"
          type="email"
          aria-invalid
          defaultValue="invalid-email"
          className="border-destructive focus-visible:ring-destructive"
        />
        <FieldError>یک آدرس ایمیل معتبر وارد کنید.</FieldError>
      </Field>
      <Field data-invalid="true">
        <FieldLabel htmlFor="err-username">نام کاربری</FieldLabel>
        <Input
          id="err-username"
          aria-invalid
          defaultValue="admin"
          className="border-destructive focus-visible:ring-destructive"
        />
        <FieldError>
          این نام کاربری قبلاً استفاده شده است. نام دیگری انتخاب کنید.
        </FieldError>
      </Field>
    </div>
  );
}
`;

export default function ValidationExample() {
  return (
    <div className="max-w-sm space-y-6">
      <Field data-invalid="true">
        <FieldLabel htmlFor="err-email">ایمیل</FieldLabel>
        <Input
          id="err-email"
          type="email"
          aria-invalid
          defaultValue="invalid-email"
          className="border-destructive focus-visible:ring-destructive"
        />
        <FieldError>یک آدرس ایمیل معتبر وارد کنید.</FieldError>
      </Field>
      <Field data-invalid="true">
        <FieldLabel htmlFor="err-username">نام کاربری</FieldLabel>
        <Input
          id="err-username"
          aria-invalid
          defaultValue="admin"
          className="border-destructive focus-visible:ring-destructive"
        />
        <FieldError>
          این نام کاربری قبلاً استفاده شده است. نام دیگری انتخاب کنید.
        </FieldError>
      </Field>
    </div>
  );
}
