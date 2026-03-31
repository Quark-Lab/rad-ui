"use client";

import * as React from "react";
import { Calendar as CalendarIcon, CalendarDays } from "lucide-react";
import type { DateRange } from "react-day-picker";

import { cn } from "../../lib/utils";
import { Button } from "../button";
import { Calendar, type CalendarProps } from "../calendar/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "../popover/popover";

interface DatePickerProps
  extends Omit<CalendarProps, "mode" | "selected" | "onSelect"> {
  date?: Date;
  onDateChange?: (date: Date | undefined) => void;
  placeholder?: string;
  className?: string;
  calendarClassName?: string;
  disabled?: boolean;
}

const DatePicker = React.forwardRef<HTMLButtonElement, DatePickerProps>(
  (
    {
      date,
      onDateChange,
      placeholder = "انتخاب تاریخ",
      className,
      calendarClassName,
      disabled,
      ...calendarProps
    },
    ref
  ) => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-[280px] justify-start text-start font-normal",
              !date && "text-muted-foreground",
              className
            )}
          >
            <CalendarIcon className="me-2 h-4 w-4" />
            {date ? date.toLocaleDateString("fa-IR") : placeholder}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0">
          <Calendar
            mode="single"
            selected={date}
            onSelect={onDateChange}
            className={calendarClassName}
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    );
  }
);

DatePicker.displayName = "DatePicker";

interface DateRangePickerProps
  extends Omit<CalendarProps, "mode" | "selected" | "onSelect"> {
  dateRange?: DateRange;
  onDateRangeChange?: (range: DateRange | undefined) => void;
  placeholder?: string;
  className?: string;
  calendarClassName?: string;
  disabled?: boolean;
  numberOfMonths?: number;
}

const DateRangePicker = React.forwardRef<
  HTMLButtonElement,
  DateRangePickerProps
>(
  (
    {
      dateRange,
      onDateRangeChange,
      placeholder = "انتخاب بازه تاریخ",
      className,
      calendarClassName,
      disabled,
      numberOfMonths = 2,
      ...calendarProps
    },
    ref
  ) => {
    return (
      <Popover>
        <PopoverTrigger asChild>
          <Button
            ref={ref}
            variant="outline"
            disabled={disabled}
            className={cn(
              "w-[300px] justify-start text-start font-normal",
              !dateRange && "text-muted-foreground",
              className
            )}
          >
            <CalendarDays className="me-2 h-4 w-4" />
            {dateRange?.from ? (
              dateRange.to ? (
                <>
                  {dateRange.from.toLocaleDateString("fa-IR")}
                  {" - "}
                  {dateRange.to.toLocaleDateString("fa-IR")}
                </>
              ) : (
                dateRange.from.toLocaleDateString("fa-IR")
              )
            ) : (
              placeholder
            )}
          </Button>
        </PopoverTrigger>
        <PopoverContent className="w-auto p-0" align="start">
          <Calendar
            mode="range"
            defaultMonth={dateRange?.from}
            selected={dateRange}
            onSelect={onDateRangeChange}
            numberOfMonths={numberOfMonths}
            className={calendarClassName}
            {...calendarProps}
          />
        </PopoverContent>
      </Popover>
    );
  }
);

DateRangePicker.displayName = "DateRangePicker";

export { DatePicker, DateRangePicker };
export type { DatePickerProps, DateRangePickerProps };
