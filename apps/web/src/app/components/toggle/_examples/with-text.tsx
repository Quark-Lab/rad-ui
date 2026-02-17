"use client";

import { Toggle } from "@/registry/web/ui";
import { Bold, Italic, Underline } from "lucide-react";

export const code = `import { Toggle } from "@/components/ui/toggle";
import { Bold, Italic, Underline } from "lucide-react";

export default function WithTextExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Toggle aria-label="Toggle italic">
        <Italic className="ms-2 h-4 w-4" />
        کج
      </Toggle>
      <Toggle aria-label="Toggle bold">
        <Bold className="ms-2 h-4 w-4" />
        پررنگ
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="ms-2 h-4 w-4" />
        زیرخط
      </Toggle>
    </div>
  );
}
`;

export default function WithTextExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Toggle aria-label="Toggle italic">
        <Italic className="ms-2 h-4 w-4" />
        کج
      </Toggle>
      <Toggle aria-label="Toggle bold">
        <Bold className="ms-2 h-4 w-4" />
        پررنگ
      </Toggle>
      <Toggle aria-label="Toggle underline">
        <Underline className="ms-2 h-4 w-4" />
        زیرخط
      </Toggle>
    </div>
  );
}
