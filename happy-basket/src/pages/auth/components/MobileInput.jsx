import React from "react";

function MobileInput({handleSubmit, mobile, setMobile }) {
  return (
    <form
      onSubmit={handleSubmit}
      className=" relative flex flex-col w-[95%] mx-auto mt-3 px-3 py-4 rounded-xl bg-white"
    >
      {/* Share Phone Number to login */}
      <div className="flex flex-col gap-2 justify-between">
        <h2 className="text-2 font-bold">
          Share your mobile number to get started
        </h2>
        <input
          type="text"
          name="mobile"
          placeholder="Enter mobile number"
          vlaue={mobile}
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
        className="w-full py-2 mt-80 ring-1 ring-green-300 rounded-sm text-[0.8rem] text-white flex justify-center   bg-green-600 "
      >
        <b>Get OTP</b>
      </button>
    </form>
  );
}

export default MobileInput;
