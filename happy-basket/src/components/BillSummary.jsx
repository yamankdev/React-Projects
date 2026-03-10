import { useCart } from "../context/CartContext";
import { TbReceiptFilled } from "react-icons/tb";

function BillSummary() {
  const { state } = useCart();

  const totalItems = state.cartItems.reduce(
    (sum, item) => sum + item.quantity,
    0,
  );
  const subTotalPrice = state.cartItems.reduce(
    (sum, item) => item.quantity * item.price + sum,
    0,
  );
  const subTotalDiscountedPrice = state.cartItems.reduce(
    (sum, item) => item.quantity * item.discountPrice + sum,
    0,
  );
  const handlingFee = 10;
  const totalPrice = subTotalPrice + handlingFee;
  const totalDiscountedPrice = subTotalDiscountedPrice + handlingFee;

  return (
    <div className="flex flex-col gap-2 px-3 py-4 w-full rounded-lg bg-white">
      <h3 className="text-1 font-bold">Bill Summary</h3>
      <div className="flex justify-between text-[0.7rem]">
        <p>Basket Value</p>
        <p>
          <span className="text-[0.6rem] line-through">
            &#8377;{subTotalPrice}
          </span>
          <span className="text-semibold ml-1">
            &#8377;{subTotalDiscountedPrice}
          </span>
        </p>
      </div>
      <div className="flex justify-between text-[0.7rem] ">
        <p>Delivery Charge</p>
        <p className="text-[0.7rem]">FREE</p>
      </div>
      <div className="flex justify-between text-[0.7rem] ">
        <p>Get your hbNow order in a bag</p>
        <p className="text-[0.7rem]">FREE</p>
      </div>
      <div className="flex justify-between text-[0.7rem] ">
        <p>Handling Charge</p>
        <p className="text-[0.7rem]">&#8377;{handlingFee}</p>
      </div>
      <hr className="text-gray-500" />
      <div className="flex justify-between">
        <div className="flex gap-2">
          <TbReceiptFilled className="size-5 text-green-800" />
          <div className="flex flex-col text-[0.7rem] ">
            <p className="font-bold">To pay</p>
            <p className="text-[0.55rem]">Inclusive if all Taxes and Charges</p>
          </div>
        </div>
        <div className="flex flex-col items-end text-[0.9rem] leading-4">
          <b>&#8377;{totalDiscountedPrice}</b>
          <del className="text-[0.55rem]">&#8377;{totalPrice}</del>
        </div>
      </div>
    </div>
  );
}

export default BillSummary;
