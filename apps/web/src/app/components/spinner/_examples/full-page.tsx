"use client";

import { Spinner } from "@/registry/web/ui";

export const code = `import { Spinner } from "@/components/ui/spinner";

export default function FullPageExample() {
  return (
    <div className="h-64 flex flex-col items-center justify-center gap-4">
      <Spinner size="xl" className="text-primary" />
      <div className="text-center">
        <p className="font-medium mb-1">در حال بارگذاری</p>
        <p className="text-sm text-muted-foreground">
          لطفاً چند لحظه صبر کنید...
        </p>
      </div>
    </div>
  );
}
`;

export default function FullPageExample() {
  return (
    <div className="h-64 flex flex-col items-center justify-center gap-4">
      <Spinner size="xl" className="text-primary" />
      <div className="text-center">
        <p className="font-medium mb-1">در حال بارگذاری</p>
        <p className="text-sm text-muted-foreground">
          لطفاً چند لحظه صبر کنید...
        </p>
      </div>
    </div>
  );
}
