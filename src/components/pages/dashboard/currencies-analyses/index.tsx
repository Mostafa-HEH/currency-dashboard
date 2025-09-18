import CurrencyRate from "@/components/ui/currency-rate";

const CurrenciesAnalyses = () => {
  return (
    <div className="bg-white p-6 rounded-xl grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-6 gap-4">
      {currencies_data.map((currency, idx) => (
        <div key={idx} className="min-w-[240px]">
          <CurrencyRate
            logo={currency.logo}
            symbol={currency.symbol}
            price={currency.price}
            change={currency.change}
          />
        </div>
      ))}
    </div>
  );
};

export default CurrenciesAnalyses;

const shibData = {
  logo: "/solana_logo.png",
  symbol: "SHIB",
  price: "$0.00002642",
  change: 1.56,
};

const ltcData = {
  logo: "/solana_logo.png",
  symbol: "LTC",
  price: "$106.42",
  change: 1.56,
};

const xrpData = {
  logo: "/solana_logo.png",
  symbol: "XRP",
  price: "$0.8235",
  change: 1.56,
};

const trxData = {
  logo: "/solana_logo.png",
  symbol: "TRX",
  price: "$1.01",
  change: 1.56,
};

const sushibData = {
  logo: "/solana_logo.png",
  symbol: "SUSHI",
  price: "$2.642",
  change: 1.56,
};

const currencies_data = [shibData, ltcData, xrpData, trxData, sushibData];
