"use client";

import { useState, useMemo } from "react";

import { ChevronDown } from "lucide-react";

import { Button } from "@/components";

const TableCard = ({ data, index }) => (
  <tr className="text-center">
    <td className="text-accent">{data?.name}</td>
    <td className="">{data?.email}</td>
    <td className="">{data?.phone_number}</td>
  </tr>
);

const CustomerListTable = ({ data, noFiltering }) => {
  // 0 = neutral, 1 = asc, 2 = desc
  const [sortCustomers, setSortCustomers] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const maxLen = 10;

  const sortedData = useMemo(() => {
    if (!data) return [];

    // Neutral: just return a shallow clone of data (don't mutate props)
    if (sortCustomers === 0) {
      return [...data]; // Value of sorted data
    }

    const cloned = [...data];
    cloned.sort((a, b) => {
      const nameA = (a.name || "").toLowerCase();
      const nameB = (b.name || "").toLowerCase();

      if (sortCustomers === 1) {
        return nameA.localeCompare(nameB); // ascending
      } else if (sortCustomers === 2) {
        return nameB.localeCompare(nameA); // descending
      } else {
        return 0;
      }
    });

    return cloned; // Value of sorted data
  }, [data, sortCustomers]);

  return (
    <div className="overflow-x-auto space-y-1">
      <table className="table customer-list-table p">
        <thead className="">
          <tr>
            <th className="w-full">
              {noFiltering ? (
                <span className="">Full Name</span>
              ) : (
                <button
                  className="flex-between w-full font-medium font-header!"
                  onClick={() => setSortCustomers((prev) => (prev + 1) % 3)}
                >
                  <span className="">Full Name</span>
                  <span className="flex flex-col">
                    <ChevronDown
                      size={14}
                      color="var(--fg)"
                      className={`${
                        sortCustomers === 0 ? "opacity-30" : "opacity-100"
                      }
                    ${
                      sortCustomers === 2
                        ? "transform duration-500 rotate-180"
                        : "transform duration-500 rotate-0"
                    }
                    `}
                    />
                  </span>
                </button>
              )}
            </th>
            <th className="">Email</th>
            <th className="">Phone Number</th>
          </tr>
        </thead>

        <tbody>
          {sortedData?.slice(0, maxLen * multiplier).map((order, index) => (
            <TableCard key={index} data={order} index={index} />
          ))}
        </tbody>
      </table>
      <div className="flex-center py-1">
        <Button
          text="Load More"
          onClick={() => setMultiplier((prev) => prev + 1)}
          disabled={maxLen * multiplier >= sortedData.length}
        />
      </div>
    </div>
  );
};

export default CustomerListTable;
