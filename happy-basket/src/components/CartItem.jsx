import { useUserData } from "../context/UserContext";

import { MdOutlineDeleteForever } from "react-icons/md";

function CartItem({ item }) {
  const { dispatch } = useUserData();

  const totalItemPrice = item.quantity * item.price;
  const totalItemDiscountedPrice = item.quantity * item.discountPrice;

  return (
    <div className="flex justify-between p-2">
      <div className="flex gap-3 ">
        {/* Image of the product */}
        <div>
          <img
            src={item.image}
            alt={item.name}
            className="size-12 border rounded-lg"
          />
        </div>

        {/* Product details */}
        <div className="flex flex-col gap-1 text-[0.6rem]">
          <p>{item.name}</p>
          <p>{item.unit}</p>
          <pre className="flex gap-1 text-[0.7rem]">
            <b>&#8377;{totalItemDiscountedPrice}</b>
            <span className="text-[0.55rem] line-through my-auto">
              &#8377;{totalItemPrice}
            </span>
          </pre>
        </div>
      </div>
      <div className="w-[38%] flex justify-between gap-2">
        {/* Buttons to add/decrease number of items */}
        <div className="flex h-8 justify-center items-center text-white bg-green-700 rounded-lg">
          <button
            onClick={() => dispatch({ type: "DECREMENT", payload: item.id })}
            className="px-2 rounded-lg hover:bg-green-600 transition"
          >
            -
          </button>
          <span className="text-md px-2 py-1 font-semibold">
            {item.quantity}
          </span>
          <button
            onClick={() => dispatch({ type: "INCREMENT", payload: item.id })}
            className="px-2 rounded-lg hover:bg-green-600 transition"
          >
            +
          </button>
        </div>

        {/* Button to remove the item */}
        <div
          className=" flex justify-center size-8 pt-2  rounded-full bg-red-600"
          onClick={() =>
            dispatch({ type: "REMOVE_FROM_CART", payload: item.id })
          }
        >
          <MdOutlineDeleteForever className="text-white" />
        </div>
      </div>
    </div>
  );
}

export default CartItem;
