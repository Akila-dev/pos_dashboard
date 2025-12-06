"use client";

import { useState, useEffect, useRef } from "react";
import { CalendarDays } from "lucide-react";
import { DayPicker, getDefaultClassNames } from "react-day-picker";
import {
  addDays,
  subDays,
  startOfMonth,
  endOfMonth,
  startOfYear,
  endOfYear,
} from "date-fns";

import "react-day-picker/dist/style.css";

const filterList = [
  "Lifetime",
  "Today",
  "Yesterday",
  "Last 7 Days",
  "Last 30 Days",
  "This Month",
  "Last Month",
  "Custom Range",
];

export default function DateFilter({ onRangeChange }) {
  const defaultClassNames = getDefaultClassNames();
  const dropdownRef = useRef(null);
  const today = new Date();

  const [activeFilter, setActiveFilter] = useState("Lifetime");
  const [showDropdown, setShowDropdown] = useState(false);

  const [range, setRange] = useState({
    from: today,
    to: today,
  });

  // ! Close dropdown on outside click
  useEffect(() => {
    const handler = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setShowDropdown(false);
      }
    };

    document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, []);

  // ! Emit date range to parent
  const emitRange = (from, to) => {
    if (!onRangeChange) return;
    // When from/to null -> parent should remove date filtering
    onRangeChange({
      from: from === null ? null : new Date(from),
      to: to === null ? null : new Date(to),
    });
  };

  // ! Apply preset filter
  const applyPreset = (filter) => {
    setActiveFilter(filter);

    let from = null;
    let to = null;

    switch (filter) {
      case "Today":
        from = to = new Date();
        break;

      case "Yesterday":
        from = to = subDays(new Date(), 1);
        break;

      case "Last 7 Days":
        from = subDays(new Date(), 7);
        to = new Date();
        break;

      case "Last 30 Days":
        from = subDays(new Date(), 30);
        to = new Date();
        break;

      case "This Month":
        from = startOfMonth(new Date());
        to = endOfMonth(new Date());
        break;

      case "Last Month": {
        const lastMonthAnchor = subDays(startOfMonth(new Date()), 1);
        from = startOfMonth(lastMonthAnchor);
        to = endOfMonth(lastMonthAnchor);
        break;
      }

      case "This Year":
        from = startOfYear(new Date());
        to = endOfYear(new Date());
        break;

      case "Lifetime":
        // Special: display today's month but signal parent to disable date filter
        from = null;
        to = null;
        break;

      case "Custom Range":
        // Let calendar handle custom — do not change range or emit
        return;
    }

    // Update internal visual range for calendar. If lifetime, show today visually.
    setRange({ from: from ?? today, to: to ?? today });

    // Emit nulls when Lifetime so parent removes the date filter
    emitRange(from, to);
  };

  // ! Date Picker Component Values
  const dp_component_vals = {
    mode: "range",
    showOutsideDays: true,
    selected: range.from || range.to ? range : undefined,
    onSelect: (r) => {
      if (!r) return;
      // r = { from: Date | undefined, to: Date | undefined }
      setActiveFilter("Custom Range");
      // Update internal visual state
      setRange({
        from: r.from ?? today,
        to: r.to ?? r.from ?? today,
      });
      // Emit actual selection (if both present)
      emitRange(r.from ?? null, r.to ?? null);
    },
    defaultMonth: range.from || today,
    classNames: {
      month_caption: `${defaultClassNames.month_caption} p h-1.5!`,
      nav: `${defaultClassNames.nav} h-2!`,
      caption_label: `${defaultClassNames.caption_label} font-medium! p h-2!`,
      chevron: `${defaultClassNames.chevron} p size-1.25!`,
      head_cell: `${defaultClassNames.head_cell} sm`,
      day: `${defaultClassNames.day} sm size-1!`,
      day_button: `${defaultClassNames.day_button} size-3!`,
      range_start: `${defaultClassNames.range_start} font-medium! sm`,
      selected: `${defaultClassNames.selected} font-medium! sm`,
      outside: `text-light/50!`,
    },
  };

  return (
    <div ref={dropdownRef} className="relative w-full">
      {/* Toggle button */}
      <button
        onClick={() => setShowDropdown((p) => !p)}
        className="relative w-full filter-btn pr-3"
      >
        {activeFilter}
        <CalendarDays
          size={16}
          color="var(--accent)"
          className="absolute right-0.5 md:right-1 top-1/2 -translate-y-1/2"
        />
      </button>

      {showDropdown && (
        <div className="absolute right-0 z-20 mt-1 flex flex-col md:flex-row rounded-[0.5em] bg-white shadow border border-outline md:w-max">
          {/* Preset buttons */}
          <div className="flex md:flex-col flex-wrap gap-0.25 border-b md:border-r border-outline p-0.25">
            {filterList.map((item) => (
              <button
                key={item}
                onClick={() => applyPreset(item)}
                className={`text-left p-0.5 md:px-1 rounded hover:bg-accent/5 sm
                  ${activeFilter === item ? "bg-accent/5 text-accent" : ""}`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Calendar */}
          <div className="p-0.5">
            {/* Mobile */}
            <div className="hide-lg">
              <DayPicker numberOfMonths={1} {...dp_component_vals} />
            </div>

            {/* Desktop */}
            <div className="show-lg">
              <DayPicker numberOfMonths={2} {...dp_component_vals} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
