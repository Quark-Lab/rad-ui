"use client";

import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/registry/web/ui";

export const code = `import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export default function ProductPreviewExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer underline decoration-dotted">
          هدفون بی‌سیم
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex flex-col gap-3">
          <div className="aspect-video rounded-md bg-muted" />
          <div>
            <h4 className="font-semibold">هدفون بی‌سیم پرو</h4>
            <p className="text-sm text-muted-foreground">
              کیفیت صدای فوق‌العاده با نویز کنسلینگ فعال
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold">۲,۵۰۰,۰۰۰ تومان</span>
            <span className="text-xs text-green-600">موجود</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
`;

export default function ProductPreviewExample() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <span className="cursor-pointer underline decoration-dotted">
          هدفون بی‌سیم
        </span>
      </HoverCardTrigger>
      <HoverCardContent className="w-72">
        <div className="flex flex-col gap-3">
          <div className="aspect-video rounded-md bg-muted" />
          <div>
            <h4 className="font-semibold">هدفون بی‌سیم پرو</h4>
            <p className="text-sm text-muted-foreground">
              کیفیت صدای فوق‌العاده با نویز کنسلینگ فعال
            </p>
          </div>
          <div className="flex items-center justify-between">
            <span className="font-bold">۲,۵۰۰,۰۰۰ تومان</span>
            <span className="text-xs text-green-600">موجود</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
