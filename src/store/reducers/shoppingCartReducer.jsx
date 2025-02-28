import {
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_FROM_CART,
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCartActions";

const initialShoppingCartState = {
  cart: [],
  payment: {},
  address: {},
};

const shoppingCartReducer = (state = initialShoppingCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product } = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Product already exists in cart, increase count
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: updatedCart[existingItemIndex].count + 1,
        };
        return { ...state, cart: updatedCart };
      } else {
        // Add new product to cart
        return {
          ...state,
          cart: [...state.cart, { count: 1, checked: true, product }],
        };
      }
    }
    case UPDATE_CART_ITEM: {
      const { productId, updates } = action.payload;
      return {
        ...state,
        cart: state.cart.map((item) =>
          item.product.id === productId ? { ...item, ...updates } : item
        ),
      };
    }
    case REMOVE_FROM_CART: {
      return {
        ...state,
        cart: state.cart.filter((item) => item.product.id !== action.payload),
      };
    }
    case SET_CART:
      return { ...state, cart: action.payload };
    case SET_PAYMENT:
      return { ...state, payment: action.payload };
    case SET_ADDRESS:
      return { ...state, address: action.payload };
    default:
      return state;
  }
};

export default shoppingCartReducer;
