import { useEffect, useState } from "react";
import { useApiData } from "../../context/ApiDataProvider";

import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GrMicrophone } from "react-icons/gr";

function Searchbar() {
  const [query, setQuery] = useState("");
  const { data } = useApiData();

  // const variants = {
  //   home: "",
  // };

  useEffect(() => {
    const filteredProducts = data.products.filter((item) => {
      const searchData =
        `${item.name} ${item.brand} ${item.catgory} ${item.tags.join(" ")}`.toLowerCase();
      return searchData.includes(query.toLowerCase());
    });
  }, []);

  // const handleSubmit = (e) => {
  //   e.preventDefualt();
  // };

  return (
    <form
      // onSubmit={handleSubmit}
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
        className="flex-1 bg-transparent outline-none text-[0.7rem] text-gray-700 placeholder-gray-500"
      />
      <button
        // type="submit"
        className=" size-10 -mr-2 flex justify-center items-center rounded-full"
      >
        <GrMicrophone className="text-gray-800" size={15} />
      </button>
    </form>
  );
}

export default Searchbar;
