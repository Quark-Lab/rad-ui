"use client";

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/registry/web/ui";

export const code = `import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
function toPersianDigits(str: string): string {
  return str.replace(/\\d/g, (d) => PERSIAN_DIGITS[parseInt(d)] ?? d);
}

export default function ControlledExample() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
      >
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
      <p className="text-sm text-muted-foreground text-center">
        {value === "" ? (
          <>رمز یکبار مصرف خود را وارد کنید.</>
        ) : (
          <>
            مقدار وارد شده:{" "}
            <span className="font-mono font-bold" dir="ltr">
              {toPersianDigits(value)}
            </span>
          </>
        )}
      </p>
    </div>
  );
}
`;

const PERSIAN_DIGITS = ["۰", "۱", "۲", "۳", "۴", "۵", "۶", "۷", "۸", "۹"];
function toPersianDigits(str: string): string {
  return str.replace(/\d/g, (d) => PERSIAN_DIGITS[parseInt(d)] ?? d);
}

export default function ControlledExample() {
  const [value, setValue] = useState("");

  return (
    <div className="flex flex-col items-center gap-4">
      <InputOTP
        maxLength={6}
        value={value}
        onChange={setValue}
      >
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
      <p className="text-sm text-muted-foreground text-center">
        {value === "" ? (
          <>رمز یکبار مصرف خود را وارد کنید.</>
        ) : (
          <>
            مقدار وارد شده:{" "}
            <span className="font-mono font-bold" dir="ltr">
              {toPersianDigits(value)}
            </span>
          </>
        )}
      </p>
    </div>
  );
}
