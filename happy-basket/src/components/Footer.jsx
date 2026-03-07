import { Link } from "react-router-dom";
import { LiaShippingFastSolid, LiaRupeeSignSolid } from "react-icons/lia";
import { MdSupportAgent, MdPayment } from "react-icons/md";
import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

function Footer() {
  return (
    <footer>
      {/* Brand Logo and About project */}
      <div className="bg-stone-400">
        <img
          src="/brandLogo.png"
          alt="HappyBasket image"
          className="h-20 mx-auto"
        />
        <p className="p-3 text-[0.8rem]">
          HappyBasket is a developer-driven project created by YaMaN, to
          showcase attention to details, user convenience, scalability, speed
          and reliability. It reflects YaMaN’s dedication to create practical,
          real-world applications that bridge technology and everyday needs.
        </p>
      </div>

      {/* Project Features */}
      <div className="bg-gray-600 text-white">
        <h3 className="text-2xl text-center">Features</h3>
        <div className="grid grid-cols-2 -gap-6">
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

      {/* Copyright and Trademark */}
      <div className="flex flex-col py-4 bg-gray-900 text-white">
        <div className="flex gap-2 justify-center ">
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
        <p className="text-[0.8rem] text-center py-2 mb-9">
          <b>&copy; 2026 HappyBasket&trade;</b> — Made by YaMaN with ♥
        </p>
      </div>
    </footer>
  );
}

export default Footer;
