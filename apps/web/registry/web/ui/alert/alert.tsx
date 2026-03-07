import * as React from "react";
import { type VariantProps, cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const alertVariants = cva(
  "relative w-full rounded-xl border p-4 grid grid-cols-[auto_1fr] gap-x-3 items-start [&>svg]:size-4 [&>svg]:shrink-0 [&>svg]:col-start-1 [&>svg]:row-start-1 [&>svg]:row-span-2 [&>*:nth-child(2)]:col-start-2 [&>*:nth-child(2)]:row-start-1 [&>*:nth-child(3)]:col-start-2 [&>*:nth-child(3)]:row-start-2",
  {
    variants: {
      variant: {
        default:
          "border-border bg-background text-foreground [&>svg]:text-foreground",
        destructive:
          "border-destructive/50 bg-destructive/10 text-destructive dark:border-destructive [&>svg]:text-destructive [&_.text-muted-foreground]:text-destructive/90",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

export interface AlertProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof alertVariants> {}

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      role="alert"
      className={cn(alertVariants({ variant, className }))}
      data-variant={variant || "default"}
      {...props}
    />
  )
);

Alert.displayName = "Alert";

const AlertTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h5
    ref={ref}
    className={cn("mb-1 font-medium leading-none tracking-tight", className)}
    {...props}
  />
));

AlertTitle.displayName = "AlertTitle";

const AlertDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground leading-relaxed", className)}
    {...props}
  />
));

AlertDescription.displayName = "AlertDescription";

const AlertAction = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("absolute end-4 top-4", className)}
    {...props}
  />
));

AlertAction.displayName = "AlertAction";

export {
  Alert,
  alertVariants,
  AlertTitle,
  AlertDescription,
  AlertAction,
};
