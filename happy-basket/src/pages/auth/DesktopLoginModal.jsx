import { useEffect, useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserContext";

import { LiaShippingFastSolid, LiaRupeeSignSolid } from "react-icons/lia";
import { MdSupportAgent, MdPayment } from "react-icons/md";

function DesktopLoginModal({ isOpen, onClose, length = 6 }) {
  const navigate = useNavigate();
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [mobile, setMobile] = useState();
  const [userOtp, setUserOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  const { dispatch } = useUserData();
  // const [message, setMessage] = useState("");

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydoen", handleEsc);
    document.removeEventListener("keydown", handleEsc);
  }, [onClose]);

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  if (!isOpen) return null;

  const generateMockOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    console.log("Generated MockOtp: ", otp);
  };

  // setMobile("9692067827");

  useEffect(() => {
    if (inputRef.current[0]) inputRef.current[0].focus();
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (mobile.length != 10 || regex.test(mobile)) {
      alert("Please enter a valid phone number.");
      return;
    }
    // For testing purpose
    // dispatch({ type: "USER_LOGIN", payload: mobile });
    // onClose();
    // navigate("/");
    //
    // setMessage("Mock OTP generated (shown below for demo)");
    console.log("Mock OTP generated (shown below for demo)");
    generateMockOtp();
    setShowOtpInput(true);
  };

  const handleVerify = (userOtp) => {
    if (userOtp === generatedOtp) {
      dispatch({ type: "USER_LOGIN", payload: mobile });

      // setMessage("OTP verified successfully ✅");
      console.log("OTP verified successfully ✅");
      onClose();
      navigate("/");
    } else {
      // setMessage("Invalid OTP ❌");
      console.log("Invalid OTP ❌");

      return;
    }
  };

  const handleChange = (index, e) => {
    const value = e.target.value;
    // Checking for non-numeric otp
    if (isNaN(value)) return;

    const newUserOtp = [...userOtp];

    newUserOtp[index] = value.substring(value.length - 1);
    setUserOtp(newUserOtp);
    let combinedOtp = newUserOtp.join("");

    // After filling all the OTP fields
    if (combinedOtp.length === length) return handleVerify(combinedOtp);

    // Move to next input
    if (value && index < length - 1 && inputRef.current[index + 1])
      return inputRef.current[index + 1].focus();
  };

  const handleKeyDown = (index, e) => {
    // Move to previous input
    if (
      e.key === "Backspace" &&
      !userOtp[index] &&
      index > 0 &&
      inputRef.current[index - 1]
    )
      return inputRef.current[index - 1].focus();
  };

  const handleClick = (index) => {
    inputRef.current[index].setSelectionRange(1, 1);

    // Optional
    if (index > 0 && !userOtp[index - 1])
      return inputRef.current[userOtp.indexOf("")].focus();
  };

  return (
    <div className="fixed inset-0 z-50 grid place-items-center">
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50" onClick={onClose}></div>

      {/* Modal box */}
      <div className="relative flex bg-white w-150 h-80 rounded-xl">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute right-3 top-3 text-gray-700 hover:text-white"
        >
          X
        </button>
        {/* Left box for features */}
        <div className="flex flex-col gap-5 w-[40%] h-full p-6">
          <h3 className="text-sm text-center font-bold">
            Why choose HappyBasket ?
          </h3>
          <div className="grid grid-cols-2 -gap-10">
            <div className="flex flex-col gap-1 p-5 items-center">
              <LiaShippingFastSolid className="size-4 text-center" />
              <p className="text-[0.5rem] text-center">Free Shipping</p>
            </div>
            <div className="flex flex-col gap-1 p-5 items-center">
              <LiaRupeeSignSolid className="size-4 text-center" />
              <p className="text-[0.5rem] text-center">Money Back</p>
            </div>
            <div className="flex flex-col gap-1 p-5 items-center">
              <MdSupportAgent className="size-4 text-center" />
              <p className="text-[0.5rem] text-center">Online Support</p>
            </div>
            <div className="flex flex-col gap-1 p-5 items-center">
              <MdPayment className="size-4 text-center" />
              <p className="text-[0.5rem] text-center">Secure Payment</p>
            </div>
          </div>
          <hr className="w-45 mx-auto " />
          <div className="flex gap-5">
            <p className="text-[0.7rem] my-auto">Find us on</p>
            <span className="p-2 border rounded-sm">
              <img
                src="/playstoreLogo.png"
                alt="Playstore"
                className="size-4"
              />
            </span>
            <span className="p-2 border rounded-sm">
              <img
                src="/appleLogoBlack.png"
                alt="App Store"
                className="size-4"
              />
            </span>
          </div>
        </div>

        {/* Login and password screen */}
        <div className="w-[60%] flex flex-col bg-black text-white px-10 rounded-r-xl">
          {/* If OTP isn't generated */}
          {!showOtpInput ? (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col gap-8 m-auto"
            >
              {/* Share Phone Number to login */}
              <div className="flex flex-col -gap-6">
                <h2 className="text-lg font-bold">Login/Sign up</h2>
                <span className="text-[0.7rem]">Using OTP</span>
                <span className="w-10 border border-yellow-400"></span>
              </div>
              <input
                type="text"
                name="mobile"
                placeholder="Enter mobile number"
                vlaue={mobile}
                onChange={(e) => setMobile(e.target.value)}
                className="outline-none bg-gray-300  focus:border-2 focus:border-yellow-500 placeholder-gray-800 placeholder:text-[0.7rem] text-[0.9rem] text-black p-2 w-full rounded-sm"
              />

              {/* Button for generating OTP */}
              <button
                type="submit"
                className="w-full py-2 ring-1 ring-white rounded-sm text-[0.9rem] text-white flex justify-center bg-red-600 hover:cursor-pointer"
              >
                <b>Continue</b>
              </button>

              <p className="text-[0.75rem] text-gray-500 leading-3 text-center">
                By continuing, I accept TCP- happybasket’s{" "}
                <Link className="underline">Terms and Conditions</Link> &{" "}
                <Link className="underline">Privacy Policy</Link>. This site is
                protected by reCAPTCHA and the Google -{" "}
                <Link className="underline">Privacy Policy</Link> and &{" "}
                <Link className="underline">Terms of Service</Link> apply.
              </p>
            </form>
          ) : (
            <div className="flex flex-col gap-10 m-auto">
              {/* Share Phone Number to login */}
              <div className="flex flex-col -gap-6">
                <h2 className="text-lg font-bold">Verify Mobile Number</h2>
                <span className="text-[0.7rem]">+91 9692067827</span>
                <span className="w-10 border border-yellow-400"></span>
              </div>
              <div className="flex flex-col gap-1">
                <p className="text-[0.6rem]">Enter OTP</p>
                <div className="flex gap-2 mx-auto">
                  {userOtp &&
                    userOtp.map((value, index) => {
                      return (
                        <>
                          {/* {console.log("Index Number: ", index)} */}
                          <input
                            key={index}
                            type="text"
                            name="otp"
                            id="otp"
                            ref={(input) => (inputRef.current[index] = input)}
                            value={value}
                            placeholder="*"
                            onChange={(e) => handleChange(index, e)}
                            onKeyDown={(e) => handleKeyDown(index, e)}
                            onClick={() => handleClick(index)}
                            className="size-10 px-4 bg-white text-black placeholder-gray-600 text-[0.9rem] rounded-sm border"
                          />
                        </>
                      );
                    })}
                </div>
              </div>
              <Link className="text-[0.7rem] text-red-600 text-center underline">
                Resend OTP
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default DesktopLoginModal;
