import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { SlArrowRight } from "react-icons/sl";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Authpage() {
  //   const navigate = useNavigate();
  return (
    <div className="bg-gray-300 absolute top-0 z-3">
      <div className="flex px-4 py-1 gap-3 mt-10">
        <Link to={"/"} className="size-6">
          <BiArrowBack className="mt-[0.2rem]" />
        </Link>
        <p className="text-[0.8rem] font-bold">My Account</p>
      </div>
      <div className="relative px-2 mt-3">
        <div className="bg-black rounded-lg">
          <div className="flex flex-col gap-2 bg-white p-2 rounded-lg">
            <h2 className="text-2 font-bold">Hello</h2>
            <p className="text-[0.8rem] leading-4">
              Get exclusive offers and discounts on every order. Join now!
            </p>
          </div>
          <Link className="flex justify-between py-2 px-2 mb-1 text-white w-full ">
            <span className="text-[0.8rem] font-bold">Log In / Sign up</span>
            <span>
              <SlArrowRight className="mt-[0.15rem]" />
            </span>
          </Link>
        </div>
      </div>
      <div className="bg-white px-2 py-4">
        <h2 className="text-2 font-semibold">Do more with HappyBasket</h2>
        <p className="text-[0.75rem] mb-4">
          Well blogs, health tips, donations, and more
        </p>
        <div className="flex justify-evenly">
          <div className="w-[25%] flex flex-col items-center">
            <img src="" alt="" className="border size-18  rounded-xl" />
            <figcaption className="text-[0.7rem] font-semibold mt-1">
              hbWellness
            </figcaption>
          </div>
          <div className="w-[25%] flex flex-col items-center">
            <img src="" alt="" className="border size-18 rounded-xl" />
            <figcaption className="text-[0.7rem] font-semibold mt-1">
              hbLifestyle
            </figcaption>
          </div>
          <div className="w-[25%] flex flex-col items-center">
            <img src="" alt="" className="border size-18 rounded-xl" />
            <figcaption className="text-[0.7rem] font-semibold mt-1">
              Donation
            </figcaption>
          </div>
          <div className="w-[25%] flex flex-col items-center">
            <img src="" alt="" className="border size-18 rounded-xl" />
            <figcaption className="text-[0.7rem] font-semibold mt-1">
              Offers
            </figcaption>
          </div>
        </div>
      </div>
      <div className="flex flex-col gap-3 px-2 pt-5">
        <p className="text-[0.7rem] text-gray-700">FAQs</p>
        <p className="text-[0.7rem] text-gray-700">Terms & Conditions</p>
        <p className="text-[0.7rem] text-gray-700">Privacy Policy</p>
        <div className="flex flex-col py-1">
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
          <img
            src="/brandLogo.png"
            alt="HappyBasket"
            className="h-12 mx-auto mt-3"
          />
          <p className="text-[0.8rem] text-center mt-1">
            <b>&copy; 2026 HappyBasket&trade;</b> — Made by YaMaN with ♥
          </p>
          <pre className="text-[0.9rem] text-center text-gray-700 -mt-2">v1.0.0</pre>
        </div>
      </div>
    </div>
  );
}

export default Authpage;
