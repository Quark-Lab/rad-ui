"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/registry/web/ui";
import { Button } from "@/registry/web/ui";

export const code = `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function BasicExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">باز کردن برگه</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>عنوان برگه</SheetTitle>
          <SheetDescription>
            این یک توضیح کوتاه درباره محتوای برگه است
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-muted-foreground">
            محتوای اصلی برگه در اینجا قرار می‌گیرد
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
`;

export default function BasicExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">باز کردن برگه</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>عنوان برگه</SheetTitle>
          <SheetDescription>
            این یک توضیح کوتاه درباره محتوای برگه است
          </SheetDescription>
        </SheetHeader>
        <div className="py-4">
          <p className="text-muted-foreground">
            محتوای اصلی برگه در اینجا قرار می‌گیرد
          </p>
        </div>
      </SheetContent>
    </Sheet>
  );
}
