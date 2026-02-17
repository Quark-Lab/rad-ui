"use client";

import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
  Label,
  Button,
} from "@/registry/web/ui";

export const code = `import { useState } from "react";
import {
  InputOTP,
  InputOTPGroup,
  InputOTPSlot,
  InputOTPSeparator,
} from "@/components/ui/input-otp";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function FormExample() {
  const [formValue, setFormValue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold">تأیید ورود</h3>
          <p className="text-sm text-muted-foreground">
            کد تأیید ارسال شده به ایمیل{" "}
            <span className="font-medium text-foreground" dir="ltr">
              m@example.com
            </span>{" "}
            را وارد کنید.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFormSubmitted(true);
          }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="otp-form">کد تأیید</Label>
            <div className="flex justify-center">
              <InputOTP
                id="otp-form"
                maxLength={6}
                value={formValue}
                onChange={setFormValue}
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
            </div>
            <p className="text-xs text-muted-foreground text-center">
              کد ارسال نشد؟{" "}
              <button
                type="button"
                className="text-primary underline hover:text-primary/80"
              >
                ارسال مجدد
              </button>
            </p>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={formValue.length < 6}
          >
            تأیید
          </Button>

          {formSubmitted && formValue.length === 6 && (
            <p className="text-sm text-center text-primary">
              کد با موفقیت ارسال شد!
            </p>
          )}
        </form>

        <p className="text-xs text-center text-muted-foreground">
          مشکلی در ورود دارید؟{" "}
          <a href="#" className="text-primary underline">
            تماس با پشتیبانی
          </a>
        </p>
      </div>
    </div>
  );
}
`;

export default function FormExample() {
  const [formValue, setFormValue] = useState("");
  const [formSubmitted, setFormSubmitted] = useState(false);

  return (
    <div className="max-w-md mx-auto">
      <div className="space-y-6">
        <div className="text-center space-y-2">
          <h3 className="text-xl font-semibold">تأیید ورود</h3>
          <p className="text-sm text-muted-foreground">
            کد تأیید ارسال شده به ایمیل{" "}
            <span className="font-medium text-foreground" dir="ltr">
              m@example.com
            </span>{" "}
            را وارد کنید.
          </p>
        </div>

        <form
          onSubmit={(e) => {
            e.preventDefault();
            setFormSubmitted(true);
          }}
          className="space-y-6"
        >
          <div className="space-y-2">
            <Label htmlFor="otp-form">کد تأیید</Label>
            <div className="flex justify-center">
              <InputOTP
                id="otp-form"
                maxLength={6}
                value={formValue}
                onChange={setFormValue}
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
            </div>
            <p className="text-xs text-muted-foreground text-center">
              کد ارسال نشد؟{" "}
              <button
                type="button"
                className="text-primary underline hover:text-primary/80"
              >
                ارسال مجدد
              </button>
            </p>
          </div>

          <Button
            type="submit"
            className="w-full"
            disabled={formValue.length < 6}
          >
            تأیید
          </Button>

          {formSubmitted && formValue.length === 6 && (
            <p className="text-sm text-center text-primary">
              کد با موفقیت ارسال شد!
            </p>
          )}
        </form>

        <p className="text-xs text-center text-muted-foreground">
          مشکلی در ورود دارید؟{" "}
          <a href="#" className="text-primary underline">
            تماس با پشتیبانی
          </a>
        </p>
      </div>
    </div>
  );
}
