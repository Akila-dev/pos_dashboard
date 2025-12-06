"use server";

import { notFound } from "next/navigation";

import { OrderInfoCard, CustomerInfoCard, OrderItemsTable } from "@/components";
import data from "@/dummy/data";

// // ! Static params function
// export async function generateStaticParams() {
//   const orders = await

//   return orders.map((order) => ({
//     slug: order.slug,
//   }));
// }

// // ! Get data function
// async function getPageData(params) {
//   const page_data = await

//   return page_data;
// }

// // ! Dynamic metadata function
// export async function generateMetadata({ params }) {
//   const page_data = await getPageData(params);
//   if (!page_data) return { title: "Not found" };

//   return {
//     title: `${page_data.name} | Limitless`,
//     description: page_data.hero.subtitle || page_data.hero.paragraph || "",
//     openGraph: {
//       title: page_data.name,
//       description: page_data.hero.subtitle || page_data.hero.paragraph || "",
//     },
//   };
// }

export default async function Page({ params }) {
  // const page_data = await getPageData(params);
  // if (!page_data) return notFound();

  const p_slug = await params;

  const page_data = data.ORDERS_DATA.find(
    (order) => String(order.id) === String(p_slug.slug)
  );

  return (
    <main className="container">
      <div className="flex flex-col gap-2 lg:gap-3">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-1.5 lg:gap-2">
          <OrderInfoCard
            paymentStatus={page_data?.status?.paymentStatus}
            orderId={page_data?.id}
            orderDate={page_data?.orderDate}
            orderingMethod={page_data?.orderType}
            paymentMethod={page_data?.status?.paymentType}
            receipt={page_data?.receipt}
            orderSource={page_data?.source}
          />
          <CustomerInfoCard data={page_data?.customer} />
        </div>
        {/* Table */}
        <div>
          <h3 className="mb-0.75">Order Items</h3>
          <div className="card-0">
            <OrderItemsTable data={page_data?.orderItems} />
          </div>
        </div>
      </div>
    </main>
  );
}
