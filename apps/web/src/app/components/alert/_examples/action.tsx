"use client";

import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/registry/web/ui";
import { Button } from "@/registry/web/ui";
import { Info } from "lucide-react";

export const code = `import {
  Alert,
  AlertAction,
  AlertDescription,
  AlertTitle,
} from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Info } from "lucide-react";

export default function AlertWithAction() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>حالت تاریک در دسترس است</AlertTitle>
      <AlertDescription>
        می‌توانید آن را در تنظیمات پروفایل خود فعال کنید.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="sm">فعال‌سازی</Button>
      </AlertAction>
    </Alert>
  );
}`;

export default function ActionExample() {
  return (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>حالت تاریک در دسترس است</AlertTitle>
      <AlertDescription>
        می‌توانید آن را در تنظیمات پروفایل خود فعال کنید.
      </AlertDescription>
      <AlertAction>
        <Button variant="outline" size="sm">
          فعال‌سازی
        </Button>
      </AlertAction>
    </Alert>
  );
}
