"use client";

import { Switch, Label } from "@/registry/web/ui";

export const code = `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function DefaultCheckedExample() {
  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      <Switch id="notifications" defaultChecked />
      <Label htmlFor="notifications">اعلان‌ها</Label>
    </div>
  );
}
`;

export default function DefaultCheckedExample() {
  return (
    <div className="flex items-center space-x-2 space-x-reverse">
      <Switch id="notifications" defaultChecked />
      <Label htmlFor="notifications">اعلان‌ها</Label>
    </div>
  );
}
