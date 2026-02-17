"use client";

import { Spinner } from "@/registry/web/ui";

export const code = `import { Spinner } from "@/components/ui/spinner";

export default function SizesExample() {
  return (
    <div className="flex items-end gap-8 justify-center">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-muted-foreground">کوچک</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="default" />
        <span className="text-xs text-muted-foreground">پیش‌فرض</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted-foreground">بزرگ</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted-foreground">خیلی بزرگ</span>
      </div>
    </div>
  );
}
`;

export default function SizesExample() {
  return (
    <div className="flex items-end gap-8 justify-center">
      <div className="flex flex-col items-center gap-2">
        <Spinner size="sm" />
        <span className="text-xs text-muted-foreground">کوچک</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="default" />
        <span className="text-xs text-muted-foreground">پیش‌فرض</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="lg" />
        <span className="text-xs text-muted-foreground">بزرگ</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Spinner size="xl" />
        <span className="text-xs text-muted-foreground">خیلی بزرگ</span>
      </div>
    </div>
  );
}
