import ChartsTooltip from "@/components/ui/charts-tooltip";
import { useState } from "react";
import {
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const CurrencyVolume = () => {
  const [activeRange, setActiveRange] = useState("1Y");

  const data = [
    { month: "Jan", value: 100 },
    { month: "Feb", value: 80 },
    { month: "Mar", value: 90 },
    { month: "Apr", value: 130 },
    { month: "May", value: 120 },
    { month: "Jun", value: 140 },
    { month: "Jul", value: 100 },
    { month: "Aug", value: 95 },
    { month: "Sep", value: 150 },
    { month: "Oct", value: 140 },
    { month: "Nov", value: 130 },
    { month: "Dec", value: 110 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl">
      {/* Header */}
      <div className="flex justify-between items-start mb-4">
        <div>
          <p className="text-sm text-gray-500">Volume {activeRange}</p>
          <p className="text-2xl font-bold">$1.42T</p>
        </div>
        <div className="flex gap-2">
          {["1W", "1M", "1Y"].map((range) => (
            <button
              key={range}
              onClick={() => setActiveRange(range)}
              className={`px-3 py-1 rounded-lg text-sm font-medium ${
                activeRange === range
                  ? "bg-red-200 text-red-700"
                  : "bg-pink-50 text-gray-600"
              }`}
            >
              {range}
            </button>
          ))}
        </div>
      </div>

      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <CartesianGrid
              strokeDasharray="3 3"
              vertical={false}
              stroke="#eee"
            />
            <XAxis dataKey="month" axisLine={false} tickLine={false} />
            <YAxis hide />
            <Tooltip
              content={<ChartsTooltip />}
              cursor={{ fill: "rgba(0,0,0,0.05)" }}
            />
            <Bar dataKey="value" fill="#fca5a5" radius={[4, 4, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="flex gap-6 mt-3 px-4">
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-green-500"></span>
          <span className="text-sm text-gray-600">Legend</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
          <span className="text-sm text-gray-600">Legend</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="text-sm text-gray-600">Legend</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-pink-500"></span>
          <span className="text-sm text-gray-600">Legend</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-3 h-3 rounded-full bg-orange-500"></span>
          <span className="text-sm text-gray-600">Legend</span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyVolume;
