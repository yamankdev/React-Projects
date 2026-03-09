import { Link, useParams } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { HiMiniMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
import { GrShareOption, GrBasket } from "react-icons/gr";
import { SlArrowRight, SlArrowDown } from "react-icons/sl";
import { BsLightningFill } from "react-icons/bs";
import { RiInboxUnarchiveLine } from "react-icons/ri";
import { useData } from "../context/ApiDataProvider";
import { useEffect, useState } from "react";
import ProductVarCard from "../components/ProductVarCard";

function Productpage() {
  const [product, setProduct] = useState([]);
  const { id } = useParams();
  const { data, loading, error } = useData();
  // console.log(id);
  // console.log(data.products);
  useEffect(() => {
    const productDetails = data.products.find((p) => p.id == id);
    setProduct(productDetails);
  }, []);
  // console.log(product);
  return (
    // absolute left-0 right-0 top-0
    <div className="bg-gray-300 flex flex-col gap-1">
      {/* Back, Search, Wishlist and Share */}
      <nav className="flex flex-col  w-full bg-transparent hover:bg-white z-4 fixed">
        <div className="flex justify-between px-4 py-1 gap-3 mt-10">
          <div className="flex gap-1">
            <Link
              to={"/"}
              className="block text-white size-8 p-2 my-auto rounded-full bg-black"
            >
              <BiArrowBack className="my-auto" />
            </Link>
            <div className="flex flex-col text-[0.75rem] my-auto">
              <p className="-mt-1 font-bold">{product.name}</p>
              <p>
                &#8377;{product.discountPrice}
                <del className="text-[0.6rem] text-gray-600">
                  &#8377;{product.price}
                </del>
              </p>
            </div>
          </div>
          <div className="flex gap-1">
            <Link
              to={"/product"}
              className="block text-white size-8 p-2 my-auto rounded-full bg-black"
            >
              <HiMiniMagnifyingGlass className="my-auto" />
            </Link>
            <Link
              to={"/wish"}
              className="block text-white size-8 p-2 my-auto rounded-full bg-black"
            >
              <HiOutlineHeart className="my-auto" />
            </Link>
            <Link
              to={"/product"}
              className="block text-white size-8 p-2 my-auto rounded-full bg-black"
            >
              <GrShareOption className="my-auto" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="absolute left-0 top-0 right-0 flex flex-col gap-3 px-2 bg-gray-300">
        {/* Product image */}
        <div className="bg-gray-200 rounded-xl">
          <img
            src={product.image}
            alt={product.name}
            className="h-70 mx-auto mt-5 rounded-xl"
          />
        </div>

        {/* Product name and price */}
        <div className="flex flex-col gap-2 p-2 bg-white rounded-xl">
          <h3 className="text-[0.9rem] font-semibold">{product.name}</h3>
          <span className="flex text-[0.6rem] p-1 w-15 bg-linear-to-r from-green-300 to-white rounded-sm">
            <BsLightningFill className="size-2 my-auto" />
            <b>15 mins</b>
          </span>
          <div className="flex gap-5 text-[0.9rem]">
            <p className="flex gap-1">
              <b>&#8377;{product.discountPrice}</b>
              <del className="text-[0.7rem] text-gray-600">
                &#8377;{product.price}
              </del>
            </p>
            <b className="text-[0.7rem] my-auto px-1 text-green-700 bg-linear-to-r from-green-300 to-white rounded-sm">
              {Math.floor(
                ((product.price - product.discountPrice) / product.price) * 100,
              )}
              % OFF
            </b>
          </div>
        </div>

        {/* Product variants */}
        <div className="flex flex-col gap-2 p-2 bg-white rounded-xl">
          <h3 className="text-[0.9rem] font-semibold text-gray-600">
            Pack sizes:
          </h3>
          <ProductVarCard id={id} product={product} />
        </div>

        {/* Product details button */}
        <div className="p-2 bg-white rounded-xl">
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
          </div> */}
        </div>

        {/* View products of same brand */}
        <Link
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
        </Link>
      </div>

      {/* Basket and Adding product to basket */}
      <div className="flex justify-between w-full p-2 mt-5 z-4 bg-white fixed bottom-0">
        <div className="flex px-2 py-1 w-full gap-2">
          <Link
            to={"/checkout"}
            className="flex justify-center items-center p-2 text-green-700 border border-gray-600  w-[50%] rounded-md"
          >
            <div className="flex gap-1">
              <GrBasket className="size-3 my-auto" />
              <p className="text-[0.8rem] font-bold">Basket</p>
              <p className="text-[0.7rem] text-white size-4 px-1 my-auto rounded-full bg-black">
                1
              </p>
            </div>
          </Link>
          <Link
            to={"/checkout"}
            className="flex justify-center items-center px-2 text-white bg-green-700 w-[50%] rounded-md"
          >
            <p className="text-[0.8rem] font-bold">Add</p>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Productpage;
