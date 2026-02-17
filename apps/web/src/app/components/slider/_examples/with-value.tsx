"use client";

import { useState } from "react";
import { Slider, Label } from "@/registry/web/ui";
import { Volume2 } from "lucide-react";

export const code = `import { useState } from "react";
import { Slider } from "@/components/ui/slider";
import { Label } from "@/components/ui/label";
import { Volume2 } from "lucide-react";

export default function WithValueExample() {
  const [volume, setVolume] = useState([50]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="volume">صدا</Label>
        <span className="text-sm text-muted-foreground">{volume}%</span>
      </div>
      <div className="flex items-center gap-4">
        <Volume2 className="h-4 w-4 text-muted-foreground" />
        <Slider
          id="volume"
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="flex-1"
        />
      </div>
    </div>
  );
}
`;

export default function WithValueExample() {
  const [volume, setVolume] = useState([50]);

  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <Label htmlFor="volume">صدا</Label>
        <span className="text-sm text-muted-foreground">{volume}%</span>
      </div>
      <div className="flex items-center gap-4">
        <Volume2 className="h-4 w-4 text-muted-foreground" />
        <Slider
          id="volume"
          value={volume}
          onValueChange={setVolume}
          max={100}
          step={1}
          className="flex-1"
        />
      </div>
    </div>
  );
}
