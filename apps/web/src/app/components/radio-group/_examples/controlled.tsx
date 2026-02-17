"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function ControlledExample() {
  const [selectedOption, setSelectedOption] = useState("comfortable");

  return (
    <div className="space-y-4">
      <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
        <div className="flex flex-row-reverse items-center gap-2">
          <RadioGroupItem value="default" id="c1" />
          <Label htmlFor="c1">پیش‌فرض</Label>
        </div>
        <div className="flex flex-row-reverse items-center gap-2">
          <RadioGroupItem value="comfortable" id="c2" />
          <Label htmlFor="c2">راحت</Label>
        </div>
        <div className="flex flex-row-reverse items-center gap-2">
          <RadioGroupItem value="compact" id="c3" />
          <Label htmlFor="c3">فشرده</Label>
        </div>
      </RadioGroup>
      <p className="text-sm text-muted-foreground">
        گزینه انتخاب شده: {selectedOption}
      </p>
    </div>
  );
}
`;

export default function ControlledExample() {
  const [selectedOption, setSelectedOption] = useState("comfortable");

  return (
    <div className="space-y-4">
      <RadioGroup value={selectedOption} onValueChange={setSelectedOption}>
        <div className="flex flex-row-reverse items-center gap-2">
          <RadioGroupItem value="default" id="c1" />
          <Label htmlFor="c1">پیش‌فرض</Label>
        </div>
        <div className="flex flex-row-reverse items-center gap-2">
          <RadioGroupItem value="comfortable" id="c2" />
          <Label htmlFor="c2">راحت</Label>
        </div>
        <div className="flex flex-row-reverse items-center gap-2">
          <RadioGroupItem value="compact" id="c3" />
          <Label htmlFor="c3">فشرده</Label>
        </div>
      </RadioGroup>
      <p className="text-sm text-muted-foreground">
        گزینه انتخاب شده: {selectedOption}
      </p>
    </div>
  );
}
