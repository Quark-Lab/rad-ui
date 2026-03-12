"use client";

import * as React from "react";

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/registry/web/ui";

export const code = `import * as React from "react";

import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@/components/ui/collapsible";

export default function ControlledCollapsibleExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex w-full max-w-sm flex-col items-stretch gap-3">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "بستن جزئیات" : "نمایش جزئیات"}
      </Button>

      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="space-y-2 w-full"
      >
        <CollapsibleTrigger className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          تغییر وضعیت از داخل کامپوننت
        </CollapsibleTrigger>
        <CollapsibleContent className="text-sm text-muted-foreground">
          این نمونه نشان می‌دهد چگونه می‌توانید وضعیت باز/بسته را به صورت
          کنترل‌شده مدیریت کنید.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}
`;

export default function ControlledCollapsibleExample() {
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex w-full max-w-sm flex-col items-stretch gap-3">
      <Button
        variant="outline"
        className="w-full"
        onClick={() => setOpen((prev) => !prev)}
      >
        {open ? "بستن جزئیات" : "نمایش جزئیات"}
      </Button>

      <Collapsible
        open={open}
        onOpenChange={setOpen}
        className="space-y-2 w-full"
      >
        <CollapsibleTrigger className="text-sm font-medium text-primary underline-offset-4 hover:underline">
          تغییر وضعیت از داخل کامپوننت
        </CollapsibleTrigger>
        <CollapsibleContent className="text-sm text-muted-foreground">
          این نمونه نشان می‌دهد چگونه می‌توانید وضعیت باز/بسته را به صورت
          کنترل‌شده مدیریت کنید.
        </CollapsibleContent>
      </Collapsible>
    </div>
  );
}

