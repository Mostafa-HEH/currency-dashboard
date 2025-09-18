import {
  BarChart3,
  Gamepad2,
  Home,
  MessageCircle,
  MoreHorizontal,
  Plus,
  Settings,
  Users,
} from "lucide-react";

const Drawer = () => {
  return (
    <div className="w-20 h-screen bg-gray-50 flex flex-col items-center py-6 space-y-4">
      <div className="bg-pink-200 rounded-2xl p-4 hover:bg-pink-300 transition-colors cursor-pointer">
        <Plus className="w-6 h-6 text-gray-800" />
      </div>

      <div className="flex flex-col space-y-4">
        <div className="p-3 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer">
          <Home className="w-6 h-6 text-gray-600" />
        </div>

        <div className="relative p-3 rounded-xl bg-pink-200 cursor-pointer">
          <BarChart3 className="w-6 h-6 text-gray-800" />
          <div className="absolute -top-1 -right-1 w-3 h-3 bg-red-500 rounded-full"></div>
        </div>

        <div className="p-3 rounded-xl bg-gray-600 hover:bg-gray-700 transition-colors cursor-pointer">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>

        <div className="p-3 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer">
          <Gamepad2 className="w-6 h-6 text-gray-600" />
        </div>

        <div className="relative p-3 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer">
          <Users className="w-6 h-6 text-gray-600" />
          <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center">
            <span className="text-white text-xs font-bold">9</span>
          </div>
        </div>

        <div className="p-3 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer">
          <Settings className="w-6 h-6 text-gray-600" />
        </div>

        <div className="p-3 rounded-xl hover:bg-gray-200 transition-colors cursor-pointer">
          <MoreHorizontal className="w-6 h-6 text-gray-600" />
        </div>
      </div>
    </div>
  );
};

export default Drawer;
