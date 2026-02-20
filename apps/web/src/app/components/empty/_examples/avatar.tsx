"use client";

import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
  Button,
  Avatar,
  AvatarFallback,
} from "@/registry/web/ui";

export const code = `import {
  Empty,
  EmptyHeader,
  EmptyMedia,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
} from "@/components/ui/empty";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function AvatarEmpty() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <Avatar className="h-16 w-16">
            <AvatarFallback>کاربر</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>کاربر آفلاین است</EmptyTitle>
        <EmptyDescription>
          این کاربر در حال حاضر آفلاین است. می‌توانید پیامی برای اطلاع‌رسانی به او بگذارید یا بعداً دوباره تلاش کنید.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">گذاشتن پیام</Button>
      </EmptyContent>
    </Empty>
  );
}`;

export default function AvatarExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <Avatar className="h-16 w-16">
            <AvatarFallback>کاربر</AvatarFallback>
          </Avatar>
        </EmptyMedia>
        <EmptyTitle>کاربر آفلاین است</EmptyTitle>
        <EmptyDescription>
          این کاربر در حال حاضر آفلاین است. می‌توانید پیامی برای اطلاع‌رسانی به او بگذارید یا بعداً دوباره تلاش کنید.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button variant="outline">گذاشتن پیام</Button>
      </EmptyContent>
    </Empty>
  );
}
