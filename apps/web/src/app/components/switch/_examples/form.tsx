"use client";

import { useState } from "react";
import { Switch, Label, Button } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function FormExample() {
  const [airplane, setAirplane] = useState(false);

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log("Form data:", Object.fromEntries(formData));
      }}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="form-airplane">حالت هواپیما</Label>
          <p className="text-sm text-muted-foreground">
            غیرفعال کردن تمام اتصالات بی‌سیم
          </p>
        </div>
        <Switch
          id="form-airplane"
          name="airplaneMode"
          checked={airplane}
          onCheckedChange={setAirplane}
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit">ذخیره تنظیمات</Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setAirplane(false);
            console.log("Settings reset");
          }}
        >
          بازنشانی
        </Button>
      </div>
    </form>
  );
}
`;

export default function FormExample() {
  const [airplane, setAirplane] = useState(false);

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        console.log("Form data:", Object.fromEntries(formData));
      }}
    >
      <div className="flex items-center justify-between">
        <div className="space-y-0.5">
          <Label htmlFor="form-airplane">حالت هواپیما</Label>
          <p className="text-sm text-muted-foreground">
            غیرفعال کردن تمام اتصالات بی‌سیم
          </p>
        </div>
        <Switch
          id="form-airplane"
          name="airplaneMode"
          checked={airplane}
          onCheckedChange={setAirplane}
        />
      </div>

      <div className="flex gap-4">
        <Button type="submit">ذخیره تنظیمات</Button>
        <Button
          type="button"
          variant="outline"
          onClick={() => {
            setAirplane(false);
            console.log("Settings reset");
          }}
        >
          بازنشانی
        </Button>
      </div>
    </form>
  );
}
