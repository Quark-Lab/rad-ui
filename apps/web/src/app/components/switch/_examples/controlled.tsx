"use client";

import { useState } from "react";
import { Switch, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function ControlledExample() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Switch
          id="controlled"
          checked={isEnabled}
          onCheckedChange={setIsEnabled}
        />
        <Label htmlFor="controlled">فعال کردن ویژگی</Label>
      </div>
      <p className="text-sm text-muted-foreground">
        وضعیت فعلی: {isEnabled ? "فعال" : "غیرفعال"}
      </p>
    </div>
  );
}
`;

export default function ControlledExample() {
  const [isEnabled, setIsEnabled] = useState(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Switch
          id="controlled"
          checked={isEnabled}
          onCheckedChange={setIsEnabled}
        />
        <Label htmlFor="controlled">فعال کردن ویژگی</Label>
      </div>
      <p className="text-sm text-muted-foreground">
        وضعیت فعلی: {isEnabled ? "فعال" : "غیرفعال"}
      </p>
    </div>
  );
}
