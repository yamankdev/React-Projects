import { useUserData } from "../../../context/UserContext";

import { MdOutlineDeleteForever } from "react-icons/md";
import { LuMinus, LuPlus } from "react-icons/lu";

export function UpDownBtn({ id, quantity }) {
  const { dispatch } = useUserData();
  return (
    <div className="h-10 lg:p-2 flex justify-center items-center text-white lg:text-black bg-green-700 lg:bg-white lg:border lg:border-gray-600  rounded-lg">
      <button
        onClick={() => dispatch({ type: "DECREMENT", payload: id })}
        className="px-2 h-full lg:px-5 rounded-lg hover:bg-green-600 lg:hover:bg-red-600 lg:hover:text-white hover:cursor-pointer transition"
      >
        <LuMinus />
      </button>
      <span className="text-md px-2 lg:px-5 py-1 font-semibold">
        {quantity}
      </span>
      <button
        onClick={() => dispatch({ type: "INCREMENT", payload: id })}
        className="px-2 h-full lg:px-5 rounded-lg hover:bg-green-600 lg:hover:bg-red-600 lg:hover:text-white hover:cursor-pointer transition"
      >
        <LuPlus />
      </button>
    </div>
  );
}

export function RemoveBtn({ id }) {
  const { dispatch } = useUserData();
  return (
    <div
      className=" flex justify-center lg:hidden size-8 pt-2  rounded-full bg-red-600 "
      onClick={() => dispatch({ type: "REMOVE_FROM_CART", payload: id })}
    >
      <MdOutlineDeleteForever className="text-white" />
    </div>
  );
}
