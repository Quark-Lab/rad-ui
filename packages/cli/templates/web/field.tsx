"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "../lib/utils";
import { Label } from "./label";
import { Separator } from "./separator";

// ---------------------------------------------------------------------------
// FieldSet
// ---------------------------------------------------------------------------

const FieldSet = React.forwardRef<
  HTMLFieldSetElement,
  React.FieldsetHTMLAttributes<HTMLFieldSetElement>
>(({ className, ...props }, ref) => (
  <fieldset
    ref={ref}
    className={cn(
      "space-y-6 border-none p-0 [&>*+[data-slot=field-group]]:pt-4",
      className
    )}
    {...props}
  />
));
FieldSet.displayName = "FieldSet";

// ---------------------------------------------------------------------------
// FieldLegend
// ---------------------------------------------------------------------------

interface FieldLegendProps extends React.HTMLAttributes<HTMLLegendElement> {
  variant?: "legend" | "label";
}

const FieldLegend = React.forwardRef<HTMLLegendElement, FieldLegendProps>(
  ({ className, variant = "legend", ...props }, ref) => (
    <legend
      ref={ref}
      className={cn(
        variant === "legend"
          ? "text-base font-semibold leading-none"
          : "text-sm font-medium leading-none",
        className
      )}
      {...props}
    />
  )
);
FieldLegend.displayName = "FieldLegend";

// ---------------------------------------------------------------------------
// FieldGroup
// ---------------------------------------------------------------------------

const FieldGroup = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="field-group"
    className={cn("@container/field-group flex flex-col gap-4", className)}
    {...props}
  />
));
FieldGroup.displayName = "FieldGroup";

// ---------------------------------------------------------------------------
// Field
// ---------------------------------------------------------------------------

const fieldVariants = cva(
  "group/field flex w-full gap-3 data-[invalid=true]:text-destructive",
  {
    variants: {
      orientation: {
        vertical: ["flex-col [&>*]:w-full [&>.sr-only]:w-auto"],
        horizontal: [
          "flex-row items-center",
          "[&>[data-slot=field-label]]:flex-auto",
          "has-[>[data-slot=field-content]]:items-start has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
        responsive: [
          "flex-col [&>*]:w-full [&>.sr-only]:w-auto @md/field-group:flex-row @md/field-group:items-center @md/field-group:[&>*]:w-auto",
          "@md/field-group:[&>[data-slot=field-label]]:flex-auto",
          "@md/field-group:has-[>[data-slot=field-content]]:items-start @md/field-group:has-[>[data-slot=field-content]]:[&>[role=checkbox],[role=radio]]:mt-px",
        ],
      },
    },
    defaultVariants: {
      orientation: "vertical",
    },
  }
);

export interface FieldProps
  extends
    React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof fieldVariants> {}

const Field = React.forwardRef<HTMLDivElement, FieldProps>(
  ({ className, orientation = "vertical", ...props }, ref) => (
    <div
      ref={ref}
      role="group"
      data-slot="field"
      className={cn(fieldVariants({ orientation }), className)}
      {...props}
    />
  )
);
Field.displayName = "Field";

// ---------------------------------------------------------------------------
// FieldContent
// ---------------------------------------------------------------------------

const FieldContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="field-content"
    className={cn("flex flex-col gap-1", className)}
    {...props}
  />
));
FieldContent.displayName = "FieldContent";

// ---------------------------------------------------------------------------
// FieldLabel
// ---------------------------------------------------------------------------

const FieldLabel = React.forwardRef<
  React.ElementRef<typeof Label>,
  React.ComponentPropsWithoutRef<typeof Label>
>(({ className, ...props }, ref) => (
  <Label
    ref={ref}
    data-slot="field-label"
    className={cn(
      "group-data-[invalid=true]/field:text-destructive",
      className
    )}
    {...props}
  />
));
FieldLabel.displayName = "FieldLabel";

// ---------------------------------------------------------------------------
// FieldTitle
// ---------------------------------------------------------------------------

const FieldTitle = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    data-slot="field-title"
    className={cn(
      "text-sm font-medium leading-none group-data-[invalid=true]/field:text-destructive",
      className
    )}
    {...props}
  />
));
FieldTitle.displayName = "FieldTitle";

// ---------------------------------------------------------------------------
// FieldDescription
// ---------------------------------------------------------------------------

const FieldDescription = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    data-slot="field-description"
    className={cn("text-sm text-muted-foreground text-pretty", className)}
    {...props}
  />
));
FieldDescription.displayName = "FieldDescription";

// ---------------------------------------------------------------------------
// FieldSeparator
// ---------------------------------------------------------------------------

interface FieldSeparatorProps extends React.HTMLAttributes<HTMLDivElement> {
  children?: React.ReactNode;
}

const FieldSeparator = React.forwardRef<HTMLDivElement, FieldSeparatorProps>(
  ({ children, className, ...props }, ref) => (
    <div
      ref={ref}
      data-slot="field-separator"
      className={cn("flex items-center gap-3", className)}
      {...props}
    >
      <Separator className="flex-1" />
      {children && (
        <span className="text-xs text-muted-foreground font-medium">
          {children}
        </span>
      )}
      <Separator className={cn("flex-1", !children && "hidden")} />
    </div>
  )
);
FieldSeparator.displayName = "FieldSeparator";

// ---------------------------------------------------------------------------
// FieldError
// ---------------------------------------------------------------------------

interface FieldErrorProps extends React.HTMLAttributes<HTMLDivElement> {
  errors?: Array<{ message?: string } | undefined>;
}

const FieldError = React.forwardRef<HTMLDivElement, FieldErrorProps>(
  ({ className, children, errors, ...props }, ref) => {
    const content = React.useMemo(() => {
      if (children) {
        return children;
      }

      if (!errors?.length) {
        return null;
      }

      const uniqueErrors = [
        ...new Map(errors.map((error) => [error?.message, error])).values(),
      ];

      if (uniqueErrors?.length === 1) {
        return uniqueErrors[0]?.message;
      }

      return (
        <ul className="list-disc list-inside space-y-1">
          {uniqueErrors.map(
            (error, index) =>
              error?.message && <li key={index}>{error.message}</li>
          )}
        </ul>
      );
    }, [children, errors]);

    if (!content) {
      return null;
    }

    return (
      <div
        ref={ref}
        data-slot="field-error"
        role="alert"
        className={cn("text-sm text-destructive", className)}
        {...props}
      >
        {content}
      </div>
    );
  }
);
FieldError.displayName = "FieldError";

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export {
  Field,
  fieldVariants,
  FieldContent,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
  FieldLegend,
  FieldSeparator,
  FieldSet,
  FieldTitle,
};
export type { FieldLegendProps, FieldSeparatorProps, FieldErrorProps };
