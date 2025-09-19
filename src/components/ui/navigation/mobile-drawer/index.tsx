"use client";
import { Dispatch, SetStateAction } from "react";
import { X } from "lucide-react";
import NavLinks from "../nav-links";
import SearchInput from "../search";
import User from "../user";

const MobileDrawer = ({
  open,
  setOpen,
}: {
  open: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
}) => {
  return (
    <>
      {open && (
        <div
          className="fixed inset-0 bg-opacity-50 z-50 md:hidden"
          onClick={() => setOpen(false)}
        />
      )}

      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-xl transform transition-transform duration-300 ease-in-out z-50 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <button
            onClick={() => setOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
            aria-label="Close mobile menu"
          >
            <X size={24} className="text-gray-700" />
          </button>
        </div>

        <div className="flex flex-col p-6 space-y-6">
          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Search
            </h3>
            <SearchInput />
          </div>

          <div className="space-y-3">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Navigation
            </h3>
            <div onClick={() => setOpen(false)}>
              <NavLinks />
            </div>
          </div>

          <div className="space-y-3 pt-6 border-t border-gray-200">
            <h3 className="text-sm font-medium text-gray-500 uppercase tracking-wide">
              Account
            </h3>
            <User />
          </div>
        </div>
      </div>
    </>
  );
};

export default MobileDrawer;
