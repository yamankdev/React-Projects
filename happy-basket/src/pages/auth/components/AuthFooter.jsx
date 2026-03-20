import { FaFacebookF, FaInstagram, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from "react-router-dom";

function AuthFooter({ isUserLoggedIn, removeUser }) {
  return (
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
  );
}

export default AuthFooter;
