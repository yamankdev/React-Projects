import { NavLink, useNavigate } from "react-router-dom";
import { useUserData } from "../../context/UserContext";
import CartItem from "../cart/components/CartItem";
import DesktopWishlist from "../wishlist/DesktopWishlist";
import CheckoutBar from "./components/CheckoutBar";

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
        <div className="flex flex-col gap-10 min-h-140">
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
          <CheckoutBar amountToPay={amountToPay} amountSaved={amountSaved}/>
        </div>
      )}
    </>
  );
}

export default DesktopCheckout;
