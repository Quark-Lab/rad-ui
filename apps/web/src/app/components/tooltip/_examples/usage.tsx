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

export default function MyComponent() {
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

export default function UsageExample() {
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
