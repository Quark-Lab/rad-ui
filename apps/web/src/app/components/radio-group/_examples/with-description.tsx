"use client";

import { RadioGroup, RadioGroupItem, Label } from "@/registry/web/ui";

export const code = `import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function WithDescriptionExample() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <div className="flex flex-col items-end">
          <Label htmlFor="r1">پیش‌فرض</Label>
          <p className="text-sm text-muted-foreground">
            فاصله‌گذاری استاندارد برای اکثر موارد استفاده
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <div className="flex flex-col items-end">
          <Label htmlFor="r2">راحت</Label>
          <p className="text-sm text-muted-foreground">
            فاصله‌گذاری بیشتر برای خوانایی بهتر
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="compact" id="r3" />
        <div className="flex flex-col items-end">
          <Label htmlFor="r3">فشرده</Label>
          <p className="text-sm text-muted-foreground">
            فاصله‌گذاری کمتر برای نمایش بیشتر
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}
`;

export default function WithDescriptionExample() {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="default" id="r1" />
        <div className="flex flex-col items-end">
          <Label htmlFor="r1">پیش‌فرض</Label>
          <p className="text-sm text-muted-foreground">
            فاصله‌گذاری استاندارد برای اکثر موارد استفاده
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="comfortable" id="r2" />
        <div className="flex flex-col items-end">
          <Label htmlFor="r2">راحت</Label>
          <p className="text-sm text-muted-foreground">
            فاصله‌گذاری بیشتر برای خوانایی بهتر
          </p>
        </div>
      </div>
      <div className="flex flex-row-reverse items-center gap-2">
        <RadioGroupItem value="compact" id="r3" />
        <div className="flex flex-col items-end">
          <Label htmlFor="r3">فشرده</Label>
          <p className="text-sm text-muted-foreground">
            فاصله‌گذاری کمتر برای نمایش بیشتر
          </p>
        </div>
      </div>
    </RadioGroup>
  );
}
