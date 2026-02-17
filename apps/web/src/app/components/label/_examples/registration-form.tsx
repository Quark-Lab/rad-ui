"use client";

import { Label } from "@/registry/web/ui";

export const code = `import { Label } from "@/components/ui/label";

export default function RegistrationFormExample() {
  return (
    <div className="max-w-md space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">
            نام <span className="text-destructive">*</span>
          </Label>
          <input
            type="text"
            id="first-name"
            required
            className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">
            نام خانوادگی <span className="text-destructive">*</span>
          </Label>
          <input
            type="text"
            id="last-name"
            required
            className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-email">
          ایمیل <span className="text-destructive">*</span>
        </Label>
        <input
          type="email"
          id="reg-email"
          required
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-password">
          رمز عبور <span className="text-destructive">*</span>
        </Label>
        <input
          type="password"
          id="reg-password"
          required
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <p className="text-sm text-muted-foreground">
          حداقل ۸ کاراکتر
        </p>
      </div>
    </div>
  );
}
`;

export default function RegistrationFormExample() {
  return (
    <div className="max-w-md space-y-4">
      <div className="grid grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="first-name">
            نام <span className="text-destructive">*</span>
          </Label>
          <input
            type="text"
            id="first-name"
            required
            className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="last-name">
            نام خانوادگی <span className="text-destructive">*</span>
          </Label>
          <input
            type="text"
            id="last-name"
            required
            className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          />
        </div>
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-email">
          ایمیل <span className="text-destructive">*</span>
        </Label>
        <input
          type="email"
          id="reg-email"
          required
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="reg-password">
          رمز عبور <span className="text-destructive">*</span>
        </Label>
        <input
          type="password"
          id="reg-password"
          required
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
        <p className="text-sm text-muted-foreground">
          حداقل ۸ کاراکتر
        </p>
      </div>
    </div>
  );
}
