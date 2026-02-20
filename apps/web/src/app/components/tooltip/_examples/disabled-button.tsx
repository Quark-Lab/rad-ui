"use client";

import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
  Button,
} from "@/registry/web/ui";

export const code = `import {
  Tooltip,
  TooltipContent,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { Button } from "@/components/ui/button";

export default function DisabledButtonTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-block">
          <Button disabled>غیرفعال</Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>این دکمه غیرفعال است</p>
      </TooltipContent>
    </Tooltip>
  );
}`;

export default function DisabledButtonExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <span className="inline-block">
          <Button disabled>غیرفعال</Button>
        </span>
      </TooltipTrigger>
      <TooltipContent>
        <p>این دکمه غیرفعال است</p>
      </TooltipContent>
    </Tooltip>
  );
}
