"use client";

import { Switch, Label } from "@/registry/web/ui";

export const code = `import { Switch } from "@/components/ui/switch";
import { Label } from "@/components/ui/label";

export default function SettingsExample() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">اعلان‌ها</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>پیام‌های جدید</Label>
              <p className="text-sm text-muted-foreground">
                نمایش اعلان هنگام دریافت پیام جدید
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>اعلان‌های دسکتاپ</Label>
              <p className="text-sm text-muted-foreground">
                نمایش اعلان‌ها روی دسکتاپ
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>صدای اعلان</Label>
              <p className="text-sm text-muted-foreground">
                پخش صدا هنگام دریافت اعلان
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="text-lg font-semibold mb-4">حریم خصوصی</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>نمایش وضعیت آنلاین</Label>
              <p className="text-sm text-muted-foreground">
                نمایش وضعیت حضور شما به دیگران
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>اشتراک‌گذاری موقعیت</Label>
              <p className="text-sm text-muted-foreground">
                به اشتراک گذاشتن موقعیت مکانی شما
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
}
`;

export default function SettingsExample() {
  return (
    <div className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold mb-4">اعلان‌ها</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>پیام‌های جدید</Label>
              <p className="text-sm text-muted-foreground">
                نمایش اعلان هنگام دریافت پیام جدید
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>اعلان‌های دسکتاپ</Label>
              <p className="text-sm text-muted-foreground">
                نمایش اعلان‌ها روی دسکتاپ
              </p>
            </div>
            <Switch />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>صدای اعلان</Label>
              <p className="text-sm text-muted-foreground">
                پخش صدا هنگام دریافت اعلان
              </p>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>

      <div className="border-t border-border pt-6">
        <h3 className="text-lg font-semibold mb-4">حریم خصوصی</h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>نمایش وضعیت آنلاین</Label>
              <p className="text-sm text-muted-foreground">
                نمایش وضعیت حضور شما به دیگران
              </p>
            </div>
            <Switch defaultChecked />
          </div>

          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <Label>اشتراک‌گذاری موقعیت</Label>
              <p className="text-sm text-muted-foreground">
                به اشتراک گذاشتن موقعیت مکانی شما
              </p>
            </div>
            <Switch />
          </div>
        </div>
      </div>
    </div>
  );
}
