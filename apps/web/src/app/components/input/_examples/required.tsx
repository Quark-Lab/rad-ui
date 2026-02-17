"use client";

import { Input, Label } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function RequiredExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="required-input">
        ورودی اجباری <span className="text-destructive">*</span>
      </Label>
      <Input
        id="required-input"
        required
        placeholder="این ورودی باید پر شود."
      />
    </div>
  );
}
`;

export default function RequiredExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="required-input">
        ورودی اجباری <span className="text-destructive">*</span>
      </Label>
      <Input
        id="required-input"
        required
        placeholder="این ورودی باید پر شود."
      />
    </div>
  );
}
