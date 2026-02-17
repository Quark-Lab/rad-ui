"use client";

import { Slider, Label } from "@/registry/web/ui";

export const code = `import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";

export default function StepsExample() {
  return (
    <div className="space-y-8">
      {/* Step 1 */}
      <div className="space-y-2">
        <Label>دقیق (Step: 1)</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>

      {/* Step 5 */}
      <div className="space-y-2">
        <Label>متوسط (Step: 5)</Label>
        <Slider defaultValue={[50]} max={100} step={5} />
      </div>

      {/* Step 10 */}
      <div className="space-y-2">
        <Label>درشت (Step: 10)</Label>
        <Slider defaultValue={[50]} max={100} step={10} />
      </div>
    </div>
  );
}
`;

export default function StepsExample() {
  return (
    <div className="space-y-8">
      {/* Step 1 */}
      <div className="space-y-2">
        <Label>دقیق (Step: 1)</Label>
        <Slider defaultValue={[50]} max={100} step={1} />
      </div>

      {/* Step 5 */}
      <div className="space-y-2">
        <Label>متوسط (Step: 5)</Label>
        <Slider defaultValue={[50]} max={100} step={5} />
      </div>

      {/* Step 10 */}
      <div className="space-y-2">
        <Label>درشت (Step: 10)</Label>
        <Slider defaultValue={[50]} max={100} step={10} />
      </div>
    </div>
  );
}
