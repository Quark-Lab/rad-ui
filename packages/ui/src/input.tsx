import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Upload } from "lucide-react";
import { cn } from "./lib/utils";

const inputVariants = cva(
  "flex w-full rounded-md border border-input bg-background px-3 py-1 text-sm shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50",
  {
    variants: {
      size: {
        sm: "h-9 px-3 text-sm",
        md: "h-10 px-3 py-2 text-sm",
        lg: "h-11 px-4 text-base",
      },
    },
    defaultVariants: {
      size: "md",
    },
  }
);

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className, size, type, ...props }, ref) => {
    // Custom logic for file input to support Farsi text
    if (type === "file") {
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const [fileName, setFileName] = React.useState<string>("");
      // eslint-disable-next-line react-hooks/rules-of-hooks
      const inputRef = React.useRef<HTMLInputElement>(null);

      // eslint-disable-next-line react-hooks/rules-of-hooks
      React.useImperativeHandle(ref, () => inputRef.current!);

      const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
          setFileName(file.name);
        } else {
          setFileName("");
        }
        props.onChange?.(e);
      };

      return (
        <div
          className={cn(
            inputVariants({ size, className }),
            "flex items-center gap-2 cursor-pointer",
            props.disabled && "cursor-not-allowed opacity-50"
          )}
          onClick={() => !props.disabled && inputRef.current?.click()}
        >
          <button
            type="button"
            disabled={props.disabled}
            className={cn(
              "flex items-center gap-2 rounded-sm bg-secondary px-2 py-0.5 text-xs font-medium text-secondary-foreground transition-colors",
              "hover:bg-secondary/80 focus:outline-none",
              props.disabled && "pointer-events-none"
            )}
            tabIndex={-1}
          >
            <Upload className="h-3 w-3" />
            <span>انتخاب فایل</span>
          </button>
          <span
            className={cn(
              "text-muted-foreground truncate flex-1 text-right text-xs",
              !fileName && "opacity-70"
            )}
            dir="rtl"
          >
            {fileName || props.placeholder || "فایلی انتخاب نشده"}
          </span>
          <input
            type="file"
            className="hidden"
            ref={inputRef}
            onChange={handleFileChange}
            {...props}
          />
        </div>
      );
    }

    return (
      <input
        type={type}
        className={cn(inputVariants({ size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input, inputVariants };
