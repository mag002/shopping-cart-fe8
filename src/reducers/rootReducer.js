import authReducer from "./authReducer";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  auth: authReducer,
  product: productReducer,
  cart: cartReducer
});
export default rootReducer;
