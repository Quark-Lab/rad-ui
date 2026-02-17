"use client";

import { Slider } from "@/registry/web/ui";

export const code = `import { Slider } from "@/components/ui/slider";

export default function MinMaxExample() {
  return (
    <div className="space-y-8">
      {/* 0-50 */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>0</span>
          <span>50</span>
        </div>
        <Slider defaultValue={[25]} min={0} max={50} step={1} />
      </div>

      {/* 10-200 */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>10</span>
          <span>200</span>
        </div>
        <Slider defaultValue={[100]} min={10} max={200} step={5} />
      </div>
    </div>
  );
}
`;

export default function MinMaxExample() {
  return (
    <div className="space-y-8">
      {/* 0-50 */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>0</span>
          <span>50</span>
        </div>
        <Slider defaultValue={[25]} min={0} max={50} step={1} />
      </div>

      {/* 10-200 */}
      <div className="space-y-2">
        <div className="flex justify-between text-sm text-muted-foreground">
          <span>10</span>
          <span>200</span>
        </div>
        <Slider defaultValue={[100]} min={10} max={200} step={5} />
      </div>
    </div>
  );
}
