"use client";

import { Textarea, Label } from "@/registry/web/ui";

export const code = `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function WithLabelExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">پیام شما</Label>
      <Textarea id="message" placeholder="متن خود را وارد کنید..." />
    </div>
  );
}
`;

export default function WithLabelExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="message">پیام شما</Label>
      <Textarea id="message" placeholder="متن خود را وارد کنید..." />
    </div>
  );
}
