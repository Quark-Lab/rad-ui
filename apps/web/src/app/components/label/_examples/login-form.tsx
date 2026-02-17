"use client";

import { Label } from "@/registry/web/ui";

export const code = `import { Label } from "@/components/ui/label";

export default function LoginFormExample() {
  return (
    <div className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="login-email">ایمیل</Label>
        <input
          type="email"
          id="login-email"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="login-password">رمز عبور</Label>
        <input
          type="password"
          id="login-password"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <input
          type="checkbox"
          id="remember"
          className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
        <Label htmlFor="remember" className="cursor-pointer">
          مرا به خاطر بسپار
        </Label>
      </div>
    </div>
  );
}
`;

export default function LoginFormExample() {
  return (
    <div className="max-w-sm space-y-4">
      <div className="space-y-2">
        <Label htmlFor="login-email">ایمیل</Label>
        <input
          type="email"
          id="login-email"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
          placeholder="your@email.com"
        />
      </div>
      <div className="space-y-2">
        <Label htmlFor="login-password">رمز عبور</Label>
        <input
          type="password"
          id="login-password"
          className="flex h-10 w-full rounded-md border border-border bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
        />
      </div>
      <div className="flex items-center space-x-2 space-x-reverse">
        <input
          type="checkbox"
          id="remember"
          className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
        />
        <Label htmlFor="remember" className="cursor-pointer">
          مرا به خاطر بسپار
        </Label>
      </div>
    </div>
  );
}
