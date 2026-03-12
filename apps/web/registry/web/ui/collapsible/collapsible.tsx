"use client";

import * as React from "react";
import * as CollapsiblePrimitive from "@radix-ui/react-collapsible";

import { cn } from "../../lib/utils";

const CollapsibleRoot = CollapsiblePrimitive.Root;

const CollapsibleTrigger = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Trigger>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Trigger>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Trigger
    ref={ref}
    className={cn(
      "flex cursor-pointer items-center gap-2 text-sm font-medium",
      "focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
      "disabled:pointer-events-none disabled:opacity-50",
      className
    )}
    {...props}
  />
));
CollapsibleTrigger.displayName = CollapsiblePrimitive.Trigger.displayName;

const CollapsibleContent = React.forwardRef<
  React.ElementRef<typeof CollapsiblePrimitive.Content>,
  React.ComponentPropsWithoutRef<typeof CollapsiblePrimitive.Content>
>(({ className, ...props }, ref) => (
  <CollapsiblePrimitive.Content
    ref={ref}
    className={cn(
      "overflow-hidden data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
      className
    )}
    {...props}
  />
));
CollapsibleContent.displayName = CollapsiblePrimitive.Content.displayName;

type CollapsibleProps = React.ComponentPropsWithoutRef<typeof CollapsibleRoot>;
type CollapsibleTriggerProps = React.ComponentPropsWithoutRef<
  typeof CollapsibleTrigger
>;
type CollapsibleContentProps = React.ComponentPropsWithoutRef<
  typeof CollapsibleContent
>;

const Collapsible = CollapsibleRoot;

export {
  Collapsible,
  CollapsibleTrigger,
  CollapsibleContent,
  type CollapsibleProps,
  type CollapsibleTriggerProps,
  type CollapsibleContentProps,
};

