import { ArrowUpRight, ArrowDownRight } from "lucide-react";
import Image from "next/image";

type CurrencyRateProps = {
  logo: string;
  symbol: string;
  price: string;
  change: number;
};

const CurrencyRate = ({ logo, symbol, price, change }: CurrencyRateProps) => {
  const isPositive = change >= 0;

  return (
    <div className="p-4 flex items-center gap-4 bg-red-50 rounded-2xl">
      <div className="w-12 h-12 rounded-full relative">
        <Image src={logo} alt={symbol} fill />
      </div>

      <div className="flex flex-col">
        <span className="text-gray-600 font-semibold">{symbol}</span>
        <span className="text-2xl font-bold">{price}</span>
        <div className="flex items-center gap-1 mt-1">
          {isPositive ? (
            <ArrowUpRight size={16} className="text-green-600" />
          ) : (
            <ArrowDownRight size={16} className="text-red-600" />
          )}
          <span
            className={`text-sm font-medium ${
              isPositive ? "text-green-600" : "text-red-600"
            }`}
          >
            {change}%
          </span>
        </div>
      </div>
    </div>
  );
};

export default CurrencyRate;
