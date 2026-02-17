"use client";

import { Input, Label } from "@/registry/web/ui";

export const code = `import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function FileInputExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="picture">تصویر</Label>
        <Input id="picture" type="file" />
        <p className="text-sm text-muted-foreground">
          یک تصویر برای آپلود انتخاب کنید.
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="file-size">آپلود تصویر (حداکثر ۲ مگابایت)</Label>
        <Input
          id="file-size"
          type="file"
          maxFileSize={2 * 1024 * 1024}
          acceptFormats={[".png", ".jpg", ".jpeg", ".webp"]}
          showError
        />
      </div>
    </div>
  );
}
`;

export default function FileInputExample() {
  return (
    <div className="space-y-6">
      <div className="space-y-2">
        <Label htmlFor="picture">تصویر</Label>
        <Input id="picture" type="file" />
        <p className="text-sm text-muted-foreground">
          یک تصویر برای آپلود انتخاب کنید.
        </p>
      </div>
      
      <div className="space-y-2">
        <Label htmlFor="file-size">آپلود تصویر (حداکثر ۲ مگابایت)</Label>
        <Input
          id="file-size"
          type="file"
          maxFileSize={2 * 1024 * 1024}
          acceptFormats={[".png", ".jpg", ".jpeg", ".webp"]}
          showError
        />
      </div>
    </div>
  );
}
