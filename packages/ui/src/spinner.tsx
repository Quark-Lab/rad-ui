import * as React from "react";
import { Loader } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "./lib/utils";

const spinnerVariants = cva("animate-spin", {
  variants: {
    size: {
      sm: "size-4",
      default: "size-6",
      lg: "size-8",
      xl: "size-12",
    },
  },
  defaultVariants: {
    size: "default",
  },
});

export interface SpinnerProps
  extends React.SVGProps<SVGSVGElement>,
    VariantProps<typeof spinnerVariants> {
  srText?: string;
}

const Spinner = React.forwardRef<SVGSVGElement, SpinnerProps>(
  ({ className, size, srText = "Loading...", ...props }, ref) => {
    return (
      <>
        <Loader
          ref={ref}
          className={cn(spinnerVariants({ size }), className)}
          role="status"
          aria-label={srText}
          {...props}
        />
        <span className="sr-only">{srText}</span>
      </>
    );
  }
);
Spinner.displayName = "Spinner";

export { Spinner, spinnerVariants };
