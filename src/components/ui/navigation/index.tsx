"use client";
import { Menu } from "lucide-react";
import Logo from "./logo";
import NavLinks from "./nav-links";
import SearchInput from "./search";
import User from "./user";
import { useState } from "react";
import MobileDrawer from "./mobile-drawer";

const Navigation = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <>
      <nav className="w-full px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-8">
            <Logo />
            <div className="hidden md:block">
              <NavLinks />
            </div>
          </div>

          <div className="items-center space-x-4 hidden md:flex">
            <SearchInput />
            <User />
          </div>

          <button
            onClick={() => setIsDrawerOpen(!isDrawerOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Toggle mobile menu"
          >
            <Menu size={24} className="text-gray-700" />
          </button>
        </div>
      </nav>
      <MobileDrawer open={isDrawerOpen} setOpen={setIsDrawerOpen} />
    </>
  );
};

export default Navigation;
