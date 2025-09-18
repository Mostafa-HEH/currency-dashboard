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
    <div className="w-20 h-screen flex flex-col items-center py-6 space-y-4">
      <div className="bg-[#FECACA] h-14 w-14 rounded-2xl cursor-pointer flex items-center justify-center">
        <Plus className="w-6 h-6 text-gray-800" />
      </div>

      <div className="flex flex-col my-auto gap-4">
        {drawerLinks.map((link, idx) => {
          const isActive = link.link === "/";

          return (
            <div
              key={idx}
              className={`w-14 h-14 rounded-full cursor-pointer hover:bg-[#FEE2E2] transition-colors relative ${
                isActive ? "bg-[#FEE2E2]" : ""
              } flex items-center justify-center`}
            >
              <link.icon className="w-6 h-6 text-[#475569]" />
              {link?.notification > 0 && (
                <div className="absolute -top-0.5 -right-0.5 w-3 h-3 bg-red-500 rounded-full" />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Drawer;

const drawerLinks = [
  { icon: Home, notification: 0, link: "#" },
  { icon: BarChart3, notification: 2, link: "/" },
  { icon: MessageCircle, notification: 0, link: "#" },
  { icon: Gamepad2, notification: 0, link: "#" },
  { icon: Users, notification: 9, link: "#" },
  { icon: Settings, notification: 0, link: "#" },
  { icon: MoreHorizontal, notification: 0, link: "#" },
];
