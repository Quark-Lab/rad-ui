"use client";

import { Button } from "@/registry/web/ui";

export const code = `import { Button } from "@/components/ui/button";

export default function UsageExample() {
  return (
    <div>
      <Button>پیش‌فرض</Button>
      <Button variant="destructive">حذف</Button>
      <Button variant="outline">حاشیه‌دار</Button>
      <Button variant="ghost">شبح</Button>
      <Button variant="link">لینک</Button>

      <Button size="sm">کوچک</Button>
      <Button size="md">متوسط</Button>
      <Button size="lg">بزرگ</Button>

      <Button disabled>غیرفعال</Button>
    </div>
  );
}
`;

export default function UsageExample() {
  return (
    <div className="flex flex-col gap-4">
      <div className="flex flex-wrap gap-4">
        <Button>پیش‌فرض</Button>
        <Button variant="destructive">حذف</Button>
        <Button variant="outline">حاشیه‌دار</Button>
        <Button variant="ghost">شبح</Button>
        <Button variant="link">لینک</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button size="sm">کوچک</Button>
        <Button size="md">متوسط</Button>
        <Button size="lg">بزرگ</Button>
      </div>
      <div>
        <Button disabled>غیرفعال</Button>
      </div>
    </div>
  );
}
