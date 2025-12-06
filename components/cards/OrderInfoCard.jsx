import React from "react";
import Link from "next/link";
import { Globe, PersonStanding, ChevronDown } from "lucide-react";

const OrderSource = ({ data }) => (
  <div className="">
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

const PaymentStatus = ({ paymentStatus }) => (
  <p
    className={`sm uppercase py-0.25 px-2 rounded-[1em] ${
      paymentStatus === "Paid"
        ? "text-green-500 bg-green-500/10"
        : paymentStatus === "Pending"
        ? "text-yellow-500 bg-yellow-500/20"
        : "text-red bg-red/10"
    }`}
  >
    {paymentStatus}
  </p>
);

const OrderInfoCard = ({
  paymentStatus,
  orderId,
  orderDate,
  orderingMethod,
  paymentMethod,
  receipt,
  orderSource,
}) => {
  const dataList = [
    {
      label: "Order ID",
      value: orderId,
    },
    {
      label: "Order Date",
      value: orderDate,
    },
    {
      label: "Ordering Method",
      value: orderingMethod,
    },
    {
      label: "Payment Method",
      value: paymentMethod,
    },
    {
      label: "View Receipt",
      value: receipt,
    },
    {
      label: "Order Source",
      value: orderSource,
    },
  ];
  return (
    <div className="">
      <h4 className="mb-0.75">Order Information</h4>
      <div className="card-1 space-y-1">
        <div className="border-b border-outline flex-v-center pb-0.75">
          <p className="text-light sm">Status</p>
          <PaymentStatus paymentStatus={paymentStatus} />
        </div>
        <div className="grid grid-cols-2 gap-1.25">
          {dataList.map(({ label, value }, index) => (
            <div key={index} className="flex flex-col gap-0.25">
              <p className="text-light sm">{label}</p>
              {label === "Order Source" ? (
                <OrderSource data={value} />
              ) : label === "View Receipt" ? (
                <Link
                  href={value.url}
                  target="_blank"
                  className="text-accent sm hover:scale-110 transition-500 inline-block"
                >
                  {value.label}
                </Link>
              ) : (
                <p className="wrap-break-word">{value}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default OrderInfoCard;
