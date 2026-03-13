import { useEffect, useRef, useState } from "react";

function OtpInput({ mobile, length = 6, handleVerify = (combinedOtp) => {} }) {
  const [userOtp, setUserOtp] = useState(new Array(length).fill(""));
  const inputRef = useRef([]);
  //   console.log(otp);

  useEffect(() => {
    if (inputRef.current[0]) inputRef.current[0].focus();
  }, []);

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
    <div className="relative flex flex-col w-[95%] mx-auto mt-3 px-3 py-4 rounded-xl bg-white">
      {/* Enter the OTP to login */}
      <div className="flex flex-col gap-3">
        <h2 className="text-2 font-bold w-full mb-10">
          Enter OTP sent to +91 {mobile}
        </h2>
        <div className="flex gap-3 mx-auto">
          {userOtp &&
            userOtp.map((value, index) => {
              return (
                <input
                  key={index}
                  type="text"
                  name="otp"
                  ref={(input) => (inputRef.current[index] = input)}
                  value={value}
                  placeholder="*"
                  onChange={(e) => handleChange(index, e)}
                  onKeyDown={(e) => handleKeyDown(index, e)}
                  onClick={() => handleClick(index)}
                  className="size-10 px-4 placeholder-gray-600 text-[0.9rem] rounded-sm border"
                />
              );
            })}
        </div>
        <p className="text-[0.7rem] leading-3">
          By continuing, you agree to our Terms and Conditions and Privacy
          Policy.
        </p>
      </div>

      {/* Button for generating OTP */}
      <button
        // type="submit"
        className="w-full py-2 mt-76 ring-1 ring-green-300 rounded-sm text-[0.8rem] text-white flex justify-center bg-green-600 "
      >
        <b>SUBMIT</b>
      </button>
    </div>
  );
}

export default OtpInput;
