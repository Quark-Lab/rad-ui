"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/web/ui";
import { Avatar, AvatarFallback, AvatarImage } from "@/registry/web/ui";
import { Button } from "@/registry/web/ui";
import { CalendarDays } from "lucide-react";

export const code = `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { CalendarDays } from "lucide-react";

export default function UserProfileExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="h-auto p-0">
          @nextjs
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>NX</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              فریم‌ورک React – ساخته و نگهداری شده توسط @vercel
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="me-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                عضویت از آذر ۱۴۰۰
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
`;

export default function UserProfileExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link" className="h-auto p-0">
          @nextjs
        </Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between gap-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>NX</AvatarFallback>
          </Avatar>
          <div className="flex-1 space-y-1">
            <h4 className="text-sm font-semibold">@nextjs</h4>
            <p className="text-sm">
              فریم‌ورک React – ساخته و نگهداری شده توسط @vercel
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="me-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                عضویت از آذر ۱۴۰۰
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
