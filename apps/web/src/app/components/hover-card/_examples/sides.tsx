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

const SIDES = ["top", "bottom", "left", "right"] as const;
const SIDE_LABELS: Record<(typeof SIDES)[number], string> = {
  top: "بالا",
  bottom: "پایین",
  left: "چپ",
  right: "راست",
};

export default function SidesExample() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {SIDES.map((side) => (
        <HoverCard key={side} openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="outline">{SIDE_LABELS[side]}</Button>
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">کارت پیش نمایش</h4>
              <p className="text-sm text-muted-foreground">
                این کارت در سمت {SIDE_LABELS[side]} نمایش داده می‌شود
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
`;

const SIDES = ["top", "bottom", "left", "right"] as const;
const SIDE_LABELS: Record<(typeof SIDES)[number], string> = {
  top: "بالا",
  bottom: "پایین",
  left: "چپ",
  right: "راست",
};

export default function SidesExample() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      {SIDES.map((side) => (
        <HoverCard key={side} openDelay={100} closeDelay={100}>
          <HoverCardTrigger asChild>
            <Button variant="outline">{SIDE_LABELS[side]}</Button>
          </HoverCardTrigger>
          <HoverCardContent side={side}>
            <div className="flex flex-col gap-1">
              <h4 className="font-medium">کارت پیش نمایش</h4>
              <p className="text-sm text-muted-foreground">
                این کارت در سمت {SIDE_LABELS[side]} نمایش داده می‌شود
              </p>
            </div>
          </HoverCardContent>
        </HoverCard>
      ))}
    </div>
  );
}
