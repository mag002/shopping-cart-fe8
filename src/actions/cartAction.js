export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_NAME = "ADD_NAME";

export const addToCart = product => {
  return { type: ADD_PRODUCT, payload: product };
};
export const removeFromCart = product_id => {
  return { type: ADD_PRODUCT, payload: product_id };
};
export const addUserInfo = name => {
  return { type: ADD_NAME, payload: name };
};
