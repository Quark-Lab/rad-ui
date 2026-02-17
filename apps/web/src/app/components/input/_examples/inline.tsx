"use client";

import { Input, Button } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export default function InlineExample() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="ایمیل" />
      <Button type="submit">جستجو</Button>
    </div>
  );
}
`;

export default function InlineExample() {
  return (
    <div className="flex w-full max-w-sm items-center gap-2">
      <Input type="email" placeholder="ایمیل" />
      <Button type="submit">جستجو</Button>
    </div>
  );
}
