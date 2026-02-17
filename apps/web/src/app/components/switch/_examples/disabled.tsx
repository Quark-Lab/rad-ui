"use client";

import { Switch, Label } from "@/registry/web/ui";

export const code = `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function DisabledExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off" className="opacity-50">
          غیرفعال شده
        </Label>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on" className="opacity-50">
          همیشه فعال
        </Label>
      </div>
    </div>
  );
}
`;

export default function DisabledExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Switch id="disabled-off" disabled />
        <Label htmlFor="disabled-off" className="opacity-50">
          غیرفعال شده
        </Label>
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <Switch id="disabled-on" disabled defaultChecked />
        <Label htmlFor="disabled-on" className="opacity-50">
          همیشه فعال
        </Label>
      </div>
    </div>
  );
}
