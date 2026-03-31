"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import {
  Button,
  Calendar,
  Popover,
  PopoverContent,
  PopoverTrigger,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  cn,
} from "@/registry/web/ui";

export const code = `"use client";

import * as React from "react";
import { addDays } from "date-fns";
import { Calendar as CalendarIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function DatePickerWithPresets() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-start font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="me-2 h-4 w-4" />
          {date
            ? date.toLocaleDateString("fa-IR")
            : "انتخاب تاریخ"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-2 p-2">
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="انتخاب سریع" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">امروز</SelectItem>
            <SelectItem value="1">فردا</SelectItem>
            <SelectItem value="3">سه روز بعد</SelectItem>
            <SelectItem value="7">هفته آینده</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border border-border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  );
}

// نکته: برای این مثال به کامپوننت Select نیاز دارید.
// npx @quark-lab/rad-ui add select`;

export default function WithPresetsExample() {
  const [date, setDate] = React.useState<Date>();

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          className={cn(
            "w-[280px] justify-start text-start font-normal",
            !date && "text-muted-foreground"
          )}
        >
          <CalendarIcon className="me-2 h-4 w-4" />
          {date ? date.toLocaleDateString("fa-IR") : "انتخاب تاریخ"}
        </Button>
      </PopoverTrigger>
      <PopoverContent className="flex w-auto flex-col gap-2 p-2">
        <Select
          onValueChange={(value) =>
            setDate(addDays(new Date(), parseInt(value)))
          }
        >
          <SelectTrigger>
            <SelectValue placeholder="انتخاب سریع" />
          </SelectTrigger>
          <SelectContent position="popper">
            <SelectItem value="0">امروز</SelectItem>
            <SelectItem value="1">فردا</SelectItem>
            <SelectItem value="3">سه روز بعد</SelectItem>
            <SelectItem value="7">هفته آینده</SelectItem>
          </SelectContent>
        </Select>
        <div className="rounded-md border border-border">
          <Calendar mode="single" selected={date} onSelect={setDate} />
        </div>
      </PopoverContent>
    </Popover>
  );
}
