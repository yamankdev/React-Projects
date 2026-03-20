import { NavLink } from "react-router-dom";
import { useApiData } from "../../../context/ApiDataProvider";

function NavMenubar() {
  const { data } = useApiData();

  return (
    <div className="flex flex-nowrap overflow-x-auto lg:px-5 gap-[0.06rem] md:gap-2 md:justify-center lg:justify-start">
      {data &&
        data.categories.map((cat) => {
          return (
            <NavLink
              key={cat.id}
              className="h-12 w-16 md:w-20 lg:w-30 bg-stone-800 lg:bg-white shrink-0 flex flex-col lg:flex-row justify-center items-center rounded-t-xl lg:rounded-md lg:border lg:border-gray-200"
            >
              <img src={cat.icon} alt={cat.name} className="size-5 lg:hidden" />
              <span className="text-[0.6rem] lg:text-base text-white lg:text-black lg:hover:text-red-500 lg:hover:underline">
                {cat.menuName}
              </span>
            </NavLink>
          );
        })}
    </div>
  );
}

export default NavMenubar;
