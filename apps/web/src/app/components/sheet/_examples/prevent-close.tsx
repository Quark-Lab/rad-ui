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

export default function PreventCloseExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">فرم اجباری</Button>
      </SheetTrigger>
      <SheetContent
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle>فرم اجباری</SheetTitle>
          <SheetDescription>
            این فرم باید تکمیل شود و امکان بستن آن با کلیک خارج یا Escape وجود ندارد
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p className="text-muted-foreground">محتوای فرم ضروری...</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">انصراف</Button>
          </SheetClose>
          <Button type="submit">ارسال</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
`;

export default function PreventCloseExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">فرم اجباری</Button>
      </SheetTrigger>
      <SheetContent
        onPointerDownOutside={(e) => e.preventDefault()}
        onEscapeKeyDown={(e) => e.preventDefault()}
        onInteractOutside={(e) => e.preventDefault()}
      >
        <SheetHeader>
          <SheetTitle>فرم اجباری</SheetTitle>
          <SheetDescription>
            این فرم باید تکمیل شود و امکان بستن آن با کلیک خارج یا Escape وجود ندارد
          </SheetDescription>
        </SheetHeader>
        <div className="py-6">
          <p className="text-muted-foreground">محتوای فرم ضروری...</p>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">انصراف</Button>
          </SheetClose>
          <Button type="submit">ارسال</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
