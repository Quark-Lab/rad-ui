"use client";

import * as React from "react";
import { DatePicker } from "@/registry/web/ui";

export const code = `"use client";

import * as React from "react";
import { DatePicker } from "@/components/ui/date-picker";

export default function DatePickerUsage() {
  const [date, setDate] = React.useState<Date>();

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      placeholder="انتخاب تاریخ"
    />
  );
}`;

export default function UsageExample() {
  const [date, setDate] = React.useState<Date>();

  return (
    <DatePicker
      date={date}
      onDateChange={setDate}
      placeholder="انتخاب تاریخ"
    />
  );
}
