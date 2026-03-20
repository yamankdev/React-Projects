import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserContext";

import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";

function ProductBoxCard({ product }) {
  const { state, dispatch } = useUserData();
  const { wishlist } = state.currentUser;

  // console.log("Wishlist: ", wishlist);
  // console.log("Product: ", product);
  
  
  // let isInWishlist;
  // useEffect(() => {
    let isInWishlist = wishlist.some((p) => {
      return p.id === product.id;
    });
  //   console.log("Is In Wishlist", isInWishlist);
  // }, []);

  return (
    <div className="w-20 md:w-40 lg:w-64 p-2 shrink-0 shadow-md shadow-gray-600">
      <Link to={`/product/${product.id}`}>
        {/* Image for mobile and medium screen */}
        <img
          src={product.image}
          alt={product.name}
          className="h-20 md:h-30 mx-auto lg:hidden"
        />

        {/* Image with discount for large screen */}
        <div className="hidden lg:block lg:relative">
          <img
            src={product.image}
            alt={product.name}
            className="h-70 mx-auto"
          />
          <b className="lg:absolute lg:top-0 lg:right-0 text-[1.2rem] my-auto px-1 text-green-800 bg-linear-to-r from-green-300 to-white rounded-sm">
            {Math.floor(
              ((product.price - product.discountPrice) / product.price) * 100,
            )}
            % OFF
          </b>
        </div>

        {/* product name, discount price and actual price */}
        <figcaption className="flex flex-col md:gap-2 lg:gap-3">
          {/* product name for small and medium screen */}
          <p className="text-[0.6rem] md:text-base text-center leading-5 line-clamp-3 lg:hidden">
            {product.name}
          </p>

          {/* discount price and actual price for all screens */}
          <pre className="text-center text-[0.8rem] md:text-[1rem] lg:text-xl">
            <span className="font-bold">&#8377;{product.discountPrice}</span>
            <span className="text-[0.6rem] md:text-[0.8rem] lg:text-sm md:ml-2 lg:ml-4 line-through">
              &#8377;{product.price}
            </span>
          </pre>

          {/* product name for large screen */}
          <p className="hidden lg:block lg:text-base lg:font-bold">
            {product.name}
          </p>
        </figcaption>
      </Link>

      {/* wishlist toggle and add to cart buttons for large screen */}
      <div className="hidden lg:flex lg:w-full lg:gap-5 lg:mt-4">
        <button
          onClick={() =>
            dispatch({ type: "TOGGLE_WISHLIST", payload: product })
          }
          className="block size-10 p-2 border border-gray-400 my-auto rounded-md hover:cursor-pointer"
        >
          {isInWishlist ? (
            <IoBookmark className="m-auto size-5" />
          ) : (
            <IoBookmarkOutline className="m-auto size-5" />
          )}
        </button>
        <button
          onClick={() => dispatch({ type: "ADD_TO_CART", payload: product })}
          className="flex justify-center items-center px-2 text-white bg-green-700 active:bg-green-900 w-full rounded-md hover:cursor-pointer"
        >
          <p className="text-[0.8rem] font-bold">Add</p>
        </button>
      </div>
    </div>
  );
}

export default ProductBoxCard;
