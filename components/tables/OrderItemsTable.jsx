import React from "react";

const TableCard = ({ data, index }) => (
  <tr className="text-center">
    <td className="">
      <div className="space-y-0.5">
        <p className="font-medium">{data?.name}</p>
        <ul className="list-disc">
          {data?.variants.map((variant, index) => (
            <li key={index} className="text-light list-inside">
              {variant}
            </li>
          ))}
        </ul>
      </div>
    </td>
    <td className="">{data?.unit_price}</td>
    <td className="">{data?.quantity}</td>
    <td className="">{data?.total_price}</td>
  </tr>
);

const Summary = ({ data }) => {
  const summaryData = [
    {
      label: "Sub Total",
      value: data.subTotal,
    },
    {
      label: "Tax",
      value: data.tax,
    },
    {
      label: "Service Charge",
      value: data.seviceCharge,
    },
  ];
  return (
    <div className="flex justify-end">
      <div className="p-1.5 lg:px-3 w-3/4 max-w-30">
        {summaryData.map((item, index) => (
          <div key={index} className="flex justify-between items-center pb-0.5">
            <p className="text-light">{item.label}</p>
            <p className="text-light">{item.value}</p>
          </div>
        ))}
        {/* Total */}
        <div className="flex justify-between items-end pt-1 border-t border-fg mt-1">
          <p className="font-semibold!">Total Price</p>
          <p className="font-semibold! scale-125">{data?.totalPrice}</p>
        </div>
      </div>
    </div>
  );
};

const OrderItemsTable = ({ data }) => {
  const summary = {
    subTotal: "$" + 66,
    tax: "$" + 5,
    seviceCharge: "$" + 3,
    totalPrice: "$" + 76,
  };

  return (
    <div className="space-y-1">
      <div className="overflow-x-auto space-y-1">
        <table className="table order-items-list-table p">
          <thead className="">
            <tr>
              <th className="">Items</th>
              <th className="">Unit Price</th>
              <th className="">Quantity</th>
              <th className="">Total Price</th>
            </tr>
          </thead>

          <tbody>
            {data.map((orderDetails, index) => (
              <TableCard key={index} data={orderDetails} index={index} />
            ))}
          </tbody>
        </table>
      </div>
      <Summary data={summary} />
    </div>
  );
};

export default OrderItemsTable;
