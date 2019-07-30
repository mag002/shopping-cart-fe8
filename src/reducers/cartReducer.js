import { ADD_NAME, ADD_PRODUCT, REMOVE_PRODUCT } from "../actions/cartAction";
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
    default:
      return state;
  }
};

export default authReducer;
