import axios from "axios";
import api from "../../services/api";

export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";

const API_BASE_URL = "https://workintech-fe-ecommerce.onrender.com";

export const fetchRoles = () => async (dispatch) => {
  dispatch({ type: FETCH_ROLES_REQUEST });
  try {
    const response = await axios.get(`${API_BASE_URL}/roles`);
    dispatch({ type: FETCH_ROLES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: FETCH_ROLES_FAILURE, payload: error.message });
  }
};

export const signupUser = (userData) => async (dispatch) => {
  dispatch({ type: SIGNUP_REQUEST });
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, userData);
    dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload: error.response?.data?.message || "Signup failed",
    });
  }
};
