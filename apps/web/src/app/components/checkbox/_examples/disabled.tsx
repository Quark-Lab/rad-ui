"use client";

import { Checkbox, Label } from "@/registry/web/ui";

export const code = `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function DisabledExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="disabled1" disabled />
        <Label htmlFor="disabled1" className="cursor-not-allowed opacity-50">
          چک‌باکس غیرفعال (انتخاب نشده)
        </Label>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="disabled2" disabled checked />
        <Label htmlFor="disabled2" className="cursor-not-allowed opacity-50">
          چک‌باکس غیرفعال (انتخاب شده)
        </Label>
      </div>
    </div>
  );
}
`;

export default function DisabledExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="disabled1" disabled />
        <Label htmlFor="disabled1" className="cursor-not-allowed opacity-50">
          چک‌باکس غیرفعال (انتخاب نشده)
        </Label>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="disabled2" disabled checked />
        <Label htmlFor="disabled2" className="cursor-not-allowed opacity-50">
          چک‌باکس غیرفعال (انتخاب شده)
        </Label>
      </div>
    </div>
  );
}
