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

export default function BasicTooltip() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">هاور کنید</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>افزودن به کتابخانه</p>
      </TooltipContent>
    </Tooltip>
  );
}`;

export default function BasicExample() {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button variant="outline">هاور کنید</Button>
      </TooltipTrigger>
      <TooltipContent>
        <p>افزودن به کتابخانه</p>
      </TooltipContent>
    </Tooltip>
  );
}
