import { Link } from "react-router-dom";
import { BsLightningFill } from "react-icons/bs";
import { TiLocation, TiArrowSortedDown } from "react-icons/ti";
import { LuUserRound, LuNotepadText } from "react-icons/lu";
import Searchbar from "./Searchbar";
import { useData } from "../context/ApiDataProvider";
import NavMenubar from "./NavMenubar";

function Navbar() {
  const { data, loading, error } = useData();
  const addr = "Sivajinagar, RoadNo. 4, Vadlapudi, Visakhapatnam, 530046";
  return (
    <nav className="flex flex-col gap-1 bg-stone-700">
      {/* Address and User */}
      <div className="flex justify-between mt-10 px-2">
        <div className="flex flex-col w-[70%] text-white">
          <p className="flex text-md">
            <BsLightningFill className="size-3.5 mt-[0.4rem]" />
            <b>15 mins</b>
          </p>
          <div className="flex gap-[0.07rem]">
            <TiLocation className="size-5 -mt-[0.1rem]" />
            <p className="text-[0.7rem] truncate">
              <b>Selected Location - </b>
              {addr}
            </p>
            <TiArrowSortedDown className="size-4" />
          </div>
        </div>
        <div>
          <Link to="/auth" className="block p-2 bg-white rounded-full mt-1 ">
            <LuUserRound className="size-3" />
          </Link>
        </div>
      </div>
      <div className="flex flex-col gap-2 sticky top-2">
        {/* Searchbar and CartList icon */}
        <div className="flex gap-4 px-2 justify-between">
          <Searchbar />
          <div>
            <div className="p-3 bg-white rounded-full">
              <LuNotepadText className="size-4" />
            </div>
          </div>
        </div>

        {/* Category Navigation menu */}
        <NavMenubar data={data} />
      </div>
    </nav>
  );
}

export default Navbar;
