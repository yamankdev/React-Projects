import { Link, useNavigate } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";
import { useState } from "react";
import OtpInput from "../components/OtpInput";

function Loginpage() {
  const navigate = useNavigate();
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [mobile, setMobile] = useState();
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [message, setMessage] = useState("");

  const generateMockOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    console.log("Generated MockOtp: ", otp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (mobile.length != 10 || regex.test(mobile)) {
      alert("Please enter a valid mobile number.");
      return;
    }
    setMessage("Mock OTP generated (shown below for demo)");
    console.log("Mock OTP generated (shown below for demo)");
    generateMockOtp();
    setShowOtpInput(true);
  };

  const handleVerify = (userOtp) => {
    if (userOtp === generatedOtp) {
      setMessage("OTP verified successfully ✅");
      console.log("OTP verified successfully ✅");
      localStorage.setItem("mobile", mobile);
      navigate("/");
    } else {
      setMessage("Invalid OTP ❌");
      console.log("Invalid OTP ❌");
    }
  };

  return (
    // absolute top-0 left-0 right-0 bottom-0 z-3
    <div className="bg-black/80 pb-3">
      {/* Back button */}
      <div className="flex w-full px-2 py-1 gap-3 text-white">
        <button onClick={() => navigate(-1)} className="size-8 mt-9">
          <BiArrowBack className="mt-[0.2rem] size-6" />
        </button>
        <p className="text-[0.8rem] font-bold ml-[28%] mt-10">
          {!showOtpInput ? "LOG IN" : "ENTER OTP"}
        </p>
      </div>
      {!showOtpInput ? (
        // Enter phone before generating OTP
        <form
          onSubmit={handleSubmit}
          className=" relative flex flex-col w-[95%] mx-auto mt-3 px-3 py-4 rounded-xl bg-white"
        >
          {/* Share number to login */}
          <div className="flex flex-col gap-2 justify-between">
            <h2 className="text-2 font-bold">
              Share your number to get started
            </h2>
            <input
              type="text"
              name="mobile"
              placeholder="Enter mobile number"
              input={mobile}
              onChange={(e) => setMobile(e.target.value)}
              className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] text-[0.9rem] p-2 w-full rounded-sm"
            />
            <p className="text-[0.7rem] leading-3">
              By continuing, you agree to our Terms and Conditions and Privacy
              Policy.
            </p>
          </div>

          {/* Button for generating OTP */}
          <button
            type="submit"
            className="w-full py-2 mt-90 ring-1 ring-green-300 rounded-sm text-[0.8rem] text-white flex justify-center   bg-green-600 "
          >
            <b>Get OTP</b>
          </button>
        </form>
      ) : (
        // OTP Input page
        <OtpInput
          mobile={mobile}
          length={6}
          message={message}
          handleVerify={handleVerify}
        />
      )}
    </div>
  );
}

export default Loginpage;
