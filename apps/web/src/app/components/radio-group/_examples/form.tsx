"use client";

import { useState } from "react";
import { RadioGroup, RadioGroupItem, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";

export default function FormExample() {
  const [notifyMethod, setNotifyMethod] = useState("email");

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Notify method:", notifyMethod);
      }}
    >
      <div className="space-y-3">
        <Label className="text-base font-semibold">
          چگونه می‌خواهید مطلع شوید؟
        </Label>
        <RadioGroup
          value={notifyMethod}
          onValueChange={setNotifyMethod}
          name="notifyMethod"
        >
          <div className="flex flex-row-reverse items-center gap-2">
            <RadioGroupItem value="email" id="email" />
            <div className="flex flex-col items-end">
              <Label htmlFor="email">ایمیل</Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان از طریق ایمیل
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center gap-2">
            <RadioGroupItem value="sms" id="sms" />
            <div className="flex flex-col items-end">
              <Label htmlFor="sms">پیامک</Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان از طریق پیامک
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center gap-2">
            <RadioGroupItem value="push" id="push" />
            <div className="flex flex-col items-end">
              <Label htmlFor="push">اعلان فشاری</Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان فشاری در مرورگر
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        ذخیره تنظیمات
      </button>
    </form>
  );
}
`;

export default function FormExample() {
  const [notifyMethod, setNotifyMethod] = useState("email");

  return (
    <form
      className="space-y-6"
      onSubmit={(e) => {
        e.preventDefault();
        console.log("Notify method:", notifyMethod);
      }}
    >
      <div className="space-y-3">
        <Label className="text-base font-semibold">
          چگونه می‌خواهید مطلع شوید؟
        </Label>
        <RadioGroup
          value={notifyMethod}
          onValueChange={setNotifyMethod}
          name="notifyMethod"
        >
          <div className="flex flex-row-reverse items-center gap-2">
            <RadioGroupItem value="email" id="email" />
            <div className="flex flex-col items-end">
              <Label htmlFor="email">ایمیل</Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان از طریق ایمیل
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center gap-2">
            <RadioGroupItem value="sms" id="sms" />
            <div className="flex flex-col items-end">
              <Label htmlFor="sms">پیامک</Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان از طریق پیامک
              </p>
            </div>
          </div>
          <div className="flex flex-row-reverse items-center gap-2">
            <RadioGroupItem value="push" id="push" />
            <div className="flex flex-col items-end">
              <Label htmlFor="push">اعلان فشاری</Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان فشاری در مرورگر
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
      <button
        type="submit"
        className="px-4 py-2 bg-primary text-primary-foreground rounded-md hover:bg-primary/90 transition-colors"
      >
        ذخیره تنظیمات
      </button>
    </form>
  );
}
