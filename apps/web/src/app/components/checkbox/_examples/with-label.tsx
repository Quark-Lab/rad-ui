"use client";

import { Checkbox, Label } from "@/registry/web/ui";

export const code = `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function WithLabelExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="terms1" />
        <Label htmlFor="terms1" className="cursor-pointer">
          قوانین و مقررات را می‌پذیرم
        </Label>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing" className="cursor-pointer">
          از ارسال ایمیل‌های تبلیغاتی مطلع باشم
        </Label>
      </div>
    </div>
  );
}
`;

export default function WithLabelExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="terms1" />
        <Label htmlFor="terms1" className="cursor-pointer">
          قوانین و مقررات را می‌پذیرم
        </Label>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="marketing" />
        <Label htmlFor="marketing" className="cursor-pointer">
          از ارسال ایمیل‌های تبلیغاتی مطلع باشم
        </Label>
      </div>
    </div>
  );
}
