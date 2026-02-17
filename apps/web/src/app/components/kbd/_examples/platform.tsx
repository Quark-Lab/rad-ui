"use client";

import { Kbd, KbdGroup } from "@/registry/web/ui";

export const code = `import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function PlatformShortcutsExample() {
  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      {/* Windows/Linux */}
      <div className="p-6 rounded-lg bg-card border border-border">
        <h3 className="text-lg font-semibold mb-4">Windows / Linux</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">ذخیره</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>S</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">جستجو</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>F</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">انتخاب همه</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>A</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">تب جدید</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>T</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>

      {/* macOS */}
      <div className="p-6 rounded-lg bg-card border border-border">
        <h3 className="text-lg font-semibold mb-4">macOS</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">ذخیره</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>S</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">جستجو</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>F</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">انتخاب همه</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>A</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">تب جدید</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>T</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

export default function PlatformShortcutsExample() {
  return (
    <div className="grid md:grid-cols-2 gap-6 w-full">
      {/* Windows/Linux */}
      <div className="p-6 rounded-lg bg-card border border-border">
        <h3 className="text-lg font-semibold mb-4">Windows / Linux</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">ذخیره</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>S</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">جستجو</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>F</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">انتخاب همه</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>A</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">تب جدید</span>
            <KbdGroup>
              <Kbd>Ctrl</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>T</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>

      {/* macOS */}
      <div className="p-6 rounded-lg bg-card border border-border">
        <h3 className="text-lg font-semibold mb-4">macOS</h3>
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">ذخیره</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>S</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">جستجو</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>F</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">انتخاب همه</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>A</Kbd>
            </KbdGroup>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm text-muted-foreground">تب جدید</span>
            <KbdGroup>
              <Kbd>⌘</Kbd>
              <span className="text-muted-foreground">+</span>
              <Kbd>T</Kbd>
            </KbdGroup>
          </div>
        </div>
      </div>
    </div>
  );
}
