import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const emptyVariants = cva(
  "flex flex-col items-center justify-center text-center",
  {
    variants: {},
    defaultVariants: {},
  }
);

export interface EmptyProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyVariants> {}

const Empty = React.forwardRef<HTMLDivElement, EmptyProps>(
  ({ className, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(emptyVariants({ className }))}
        {...props}
      />
    );
  }
);

Empty.displayName = "Empty";

const EmptyHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("flex flex-col items-center gap-2", className)}
    {...props}
  />
));

EmptyHeader.displayName = "EmptyHeader";

const emptyMediaVariants = cva("flex items-center justify-center", {
  variants: {
    variant: {
      default: "",
      icon: "text-muted-foreground",
    },
  },
  defaultVariants: {
    variant: "default",
  },
});

export interface EmptyMediaProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof emptyMediaVariants> {}

const EmptyMedia = React.forwardRef<HTMLDivElement, EmptyMediaProps>(
  ({ className, variant, ...props }, ref) => {
    return (
      <div
        ref={ref}
        className={cn(emptyMediaVariants({ variant, className }))}
        {...props}
      />
    );
  }
);

EmptyMedia.displayName = "EmptyMedia";

const EmptyTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn("text-lg font-semibold", className)}
    {...props}
  />
));

EmptyTitle.displayName = "EmptyTitle";

const EmptyDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...props}
  />
));

EmptyDescription.displayName = "EmptyDescription";

const EmptyContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("mt-4", className)}
    {...props}
  />
));

EmptyContent.displayName = "EmptyContent";

export {
  Empty,
  emptyVariants,
  EmptyHeader,
  EmptyMedia,
  emptyMediaVariants,
  EmptyTitle,
  EmptyDescription,
  EmptyContent,
};
