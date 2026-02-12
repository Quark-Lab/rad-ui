"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "./lib/utils";
import { Button } from "./button";
import { Input } from "./input";
import { Textarea } from "./textarea";

// ---------------------------------------------------------------------------
// InputGroup
// ---------------------------------------------------------------------------

const InputGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="input-group"
    className={cn(
      "group/input-group flex min-w-0 items-stretch rounded-md border border-input shadow-sm",
      "focus-within:ring-1 focus-within:ring-ring",
      "data-[disabled=true]:opacity-50",
      className
    )}
    {...props}
  />
));
InputGroup.displayName = "InputGroup";

// ---------------------------------------------------------------------------
// InputGroupAddon
// ---------------------------------------------------------------------------

const inputGroupAddonVariants = cva(
  "text-muted-foreground flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium select-none [&>svg:not([class*='size-'])]:size-4 group-data-[disabled=true]/input-group:opacity-50",
  {
    variants: {
      align: {
        "inline-start":
          "order-first ps-3 has-[>button]:ms-[-0.45rem] has-[>kbd]:ms-[-0.35rem]",
        "inline-end":
          "order-last pe-3 has-[>button]:me-[-0.45rem] has-[>kbd]:me-[-0.35rem]",
        "block-start":
          "order-first w-full justify-start px-3 pt-3 [.border-b]:pb-3 group-has-[>input]/input-group:pt-2.5",
        "block-end":
          "order-last w-full justify-start px-3 pb-3 [.border-t]:pt-3 group-has-[>input]/input-group:pb-2.5",
      },
    },
    defaultVariants: {
      align: "inline-start",
    },
  }
);

export interface InputGroupAddonProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof inputGroupAddonVariants> {}

const InputGroupAddon = React.forwardRef<HTMLDivElement, InputGroupAddonProps>(
  ({ className, align = "inline-start", ...props }, ref) => (
    <div
      ref={ref}
      data-slot="input-group-addon"
      data-align={align}
      className={cn(inputGroupAddonVariants({ align }), className)}
      onClick={(e) => {
        if ((e.target as HTMLElement).closest("button")) {
          return;
        }
        e.currentTarget.parentElement
          ?.querySelector<
            HTMLInputElement | HTMLTextAreaElement
          >("input, textarea")
          ?.focus();
      }}
      {...props}
    />
  )
);
InputGroupAddon.displayName = "InputGroupAddon";

// ---------------------------------------------------------------------------
// InputGroupButton
// ---------------------------------------------------------------------------

const inputGroupButtonVariants = cva(
  "text-sm shadow-none flex gap-2 items-center",
  {
    variants: {
      size: {
        xs: "h-6 gap-1 px-2 rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-3.5 has-[>svg]:px-2",
        sm: "h-8 px-2.5 gap-1.5 rounded-md has-[>svg]:px-2.5",
        "icon-xs":
          "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
        "icon-sm": "size-8 p-0 has-[>svg]:p-0",
      },
    },
    defaultVariants: {
      size: "xs",
    },
  }
);

export interface InputGroupButtonProps
  extends
    Omit<React.ComponentPropsWithRef<typeof Button>, "size">,
    VariantProps<typeof inputGroupButtonVariants> {}

const InputGroupButton = React.forwardRef<
  HTMLButtonElement,
  InputGroupButtonProps
>(
  (
    { className, type = "button", variant = "ghost", size = "xs", ...props },
    ref
  ) => (
    <Button
      ref={ref}
      type={type}
      variant={variant}
      className={cn(inputGroupButtonVariants({ size }), className)}
      {...props}
    />
  )
);
InputGroupButton.displayName = "InputGroupButton";

// ---------------------------------------------------------------------------
// InputGroupText
// ---------------------------------------------------------------------------

const InputGroupText = React.forwardRef<
  HTMLSpanElement,
  React.HTMLAttributes<HTMLSpanElement>
>(({ className, ...props }, ref) => (
  <span
    ref={ref}
    data-slot="input-group-text"
    className={cn("text-muted-foreground text-sm", className)}
    {...props}
  />
));
InputGroupText.displayName = "InputGroupText";

// ---------------------------------------------------------------------------
// InputGroupInput
// ---------------------------------------------------------------------------

type InputGroupInputProps = Omit<
  React.ComponentPropsWithRef<typeof Input>,
  "ref"
>;

const InputGroupInput = React.forwardRef<
  HTMLInputElement,
  InputGroupInputProps
>(({ className, ...props }, ref) => (
  <Input
    ref={ref}
    data-slot="input-group-control"
    className={cn(
      "border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none",
      "group-has-[[data-align=inline-start]]/input-group:rounded-e-md",
      "group-has-[[data-align=inline-end]]/input-group:rounded-s-md",
      className
    )}
    {...props}
  />
));
InputGroupInput.displayName = "InputGroupInput";

// ---------------------------------------------------------------------------
// InputGroupTextarea
// ---------------------------------------------------------------------------

const InputGroupTextarea = React.forwardRef<
  HTMLTextAreaElement,
  React.TextareaHTMLAttributes<HTMLTextAreaElement>
>(({ className, ...props }, ref) => (
  <Textarea
    ref={ref}
    data-slot="input-group-control"
    className={cn(
      "border-0 shadow-none focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none min-h-0",
      className
    )}
    {...props}
  />
));
InputGroupTextarea.displayName = "InputGroupTextarea";

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  InputGroup,
  InputGroupAddon,
  inputGroupAddonVariants,
  InputGroupButton,
  inputGroupButtonVariants,
  InputGroupText,
  InputGroupInput,
  InputGroupTextarea,
};
