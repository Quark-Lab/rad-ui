"use client";

import { RadioGroup, RadioGroupItem, Label } from "@/registry/web/ui";

export const code = `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function BasicExample() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">گزینه اول</Label>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">گزینه دوم</Label>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">گزینه سوم</Label>
      </div>
    </RadioGroup>
  );
}
`;

export default function BasicExample() {
  return (
    <RadioGroup defaultValue="option-one">
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-one" id="option-one" />
        <Label htmlFor="option-one">گزینه اول</Label>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-two" id="option-two" />
        <Label htmlFor="option-two">گزینه دوم</Label>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="option-three" id="option-three" />
        <Label htmlFor="option-three">گزینه سوم</Label>
      </div>
    </RadioGroup>
  );
}
