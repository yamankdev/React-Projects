import Banners from "./components/Banners";
import ProductBoxGrid from "./components/ProductBoxGrid";
import ProductSlideGrid from "./components/ProductSlideGrid";

function DesktopLayout() {
  return (
    <div className="lg:flex lg:flex-col lg:gap-3 lg:bg-white">
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
    </div>
  );
}

export default DesktopLayout;
