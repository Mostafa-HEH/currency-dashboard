"use client";
import Logo from "./logo";
import NavLinks from "./nav-links";
import SearchInput from "./search";
import User from "./user";

const Navigation = () => {
  return (
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
      </div>
    </nav>
  );
};

export default Navigation;
