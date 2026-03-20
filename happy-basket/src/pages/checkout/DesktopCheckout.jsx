import { NavLink, useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserContext";
import CartItem from "../cart/components/CartItem";
import DesktopWishlist from "../wishlist/DesktopWishlist";

import { PiLightningFill } from "react-icons/pi";
import { IoTime } from "react-icons/io5";

function DesktopCheckout() {
  const navigate = useNavigate();
  const { state } = useUserData();

  const { mobile, cart, wishlist } = state.currentUser;
  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0);

  const subTotalPrice = cart.reduce(
    (sum, item) => item.quantity * item.price + sum,
    0,
  );

  const subTotalDiscountedPrice = cart.reduce(
    (sum, item) => item.quantity * item.discountPrice + sum,
    0,
  );

  const handlingFee = 10;
  const amountSaved = subTotalPrice - subTotalDiscountedPrice;
  const amountToPay = subTotalDiscountedPrice + handlingFee;

  const isUserLoggedIn = mobile;

  // const isActive = ({ isActive }) => {
  //   isActive
  //     ? "flex gap-8 items-center px-4 py-1 bg-gray-200 w-45 rounded-lg"
  //     : "flex gap-8 items-center px-4 py-1 bg-green-200 w-45 rounded-lg";
  // };

  const addr = "Sivajinagar, RoadNo. 4, Vadlapudi, Visakhapatnam, 530046";

  return (
    <>
      {totalItems === 0 ? (

        // Empty cart with Wishlist
        <div className="flex flex-col gap-10 min-h-145">
          <div className="w-[76%] h-[40%] mx-auto mt-10 px-8 py-10 grid place-items-center bg-green-100 rounded-md">
            <div className="flex flex-col items-center gap-5">
              <div className="relative size-25 rounded-full bg-green-300">
                <img
                  src="/emptyCart.png"
                  alt="EmptyCart img"
                  className="absolute bottom-1 left-2.5 size-20"
                />
              </div>
              <h2 className="text-2xl text-green-700">
                Let's fill the empty{" "}
                <span className="text-green-400">Basket</span>
              </h2>
              <button
                onClick={() => navigate("/")}
                className="text-base text-white font-bold bg-red-700 px-6 py-2 rounded-md hover:cursor-pointer"
              >
                Continue Shopping
              </button>
            </div>
          </div>

          <hr className="text-green-300 w-[80%] m-auto" />

          {/* Wishlist */}
          <div className="w-[76%] mx-auto">
            <DesktopWishlist />
          </div>
        </div>
      ) : (

        // If cart with wishlist
        <div className="relative min-h-135">
          <div className="w-[80%] flex flex-col gap-10 px-8 mx-auto mt-10">
            <div>
              <h2 className="text-2xl font-bold">Your Basket</h2>
              <div className="flex flex-col gap-2 mt-4">
                <div className="flex justify-between font-bold">
                  <p>Delivery 1</p>
                  {totalItems === 1 ? (
                    <p>
                      <span>{totalItems} </span>Product
                    </p>
                  ) : (
                    <p>
                      <span>{totalItems} </span>Products
                    </p>
                  )}
                </div>

                {/* Items, Qauntities and Subtotal */}
                <div className="grid grid-cols-6 p-2 font-bold text-gray-500 bg-gray-200 rounded-lg">
                  <span>Items</span>
                  <span className="col-start-5">Quantity</span>
                  <span className="col-start-6 text-end">Sub-total</span>
                </div>

                {/* Each items from the cart */}
                {cart &&
                  cart.map((item) => {
                    return <CartItem key={item.id} item={item} />;
                  })}
              </div>
            </div>

            <hr className="text-green-300 w-[80%] m-auto" />

            <DesktopWishlist />
          </div>

          {/* total amount and proceed to checkout */}
          <div className="fixed bottom-0 w-[80%] left-[10%] right-[10%] pt-2 text-white bg-gray-600 rounded-t-xl ">
            {/* Amount to pay and total saved */}
            <div className="flex gap-4 px-5">
              <p className="my-auto mb-2">
                Subtotal: <b className="text-xl">&#8377;{amountToPay}</b>
              </p>
              <p className="my-auto px-2 py-1 rounded-sm bg-linear-to-r from-gray-600 to-gray-800 mb-2">
                Savings: <b>&#8377;{amountSaved}</b>
              </p>
            </div>

            {/* Delivery type and proceed to checkout */}
            <div className="flex flex-col gap-2 px-4 pt-2 pb-4 bg-black rounded-t-xl">
              <p>Choose delivery type</p>
              <div className="flex justify-between">
                <div className="flex gap-5 ">
                  <NavLink className="flex gap-5 items-center px-4 py-1 bg-gray-200 w-45 rounded-lg">
                    <span className="text-gray-800 px-2">
                      <PiLightningFill />
                    </span>
                    <span className="text-black">Now</span>
                  </NavLink>
                  <NavLink className="flex gap-5 items-center px-4 py-1 bg-green-200 w-45 rounded-lg">
                    <span className="size-10 grid place-items-center text-gray-800 bg-gray-200 rounded-full ">
                      <IoTime className="size-5" />
                    </span>
                    <p className="flex flex-col text-black leading-4">
                      <span>Later</span>
                      <span className="text-[0.7rem]">11 hrs</span>
                    </p>
                  </NavLink>
                </div>
                <div className="grid place-items-center px-15 py-1 font-bold bg-red-600 hover:bg-red-500 hover:cursor-pointer rounded-lg">
                  <p>Proceed to Checkout</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default DesktopCheckout;
