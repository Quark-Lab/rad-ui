"use client";

import { Input, Label, Badge } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";

export default function WithBadgeExample() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor="badge-input">آدرس وب‌هوک</Label>
        <Badge variant="secondary" className="text-[10px] h-5 px-1.5">
          آزمایشی
        </Badge>
      </div>
      <Input id="badge-input" placeholder="https://example.com/webhook" />
    </div>
  );
}
`;

export default function WithBadgeExample() {
  return (
    <div className="space-y-2">
      <div className="flex items-center gap-2">
        <Label htmlFor="badge-input">آدرس وب‌هوک</Label>
        <Badge variant="secondary" className="text-[10px] h-5 px-1.5">
          آزمایشی
        </Badge>
      </div>
      <Input id="badge-input" placeholder="https://example.com/webhook" />
    </div>
  );
}
