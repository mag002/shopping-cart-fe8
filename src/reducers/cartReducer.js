import {
  ADD_NAME,
  ADD_PRODUCT,
  REMOVE_PRODUCT,
  CHECKOUT_CART,
  CHECKOUT_CART_ERROR
} from "../actions/cartAction";
const initState = {
  name: "",
  products: [],
  total: 0
};
const authReducer = (state = initState, action) => {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        products: [...state.products, action.payload],
        total: state.total + 1
      };
    case ADD_NAME:
      return {
        ...state,
        name: action.payload
      };
    case REMOVE_PRODUCT:
      const newState = state.products.filter(pro => {
        return pro.id !== action.payload;
      });
      return {
        ...state,
        products: newState,
        total: state.total - 1
      };
    case CHECKOUT_CART:
      console.log("DONE: ", action.payload);
      return {
        ...state,
        products: []
      };
    case CHECKOUT_CART_ERROR:
      console.log("errorrrrrrr: ", action.payload);
      return {
        ...state,
        products: []
      };
    default:
      return state;
  }
};

export default authReducer;
