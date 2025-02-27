import {
  SET_CATEGORIES,
  SET_PRODUCT_LIST,
  SET_TOTAL,
  SET_FETCH_STATE,
  SET_LIMIT,
  SET_OFFSET,
  SET_FILTER,
  SET_CURRENT_PRODUCT, // Import the new action type
} from "../actions/productActions";

const initialProductState = {
  categories: [],
  productList: [],
  total: 587,
  limit: 16,
  offset: 0,
  filter: "",
  fetchState: "NOT_FETCHED",
  currentProduct: null, //
  selectedProduct: null, // Seçili ürü
  productFetchState: 'IDLE', // Ürün detayı fetch durumu içinn detayı için Added for single product details
};

const productReducer = (state = initialProductState, action) => {
  switch (action.type) {
    case SET_CATEGORIES:
      return { ...state, categories: action.payload };
    case SET_PRODUCT_LIST:
      return { ...state, productList: action.payload };
    case SET_TOTAL:
      return { ...state, total: action.payload };
    case SET_FETCH_STATE:
      return { ...state, fetchState: action.payload };
    case SET_LIMIT:
      return { ...state, limit: action.payload };
    case SET_OFFSET:
      return { ...state, offset: action.payload };
    case SET_FILTER:
      return { ...state, filter: action.payload };
    case SET_CURRENT_PRODUCT: // Handle the new action type
      return { ...state, currentProduct: action.payload };
      case 'SET_SELECTED_PRODUCT':
        return {
          ...state,
          selectedProduct: action.payload
        };
      case 'SET_PRODUCT_FETCH_STATE':
        return {
          ...state,
          productFetchState: action.payload
        };
    default:
      return state;
  }
};

export default productReducer;
