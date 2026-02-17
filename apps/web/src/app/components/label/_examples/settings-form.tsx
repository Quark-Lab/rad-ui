"use client";

import { Label } from "@/registry/web/ui";

export const code = `import { Label } from "@/components/ui/label";

export default function SettingsFormExample() {
  return (
    <div className="max-w-md space-y-6">
      <div>
        <h4 className="font-semibold mb-3">اعلان‌ها</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2 space-x-reverse">
            <input
              type="checkbox"
              id="email-notifications"
              defaultChecked
              className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Label
              htmlFor="email-notifications"
              className="cursor-pointer"
            >
              اعلان‌های ایمیل
            </Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <input
              type="checkbox"
              id="push-notifications"
              className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Label
              htmlFor="push-notifications"
              className="cursor-pointer"
            >
              اعلان‌های Push
            </Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <input
              type="checkbox"
              id="sms-notifications"
              className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Label
              htmlFor="sms-notifications"
              className="cursor-pointer"
            >
              اعلان‌های پیامکی
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
`;

export default function SettingsFormExample() {
  return (
    <div className="max-w-md space-y-6">
      <div>
        <h4 className="font-semibold mb-3">اعلان‌ها</h4>
        <div className="space-y-3">
          <div className="flex items-center space-x-2 space-x-reverse">
            <input
              type="checkbox"
              id="email-notifications"
              defaultChecked
              className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Label
              htmlFor="email-notifications"
              className="cursor-pointer"
            >
              اعلان‌های ایمیل
            </Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <input
              type="checkbox"
              id="push-notifications"
              className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Label
              htmlFor="push-notifications"
              className="cursor-pointer"
            >
              اعلان‌های Push
            </Label>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <input
              type="checkbox"
              id="sms-notifications"
              className="h-4 w-4 rounded border-border text-primary focus:ring-2 focus:ring-ring focus:ring-offset-2"
            />
            <Label
              htmlFor="sms-notifications"
              className="cursor-pointer"
            >
              اعلان‌های پیامکی
            </Label>
          </div>
        </div>
      </div>
    </div>
  );
}
