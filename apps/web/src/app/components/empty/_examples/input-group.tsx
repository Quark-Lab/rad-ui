"use client";

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  InputGroup,
  InputGroupInput,
  InputGroupButton,
} from "@/registry/web/ui";
import { Search } from "lucide-react";

export const code = `import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import {
  InputGroup,
  InputGroupInput,
  InputGroupButton,
} from "@/components/ui/input-group";
import { Search } from "lucide-react";

export default function InputGroupEmpty() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Search className="h-12 w-12" />
        </EmptyMedia>
        <EmptyTitle>404 - صفحه یافت نشد</EmptyTitle>
        <EmptyDescription>
          صفحه‌ای که به دنبال آن هستید وجود ندارد. در زیر جستجو کنید.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="max-w-md">
          <InputGroupInput placeholder="جستجو..." />
          <InputGroupButton size="icon-sm">
            <Search className="h-4 w-4" />
          </InputGroupButton>
        </InputGroup>
        <p className="text-sm text-muted-foreground mt-4">
          نیاز به کمک دارید؟{" "}
          <a href="#" className="underline">
            با پشتیبانی تماس بگیرید
          </a>
        </p>
      </EmptyContent>
    </Empty>
  );
}`;

export default function InputGroupExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia variant="icon">
          <Search className="h-12 w-12" />
        </EmptyMedia>
        <EmptyTitle>404 - صفحه یافت نشد</EmptyTitle>
        <EmptyDescription>
          صفحه‌ای که به دنبال آن هستید وجود ندارد. در زیر جستجو کنید.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <InputGroup className="max-w-md">
          <InputGroupInput placeholder="جستجو..." />
          <InputGroupButton size="icon-sm">
            <Search className="h-4 w-4" />
          </InputGroupButton>
        </InputGroup>
        <p className="text-sm text-muted-foreground mt-4">
          نیاز به کمک دارید؟{" "}
          <a href="#" className="underline">
            با پشتیبانی تماس بگیرید
          </a>
        </p>
      </EmptyContent>
    </Empty>
  );
}
