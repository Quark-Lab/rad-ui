"use client";

import { Slider, Label } from "@/registry/web/ui";

export const code = `import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function DisabledExample() {
  return (
    <div className="space-y-2">
      <Label className="opacity-50">غیرفعال</Label>
      <Slider defaultValue={[60]} max={100} disabled />
    </div>
  );
}
`;

export default function DisabledExample() {
  return (
    <div className="space-y-2">
      <Label className="opacity-50">غیرفعال</Label>
      <Slider defaultValue={[60]} max={100} disabled />
    </div>
  );
}
