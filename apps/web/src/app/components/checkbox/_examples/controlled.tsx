"use client";

import { useState } from "react";
import { Checkbox, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function ControlledExample() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox
          id="controlled"
          checked={checked}
          onCheckedChange={(c) => setChecked(c as boolean)}
        />
        <Label htmlFor="controlled" className="cursor-pointer">
          این چک‌باکس کنترل‌شده است
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        وضعیت: {checked ? "انتخاب شده" : "انتخاب نشده"}
      </p>
    </div>
  );
}
`;

export default function ControlledExample() {
  const [checked, setChecked] = useState<boolean>(false);

  return (
    <div className="space-y-4">
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox
          id="controlled"
          checked={checked}
          onCheckedChange={(c) => setChecked(c as boolean)}
        />
        <Label htmlFor="controlled" className="cursor-pointer">
          این چک‌باکس کنترل‌شده است
        </Label>
      </div>
      <p className="text-sm text-muted-foreground">
        وضعیت: {checked ? "انتخاب شده" : "انتخاب نشده"}
      </p>
    </div>
  );
}
