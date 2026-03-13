import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GrMicrophone } from "react-icons/gr";

function Searchbar() {
  return (
    <div className="relative flex items-center w-full px-2 bg-white rounded-full">
      <HiMiniMagnifyingGlass className="text-gray-800 mr-2" size={20} />
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
        <GrMicrophone className="text-gray-800" size={18} />
      </button>
    </div>
  );
}

export default Searchbar;
