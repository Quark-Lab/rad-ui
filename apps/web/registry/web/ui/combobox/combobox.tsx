"use client";

import * as React from "react";
import { ChevronDown } from "lucide-react";

import { cn } from "../../lib/utils";

type StringGetter<T> = (item: T) => string;

interface ComboboxContextValue<T> {
  items: readonly T[];
  filteredItems: T[];
  value: T | null;
  setValue: (value: T | null) => void;
  inputValue: string;
  setInputValue: (value: string) => void;
  open: boolean;
  setOpen: (open: boolean) => void;
  itemToString: StringGetter<T>;
}

const ComboboxContext = React.createContext<ComboboxContextValue<any> | null>(
  null
);

function useComboboxContext<T>() {
  const ctx = React.useContext(ComboboxContext);
  if (!ctx) {
    throw new Error("Combobox components must be used within <Combobox>.");
  }
  return ctx as ComboboxContextValue<T>;
}

export interface ComboboxProps<T = string> {
  items: readonly T[];
  value?: T | null;
  defaultValue?: T | null;
  onValueChange?: (value: T | null) => void;
  itemToStringValue?: StringGetter<T>;
  className?: string;
  children?: React.ReactNode;
}

function ComboboxInner<T>({
  items,
  value,
  defaultValue = null,
  onValueChange,
  itemToStringValue,
  className,
  children,
  ...props
}: ComboboxProps<T>) {
  const [open, setOpen] = React.useState(false);
  const [uncontrolledValue, setUncontrolledValue] =
    React.useState<T | null>(defaultValue);
  const [inputValue, setInputValue] = React.useState("");

  const isControlled = value !== undefined;
  const selectedValue = (isControlled ? value : uncontrolledValue) ?? null;

  const itemToString: StringGetter<T> =
    itemToStringValue ?? ((item) => String(item));

  const filteredItems = React.useMemo(() => {
    const mutableItems = [...items];
    return mutableItems.filter((item) =>
      itemToString(item)
        .toLowerCase()
        .includes(inputValue.toLowerCase())
    );
  }, [items, itemToString, inputValue]);

  const handleChange = (next: T | null) => {
    if (!isControlled) {
      setUncontrolledValue(next);
    }
    onValueChange?.(next);
    setInputValue(next ? itemToString(next) : "");
  };

  const ctx: ComboboxContextValue<T> = {
    items,
    filteredItems,
    value: selectedValue,
    setValue: handleChange,
    inputValue,
    setInputValue,
    open,
    setOpen,
    itemToString,
  };

  const rootRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      const target = event.target as Node | null;
      if (rootRef.current && target && !rootRef.current.contains(target)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [open]);

  return (
    <ComboboxContext.Provider value={ctx}>
      <div ref={rootRef} className={cn("relative", className)} {...props}>
        {children}
      </div>
    </ComboboxContext.Provider>
  );
}

const Combobox = ComboboxInner as <T>(
  props: ComboboxProps<T>
) => React.ReactElement;

const ComboboxTrigger = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { value, inputValue, setInputValue, setOpen, itemToString, open } =
    useComboboxContext<any>();

  const displayValue =
    inputValue || (value !== null ? itemToString(value) : "");

  return (
    <div
      ref={ref}
      className={cn(
        "flex h-10 w-full items-center justify-between rounded-md border border-border bg-background px-3 py-2 text-sm",
        "ring-offset-background placeholder:text-muted-foreground",
        "focus-within:outline-none focus-within:ring-2 focus-within:ring-ring focus-within:ring-offset-2",
        "disabled:cursor-not-allowed disabled:opacity-50",
        "aria-[invalid=true]:border-destructive aria-[invalid=true]:ring-destructive",
        className
      )}
      dir="rtl"
      role="combobox"
      aria-expanded={open}
      onClick={() => {
        // وقتی کاربر دوباره روی تریگر کلیک می‌کند، همه آیتم‌ها را نشان بده
        setInputValue("");
        setOpen(true);
      }}
      {...props}
    >
      <input
        className="w-full bg-transparent text-right text-sm outline-none placeholder:text-muted-foreground"
        placeholder={props["aria-label"] as string | undefined}
        value={displayValue}
        onChange={(event) => {
          setInputValue(event.target.value);
          setOpen(true);
        }}
      />
      <div className="flex items-center gap-1 ps-2">
        <ChevronDown className="h-4 w-4 opacity-50" aria-hidden="true" />
      </div>
    </div>
  );
});
ComboboxTrigger.displayName = "ComboboxTrigger";

const ComboboxPopover = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, children, ...props }, ref) => {
  const { open } = useComboboxContext<any>();

  if (!open) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn(
        "absolute z-50 mt-1 w-full min-w-[12rem] rounded-md border border-border bg-background text-foreground shadow-md",
        "max-h-72 overflow-y-auto overflow-x-hidden py-1 text-sm",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
ComboboxPopover.displayName = "ComboboxPopover";

const ComboboxOption = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { filteredItems, value, setValue, setOpen, itemToString } =
    useComboboxContext<any>();

  return (
    <>
      {filteredItems.map((item, index) => {
        const label = itemToString(item);
        const isSelected =
          value !== null && itemToString(value) === label;

        return (
          <div
            key={label + index.toString()}
            ref={index === 0 ? ref : undefined}
            role="option"
            aria-selected={isSelected}
            className={cn(
              "flex w-full cursor-default select-none items-center rounded-sm px-3 py-1.5 text-sm outline-none",
              isSelected
                ? "bg-muted text-foreground"
                : "hover:bg-accent hover:text-accent-foreground",
              className
            )}
            onClick={() => {
              setValue(item);
              setOpen(false);
            }}
            {...props}
          >
            {label}
          </div>
        );
      })}
    </>
  );
});
ComboboxOption.displayName = "ComboboxOption";

const ComboboxNoOptions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => {
  const { filteredItems } = useComboboxContext<any>();

  if (filteredItems.length > 0) {
    return null;
  }

  return (
    <div
      ref={ref}
      className={cn("px-3 py-2 text-sm text-muted-foreground", className)}
      {...props}
    />
  );
});
ComboboxNoOptions.displayName = "ComboboxNoOptions";

const ComboboxGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-1 py-1.5 text-foreground", className)}
    {...props}
  />
));
ComboboxGroup.displayName = "ComboboxGroup";

const ComboboxGroupHeader = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn("px-3 pb-1 text-xs font-medium text-muted-foreground", className)}
    {...props}
  />
));
ComboboxGroupHeader.displayName = "ComboboxGroupHeader";

export {
  Combobox,
  ComboboxTrigger,
  ComboboxPopover,
  ComboboxOption,
  ComboboxNoOptions,
  ComboboxGroup,
  ComboboxGroupHeader,
};

