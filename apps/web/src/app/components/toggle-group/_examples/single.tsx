"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/web/ui";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export const code = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export default function SingleSelectionExample() {
  return (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
`;

export default function SingleSelectionExample() {
  return (
    <ToggleGroup type="single" defaultValue="center">
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
