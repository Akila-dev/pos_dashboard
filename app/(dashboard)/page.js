"use server";

import { Overview } from "@/containers";

import data from "@/dummy/data";

export default async function Page() {
  return (
    <main className="container">
      <Overview data={data.INFOGRAPHICS_DATA} />
    </main>
  );
}
