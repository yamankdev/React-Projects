import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserContext";
import MobileInput from "./components/MobileInput";
import OtpInput from "./components/OtpInput";

import { BiArrowBack } from "react-icons/bi";

function MobileLogin() {
  const navigate = useNavigate();
  const [generatedOtp, setGeneratedOtp] = useState("");
  const [showOtpInput, setShowOtpInput] = useState(false);
  const [message, setMessage] = useState("");
  const [mobile, setMobile] = useState();
  const { dispatch } = useUserData();

  const generateMockOtp = () => {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    setGeneratedOtp(otp);
    console.log("Generated MockOtp: ", otp);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const regex = /[^0-9]/g;
    if (mobile.length != 10 || regex.test(mobile)) {
      alert("Please enter a valid phone number.");
      return;
    }

    // For testing purpose
    // dispatch({ type: "USER_LOGIN", payload: mobile });
    // navigate("/");

    setMessage("Mock OTP generated (shown below for demo)");
    console.log("Mock OTP generated (shown below for demo)");
    generateMockOtp();
    setShowOtpInput(true);
  };

  const handleVerify = (userOtp) => {
    if (userOtp === generatedOtp) {
      dispatch({ type: "USER_LOGIN", payload: mobile });

      setMessage("OTP verified successfully ✅");
      console.log(message);
      navigate("/");
    } else {
      setMessage("Invalid OTP ❌");
      console.log(message);
      return;
    }
  };

  return (
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
        <MobileInput
          handleSubmit={handleSubmit}
          mobile={mobile}
          setMobile={setMobile}
        />
      ) : (
        // OTP Input page
        <OtpInput
          mobile={mobile}
          length={6}
          handleVerify={handleVerify}
        />
      )}
    </div>
  );
}

export default MobileLogin;
