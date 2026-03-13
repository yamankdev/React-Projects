import { Link, useNavigate } from "react-router-dom";
import CartItem from "../components/CartItem";
import BillSummary from "../components/BillSummary";
import { useUserData } from "../context/UserContext";

import { BiArrowBack, BiSolidHome, BiSolidDiscount } from "react-icons/bi";
import { TiArrowSortedDown } from "react-icons/ti";
import { HiMiniMagnifyingGlass } from "react-icons/hi2";
import { GrShareOption } from "react-icons/gr";
import { GiPartyPopper } from "react-icons/gi";
import { SlArrowRight } from "react-icons/sl";
import { BsLightningFill } from "react-icons/bs";
import { MdArrowRight } from "react-icons/md";
import { TbArrowBadgeRightFilled } from "react-icons/tb";

function Checkoutpage() {
  const navigate = useNavigate();
  const { state } = useUserData();

  const currentUser = state.currentUser;
  const totalItems = currentUser.cart.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  // console.log(totalItems);

  const subTotalPrice = currentUser.cart.reduce(
    (sum, item) => item.quantity * item.price + sum,
    0,
  );

  const subTotalDiscountedPrice = currentUser.cart.reduce(
    (sum, item) => item.quantity * item.discountPrice + sum,
    0,
  );
  const handlingFee = 10;
  const amountSaved = subTotalPrice - subTotalDiscountedPrice;
  const amountToPay = subTotalDiscountedPrice + handlingFee;

  const isUserLoggedIn = currentUser.mobile;

  const addr = "Sivajinagar, RoadNo. 4, Vadlapudi, Visakhapatnam, 530046";

  // if the cart is empty
  return (
    <>
      {currentUser.cart.length === 0 ? (
        // if the cart is empty
        <div className="min-h-screen flex flex-col gap-1 bg-gray-300">
          {/* Address, Search and Share */}
          <nav className="flex flex-col justify-between bg-white sticky top-0">
            <div className="flex px-4 py-1 gap-3 mt-10">
              <button
                onClick={() => navigate(-1)}
                className="block size-6 mt-3"
              >
                <BiArrowBack />
              </button>
              <div className="flex flex-col w-[70%]">
                <b className="flex text-sm">basket</b>
                <Link to={"/checkout"} className="flex gap-1">
                  <BiSolidHome className="size-5 -mt-[0.1rem]" />
                  <p className="text-[0.7rem] truncate">
                    <b>Home - </b>
                    {addr}
                  </p>
                  <TiArrowSortedDown className="size-5" />
                </Link>
              </div>
              <Link to="/checkout" className="block size-6 mt-3">
                <HiMiniMagnifyingGlass className="my-auto" />
              </Link>
              <Link to="/checkout" className="block size-6 mt-3">
                <GrShareOption className="my-auto" />
              </Link>
            </div>
          </nav>

          {/* Empty content area */}
          <div className="grid h-110 place-items-center px-2 py-3">
            <h1 className="text-xl font-semibold">Your hbCart is empty</h1>
          </div>

          {/* Go to home button */}
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
        // If cart is not empty
        <div className="min-h-screen flex flex-col gap-1 bg-gray-300">
          {/* Address, Search and Share */}
          <nav className="flex flex-col justify-between bg-white sticky top-0">
            <div className="flex px-4 py-1 gap-3 mt-10">
              <button
                onClick={() => navigate(-1)}
                className="block size-6 mt-3"
              >
                <BiArrowBack />
              </button>
              <div className="flex flex-col w-[70%]">
                <b className="flex text-sm">basket</b>
                <Link to={"/checkout"} className="flex gap-1">
                  <BiSolidHome className="size-5 -mt-[0.1rem]" />
                  <p className="text-[0.7rem] truncate">
                    <b>Home - </b>
                    {addr}
                  </p>
                  <TiArrowSortedDown className="size-5" />
                </Link>
              </div>
              <Link to="/checkout" className="block size-6 mt-3">
                <HiMiniMagnifyingGlass className="my-auto" />
              </Link>
              <Link to="/checkout" className="block size-6 mt-3">
                <GrShareOption className="my-auto" />
              </Link>
            </div>
            <div className="flex py-1 gap-1 justify-center text-black w-full bg-linear-to-r from-white via-gray-300 to-white ">
              <GiPartyPopper className="text-orange-600" />
              <p className="text-[0.7rem] font-bold text-green-700">
                Congrats! You're saving &#8377;{amountSaved}
              </p>
            </div>
          </nav>

          <div className="grid grid-rows-2 gap-3 px-2 py-3">
            {/* Voucher section */}
            <Link
              to={"/checkout"}
              className="flex justify-between rounded-lg px-4 py-2 bg-white"
            >
              <div className="flex gap-3">
                <BiSolidDiscount className="size-7" />
                <p className="text-[0.8rem] font-bold my-auto">Apply Voucher</p>
              </div>
              <SlArrowRight className="my-auto" />
            </Link>

            {/* Carry bag section */}
            <div className="flex justify-between rounded-lg p-2 bg-white">
              <div className="flex gap-2">
                <div className="grid place-items-center size-7 bg-purple-500 rounded-lg">
                  <img src="/bag.png" alt="hbBow Bag" className="size-5" />
                </div>
                <p className="text-[0.7rem] my-auto">
                  Get your hbNow order in a bag
                </p>
              </div>
              <div className="flex gap-2">
                <p className="text-[0.8rem] font-semibold my-auto text-green-700">
                  FREE
                </p>
                <button className="rounded-full w-12 p-1 bg-green-800">
                  <div className="free size-5 rounded-full bg-white transition-x-5"></div>
                </button>
              </div>
            </div>

            {/* List of Products */}
            <div className="flex flex-col w-full rounded-lg bg-white">
              <div className="flex justify-between px-2 py-1">
                <div className="flex w-full justify-between">
                  <div className="flex gap-2">
                    <p className="text-[0.8rem] font-bold my-auto">
                      Delivery in
                    </p>
                    <span className="flex text-[0.7rem] my-auto text-green-700">
                      <BsLightningFill className="size-2.1 my-auto" />
                      <b>15 mins</b>
                    </span>
                  </div>
                  <p className="text-[0.6rem] text-gray-700 my-auto">
                    {totalItems} Product
                  </p>
                </div>
              </div>
              <hr className="text-gray-500" />
              {currentUser.cart &&
                currentUser.cart.map((item) => {
                  return <CartItem key={item.id} item={item} />;
                })}
            </div>

            {/* Bill Summary */}
            <BillSummary />

            {/* Return Policy */}
            <div className="flex flex-col gap-2 px-3 py-4 mb-16 w-full rounded-lg bg-white">
              <h3 className="text-1 font-bold">Return/Exchange Policy</h3>
              <ul className="px-4 text-[0.7rem] list-outside list-disc gap-3 leading-4 space-y-2">
                <li>
                  Eligible products must be returned or exchanged within the
                  specified time.
                </li>
                <li>
                  All returnable/exchangeable products must be unused, with
                  original packaging and tags.
                </li>
                <li>
                  Any amount refund will be credited to your hbWallet or source
                  account.
                </li>
              </ul>
            </div>
          </div>

          {/* Payment method and Pay */}
          {!isUserLoggedIn ? (
            // If no user logged in
            <div className="w-full px-2 py-2 z-5 bg-white fixed bottom-0">
              <button
                onClick={() => navigate("/login")}
                className="h-10 w-full text-white bg-green-700 rounded-lg"
              >
                <p className="my-auto">Log in/Sign up</p>
              </button>
            </div>
          ) : (
            // If user
            <div className="flex justify-between w-full px-2 py-2 mt-5 z-5 bg-white fixed bottom-0">
              {/* Payment method */}
              <div className="flex py-2 gap-2 ">
                <img alt="payment method" className="size-7 border" />
                <Link to={"/checkout"}>
                  <p className="flex text-[0.6rem] uppercase font-bold text-green-900">
                    <span>change method</span>
                    <MdArrowRight className="size-5 -mt-[0.1rem]" />
                  </p>
                  <p className="text-[0.75rem] font-bold -mt-1">PhonePay UPI</p>
                </Link>
              </div>

              {/* Pay to order */}
              <Link
                to={"/checkout"}
                className="flex justify-between px-2 text-white bg-green-700 w-[50%] rounded-lg"
              >
                <div className="flex flex-col text-[0.75rem] font-bold my-auto">
                  <p className=" -mt-1">Place order</p>
                  <p>&#8377;{amountToPay}</p>
                </div>
                <TbArrowBadgeRightFilled className="size-6 my-auto" />
              </Link>
            </div>
          )}
        </div>
      )}
    </>
  );
}

export default Checkoutpage;
