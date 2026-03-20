import { useState } from "react";
import { Link } from "react-router-dom";
import { useApiData } from "../../../context/ApiDataProvider";
import { useUserData } from "../../../context/UserContext";
import Searchbar from "../../ui/Searchbar";
import NavMenubar from "./NavMenubar";
import DesktopLoginModal from "../../../pages/auth/DesktopLoginModal";

import { BsLightningFill, BsBasket2Fill } from "react-icons/bs";
import { TiLocation, TiArrowSortedDown } from "react-icons/ti";
import { LuUserRound, LuNotepadText } from "react-icons/lu";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function DesktopNavbar() {
  // const { data } = useApiData();
  const { state } = useUserData();
  const [showLogin, setShowLogin] = useState(false);

  const { name, cart, addresses, mobile } = state.currentUser;
  let userAddr;
  if (mobile) {
    const addrFromDB =
      addresses.find((addr) => {
        return addr.isDefault === "true";
      }) || "";
    const { house, landmark, area, city, pincode } = addrFromDB;
    userAddr = `${house}, ${landmark}, ${area}, ${city}, ${pincode}`;
  }
  // console.log("Address for DB: ", addrFromDB);
  // console.log("Address for screen: ", userAddr);

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <nav className="flex flex-col gap-1 bg-white shadow-xl">
        {/* Address and User on small and medium screen */}

        <div className="block border-3 border-green-500"></div>

        <div className="flex flex-col gap-4 w-[80%] mt-2 m-auto sticky top-2">
          {/* Searchbar and CartList icon */}
          <div className="flex gap-1 h-15 md:px-8 justify-between">
            {/* Brand logo on large screen */}
            <Link to={"/"} className="my-auto">
              <img
                src="/brandLogo.png"
                alt="HappyBasket Logo"
                className="h-10 w-26"
              />
            </Link>
            <Searchbar />

            {/* Address details on large screen */}
            <div className="flex flex-col justify-center text-[0.7rem] rounded-lg px-3 h-12 my-auto bg-gray-200">
              <p className="flex text-md gap-1 text-green-700">
                <BsLightningFill className="size-2.5 mt-[0.3rem]" />
                <b>Delivery in 15 mins</b>
              </p>
              {mobile ? (
                <p className="tracking-wide  line-clamp-1 max-w-30">
                  {userAddr}
                </p>
              ) : (
                <p className="tracking-wide">Select Location</p>
              )}
            </div>

            {/* Login and Signup on large screen */}
            {mobile ? (
              <Link
                // to="/login"
                className=" bg-black text-white text-[0.7rem] text-center rounded-lg h-12 my-auto px-3 py-2"
              >
                <p className="flex flex-col">
                  <span>{name}</span>
                  <span>{mobile}</span>
                </p>
              </Link>
            ) : (
              <button
                onClick={() => setShowLogin(true)}
                className=" bg-black text-white text-[0.7rem] text-center rounded-lg h-12 my-auto px-3 py-2 hover:cursor-pointer"
              >
                <p className="flex flex-col">
                  <span>Login / Sign</span>
                  <span>Up</span>
                </p>
              </button>
            )}

            {/* Cart */}
            <Link
              to={"/checkout"}
              className="relative grid place-items-center size-12 p-2 my-auto rounded-md bg-red-200"
            >
              <div className="p-1 bg-red-600 rounded-full">
                <BsBasket2Fill className="size-4 text-white" />
                {totalItems > 0 && (
                  <div className="absolute bottom-1 right-1 size-6 grid place-items-center bg-black text-[0.7rem] text-white rounded-lg p-1">
                    {totalItems}
                  </div>
                )}
              </div>
            </Link>
          </div>

          {/* Category Navigation menu */}
          <NavMenubar />
        </div>
      </nav>

      {/* Login Modal */}
      {showLogin && (
        <DesktopLoginModal
          isOpen={showLogin}
          onClose={() => setShowLogin(false)}
          length={6}
        />
      )}
    </>
  );
}

export default DesktopNavbar;
