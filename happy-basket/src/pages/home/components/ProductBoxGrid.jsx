import { Link } from "react-router-dom";
import { useApiData } from "../../../context/ApiDataProvider";
import ProductBoxCard from "../../productDetails/ProductBoxCard";

import { SlArrowRight } from "react-icons/sl";

function ProductBoxGrid({ category, bgColor }) {
  const { data } = useApiData();
  let i = 0;

  return (
    <div
      className="flex flex-col gap-3 px-2 py-3 md:py-5 lg:py-6 lg:w-[80%] lg:m-auto lg:bg-white"
      style={{ backgroundColor: bgColor }}
    >
      <h2 className="text-2xl mb-4 lg:hidden">{category}</h2>
      <div className="hidden lg:flex lg:py-4 lg:px-2 lg:justify-between">
        <h2 className="text-4xl mb-3 lg:my-auto">{category}</h2>
        <Link
          // onClick={handleViewCategoryProds}
          className="btnStyle lg:w-30 lg:ring-0 lg:my-auto lg:text-base lg:text-gray-700 hover:text-black hover:font-bold"
        >
          {/* <span className="lg:hidden">View more products</span> */}
          <span className="underline">View All</span>
        </Link>
      </div>
      <div className="flex flex-wrap justify-center gap-1 md:gap-5 lg:gap-6">
        {data &&
          data.products.map((prod) => {
            if (prod.category === category) {
              i++;
              if (i <= 8)
                return <ProductBoxCard key={prod.id} product={prod} />;
            }
          })}
      </div>
      <button className="btnStyle lg:hidden ">
        <b>View more products</b>
        <span>
          <SlArrowRight className="mt-1 ml-2" />
        </span>
      </button>
    </div>
  );
}

export default ProductBoxGrid;
