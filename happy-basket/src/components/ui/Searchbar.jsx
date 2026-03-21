import { useEffect, useState } from "react";
import { useApiData } from "../../context/ApiDataProvider";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GrMicrophone } from "react-icons/gr";
import { useNavigate } from "react-router-dom";

function Searchbar() {
  const [query, setQuery] = useState("");
  const navigate = useNavigate();
  
  const handleSearch = (e) => {
    e.preventDefault();
    if (query.trim()) {
      navigate(`/search?q=${query}`);
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="relative flex items-center w-full lg:w-[50%] px-2 lg:h-12 lg:my-auto bg-white lg:border lg:border-gray-400 rounded-full lg:rounded-lg"
    >
      <HiMiniMagnifyingGlass className="text-gray-800 mr-2" size={17} />
      <input
        type="text"
        name="search"
        id="searchBar"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search for fruits, vegetables, groceries..."
        className="flex-1 bg-transparent outline-none text-[0.7rem] lg:text-[0.9rem] text-gray-700 placeholder-gray-500"
      />
      <button className=" size-10 -mr-2 flex justify-center items-center rounded-full">
        <GrMicrophone className="text-gray-800" size={15} />
      </button>
    </form>
  );
}

export default Searchbar;
