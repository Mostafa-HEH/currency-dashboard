import { Search } from "lucide-react";

const SearchInput = () => {
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none">
        <Search className="w-4 h-4 text-gray-400" />
      </div>
      <input
        type="text"
        placeholder="Search pools or tokens"
        className="pl-10 pr-4 py-2 w-64 text-sm bg-white rounded-full focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none"
      />
    </div>
  );
};

export default SearchInput;
