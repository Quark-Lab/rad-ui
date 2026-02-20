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
import { UploadCloud } from "lucide-react";

export const code = `import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { UploadCloud } from "lucide-react";

export default function OutlineEmpty() {
  return (
    <Empty className="border rounded-lg p-8">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <UploadCloud className="h-12 w-12" />
        </EmptyMedia>
        <EmptyTitle>فضای ذخیره‌سازی ابری خالی</EmptyTitle>
        <EmptyDescription>
          فایل‌های خود را در فضای ذخیره‌سازی ابری آپلود کنید تا در هر کجا به آن‌ها دسترسی داشته باشید.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>آپلود فایل</Button>
      </EmptyContent>
    </Empty>
  );
}`;

export default function OutlineExample() {
  return (
    <Empty className="border rounded-lg p-8">
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <UploadCloud className="h-12 w-12" />
        </EmptyMedia>
        <EmptyTitle>فضای ذخیره‌سازی ابری خالی</EmptyTitle>
        <EmptyDescription>
          فایل‌های خود را در فضای ذخیره‌سازی ابری آپلود کنید تا در هر کجا به آن‌ها دسترسی داشته باشید.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>آپلود فایل</Button>
      </EmptyContent>
    </Empty>
  );
}
