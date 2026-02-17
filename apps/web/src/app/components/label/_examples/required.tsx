"use client";

import { Label } from "@/registry/web/ui";

export const code = `import { Label } from "@/components/ui/label";

export default function RequiredExample() {
  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="required-email">
          ایمیل <span className="text-destructive">*</span>
        </Label>
        <input
          type="email"
          id="required-email"
          required
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="optional-phone">شماره تلفن (اختیاری)</Label>
        <input
          type="tel"
          id="optional-phone"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="09123456789"
        />
      </div>
    </div>
  );
}
`;

export default function RequiredExample() {
  return (
    <div className="space-y-4 max-w-sm">
      <div className="space-y-2">
        <Label htmlFor="required-email">
          ایمیل <span className="text-destructive">*</span>
        </Label>
        <input
          type="email"
          id="required-email"
          required
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="optional-phone">شماره تلفن (اختیاری)</Label>
        <input
          type="tel"
          id="optional-phone"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="09123456789"
        />
      </div>
    </div>
  );
}
