import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GrMicrophone } from "react-icons/gr";

function Searchbar() {
  return (
    <div className="relative flex items-center w-full lg:w-[50%] px-2 bg-white lg:border lg:border-gray-400 rounded-full lg:rounded-lg">
      <HiMiniMagnifyingGlass className="text-gray-800 mr-2" size={17} />
      <input
        type="text"
        name="search"
        id="searchBar"
        // value={query}
        // onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for fruits, vegetables, groceries..."
        className="flex-1 bg-transparent outline-none text-[0.7rem] text-gray-700 placeholder-gray-500"
      />
      <button
        // type="submit"
        className=" size-10 -mr-2 flex justify-center items-center rounded-full"
      >
        <GrMicrophone className="text-gray-800" size={15} />
      </button>
    </div>
  );
}

export default Searchbar;
