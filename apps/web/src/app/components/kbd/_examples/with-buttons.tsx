"use client";

import { Kbd, KbdGroup, Button } from "@/registry/web/ui";
import { Search, Copy, Save } from "lucide-react";

export const code = `import { Kbd, KbdGroup } from "@/components/ui/kbd";
import { Button } from "@/components/ui/button";
import { Search, Copy, Save } from "lucide-react";

export default function WithButtonsExample() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" className="gap-2">
        <Search className="h-4 w-4" />
        جستجو
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <Button variant="outline" className="gap-2">
        <Copy className="h-4 w-4" />
        کپی
        <Kbd>Ctrl+C</Kbd>
      </Button>
      <Button variant="outline" className="gap-2">
        <Save className="h-4 w-4" />
        ذخیره
        <Kbd>Ctrl+S</Kbd>
      </Button>
    </div>
  );
}
`;

export default function WithButtonsExample() {
  return (
    <div className="flex flex-wrap gap-3">
      <Button variant="outline" className="gap-2">
        <Search className="h-4 w-4" />
        جستجو
        <KbdGroup>
          <Kbd>Ctrl</Kbd>
          <Kbd>K</Kbd>
        </KbdGroup>
      </Button>
      <Button variant="outline" className="gap-2">
        <Copy className="h-4 w-4" />
        کپی
        <Kbd>Ctrl+C</Kbd>
      </Button>
      <Button variant="outline" className="gap-2">
        <Save className="h-4 w-4" />
        ذخیره
        <Kbd>Ctrl+S</Kbd>
      </Button>
    </div>
  );
}
