import Banners from "../components/Banners";
import FloatingNav from "../components/FloatingNav";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import ProductBoxGrid from "../components/ProductBoxGrid";
import ProductSlideGrid from "../components/ProductSlideGrid";
import { useData } from "../context/ApiDataProvider";
import { SlArrowRight } from "react-icons/sl";

function Homepage() {
  const { data, loading, error } = useData();
  const user = localStorage.getItem("mobile");

  return (
    <div className="bg-gray-200">
      <Navbar data={data} />
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
      <FloatingNav />
      <Footer />
    </div>
  );
}

export default Homepage;
