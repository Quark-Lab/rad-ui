"use client";

import { Toggle } from "@/registry/web/ui";
import { Italic } from "lucide-react";

export const code = `import { Toggle } from "@/components/ui/toggle";
import { Italic } from "lucide-react";

export default function SizesExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Toggle size="sm" aria-label="Toggle small">
        <Italic className="h-3 w-3" />
      </Toggle>
      <Toggle size="md" aria-label="Toggle medium">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle large">
        <Italic className="h-5 w-5" />
      </Toggle>
    </div>
  );
}
`;

export default function SizesExample() {
  return (
    <div className="flex flex-wrap items-center gap-4">
      <Toggle size="sm" aria-label="Toggle small">
        <Italic className="h-3 w-3" />
      </Toggle>
      <Toggle size="md" aria-label="Toggle medium">
        <Italic className="h-4 w-4" />
      </Toggle>
      <Toggle size="lg" aria-label="Toggle large">
        <Italic className="h-5 w-5" />
      </Toggle>
    </div>
  );
}
