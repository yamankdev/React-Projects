import { Link, useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";

import { BiArrowBack } from "react-icons/bi";
import { HiMiniMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
import { LuNotepadText } from "react-icons/lu";
import { MdOutlineDeleteForever } from "react-icons/md";

function Wishlistpage() {
  const navigate = useNavigate();
  const { state, dispatch } = useCart();

  const totalItems = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const handleAddToCart = () => {
    dispatch({ type: "ADD_TO_CART", payload: product });
  };

  const wishItems = 1;
  return (
    <div className="flex flex-col gap-1 bg-gray-200 ">
      {/* Back, Search, Cartlist */}
      <nav className="flex flex-col w-full z-2 bg-white fixed">
        <div className="flex justify-between px-4 py-1 gap-3 mt-10">
          <div className="flex min-w-[75%]">
            <button
              onClick={() => navigate(-1)}
              className="block size-8 p-2 my-auto rounded-full"
            >
              <BiArrowBack className="my-auto" />
            </button>
            <h3 className="text[0.9rem] font-bold my-auto ml-[33%]">
              My Wishlist
            </h3>
          </div>
          <div className="flex gap-1">
            <Link
              to={"/product"}
              className="block size-8 p-2 my-auto rounded-full"
            >
              <HiMiniMagnifyingGlass className="my-auto" />
            </Link>
            <div className="relative">
              <Link
                to={"/checkout"}
                className="block size-8 p-2 my-auto rounded-full"
              >
                <LuNotepadText className="my-auto" />
                {totalItems > 0 && (
                  <div className="absolute top-1 left-3 bg-red-600 text-white rounded-full text-[0.6rem] px-1">
                    {totalItems}
                  </div>
                )}
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {!wishItems ? (
        // If wishlist is empty
        <div className="grid h-screen place-items-center px-2 py-3">
          <h1 className="text-xl font-semibold">Your hbWishlist is empty</h1>
        </div>
      ) : (
        // If wishlist is not empty
        <div className="grid grid-cols-2 gap-3 p-2 mt-22">
          <div className="relative h-70 p-1 shrink-0 bg-white shadow-gray-800">
            <img
              src="/AromaJoy RoomFreshenerGel.png"
              alt="product name"
              className="h-50 mx-auto"
            />
            <div
              className="absolute flex justify-center size-6 pt-1 top-2 right-2 rounded-full active:bg-red-500"
              // onClick={() =>
              //   dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
              // }
            >
              <MdOutlineDeleteForever className="text-red-600 active:text-white" />
            </div>
            <figcaption className="flex flex-col items-center w-full border">
              <p className="text-[0.7rem] line-clamp-1">
                Product Description lknslcns ldiknvlknv sfcalsjnlsk
              </p>
              <p className="text-[0.8rem] flex gap-2">
                <b>&#8377;18.18</b>
                <del className="text-[0.7rem] text-gray-600">&#8377;32</del>
              </p>
            </figcaption>
            <button onClick={handleAddToCart} className="btnStyle">
              Add to Cart
            </button>
          </div>
          {/* {product.map((prod) => {
          return (
            <div key={} className="h-70 p-1 shrink-0 bg-white shadow-gray-800">
              <img src={prod.image} alt={prod.name} className="h-50 mx-auto" />
              <figcaption className="flex flex-col items-center w-full border">
                <p className="text-[0.7rem] line-clamp-1">{prod.description}</p>
                <p className="text-[0.8rem] flex gap-2">
                  <b>&#8377;{prod.discountPrice}</b>
                  <del className="text-[0.7rem] text-gray-600">
                    &#8377;{prod.price}
                  </del>
                </p>
              </figcaption>
              <button className="btnStyle">Add to Cart</button>
            </div>
          );
        })} */}
          <div className="h-70 shrink-0 border"></div>
          <div className="h-70 shrink-0 border"></div>
          <div className="h-70 shrink-0 border"></div>
        </div>
      )}
    </div>
  );
}

export default Wishlistpage;
