import axiosInstance from "../../services/api";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";
export const SET_SELECTED_PRODUCT = 'SET_SELECTED_PRODUCT';
export const SET_PRODUCT_FETCH_STATE = 'SET_PRODUCT_FETCH_STATE';

export const setCategories = (categories) => ({
  type: SET_CATEGORIES,
  payload: categories,
});
export const setProductList = (productList) => ({
  type: SET_PRODUCT_LIST,
  payload: productList,
});
export const setTotal = (total) => ({ type: SET_TOTAL, payload: total });
export const setFetchState = (fetchState) => ({
  type: SET_FETCH_STATE,
  payload: fetchState,
});
export const setLimit = (limit) => ({ type: SET_LIMIT, payload: limit });
export const setOffset = (offset) => ({ type: SET_OFFSET, payload: offset });
export const setFilter = (filter) => ({ type: SET_FILTER, payload: filter });
export const setCurrentProduct = (currentProduct) => ({
  // Added action creator for setCurrentProduct
  type: SET_CURRENT_PRODUCT,
  payload: currentProduct,
});




export const fetchCategories = () => async (dispatch) => {
  try {
    dispatch(setFetchState("FETCHING"));
    const response = await axiosInstance.get("/categories");
    dispatch(setCategories(response.data));
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    console.error("Error fetching categories:", error);
    dispatch(setFetchState("FETCH_ERROR"));
  }
};

export const fetchProduct = (productId) => async (dispatch) => {
  dispatch(setFetchState("FETCHING"));
  try {
    const response = await axiosInstance.get(`/products/${productId}`); // Corrected URL for fetching single product
    dispatch(setCurrentProduct(response.data)); // Dispatch setCurrentProduct action
    dispatch(setFetchState("FETCHED"));
  } catch (error) {
    console.error("Error fetching product:", error);
    dispatch(setFetchState("FETCH_ERROR")); // Changed to FETCH_ERROR for consistency
  }
};

// Modified fetchProducts action to accept categoryId and gender directly
export const fetchProducts =
  (categoryId = null, gender = null) =>
  async (dispatch, getState) => {
    dispatch(setFetchState("FETCHING"));

    try {
      const { limit, offset } = getState().product;
      const params = new URLSearchParams();

      // if (categoryName) {
      //   params.append("category_name", categoryName); // Correct parameter name for category filtering
      // }

      if (categoryId) {
        params.append("category", categoryId); // Correct parameter name for category filtering
      }
      if (gender) {
        params.append("gender", gender); // Parameter for gender filtering
      }
      params.append("limit", limit);
      params.append("offset", offset);

      const response = await axiosInstance.get(
        `/products?${params.toString()}`
      ); // Using URLSearchParams to construct query string
      const { total, products } = response.data;
      dispatch(setProductList(products));
      dispatch(setTotal(total));
      dispatch(setFetchState("FETCHED"));
    } catch (error) {
      console.error("Error fetching products:", error);
      dispatch(setFetchState("FETCH_ERROR")); // Changed to FETCH_ERROR for consistency
    }
  };


  export const setSelectedProduct = (product) => ({
    type: SET_SELECTED_PRODUCT,
    payload: product
  });
  
  export const setProductFetchState = (state) => ({
    type: SET_PRODUCT_FETCH_STATE,
    payload: state
  });

  export const fetchProductDetail = (productId) => async (dispatch) => {
    try {
      dispatch(setProductFetchState('FETCHING'));
      
      const response = await axiosInstance.get(`/products/${productId}`);
      
      dispatch(setSelectedProduct(response.data));
      dispatch(setProductFetchState('FETCHED'));
      
      return { success: true, data: response.data };
    } catch (error) {
      console.error('Error fetching product detail:', error);
      dispatch(setProductFetchState('FAILED'));
      return { success: false, error: error.message };
    }
  };

  // Ürün detayını temizleme action'ı (sayfa değişimlerinde kullanılacak)
export const clearProductDetail = () => (dispatch) => {
  dispatch(setSelectedProduct(null));
  dispatch(setProductFetchState('IDLE'));
}; 