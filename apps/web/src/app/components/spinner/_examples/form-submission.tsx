"use client";

import { Spinner, Button } from "@/registry/web/ui";

export const code = `import { Spinner } from "@/components/ui/spinner";
import { Button } from "@/components/ui/button";

export default function FormSubmissionExample() {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">نام</label>
        <input
          type="text"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          placeholder="نام خود را وارد کنید"
          disabled
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">ایمیل</label>
        <input
          type="email"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          placeholder="your@email.com"
          disabled
        />
      </div>
      <Button className="w-full" disabled>
        <Spinner size="sm" className="me-2" />
        در حال ارسال...
      </Button>
    </div>
  );
}
`;

export default function FormSubmissionExample() {
  return (
    <div className="max-w-md mx-auto space-y-4">
      <div className="space-y-2">
        <label className="text-sm font-medium">نام</label>
        <input
          type="text"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          placeholder="نام خود را وارد کنید"
          disabled
        />
      </div>
      <div className="space-y-2">
        <label className="text-sm font-medium">ایمیل</label>
        <input
          type="email"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm"
          placeholder="your@email.com"
          disabled
        />
      </div>
      <Button className="w-full" disabled>
        <Spinner size="sm" className="me-2" />
        در حال ارسال...
      </Button>
    </div>
  );
}
