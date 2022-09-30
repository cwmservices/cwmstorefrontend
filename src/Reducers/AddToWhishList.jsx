const initialState = [];

const addToWhishList = (state = initialState, action) => {
  if (action.type == "ADDTOWHISHLIST") {
    return [...state, action.payload];
  }

  if (action.type == "EMPTYWHISHLIST") {
    return [];
  }

  if (action.type == "REMOVEWHISHLISTITEM") {
    const updatedArray = state.filter((currentItem) => {
      return currentItem.id != action.payload;
    });
    return updatedArray;
  }

  return state;
};

export default addToWhishList;
