"use client";

import * as React from "react";
import { addDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/registry/web/ui";

export const code = `"use client";

import * as React from "react";
import { addDays } from "date-fns";
import type { DateRange } from "react-day-picker";
import { DateRangePicker } from "@/components/ui/date-picker";

export default function DateRangePickerDemo() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <DateRangePicker
      dateRange={dateRange}
      onDateRangeChange={setDateRange}
      placeholder="انتخاب بازه تاریخ"
    />
  );
}`;

export default function RangeExample() {
  const [dateRange, setDateRange] = React.useState<DateRange | undefined>({
    from: new Date(),
    to: addDays(new Date(), 7),
  });

  return (
    <DateRangePicker
      dateRange={dateRange}
      onDateRangeChange={setDateRange}
      placeholder="انتخاب بازه تاریخ"
    />
  );
}
