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
import { Button, Input, Label } from "@/registry/web/ui";

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
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function WithFormExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">ویرایش پروفایل</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>ویرایش پروفایل</SheetTitle>
          <SheetDescription>
            تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">نام</Label>
            <Input id="name" defaultValue="علی کاوسی" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">نام کاربری</Label>
            <Input id="username" defaultValue="@alikawosi" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">انصراف</Button>
          </SheetClose>
          <Button type="submit">ذخیره تغییرات</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
`;

export default function WithFormExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">ویرایش پروفایل</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>ویرایش پروفایل</SheetTitle>
          <SheetDescription>
            تغییرات خود را اعمال کنید و دکمه ذخیره را بزنید
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid gap-2">
            <Label htmlFor="name">نام</Label>
            <Input id="name" defaultValue="علی کاوسی" />
          </div>
          <div className="grid gap-2">
            <Label htmlFor="username">نام کاربری</Label>
            <Input id="username" defaultValue="@alikawosi" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">انصراف</Button>
          </SheetClose>
          <Button type="submit">ذخیره تغییرات</Button>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
