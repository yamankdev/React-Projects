import { Link, useNavigate } from "react-router-dom";

import { BiArrowBack } from "react-icons/bi";
import { HiMiniMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
import { LuNotepadText } from "react-icons/lu";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import { useUserData } from "../../context/UserContext";
import WishlistCard from "./WishlistCard";

function WishlistPage() {
  const navigate = useNavigate();
  const { state } = useUserData();

  const { cart, wishlist } = state.currentUser;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const handleClearWishlist = () => {
    dispatch({ type: "CLEAR_WISHLIST" });
  };

  const wishlistMarginBottom =
    wishlist.length > 2 ? { marginBottom: "3.75rem" } : { marginBottom: 0 };

  return (
    <div className="flex flex-col gap-1 h-screen bg-gray-200 ">
      {/* Back, Searchbar, Cart */}
      <nav className="flex flex-col w-full z-2 bg-white fixed">
        <div className="flex justify-between px-4 py-1 gap-3 mt-10">
          <div className="flex min-w-[75%]">
            {/* back button */}
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
            {/* Searchbar to search in wishlist */}
            <Link
              // to={"/product"}
              className="block size-8 p-2 my-auto rounded-full"
            >
              <HiMiniMagnifyingGlass className="my-auto" />
            </Link>

            {/* Cart */}
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

      {wishlist.length === 0 ? (
        // For empty wishlist
        <div className="grid h-screen place-items-center px-2 py-3">
          <h1 className="text-xl font-semibold">Your hbWishlist is empty</h1>
          <div className="w-full px-2 py-2 z-5 bg-white fixed bottom-0">
            <Link
              to={"/"}
              className="flex justify-center gap-3 h-10 text-white bg-green-700 rounded-lg"
            >
              <p className="my-auto">Go to home</p>
              <TbArrowBadgeRightFilled className="size-6 mt-2" />
            </Link>
          </div>
        </div>
      ) : (
        // For wishlist with items
        <>
          <div
            className="grid grid-cols-2 gap-3 p-2 mt-21"
            style={wishlistMarginBottom}
          >
            <WishlistCard wishlist={wishlist} />
          </div>

          {/* Clear wishlist button */}
          <div className="w-full px-2 py-2 z-5 bg-white fixed bottom-0">
            <button
              onClick={handleClearWishlist}
              className="h-10 w-full text-white bg-red-700 rounded-lg"
            >
              <p className="my-auto">Clear Wishlist</p>
            </button>
          </div>
        </>
      )}
    </div>
  );
}

export default WishlistPage;
