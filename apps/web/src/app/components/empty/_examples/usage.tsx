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
import { Package } from "lucide-react";

export const code = `import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Button } from "@/components/ui/button";
import { Package } from "lucide-react";

export default function MyComponent() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Package className="h-12 w-12" />
        </EmptyMedia>
        <EmptyTitle>هیچ داده‌ای وجود ندارد</EmptyTitle>
        <EmptyDescription>
          هیچ داده‌ای یافت نشد. برای شروع داده اضافه کنید.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>افزودن داده</Button>
      </EmptyContent>
    </Empty>
  );
}`;

export default function UsageExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Package className="h-12 w-12" />
        </EmptyMedia>
        <EmptyTitle>هیچ داده‌ای وجود ندارد</EmptyTitle>
        <EmptyDescription>
          هیچ داده‌ای یافت نشد. برای شروع داده اضافه کنید.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>افزودن داده</Button>
      </EmptyContent>
    </Empty>
  );
}
