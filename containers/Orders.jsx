"use client";

import { useState, useMemo } from "react";

import { orderTypes, orderStatuses } from "@/dummy/data/orders";

import {
  FilterDropdown,
  DateFilter,
  SearchInput,
  OrderListTable,
} from "@/components";

const Orders = ({ data }) => {
  const originalData = useMemo(() => data, [data]);

  const [orderDateFilter, setOrderDateFilter] = useState({
    from: null,
    to: null,
  });
  const [searchFilter, setSearchFilter] = useState("");
  const [orderTypeFilter, setOrderTypeFilter] = useState("All");
  const [orderStatusFilter, setOrderStatusFilter] = useState("All");
  const [sortByFilter, setSortByFilter] = useState("Newest");

  const handleRangeChange = ({ from, to }) => {
    setOrderDateFilter({ from, to });
  };

  const filteredData = useMemo(() => {
    let filtered = [...originalData];

    // Date filter
    if (orderDateFilter?.from && orderDateFilter?.to) {
      const fromDate = new Date(orderDateFilter.from);
      fromDate.setHours(0, 0, 0, 0);
      const toDate = new Date(orderDateFilter.to);
      toDate.setHours(23, 59, 59, 999);

      filtered = filtered.filter((order) => {
        const d = new Date(order.orderDate);
        return d >= fromDate && d <= toDate;
      });
    }

    // Search Filter
    if (searchFilter) {
      filtered = filtered.filter((order) =>
        order.customer.name.toLowerCase().includes(searchFilter.toLowerCase())
      );
    }

    // Order Type Filter
    if (orderTypeFilter !== "All") {
      filtered = filtered.filter(
        (order) => order.orderType === orderTypeFilter
      );
    }

    // Order Status Filter
    if (orderStatusFilter !== "All") {
      filtered = filtered.filter(
        (order) => order.status.paymentStatus === orderStatusFilter
      );
    }

    // Sort By Filter
    if (sortByFilter === "Newest") {
      filtered.sort((a, b) => new Date(b.orderDate) - new Date(a.orderDate));
    } else if (sortByFilter === "Oldest") {
      filtered.sort((a, b) => new Date(a.orderDate) - new Date(b.orderDate));
    }

    return filtered;
  }, [
    originalData,
    orderDateFilter,
    searchFilter,
    orderTypeFilter,
    orderStatusFilter,
    sortByFilter,
  ]);

  return (
    <div className="flex flex-col gap-1.25">
      {/* Header */}
      <div className="flex-between gap-3! md:gap-5!">
        <h3>Orders</h3>
        <div className="flex-v-center w-full min-w-8 max-w-20 md:max-w-35 xl:max-w-45">
          <DateFilter onRangeChange={handleRangeChange} />
        </div>
      </div>

      {/* Filters */}
      <div className="card-1 grid grid-cols-1 lg:grid-cols-2 gap-1 items-center">
        <div className="border-b lg:border-b-0 border-outline pb-1 lg:pb-0">
          <SearchInput setSearch={setSearchFilter} />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-0.5 md:gap-1">
          <FilterDropdown
            title="Order Type"
            list={["All", ...orderTypes]}
            setItem={setOrderTypeFilter}
            sm
          />
          <FilterDropdown
            title="Order Status"
            list={["All", ...orderStatuses]}
            setItem={setOrderStatusFilter}
            sm
          />
          <FilterDropdown
            title="Sort By"
            list={["Newest", "Oldest"]}
            setItem={setSortByFilter}
            sm
          />
        </div>
      </div>

      {/* Overview Info */}
      <div className="card-1">
        <OrderListTable data={filteredData} />
      </div>
    </div>
  );
};

export default Orders;
