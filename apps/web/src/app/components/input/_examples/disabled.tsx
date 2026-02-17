"use client";

import { Input, Label } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function DisabledExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="disabled">ایمیل</Label>
      <Input
        disabled
        type="email"
        placeholder="ایمیل"
        value="این فیلد در حال حاضر غیرفعال است"
      />
    </div>
  );
}
`;

export default function DisabledExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="disabled">ایمیل</Label>
      <Input
        disabled
        type="email"
        placeholder="ایمیل"
        value="این فیلد در حال حاضر غیرفعال است"
      />
    </div>
  );
}
