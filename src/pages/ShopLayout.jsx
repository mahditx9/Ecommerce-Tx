import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar/Navbar";
import ShopCard from "../components/ShopCard/ShopCard";
import { useShopCard } from "../contexts/shopCard";
function ShopLayout() {
  const { isOpen } = useShopCard();
  return (
    <div className="bg-bgDArk relative">
      <Navbar />
      {isOpen && <ShopCard />}
      <div className="w-full  relative h-[100%]  py-14 lg:py-[5rem] xl:py-[9rem]">
        <Outlet />
      </div>
    </div>
  );
}

export default ShopLayout;
