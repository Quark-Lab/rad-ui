"use client";

import { Kbd, KbdGroup } from "@/registry/web/ui";

export const code = `import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function ShortcutsExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm min-w-[120px]">کپی:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>C</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm min-w-[120px]">قص:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>X</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm min-w-[120px]">چسباندن:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>V</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm min-w-[120px]">بازگشت:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>Z</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm min-w-[120px]">تکرار:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>Y</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
}
`;

export default function ShortcutsExample() {
  return (
    <div className="space-y-4">
      <div className="flex items-center gap-4">
        <span className="text-sm min-w-[120px]">کپی:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>C</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm min-w-[120px]">قص:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>X</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm min-w-[120px]">چسباندن:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>V</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm min-w-[120px]">بازگشت:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>Z</Kbd>
        </KbdGroup>
      </div>
      <div className="flex items-center gap-4">
        <span className="text-sm min-w-[120px]">تکرار:</span>
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <span className="text-muted-foreground">+</span>
          <Kbd>Y</Kbd>
        </KbdGroup>
      </div>
    </div>
  );
}
