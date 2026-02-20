"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";
import posthog from "posthog-js";

/**
 * Captures page views on client-side navigation (App Router).
 * Renders nothing. Add once inside your root layout.
 */
export function PostHogPageView() {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname && typeof window !== "undefined") {
      let url = window.origin + pathname;
      if (window.location.search) {
        url += window.location.search;
      }
      posthog.capture("$pageview", { $current_url: url });
    }
  }, [pathname]);

  return null;
}
