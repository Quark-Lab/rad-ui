"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Button,
  Kbd,
} from "@/registry/web/ui";

export const code = `import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";
import { Kbd } from "@/components/ui/kbd";

export default function WithKbdTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          جستجو
          <Kbd className="ms-2">Ctrl</Kbd>
          <Kbd>K</Kbd>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>جستجوی سریع</p>
      </TooltipContent>
    </Tooltip>
  );
}`;

export default function WithKbdExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">
          جستجو
          <Kbd className="ms-2">Ctrl</Kbd>
          <Kbd>K</Kbd>
        </Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>جستجوی سریع</p>
      </TooltipContent>
    </Tooltip>
  );
}
