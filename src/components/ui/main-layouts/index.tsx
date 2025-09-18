import Drawer from "../drawer";
import Navigation from "../navigation";

const MainLayouts = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-[#FEF2F2] min-h-[100dvh]">
      <Navigation />
      <div className="flex">
        <Drawer />
        <div className="p-4 flex-1">{children}</div>
      </div>
    </div>
  );
};

export default MainLayouts;
