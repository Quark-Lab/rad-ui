"use client";

import { Button, Toaster, toast } from "@/registry/web/ui";

export const code = `import { Button } from "@/components/ui/button";
import { Toaster, toast } from "@/components/ui/sonner";

export default function SonnerBasicExample() {
  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("رویداد ایجاد شد", {
            description:
              "یکشنبه، ۳ دسامبر ۲۰۲۳ ساعت ۹:۰۰ صبح",
            action: {
              label: "بازگشت",
              onClick: () => console.log("بازگشت"),
            },
          })
        }
      >
        نمایش Toast
      </Button>
    </>
  );
}
`;

export default function BasicExample() {
  return (
    <>
      <Toaster />
      <Button
        variant="outline"
        onClick={() =>
          toast("رویداد ایجاد شد", {
            description:
              "یکشنبه، ۳ دسامبر ۲۰۲۳ ساعت ۹:۰۰ صبح",
            action: {
              label: "بازگشت",
              onClick: () => console.log("بازگشت"),
            },
          })
        }
      >
        نمایش Toast
      </Button>
    </>
  );
}

