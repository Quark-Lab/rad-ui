"use client";

import { Input, Label } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WithLabelExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-username">نام کاربری</Label>
      <Input id="input-username" placeholder="یک نام کاربری انتخاب کنید" />
      <p className="text-sm text-muted-foreground">
        این نام کاربری عمومی شما خواهد بود.
      </p>
    </div>
  );
}
`;

export default function WithLabelExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="input-username">نام کاربری</Label>
      <Input id="input-username" placeholder="یک نام کاربری انتخاب کنید" />
      <p className="text-sm text-muted-foreground">
        این نام کاربری عمومی شما خواهد بود.
      </p>
    </div>
  );
}
