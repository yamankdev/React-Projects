import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { useApiData } from "../../context/ApiDataProvider";
import { useUserData } from "../../context/UserContext";
// import ProductVarCard from "../../../modules/product/ProductVarCard";

import { BiArrowBack } from "react-icons/bi";
import { HiMiniMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
import { GrShareOption, GrBasket } from "react-icons/gr";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { BsLightningFill } from "react-icons/bs";
import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import {
  RiInboxUnarchiveLine,
  RiHeart3Fill,
  RiHeart3Line,
} from "react-icons/ri";
import ProductVarCard from "./ProductVarCard";
import { discount } from "../../utils/product";
import { addToCart, toggleWishlist } from "../../utils/reducerAction";

function DesktopProduct() {
  const { data } = useApiData();
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { state, dispatch } = useUserData();

  const { cart, wishlist } = state.currentUser;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  useEffect(() => {
    const productDetails = data.products.find((p) => p.id === id);
    setProduct(productDetails);
  }, []);

  const isInWishlist = wishlist.some((p) => {
    return p.id === id;
  });

  const variantDetails = {};

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const handleToggleWishlist = (product) => {
    dispatch({ type: "TOGGLE_WISHLIST", payload: product });
  };

  return (
    <div className="flex flex-col gap-2 min-h-145 w-[80%] mx-auto">
      <div className="flex gap-2 my-10 px-2">
        {/* Product image */}
        <div className="relative w-[50%] rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className=" mx-auto rounded-sm"
          />
        </div>

        {/* Product name and price */}
        <div className="flex flex-col gap-2 w-[50%] py-4 pl-2 bg-white rounded-xl overflow-y-auto">
          <div className="flex justify-between">
            <p className="text=base font-semibold text-gray-400 underline">
              {product.brand}
            </p>
            <span className="flex text-[0.6rem] text-amber-900 p-1 w-15 bg-gray-200 rounded-sm">
              <BsLightningFill className="size-2 my-auto" />
              <b>15 MINS</b>
            </span>
          </div>
          <h3 className="text-lg font-bold tracking-wide">{product.name}, {product.unit}</h3>

          <div className="flex flex-col gap-1 text-[0.9rem]">
            <p className="flex flex-col gap-1">
              <span className="text-sm text-gray-400 line-through">
                MRP: &#8377;{product.price}
              </span>
              <span className="text-lg">
                Price: &#8377;{product.discountPrice}
              </span>
            </p>
            <p className="text-sm text-green-600 rounded-sm">
              You Save:{" "}
              <span className="font-bold">
                {discount(product.price, product.discountPrice)}% OFF
              </span>
            </p>
            <p className="text-[0.7rem] text-gray-400">
              (inclusive of all taxes)
            </p>
          </div>

          <div className="flex gap-4 mt-4">
            <button
              onClick={() => handleAddToCart(product)}
              className="w-[49%] bg-red-600 text-base px-5 py-4 text-white font-bold rounded-sm hover:cursor-pointer active:bg-black"
            >
              Add to basket
            </button>
            <button
              onClick={() => handleToggleWishlist(product)}
              className="w-[49%] flex gap-3 justify-center text-base px-5 py-4  font-bold border border-gray-500 rounded-sm hover:cursor-pointer"
            >
              {isInWishlist ? (
                <>
                  <IoBookmark className="size-5 my-auto" />
                  <span>Saved</span>
                </>
              ) : (
                <>
                  <IoBookmarkOutline className="size-5 my-auto" />
                  <span>Save for later</span>
                </>
              )}
            </button>
          </div>

          {/* Product variants */}
          <div className="flex flex-col gap-2 mt-5 py-2 bg-white rounded-xl">
            <h3 className="text-base font-semibold">
              Pack sizes  
            </h3>
            <ProductVarCard id={id} variantDetails={variantDetails} />
          </div>
        </div>

        {/* Product details button */}
        {/* <div className="p-2 bg-white rounded-xl">
          <button className="bg-linear-to-b from-blue-300 to-white rounded-md text-[0.8rem] text-blue-800 flex justify-center mt-2 w-full py-1">
            <b>View products details</b>
            <SlArrowDown className="my-auto ml-3" />
          </button>
          {/* <div className="py-2 mt-2 flex flex-col">
            <div className="border rounded-xl h-20 p-2">
              {product.map((prod) => {
                return (
                  <>
                    <div className="flex flex-col text-[0.7rem] ">
                      <h4 className="font-semibold">Product prop</h4>
                      <p>prop value</p>
                    </div>
                    <hr className="px-3 my-2" />
                  </>
                );
              })}
            </div>
          </div> 
        </div> */}

        {/* View products of same brand */}
        {/* <Link
          to={"/product"}
          className="flex justify-between p-2 mb-18 text-[0.8rem] rounded-xl bg-white"
        >
          <div className="flex gap-2">
            <div className="rounded-full p-1 bg-green-300">
              <RiInboxUnarchiveLine className="size-4" />
            </div>
            <b className="my-auto text-[0.8rem]">
              View More Products from Fresho!
            </b>
          </div>
          <SlArrowRight className="my-auto ml-3" />
        </Link>*/}
      </div>
    </div>
  );
}

export default DesktopProduct;
