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

export default function CustomDelayExample() {
  return (
    <HoverCard openDelay={200} closeDelay={300}>
      <HoverCardTrigger asChild>
        <Button variant="outline">هاور کنید</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <p>این کارت با تاخیر ۲۰۰ms باز و با تاخیر ۳۰۰ms بسته می‌شود</p>
      </HoverCardContent>
    </HoverCard>
  );
}
`;

export default function CustomDelayExample() {
  return (
    <HoverCard openDelay={200} closeDelay={300}>
      <HoverCardTrigger asChild>
        <Button variant="outline">هاور کنید</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <p>این کارت با تاخیر ۲۰۰ms باز و با تاخیر ۳۰۰ms بسته می‌شود</p>
      </HoverCardContent>
    </HoverCard>
  );
}
