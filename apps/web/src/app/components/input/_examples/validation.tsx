"use client";

import { Input, Label } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function ValidationExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="phone-validate">شماره تلفن</Label>
        <Input
          id="phone-validate"
          type="tel"
          validate
          showError
          placeholder="+98 912 345 6789"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number-validate">مبلغ</Label>
        <Input
          id="number-validate"
          type="number"
          validate
          showError
          placeholder="۱۰۰۰۰"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-validate">ایمیل</Label>
        <Input
          id="email-validate"
          type="email"
          validate
          showError
          placeholder="user@example.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="custom-pattern">کد پستی (۱۰ رقم)</Label>
        <Input
          id="custom-pattern"
          validationPattern={/^\\d{10}$/}
          validationMessage="کد پستی باید ۱۰ رقم باشد."
          showError
          placeholder="۱۲۳۴۵۶۷۸۹۰"
        />
      </div>
    </div>
  );
}
`;

export default function ValidationExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="phone-validate">شماره تلفن</Label>
        <Input
          id="phone-validate"
          type="tel"
          validate
          showError
          placeholder="+98 912 345 6789"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="number-validate">مبلغ</Label>
        <Input
          id="number-validate"
          type="number"
          validate
          showError
          placeholder="۱۰۰۰۰"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="email-validate">ایمیل</Label>
        <Input
          id="email-validate"
          type="email"
          validate
          showError
          placeholder="user@example.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="custom-pattern">کد پستی (۱۰ رقم)</Label>
        <Input
          id="custom-pattern"
          validationPattern={/^\d{10}$/}
          validationMessage="کد پستی باید ۱۰ رقم باشد."
          showError
          placeholder="۱۲۳۴۵۶۷۸۹۰"
        />
      </div>
    </div>
  );
}
