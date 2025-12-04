import { CUSTOMERS } from "./customers.js";

const customers = CUSTOMERS;

const orderItemsVariant1 = [
  {
    name: "Hakka Noodles",
    variants: ["Medium ($0.00)", "Veg ($0.00)"],
    unit_price: 19.99,
    quantity: 1,
    total_price: 19.99,
  },
  {
    name: "Tekken Noodles",
    variants: ["Medium ($0.00)", "Veg ($0.00)"],
    unit_price: 15.99,
    quantity: 1,
    total_price: 15.99,
  },
  {
    name: "Rhema Noodles",
    variants: ["Medium ($0.00)", "Veg ($0.00)"],
    unit_price: 12.99,
    quantity: 1,
    total_price: 12.99,
  },
  {
    name: "Doodle Noodles",
    variants: ["Medium ($0.00)", "Veg ($0.00)"],
    unit_price: 21.99,
    quantity: 1,
    total_price: 21.99,
  },
];

const orderItemsVariant2 = [
  {
    name: "Butter Chicken",
    variants: ["Mild ($0.00)"],
    unit_price: 19.99,
    quantity: 1,
    total_price: 19.99,
  },
  {
    name: "Tandoori Chicken",
    variants: ["Mild ($0.00)"],
    unit_price: 15.99,
    quantity: 1,
    total_price: 15.99,
  },
  {
    name: "Mutton Chicken",
    variants: ["Mild ($0.00)"],
    unit_price: 12.99,
    quantity: 1,
    total_price: 12.99,
  },
  {
    name: "Chicken Tikka",
    variants: ["Mild ($0.00)"],
    unit_price: 21.99,
    quantity: 1,
    total_price: 21.99,
  },
];

export const ORDERS = [
  {
    id: 1,
    customer: customers[0],
    orderType: "Online Order Pickup",
    amount: 59.99,
    status: {
      paymentStatus: "Paid",
      shippingStatus: "Shipped",
      orderStatus: "Completed",
      paymentType: "Credit Card",
    },
    orderDate: "2024-06-15, 10:30 AM",
    source: "Online Store",
    receipt: "/",
    orderItems: orderItemsVariant1,
  },
  {
    id: 1,
    customer: customers[1],
    orderType: "Online Order Pickup",
    amount: 59.99,
    status: {
      paymentStatus: "Paid",
      shippingStatus: "Shipped",
      orderStatus: "Completed",
      paymentType: "Credit Card",
    },
    orderDate: "2024-06-15, 10:30 AM",
    source: "Online Store",
    receipt: "/",
    orderItems: orderItemsVariant2,
  },
  {
    id: 1,
    customer: customers[2],
    orderType: "Online Order Pickup",
    amount: 59.99,
    status: {
      paymentStatus: "Paid",
      shippingStatus: "Shipped",
      orderStatus: "Completed",
      paymentType: "Credit Card",
    },
    orderDate: "2024-06-15, 10:30 AM",
    source: "Online Store",
    receipt: "/",
    orderItems: orderItemsVariant1,
  },
  {
    id: 1,
    customer: customers[3],
    orderType: "Online Order Pickup",
    amount: 59.99,
    status: {
      paymentStatus: "Paid",
      shippingStatus: "Shipped",
      orderStatus: "Completed",
      paymentType: "Credit Card",
    },
    orderDate: "2024-06-15, 10:30 AM",
    source: "Online Store",
    receipt: "/",
    orderItems: orderItemsVariant2,
  },
  {
    id: 1,
    customer: customers[4],
    orderType: "Online Order Pickup",
    amount: 59.99,
    status: {
      paymentStatus: "Paid",
      shippingStatus: "Shipped",
      orderStatus: "Completed",
      paymentType: "Credit Card",
    },
    orderDate: "2024-06-15, 10:30 AM",
    source: "Online Store",
    receipt: "/",
    orderItems: orderItemsVariant1,
  },
];
