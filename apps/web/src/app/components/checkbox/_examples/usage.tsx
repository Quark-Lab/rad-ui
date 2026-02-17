"use client";

import { useState } from "react";
import { Checkbox, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label"

export default function UsageExample() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Basic */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="basic-usage" />
        <Label htmlFor="basic-usage">پذیرفتن قوانین</Label>
      </div>

      {/* Controlled */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox
          id="controlled-usage"
          checked={checked}
          onCheckedChange={(c) => setChecked(c as boolean)}
        />
        <Label htmlFor="controlled-usage">چک‌باکس کنترل‌شده</Label>
      </div>

      {/* Disabled */}
      <div className="flex gap-4">
        <Checkbox disabled />
        <Checkbox disabled checked />
      </div>

      {/* With description */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="desc-usage" />
        <div className="flex flex-col">
          <Label htmlFor="desc-usage">اعلان‌ها را فعال کن</Label>
          <p className="text-sm text-muted-foreground">
            دریافت اخبار و بروزرسانی‌ها
          </p>
        </div>
      </div>
    </div>
  );
}
`;

export default function UsageExample() {
  const [checked, setChecked] = useState(false);

  return (
    <div className="flex flex-col gap-6">
      {/* Basic */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="basic-usage" />
        <Label htmlFor="basic-usage">پذیرفتن قوانین</Label>
      </div>

      {/* Controlled */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox
          id="controlled-usage"
          checked={checked}
          onCheckedChange={(c) => setChecked(c as boolean)}
        />
        <Label htmlFor="controlled-usage">چک‌باکس کنترل‌شده</Label>
      </div>

      {/* Disabled */}
      <div className="flex gap-4">
        <Checkbox disabled />
        <Checkbox disabled checked />
      </div>

      {/* With description */}
      <div className="flex items-center space-x-2 space-x-reverse">
        <Checkbox id="desc-usage" />
        <div className="flex flex-col">
          <Label htmlFor="desc-usage">اعلان‌ها را فعال کن</Label>
          <p className="text-sm text-muted-foreground">
            دریافت اخبار و بروزرسانی‌ها
          </p>
        </div>
      </div>
    </div>
  );
}
