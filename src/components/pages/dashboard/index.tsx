"use client";

import DetailBox from "@/components/ui/detail-box";
import CurrenciesAnalyses from "./currencies-analyses";
import CurrencyVolume from "./currency-volume";
import EmployeesTable from "./employees-table";
import TotalCurrencies from "./total-currencies";

const DashboardConatiner = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
      <div className="md:col-span-6">
        <TotalCurrencies />
      </div>
      <div className="md:col-span-6">
        <CurrencyVolume />
      </div>
      <div className="md:col-span-12">
        <CurrenciesAnalyses />
      </div>
      <div className="md:col-span-12">
        <EmployeesTable />
      </div>
      <div className="md:col-span-3">
        <DetailBox />
      </div>
      <div className="md:col-span-3">
        <DetailBox />
      </div>
      <div className="md:col-span-3">
        <DetailBox />
      </div>
    </div>
  );
};

export default DashboardConatiner;
