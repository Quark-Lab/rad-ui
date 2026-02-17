"use client";

import { Label } from "@/registry/web/ui";

export const code = `import { Label } from "@/components/ui/label";

export default function BasicExample() {
  return (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="email">ایمیل</Label>
      <input
        type="email"
        id="email"
        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="your@email.com"
      />
    </div>
  );
}
`;

export default function BasicExample() {
  return (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="email">ایمیل</Label>
      <input
        type="email"
        id="email"
        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50"
        placeholder="your@email.com"
      />
    </div>
  );
}
