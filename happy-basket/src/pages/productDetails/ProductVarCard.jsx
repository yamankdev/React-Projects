import { BsLightningFill } from "react-icons/bs";
import { useApiData } from "../../context/ApiDataProvider";
import { discount } from "../../utils/product";
import { Link } from "react-router-dom";

function ProductVarCard({ id, variantDetails }) {
  const { data } = useApiData();

  const product = data.products.filter((prod) => {
    return prod.id === id;
  });

  let varWeight;
  const finalPrice = (variantWeight) => {
    varWeight = variantWeight;
    let baseWeight = parseInt(product[0].unit);
    let pricePerUnit = product[0].discountPrice / baseWeight;
    if (product[0].unit.toLowerCase().includes("kg")) {
      return variantWeight.toLowerCase().includes("kg")
        ? `${(parseInt(variantWeight) * pricePerUnit).toFixed(2)}`
        : `${((parseInt(variantWeight) / 1000) * pricePerUnit).toFixed(2)}`;
    } else if (product[0].unit.toLowerCase().includes("g")) {
      return variantWeight.toLowerCase().includes("g")
        ? `${(parseInt(variantWeight) * pricePerUnit).toFixed(2)}`
        : `${((parseInt(variantWeight) / 1000) * pricePerUnit).toFixed(2)}`;
    } else if (product[0].unit.toLowerCase().includes("l")) {
      return variantWeight.toLowerCase().includes("l")
        ? `${(parseInt(variantWeight) * pricePerUnit).toFixed(2)}`
        : `${((parseInt(variantWeight) / 1000) * pricePerUnit).toFixed(2)}`;
    } else {
      return variantWeight.toLowerCase().includes("ml")
        ? `${(parseInt(variantWeight) * pricePerUnit).toFixed(2)}`
        : `${((parseInt(variantWeight) / 1000) * pricePerUnit).toFixed(2)}`;
    }
  };

  const totalPrice = (variantWeight) => {
    let baseWeight = parseInt(product[0].unit);
    let pricePerUnit = product[0].price / baseWeight;
    return variantWeight.toLowerCase().includes("kg")
      ? `${(parseInt(variantWeight) * pricePerUnit).toFixed(3)}`
      : `${((parseInt(variantWeight) / 1000) * pricePerUnit).toFixed(3)}`;
  };

  const pricePerUnitWeight = (variantWeight) => {
    let pricePerUnit = product[0].discountPrice / parseInt(product[0].unit);
    return variantWeight.toLowerCase().includes("kg")
      ? `${pricePerUnit} / kg`
      : `${pricePerUnit / 100} / g`;
  };

  // variantDetails = {
  //   varWeight,
  //   totalPrice,
  //   finalPrice,
  // };

  return (
    <>
      {/* For small and medium screen */}
      <div className="w-full flex lg:hidden flex-nowrap gap-2 overflow-x-auto">
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
                  <b>&#8377;{finalPrice(v, product[0].discountPrice)}</b>
                  (&#8377;{pricePerUnitWeight(v, product[0].discountPrice)})
                </p>
                <p className="text-[0.5rem] text-green-800 font-bold">
                  &#8377;
                  {discount(product[0].price, product[0].discountPrice)}% OFF
                </p>
              </div>
            </div>
          );
        })}
      </div>

      {/* For large screen */}
      <div className="hidden w-full lg:flex flex-col gap-2">
        {product[0].variant.map((varWeight, index) => {
          return (
            <Link
              key={`${id}.${index}`}
              className="grid grid-cols-3 place-items-center p-3 border border-green-300 rounded-sm"
            >
              {/* Variant weight */}
              <p className="w-full bg-white rounded-sm">{varWeight}</p>

              {/* variant discountPrice, price and total discount */}
              <div className="flex flex-col">
                <p className="text-gray-500 text-sm">
                  <span className="text-black font-semibold">
                    &#8377;
                    {finalPrice(varWeight)}
                  </span>{" "}
                  (&#8377;
                  {pricePerUnitWeight(varWeight)})
                </p>
                <p className="flex gap-3 text-gray-500 text-[0.8rem]">
                  <span className=" line-through">
                    &#8377; {totalPrice(varWeight)}
                  </span>
                  <span className="text-green-600 font-semibold">
                    {discount(product[0].price, product[0].discountPrice)}% OFF
                  </span>
                </p>
              </div>

              {/* time of delivery */}
              <span className="justify-self-end flex justify-center w-15 p-1 mb-1 text-[0.6rem] text-amber-900 bg-gray-200 rounded-sm">
                <BsLightningFill className="size-2 my-auto" />
                <b>15 mins</b>
              </span>
              {/* </div> */}
            </Link>
          );
        })}
      </div>
    </>
  );
}

export default ProductVarCard;
