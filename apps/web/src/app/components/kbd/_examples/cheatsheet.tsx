"use client";

import { Kbd, KbdGroup } from "@/registry/web/ui";

export const code = `import { Kbd, KbdGroup } from "@/components/ui/kbd";

export default function CheatsheetExample() {
  return (
    <div className="grid md:grid-cols-2 gap-4 w-full">
      <div className="space-y-3">
        <h4 className="font-semibold text-sm mb-2">ویرایش</h4>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">بازگشت</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>Z</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">تکرار</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>Y</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">کپی</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>C</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">چسباندن</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>V</Kbd>
          </KbdGroup>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-sm mb-2">ناوبری</h4>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">جستجو</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>F</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">رفتن به خط</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>G</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">پالت دستورات</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>P</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">تنظیمات</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>,</Kbd>
          </KbdGroup>
        </div>
      </div>
    </div>
  );
}
`;

export default function CheatsheetExample() {
  return (
    <div className="grid md:grid-cols-2 gap-4 w-full">
      <div className="space-y-3">
        <h4 className="font-semibold text-sm mb-2">ویرایش</h4>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">بازگشت</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>Z</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">تکرار</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>Y</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">کپی</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>C</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">چسباندن</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>V</Kbd>
          </KbdGroup>
        </div>
      </div>

      <div className="space-y-3">
        <h4 className="font-semibold text-sm mb-2">ناوبری</h4>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">جستجو</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>F</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">رفتن به خط</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>G</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">پالت دستورات</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>P</Kbd>
          </KbdGroup>
        </div>
        <div className="flex items-center justify-between py-2 px-3 rounded-md hover:bg-muted transition-colors">
          <span className="text-sm">تنظیمات</span>
          <KbdGroup>
            <Kbd>Ctrl</Kbd>
            <span className="text-muted-foreground">+</span>
            <Kbd>,</Kbd>
          </KbdGroup>
        </div>
      </div>
    </div>
  );
}
