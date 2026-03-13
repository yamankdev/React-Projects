import { updatedUsers } from "../helper/userToLocalStorage";

const dataFormat = {
  userID: "",
  name: "",
  mobile: "",
  email: "",
  addresses: [],
  cart: [],
  wishlist: [],
};
export const initialState = {
  users: JSON.parse(localStorage.getItem("users")) || [],
  currentUser: dataFormat,
};

function UserReducer(state, action) {
  switch (action.type) {
    case "USER_LOGIN": {
      let mobile = action.payload;
      let userExists = state.users.find((user) => {
        return user.mobile === mobile;
      });

      if (userExists) {
        return {
          ...state,
          currentUser: userExists,
        };
      }

      const updatedUser = {
        userID: `u_${mobile}`,
        name: "User",
        mobile: mobile,
        email: "",
        addresses: [],
        cart: [],
        wishlist: [],
      };
      return {
        users: [...state.users, updatedUser],
        // users: updatedUsers(state.users, updatedUser),
        currentUser: updatedUser,
      };
    }

    case "USER_LOGOUT": {
      // const mobile = action.payload;
      return {
        users: state.users,
        currentUser: dataFormat,
      };
    }

    case "ADD_TO_CART": {
      const itemDetails = action.payload;
      const itemExists = state.currentUser.cart.find((item) => {
        return item.id === itemDetails.id;
      });

      let updatedCart;
      if (itemExists) {
        updatedCart = state.currentUser.cart.map((item) =>
          item.id === itemDetails.id
            ? { ...item, quantity: item.quantity + 1 }
            : item,
        );
      } else {
        updatedCart = [
          ...state.currentUser.cart,
          { ...itemDetails, quantity: 1 },
        ];
      }

      const updatedUser = {
        ...state.currentUser,
        cart: updatedCart,
      };

      return {
        users: updatedUsers(state.users, updatedUser),
        currentUser: updatedUser,
      };
    }

    case "INCREMENT": {
      const itemID = action.payload;
      const updatedCart = state.currentUser.cart.map((item) =>
        item.id === itemID ? { ...item, quantity: item.quantity + 1 } : item,
      );
      const updatedUser = {
        ...state.currentUser,
        cart: updatedCart,
      };
      return {
        users: updatedUsers(state.users, updatedUser),
        currentUser: updatedUser,
      };
    }

    case "DECREMENT": {
      const itemID = action.payload;
      const updatedCart = state.currentUser.cart
        .map((item) =>
          item.id === itemID ? { ...item, quantity: item.quantity - 1 } : item,
        )
        .filter((item) => item.quantity > 0);

      const updatedUser = {
        ...state.currentUser,
        cart: updatedCart,
      };
      return {
        users: updatedUsers(state.users, updatedUser),
        currentUser: updatedUser,
      };
    }

    case "REMOVE_FROM_CART": {
      const itemID = action.payload;
      const updatedCart = state.currentUser.cart.filter(
        (item) => item.id !== itemID,
      );
      console.log(updatedCart);

      const updatedUser = {
        ...state.currentUser,
        cart: updatedCart,
      };

      return {
        users: updatedUsers(state.users, updatedUser),
        currentUser: updatedUser,
      };
    }

    case "TOGGLE_WISHLIST": {
      const itemDetails = action.payload;
      const itemExists = state.currentUser.wishlist.find((item) => {
        return item.id === itemDetails.id;
      });

      let updatedWishlist;
      if (itemExists) {
        updatedWishlist = state.currentUser.wishlist.filter(
          (item) => item.id !== itemDetails.id,
        );
      } else {
        updatedWishlist = [...state.currentUser.wishlist, itemDetails];
      }

      const updatedUser = {
        ...state.currentUser,
        wishlist: updatedWishlist,
      };
      return {
        users: updatedUsers(state.users, updatedUser),
        currentUser: updatedUser,
      };
    }

    case "REMOVE_FROM_WISHLIST": {
      const itemID = action.payload;
      const updatedWishlist = state.currentUser.wishlist.filter(
        (item) => item.id !== itemID,
      );
      const updatedUser = {
        ...state.currentUser,
        wishlist: updatedWishlist,
      };
      return {
        users: updatedUsers(state.users, updatedUser),
        currentUser: updatedUser,
      };
    }

    case "CLEAR_WISHLIST": {
      const updatedUser = {
        ...state.currentUser,
        wishlist: [],
      };
      return {
        users: updatedUsers(state.users, updatedUser),
        currentUser: updatedUser,
      };
    }

    default:
      return state;
  }
}

export default UserReducer;
