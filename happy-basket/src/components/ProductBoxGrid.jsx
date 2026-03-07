import { SlArrowRight } from "react-icons/sl";
import ProductBoxCard from "./ProductBoxCard";

function ProductBoxGrid({ data, category, bgColor }) {
  let i = 0;
  return (
    <div className="px-2 py-3" style={{ backgroundColor: bgColor }}>
      <h2 className="text-2xl mb-4">{category}</h2>
      <div className="flex flex-wrap gap-2">
        {data &&
          data.products.map((prod) => {
            if (prod.category === category) {
              i++;
              if (i <= 8) return <ProductBoxCard key={prod.id} prod={prod} />;
            }
          })}
      </div>
      <button className="ring-1 ring-green-300 rounded-md text-[0.7rem] flex justify-center mt-2 w-full py-1 ">
        <b>View more products</b>
        <span>
          <SlArrowRight className="mt-1 ml-2" />
        </span>
      </button>
    </div>
  );
}

export default ProductBoxGrid;
