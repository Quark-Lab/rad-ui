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

export default function AvatarGroupEmpty() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2">
            <Avatar className="h-12 w-12 border-2 border-background">
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12 border-2 border-background">
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12 border-2 border-background">
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>هیچ عضو تیمی وجود ندارد</EmptyTitle>
        <EmptyDescription>
          اعضای تیم خود را دعوت کنید تا در این پروژه همکاری کنند.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>دعوت اعضا</Button>
      </EmptyContent>
    </Empty>
  );
}`;

export default function AvatarGroupExample() {
  return (
    <Empty>
      <EmptyHeader>
        <EmptyMedia>
          <div className="flex -space-x-2">
            <Avatar className="h-12 w-12 border-2 border-background">
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12 border-2 border-background">
              <AvatarFallback>LR</AvatarFallback>
            </Avatar>
            <Avatar className="h-12 w-12 border-2 border-background">
              <AvatarFallback>ER</AvatarFallback>
            </Avatar>
          </div>
        </EmptyMedia>
        <EmptyTitle>هیچ عضو تیمی وجود ندارد</EmptyTitle>
        <EmptyDescription>
          اعضای تیم خود را دعوت کنید تا در این پروژه همکاری کنند.
        </EmptyDescription>
      </EmptyHeader>
      <EmptyContent>
        <Button>دعوت اعضا</Button>
      </EmptyContent>
    </Empty>
  );
}
