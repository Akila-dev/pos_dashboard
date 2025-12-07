"use server";

import { Overview } from "@/containers";
import { OrderListTable, Button } from "@/components";

import data from "@/dummy/data";

export default async function Page() {
  return (
    <main className="container space-y-3">
      <Overview data={data.INFOGRAPHICS_DATA} />
      <div>
        <div className="flex-between pb-1.5">
          <h4>Recent Orders</h4>
          <Button text="View All" link="/orders" />
        </div>
        <div className="card-1">
          <OrderListTable data={data.ORDERS_DATA.splice(0, 5)} noFiltering />
        </div>
      </div>
    </main>
  );
}
