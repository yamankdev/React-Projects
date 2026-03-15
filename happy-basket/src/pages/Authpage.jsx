import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../context/UserContext";

import { BiArrowBack } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";
import { FaXTwitter } from "react-icons/fa6";
import { TiPen } from "react-icons/ti";
import { VscDeviceMobile, VscMail } from "react-icons/vsc";
import { MdOutlineNoteAdd, MdPayment } from "react-icons/md";
import {
  PiNotepad,
  PiNotepadFill,
  PiWalletFill,
  PiAddressBookFill,
} from "react-icons/pi";
import {
  FaFacebookF,
  FaInstagram,
  FaYoutube,
  FaUserCircle,
} from "react-icons/fa";

function Authpage() {
  const navigate = useNavigate();
  const { state, dispatch } = useUserData();

  const currentUser = state.currentUser;
  const isUserLoggedIn = currentUser.mobile;

  // For test purpose only
  const mobile = currentUser.mobile ? currentUser.mobile : 9692067827;

  const totalItems = currentUser.cart.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );

  const removeUser = () => {
    dispatch({ type: "USER_LOGOUT" });
    console.log("Logout successfully ✅");
    console.log(state.currentUser.mobile);
    navigate("/");
  };

  return (
    <div className="relative">
      <div className="bg-gray-300 absolute h-screen top-0 left-0 right-0">
        <div className="flex px-4 py-1 gap-3 mt-10">
          <Link to={"/"} className="size-6">
            <BiArrowBack />
          </Link>
          <p className="text-[0.8rem] font-bold">My Account</p>
        </div>
        <div className="relative px-2 mt-3">
          {/* If no user */}
          {!isUserLoggedIn ? (
            <div className="bg-black rounded-lg">
              <div className="flex flex-col gap-2 bg-white p-2 rounded-lg">
                <h2 className="text-2 font-bold">Hello</h2>
                <p className="text-[0.8rem] leading-4">
                  Get exclusive offers and discounts on every order. Join now!
                </p>
              </div>
              {/* <Link
                to={"/login"}
                className="flex justify-between py-2 px-2 mb-1 text-white w-full "
              >
                <span className="text-[0.8rem] font-bold">
                  Log In / Sign up
                </span>
                <span>
                  <SlArrowRight className="mt-[0.15rem]" />
                </span>
              </Link> */}
              <button
                onClick={() =>
                  dispatch({ type: "USER_LOGIN", payload: mobile })
                }
                className="flex justify-between py-2 px-2 mb-1 text-white w-full "
              >
                <span className="text-[0.8rem] font-bold">
                  Log In / Sign up
                </span>
                <span>
                  <SlArrowRight className="mt-[0.15rem]" />
                </span>
              </button>
            </div>
          ) : (
            // If user loggedIn
            <div className="bg-white rounded-lg">
              <div className="flex flex-col gap-2 bg-white p-2 rounded-lg ring ring-gray-400">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <FaUserCircle className="size-6 bg-black text-white border-2 rounded-full" />
                    <h2 className="text-2 font-bold my-auto">
                      {currentUser.name}
                    </h2>
                  </div>
                  <Link
                    to={"/profile"}
                    className="p-1 border border-gray-400 rounded-sm"
                  >
                    <TiPen className="text-green-700" />
                  </Link>
                </div>
                <div className="flex flex-col px-1 gap-1 ">
                  <p className="flex gap-2 text-[0.8rem] leading-4 text-gray-700">
                    <VscDeviceMobile />
                    <span className="text-[0.7rem] -mt-[0.1rem]">
                      +91 {currentUser.mobile}
                    </span>
                  </p>
                  <p className="flex gap-2 text-[0.8rem] leading-4 text-gray-700">
                    <VscMail />
                    <span className="text-[0.7rem] -mt-[0.1rem]">
                      {currentUser.email || "-"}
                    </span>
                  </p>
                </div>
              </div>
              <div className="flex justify-around py-2 px-2 mb-1 text-white w-full ">
                <button
                  onClick={() => navigate("/checkout")}
                  className="flex flex-col items-center"
                >
                  <span className="relative p-2 rounded-full bg-gray-300">
                    <PiNotepadFill className="text-black size-5" />
                    {totalItems > 0 && (
                      <div className="absolute top-2 left-4 bg-red-600 text-white rounded-full text-[0.6rem] px-1">
                        {totalItems}
                      </div>
                    )}
                  </span>
                  <p className="text-black text-[0.6rem] text-bold">Orders</p>
                </button>
                <button
                  onClick={() => navigate("/auth")}
                  className="flex flex-col items-center"
                >
                  <span className=" p-2 rounded-full bg-gray-300">
                    <PiWalletFill className="text-black size-5" />
                  </span>
                  <p className="text-black text-[0.6rem] text-bold">
                    &#8377; 0
                  </p>
                </button>
                <button
                  onClick={() => navigate("/address")}
                  className="flex flex-col items-center"
                >
                  <span className=" p-2 rounded-full bg-gray-300">
                    <PiAddressBookFill className="text-black size-5" />
                  </span>
                  <p className="text-black text-[0.6rem] text-bold">Address</p>
                </button>
              </div>
            </div>
          )}
        </div>

        <div className="bg-white px-2 py-4">
          {/* Wishlist and payment methods */}
          {isUserLoggedIn && (
            <>
              <Link
                to={"/wishlist"}
                className="flex justify-between text-gray-800 p-2"
              >
                <div className="flex gap-2">
                  <MdOutlineNoteAdd className="size-4" />
                  <span className="text-[0.7rem] text-gray-800">
                    Saved for later
                  </span>
                </div>
                <SlArrowRight className="mt-[0.15rem]" />
              </Link>
              <Link className="flex justify-between text-gray-800 p-2 mb-2">
                <div className="flex gap-2">
                  <MdPayment />
                  <span className="text-[0.7rem]">Saved for later</span>
                </div>
                <SlArrowRight className="mt-[0.15rem]" />
              </Link>
            </>
          )}
          <h2 className="text-2 font-semibold">Do more with HappyBasket</h2>
          <p className="text-[0.75rem] mb-4">
            Well blogs, health tips, donations, and more
          </p>

          {/* Other hb things to explore */}
          <div className="flex justify-evenly">
            <div className="w-[25%] flex flex-col items-center">
              <img alt="" className="border size-18  rounded-xl" />
              <figcaption className="text-[0.7rem] font-semibold mt-1">
                hbWellness
              </figcaption>
            </div>
            <div className="w-[25%] flex flex-col items-center">
              <img alt="" className="border size-18 rounded-xl" />
              <figcaption className="text-[0.7rem] font-semibold mt-1">
                hbLifestyle
              </figcaption>
            </div>
            <div className="w-[25%] flex flex-col items-center">
              <img alt="" className="border size-18 rounded-xl" />
              <figcaption className="text-[0.7rem] font-semibold mt-1">
                Donation
              </figcaption>
            </div>
            <div className="w-[25%] flex flex-col items-center">
              <img alt="" className="border size-18 rounded-xl" />
              <figcaption className="text-[0.7rem] font-semibold mt-1">
                Offers
              </figcaption>
            </div>
          </div>
        </div>

        {/* Footer with logout button */}
        <div className="flex flex-col gap-3 px-2 pt-5">
          <p className="text-[0.7rem] text-gray-700">FAQs</p>
          <p className="text-[0.7rem] text-gray-700">Terms & Conditions</p>
          <p className="text-[0.7rem] text-gray-700">Privacy Policy</p>
          <div className="flex flex-col py-1">
            {/* Logout button */}
            {isUserLoggedIn && (
              <div className="text-center -mt-4 mb-2">
                <span
                  className="text-[0.8rem] font-bold px-2 py-1 text-red-700 active:bg-red-700 active:text-white rounded-lg"
                  onClick={removeUser}
                >
                  Log Out
                </span>
              </div>
            )}

            {/* Social platform */}
            <div className="flex gap-4 justify-center ">
              <Link className="p-1 rounded-full bg-blue-700 text-white">
                <FaFacebookF />
              </Link>
              <Link className="p-1 rounded-full bg-white">
                <FaXTwitter />
              </Link>
              <Link className="p-1 rounded-full bg-fuchsia-800 text-white">
                <FaInstagram />
              </Link>
              <Link className="p-1 rounded-full bg-red-700 text-white">
                <FaYoutube />
              </Link>
            </div>

            {/* BrandLogo */}
            <img
              src="/brandLogo.png"
              alt="HappyBasket"
              className="h-12 mx-auto mt-3"
            />
            <p className="text-[0.8rem] text-center mt-1">
              <b>&copy; 2026 HappyBasket&trade;</b> — Made by YaMaN with ♥
            </p>
            <pre className="text-[0.9rem] text-center text-gray-700 -mt-2">
              v1.0.0
            </pre>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Authpage;
