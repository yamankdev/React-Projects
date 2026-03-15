import { Link } from "react-router-dom";
import { LiaShippingFastSolid, LiaRupeeSignSolid } from "react-icons/lia";
import { MdSupportAgent, MdPayment } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer className="text-white bg-zinc-900">
      {/* Brand Logo and About project */}
      {/* <div className="px-2 py-4 lg:hidden">
        <img
          src="/brandLogo.png"
          alt="HappyBasket image"
          className="h-20 mx-auto"
        />
        <p className="p-3 text-[0.8rem] text-justify">
          HappyBasket is a developer-driven project created by YaMaN, to
          showcase attention to details, user convenience, scalability, speed
          and reliability. It reflects YaMaN’s dedication to create practical,
          real-world applications that bridge technology and everyday needs.
        </p>
      </div> */}
      <hr className="hidden lg:block text-gray-600" />

      <div className="flex justify-evenly gap-20 lg:gap-60 lg:w-[80%] mx-auto py-5 lg:py-6 text-[0.6rem] lg:text-[0.8rem]">
        <div className="flex flex-col lg:leading-6">
          <h3 className="font-bold mb-2">HappyBasket</h3>
          <p>About Us</p>
          <p>In News</p>
          <p>Green HappyBasket</p>
          <p>Privacy Policy</p>
          <p>Affiliate</p>
          <p>Terms & Conditions</p>
          <p>hb Daily</p>
        </div>
        <div className="flex flex-col lg:leading-6">
          <h3 className="font-bold mb-2">Help</h3>
          <p>FAQs</p>
          <p>Contact Us</p>
          <p>hb Wallet FAQs</p>
          <p>hb Wallet T&Cs</p>
          <p>Vendor Connect</p>
        </div>
        <div className="hidden lg:flex flex-col gap-5">
          <img
            src="/whiteLogo.png"
            alt="HappyBasket Logo"
            className="lg:h-15 lg:w-45"
          />
          <div className="flex gap-5">
            <Link className="flex gap-1 px-1 py-1 border border-white rounded-md hover:bg-white hover:text-black">
              <img
                src="/playstoreLogo.png"
                alt="Playstore"
                className="size-5 m-auto "
              />
              <p className="flex flex-col text-[0.5rem] leading-2.5 my-auto">
                <span>GET IT ON</span>
                <span className="text-[0.8rem] font-semibold">Google Play</span>
              </p>
            </Link>
            <Link className="flex gap-1 px-1 py-1 border border-white rounded-md hover:bg-white hover:text-black">
              <img
                src="/appleLogo.png"
                alt="Playstore"
                className="size-5 my-auto hover:text-black"
              />
              <p className="flex flex-col text-[0.5rem] leading-2.5 my-auto">
                <span>Download on the</span>
                <span className="text-[0.8rem] font-semibold">App Store</span>
              </p>
            </Link>
          </div>
          <div className="hidden lg:flex lg:gap-5 lg:justify-center">
            <Link className="p-1 ring-1 rounded-full hover:bg-white hover:text-black">
              <FaFacebookF />
            </Link>
            <Link className="p-1 ring-1 rounded-full hover:bg-white hover:text-black">
              <FaXTwitter />
            </Link>
            <Link className="p-1 ring-1 rounded-full hover:bg-white hover:text-black">
              <FaInstagram />
            </Link>
            <Link className="p-1 ring-1 rounded-full hover:bg-white hover:text-black">
              <FaYoutube />
            </Link>
          </div>
        </div>
      </div>

      <hr className="text-gray-600" />

      {/* Project Features */}
      <div className="lg:w-[80%] lg:mx-auto lg:py-5">
        <h3 className="text-2xl text-center font-bold">Features</h3>
        <div className="grid grid-cols-2 lg:grid-cols-4 -gap-10">
          <div className="flex flex-col gap-1 p-5 items-center">
            <div className="p-2 ring-1 rounded-full">
              <LiaShippingFastSolid className="size-7 text-center" />
            </div>
            <p className="text-[0.8rem] text-center leading-5">
              <b>Free Shipping</b>
              <br />
              <span className="text-[0.7rem]">on purchase over &#8377;500</span>
            </p>
          </div>
          <div className="flex flex-col gap-1 p-5 items-center">
            <div className="p-2 ring-1 rounded-full">
              <LiaRupeeSignSolid className="size-7 text-center" />
            </div>
            <p className="text-[0.8rem] text-center leading-5">
              <b>Money Back</b>
              <br />
              <span className="text-[0.7rem]">7 days money back</span>
            </p>
          </div>
          <div className="flex flex-col gap-1 p-5 items-center">
            <div className="p-2 ring-1 rounded-full">
              <MdSupportAgent className="size-7 text-center" />
            </div>
            <p className="text-[0.8rem] text-center leading-5">
              <b>Online Support</b>
              <br />
              <span className="text-[0.7rem]">24/7 technical support</span>
            </p>
          </div>
          <div className="flex flex-col gap-1 p-5 items-center">
            <div className="p-2 ring-1 rounded-full">
              <MdPayment className="size-7 text-center" />
            </div>
            <p className="text-[0.8rem] text-center leading-5">
              <b>Secure Payment</b>
              <br />
              <span className="text-[0.7rem]">All cards accepted</span>
            </p>
          </div>
        </div>
      </div>

      <hr className="text-gray-600" />

      <div className="lg:hidden flex flex-col gap-3 py-5">
        <img
          src="/whiteLogo.png"
          alt="HappyBasket Logo"
          className="h-15 w-50 mx-auto"
        />
        <div className="flex gap-5 mx-auto">
          <Link className="flex gap-1 px-1 py-1 border border-white rounded-md hover:bg-white hover:text-black">
            <img
              src="/playstoreLogo.png"
              alt="Playstore"
              className="size-5 m-auto "
            />
            <p className="flex flex-col lg:hidden text-[0.5rem] leading-2.5 my-auto">
              <span>GET IT ON</span>
              <span className="text-[0.8rem] font-semibold">Google Play</span>
            </p>
          </Link>
          <Link className="flex gap-1 px-1 py-1 border border-white rounded-md hover:bg-white hover:text-black">
            <img
              src="/appleLogo.png"
              alt="Playstore"
              className="size-5 my-auto hover:text-black"
            />
            <p className="flex flex-col text-[0.5rem] leading-2.5 my-auto">
              <span>Download on the</span>
              <span className="text-[0.8rem] font-semibold">App Store</span>
            </p>
          </Link>
        </div>
        <div className="hidden lg:flex lg:gap-5 lg:justify-center">
          <Link className="p-1 ring-1 rounded-full hover:bg-white hover:text-black">
            <FaFacebookF />
          </Link>
          <Link className="p-1 ring-1 rounded-full hover:bg-white hover:text-black">
            <FaXTwitter />
          </Link>
          <Link className="p-1 ring-1 rounded-full hover:bg-white hover:text-black">
            <FaInstagram />
          </Link>
          <Link className="p-1 ring-1 rounded-full hover:bg-white hover:text-black">
            <FaYoutube />
          </Link>
        </div>
      </div>

      {/* Copyright and Trademark */}
      <div className="flex flex-col lg:block py-4 bg-black text-white">
        <div className="flex gap-2 justify-center lg:hidden ">
          <Link className="p-1 ring-1 rounded-full">
            <FaFacebookF />
          </Link>
          <Link className="p-1 ring-1 rounded-full">
            <FaXTwitter />
          </Link>
          <Link className="p-1 ring-1 rounded-full">
            <FaInstagram />
          </Link>
          <Link className="p-1 ring-1 rounded-full">
            <FaYoutube />
          </Link>
        </div>
        <p className="text-[0.8rem] text-center py-2 mb-9 lg:mb-0">
          <b>&copy; 2026 HappyBasket&trade;</b> — Made by YaMaN with ♥
        </p>
      </div>
    </footer>
  );
}

export default Footer;
