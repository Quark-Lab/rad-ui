"use client";

import { Input, Label } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function InvalidExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="invalid" className="text-destructive">
        ورودی نامعتبر
      </Label>
      <Input
        id="invalid"
        aria-invalid="true"
        className="border-destructive focus-visible:ring-destructive"
        placeholder="ایمیل خود را وارد کنید"
        defaultValue="invalid-input"
      />
      <p className="text-sm text-destructive">
        این فیلد حاوی خطای اعتبارسنجی است.
      </p>
    </div>
  );
}
`;

export default function InvalidExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="invalid" className="text-destructive">
        ورودی نامعتبر
      </Label>
      <Input
        id="invalid"
        aria-invalid="true"
        className="border-destructive focus-visible:ring-destructive"
        placeholder="ایمیل خود را وارد کنید"
        defaultValue="invalid-input"
      />
      <p className="text-sm text-destructive">
        این فیلد حاوی خطای اعتبارسنجی است.
      </p>
    </div>
  );
}
