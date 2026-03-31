"use client";

import * as React from "react";
import { addDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/registry/web/ui";

export const code = `import * as React from "react";
import { addDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import { Calendar } from "@/components/ui/calendar";

export default function RangeCalendar() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border border-border"
    />
  );
}`;

export default function RangeExample() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <Calendar
      mode="range"
      defaultMonth={dateRange?.from}
      selected={dateRange}
      onSelect={setDateRange}
      numberOfMonths={2}
      className="rounded-lg border border-border"
    />
  );
}
