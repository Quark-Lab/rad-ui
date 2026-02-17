"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  REGEXP_ONLY_DIGITS,
  Label,
} from "@/registry/web/ui";

export const code = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  REGEXP_ONLY_DIGITS,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

export default function PatternExample() {
  return (
    <div className="space-y-2 flex flex-col items-center">
      <Label>رمز عددی</Label>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
`;

export default function PatternExample() {
  return (
    <div className="space-y-2 flex flex-col items-center">
      <Label>رمز عددی</Label>
      <InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
        </InputOTPGroup>
        <InputOTPSeparator />
        <InputOTPGroup>
          <InputOTPSlot index={3} />
          <InputOTPSlot index={4} />
          <InputOTPSlot index={5} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
