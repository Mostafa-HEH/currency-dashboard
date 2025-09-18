import { ChevronDown } from "lucide-react";
import Image from "next/image";

const User = () => {
  return (
    <div className="flex items-center space-x-2 rounded-lg p-2 transition-colors">
      <div className="w-8 h-8 bg-gray-300 rounded-full flex items-center justify-center overflow-hidden relative">
        <Image
          src="/user.jpg"
          alt="Profile"
          className="w-full h-full object-cover"
          fill
        />
      </div>
      <button className="bg-[#FEE2E2] w-6 h-6 rounded-lg flex items-center justify-center cursor-pointer">
        <ChevronDown className="w-4 h-4 text-gray-500" />
      </button>
    </div>
  );
};

export default User;
