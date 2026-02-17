"use client";

import { Checkbox, Label } from "@/registry/web/ui";

export const code = `import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function BasicExample() {
  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      <Checkbox id="basic" />
      <Label htmlFor="basic" className="cursor-pointer">
        پذیرفتن قوانین و مقررات
      </Label>
    </div>
  );
}
`;

export default function BasicExample() {
  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      <Checkbox id="basic" />
      <Label htmlFor="basic" className="cursor-pointer">
        پذیرفتن قوانین و مقررات
      </Label>
    </div>
  );
}
