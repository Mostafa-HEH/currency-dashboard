import Image from "next/image";
import { MoreHorizontal } from "lucide-react";
import {
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
  Area,
  AreaChart,
} from "recharts";

const TotalCurrencies = () => {
  const data = [
    { month: "Jan", value: 3.2 },
    { month: "Feb", value: 2.8 },
    { month: "Mar", value: 3.5 },
    { month: "Apr", value: 5.2 },
    { month: "May", value: 4.8 },
    { month: "Jun", value: 6.9 },
    { month: "Jul", value: 3.8 },
    { month: "Aug", value: 6.2 },
    { month: "Sep", value: 5.8 },
    { month: "Oct", value: 4.5 },
    { month: "Nov", value: 5.2 },
    { month: "Dec", value: 6.8 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl h-full">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="w-12 h-12 bg-gray-900 rounded-full flex items-center justify-center">
            <div className="w-8 h-8 relative">
              <Image
                src="/solana_logo.png"
                alt="TVL"
                fill
                className="rounded-full"
              />
            </div>
          </div>
          <div>
            <p className="text-sm text-gray-500 mb-1">TVL</p>
            <p className="text-2xl font-bold text-gray-900">$4.86B</p>
          </div>
        </div>

        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="h-40 w-full">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={data}
            margin={{ top: 20, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#f87171" stopOpacity={0.3} />
                <stop offset="100%" stopColor="#f87171" stopOpacity={0.05} />
              </linearGradient>
            </defs>
            <CartesianGrid
              strokeDasharray="0"
              vertical={false}
              stroke="#f3f4f6"
              strokeWidth={1}
            />
            <XAxis
              dataKey="month"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 12, fill: "#9ca3af" }}
              dy={10}
            />
            <YAxis hide />
            <Tooltip
              content={<CustomTooltip />}
              cursor={{
                stroke: "#6b7280",
                strokeWidth: 1,
                strokeDasharray: "3 3",
              }}
            />
            <Area
              type="monotone"
              dataKey="value"
              stroke="#f87171"
              strokeWidth={2.5}
              fill="url(#colorValue)"
              dot={false}
              activeDot={{
                r: 4,
                fill: "#fff",
                stroke: "#374151",
                strokeWidth: 2,
              }}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TotalCurrencies;

interface CustomTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      value: number;
      dataKey: string;
    };
  }>;
}
const CustomTooltip = ({ active, payload }: CustomTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f172a] text-white px-2 py-1 rounded-lg shadow">
        {payload[0].value}B
      </div>
    );
  }
  return null;
};
