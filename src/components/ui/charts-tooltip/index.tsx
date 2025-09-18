interface ChartsTooltipProps {
  active?: boolean;
  payload?: Array<{
    value: number;
    payload: {
      value: number;
      dataKey: string;
    };
  }>;
}

const ChartsTooltip = ({ active, payload }: ChartsTooltipProps) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-[#0f172a] text-white px-2 py-1 rounded-lg shadow">
        {payload[0].value}B
      </div>
    );
  }
  return null;
};

export default ChartsTooltip;
