"use client";

import { Input, Label } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function GridExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="grid-first-name">نام</Label>
        <Input id="grid-first-name" placeholder="نام" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="grid-last-name">نام خانوادگی</Label>
        <Input id="grid-last-name" placeholder="نام خانوادگی" />
      </div>
    </div>
  );
}
`;

export default function GridExample() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
      <div className="space-y-2">
        <Label htmlFor="grid-first-name">نام</Label>
        <Input id="grid-first-name" placeholder="نام" />
      </div>
      <div className="space-y-2">
        <Label htmlFor="grid-last-name">نام خانوادگی</Label>
        <Input id="grid-last-name" placeholder="نام خانوادگی" />
      </div>
    </div>
  );
}
