"use client";

import { Kbd } from "@/registry/web/ui";

export const code = `import { Kbd } from "@/components/ui/kbd";

export default function SpecialKeysExample() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col items-center gap-2">
        <Kbd>⌘</Kbd>
        <span className="text-xs text-muted-foreground">Command</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>⌥</Kbd>
        <span className="text-xs text-muted-foreground">Option</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>⇧</Kbd>
        <span className="text-xs text-muted-foreground">Shift</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>⌃</Kbd>
        <span className="text-xs text-muted-foreground">Control</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>↩</Kbd>
        <span className="text-xs text-muted-foreground">Return</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>⌫</Kbd>
        <span className="text-xs text-muted-foreground">Delete</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>⎋</Kbd>
        <span className="text-xs text-muted-foreground">Escape</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>→</Kbd>
        <span className="text-xs text-muted-foreground">Arrow</span>
      </div>
    </div>
  );
}
`;

export default function SpecialKeysExample() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      <div className="flex flex-col items-center gap-2">
        <Kbd>⌘</Kbd>
        <span className="text-xs text-muted-foreground">Command</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>⌥</Kbd>
        <span className="text-xs text-muted-foreground">Option</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>⇧</Kbd>
        <span className="text-xs text-muted-foreground">Shift</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>⌃</Kbd>
        <span className="text-xs text-muted-foreground">Control</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>↩</Kbd>
        <span className="text-xs text-muted-foreground">Return</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>⌫</Kbd>
        <span className="text-xs text-muted-foreground">Delete</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>⎋</Kbd>
        <span className="text-xs text-muted-foreground">Escape</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Kbd>→</Kbd>
        <span className="text-xs text-muted-foreground">Arrow</span>
      </div>
    </div>
  );
}
