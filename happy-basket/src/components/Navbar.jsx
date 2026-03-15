import Searchbar from "./Searchbar";
import NavMenubar from "./NavMenubar";
import { Link } from "react-router-dom";
import { useUserData } from "../context/UserContext";

import { BsLightningFill, BsBasket2Fill } from "react-icons/bs";
import { TiLocation, TiArrowSortedDown } from "react-icons/ti";
import { LuUserRound, LuNotepadText } from "react-icons/lu";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function Navbar({ data }) {
  const { state } = useUserData();

  const currentUser = state.currentUser;
  const { name, cart, addresses, mobile } = currentUser;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const addr = "501, Sivajinagar, Vadlapudi, Visakhapatnam, 530046";

  return (
    <nav className="flex flex-col gap-1 bg-stone-700 lg:bg-white">
      {/* Address and User on small and medium screen */}
      <div className="flex justify-between mt-10 px-2 md:px-10 lg:hidden">
        <div className="flex flex-col w-[70%] text-white">
          <p className="flex text-md">
            <BsLightningFill className="size-3.5 mt-[0.4rem]" />
            <b>15 mins</b>
          </p>
          <Link to={mobile ? "/address" : "/"} className="flex gap-[0.07rem]">
            <TiLocation className="size-5 md:size-3 -mt-[0.1rem] md:mt-[0.2rem]" />

            {/* Getting problem here while going back after login */}
            <p className="text-[0.7rem] truncate">
              <span className="font-bold">Selected Location - </span>
              {addresses.length !== 0 ? addresses[0] : addr}
            </p>
            <TiArrowSortedDown className="size-4" />
          </Link>
        </div>

        {/* Login and Signup on small and medium screen */}
        <div>
          <Link to="/auth" className="block p-2 bg-white rounded-full mt-1">
            <LuUserRound className="size-3" />
          </Link>
        </div>
      </div>

      <div className="hidden lg:block border-3 border-green-500"></div>

      <div className="flex flex-col gap-4 lg:w-[80%] lg:mt-2 lg:m-auto sticky top-2">
        {/* Searchbar and CartList icon */}
        <div className="flex gap-4 lg:gap-1 px-2 lg:px-0 justify-between">
          {/* Brand logo on large screen */}
          <div className="hidden lg:block lg:my-auto">
            <img
              src="/brandLogo.png"
              alt="HappyBasket Logo"
              className="h-10 w-26"
            />
          </div>
          <Searchbar />
          {/* Address details on large screen */}
          <div className="hidden lg:flex flex-col lg:justify-center text-[0.7rem] rounded-lg px-5 bg-gray-200">
            <p className="flex text-md gap-1 text-green-700">
              <BsLightningFill className="size-2.5 mt-[0.3rem]" />
              <b>Delivery in 15 mins</b>
            </p>
            <p className="tracking-wide">Select Location</p>
          </div>

          {/* Login and Signup on large screen */}
          <Link
            to="/auth"
            className="hidden lg:block lg:bg-black lg:text-white lg:text-[0.7rem] lg:text-center rounded-full lg:rounded-lg mt-1 lg:my-auto lg:px-5 lg:py-1"
          >
            {mobile ? (
              <p className="flex flex-col">
                <span>{name}</span>
                <span>{mobile}</span>
              </p>
            ) : (
              <p className="flex flex-col">
                <span>Login / Sign</span>
                <span>Up</span>
              </p>
            )}
          </Link>

          {/* Cart */}
          <div className="relative lg:p-2 lg:my-auto lg:rounded-md lg:bg-red-200">
            {/* Cart for small and medium screen */}
            <Link
              to={"/checkout"}
              className="block lg:hidden p-3 bg-white rounded-full"
            >
              <LuNotepadText className="size-4" />
              {totalItems > 0 && (
                <div className="absolute top-2 left-4 bg-red-600 text-white rounded-full text-[0.6rem] px-1">
                  {totalItems}
                </div>
              )}
            </Link>

            {/* Cart for large screen */}
            <Link
              to={"/checkout"}
              className="hidden lg:block p-1 bg-red-600 rounded-full"
            >
              <BsBasket2Fill className="size-4 text-white" />
              {totalItems > 0 && (
                <div className="absolute bottom-0 right-0 bg-black text-white rounded-sm text-[0.6rem] p-1">
                  {totalItems}
                </div>
              )}
            </Link>
          </div>
        </div>

        {/* Category Navigation menu */}
        <NavMenubar data={data} />
      </div>
    </nav>
  );
}

export default Navbar;
