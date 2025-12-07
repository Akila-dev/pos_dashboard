"use client";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

const OverviewInfoGraphics = ({ data }) => {
  return (
    <div className="w-full h-20">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 20, right: 20, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="2 2" />
          <XAxis dataKey="date" tick={{ fontSize: 12 }} />
          <YAxis tick={{ fontSize: 12 }} />
          <Tooltip />

          {/* Blue line (Revenue) */}
          <Line
            dataKey="revenue"
            stroke="#1D4ED8" // blue
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />

          {/* Red line (Orders) */}
          <Line
            dataKey="orders"
            stroke="#DC2626" // red
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 6 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewInfoGraphics;
