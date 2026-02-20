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
import { FolderOpen } from "lucide-react";

export const code = `import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { FolderOpen } from "lucide-react";

export default function BasicEmpty() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen className="h-12 w-12" />
        </EmptyMedia>
        <EmptyTitle>هنوز پروژه‌ای ایجاد نشده</EmptyTitle>
        <EmptyDescription>
          شما هنوز پروژه‌ای ایجاد نکرده‌اید. برای شروع اولین پروژه خود را ایجاد کنید.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>ایجاد پروژه</Button>
      </EmptyContent>
    </Empty>
  );
}`;

export default function BasicExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <FolderOpen className="h-12 w-12" />
        </EmptyMedia>
        <EmptyTitle>هنوز پروژه‌ای ایجاد نشده</EmptyTitle>
        <EmptyDescription>
          شما هنوز پروژه‌ای ایجاد نکرده‌اید. برای شروع اولین پروژه خود را ایجاد کنید.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>ایجاد پروژه</Button>
      </EmptyContent>
    </Empty>
  );
}
