import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { type VariantProps, cva } from "class-variance-authority";

import { cn } from "../../lib/utils";

const buttonGroupVariants = cva(
  "inline-flex items-stretch gap-0 rounded-md",
  {
    variants: {
      orientation: {
        horizontal: "flex-row",
        vertical: "flex-col",
      },
    },
    defaultVariants: {
      orientation: "horizontal",
    },
  }
);

export interface ButtonGroupProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupVariants> {}

const ButtonGroup = React.forwardRef<HTMLDivElement, ButtonGroupProps>(
  ({ className, orientation, ...props }, ref) => {
    return (
      <div
        ref={ref}
        role="group"
        className={cn(buttonGroupVariants({ orientation }), className)}
        {...props}
      />
    );
  }
);

ButtonGroup.displayName = "ButtonGroup";

const buttonGroupSeparatorVariants = cva("bg-border", {
  variants: {
    orientation: {
      horizontal: "mx-px my-1 w-px self-stretch",
      vertical: "my-px mx-1 h-px w-full",
    },
  },
  defaultVariants: {
    orientation: "vertical",
  },
});

export interface ButtonGroupSeparatorProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof buttonGroupSeparatorVariants> {}

const ButtonGroupSeparator = React.forwardRef<
  HTMLDivElement,
  ButtonGroupSeparatorProps
>(({ className, orientation, ...props }, ref) => {
  return (
    <div
      ref={ref}
      aria-hidden="true"
      className={cn(
        buttonGroupSeparatorVariants({ orientation }),
        className
      )}
      {...props}
    />
  );
});

ButtonGroupSeparator.displayName = "ButtonGroupSeparator";

const buttonGroupTextVariants = cva(
  "inline-flex items-center text-sm text-muted-foreground"
);

export interface ButtonGroupTextProps
  extends React.HTMLAttributes<HTMLSpanElement>,
    VariantProps<typeof buttonGroupTextVariants> {
  asChild?: boolean;
}

const ButtonGroupText = React.forwardRef<HTMLSpanElement, ButtonGroupTextProps>(
  ({ asChild, className, ...props }, ref) => {
    const Comp = asChild ? Slot : "span";

    return (
      <Comp
        ref={ref}
        className={cn(buttonGroupTextVariants(), className)}
        {...props}
      />
    );
  }
);

ButtonGroupText.displayName = "ButtonGroupText";

export { ButtonGroup, ButtonGroupSeparator, ButtonGroupText };

