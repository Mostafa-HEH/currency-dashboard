import Drawer from "../drawer";
import Navigation from "../navigation";

const MainLayouts = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <div className="bg-[#FEF2F2] h-screen flex flex-col overflow-hidden">
      <Navigation />
      <div className="flex h-[calc(100dvh-64px)]">
        <Drawer />
        <div className="p-4 flex-1 overflow-auto">{children}</div>
      </div>
    </div>
  );
};

export default MainLayouts;
