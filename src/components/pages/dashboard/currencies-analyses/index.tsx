import CurrencyRate from "@/components/ui/currency-rate";

const CurrenciesAnalyses = () => {
  return (
    <div className="bg-white p-6 rounded-xl grid grid-cols-6 gap-4">
      {currencies_data.map((currency, idx) => (
        <CurrencyRate
          key={idx}
          logo={currency.logo}
          symbol={currency.symbol}
          price={currency.price}
          change={currency.change}
        />
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

const currencies_data = [
  shibData,
  shibData,
  shibData,
  shibData,
  shibData,
  shibData,
];
