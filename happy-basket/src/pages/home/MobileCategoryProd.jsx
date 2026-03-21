import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { useApiData } from "../../context/ApiDataProvider";
import { useUserData } from "../../context/UserContext";

import { BiArrowBack } from "react-icons/bi";
import { HiMiniMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
import { LuNotepadText } from "react-icons/lu";
import { TbArrowBadgeRightFilled } from "react-icons/tb";
import ProductBoxCard from "../productDetails/ProductBoxCard";

function MobileCategoryProd() {
  const { data } = useApiData();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const { state } = useUserData();

  const { cart } = state.currentUser;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const category = searchParams.get("c")?.toLowerCase() || "";

  const filteredProducts = data.products.filter((item) => {
    return item.category.toLowerCase().includes(category);
  });

  const completeCategory = filteredProducts[0].category;

  return (
    <>
      <div className="flex flex-col gap-1 h-vh bg-gray-200 ">
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
              <h3 className="text[0.9rem] w-auto font-bold my-auto px-2 ">
                {completeCategory}
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
        <div className="flex flex-col items-center px-3 justify-center mt-25 mb-7">
          <div className="flex flex-wrap gap-1 min-h-135">
            {filteredProducts.map((item) => {
              return <ProductBoxCard product={item} />;
            })}
          </div>
        </div>
      </div>
    </>
  );
}

export default MobileCategoryProd;
