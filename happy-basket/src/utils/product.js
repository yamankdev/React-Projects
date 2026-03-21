export const totalCartItems = (cart) => {
  return cart.reduce((sum, item) => sum + item.quantity, 0);
};

export const totalWishlistItems = (wishlist) => {
  return wishlist.reduce((sum, item) => sum + item.quantity, 0);
};

export const discount = (price, discountPrice) => {
  return Math.floor(((price - discountPrice) / price) * 100);
};


