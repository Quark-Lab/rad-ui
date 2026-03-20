"use client";

import { Button, Toaster, toast } from "@/registry/web/ui";

export const code = `"use client"

import { Button } from "@/components/ui/button"
import { toast } from "@/components/ui/sonner"

export default function SonnerTypes() {
  return (
    <div className="flex flex-wrap gap-2">
      <Button
        variant="outline"
        onClick={() => toast("رویداد ایجاد شد")}
      >
        پیش‌فرض
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.success("رویداد ایجاد شد")}
      >
        موفق
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.info("۱۰ دقیقه قبل از زمان رویداد در محل حاضر باشید")
        }
      >
        اطلاع
      </Button>
      <Button
        variant="outline"
        onClick={() =>
          toast.warning("زمان شروع رویداد نباید قبل از ۸ صبح باشد")
        }
      >
        هشدار
      </Button>
      <Button
        variant="outline"
        onClick={() => toast.error("رویداد ایجاد نشد")}
      >
        خطا
      </Button>
    </div>
  )
}
`;

export default function TypesExample() {
  return (
    <>
      <Toaster />
      <div className="flex flex-wrap gap-2">
        <Button
          variant="outline"
          onClick={() => toast("رویداد ایجاد شد")}
        >
          پیش‌فرض
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.success("رویداد ایجاد شد")}
        >
          موفق
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.info("۱۰ دقیقه قبل از زمان رویداد در محل حاضر باشید")
          }
        >
          اطلاع
        </Button>
        <Button
          variant="outline"
          onClick={() =>
            toast.warning("زمان شروع رویداد نباید قبل از ۸ صبح باشد")
          }
        >
          هشدار
        </Button>
        <Button
          variant="outline"
          onClick={() => toast.error("رویداد ایجاد نشد")}
        >
          خطا
        </Button>
      </div>
    </>
  );
}

