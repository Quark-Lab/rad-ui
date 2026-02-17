"use client";

import { RadioGroup, RadioGroupItem, Label } from "@/registry/web/ui";

export const code = `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function DisabledExample() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-one" id="d1" />
        <Label htmlFor="d1">گزینه فعال</Label>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-two" id="d2" disabled />
        <Label htmlFor="d2" className="opacity-50">
          گزینه غیرفعال
        </Label>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-three" id="d3" />
        <Label htmlFor="d3">گزینه دیگر</Label>
      </div>
    </RadioGroup>
  );
}
`;

export default function DisabledExample() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-one" id="d1" />
        <Label htmlFor="d1">گزینه فعال</Label>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-two" id="d2" disabled />
        <Label htmlFor="d2" className="opacity-50">
          گزینه غیرفعال
        </Label>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-three" id="d3" />
        <Label htmlFor="d3">گزینه دیگر</Label>
      </div>
    </RadioGroup>
  );
}
