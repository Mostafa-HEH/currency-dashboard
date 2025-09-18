"use client";
import { ChevronDown, Search } from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const Navigation = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  const navigationItems = [
    { name: "Dashboard", hasNotification: false },
    { name: "Pools", hasNotification: false },
    { name: "Tokens", hasNotification: true },
    { name: "Market", hasNotification: false },
    { name: "NFT", hasNotification: false },
  ];

  return (
    <header className="w-full bg-white border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-8">
          <div className="flex items-center">
            <span className="text-xl font-bold text-gray-900">nanoVOLTZ</span>
          </div>

          <nav className="flex items-center space-x-6">
            {navigationItems.map((item) => (
              <div key={item.name} className="relative">
                <button
                  onClick={() => setActiveTab(item.name)}
                  className={`relative px-1 py-2 text-sm font-medium transition-colors ${
                    activeTab === item.name
                      ? "text-gray-900"
                      : "text-gray-500 hover:text-gray-700"
                  }`}
                >
                  {item.name}
                  {item.hasNotification && (
                    <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                  )}
                </button>
                {activeTab === item.name && (
                  <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-red-500 rounded-full"></div>
                )}
              </div>
            ))}
          </nav>
        </div>

        <div className="flex items-center space-x-4">
          <div className="relative">
            <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
              <Search className="w-4 h-4 text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="Search pools or tokens"
              className="pl-10 pr-4 py-2 w-64 text-sm border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
            />
          </div>

          <div className="flex items-center space-x-2 cursor-pointer hover:bg-gray-50 rounded-lg p-2 transition-colors">
            <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden relative">
              <Image
                src="/solana_logo.png"
                alt="Profile"
                className="w-full h-full object-cover"
                fill
              />
            </div>
            <ChevronDown className="w-4 h-4 text-gray-500" />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navigation;
