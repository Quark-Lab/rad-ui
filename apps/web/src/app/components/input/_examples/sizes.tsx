"use client";

import { Input } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";

export default function SizesExample() {
  return (
    <div className="space-y-6">
      <Input size="sm" placeholder="ورودی کوچک..." />
      <Input size="md" placeholder="ورودی متوسط..." />
      <Input size="lg" placeholder="ورودی بزرگ..." />
    </div>
  );
}
`;

export default function SizesExample() {
  return (
    <div className="space-y-6">
      <Input size="sm" placeholder="ورودی کوچک..." />
      <Input size="md" placeholder="ورودی متوسط..." />
      <Input size="lg" placeholder="ورودی بزرگ..." />
    </div>
  );
}
