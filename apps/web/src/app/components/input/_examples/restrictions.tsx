"use client";

import { Input, Label } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RestrictionsExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="digits-only">فقط اعداد</Label>
        <Input
          id="digits-only"
          allowedCharacters="digits"
          placeholder="فقط اعداد را تایپ کنید..."
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="alpha-only">فقط حروف</Label>
        <Input
          id="alpha-only"
          allowedCharacters="alpha"
          placeholder="فقط حروف فارسی و انگلیسی..."
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="persian-only">فقط فارسی</Label>
        <Input
          id="persian-only"
          allowedCharacters="persian"
          placeholder="فقط حروف فارسی و نشانه‌گذاری..."
        />
      </div>
    </div>
  );
}
`;

export default function RestrictionsExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="digits-only">فقط اعداد</Label>
        <Input
          id="digits-only"
          allowedCharacters="digits"
          placeholder="فقط اعداد را تایپ کنید..."
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="alpha-only">فقط حروف</Label>
        <Input
          id="alpha-only"
          allowedCharacters="alpha"
          placeholder="فقط حروف فارسی و انگلیسی..."
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="persian-only">فقط فارسی</Label>
        <Input
          id="persian-only"
          allowedCharacters="persian"
          placeholder="فقط حروف فارسی و نشانه‌گذاری..."
        />
      </div>
    </div>
  );
}
