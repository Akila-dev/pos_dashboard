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
    <div className="w-full h-20 sm">
      <ResponsiveContainer width="100%" height="100%">
        <LineChart
          data={data}
          margin={{ top: 10, right: 20, bottom: 10, left: 0 }}
        >
          {/* Light subtle grid */}
          <CartesianGrid stroke="#E5E7EB" strokeWidth={0.7} vertical={false} />

          {/* X Axis */}
          <XAxis
            dataKey="date"
            tick={{ fontSize: 11, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
            interval="preserveStartEnd"
            minTickGap={20}
          />

          {/* Y Axis */}
          <YAxis
            tick={{ fontSize: 11, fill: "#6B7280" }}
            axisLine={false}
            tickLine={false}
            width={35}
          />

          {/* Modern Tooltip */}
          <Tooltip
            contentStyle={{
              background: "white",
              border: "1px solid #E5E7EB",
              borderRadius: "6px",
              fontSize: "12px",
            }}
          />

          {/* Revenue Line (blue) */}
          <Line
            type="linear"
            dataKey="revenue"
            stroke="#3B82F6"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, strokeWidth: 1 }}
            animationDuration={500}
          />

          {/* Orders Line (red) */}
          <Line
            type="linear"
            dataKey="orders"
            stroke="#EF4444"
            strokeWidth={2}
            dot={false}
            activeDot={{ r: 5, strokeWidth: 1 }}
            animationDuration={500}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default OverviewInfoGraphics;
