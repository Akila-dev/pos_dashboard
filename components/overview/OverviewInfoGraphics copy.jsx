"use client";

import { CartesianGrid, Legend, Line, LineChart, XAxis, YAxis } from "recharts";

const OverviewInfoGraphics = ({ data }) => {
  return (
    <div>
      <LineChart
        style={{
          width: "100%",

          height: "20em",
        }}
        responsive
        data={data}
      >
        <CartesianGrid />
        <Line dataKey="val_1" stroke="var(--color-blue-600)" />
        <Line dataKey="val_2" stroke="var(--color-red-600)" />
        <XAxis dataKey="date" />
        <YAxis />
        <Legend />
      </LineChart>
    </div>
  );
};

export default OverviewInfoGraphics;
