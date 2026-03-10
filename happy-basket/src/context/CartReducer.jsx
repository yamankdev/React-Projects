export const initialState = {
  cartItems: [],
};

function CartReducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const item = action.payload;
      const existingItems = state.cartItems.find((cartItem) => {
        return cartItem.id === item.id;
      });

      if (existingItems) {
        return {
          ...state,
          cartItems: state.cartItems.map((cartItem) =>
            cartItem.id === item.id
              ? { ...cartItem, quantity: cartItem.quantity + 1 }
              : cartItem,
          ),
        };
      }
      return {
        ...state,
        cartItems: [...state.cartItems, { ...item, quantity: 1 }],
      };
    }

    case "INCREMENT": {
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem,
        ),
      };
    }

    case "DECREMENT": {
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems
          .map((cartItem) =>
            cartItem.id === id
              ? { ...cartItem, quantity: cartItem.quantity - 1 }
              : cartItem,
          )
          .filter((cartItem) => cartItem.quantity > 0),
      };
    }

    case "REMOVE_FROM_CART": {
      const id = action.payload;
      return {
        ...state,
        cartItems: state.cartItems.filter((cartItem) => cartItem.id !== id),
      };
    }

    default:
      return state;
  }
}

export default CartReducer;
