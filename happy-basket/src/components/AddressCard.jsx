import { GoHome } from "react-icons/go";
import { MdOutlineHomeWork } from "react-icons/md";
import { GrLocation } from "react-icons/gr";
import { PiDotsThreeVerticalBold } from "react-icons/pi";

function AddressCard({ addresses }) {
  return (
    <>
      {addresses.map((addr) => {
        let {
          name,
          mobile,
          house,
          area,
          landmark,
          city,
          state,
          pincode,
          addressType,
          isDefault,
        } = addr;

        return (
          <div className="flex justify-between p-2 border border-gray-400 rounded-lg mb-2">
            <div className="flex gap-2 items-start">
              <span className="p-2 bg-green-200 rounded-md mt-1">
                {addressType == "home" ? (
                  <GoHome className="size-5 text-green-700" />
                ) : addressType == "work" ? (
                  <MdOutlineHomeWork className="size-5 text-green-700" />
                ) : (
                  <GrLocation className="size-5 text-green-700" />
                )}
              </span>
              <div className="w-50 px-1">
                <div className="flex gap-2">
                  <h3 className="text-[0.8rem] font-bold">{name}</h3>
                  {Boolean(isDefault) && (
                    <span className="text-[0.55rem] text-blue-800 bg-blue-100 my-auto px-1 py-[0.05rem] font-bold rounded-sm">
                      SELECTED
                    </span>
                  )}
                </div>
                <p className="flex flex-col text-[0.7rem] leading-3">
                  <span className="line-clamp-2">
                    {house}, {landmark}, {area}, {city}, {state}
                  </span>
                  <span> {pincode}</span>
                  <span className="font-semibold">{mobile}</span>
                </p>
              </div>
            </div>
            <div className="flex flex-col relative p-1 text-gray-600 rounded-lg">
              <PiDotsThreeVerticalBold
                // onClick={openOptions}
                className="size-7 -mt-1 p-1 text-gray-600 rounded-lg"
              />
              {/* <div className="absolute top-0 -left-8 flex-col items-center text-[0.7rem] py-1 bg-gray-200 rounded-md ring ring-gray-400 ">
                <span className="px-3">Edit</span>
                <span className="px-3">Delete</span>
              </div> */}
            </div>
          </div>
        );
      })}
    </>
  );
}

export default AddressCard;
