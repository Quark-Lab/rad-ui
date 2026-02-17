"use client";

import { Input, Label } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function MaxLengthExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="max-length">توضیحات کوتاه</Label>
      <Input
        id="max-length"
        maxInputLength={50}
        placeholder="حداکثر ۵۰ کاراکتر..."
      />
    </div>
  );
}
`;

export default function MaxLengthExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="max-length">توضیحات کوتاه</Label>
      <Input
        id="max-length"
        maxInputLength={50}
        placeholder="حداکثر ۵۰ کاراکتر..."
      />
    </div>
  );
}
