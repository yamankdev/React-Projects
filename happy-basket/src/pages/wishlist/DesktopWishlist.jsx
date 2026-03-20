import { Link } from "react-router-dom";
import { useUserData } from "../../context/UserContext";
import WishlistCard from "./WishlistCard";

function DesktopWishlist() {
  const { state } = useUserData();
  const { wishlist } = state.currentUser;

  return (
    <>
      {wishlist.length === 0 ? (
        // For empty wishlist
        <div className="w-full h-[40%] mx-auto mb-10 px-8 py-10 grid place-items-center bg-green-100 rounded-md">
          <div className="flex flex-col items-center gap-5">
            <div className="relative size-25 rounded-full bg-green-300">
              <img
                src="/emptyCart.png"
                alt="EmptyCart img"
                className="absolute bottom-1 left-2.5 size-20"
              />
            </div>
            <h2 className="text-2xl text-green-700">
              Your <span className="text-green-400">hbWishlist</span> is empty
            </h2>
          </div>
        </div>
      ) : (
        <>
          <div className="p-4 mb-10 rounded-md bg-gray-100">
            <h3 className="text-lg font-bold p-2 mb-2">Saved For Later</h3>
            <div className="grid grid-cols-4 gap-5">
              <WishlistCard wishlist={wishlist} />
            </div>
          </div>
        </>
      )}
    </>
  );
}

export default DesktopWishlist;
