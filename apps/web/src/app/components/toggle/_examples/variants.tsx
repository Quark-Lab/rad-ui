"use client";

import { Toggle } from "@/registry/web/ui";
import { Bold, Italic, Underline } from "lucide-react";

export const code = `import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export default function VariantsExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Toggle variant="default" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle variant="default" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle variant="default" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
      <div className="flex flex-wrap gap-4">
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  );
}
`;

export default function VariantsExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Toggle variant="default" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle variant="default" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle variant="default" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
      <div className="flex flex-wrap gap-4">
        <Toggle variant="outline" aria-label="Toggle italic">
          <Italic className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle bold">
          <Bold className="h-4 w-4" />
        </Toggle>
        <Toggle variant="outline" aria-label="Toggle underline">
          <Underline className="h-4 w-4" />
        </Toggle>
      </div>
    </div>
  );
}
