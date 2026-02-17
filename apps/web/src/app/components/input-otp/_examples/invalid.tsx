"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/registry/web/ui";

export const code = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

export default function InvalidExample() {
  return (
    <div className="flex flex-col items-center gap-3">
      <InputOTP maxLength={6} defaultValue="000000">
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className="border-destructive text-destructive"
          />
          <InputOTPSlot
            index={1}
            className="border-destructive text-destructive"
          />
          <InputOTPSlot
            index={2}
            className="border-destructive text-destructive"
          />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot
            index={3}
            className="border-destructive text-destructive"
          />
          <InputOTPSlot
            index={4}
            className="border-destructive text-destructive"
          />
          <InputOTPSlot
            index={5}
            className="border-destructive text-destructive"
          />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-destructive">
        رمز وارد شده نامعتبر است. لطفاً دوباره تلاش کنید.
      </p>
    </div>
  );
}
`;

export default function InvalidExample() {
  return (
    <div className="flex flex-col items-center gap-3">
      <InputOTP maxLength={6} defaultValue="000000">
        <InputOTPGroup>
          <InputOTPSlot
            index={0}
            className="border-destructive text-destructive"
          />
          <InputOTPSlot
            index={1}
            className="border-destructive text-destructive"
          />
          <InputOTPSlot
            index={2}
            className="border-destructive text-destructive"
          />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot
            index={3}
            className="border-destructive text-destructive"
          />
          <InputOTPSlot
            index={4}
            className="border-destructive text-destructive"
          />
          <InputOTPSlot
            index={5}
            className="border-destructive text-destructive"
          />
        </InputOTPGroup>
      </InputOTP>
      <p className="text-sm text-destructive">
        رمز وارد شده نامعتبر است. لطفاً دوباره تلاش کنید.
      </p>
    </div>
  );
}
