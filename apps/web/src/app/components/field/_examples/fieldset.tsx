"use client";

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
  FieldGroup,
  Input,
} from "@/registry/web/ui";

export const code = `import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
  FieldGroup,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";

export default function FieldSetExample() {
  return (
    <div className="max-w-md">
      <FieldSet>
        <FieldLegend>اطلاعات آدرس</FieldLegend>
        <FieldDescription>
          آدرس شما برای ارسال سفارش مورد نیاز است.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fs-street">آدرس خیابان</FieldLabel>
            <Input id="fs-street" placeholder="خیابان و کوچه" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fs-city">شهر</FieldLabel>
            <Input id="fs-city" placeholder="شهر" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fs-postal">کد پستی</FieldLabel>
            <Input id="fs-postal" placeholder="کد پستی ۱۰ رقمی" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
`;

export default function FieldSetExample() {
  return (
    <div className="max-w-md">
      <FieldSet>
        <FieldLegend>اطلاعات آدرس</FieldLegend>
        <FieldDescription>
          آدرس شما برای ارسال سفارش مورد نیاز است.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="fs-street">آدرس خیابان</FieldLabel>
            <Input id="fs-street" placeholder="خیابان و کوچه" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fs-city">شهر</FieldLabel>
            <Input id="fs-city" placeholder="شهر" />
          </Field>
          <Field>
            <FieldLabel htmlFor="fs-postal">کد پستی</FieldLabel>
            <Input id="fs-postal" placeholder="کد پستی ۱۰ رقمی" />
          </Field>
        </FieldGroup>
      </FieldSet>
    </div>
  );
}
