import axiosInstance from "../../services/api";

export const SET_CATEGORIES = "SET_CATEGORIES";
export const SET_PRODUCT_LIST = "SET_PRODUCT_LIST";
export const SET_TOTAL = "SET_TOTAL";
export const SET_FETCH_STATE = "SET_FETCH_STATE";
export const SET_LIMIT = "SET_LIMIT";
export const SET_OFFSET = "SET_OFFSET";
export const SET_FILTER = "SET_FILTER";
export const SET_CURRENT_PRODUCT = "SET_CURRENT_PRODUCT";

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

      if (categoryId) {
        params.append("category_id", categoryId); // Correct parameter name for category filtering
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
