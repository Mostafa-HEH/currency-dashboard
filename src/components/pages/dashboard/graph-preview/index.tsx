import DetailBox from "@/components/ui/detail-box";

const GraphPreview = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-16">
      {BoxesData?.map((box, index) => (
        <div key={index} className="md:col-span-3">
          <DetailBox {...box} />
        </div>
      ))}
    </div>
  );
};

export default GraphPreview;

const tvlPoints = [
  { x: 0, y: 65 },
  { x: 15, y: 62 },
  { x: 30, y: 58 },
  { x: 45, y: 55 },
  { x: 60, y: 52 },
];

const circulatingSupplyPoints = [
  { x: 0, y: 25 },
  { x: 15, y: 28 },
  { x: 30, y: 32 },
  { x: 45, y: 35 },
  { x: 60, y: 38 },
];

const pricePoints = [
  { x: 0, y: 45 },
  { x: 15, y: 44 },
  { x: 30, y: 46 },
  { x: 45, y: 45 },
  { x: 60, y: 47 },
];

const BoxesData = [
  {
    label: "TVL",
    points: circulatingSupplyPoints,
    price: "$4.86B",
    change: "1.56%",
    icon: "up",
  },
  {
    label: "Circulating Supply",
    points: tvlPoints,
    price: "285,277,770",
    change: "1.56%",
    icon: "down",
  },
  {
    label: "Price",
    points: pricePoints,
    price: "$0.51",
    change: "0.00%",
    icon: "neutral",
  },
];
