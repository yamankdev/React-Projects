import { Link, useNavigate, useSearchParams } from "react-router-dom";
import ProductBoxCard from "./ProductBoxCard";
import { useApiData } from "../../context/ApiDataProvider";
import { useUserData } from "../../context/UserContext";

import { BiArrowBack } from "react-icons/bi";
import { HiMiniMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
import { LuNotepadText } from "react-icons/lu";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

function MobileSearch() {
  const { data } = useApiData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { state } = useUserData();

  const { cart } = state.currentUser;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const query = searchParams.get("q")?.toLowerCase() || "";
  // console.log("Query: ", query);

  const filteredProducts = data.products.filter((item) => {
    const words = query.toLowerCase().split(" ");
    return words.every(
      (word) =>
        item.name.toLowerCase().includes(word) ||
        item.category.toLowerCase().includes(word) ||
        item.tags.some((tags) => tags.toLowerCase().includes(word)),
    );
  });
  console.log("FilteredProducts: ", filteredProducts);

  return (
    <>
      <div className="flex flex-col gap-1 h-screen bg-gray-200 ">
        <nav className="flex flex-col w-full z-2 bg-white fixed">
          <div className="flex justify-between px-4 py-1 gap-3 mt-10">
            <div className="flex justify-evenly min-w-[75%]">
              {/* back button */}
              <button
                onClick={() => navigate(-1)}
                className="block size-8 p-2 my-auto rounded-full"
              >
                <BiArrowBack className="my-auto" />
              </button>
              <h3 className="text[0.9rem] font-bold my-auto px-2">
                Searched ({query})
              </h3>
            </div>
            <div className="flex gap-1">
              {/* Searchbar to search in wishlist */}
              <Link
                // to={"/product"}
                className="block size-8 p-2 my-auto rounded-full"
              >
                <HiMiniMagnifyingGlass className="my-auto" />
              </Link>

              {/* Cart */}
              <div className="relative">
                <Link
                  to={"/checkout"}
                  className="block size-8 p-2 my-auto rounded-full"
                >
                  <LuNotepadText className="my-auto" />
                  {totalItems > 0 && (
                    <div className="absolute top-1 left-3 bg-red-600 text-white rounded-full text-[0.6rem] px-1">
                      {totalItems}
                    </div>
                  )}
                </Link>
              </div>
            </div>
          </div>
        </nav>

        {filteredProducts.length === 0 ? (
          // For empty wishlist
          <div className="grid h-screen place-items-center px-2 py-3">
            <h1 className="text-xl font-semibold">No result for {query}</h1>
            <div className="w-full px-2 py-2 z-5 bg-white fixed bottom-0">
              <Link
                to={"/"}
                className="flex justify-center gap-3 h-10 text-white bg-green-700 rounded-lg"
              >
                <p className="my-auto">Go to home</p>
                <TbArrowBadgeRightFilled className="size-6 mt-2" />
              </Link>
            </div>
          </div>
        ) : (
          <div className="flex flex-col w-[80%] mx-auto mt-25">
            {/* <h3 className="text-base p-4 font-bold">
              Searched Results for {query}
            </h3> */}
            <div className="flex flex-wrap justify-evenly gap-1 min-h-135 p-1">
              {filteredProducts.map((item) => {
                return <ProductBoxCard product={item} />;
              })}
            </div>
          </div>
        )}
      </div>
    </>
  );
}

export default MobileSearch;
