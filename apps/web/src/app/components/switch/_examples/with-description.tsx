"use client";

import { useState } from "react";
import { Switch, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function WithDescriptionExample() {
  const [marketing, setMarketing] = useState(true);
  const [security, setSecurity] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="marketing">ایمیل‌های بازاریابی</Label>
          <p className="text-sm text-muted-foreground">
            دریافت ایمیل‌ها درباره محصولات جدید و پیشنهادات ویژه
          </p>
        </div>
        <Switch
          id="marketing"
          checked={marketing}
          onCheckedChange={setMarketing}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="security">اعلان‌های امنیتی</Label>
          <p className="text-sm text-muted-foreground">
            دریافت اعلان درباره فعالیت‌های مشکوک در حساب کاربری
          </p>
        </div>
        <Switch
          id="security"
          checked={security}
          onCheckedChange={setSecurity}
        />
      </div>
    </div>
  );
}
`;

export default function WithDescriptionExample() {
  const [marketing, setMarketing] = useState(true);
  const [security, setSecurity] = useState(false);

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="marketing">ایمیل‌های بازاریابی</Label>
          <p className="text-sm text-muted-foreground">
            دریافت ایمیل‌ها درباره محصولات جدید و پیشنهادات ویژه
          </p>
        </div>
        <Switch
          id="marketing"
          checked={marketing}
          onCheckedChange={setMarketing}
        />
      </div>

      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="security">اعلان‌های امنیتی</Label>
          <p className="text-sm text-muted-foreground">
            دریافت اعلان درباره فعالیت‌های مشکوک در حساب کاربری
          </p>
        </div>
        <Switch
          id="security"
          checked={security}
          onCheckedChange={setSecurity}
        />
      </div>
    </div>
  );
}
