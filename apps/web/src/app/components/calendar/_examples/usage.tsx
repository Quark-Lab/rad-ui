"use client";

import * as React from "react";
import { Calendar } from "@/registry/web/ui";

export const code = `import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function CalendarUsage() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border border-border"
    />
  );
}`;

export default function UsageExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      className="rounded-lg border border-border"
    />
  );
}
