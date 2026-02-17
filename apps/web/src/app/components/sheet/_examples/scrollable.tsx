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

export default function ScrollableExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">محتوای طولانی</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>محتوای قابل اسکرول</SheetTitle>
          <SheetDescription>
            این برگه محتوای طولانی دارد که قابل اسکرول است
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          ))}
        </div>
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

export default function ScrollableExample() {
  return (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">محتوای طولانی</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>محتوای قابل اسکرول</SheetTitle>
          <SheetDescription>
            این برگه محتوای طولانی دارد که قابل اسکرول است
          </SheetDescription>
        </SheetHeader>
        <div className="flex-1 overflow-y-auto py-4">
          {Array.from({ length: 10 }).map((_, index) => (
            <p key={index} className="mb-4 leading-relaxed">
              لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
              استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
              در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد
              نیاز و کاربردهای متنوع با هدف بهبود ابزارهای کاربردی می باشد.
            </p>
          ))}
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button variant="outline">بستن</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  );
}
