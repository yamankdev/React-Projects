import { Link } from "react-router-dom";
import { useUserData } from "../../../context/UserContext";
import Searchbar from "../../ui/Searchbar";
import NavMenubar from "./NavMenubar";

import { BsLightningFill, BsBasket2Fill } from "react-icons/bs";
import { TiLocation, TiArrowSortedDown } from "react-icons/ti";
import { LuUserRound, LuNotepadText } from "react-icons/lu";
import { FaShoppingBasket } from "react-icons/fa";
import { MdOutlineKeyboardDoubleArrowRight } from "react-icons/md";

function MobileNavbar() {
  const { state } = useUserData();

  const { cart, addresses, mobile } = state.currentUser;

  let defAddr;
  if (addresses.length) {
    defAddr = addresses.find((addr) => addr.isDefault === "true");
    const { house, landmark, area, city, pincode } = defAddr;
    defAddr = `${house}, ${landmark}, ${area}, ${city}, ${pincode}`;
  }

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);
  const addr =
    "----------------------------------------------------------------------------";

  return (
    <nav className="flex flex-col gap-1 bg-zinc-900">
      {/* Address and User */}
      <div className="flex justify-between mt-10 px-2 md:px-10">
        <div className="flex flex-col w-[70%] text-white">
          <p className="flex text-md">
            <BsLightningFill className="size-3.5 mt-[0.4rem]" />
            <b>15 mins</b>
          </p>

          {/* If User, navigate to /address else to home */}
          <Link to={mobile ? "/address" : "/"} className="flex gap-[0.07rem]">
            <TiLocation className="size-7 mr-1 my-auto -mt-[0.3rem] md:mt-[0.2rem]" />
            <p className="text-[0.7rem] truncate">
              <span className="font-bold">Selected Location - </span>
              {addresses.length ? defAddr : addr}
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

      {/* Searchbar, CartList and Category navigation icon */}
      <div className="flex flex-col gap-4 md:px-8 sticky top-2">
        <div className="flex gap-4 px-2 justify-between">
          <Searchbar />

          {/* CartList */}
          <div className="relative lg:p-2 lg:my-auto lg:rounded-md lg:bg-red-200">
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
          </div>
        </div>

        {/* Category Navigation menu */}
        <NavMenubar />
      </div>
    </nav>
  );
}

export default MobileNavbar;
