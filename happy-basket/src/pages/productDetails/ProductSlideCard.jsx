import { useEffect } from "react";
import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserContext";

import { IoBookmark, IoBookmarkOutline } from "react-icons/io5";
import { discount } from "../../utils/product";

function ProductSlideCard({ product }) {
  const { state, dispatch } = useUserData();
  const { wishlist } = state.currentUser;

  // let isInWishlist;
  // useEffect(() => {
  let isInWishlist = wishlist.some((p) => {
    return p.id === product.id;
  });
  // }, []);

  const handleWishlistToggle = () => {
    dispatch({ type: "TOGGLE_WISHLIST", payload: product });
  };

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  return (
    <div className="w-30 md:w-50 lg:w-70 lg:flex lg:flex-col lg:gap-4 p-2 lg:p-5 shrink-0 lg:bg-white shadow-lg lg:shadow-none shadow-gray-600">
      <Link to={`/product/${product.id}`}>
        {/* Image for mobile and medium screen */}
        <img
          src={product.image}
          alt={product.name}
          className="h-30 md:h-45 mx-auto lg:hidden"
        />

        {/* Image with discount for large screen */}
        <div className="hidden lg:block lg:relative">
          <img
            src={product.image}
            alt={product.name}
            className="h-60 mx-auto"
          />
          <b className="lg:absolute lg:top-0 lg:right-0 text-[1.2rem] my-auto px-1 text-green-800 bg-linear-to-r from-green-300 to-white rounded-sm">
            {discount(product.price, product.discountPrice)}% OFF
          </b>
        </div>

        {/* product discount price and actual price */}
        <figcaption className="flex flex-col md:gap-2 lg:gap-4">
          <pre className="text-center text-[0.8rem] md:text-base lg:text-xl">
            <span className="font-bold">&#8377;{product.discountPrice}</span>
            <span className="text-[0.6rem] md:text-[0.8rem] lg:text-sm md:ml-2 lg:ml-4 line-through">
              &#8377;{product.price}
            </span>
          </pre>

          {/* product name for large screen */}
          <p className="hidden lg:block lg:text-base lg:font-bold">
            {product.name}
          </p>
          <p className="text-[0.6rem] md:text-[0.8rem] lg:text-base leading-3 lg:leading-5 line-clamp-2 ">
            {product.description}
          </p>
        </figcaption>
      </Link>

      {/* wishlist toggle and add to cart button for large screen */}
      <div className="hidden lg:flex lg:w-full lg:gap-5">
        {/* Wishlist toggle button*/}
        <button
          onClick={handleWishlistToggle}
          className="block size-10 p-2 border border-gray-400 my-auto rounded-md hover:cursor-pointer"
        >
          {isInWishlist ? (
            <IoBookmark className="m-auto size-5" />
          ) : (
            <IoBookmarkOutline className="m-auto size-5" />
          )}
        </button>

        {/* Add to cart button */}
        <button
          onClick={handleAddToCart}
          className="flex justify-center items-center px-2 text-white bg-green-700 active:bg-green-900 w-full rounded-md hover:cursor-pointer"
        >
          <p className="text-[0.8rem] font-bold">Add</p>
        </button>
      </div>
    </div>
  );
}

export default ProductSlideCard;
