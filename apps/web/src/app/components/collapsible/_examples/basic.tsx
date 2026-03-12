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
      <CardContent>
        <Collapsible className="rounded-md data-[state=open]:bg-muted">
          <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
            جزئیات محصول
            <span className="ms-auto text-xs text-muted-foreground group-data-[state=open]:rotate-180">
              ▼
            </span>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 px-3 pb-3 pt-1 text-sm text-muted-foreground">
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
      <CardContent>
        <Collapsible className="rounded-md data-[state=open]:bg-muted">
          <CollapsibleTrigger className="group flex w-full items-center justify-between rounded-md px-3 py-2 text-sm font-medium hover:bg-muted">
            جزئیات محصول
            <span className="ms-auto text-xs text-muted-foreground group-data-[state=open]:rotate-180">
              ▼
            </span>
          </CollapsibleTrigger>
          <CollapsibleContent className="flex flex-col items-start gap-2 px-3 pb-3 pt-1 text-sm text-muted-foreground">
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

