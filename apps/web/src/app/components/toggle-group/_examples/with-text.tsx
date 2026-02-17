"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/web/ui";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export const code = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export default function WithTextExample() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="center">
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="ms-2 h-4 w-4" />
        راست
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="ms-2 h-4 w-4" />
        وسط
      </ToggleGroupItem>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="ms-2 h-4 w-4" />
        چپ
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
`;

export default function WithTextExample() {
  return (
    <ToggleGroup type="single" variant="outline" defaultValue="center">
      <ToggleGroupItem value="right" aria-label="Align right">
        <AlignRight className="ms-2 h-4 w-4" />
        راست
      </ToggleGroupItem>
      <ToggleGroupItem value="center" aria-label="Align center">
        <AlignCenter className="ms-2 h-4 w-4" />
        وسط
      </ToggleGroupItem>
      <ToggleGroupItem value="left" aria-label="Align left">
        <AlignLeft className="ms-2 h-4 w-4" />
        چپ
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
