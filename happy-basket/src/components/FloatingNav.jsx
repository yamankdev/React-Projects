import { NavLink } from "react-router-dom";
import { TbHome, TbCategory, TbRosetteDiscount } from "react-icons/tb";

function FloatingNav() {
  return (
    <div className="w-[84%] fixed bottom-2 right-[8%] left-[8%] z-2 ring-1 ring-stone-500 bg-white rounded-full">
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
        <NavLink className="w-[33%] py-1 flex flex-col justify-center items-center rounded-full">
          <TbRosetteDiscount className="size-5" />
          <span className="text-[0.7rem] -mt-1">Top picks</span>
        </NavLink>
      </div>
    </div>
  );
}

export default FloatingNav;
