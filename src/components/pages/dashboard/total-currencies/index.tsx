import ChartsTooltip from "@/components/ui/charts-tooltip";
import Image from "next/image";
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const TotalCurrencies = () => {
  const data = [
    { month: "Jan", value: 5.2 },
    { month: "Feb", value: 3.8 },
    { month: "Mar", value: 4.2 },
    { month: "Apr", value: 6.0 },
    { month: "May", value: 5.3 },
    { month: "Jun", value: 6.9 },
    { month: "Jul", value: 4.8 },
    { month: "Aug", value: 7.2 },
    { month: "Sep", value: 6.4 },
    { month: "Oct", value: 5.0 },
    { month: "Nov", value: 5.8 },
    { month: "Dec", value: 7.0 },
  ];

  return (
    <div className="bg-white p-6 rounded-xl">
      <div className="flex items-center gap-3 mb-4">
        <div className="w-8 h-8 relative">
          <Image src="/solana_logo.png" alt="Solana" fill className="w-8 h-8" />
        </div>
        <div>
          <p className="text-sm text-gray-500">TVL</p>
          <p className="text-xl font-bold">$4.86B</p>
        </div>
      </div>
      <ResponsiveContainer width="100%" height={250}>
        <LineChart data={data}>
          <defs>
            <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="#f87171" stopOpacity={0.3} />
              <stop offset="100%" stopColor="#f87171" stopOpacity={0} />
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#eee" />
          <XAxis dataKey="month" axisLine={false} tickLine={false} />
          <YAxis hide />
          <Tooltip content={<ChartsTooltip />} cursor={false} />
          <Line
            type="monotone"
            dataKey="value"
            stroke="#f87171"
            strokeWidth={3}
            dot={false}
            activeDot={{
              r: 6,
              fill: "#fff",
              stroke: "#111",
              strokeWidth: 2,
            }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalCurrencies;

