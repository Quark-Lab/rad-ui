import * as React from "react";
import { ChevronDown } from "lucide-react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../lib/utils";

const nativeSelectVariants = cva(
  "flex w-full appearance-none rounded-md border border-input bg-background px-3 py-1 shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 pe-8",
  {
    variants: {
      size: {
        sm: "h-9 text-sm",
        md: "h-10 text-sm",
        lg: "h-11 text-base",
      },
    },
    defaultVariants: {
      size: "sm",
    },
  }
);

export interface NativeSelectProps
  extends Omit<React.SelectHTMLAttributes<HTMLSelectElement>, "size">,
    VariantProps<typeof nativeSelectVariants> {}

const NativeSelect = React.forwardRef<HTMLSelectElement, NativeSelectProps>(
  ({ className, children, size, ...props }, ref) => {
    return (
      <div className="relative">
        <select
          className={cn(nativeSelectVariants({ size, className }))}
          ref={ref}
          {...props}
        >
          {children}
        </select>
        <ChevronDown className="absolute end-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground pointer-events-none opacity-50" />
      </div>
    );
  }
);
NativeSelect.displayName = "NativeSelect";

export interface NativeSelectOptionProps
  extends React.OptionHTMLAttributes<HTMLOptionElement> {}

const NativeSelectOption = React.forwardRef<
  HTMLOptionElement,
  NativeSelectOptionProps
>(({ className, ...props }, ref) => {
  return <option className={cn("", className)} ref={ref} {...props} />;
});
NativeSelectOption.displayName = "NativeSelectOption";

export interface NativeSelectOptGroupProps
  extends React.OptgroupHTMLAttributes<HTMLOptGroupElement> {}

const NativeSelectOptGroup = React.forwardRef<
  HTMLOptGroupElement,
  NativeSelectOptGroupProps
>(({ className, ...props }, ref) => {
  return <optgroup className={cn("", className)} ref={ref} {...props} />;
});
NativeSelectOptGroup.displayName = "NativeSelectOptGroup";

export {
  NativeSelect,
  NativeSelectOption,
  NativeSelectOptGroup,
  nativeSelectVariants,
};
