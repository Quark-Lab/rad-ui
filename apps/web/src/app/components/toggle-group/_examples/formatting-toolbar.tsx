"use client";

import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/registry/web/ui";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export const code = `import { useState } from "react";
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";
import { Bold, Italic, Underline, AlignLeft, AlignCenter, AlignRight } from "lucide-react";

export default function FormattingToolbarExample() {
  const [formatting, setFormatting] = useState<string[]>([]);
  const [alignment, setAlignment] = useState("right");

  return (
    <div className="flex gap-2 p-2 border rounded-lg w-fit items-center">
      <ToggleGroup
        type="multiple"
        value={formatting}
        onValueChange={setFormatting}
        variant="outline"
        size="sm"
      >
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

      <div className="w-px bg-border h-6" />

      <ToggleGroup
        type="single"
        value={alignment}
        onValueChange={setAlignment}
        variant="outline"
        size="sm"
      >
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
    </div>
  );
}
`;

export default function FormattingToolbarExample() {
  const [formatting, setFormatting] = useState<string[]>([]);
  const [alignment, setAlignment] = useState("right");

  return (
    <div className="flex gap-2 p-2 border rounded-lg w-fit items-center">
      <ToggleGroup
        type="multiple"
        value={formatting}
        onValueChange={setFormatting}
        variant="outline"
        size="sm"
      >
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

      <div className="w-px bg-border h-6" />

      <ToggleGroup
        type="single"
        value={alignment}
        onValueChange={setAlignment}
        variant="outline"
        size="sm"
      >
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
    </div>
  );
}
