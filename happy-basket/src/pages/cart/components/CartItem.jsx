import { href, Link } from "react-router-dom";
import {
  UpDownBtn,
  RemoveBtn,
} from "../../checkout/components/CheckoutItemBtn";
import { useUserData } from "../../../context/UserContext";

function CartItem({ item }) {
  const { dispatch } = useUserData();
  const totalItemPrice = item.quantity * item.price;
  const totalItemDiscountedPrice = item.quantity * item.discountPrice;
  const totalSave = item.quantity * (item.price - item.discountPrice);

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  const handleAddToWishlist = (product) => {
    dispatch({ type: "ADD_TO_WISHLIST", payload: product });
    dispatch({type: "REMOVE_FROM_CART", payload: product.id})
  };

  return (
    <>
      {/* For small and medium screen */}
      <div className="flex lg:hidden justify-between p-2">
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

        {/* UpDown btn and remove btn */}
        <div className="w-[38%] flex justify-between gap-2">
          {/* Buttons to add/decrease number of items */}
          <div className="flex h-8 justify-center items-center text-white bg-green-700 rounded-lg">
            <UpDownBtn id={item.id} quantity={item.quantity} />
          </div>

          {/* Button to remove the item */}
          <RemoveBtn id={item.id} />
        </div>
      </div>

      {/* For large screen */}
      <div className="hidden lg:grid grid-cols-6 gap-5 p-5">
        {/* image of product */}
        <Link
          to={`/product/${item.id}`}
          className="col-span-2 grid grid-cols-subgrid"
        >
          <div>
            <img src={item.image} alt={item.name} className="h-30" />
          </div>

          {/* product name and prices */}
          <div className="col-start-2 flex flex-col justify-center">
            <p>{item.name}</p>
            <pre className="flex gap-1">
              <b>&#8377;{item.discountPrice}</b>
              <span className="text-[0.8rem] line-through text-gray-600 my-auto">
                &#8377;{item.price}
              </span>
            </pre>
          </div>
        </Link>

        {/* Up Down button */}
        <div className="col-start-5 flex flex-col justify-center items-center mr-15 gap-2">
          {/* Buttons to add/decrease number of items */}
          <UpDownBtn id={item.id} quantity={item.quantity} />
          <div className="w-30 text-[0.7rem] text-gray-700">
            <span
              className="hover:cursor-pointer"
              onClick={() => handleRemoveFromCart(item.id)}
            >
              Delete
            </span>{" "}
            |{" "}
            <span
              className="hover:cursor-pointer"
              onClick={() => handleAddToWishlist(item)}
            >
              Save for later
            </span>
          </div>
        </div>

        {/* Total discounted price and total money saved */}
        <div className="col-start-6 flex flex-col justify-center items-end">
          <b>&#8377;{totalItemDiscountedPrice}</b>
          <span className="text-[0.8rem]">Saved: &#8377;{totalSave}</span>
        </div>
      </div>
    </>
  );
}

export default CartItem;
