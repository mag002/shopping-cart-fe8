export const ADD_PRODUCT = "ADD_PRODUCT";
export const REMOVE_PRODUCT = "REMOVE_PRODUCT";
export const ADD_NAME = "ADD_NAME";
export const CHECKOUT_CART = "CHECKOUT_CART";
export const CHECKOUT_CART_ERROR = "CHECKOUT_CART_ERROR";

export const addToCart = product => {
  return { type: ADD_PRODUCT, payload: product };
};
export const removeFromCart = product_id => {
  return { type: REMOVE_PRODUCT, payload: product_id };
};
export const addUserInfo = name => {
  return { type: ADD_NAME, payload: name };
};

export const checkOut = cart => {
  return (dispatch, getState, { getFirebase, getFirestore }) => {
    const fireStore = getFirestore();
    fireStore
      .collection("cart")
      .add({
        ...cart,
        // name: "Up firebase",
        // products: [
        //   {
        //     product_img:
        //       "http:/zalora-media-live-sg.s3.amazonaws.com/product/33/3339/3.jpg",
        //     product_name: "Test",
        //     product_price: 20,
        //     product_quantity: 2
        //   }
        // ],
        createdAt: new Date()
      })
      .then(() => {
        dispatch({ type: CHECKOUT_CART, payload: cart });
      })
      .catch(err => {
        dispatch({ type: CHECKOUT_CART_ERROR, payload: err });
      });
  };
};
