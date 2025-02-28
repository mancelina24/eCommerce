export const SET_CART = "SET_CART";
export const SET_PAYMENT = "SET_PAYMENT";
export const SET_ADDRESS = "SET_ADDRESS";
export const ADD_TO_CART = "ADD_TO_CART";
export const UPDATE_CART_ITEM = "UPDATE_CART_ITEM";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Set the entire cart (for initialization or reset)
export const setCart = (cart) => ({
  type: SET_CART,
  payload: cart,
});

// Set payment information
export const setPayment = (payment) => ({
  type: SET_PAYMENT,
  payload: payment,
});

// Set address information
export const setAddress = (address) => ({
  type: SET_ADDRESS,
  payload: address,
});

// Add a product to the cart
export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: { product },
});

// Update an item in the cart (count, checked status, etc.)
export const updateCartItem = (productId, updates) => ({
  type: UPDATE_CART_ITEM,
  payload: { productId, updates },
});

// Remove an item from the cart
export const removeFromCart = (productId) => ({
  type: REMOVE_FROM_CART,
  payload: productId,
});
