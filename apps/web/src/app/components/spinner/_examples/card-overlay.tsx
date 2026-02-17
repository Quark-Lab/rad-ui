"use client";

import { Spinner } from "@/registry/web/ui";

export const code = `import { Spinner } from "@/components/ui/spinner";

export default function CardOverlayExample() {
  return (
    <div className="max-w-sm mx-auto relative">
      <div className="p-6 rounded-lg border border-border">
        <h4 className="font-semibold mb-2">اطلاعات کاربر</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>نام: علی محمدی</p>
          <p>ایمیل: ali@example.com</p>
          <p>تلفن: 09123456789</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Spinner size="lg" />
          <span className="text-sm font-medium">در حال به‌روزرسانی...</span>
        </div>
      </div>
    </div>
  );
}
`;

export default function CardOverlayExample() {
  return (
    <div className="max-w-sm mx-auto relative">
      <div className="p-6 rounded-lg border border-border">
        <h4 className="font-semibold mb-2">اطلاعات کاربر</h4>
        <div className="space-y-2 text-sm text-muted-foreground">
          <p>نام: علی محمدی</p>
          <p>ایمیل: ali@example.com</p>
          <p>تلفن: 09123456789</p>
        </div>
      </div>
      <div className="absolute inset-0 bg-background/80 backdrop-blur-sm rounded-lg flex items-center justify-center">
        <div className="flex flex-col items-center gap-2">
          <Spinner size="lg" />
          <span className="text-sm font-medium">در حال به‌روزرسانی...</span>
        </div>
      </div>
    </div>
  );
}
