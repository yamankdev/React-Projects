import Banners from "../components/Banners";
import ProductBoxGrid from "../components/ProductBoxGrid";
import ProductSlideGrid from "../components/ProductSlideGrid";
import { useData } from "../context/ApiDataProvider";
import { SlArrowRight } from "react-icons/sl";

function Homepage() {
  const { data, loading, error } = useData();

  return (
    <div>
      <Banners data={data} />
      <ProductSlideGrid
        data={data}
        category={"Rice & Grains"}
        bgColor={"bg-yellow-300"}
      />
      <ProductSlideGrid
        data={data}
        category={"Snacks & Confectionery"}
        bgColor={"bg-yellow-300"}
      />
      <ProductBoxGrid
        data={data}
        category={"Personal Care"}
        bgColor={"bg-green-300"}
      />
      <ProductBoxGrid
        data={data}
        category={"Fruits"}
        bgColor={"bg-green-300"}
      />
      <ProductSlideGrid
        data={data}
        category={"Vegetables"}
        bgColor={"bg-yellow-300"}
      />
      <ProductBoxGrid
        data={data}
        category={"Bakery"}
        bgColor={"bg-green-300"}
      />
      <ProductBoxGrid
        data={data}
        category={"Beverages"}
        bgColor={"bg-green-300"}
      />
      <ProductSlideGrid
        data={data}
        category={"Households"}
        bgColor={"bg-yellow-300"}
      />
      <ProductSlideGrid
        data={data}
        category={"Cooking Essentials"}
        bgColor={"bg-yellow-300"}
      />
    </div>
  );
}

export default Homepage;
