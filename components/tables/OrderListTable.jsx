"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import moment from "moment";

import { Globe, PersonStanding, ChevronDown } from "lucide-react";

import { Button } from "@/components";

const OrderStatus = ({ data }) => (
  <div>
    <p
      className={`sm uppercase ${
        data?.paymentStatus === "Paid"
          ? "text-green-500"
          : data?.paymentStatus === "Pending"
          ? "text-yellow-500"
          : "text-red"
      }`}
    >
      {data?.paymentStatus}
    </p>

    <p className={`sm`}>
      {data?.paymentStatus === "Paid" ? data?.paymentType : data?.paymentStatus}
    </p>
  </div>
);

const OrderSource = ({ data }) => (
  <div className="flex w-full justify-end">
    {data === "Online Store" ? (
      <Globe color="#3423a6" size={20} className="size-1.25 md:size-1.25" />
    ) : (
      <PersonStanding
        color="#3423a6"
        size={20}
        className="size-1.25 md:size-1.25"
      />
    )}
  </div>
);

const TableCard = ({ data, index }) => (
  <tr className="text-center">
    <td className="">
      <Link
        href={`/order-details/${data?.id}`}
        className="text-accent sm hover:scale-110 transition-500 inline-block"
      >
        #SK-00{index + 1}
      </Link>
    </td>
    <td className="">{data?.customer.name}</td>
    <td className="">{data?.orderType}</td>
    <td className="">
      <OrderStatus data={data?.status} />
    </td>
    <td className="">${data?.amount}</td>
    <td className="">{moment(data?.orderDate).format("lll")}</td>
    <td className="">
      <OrderSource data={data?.source} />
    </td>
  </tr>
);

const OrderListTable = ({ data, noFiltering }) => {
  // 0 = neutral, 1 = asc, 2 = desc
  const [sortOrder, setSortOrder] = useState(0);
  const [multiplier, setMultiplier] = useState(1);
  const maxLen = 10;

  const sortedData = useMemo(() => {
    if (!data) return [];

    // Neutral: just return a shallow clone of data (don't mutate props)
    if (sortOrder === 0) {
      return [...data]; // Value of sorted data
    }

    const cloned = [...data];
    cloned.sort((a, b) => {
      const nameA = (a.customer?.name || "").toLowerCase();
      const nameB = (b.customer?.name || "").toLowerCase();

      if (sortOrder === 1) {
        return nameA.localeCompare(nameB); // ascending
      } else if (sortOrder === 2) {
        return nameB.localeCompare(nameA); // descending
      } else {
        return 0;
      }
    });

    return cloned; // Value of sorted data
  }, [data, sortOrder]);

  return (
    <div className="overflow-x-auto space-y-1">
      <table className="table order-list-table sm">
        <thead className="">
          <tr>
            <th className="">Order Number</th>
            <th className="w-full">
              {noFiltering ? (
                <span className="sm">Customer</span>
              ) : (
                <button
                  className="flex-between w-full font-medium font-header!"
                  onClick={() => setSortOrder((prev) => (prev + 1) % 3)}
                >
                  <span className="sm">Customer</span>
                  <span className="flex flex-col">
                    <ChevronDown
                      size={14}
                      color="var(--fg)"
                      className={`${
                        sortOrder === 0 ? "opacity-30" : "opacity-100"
                      }
                    ${
                      sortOrder === 2
                        ? "transform duration-500 rotate-180"
                        : "transform duration-500 rotate-0"
                    }
                    `}
                    />
                  </span>
                </button>
              )}
            </th>
            <th className="">Order Type</th>
            <th className="">Status</th>
            <th className="">Amount</th>
            <th className="">Order Date</th>
            <th className="w-full text-right!">Source</th>
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

export default OrderListTable;
