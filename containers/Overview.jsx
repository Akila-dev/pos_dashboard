"use client";

import { useState, useEffect } from "react";

import {
  FilterSearchDropdown,
  DateFilter,
  OverviewInfoCard,
  OverviewInfoGraphics,
} from "@/components";

const Overview = ({ data }) => {
  const [filterItemProp, setFilterItemProp] = useState("All");
  const [filterDateProp, setFilterDateProp] = useState("last_7_days");
  const [initData, setInitData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {}, [filterItemProp]);

  return (
    <div className="flex flex-col gap-2">
      {/* Filters */}
      <div className="flex-between flex-wrap">
        <div className="flex-between flex-1">
          <h3>Reports</h3>
          <FilterSearchDropdown
            list={["All", "Mystic Spice", "Chicken"]}
            setFilterProp={null}
          />
        </div>
        <div className="flex-v-center flex-1 min-w-8">
          <DateFilter />
        </div>
      </div>

      {/* Overview Info */}
      <div className="card-0">
        <div>
          <h3>Orders Overview</h3>
        </div>
        <div>
          <OverviewInfoCard
            title="Revenue"
            value="$24,567.89"
            change="0.2%"
            changeVal="$3,400.00"
            highlight
          />

          <OverviewInfoCard
            title="Revenue"
            value="$24,567.89"
            change="0.2%"
            changeVal="$3,400.00"
          />
        </div>
        <div>
          <OverviewInfoGraphics />
        </div>
      </div>
    </div>
  );
};

export default Overview;
