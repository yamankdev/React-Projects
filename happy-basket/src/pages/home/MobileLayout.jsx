import MobileFooter from "../../components/layout/footer/MobileFooter";
import MobileNavbar from "../../components/layout/Navbar/MobileNavbar";
import Banners from "./components/Banners";
import ProductBoxGrid from "./components/ProductBoxGrid";
import ProductSlideGrid from "./components/ProductSlideGrid";
import FloatingNav from "../../components/layout/navbar/FloatingNav";

function MobileLayout({ children }) {
  return (
    <div className="bg-gray-200">
      <div className="lg:hidden">
        <MobileNavbar />
      </div>
      <Banners />
      <ProductSlideGrid category={"Rice & Grains"} bgColor={"bg-yellow-300"} />
      <ProductSlideGrid
        category={"Snacks & Confectionery"}
        bgColor={"bg-yellow-300"}
      />
      <ProductBoxGrid category={"Personal Care"} bgColor={"bg-green-300"} />
      <ProductBoxGrid category={"Fruits"} bgColor={"bg-green-300"} />
      <ProductSlideGrid category={"Vegetables"} bgColor={"bg-yellow-300"} />
      <ProductBoxGrid category={"Bakery"} bgColor={"bg-green-300"} />
      <ProductBoxGrid category={"Beverages"} bgColor={"bg-green-300"} />
      <ProductSlideGrid category={"Households"} bgColor={"bg-yellow-300"} />
      <ProductSlideGrid
        category={"Cooking Essentials"}
        bgColor={"bg-yellow-300"}
      />
      <div className="lg:hidden">
        <FloatingNav />
        <MobileFooter />
      </div>
    </div>
  );
}

export default MobileLayout;
