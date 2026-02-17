"use client";

import { ToggleGroup, ToggleGroupItem } from "@/registry/web/ui";
import { Bold, Italic, Underline } from "lucide-react";

export const code = `import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline } from "lucide-react";

export default function DisabledExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-32">Group Disabled:</span>
        <ToggleGroup type="single" variant="outline" disabled>
          <ToggleGroupItem value="bold" aria-label="Bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-32">Item Disabled:</span>
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic" disabled>
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
`;

export default function DisabledExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-32">Group Disabled:</span>
        <ToggleGroup type="single" variant="outline" disabled>
          <ToggleGroupItem value="bold" aria-label="Bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic">
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm font-medium w-32">Item Disabled:</span>
        <ToggleGroup type="single" variant="outline">
          <ToggleGroupItem value="bold" aria-label="Bold">
            <Bold className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="italic" aria-label="Italic" disabled>
            <Italic className="h-4 w-4" />
          </ToggleGroupItem>
          <ToggleGroupItem value="underline" aria-label="Underline">
            <Underline className="h-4 w-4" />
          </ToggleGroupItem>
        </ToggleGroup>
      </div>
    </div>
  );
}
