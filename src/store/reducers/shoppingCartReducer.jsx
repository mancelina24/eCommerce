import {
  ADD_TO_CART,
  UPDATE_CART_ITEM,
  REMOVE_FROM_CART,
  SET_CART,
  SET_PAYMENT,
  SET_ADDRESS,
} from "../actions/shoppingCartActions";

// Load initial state from localStorage if available
const savedCart = localStorage.getItem('cart');
const initialShoppingCartState = {
  cart: savedCart ? JSON.parse(savedCart) : [],
  payment: {},
  address: {},
};

// Helper function to save cart to localStorage
const saveCartToStorage = (cart) => {
  localStorage.setItem('cart', JSON.stringify(cart));
};

const shoppingCartReducer = (state = initialShoppingCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART: {
      const { product } = action.payload;
      const existingItemIndex = state.cart.findIndex(
        (item) => item.product.id === product.id
      );

      if (existingItemIndex >= 0) {
        // Product already exists in cart, update count
        const updatedCart = [...state.cart];
        updatedCart[existingItemIndex] = {
          ...updatedCart[existingItemIndex],
          count: updatedCart[existingItemIndex].count + (product.count || 1),
          checked: true
        };
        const newState = { ...state, cart: updatedCart };
        saveCartToStorage(updatedCart);
        return newState;
      } else {
        // Add new product to cart
        return {
          ...state,
          cart: [...state.cart, {

            count: product.count || 1,
            checked: true,
            product: {
              id: product.id,
              name: product.name,
              price: product.price,
              images: product.images,
              description: product.description
            }
          }],
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
      const newCart = state.cart.filter((item) => item.product.id !== action.payload);
      saveCartToStorage(newCart);
      return { ...state, cart: newCart };
    }
    case SET_CART:
      saveCartToStorage(action.payload);
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
