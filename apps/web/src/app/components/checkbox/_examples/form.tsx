"use client";

import { useState } from "react";
import { Checkbox, Label } from "@/registry/web/ui";

export const code = `import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

export default function FormExample() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">تنظیمات اعلان‌ها</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox
              id="email-notif"
              checked={notifications.email}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  email: checked as boolean,
                }))
              }
            />
            <div className="flex flex-col">
              <Label htmlFor="email-notif" className="cursor-pointer">
                اعلان‌های ایمیل
              </Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان‌ها از طریق ایمیل
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox
              id="sms-notif"
              checked={notifications.sms}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  sms: checked as boolean,
                }))
              }
            />
            <div className="flex flex-col">
              <Label htmlFor="sms-notif" className="cursor-pointer">
                اعلان‌های پیامکی
              </Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان‌ها از طریق پیامک
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox
              id="push-notif"
              checked={notifications.push}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  push: checked as boolean,
                }))
              }
            />
            <div className="flex flex-col">
              <Label htmlFor="push-notif" className="cursor-pointer">
                اعلان‌های فشاری
              </Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان‌های فشاری در مرورگر
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 border-t">
        <h4 className="text-sm font-semibold mb-2">تنظیمات فعلی:</h4>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>ایمیل: {notifications.email ? "فعال" : "غیرفعال"}</p>
          <p>پیامک: {notifications.sms ? "فعال" : "غیرفعال"}</p>
          <p>اعلان فشاری: {notifications.push ? "فعال" : "غیرفعال"}</p>
        </div>
      </div>
    </div>
  );
}
`;

export default function FormExample() {
  const [notifications, setNotifications] = useState({
    email: true,
    sms: false,
    push: true,
  });

  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">تنظیمات اعلان‌ها</h3>
        <div className="space-y-4">
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox
              id="email-notif"
              checked={notifications.email}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  email: checked as boolean,
                }))
              }
            />
            <div className="flex flex-col">
              <Label htmlFor="email-notif" className="cursor-pointer">
                اعلان‌های ایمیل
              </Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان‌ها از طریق ایمیل
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox
              id="sms-notif"
              checked={notifications.sms}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  sms: checked as boolean,
                }))
              }
            />
            <div className="flex flex-col">
              <Label htmlFor="sms-notif" className="cursor-pointer">
                اعلان‌های پیامکی
              </Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان‌ها از طریق پیامک
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-2 space-x-reverse">
            <Checkbox
              id="push-notif"
              checked={notifications.push}
              onCheckedChange={(checked) =>
                setNotifications((prev) => ({
                  ...prev,
                  push: checked as boolean,
                }))
              }
            />
            <div className="flex flex-col">
              <Label htmlFor="push-notif" className="cursor-pointer">
                اعلان‌های فشاری
              </Label>
              <p className="text-sm text-muted-foreground">
                دریافت اعلان‌های فشاری در مرورگر
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="pt-4 border-t">
        <h4 className="text-sm font-semibold mb-2">تنظیمات فعلی:</h4>
        <div className="text-sm text-muted-foreground space-y-1">
          <p>ایمیل: {notifications.email ? "فعال" : "غیرفعال"}</p>
          <p>پیامک: {notifications.sms ? "فعال" : "غیرفعال"}</p>
          <p>اعلان فشاری: {notifications.push ? "فعال" : "غیرفعال"}</p>
        </div>
      </div>
    </div>
  );
}
