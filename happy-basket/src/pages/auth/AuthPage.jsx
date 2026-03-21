import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserContext";
import AuthFooter from "./components/AuthFooter";

import { BiArrowBack } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";
import { TiPen } from "react-icons/ti";
import { VscDeviceMobile, VscMail } from "react-icons/vsc";
import { MdOutlineNoteAdd, MdPayment } from "react-icons/md";
import {
  PiNotepad,
  PiNotepadFill,
  PiWalletFill,
  PiAddressBookFill,
} from "react-icons/pi";
import { FaUserCircle } from "react-icons/fa";

function AuthPage() {
  const navigate = useNavigate();
  const { state, dispatch } = useUserData();

  const { name, email, cart, mobile } = state.currentUser;

  // For test purpose only
  // const mobile =  state.currentUser.mobile || 9692067827;
  const isUserLoggedIn = mobile;

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const hbExplore = [
    { alt: "hbWellness", text: "hbWellness" },
    { alt: "hbLifestyle", text: "hbLifestyle" },
    { alt: "Donation", text: "Donation" },
    { alt: "Offers", text: "Offers" },
  ];

  const removeUser = () => {
    dispatch({ type: "USER_LOGOUT" });
    console.log("Logout successfully ✅");
    console.log(mobile);
    navigate("/");
  };

  return (
    <div className="relative">
      <div className="bg-gray-300 absolute h-vh top-0 left-0 right-0">
        <div className="flex px-4 py-1 gap-3 mt-10">
          <Link to="/" className="size-6">
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
              <Link
                to={"/login"}
                className="flex justify-between py-2 px-2 mb-1 text-white w-full "
              >
                <span className="text-[0.8rem] font-bold">
                  Log In / Sign up
                </span>
                <span>
                  <SlArrowRight className="mt-[0.15rem]" />
                </span>
              </Link>

              {/* For test only */}
              {/* <button
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
              </button> */}
            </div>
          ) : (
            // If user loggedIn
            <div className="bg-white rounded-lg">
              <div className="flex flex-col gap-2 bg-white p-2 rounded-lg ring ring-gray-400">
                <div className="flex justify-between">
                  <div className="flex gap-2">
                    <FaUserCircle className="size-6 bg-black text-white border-2 rounded-full" />
                    <h2 className="text-2 font-bold my-auto">{name}</h2>
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
                      +91 {mobile}
                    </span>
                  </p>
                  <p className="flex gap-2 text-[0.8rem] leading-4 text-gray-700">
                    <VscMail />
                    <span className="text-[0.7rem] -mt-[0.1rem]">
                      {email || "-"}
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
            {hbExplore.map((hbElem, index) => {
              return (
                <div key={index} className="w-[25%] flex flex-col items-center">
                  <img alt={hbElem.alt} className="border size-18 rounded-xl" />
                  <figcaption className="text-[0.7rem] font-semibold mt-1">
                    {hbElem.text}
                  </figcaption>
                </div>
              );
            })}
          </div>
        </div>

        {/* Footer with logout button */}
        <AuthFooter isUserLoggedIn={isUserLoggedIn} removeUser={removeUser} />
      </div>
    </div>
  );
}

export default AuthPage;
