"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/web/ui";
import { Button } from "@/registry/web/ui";

export const code = `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";
import { Button } from "@/components/ui/button";

export default function BasicExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@radui</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col gap-2">
          <div className="font-semibold">@radui</div>
          <p className="text-sm text-muted-foreground">
            کتابخانه کامپوننت RTL-first با تم‌های ایرانی
          </p>
          <div className="text-xs text-muted-foreground">
            عضویت: آذر ۱۴۰۳
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
`;

export default function BasicExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@radui</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex flex-col gap-2">
          <div className="font-semibold">@radui</div>
          <p className="text-sm text-muted-foreground">
            کتابخانه کامپوننت RTL-first با تم‌های ایرانی
          </p>
          <div className="text-xs text-muted-foreground">
            عضویت: آذر ۱۴۰۳
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
