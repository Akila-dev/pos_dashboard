"use client";

import React from "react";

import { ChevronDown } from "lucide-react";

const OverviewInfoCard = ({
  title,
  value,
  change,
  changeVal,
  positiveChange,
  highlight,
}) => {
  return (
    <div
      className={`p-1 space-y-0.25 border-t-2 md:min-w-20 ${
        highlight ? "bg-green-800/10 border-green-800" : "border-transparent"
      }`}
    >
      <p className="sm">{title}</p>
      <h4>{value}</h4>
      <p className="sm text-light flex-v-center gap-0.5!">
        <span className={positiveChange ? "text-green-500" : "text-red"}>
          <ChevronDown
            size={16}
            color={positiveChange ? "var(--color-green-500)" : "var(--red)"}
            className={`"size-1 inline ${positiveChange ? "rotate-180" : ""}`}
          />
          {change}
        </span>
        $({changeVal})
      </p>
    </div>
  );
};

export default OverviewInfoCard;
