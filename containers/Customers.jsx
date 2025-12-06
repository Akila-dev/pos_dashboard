"use client";

import { useState, useMemo } from "react";

import { SearchInput, CustomerListTable } from "@/components";

const Customers = ({ data }) => {
  const originalData = useMemo(() => data, [data]);

  const [searchFilter, setSearchFilter] = useState("");

  const filteredData = useMemo(() => {
    let filtered = [...originalData];

    // Search Filter
    if (searchFilter) {
      filtered = filtered.filter(
        (customer) =>
          customer?.name.toLowerCase().includes(searchFilter.toLowerCase()) ||
          customer?.email.toLowerCase().includes(searchFilter.toLowerCase()) ||
          customer?.phone_number
            .toLowerCase()
            .includes(searchFilter.toLowerCase())
      );
    }

    return filtered;
  }, [originalData, searchFilter]);

  return (
    <div className="flex flex-col gap-1.25">
      {/* Header */}
      <div className="flex-between gap-3! md:gap-5!">
        <h3>Customers</h3>
      </div>

      {/* Filters */}
      <div className="card-1 items-center">
        <div className="">
          <SearchInput
            setSearch={setSearchFilter}
            placeholder="Search by Name, Email, or Phone Number..."
          />
        </div>
      </div>

      {/* Overview Info */}
      <div className="card-1">
        <CustomerListTable data={filteredData} />
      </div>
    </div>
  );
};

export default Customers;
