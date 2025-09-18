import React from "react";
import { TrendingUp, MoreHorizontal } from "lucide-react";

const DetailBox = () => {
  const generateChartPath = () => {
    const points = [
      { x: 0, y: 60 },
      { x: 15, y: 55 },
      { x: 30, y: 58 },
      { x: 45, y: 52 },
      { x: 60, y: 48 },
      { x: 75, y: 45 },
      { x: 90, y: 42 },
      { x: 105, y: 38 },
      { x: 120, y: 35 },
      { x: 135, y: 32 },
      { x: 150, y: 30 },
      { x: 165, y: 28 },
      { x: 180, y: 25 },
      { x: 195, y: 22 },
      { x: 210, y: 20 },
      { x: 225, y: 18 },
      { x: 240, y: 15 },
      { x: 255, y: 12 },
      { x: 270, y: 10 },
      { x: 285, y: 8 },
      { x: 300, y: 5 },
    ];

    const pathData = points.map((point, index) => {
      if (index === 0) {
        return `M ${point.x} ${point.y}`;
      }

      const prevPoint = points[index - 1];
      const controlX1 = prevPoint.x + (point.x - prevPoint.x) / 3;
      const controlY1 = prevPoint.y;
      const controlX2 = point.x - (point.x - prevPoint.x) / 3;
      const controlY2 = point.y;

      return `C ${controlX1} ${controlY1} ${controlX2} ${controlY2} ${point.x} ${point.y}`;
    });

    return pathData.join(" ");
  };

  const chartPath = generateChartPath();
  const fillPath = chartPath + " L 300 80 L 0 80 Z";

  return (
    <div className="bg-white rounded-2xl p-6">
      <div className="flex justify-between items-start mb-2">
        <div>
          <h3 className="text-gray-500 text-sm font-medium mb-1">TVL</h3>
          <div className="text-3xl font-bold text-gray-900 mb-2">$4.86B</div>

          <div className="flex items-center gap-1">
            <TrendingUp className="w-4 h-4 text-emerald-500" />
            <span className="text-emerald-500 font-medium text-sm">1.56%</span>
          </div>
        </div>

        <button className="p-1 hover:bg-gray-100 rounded-full transition-colors">
          <MoreHorizontal className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      <div className="mt-6 h-20 relative">
        <svg
          width="300"
          height="80"
          viewBox="0 0 300 80"
          className="absolute inset-0 w-full h-full"
        >
          <defs>
            <linearGradient
              id="chartGradient"
              x1="0%"
              y1="0%"
              x2="0%"
              y2="100%"
            >
              <stop
                offset="0%"
                stopColor="rgb(16, 185, 129)"
                stopOpacity="0.2"
              />
              <stop
                offset="100%"
                stopColor="rgb(16, 185, 129)"
                stopOpacity="0.05"
              />
            </linearGradient>
          </defs>

          <path
            d={fillPath}
            fill="url(#chartGradient)"
            className="opacity-60"
          />

          <path
            d={chartPath}
            stroke="rgb(16, 185, 129)"
            strokeWidth="2.5"
            fill="none"
            className="drop-shadow-sm"
          />
        </svg>
      </div>
    </div>
  );
};

export default DetailBox;
