"use client";

import { useState, useMemo } from "react";
import moment from "moment";

import {
  FilterSearchDropdown,
  DateFilter,
  OverviewInfoCard,
  OverviewInfoGraphics,
} from "@/components";

const Overview = ({ data }) => {
  const originalData = useMemo(() => data, [data]);

  const [orderDateFilter, setOrderDateFilter] = useState({
    from: null,
    to: null,
  });
  const [itemFilter, setItemFilter] = useState("All");

  // Handle Date Range change from Date filter
  const handleRangeChange = ({ from, to }) => {
    setOrderDateFilter({ from, to });
  };

  const chartData = useMemo(() => {
    let filtered = [...originalData];
    let infographicsData = [];

    // Date filter
    if (orderDateFilter?.from && orderDateFilter?.to) {
      const fromDate = new Date(orderDateFilter.from);
      fromDate.setHours(0, 0, 0, 0);
      const toDate = new Date(orderDateFilter.to);
      toDate.setHours(23, 59, 59, 999);

      filtered = filtered.filter((info) => {
        const d = new Date(info.date);
        return d >= fromDate && d <= toDate;
      });
    }

    // Order Type Filter
    for (let i = 0; i < filtered.length; i++) {
      const element = filtered[i];
      let filteredPurchase = [...element.purchase];

      if (itemFilter) {
        if (itemFilter !== "All") {
          filteredPurchase = filteredPurchase.filter(
            (purchase) => purchase.item === itemFilter
          );
        } else {
          filteredPurchase = [
            filteredPurchase.reduce(
              (acc, item) => ({
                val_1: acc.val_1 + item.val_1,
                val_2: acc.val_2 + item.val_2,
              }),
              { val_1: 0, val_2: 0 }
            ),
          ];
        }
      }

      infographicsData.push({
        date: moment(filtered[i].date).format("DD-MM-YYYY"),
        revenue: filteredPurchase[0].val_1,
        orders: filteredPurchase[0].val_2,
      });
    }

    return infographicsData;
  }, [originalData, orderDateFilter, itemFilter]);

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
          <DateFilter onRangeChange={handleRangeChange} />
        </div>
      </div>

      {/* Overview Info */}
      <div className="card-0">
        <div className="p-1 border-b border-outline">
          <h3>Orders Overview</h3>
        </div>
        <div className="flex-v-center gap-0! px-1 mb-1.5">
          <OverviewInfoCard
            title="Revenue"
            value="$24,567.89"
            change="0.2%"
            positiveChange
            changeVal="$3,400.00"
            highlight
          />

          <OverviewInfoCard
            title="Orders"
            value="60"
            change="0.16%"
            changeVal="10"
          />
        </div>
        <div className="px-1">
          <OverviewInfoGraphics data={chartData} />
        </div>
      </div>
    </div>
  );
};

export default Overview;
