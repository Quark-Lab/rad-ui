// ---------------------------------------------------------------------------
// Validation Patterns
// ---------------------------------------------------------------------------

export const validationPatterns = {
  email: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
  tel: /^\+?[0-9\s\-()]{7,15}$/,
  iranianTel: /^(\+98|0)?9\d{9}$/,
  number: /^-?\d*\.?\d+$/,
} as const;

// ---------------------------------------------------------------------------
// Character Presets (for keyboard filtering)
// ---------------------------------------------------------------------------

export const characterPresets: Record<string, RegExp> = {
  digits: /^[0-9]$/,
  alpha: /^[a-zA-Z\u0600-\u06FF\s]$/,
  alphanumeric: /^[a-zA-Z0-9\u0600-\u06FF\s]$/,
  persian: /^[\u0600-\u06FF\u200C\u200F0-9\s.,;:!?()«»؟،؛]$/,
};

// ---------------------------------------------------------------------------
// Control Keys (should never be blocked by character filtering)
// ---------------------------------------------------------------------------

const CONTROL_KEYS = new Set([
  "Backspace",
  "Delete",
  "Tab",
  "Escape",
  "Enter",
  "ArrowLeft",
  "ArrowRight",
  "ArrowUp",
  "ArrowDown",
  "Home",
  "End",
]);

export function isControlKey(e: React.KeyboardEvent): boolean {
  return CONTROL_KEYS.has(e.key) || e.ctrlKey || e.metaKey || e.altKey;
}

// ---------------------------------------------------------------------------
// Default Farsi Error Messages
// ---------------------------------------------------------------------------

export const defaultMessages = {
  email: "لطفاً یک آدرس ایمیل معتبر وارد کنید.",
  tel: "لطفاً یک شماره تلفن معتبر وارد کنید.",
  number: "لطفاً یک عدد معتبر وارد کنید.",
  required: "این فیلد الزامی است.",
  patternMismatch: "مقدار وارد شده معتبر نیست.",
  fileTooLarge: (max: string) => `حجم فایل نباید بیشتر از ${max} باشد.`,
  invalidFormat: (formats: string) => `فرمت‌های مجاز: ${formats}`,
  minLength: (min: number) => `حداقل ${min} کاراکتر وارد کنید.`,
  maxLength: (max: number) => `حداکثر ${max} کاراکتر مجاز است.`,
} as const;

// ---------------------------------------------------------------------------
// File Size Formatter (bytes → readable Farsi string)
// ---------------------------------------------------------------------------

export function formatFileSize(bytes: number): string {
  if (bytes < 1024) return `${bytes} بایت`;
  if (bytes < 1024 * 1024) return `${(bytes / 1024).toFixed(1)} کیلوبایت`;
  if (bytes < 1024 * 1024 * 1024)
    return `${(bytes / (1024 * 1024)).toFixed(1)} مگابایت`;
  return `${(bytes / (1024 * 1024 * 1024)).toFixed(1)} گیگابایت`;
}

// ---------------------------------------------------------------------------
// validateValue – Pure validation function
// ---------------------------------------------------------------------------

export interface ValidateValueOptions {
  type?: string;
  required?: boolean;
  pattern?: RegExp;
  minLength?: number;
  maxLength?: number;
  customMessage?: string;
}

export interface ValidationResult {
  isValid: boolean;
  message?: string;
}

export function validateValue(
  value: string,
  options: ValidateValueOptions = {}
): ValidationResult {
  const { type, required, pattern, minLength, maxLength, customMessage } =
    options;

  // Required check
  if (required && !value.trim()) {
    return { isValid: false, message: defaultMessages.required };
  }

  // Skip further validation if empty and not required
  if (!value.trim()) {
    return { isValid: true };
  }

  // Min length
  if (minLength !== undefined && value.length < minLength) {
    return {
      isValid: false,
      message: defaultMessages.minLength(minLength),
    };
  }

  // Max length
  if (maxLength !== undefined && value.length > maxLength) {
    return {
      isValid: false,
      message: defaultMessages.maxLength(maxLength),
    };
  }

  // Custom pattern
  if (pattern) {
    if (!pattern.test(value)) {
      return {
        isValid: false,
        message: customMessage || defaultMessages.patternMismatch,
      };
    }
    return { isValid: true };
  }

  // Type-based validation
  switch (type) {
    case "email":
      if (!validationPatterns.email.test(value)) {
        return {
          isValid: false,
          message: customMessage || defaultMessages.email,
        };
      }
      break;
    case "tel":
      if (!validationPatterns.tel.test(value)) {
        return {
          isValid: false,
          message: customMessage || defaultMessages.tel,
        };
      }
      break;
    case "number":
      if (!validationPatterns.number.test(value)) {
        return {
          isValid: false,
          message: customMessage || defaultMessages.number,
        };
      }
      break;
  }

  return { isValid: true };
}

// ---------------------------------------------------------------------------
// File Validation
// ---------------------------------------------------------------------------

export interface FileValidationOptions {
  maxFileSize?: number;
  acceptFormats?: string[];
}

export function validateFile(
  file: File,
  options: FileValidationOptions
): ValidationResult {
  const { maxFileSize, acceptFormats } = options;

  if (maxFileSize && file.size > maxFileSize) {
    return {
      isValid: false,
      message: defaultMessages.fileTooLarge(formatFileSize(maxFileSize)),
    };
  }

  if (acceptFormats && acceptFormats.length > 0) {
    const fileName = file.name.toLowerCase();
    const hasValidFormat = acceptFormats.some((format) =>
      fileName.endsWith(format.toLowerCase())
    );
    if (!hasValidFormat) {
      return {
        isValid: false,
        message: defaultMessages.invalidFormat(acceptFormats.join("، ")),
      };
    }
  }

  return { isValid: true };
}
