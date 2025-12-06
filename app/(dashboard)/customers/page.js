"use server";

import { Customers } from "@/containers";

import data from "@/dummy/data";

export default async function Page() {
  return (
    <main className="container">
      <Customers data={data.CUSTOMERS_DATA} />
    </main>
  );
}
