"use server";

import { notFound } from "next/navigation";

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

  return (
    <div className="">
      <main className="">Page</main>
    </div>
  );
}
