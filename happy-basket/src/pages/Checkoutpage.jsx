import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
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
  const [count, setCount] = useState(1);
  const navigate = useNavigate();
  const addr = "Sivajinagar, RoadNo. 4, Vadlapudi, Visakhapatnam, 530046";
  return (
    // absolute left-0 right-0 top-0
    <nav className="min-h-screen flex flex-col gap-1 bg-gray-300">
      {/* Address, Search and Share */}
      <div className="flex flex-col justify-between bg-white sticky top-0">
        <div className="flex px-4 py-1 gap-3 mt-10">
          <button onClick={() => navigate(-1)} className="block size-6 mt-3">
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
            Congrats! You're saving &#8377;47.28
          </p>
        </div>
      </div>
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
                <p className="text-[0.8rem] font-bold my-auto">Delivery in</p>
                <span className="flex text-[0.7rem] my-auto text-green-700">
                  <BsLightningFill className="size-2.1 my-auto" />
                  <b>15 mins</b>
                </span>
              </div>
              <p className="text-[0.6rem] text-gray-700 my-auto">1 Product</p>
            </div>
          </div>
          <hr className="text-gray-500" />
          <div className="flex justify-between p-2">
            <div className="flex gap-3 ">
              <div>
                <img src="" alt="" className="size-12 border rounded-lg" />
              </div>
              <div className="flex flex-col gap-1 text-[0.6rem]">
                <p>Product Name</p>
                <p>Weight</p>
                <pre className="text-[0.7rem]">
                  <b>&#8377;10</b>
                  <sup>
                    <del className="text-[0.5rem]">&#8377;18</del>
                  </sup>
                </pre>
              </div>
            </div>
            <div className="flex h-8 items-center text-white bg-green-700 rounded-lg">
              <button
                onClick={() => setCount(count > 1 ? count - 1 : 1)}
                className="px-2 py-1 rounded-lg hover:bg-green-600 transition"
              >
                -
              </button>
              <span className="text-md px-2 py-1 font-semibold">{count}</span>
              <button
                onClick={() => setCount(count + 1)}
                className="px-2 py-1 rounded-lg hover:bg-green-600 transition"
              >
                +
              </button>
            </div>
          </div>
        </div>

        {/* Return Policy */}
        <div className="flex flex-col gap-2 px-3 py-4 w-full rounded-lg bg-white">
          <h3 className="text-1 font-bold">Return/Exchange Policy</h3>
          <ul className="px-4 text-[0.7rem] list-outside list-disc gap-3 leading-4 space-y-2">
            <li>
              Eligible products must be returned or exchanged within the
              specified time.
            </li>
            <li>
              All returnable/exchangeable products must be unused, with original
              packaging and tags.
            </li>
            <li>
              Any amount refund will be credited to your hbWallet or source
              account.
            </li>
          </ul>
        </div>
      </div>

      {/* Payment option */}
      <div className="flex justify-between w-full px-2 py-2 mt-5 z-5 bg-white fixed bottom-0">
        <div className="flex py-2 gap-2 ">
          <img src="" alt="" className="size-7 border" />
          <Link to={"/checkout"}>
            <p className="flex text-[0.6rem] uppercase font-bold text-green-900">
              <span>change method</span>{" "}
              <MdArrowRight className="size-5 -mt-[0.1rem]" />
            </p>
            <p className="text-[0.75rem] font-bold -mt-1">PhonePay UPI</p>
          </Link>
        </div>
        <Link
          to={"/checkout"}
          className="flex justify-between px-2 text-white bg-green-700 w-[50%] rounded-lg"
        >
          <div className="flex flex-col text-[0.75rem] font-bold my-auto">
            <p className=" -mt-1">Place order</p>
            <p>&#8377;18.18</p>
          </div>
          <TbArrowBadgeRightFilled className="size-6 my-auto" />
        </Link>
      </div>
    </nav>
  );
}

export default Checkoutpage;
