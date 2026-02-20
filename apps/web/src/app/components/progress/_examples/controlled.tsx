"use client";

import * as React from "react";
import { Progress, Slider } from "@/registry/web/ui";

export const code = `"use client";

import * as React from "react";
import { Progress } from "@/components/ui/progress";
import { Slider } from "@/components/ui/slider";

export default function ControlledProgress() {
  const [value, setValue] = React.useState(50);

  return (
    <div className="space-y-4 w-full max-w-md">
      <Progress value={value} />
      <Slider
        value={[value]}
        onValueChange={(v) => setValue(v[0] ?? 0)}
        max={100}
        step={1}
      />
    </div>
  );
}`;

export default function ControlledExample() {
  const [value, setValue] = React.useState(50);

  return (
    <div className="space-y-4 w-full max-w-md">
      <Progress value={value} />
      <Slider
        value={[value]}
        onValueChange={(v) => setValue(v[0] ?? 0)}
        max={100}
        step={1}
      />
    </div>
  );
}
