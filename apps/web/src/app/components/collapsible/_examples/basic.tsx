"use client";

import { Button, Card, CardContent } from "@/registry/web/ui";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/web/ui";

export const code = `import { Button, Card, CardContent } from "@/components/ui/card";
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function BasicCollapsibleExample() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent className="p-2">
        <Collapsible className="w-full rounded-md border border-border data-[state=open]:bg-muted">
          <CollapsibleTrigger className="group flex w-full items-center justify-between px-3 py-2 text-sm font-medium">
            جزئیات محصول
            <span className="ms-auto text-xs text-muted-foreground group-data-[state=open]:rotate-180">
              ▼
            </span>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 border-t border-border px-3 pb-3 pt-2 text-sm text-muted-foreground data-[state=closed]:border-t-0 data-[state=closed]:p-0">
            <div>
              این بخش می‌تواند برای نمایش توضیحات تکمیلی محصول باز و بسته شود.
            </div>
            <Button size="sm">بیشتر بدانید</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
`;

export default function BasicCollapsibleExample() {
  return (
    <Card className="mx-auto w-full max-w-sm">
      <CardContent className="p-2">
        <Collapsible className="w-full rounded-md border border-border data-[state=open]:bg-muted">
          <CollapsibleTrigger className="group flex w-full items-center justify-between px-3 py-2 text-sm font-medium">
            جزئیات محصول
            <span className="ms-auto text-xs text-muted-foreground group-data-[state=open]:rotate-180">
              ▼
            </span>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 border-t border-border px-3 pb-3 pt-2 text-sm text-muted-foreground data-[state=closed]:border-t-0 data-[state=closed]:p-0">
            <div>
              این بخش می‌تواند برای نمایش توضیحات تکمیلی محصول باز و بسته شود.
            </div>
            <Button size="sm">بیشتر بدانید</Button>
          </CollapsibleContent>
        </Collapsible>
      </CardContent>
    </Card>
  );
}
