"use client";

import { Label } from "@/registry/web/ui";

export const code = `import { Label } from "@/components/ui/label";

export default function DisabledExample() {
  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="disabled-input">ورودی غیرفعال</Label>
        <input
          type="text"
          id="disabled-input"
          disabled
          className="peer flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="این فیلد غیرفعال است"
        />
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <input
          type="checkbox"
          id="disabled-checkbox"
          disabled
          className="peer h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Label
          htmlFor="disabled-checkbox"
          className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          چک‌باکس غیرفعال
        </Label>
      </div>
    </div>
  );
}
`;

export default function DisabledExample() {
  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="disabled-input">ورودی غیرفعال</Label>
        <input
          type="text"
          id="disabled-input"
          disabled
          className="peer flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
          placeholder="این فیلد غیرفعال است"
        />
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <input
          type="checkbox"
          id="disabled-checkbox"
          disabled
          className="peer h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        />
        <Label
          htmlFor="disabled-checkbox"
          className="peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          چک‌باکس غیرفعال
        </Label>
      </div>
    </div>
  );
}
