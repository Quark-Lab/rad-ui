"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { Upload } from "lucide-react";
import { cn } from "../../lib/utils";
import {
  validateValue,
  validateFile,
  characterPresets,
  isControlKey,
  formatFileSize,
  type ValidationResult,
} from "./validation";

// ---------------------------------------------------------------------------
// Variants
// ---------------------------------------------------------------------------

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

// ---------------------------------------------------------------------------
// Types
// ---------------------------------------------------------------------------

export interface InputProps
  extends
    Omit<React.InputHTMLAttributes<HTMLInputElement>, "size">,
    VariantProps<typeof inputVariants> {
  // --- Validation ---
  /** Enable built-in validation based on `type` (email / tel / number) */
  validate?: boolean;
  /** Custom regex pattern for validation (overrides type-based pattern) */
  validationPattern?: RegExp;
  /** Custom error message (overrides default Farsi message) */
  validationMessage?: string;
  /** Callback fired when validation state changes */
  onValidationChange?: (result: {
    isValid: boolean;
    message?: string;
  }) => void;

  // --- Keyboard Restriction ---
  /** Restrict which characters can be typed */
  allowedCharacters?:
    | RegExp
    | "digits"
    | "alpha"
    | "alphanumeric"
    | "persian";
  /** Enhanced max length with character count feedback */
  maxInputLength?: number;

  // --- File Validation (type="file") ---
  /** Maximum file size in bytes */
  maxFileSize?: number;
  /** Accepted file extensions, e.g. [".pdf", ".png"] */
  acceptFormats?: string[];

  // --- Error Display ---
  /** Show inline error message below the input (default: false) */
  showError?: boolean;
}

// ---------------------------------------------------------------------------
// Input Component
// ---------------------------------------------------------------------------

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      className,
      size,
      type,
      validate: shouldValidate,
      validationPattern,
      validationMessage,
      onValidationChange,
      allowedCharacters,
      maxInputLength,
      maxFileSize,
      acceptFormats,
      showError = false,
      ...props
    },
    ref
  ) => {
    // ---- File Input ----
    if (type === "file") {
      return (
        <FileInput
          className={className}
          size={size}
          maxFileSize={maxFileSize}
          acceptFormats={acceptFormats}
          showError={showError}
          onValidationChange={onValidationChange}
          validationMessage={validationMessage}
          ref={ref}
          {...props}
        />
      );
    }

    // ---- Standard Input ----
    return (
      <StandardInput
        className={className}
        size={size}
        type={type}
        shouldValidate={shouldValidate}
        validationPattern={validationPattern}
        validationMessage={validationMessage}
        onValidationChange={onValidationChange}
        allowedCharacters={allowedCharacters}
        maxInputLength={maxInputLength}
        showError={showError}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

// ---------------------------------------------------------------------------
// StandardInput (internal)
// ---------------------------------------------------------------------------

interface StandardInputInternalProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size"
  > {
  size?: InputProps["size"];
  shouldValidate?: boolean;
  validationPattern?: RegExp;
  validationMessage?: string;
  onValidationChange?: InputProps["onValidationChange"];
  allowedCharacters?: InputProps["allowedCharacters"];
  maxInputLength?: number;
  showError?: boolean;
}

const StandardInput = React.forwardRef<
  HTMLInputElement,
  StandardInputInternalProps
>(
  (
    {
      className,
      size,
      type,
      shouldValidate,
      validationPattern,
      validationMessage,
      onValidationChange,
      allowedCharacters,
      maxInputLength,
      showError = false,
      onBlur,
      onKeyDown,
      onChange,
      ...props
    },
    ref
  ) => {
    const [error, setError] = React.useState<string | null>(null);
    const [charCount, setCharCount] = React.useState(0);

    // ---- Validation on blur ----
    const handleBlur = React.useCallback(
      (e: React.FocusEvent<HTMLInputElement>) => {
        if (shouldValidate || validationPattern) {
          const result = validateValue(e.target.value, {
            type,
            required: props.required,
            pattern: validationPattern,
            customMessage: validationMessage,
          });
          setError(result.isValid ? null : (result.message ?? null));
          onValidationChange?.(result);
        }
        onBlur?.(e);
      },
      [
        shouldValidate,
        validationPattern,
        validationMessage,
        type,
        props.required,
        onValidationChange,
        onBlur,
      ]
    );

    // ---- Keyboard filtering ----
    const handleKeyDown = React.useCallback(
      (e: React.KeyboardEvent<HTMLInputElement>) => {
        if (allowedCharacters && !isControlKey(e)) {
          const charPattern =
            typeof allowedCharacters === "string"
              ? characterPresets[allowedCharacters]
              : allowedCharacters;

          if (charPattern && !charPattern.test(e.key)) {
            e.preventDefault();
          }
        }
        onKeyDown?.(e);
      },
      [allowedCharacters, onKeyDown]
    );

    // ---- Change handler (char count + re-validate if already errored) ----
    const handleChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        if (maxInputLength !== undefined) {
          setCharCount(e.target.value.length);
        }

        // Clear error on valid input after previous error
        if (error && (shouldValidate || validationPattern)) {
          const result = validateValue(e.target.value, {
            type,
            required: props.required,
            pattern: validationPattern,
            customMessage: validationMessage,
          });
          if (result.isValid) {
            setError(null);
            onValidationChange?.(result);
          }
        }

        onChange?.(e);
      },
      [
        maxInputLength,
        error,
        shouldValidate,
        validationPattern,
        validationMessage,
        type,
        props.required,
        onValidationChange,
        onChange,
      ]
    );

    const hasError = error !== null;

    return (
      <div className="w-full">
        <input
          type={type}
          className={cn(
            inputVariants({ size, className }),
            hasError &&
              "border-destructive focus-visible:ring-destructive"
          )}
          ref={ref}
          maxLength={maxInputLength}
          aria-invalid={hasError || undefined}
          onBlur={handleBlur}
          onKeyDown={handleKeyDown}
          onChange={handleChange}
          {...props}
        />
        {/* Character count */}
        {maxInputLength !== undefined && (
          <div className="flex justify-end mt-1">
            <span
              className={cn(
                "text-xs text-muted-foreground",
                charCount >= maxInputLength && "text-destructive"
              )}
            >
              {charCount}/{maxInputLength}
            </span>
          </div>
        )}
        {/* Inline error */}
        {showError && hasError && (
          <p className="text-sm text-destructive mt-1" role="alert">
            {error}
          </p>
        )}
      </div>
    );
  }
);
StandardInput.displayName = "StandardInput";

// ---------------------------------------------------------------------------
// FileInput (internal)
// ---------------------------------------------------------------------------

interface FileInputInternalProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "size" | "type"
  > {
  size?: InputProps["size"];
  maxFileSize?: number;
  acceptFormats?: string[];
  showError?: boolean;
  onValidationChange?: InputProps["onValidationChange"];
  validationMessage?: string;
}

const FileInput = React.forwardRef<HTMLInputElement, FileInputInternalProps>(
  (
    {
      className,
      size,
      maxFileSize,
      acceptFormats,
      showError = false,
      onValidationChange,
      validationMessage,
      onChange,
      ...props
    },
    ref
  ) => {
    const [fileName, setFileName] = React.useState<string>("");
    const [error, setError] = React.useState<string | null>(null);
    const inputRef = React.useRef<HTMLInputElement>(null);

    React.useImperativeHandle(ref, () => inputRef.current!);

    const handleFileChange = React.useCallback(
      (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];

        if (file) {
          // Validate file
          if (maxFileSize || acceptFormats) {
            const result = validateFile(file, { maxFileSize, acceptFormats });
            if (!result.isValid) {
              const msg = validationMessage || result.message || null;
              setError(msg);
              setFileName("");
              onValidationChange?.({
                isValid: false,
                message: msg ?? undefined,
              });
              // Reset the input so the same file can be re-selected
              e.target.value = "";
              return;
            }
          }

          setFileName(file.name);
          setError(null);
          onValidationChange?.({ isValid: true });
        } else {
          setFileName("");
          setError(null);
        }

        onChange?.(e);
      },
      [maxFileSize, acceptFormats, validationMessage, onValidationChange, onChange]
    );

    const hasError = error !== null;

    // Build accept string from acceptFormats
    const acceptAttr =
      props.accept || (acceptFormats ? acceptFormats.join(",") : undefined);

    return (
      <div className="w-full">
        <div
          className={cn(
            inputVariants({ size, className }),
            "flex items-center gap-2 cursor-pointer",
            hasError && "border-destructive focus-visible:ring-destructive",
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
            accept={acceptAttr}
            onChange={handleFileChange}
            {...props}
          />
        </div>
        {/* File constraints hint */}
        {(maxFileSize || acceptFormats) && !hasError && (
          <p className="text-xs text-muted-foreground mt-1" dir="rtl">
            {[
              maxFileSize
                ? `حداکثر حجم: ${formatFileSize(maxFileSize)}`
                : null,
              acceptFormats
                ? `فرمت‌های مجاز: ${acceptFormats.join("، ")}`
                : null,
            ]
              .filter(Boolean)
              .join(" · ")}
          </p>
        )}
        {/* Inline error */}
        {showError && hasError && (
          <p className="text-sm text-destructive mt-1" role="alert" dir="rtl">
            {error}
          </p>
        )}
      </div>
    );
  }
);
FileInput.displayName = "FileInput";

// ---------------------------------------------------------------------------
// Exports
// ---------------------------------------------------------------------------

export { Input, inputVariants };
