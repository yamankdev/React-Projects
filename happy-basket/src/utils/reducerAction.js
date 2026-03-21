export const userLogin = (mobile) => {
  return dispatch({ type: "USER_LOGIN", payload: mobile });
};

export const userLogout = () => {
  return dispatch({ type: "USER_LOGOUT" });
};

export const userProfileUpdate = (user) => {
  return dispatch({ type: "USER_PROFILE_UPDATE", payload: user });
};

export const addAddress = (address) => {
  return dispatch({ type: "ADD_ADDRESS", payload: address });
};

export const addToCart = (product) => {
  return dispatch({ type: "ADD_TO_CART", payload: product });
};

export const increment = (id) => {
  return dispatch({ type: "INCREMENT", payload: id });
};

export const decrement = (id) => {
  return dispatch({ type: "DECREMENT", payload: id });
};

export const removeFromCart = (id) => {
  return dispatch({ type: "REMOVE_FROM_CART", payload: id });
};

export const addToWishlist = (product) => {
  return dispatch({ type: "ADD_TO_WISHLIST", payload: product });
};

export const toggleWishlist = (product) => {
  return dispatch({ type: "TOGGLE_WISHLIST", payload: product });
};

export const removeFromWishlist = (id) => {
  return dispatch({ type: "REMOVE_FROM_WISHLIST", payload: id });
};

export const clearWishlist = () => {
  return dispatch({ type: "CLEAR_WISHLIST" });
};
