"use client";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  REGEXP_ONLY_DIGITS,
  Label,
} from "@/registry/web/ui";

export const code = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  REGEXP_ONLY_DIGITS,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";

export default function FourDigitsExample() {
  return (
    <div className="space-y-2 flex flex-col items-center">
      <Label>کد PIN</Label>
      <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
`;

export default function FourDigitsExample() {
  return (
    <div className="space-y-2 flex flex-col items-center">
      <Label>کد PIN</Label>
      <InputOTP maxLength={4} pattern={REGEXP_ONLY_DIGITS}>
        <InputOTPGroup>
          <InputOTPSlot index={0} />
          <InputOTPSlot index={1} />
          <InputOTPSlot index={2} />
          <InputOTPSlot index={3} />
        </InputOTPGroup>
      </InputOTP>
    </div>
  );
}
