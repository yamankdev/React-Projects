import { MdOutlineDeleteForever } from "react-icons/md";
import { Link } from "react-router-dom";
import { useUserData } from "../context/UserContext";

function WishlistCard({ wishlist }) {
  const { dispatch } = useUserData();

  return (
    <>
      {/* style={wishlistLength} */}
      <div className="grid grid-cols-2 gap-3 p-2 mt-21 h-full">
        {wishlist.map((prod) => {
          return (
            <div
              key={prod.id}
              className="relative h-70 p-1 shrink-0 bg-white shadow-gray-800"
            >
              <Link to={`/product/${prod.id}`}>
                <img
                  src={prod.image}
                  alt={prod.name}
                  className="h-50 mx-auto"
                />
                <figcaption className="flex flex-col items-center w-full">
                  <p className="text-[0.7rem] line-clamp-1">
                    {prod.description}
                  </p>
                  <p className="text-[0.8rem] flex gap-2">
                    <b>&#8377;{prod.discountPrice}</b>
                    <span className="text-[0.7rem] line-through text-gray-600">
                      &#8377;{prod.price}
                    </span>
                  </p>
                </figcaption>
              </Link>
              <button
                className="absolute flex justify-center size-6 pt-1 top-2 right-2 rounded-full bg-gray-700 active:bg-red-500"
                onClick={() =>
                  dispatch({
                    type: "REMOVE_FROM_WISHLIST",
                    payload: prod.id,
                  })
                }
              >
                <MdOutlineDeleteForever className="text-white active:text-white" />
              </button>
              <button
                onClick={() => dispatch({ type: "ADD_TO_CART", payload: prod })}
                className="btnStyle active:bg-green-700 active:text-white"
              >
                Add to Cart
              </button>
            </div>
          );
        })}
      </div>
      <div className="w-full px-2 py-2 z-5 bg-white fixed bottom-0">
        <button
          onClick={() => dispatch({ type: "CLEAR_WISHLIST" })}
          className="h-10 w-full text-white bg-red-700 rounded-lg"
        >
          <p className="my-auto">Clear Wishlist</p>
        </button>
      </div>
    </>
  );
}

export default WishlistCard;
