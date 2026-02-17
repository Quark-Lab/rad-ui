"use client";

import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/registry/web/ui";
import { Button } from "@/registry/web/ui";

export const code = `import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
  SheetClose,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";

export default function NoCloseButtonExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">بدون دکمه X</Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>بدون دکمه بستن</SheetTitle>
          <SheetDescription>
            این برگه دکمه X در گوشه بالا ندارد. برای بستن از دکمه پایین استفاده
            کنید
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">بستن</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
`;

export default function NoCloseButtonExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">بدون دکمه X</Button>
      </SheetTrigger>
      <SheetContent showCloseButton={false}>
        <SheetHeader>
          <SheetTitle>بدون دکمه بستن</SheetTitle>
          <SheetDescription>
            این برگه دکمه X در گوشه بالا ندارد. برای بستن از دکمه پایین استفاده
            کنید
          </SheetDescription>
        </SheetHeader>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">بستن</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
