"use client";

import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/web/ui";
import { Button } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function ControlledExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">برگه کنترل‌شده</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>برگه کنترل‌شده</SheetTitle>
            <SheetDescription>
              این برگه با استفاده از state کنترل می‌شود
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button onClick={() => setOpen(false)}>بستن با کد</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <p className="text-sm text-muted-foreground">
        وضعیت برگه: {open ? "باز" : "بسته"}
      </p>
    </div>
  );
}
`;

export default function ControlledExample() {
  const [open, setOpen] = useState(false);

  return (
    <div className="flex flex-col items-center gap-4">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="outline">برگه کنترل‌شده</Button>
        </SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>برگه کنترل‌شده</SheetTitle>
            <SheetDescription>
              این برگه با استفاده از state کنترل می‌شود
            </SheetDescription>
          </SheetHeader>
          <SheetFooter>
            <Button onClick={() => setOpen(false)}>بستن با کد</Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
      <p className="text-sm text-muted-foreground">
        وضعیت برگه: {open ? "باز" : "بسته"}
      </p>
    </div>
  );
}
