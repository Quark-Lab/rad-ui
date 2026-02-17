"use client";

import { Kbd, Button } from "@/registry/web/ui";
import { Copy, Save, Undo, Redo } from "lucide-react";

export const code = `import { Kbd, Button } from "@/components/ui/kbd";
import { Copy, Save, Undo, Redo } from "lucide-react";

export default function ToolbarExample() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button size="sm" variant="ghost" className="gap-2">
        <Undo className="h-4 w-4" />
        <Kbd>Ctrl+Z</Kbd>
      </Button>
      <Button size="sm" variant="ghost" className="gap-2">
        <Redo className="h-4 w-4" />
        <Kbd>Ctrl+Y</Kbd>
      </Button>
      <div className="h-6 w-px bg-border mx-2" />
      <Button size="sm" variant="ghost" className="gap-2">
        <Copy className="h-4 w-4" />
        <Kbd>Ctrl+C</Kbd>
      </Button>
      <Button size="sm" variant="ghost" className="gap-2">
        <Save className="h-4 w-4" />
        <Kbd>Ctrl+S</Kbd>
      </Button>
    </div>
  );
}
`;

export default function ToolbarExample() {
  return (
    <div className="flex items-center gap-2 flex-wrap">
      <Button size="sm" variant="ghost" className="gap-2">
        <Undo className="h-4 w-4" />
        <Kbd>Ctrl+Z</Kbd>
      </Button>
      <Button size="sm" variant="ghost" className="gap-2">
        <Redo className="h-4 w-4" />
        <Kbd>Ctrl+Y</Kbd>
      </Button>
      <div className="h-6 w-px bg-border mx-2" />
      <Button size="sm" variant="ghost" className="gap-2">
        <Copy className="h-4 w-4" />
        <Kbd>Ctrl+C</Kbd>
      </Button>
      <Button size="sm" variant="ghost" className="gap-2">
        <Save className="h-4 w-4" />
        <Kbd>Ctrl+S</Kbd>
      </Button>
    </div>
  );
}
