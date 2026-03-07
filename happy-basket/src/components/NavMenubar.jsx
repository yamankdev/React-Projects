import { NavLink } from "react-router-dom";

function NavMenubar({ data }) {
  return (
    <div className="flex flex-nowrap overflow-x-auto gap-[0.06rem]">
      {data &&
        data.categories.map((cat) => {
          return (
            <NavLink
              key={cat.id}
              className="h-12 w-16 bg-stone-800 shrink-0 flex flex-col justify-center items-center rounded-t-xl"
            >
              <img src={cat.icon} alt={cat.name} className="size-5" />
              <span className="text-[0.6rem] text-white">{cat.menuName}</span>
            </NavLink>
          );
        })}
    </div>
  );
}

export default NavMenubar;
