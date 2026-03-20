import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserContext";

import { MdOutlineDeleteForever } from "react-icons/md";

function WishlistCard({ wishlist }) {
  const { dispatch } = useUserData();

  const handleRemoveFromWishlist = (id) => {
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
  };

  const handleAddToCart = (product) => {
    dispatch({ type: "ADD_TO_CART", payload: product });
    dispatch({ type: "REMOVE_FROM_WISHLIST", payload: product.id });
  };

  console.log("Wishlist from wishlistCard: ", wishlist);

  return (
    <>
      {/* if wishlist.length > 0 ? mb-15 : mb-0 */}
      {/* For small and medium screen */}
      <div className="lg:hidden">
        {wishlist.map((item) => {
          return (
            <div
              key={item.id}
              className="relative h-70 p-1 shrink-0 bg-white shadow-gray-800"
            >
              <Link to={`/product/${item.id}`}>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-50 mx-auto"
                />
                <figcaption className="flex flex-col items-center w-full">
                  <p className="text-[0.7rem] line-clamp-1">
                    {item.description}
                  </p>
                  <p className="text-[0.8rem] flex items-center gap-2">
                    <b>&#8377;{item.discountPrice}</b>
                    <span className="text-[0.7rem] line-through text-gray-600">
                      &#8377;{item.price}
                    </span>
                  </p>
                </figcaption>
              </Link>

              {/* Remove from wishlist button */}
              <button
                className="absolute flex justify-center size-6 pt-1 top-2 right-2 rounded-full bg-gray-700 active:bg-red-500"
                onClick={() => handleRemoveFromWishlist(item.id)}
              >
                <MdOutlineDeleteForever className="text-white active:text-white" />
              </button>

              {/* Add to cart button */}
              <button
                onClick={() => handleAddToCart(item)}
                className="btnStyle active:bg-green-700 active:text-white"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>

      {/* For large screen */}
      {/* <div className="hidden lg:inline-block"> */}
      {wishlist.map((item) => {
        return (
          <div
            key={item.id}
            className="lg:inline-block h-85 p-2 shrink-0 bg-white shadow-lg"
          >
            <Link to={`/product/${item.id}`}>
              <div>
                <img
                  src={item.image}
                  alt={item.name}
                  className="h-40 w-30 mx-auto"
                />
                {/* <b className="lg:absolute lg:top-0 lg:right-0 text-[1.2rem] my-auto px-1 text-green-800 bg-linear-to-r from-green-300 to-white rounded-sm">
                    {Math.floor(
                      ((product.price - product.discountPrice) /
                        product.price) *
                        100,
                    )}
                    % OFF
                  </b> */}
              </div>

              {/* product discount price and actual price */}
              <figcaption className="flex flex-col mt-2 gap-2">
                {/* product name for large screen */}
                <p className="text-base line-clamp-1">{item.name}</p>
                <p className="text-sm leading-5 line-clamp-2 ">
                  {item.description}
                </p>
              </figcaption>
            </Link>

            {/* wishlist toggle and add to cart button for large screen */}
            <div className="w-full flex flex-col gap-2 mt-2">
              <pre className="text-base">
                <span className="font-bold">&#8377;{item.discountPrice}</span>
                <span className="text-sm ml-2 text-gray-700 line-through">
                  &#8377;{item.price}
                </span>
              </pre>

              {/* Add to cart button */}
              <button
                onClick={() => handleAddToCart(item)}
                className="flex justify-center items-center p-2 text-red-700 hover:text-white border border-red-700 hover:bg-red-700 w-full rounded-md hover:cursor-pointer"
              >
                <p className="text-[0.8rem] font-bold">Add</p>
              </button>
            </div>
          </div>
        );
      })}
      {/* </div> */}
    </>
  );
}

export default WishlistCard;
