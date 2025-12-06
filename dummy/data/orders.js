import { CUSTOMERS_DATA } from "./customers.js";

const customers = CUSTOMERS_DATA;

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

const ordersData = [];
export const orderTypes = [
  "Online Order Pickup",
  "Dine-in",
  "Takeaway",
  "Delivery",
];
export const orderStatuses = ["Paid", "Pending", "Cancelled"];
const paymentTypes = ["Credit Card", "Cash", "Mobile Payment"];
const orderSources = ["Online Store", "In-Person"];
const orderVariants = [orderItemsVariant1, orderItemsVariant2];

for (let i = 0; i < 35; i++) {
  const d = new Date();
  const date = d.setDate(d.getDate() - i);

  const orderType = orderTypes[Math.floor(Math.random() * 4)];
  const paymentStatus = orderStatuses[Math.floor(Math.random() * 3)];
  const paymentType = paymentTypes[Math.floor(Math.random() * 3)];
  const orderSource = orderSources[Math.floor(Math.random() * 2)];
  const orderVariant = orderVariants[Math.floor(Math.random() * 2)];
  const customer = customers[Math.floor(Math.random() * customers.length)];

  ordersData.push({
    id: i,
    customer: customer,
    orderType: orderType,
    amount: 59.99,
    status: {
      paymentStatus: paymentStatus,
      paymentType: paymentType,
    },
    orderDate: date,
    source: orderSource,
    receipt: "/",
    orderItems: orderVariant,
    receipt: {
      url: "/",
      label: "Receipt-SOA" + i,
    },
  });
}

export const ORDERS_DATA = ordersData;
