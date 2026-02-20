"use client";

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  Button,
} from "@/registry/web/ui";
import { Bell } from "lucide-react";

export const code = `import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Bell } from "lucide-react";

export default function BackgroundEmpty() {
  return (
    <Empty className="bg-muted/50 rounded-lg p-8">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Bell className="h-12 w-12" />
        </EmptyMedia>
        <EmptyTitle>هیچ اعلانی وجود ندارد</EmptyTitle>
        <EmptyDescription>
          شما همه چیز را به‌روز کرده‌اید. اعلان‌های جدید در اینجا نمایش داده می‌شوند.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">بروزرسانی</Button>
      </EmptyContent>
    </Empty>
  );
}`;

export default function BackgroundExample() {
  return (
    <Empty className="bg-muted/50 rounded-lg p-8">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Bell className="h-12 w-12" />
        </EmptyMedia>
        <EmptyTitle>هیچ اعلانی وجود ندارد</EmptyTitle>
        <EmptyDescription>
          شما همه چیز را به‌روز کرده‌اید. اعلان‌های جدید در اینجا نمایش داده می‌شوند.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">بروزرسانی</Button>
      </EmptyContent>
    </Empty>
  );
}
