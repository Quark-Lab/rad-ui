"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/web/ui";
import { Button } from "@/registry/web/ui";
import { Menu } from "lucide-react";

export const code = `import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

export default function NavigationExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>منوی ناوبری</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 py-4">
          <a href="#" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">
            خانه
          </a>
          <a href="#" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">
            محصولات
          </a>
          <a href="#" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">
            درباره ما
          </a>
          <a href="#" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">
            تماس با ما
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
`;

export default function NavigationExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <Menu className="h-5 w-5" />
        </Button>
      </SheetTrigger>
      <SheetContent side="right">
        <SheetHeader>
          <SheetTitle>منوی ناوبری</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col gap-2 py-4">
          <a href="#" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">
            خانه
          </a>
          <a href="#" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">
            محصولات
          </a>
          <a href="#" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">
            درباره ما
          </a>
          <a href="#" className="px-4 py-2 hover:bg-muted rounded-md transition-colors">
            تماس با ما
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  );
}
