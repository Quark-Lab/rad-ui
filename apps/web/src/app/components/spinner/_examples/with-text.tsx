"use client";

import { Spinner } from "@/registry/web/ui";

export const code = `import { Spinner } from "@/components/ui/spinner";

export default function WithTextExample() {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="flex items-center gap-3">
        <Spinner size="sm" />
        <span className="text-sm">در حال بارگذاری...</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size="default" className="text-primary" />
        <span>در حال پردازش درخواست شما</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size="lg" className="text-blue-500" />
        <div>
          <p className="font-medium">لطفاً صبر کنید</p>
          <p className="text-sm text-muted-foreground">
            این ممکن است چند لحظه طول بکشد
          </p>
        </div>
      </div>
    </div>
  );
}
`;

export default function WithTextExample() {
  return (
    <div className="space-y-4 max-w-md mx-auto">
      <div className="flex items-center gap-3">
        <Spinner size="sm" />
        <span className="text-sm">در حال بارگذاری...</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size="default" className="text-primary" />
        <span>در حال پردازش درخواست شما</span>
      </div>
      <div className="flex items-center gap-3">
        <Spinner size="lg" className="text-blue-500" />
        <div>
          <p className="font-medium">لطفاً صبر کنید</p>
          <p className="text-sm text-muted-foreground">
            این ممکن است چند لحظه طول بکشد
          </p>
        </div>
      </div>
    </div>
  );
}
