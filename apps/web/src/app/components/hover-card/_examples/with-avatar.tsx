"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/web/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";
import { Button } from "@/registry/web/ui";

export const code = `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";

export default function WithAvatarExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@alikawosi</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold">علی کاوسی</h4>
            <p className="text-sm text-muted-foreground">
              توسعه‌دهنده فرانت‌اند
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>۱۲۳ دنبال‌کننده</span>
              <span>•</span>
              <span>۴۵ پروژه</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
`;

export default function WithAvatarExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@alikawosi</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>AK</AvatarFallback>
          </Avatar>
          <div className="flex flex-col gap-1">
            <h4 className="font-semibold">علی کاوسی</h4>
            <p className="text-sm text-muted-foreground">
              توسعه‌دهنده فرانت‌اند
            </p>
            <div className="flex items-center gap-2 text-xs text-muted-foreground">
              <span>۱۲۳ دنبال‌کننده</span>
              <span>•</span>
              <span>۴۵ پروژه</span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
