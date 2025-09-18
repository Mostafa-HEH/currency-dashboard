import { useState } from "react";

const NavLinks = () => {
  const [activeTab, setActiveTab] = useState("Dashboard");

  return (
    <ul className="flex items-center space-x-6">
      {navigationItems.map((item) => {
        const isActive = activeTab === item.name;
        return (
          <li key={item.name} className="relative">
            <button
              onClick={() => setActiveTab(item.name)}
              className={`relative px-1 py-2 text-sm font-bold transition-colors cursor-pointer ${
                isActive ? "text-[#EF4444]" : "text-black hover:text-gray-600"
              }`}
            >
              {item.name}
              {item.hasNotification && (
                <div className="absolute -top-1 -right-1 w-2 h-2 bg-[#B91C1C] rounded-full" />
              )}
            </button>
            {isActive && (
              <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#EF4444] rounded-tl-full rounded-tr-full" />
            )}
          </li>
        );
      })}
    </ul>
  );
};

export default NavLinks;

const navigationItems = [
  { name: "Dashboard", hasNotification: false },
  { name: "Pools", hasNotification: false },
  { name: "Tokens", hasNotification: true },
  { name: "Market", hasNotification: false },
  { name: "NFT", hasNotification: false },
];
