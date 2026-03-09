import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { HiMiniMagnifyingGlass, HiOutlineHeart } from "react-icons/hi2";
import { GrShareOption, GrBasket } from "react-icons/gr";
import { LuUserRound, LuNotepadText } from "react-icons/lu";
import { SlArrowRight } from "react-icons/sl";
import { BsLightningFill } from "react-icons/bs";
import { RiInboxUnarchiveLine } from "react-icons/ri";

function Wishlistpage() {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col gap-1 bg-gray-200 ">
      {/* Back, Search, Cartlist */}
      <nav className="flex flex-col w-full bg-white fixed">
        <div className="flex justify-between px-4 py-1 gap-3 mt-10">
          <div className="flex min-w-[75%]">
            <button
              onClick={() => navigate(-1)}
              className="block size-8 p-2 my-auto rounded-full"
            >
              <BiArrowBack className="my-auto" />
            </button>
            <h3 className="text[0.9rem] font-bold my-auto ml-[33%]">
              My Wishlist
            </h3>
          </div>
          <div className="flex gap-1">
            <Link
              to={"/product"}
              className="block size-8 p-2 my-auto rounded-full"
            >
              <HiMiniMagnifyingGlass className="my-auto" />
            </Link>
            <Link
              to={"/checkout"}
              className="block size-8 p-2 my-auto rounded-full"
            >
              <LuNotepadText className="my-auto" />
            </Link>
          </div>
        </div>
      </nav>

      <div className="grid grid-cols-2 gap-3 p-2 mt-22">
        <div className="h-70 p-1 shrink-0 bg-white shadow-gray-800">
          <img
            src="/AromaJoy RoomFreshenerGel.png"
            alt="product name"
            className="h-50 mx-auto"
          />
          <figcaption className="flex flex-col items-center w-full border">
            <p className="text-[0.7rem] line-clamp-1">
              Product Description lknslcns ldiknvlknv sfcalsjnlsk
            </p>
            <p className="text-[0.8rem] flex gap-2">
              <b>&#8377;18.18</b>
              <del className="text-[0.7rem] text-gray-600">&#8377;32</del>
            </p>
          </figcaption>
          <button className="btnStyle">Add to Cart</button>
        </div>
        {/* {product.map((prod) => {
          return (
            <div key={} className="h-70 p-1 shrink-0 bg-white shadow-gray-800">
              <img src={prod.image} alt={prod.name} className="h-50 mx-auto" />
              <figcaption className="flex flex-col items-center w-full border">
                <p className="text-[0.7rem] line-clamp-1">{prod.description}</p>
                <p className="text-[0.8rem] flex gap-2">
                  <b>&#8377;{prod.discountPrice}</b>
                  <del className="text-[0.7rem] text-gray-600">
                    &#8377;{prod.price}
                  </del>
                </p>
              </figcaption>
              <button className="btnStyle">Add to Cart</button>
            </div>
          );
        })} */}
        <div className="h-70 shrink-0 border"></div>
        <div className="h-70 shrink-0 border"></div>
        <div className="h-70 shrink-0 border"></div>
      </div>
    </div>
  );
}

export default Wishlistpage;
