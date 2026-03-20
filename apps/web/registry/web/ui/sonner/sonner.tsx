"use client";

import * as React from "react";
import { Toaster as SonnerToaster } from "sonner";
import { toast } from "sonner";

import { cn } from "../../lib/utils";

export interface ToasterProps
  extends React.ComponentPropsWithoutRef<typeof SonnerToaster> {
  /**
   * Rad UI is RTL-first. Default is `rtl`.
   * If you need LTR toasts, pass `dir="ltr"`.
   */
  dir?: "rtl" | "ltr";
}

export function Toaster({
  dir = "rtl",
  className,
  ...props
}: ToasterProps) {
  return (
    <SonnerToaster
      dir={dir}
      className={cn(className)}
      {...props}
    />
  );
}

export { toast };

