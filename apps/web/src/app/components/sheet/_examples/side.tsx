"use client";

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/registry/web/ui";
import { Button } from "@/registry/web/ui";

export const code = `import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetDescription,
} from "@/components/ui/sheet";

const SHEET_SIDES = [
  { side: "top", label: "بالا" },
  { side: "right", label: "راست" },
  { side: "bottom", label: "پایین" },
  { side: "left", label: "چپ" },
] as const;

export default function SideExample() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIDES.map(({ side, label }) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{label}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>برگه از سمت {label}</SheetTitle>
              <SheetDescription>
                این برگه از سمت {label} باز می‌شود
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p className="text-muted-foreground">
                محتوای برگه در اینجا قرار می‌گیرد
              </p>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
`;

const SHEET_SIDES = [
  { side: "top", label: "بالا" },
  { side: "right", label: "راست" },
  { side: "bottom", label: "پایین" },
  { side: "left", label: "چپ" },
] as const;

export default function SideExample() {
  return (
    <div className="flex flex-wrap gap-2">
      {SHEET_SIDES.map(({ side, label }) => (
        <Sheet key={side}>
          <SheetTrigger asChild>
            <Button variant="outline">{label}</Button>
          </SheetTrigger>
          <SheetContent side={side}>
            <SheetHeader>
              <SheetTitle>برگه از سمت {label}</SheetTitle>
              <SheetDescription>
                این برگه از سمت {label} باز می‌شود
              </SheetDescription>
            </SheetHeader>
            <div className="py-4">
              <p className="text-muted-foreground">
                محتوای برگه در اینجا قرار می‌گیرد
              </p>
            </div>
          </SheetContent>
        </Sheet>
      ))}
    </div>
  );
}
