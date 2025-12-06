"use server";

import { Orders } from "@/containers";

import data from "@/dummy/data";

export default async function Page() {
  return (
    <main className="container">
      <Orders data={data.ORDERS_DATA} />
    </main>
  );
}
