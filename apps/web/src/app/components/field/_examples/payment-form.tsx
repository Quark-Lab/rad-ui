"use client";

import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldSeparator,
  Input,
  Checkbox,
  Textarea,
  Button,
} from "@/registry/web/ui";

export const code = `import {
  Field,
  FieldLabel,
  FieldDescription,
  FieldSet,
  FieldLegend,
  FieldGroup,
  FieldSeparator,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Checkbox } from "@/components/ui/checkbox";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";

export default function PaymentFormExample() {
  return (
    <div className="max-w-lg">
      <FieldSet>
        <FieldLegend>اطلاعات پرداخت</FieldLegend>
        <FieldDescription>
          تمام تراکنش‌ها امن و رمزنگاری شده هستند.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="pay-name">نام روی کارت</FieldLabel>
            <Input id="pay-name" placeholder="نام کامل" />
          </Field>
          <Field>
            <FieldLabel htmlFor="pay-card">شماره کارت</FieldLabel>
            <Input
              id="pay-card"
              placeholder="شماره کارت ۱۶ رقمی"
              dir="ltr"
            />
            <FieldDescription>
              شماره کارت ۱۶ رقمی خود را وارد کنید.
            </FieldDescription>
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="pay-month">ماه</FieldLabel>
              <Input id="pay-month" placeholder="MM" dir="ltr" />
            </Field>
            <Field>
              <FieldLabel htmlFor="pay-year">سال</FieldLabel>
              <Input id="pay-year" placeholder="YYYY" dir="ltr" />
            </Field>
            <Field>
              <FieldLabel htmlFor="pay-cvv">CVV</FieldLabel>
              <Input id="pay-cvv" placeholder="CVV" dir="ltr" />
            </Field>
          </div>
          <FieldSeparator />
          <Field>
            <FieldLabel htmlFor="pay-address">آدرس صورتحساب</FieldLabel>
            <Input id="pay-address" placeholder="آدرس" />
            <FieldDescription>
              آدرس صورتحساب مرتبط با روش پرداخت شما.
            </FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="pay-same" />
            <FieldLabel htmlFor="pay-same">
              آدرس صورتحساب همان آدرس ارسال است
            </FieldLabel>
          </Field>
          <Field>
            <FieldLabel htmlFor="pay-comments">توضیحات</FieldLabel>
            <Textarea
              id="pay-comments"
              placeholder="توضیحات اختیاری..."
              rows={3}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <div className="flex justify-end gap-3 mt-6">
        <Button variant="outline" type="button">
          لغو
        </Button>
        <Button type="submit">ثبت</Button>
      </div>
    </div>
  );
}
`;

export default function PaymentFormExample() {
  return (
    <div className="max-w-lg">
      <FieldSet>
        <FieldLegend>اطلاعات پرداخت</FieldLegend>
        <FieldDescription>
          تمام تراکنش‌ها امن و رمزنگاری شده هستند.
        </FieldDescription>
        <FieldGroup>
          <Field>
            <FieldLabel htmlFor="pay-name">نام روی کارت</FieldLabel>
            <Input id="pay-name" placeholder="نام کامل" />
          </Field>
          <Field>
            <FieldLabel htmlFor="pay-card">شماره کارت</FieldLabel>
            <Input
              id="pay-card"
              placeholder="شماره کارت ۱۶ رقمی"
              dir="ltr"
            />
            <FieldDescription>
              شماره کارت ۱۶ رقمی خود را وارد کنید.
            </FieldDescription>
          </Field>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Field>
              <FieldLabel htmlFor="pay-month">ماه</FieldLabel>
              <Input id="pay-month" placeholder="MM" dir="ltr" />
            </Field>
            <Field>
              <FieldLabel htmlFor="pay-year">سال</FieldLabel>
              <Input id="pay-year" placeholder="YYYY" dir="ltr" />
            </Field>
            <Field>
              <FieldLabel htmlFor="pay-cvv">CVV</FieldLabel>
              <Input id="pay-cvv" placeholder="CVV" dir="ltr" />
            </Field>
          </div>
          <FieldSeparator />
          <Field>
            <FieldLabel htmlFor="pay-address">آدرس صورتحساب</FieldLabel>
            <Input id="pay-address" placeholder="آدرس" />
            <FieldDescription>
              آدرس صورتحساب مرتبط با روش پرداخت شما.
            </FieldDescription>
          </Field>
          <Field orientation="horizontal">
            <Checkbox id="pay-same" />
            <FieldLabel htmlFor="pay-same">
              آدرس صورتحساب همان آدرس ارسال است
            </FieldLabel>
          </Field>
          <Field>
            <FieldLabel htmlFor="pay-comments">توضیحات</FieldLabel>
            <Textarea
              id="pay-comments"
              placeholder="توضیحات اختیاری..."
              rows={3}
            />
          </Field>
        </FieldGroup>
      </FieldSet>
      <div className="flex justify-end gap-3 mt-6">
        <Button variant="outline" type="button">
          لغو
        </Button>
        <Button type="submit">ثبت</Button>
      </div>
    </div>
  );
}
