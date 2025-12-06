import React from "react";

const CustomerInfoCard = ({ data }) => {
  const dataList = [
    {
      label: "Order ID",
      value: data?.name,
    },
    {
      label: "Order Date",
      value: data?.email,
    },
    {
      label: "Ordering Method",
      value: data?.phone_number,
    },
  ];
  return (
    <div className="">
      <h4 className="mb-0.75">Customer</h4>
      <div className="card-1 divide-y divide-outline">
        {dataList.map(({ label, value }, index) => (
          <div key={index} className="grid grid-cols-3 gap-1 py-1">
            <p className="text-light">{label}</p>
            <p className="wrap-break-word col-span-2">{value}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerInfoCard;
