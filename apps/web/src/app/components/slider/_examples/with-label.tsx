"use client";

import { Slider, Label } from "@/registry/web/ui";

export const code = `import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function WithLabelExample() {
  return (
    <div className="space-y-4">
      <Label>صدا</Label>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  );
}
`;

export default function WithLabelExample() {
  return (
    <div className="space-y-4">
      <Label>صدا</Label>
      <Slider defaultValue={[50]} max={100} step={1} />
    </div>
  );
}
