import { Link, useNavigate } from "react-router-dom";
import { useApiData } from "../../../context/ApiDataProvider";
import ProductSlideCard from "../../productDetails/ProductSlideCard";

import { SlArrowRight } from "react-icons/sl";

function ProductSlideGrid({ category, bgColor }) {
  const { data } = useApiData();
  const navigate = useNavigate();
  let i = 0;

  const handleCategoryProds = (category) => {
    navigate(`/category?c=${category}`);
  };

  return (
    <div
      className="flex flex-col gap-3 px-2 py-3 md:py-5 lg:py-6 lg:w-[80%] lg:m-auto lg:bg-white"
      style={{ backgroundColor: bgColor }}
    >
      {/* Category name for small and medium screen */}
      <h2 className="text-2xl mb-3 lg:hidden">{category}</h2>

      {/* Category name and view more for large screen */}
      <div className="hidden lg:flex lg:py-4 lg:px-2 lg:justify-between">
        <h2 className="text-4xl mb-3 lg:my-auto">{category}</h2>
        <button
          onClick={() => handleCategoryProds(category)}
          className="btnStyle lg:w-30 lg:ring-0 lg:my-auto lg:text-base lg:text-gray-700 hover:text-black hover:font-bold"
        >
          {/* <span className="lg:hidden">View more products</span> */}
          <span className="underline">View All</span>
        </button>
      </div>
      <div className="flex flex-nowrap gap-3 md:gap-4 lg:gap-5 overflow-x-scroll">
        {data &&
          data.products.map((prod) => {
            if (prod.category === category) {
              i++;
              if (i <= 7)
                return <ProductSlideCard key={prod.id} product={prod} />;
            }
          })}
      </div>
      <button
        onClick={() => handleCategoryProds(category)}
        className="btnStyle lg:hidden"
      >
        <b>View more products</b>
        <span>
          <SlArrowRight className="mt-1 ml-2" />
        </span>
      </button>
    </div>
  );
}

export default ProductSlideGrid;
