import { Link } from "react-router-dom";
import { BiArrowBack } from "react-icons/bi";

function Loginpage() {
  return (
    // absolute top-0 left-0 right-0 bottom-0 z-3
    <div className="bg-black/80 pb-3">
      {/* Back button */}
      <div className="flex px-2 py-1 gap-3 text-white">
        <Link to={"/auth"} className="size-8 mt-9">
          <BiArrowBack className="mt-[0.2rem] size-6" />
        </Link>
        <p className="text-[0.8rem] font-bold ml-[32%] mt-10">LOG IN</p>
      </div>

      <div className="flex flex-col w-[95%] mx-auto mt-3 px-3 py-4 rounded-xl bg-white">
        {/* Share number to login */}
        <div className="flex flex-col gap-2 justify-between">
          <h2 className="text-2 font-bold">Share your number to get started</h2>
          <input
            type="text"
            placeholder="Enter mobile number"
            className="outline-none border border-gray-400 placeholder-gray-600 text-[0.7rem] p-2 w-full rounded-sm"
          />
          <p className="text-[0.7rem] leading-3">
            By continuing, you agree to our Terms and Conditions and Privacy
            Policy.
          </p>
        </div>

        {/* Button for generating OTP */}
        <button className="w-full py-2 mt-90 ring-1 ring-green-300 rounded-sm text-[0.8rem] text-white flex justify-center   bg-green-600 ">
          <b>Get OTP</b>
        </button>
      </div>
    </div>
  );
}

export default Loginpage;
