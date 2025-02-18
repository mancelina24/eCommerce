import axios from "axios";
// import api from "../../services/api";
import { useHistory } from "react-router-dom";
import { toast } from "react-toastify";

export const FETCH_ROLES_REQUEST = "FETCH_ROLES_REQUEST";
export const FETCH_ROLES_SUCCESS = "FETCH_ROLES_SUCCESS";
export const FETCH_ROLES_FAILURE = "FETCH_ROLES_FAILURE";
export const SIGNUP_REQUEST = "SIGNUP_REQUEST";
export const SIGNUP_SUCCESS = "SIGNUP_SUCCESS";
export const SIGNUP_FAILURE = "SIGNUP_FAILURE";
export const LOGIN_REQUEST = "LOGIN_REQUEST";
export const LOGIN_SUCCESS = "LOGIN_SUCCESS";
export const LOGIN_FAILURE = "LOGIN_FAILURE";
export const LOGOUT_USER = "LOGOUT_USER";

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
  const { name, email, password, role_id, store } = userData;
  const formattedData = store
    ? { name, email, password, role_id, store }
    : { name, email, password, role_id };
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, formattedData);
    dispatch({ type: SIGNUP_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload:
        error?.response?.data?.message || error?.message || "Signup failed",
    });
  }
};

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: LOGIN_REQUEST });
    const { email, password, rememberMe, history } = userData;
    const formattedData = { email, password };
    const response = await axios.post(`${API_BASE_URL}/login`, formattedData);
    const { token, user } = response.data;
    if (rememberMe) {
      localStorage.setItem("token", token);
    } else {
      localStorage.removeItem("token"); // Ensure token is removed if "Remember Me" is unchecked
    }
    axios.defaults.headers.common["Authorization"] = token;
    dispatch({ type: LOGIN_SUCCESS, payload: response.data });
    localStorage.setItem("token", response.data.token);

    return response.data; // Token vs. dönmek için
  } catch (error) {
    dispatch({ type: LOGIN_FAILURE, payload: error.response.data });
    throw error;
  }
};

export const logoutUser = () => ({
  // Add logoutUser action
  type: LOGOUT_USER,
});
