import { NavLink } from "react-router-dom";

import { TbHome, TbCategory } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";

function FloatingNav() {
  return (
    <div className="w-[84%] lg:hidden fixed bottom-2 right-[8%] left-[8%] z-2 ring-1 ring-stone-500 bg-white rounded-full">
      <div className="flex p-1">
        <NavLink
          to={"/"}
          className="w-[33%] py-1 flex flex-col justify-center items-center rounded-full"
        >
          <TbHome className="size-5" />
          <span className="text-[0.7rem] -mt-1">Home</span>
        </NavLink>
        <NavLink className="w-[33%] py-1 flex flex-col justify-center items-center rounded-full">
          <TbCategory className="size-5" />
          <span className="text-[0.7rem] -mt-1">Category</span>
        </NavLink>
        <NavLink
          to={"/wish"}
          className="w-[33%] py-1 flex flex-col justify-center items-center rounded-full"
        >
          <TbHeart className="size-5" />
          <span className="text-[0.7rem] -mt-1">Wishlist</span>
        </NavLink>
      </div>
    </div>
  );
}

export default FloatingNav;
