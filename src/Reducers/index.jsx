import { combineReducers } from "redux";
import AddToCart from "./AddToCart";
import AddToWhishList from "./AddToWhishList";

const rootReducer = combineReducers({
  AddToCart,
  AddToWhishList,
});

export default rootReducer;
