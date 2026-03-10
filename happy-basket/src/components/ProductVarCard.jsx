import { BsLightningFill } from "react-icons/bs";
import { useData } from "../context/ApiDataProvider";
import Loginpage from "../pages/Loginpage";

function ProductVarCard({ id }) {
  const { data, loading, error } = useData();
  // console.log(id);

  const product = data.products.filter((prod) => {
    return prod.id === id;
  });
  // console.log(product);

  const finalPrice = (vrWt, dp) => {
    let baseWt = parseInt(product.unit);
    let pricePerUnit = dp / baseWt;
    return vrWt.toLowerCase().includes("kg")
      ? `${parseInt(vrWt) * pricePerUnit}`
      : `${(parseInt(vrWt) / 1000) * pricePerUnit}`;
  };

  const pricePerUnitWeight = (vrWt, dp) => {
    let pricePerUnit = dp / parseInt(product.unit);
    return vrWt.toLowerCase().includes("kg")
      ? `${pricePerUnit}/kg`
      : `${pricePerUnit / 100}/g`;
  };

  return (
    <div className="w-full flex flex-nowrap gap-2 overflow-x-auto">
      {product[0].variant.map((v, index) => {
        return (
          <div
            key={`${id}.${index}`}
            className="flex flex-col items-center w-[38%] shrink-0"
          >
            <span className="flex text-[0.6rem] w-15 pl-1 mb-1 bg-linear-to-r from-green-300 to-white rounded-sm">
              <BsLightningFill className="size-2 my-auto" />
              <b>15 mins</b>
            </span>
            <div className="w-full text-[0.6rem] text-center p-1 bg-green-200 border border-green-500 rounded-lg">
              <p className="w-full bg-white rounded-sm">{v}</p>
              <p>
                <b>&#8377;{finalPrice(v, product.discountPrice)}</b>
                (&#8377;{pricePerUnitWeight(v, product.discountPrice)})
              </p>
              <p className="text-[0.5rem] text-green-800 font-bold">
                &#8377;
                {Math.floor(
                  ((product.price - product.discountPrice) / product.price) *
                    100,
                )}
                % OFF
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ProductVarCard;
