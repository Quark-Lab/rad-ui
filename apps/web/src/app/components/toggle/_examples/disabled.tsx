"use client";

import { Toggle } from "@/registry/web/ui";
import { Italic } from "lucide-react";

export const code = `import { Toggle } from "@/components/ui/toggle";
import { Italic } from "lucide-react";

export default function DisabledExample() {
  return (
    <Toggle disabled aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  );
}
`;

export default function DisabledExample() {
  return (
    <Toggle disabled aria-label="Toggle italic">
      <Italic className="h-4 w-4" />
    </Toggle>
  );
}
