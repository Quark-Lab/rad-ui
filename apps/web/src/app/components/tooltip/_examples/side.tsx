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

export default function SideTooltip() {
  return (
    <div className="flex flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">چپ</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>نمایش از سمت چپ</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">بالا</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>نمایش از بالا</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">پایین</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>نمایش از پایین</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">راست</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>نمایش از سمت راست</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}`;

export default function SideExample() {
  return (
    <div className="flex flex-wrap gap-4">
      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">چپ</Button>
        </TooltipTrigger>
        <TooltipContent side="left">
          <p>نمایش از سمت چپ</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">بالا</Button>
        </TooltipTrigger>
        <TooltipContent side="top">
          <p>نمایش از بالا</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">پایین</Button>
        </TooltipTrigger>
        <TooltipContent side="bottom">
          <p>نمایش از پایین</p>
        </TooltipContent>
      </Tooltip>

      <Tooltip>
        <TooltipTrigger asChild>
          <Button variant="outline">راست</Button>
        </TooltipTrigger>
        <TooltipContent side="right">
          <p>نمایش از سمت راست</p>
        </TooltipContent>
      </Tooltip>
    </div>
  );
}
