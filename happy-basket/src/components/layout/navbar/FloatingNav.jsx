import { NavLink } from "react-router-dom";

import { TbHome, TbCategory } from "react-icons/tb";
import { TbHeart } from "react-icons/tb";

function FloatingNav() {
  const activeStyle = ({ isActive }) =>
    isActive
      ? "w-[33%] py-1 flex flex-col justify-center items-center rounded-full bg-green-300"
      : "w-[33%] py-1 flex flex-col justify-center items-center rounded-full";

  // const activeIcons = [
  //   { iconType: "TbHome", path: "/", name: "Home" },
  //   { iconType: "TbCategory", path: "/category", name: "Category" },
  //   { iconType: "TbHeart", path: "/wishlist", name: "Wishlist" },
  // ];

  return (
    <div className="w-[84%] fixed bottom-2 right-[8%] left-[8%] z-2 ring-1 ring-stone-500 bg-white rounded-full">
      <div className="flex p-1">
        <NavLink to={"/"} className={activeStyle}>
          <TbHome className="size-5" />
          <span className="text-[0.7rem] -mt-1">Home</span>
        </NavLink>

        <NavLink to={"/category"} className={activeStyle}>
          <TbCategory className="size-5" />
          <span className="text-[0.7rem] -mt-1">Category</span>
        </NavLink>

        <NavLink to={"/wishlist"} className={activeStyle}>
          <TbHeart className="size-5" />
          <span className="text-[0.7rem] -mt-1">Wishlist</span>
        </NavLink>
        {/* {activeIcons.map((icon) => {
          return (
            <NavLink to={icon.path} className={activeStyle}>
              <{icon.iconType} className="size-5" />
              <span className="text-[0.7rem] -mt-1">{icon.name}</span>
            </NavLink>
          );
        })} */}
      </div>
    </div>
  );
}

export default FloatingNav;
