"use server";

import { Overview } from "@/containers";

export default async function Page() {
  return (
    <main className="container">
      <Overview />
    </main>
  );
}
