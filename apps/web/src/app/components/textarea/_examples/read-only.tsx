"use client";

import { Textarea, Label } from "@/registry/web/ui";

export const code = `import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";

export default function ReadOnlyExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="readonly">اطلاعات</Label>
      <Textarea
        id="readonly"
        readOnly
        value="این متن فقط خواندنی است و نمی‌توان آن را ویرایش کرد. برای نمایش اطلاعات ثابت استفاده می‌شود."
      />
    </div>
  );
}
`;

export default function ReadOnlyExample() {
  return (
    <div className="space-y-2">
      <Label htmlFor="readonly">اطلاعات</Label>
      <Textarea
        id="readonly"
        readOnly
        value="این متن فقط خواندنی است و نمی‌توان آن را ویرایش کرد. برای نمایش اطلاعات ثابت استفاده می‌شود."
      />
    </div>
  );
}
