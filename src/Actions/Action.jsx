export const addToCart = (items) => {
  return {
    type: "ADDTOCART",
    payload: items,
  };
};

export const addToWhishList = (items) => {
  return {
    type: "ADDTOWHISHLIST",
    payload: items,
  };
};

export const cartTotal = (total) => {
  return {
    type: "CARTTOTAL",
    payload: total,
  };
};

export const emptyCartTotal = () => {
  return {
    type: "EMPTYCART",
  };
};

export const emptyWhishListTotal = () => {
  return {
    type: "EMPTYWHISHLIST",
  };
};

export const incrementQuantity = (id) => {
  return {
    type: "INCREMENTQUANTITY",
    payload: id,
  };
};

export const decrementQuantity = (id) => {
  return {
    type: "DECREMENTQUANTITY",
    payload: id,
  };
};

export const totalAmount = (id) => {
  return {
    type: "TOTALAMOUNT",
    payload: id,
  };
};
export const removeCartItem = (id) => {
  return {
    type: "REMOVECARTITEM",
    payload: id,
  };
};

export const removeWhishlistItem = (id) => {
  return {
    type: "REMOVEWHISHLISTITEM",
    payload: id,
  };
};
