import { useEffect, useRef, useState } from "react";
import { NavLink } from "react-router-dom";

import { PiLightningFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";

function CheckoutBar({ amountToPay, amountSaved }) {
  const [hideBar, setHideBar] = useState(false);
  const footerRef = useRef(null);

  useEffect(() => {
    const footer = document.getElementById("footer");
    const observer = new IntersectionObserver(
      ([entry]) => {
        setHideBar(entry.isIntersecting);
      },
      {
        root: null,
        threshold: 0.1,
      },
    );
    if (footer) observer.observe(footer);
    return () => {
      if (footer) observer.unobserve(footer);
    };
  }, []);
  return (
    <div className={`fixed bottom-0 w-[80%] left-[10%] right-[10%] pt-2 text-white bg-gray-600 rounded-t-xl ${hideBar ? "translate-y-full" : "translate-y-0"}`}>
      {/* Amount to pay and total saved */}
      <div className="flex gap-4 px-5">
        <p className="my-auto mb-2">
          Subtotal: <b className="text-xl">&#8377;{amountToPay}</b>
        </p>
        <p className="my-auto px-2 py-1 rounded-sm bg-linear-to-r from-gray-600 to-gray-800 mb-2">
          Savings: <b>&#8377;{amountSaved}</b>
        </p>
      </div>

      {/* Delivery type and proceed to checkout */}
      <div className="flex flex-col gap-2 px-4 pt-2 pb-4 bg-black rounded-t-xl">
        <p>Choose delivery type</p>
        <div className="flex justify-between">
          <div className="flex gap-5 ">
            <NavLink className="flex gap-5 items-center px-4 py-1 bg-gray-200 w-45 rounded-lg">
              <span className="text-gray-800 px-2">
                <PiLightningFill />
              </span>
              <span className="text-black">Now</span>
            </NavLink>
            <NavLink className="flex gap-5 items-center px-4 py-1 bg-green-200 w-45 rounded-lg">
              <span className="size-10 grid place-items-center text-gray-800 bg-gray-200 rounded-full ">
                <IoTime className="size-5" />
              </span>
              <p className="flex flex-col text-black leading-4">
                <span>Later</span>
                <span className="text-[0.7rem]">11 hrs</span>
              </p>
            </NavLink>
          </div>
          <div className="grid place-items-center px-15 py-1 font-bold bg-red-600 hover:bg-red-500 hover:cursor-pointer rounded-lg">
            <p>Proceed to Checkout</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CheckoutBar;
