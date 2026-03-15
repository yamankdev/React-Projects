import { useState } from "react";
import { useNavigate } from "react-router-dom";
import AddressInput from "../components/AddressInput";
import AddressCard from "../components/AddressCard";
import { useUserData } from "../context/UserContext";

import { BiArrowBack } from "react-icons/bi";
import { MdMyLocation, MdOutlineAdd } from "react-icons/md";

function Addresspage() {
  const [page, setPage] = useState(false);
  const { state } = useUserData();
  const navigate = useNavigate();

  const currentUser = state.currentUser;
  // console.log(currentUser.addresses);

  const handlePage = (pageValue) => {
    setPage(pageValue);
  };

  const isUserLoggedIn = currentUser.mobile;

  // const location = getLocation()
  return (
    <>
      {isUserLoggedIn && (
        <div className="bg-black/80 pb-3">
          {/* Back button */}
          <div className="flex w-full px-2 py-1 gap-3 text-white">
            <button onClick={() => navigate("/auth")} className="size-8 mt-9">
              <BiArrowBack className="mt-[0.2rem] size-6" />
            </button>
            <p className="text-[0.8rem] font-bold ml-[14%] mt-10">
              {!page ? "SELECT DELIVERY LOCATION" : "ENTER DELIVERY LOCATION"}
            </p>
          </div>
          {!page ? (
            // For search purpose
            <div className=" relative flex flex-col w-[95%] mx-auto mt-3 px-3 py-4 min-h-130 rounded-xl bg-white">
              {/* Search location using input and map */}
              <form className="flex flex-col gap-2 justify-between">
                <input
                  type="text"
                  name="location"
                  placeholder="Search for your location"
                  // vlaue={location}
                  // onChange={(e) => setMobile(e.target.value)}
                  className="outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] placeholder:ml-[10%] text-[0.9rem] p-2 w-full rounded-sm"
                />

                {/* Button to select the location from map */}
                <button className="flex justify-center gap-2 outline-none border border-gray-400 placeholder-gray-600 placeholder:text-[0.7rem] text-[0.9rem] text-green-700 p-2 w-full rounded-sm mb-3">
                  <MdMyLocation className="size-5" />
                  <span className="font-bold">Use current location</span>
                </button>
              </form>

              {/* Add Address */}
              <div className="flex justify-between items-center py-1 text-[0.8rem] font-semibold">
                <span className="font-semibold text-gray-600">
                  Saved addresses
                </span>

                {/* Button to add the address */}
                <button
                  onClick={() => setPage(true)}
                  className="flex gap-1 justify-center px-2 text-green-700"
                >
                  <MdOutlineAdd className="size-4 mt-[0.1rem]" />
                  <span className="font-bold">ADD NEW ADDRESS</span>
                </button>
              </div>

              {/* Saved addresses */}
              <div className="flex flex-col">
                {currentUser.addresses && (
                  <AddressCard addresses={currentUser.addresses} />
                )}
              </div>
            </div>
          ) : (
            <AddressInput handlePage={handlePage} />
          )}
        </div>
      )}
    </>
  );
}

export default Addresspage;
