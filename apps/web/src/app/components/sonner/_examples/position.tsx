"use client";

import { Button, Toaster, toast } from "@/registry/web/ui";

export const code = `import { Button } from "@/components/ui/button";
import { toast } from "@/components/ui/sonner";

export default function SonnerPosition() {
  return (
    <div className="flex flex-wrap justify-center gap-2">
      <Button
        variant="outline"
        onClick={() =>
          toast("رویداد ایجاد شد", { position: "top-left" })
        }
      >
        بالا چپ
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("رویداد ایجاد شد", { position: "top-center" })
        }
      >
        بالا مرکز
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("رویداد ایجاد شد", { position: "top-right" })
        }
      >
        بالا راست
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("رویداد ایجاد شد", { position: "bottom-left" })
        }
      >
        پایین چپ
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("رویداد ایجاد شد", { position: "bottom-center" })
        }
      >
        پایین مرکز
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast("رویداد ایجاد شد", { position: "bottom-right" })
        }
      >
        پایین راست
      </Button>
    </div>
  );
}
`;

export default function PositionExample() {
  return (
    <>
      <Toaster />
      <div className="flex flex-wrap justify-center gap-2">
        <Button
          variant="outline"
          onClick={() =>
            toast("رویداد ایجاد شد", { position: "top-left" })
          }
        >
          بالا چپ
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("رویداد ایجاد شد", { position: "top-center" })
          }
        >
          بالا مرکز
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("رویداد ایجاد شد", { position: "top-right" })
          }
        >
          بالا راست
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("رویداد ایجاد شد", { position: "bottom-left" })
          }
        >
          پایین چپ
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("رویداد ایجاد شد", { position: "bottom-center" })
          }
        >
          پایین مرکز
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast("رویداد ایجاد شد", { position: "bottom-right" })
          }
        >
          پایین راست
        </Button>
      </div>
    </>
  );
}

