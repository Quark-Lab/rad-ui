"use client";

import { Field, FieldLabel, FieldDescription, Input } from "@/registry/web/ui";

export const code = `import {
  Field,
  FieldLabel,
  FieldDescription,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function BasicExample() {
  return (
    <div className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="basic-name">نام کامل</FieldLabel>
        <Input id="basic-name" placeholder="نام خود را وارد کنید" />
        <FieldDescription>
          این نام در پروفایل شما نمایش داده می‌شود.
        </FieldDescription>
      </Field>
    </div>
  );
}
`;

export default function BasicExample() {
  return (
    <div className="max-w-sm">
      <Field>
        <FieldLabel htmlFor="basic-name">نام کامل</FieldLabel>
        <Input id="basic-name" placeholder="نام خود را وارد کنید" />
        <FieldDescription>
          این نام در پروفایل شما نمایش داده می‌شود.
        </FieldDescription>
      </Field>
    </div>
  );
}
