"use client";

import { Spinner } from "@/registry/web/ui";

export const code = `import { Spinner } from "@/components/ui/spinner";

export default function InlineExample() {
  return (
    <div className="max-w-md space-y-4">
      <div className="p-4 rounded-lg bg-muted/50">
        <div className="flex items-center justify-between">
          <span className="text-sm">در حال آپلود فایل...</span>
          <Spinner size="sm" />
        </div>
        <div className="mt-2 h-2 bg-background rounded-full overflow-hidden">
          <div className="h-full bg-primary w-2/3 rounded-full" />
        </div>
      </div>
      <div className="p-4 rounded-lg bg-muted/50">
        <div className="flex items-center justify-between">
          <span className="text-sm">در حال پردازش تصویر...</span>
          <Spinner size="sm" className="text-blue-500" />
        </div>
      </div>
    </div>
  );
}
`;

export default function InlineExample() {
  return (
    <div className="max-w-md space-y-4">
      <div className="p-4 rounded-lg bg-muted/50">
        <div className="flex items-center justify-between">
          <span className="text-sm">در حال آپلود فایل...</span>
          <Spinner size="sm" />
        </div>
        <div className="mt-2 h-2 bg-background rounded-full overflow-hidden">
          <div className="h-full bg-primary w-2/3 rounded-full" />
        </div>
      </div>
      <div className="p-4 rounded-lg bg-muted/50">
        <div className="flex items-center justify-between">
          <span className="text-sm">در حال پردازش تصویر...</span>
          <Spinner size="sm" className="text-blue-500" />
        </div>
      </div>
    </div>
  );
}
