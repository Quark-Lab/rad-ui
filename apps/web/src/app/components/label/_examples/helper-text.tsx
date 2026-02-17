"use client";

import { Label } from "@/registry/web/ui";

export const code = `import { Label } from "@/components/ui/label";

export default function HelperTextExample() {
  return (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="username">نام کاربری</Label>
      <input
        type="text"
        id="username"
        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        placeholder="username"
      />
      <p className="text-sm text-muted-foreground">
        نام کاربری شما باید حداقل ۳ کاراکتر باشد
      </p>
    </div>
  );
}
`;

export default function HelperTextExample() {
  return (
    <div className="space-y-2 max-w-sm">
      <Label htmlFor="username">نام کاربری</Label>
      <input
        type="text"
        id="username"
        className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        placeholder="username"
      />
      <p className="text-sm text-muted-foreground">
        نام کاربری شما باید حداقل ۳ کاراکتر باشد
      </p>
    </div>
  );
}
