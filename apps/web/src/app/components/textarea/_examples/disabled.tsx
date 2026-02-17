"use client";

import { Textarea, Label } from "@/registry/web/ui";

export const code = `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function DisabledExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="disabled">توضیحات</Label>
      <Textarea
        id="disabled"
        disabled
        placeholder="این فیلد غیرفعال است..."
        value="این متن قابل ویرایش نیست"
      />
    </div>
  );
}
`;

export default function DisabledExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="disabled">توضیحات</Label>
      <Textarea
        id="disabled"
        disabled
        placeholder="این فیلد غیرفعال است..."
        value="این متن قابل ویرایش نیست"
      />
    </div>
  );
}
