import React from "react";
import { TrendingUp, TrendingDown, MoreHorizontal, Minus } from "lucide-react";
import { AreaChart, Area, ResponsiveContainer, YAxis } from "recharts";

interface DetailBoxProps {
  points: { x: number; y: number }[];
  label: string;
  price: string;
  change: string;
  icon: string;
}

const DetailBox = ({ points, label, price, change, icon }: DetailBoxProps) => {
  const chartData = points.map((point, index) => ({
    index,
    value: point.y,
    x: point.x,
  }));

  const getThemeConfig = () => {
    switch (icon) {
      case "up":
        return {
          iconComponent: TrendingUp,
          textColor: "text-emerald-500",
          strokeColor: "#10b981",
          gradientId: `chartGradientGreen-${Math.random()
            .toString(36)
            .substr(2, 9)}`,
        };
      case "down":
        return {
          iconComponent: TrendingDown,
          textColor: "text-red-500",
          strokeColor: "#ef4444",
          gradientId: `chartGradientRed-${Math.random()
            .toString(36)
            .substr(2, 9)}`,
        };
      case "neutral":
      default:
        return {
          iconComponent: Minus,
          textColor: "text-gray-500",
          strokeColor: "#6b7280",
          gradientId: `chartGradientGray-${Math.random()
            .toString(36)
            .substr(2, 9)}`,
        };
    }
  };

  const themeConfig = getThemeConfig();
  const IconComponent = themeConfig.iconComponent;

  return (
    <div className="bg-white rounded-2xl h-48 p-6">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">{label}</h3>
          <div className="text-2xl font-bold text-gray-900 mb-2">{price}</div>

          <div className="flex items-center gap-1">
            <IconComponent className={`w-4 h-4 ${themeConfig.textColor}`} />
            <span className={`${themeConfig.textColor} font-medium text-sm`}>
              {change}
            </span>
          </div>
        </div>

        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="h-16 relative -mx-2">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 5, right: 10, left: 10, bottom: 5 }}
          >
            <defs>
              <linearGradient
                id={themeConfig.gradientId}
                x1="0"
                y1="0"
                x2="0"
                y2="1"
              >
                <stop
                  offset="0%"
                  stopColor={themeConfig.strokeColor}
                  stopOpacity={0.3}
                />
                <stop
                  offset="100%"
                  stopColor={themeConfig.strokeColor}
                  stopOpacity={0.0}
                />
              </linearGradient>
            </defs>
            <YAxis hide domain={["dataMin - 5", "dataMax + 5"]} />
            <Area
              type="monotone"
              dataKey="value"
              stroke={themeConfig.strokeColor}
              strokeWidth={2}
              fill={`url(#${themeConfig.gradientId})`}
              dot={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default DetailBox;
