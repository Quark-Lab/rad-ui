"use client";

import * as React from "react";
import { Calendar } from "@/registry/web/ui";

export const code = `import * as React from "react";
import { Calendar } from "@/components/ui/calendar";

export default function DropdownCaptionCalendar() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      className="rounded-lg border border-border"
    />
  );
}`;

export default function DropdownCaptionExample() {
  const [date, setDate] = React.useState<Date | undefined>(new Date());

  return (
    <Calendar
      mode="single"
      selected={date}
      onSelect={setDate}
      captionLayout="dropdown"
      className="rounded-lg border border-border"
    />
  );
}
