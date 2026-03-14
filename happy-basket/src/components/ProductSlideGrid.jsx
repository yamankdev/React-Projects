import { SlArrowRight } from "react-icons/sl";
import ProductSlideCard from "./ProductSlideCard";
import { useState } from "react";

function ProductSlideGrid({ data, category, bgColor }) {
  // const [categoryProd, setCategoryProd] = useState();
  let i = 0;

  // const handleViewCategoryProds = () => {
  //   navigate("/catProducts");
  //   return <ViewProductspage categoryProd={categoryProd} />;
  // };

  return (
    <div className="px-2 py-3" style={{ backgroundColor: bgColor }}>
      <h2 className="text-2xl mb-3">{category}</h2>
      <div className="flex flex-nowrap gap-3 overflow-x-scroll">
        {data &&
          data.products.map((prod) => {
            if (prod.category === category) {
              // setCategoryProd(prod);
              i++;
              if (i <= 7) return <ProductSlideCard key={prod.id} prod={prod} />;
            }
          })}
      </div>
      <button
        // onClick={handleViewCategoryProds}
        className="btnStyle"
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
