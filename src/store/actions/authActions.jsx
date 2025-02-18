import axios from "axios";
// import api from "../../services/api";
import "react-toastify/dist/ReactToastify.css";
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

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
const logoutUserAction = () => ({ type: LOGOUT_USER });

export const loginUser =
  (email, password, rememberMe, history) => async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      console.log("Login API Response:", response.data); // API'nin ne döndürdüğünü kontrol et
      console.log("User from response:", response.data.user); // user bilgisi null mı?
      const { token, user } = response.data;

      if (rememberMe) {
        localStorage.setItem("token", token);
      } else {
        localStorage.removeItem("token"); // Ensure token is removed if "Remember Me" is unchecked
      }
      axios.defaults.headers.common["Authorization"] = token;

      dispatch(loginSuccess(user));

      toast.success("Login successful!");

      const previousPage = sessionStorage.getItem("previousPage"); // Get previous page from sessionStorage
      const redirectUrl = previousPage || "/";
      history.push(redirectUrl);
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || "Login failed"));
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

// Thunk Action for Verifying Token on App Load
export const verifyToken = (history) => async (dispatch) => {
  const token = localStorage.getItem("token");
  if (!token) {
    return; // No token found, do nothing
  }

  axios.defaults.headers.common["Authorization"] = token;
  try {
    const response = await axios.get(`${API_BASE_URL}/verify`);
    const user = response.data;
    dispatch(loginSuccess(user));
    history.push("/shop"); // Redirect to shop after verifying token
    toast.success("Login successful!");
  } catch (error) {
    localStorage.removeItem("token");
    delete axios.defaults.headers.common["Authorization"];
    dispatch(logoutUserAction());
    history.push("/signup"); // Redirect to signup after deleting token
    toast.error("Session expired Please Login again");
  }
};

// Action Creator for Logout
export const logoutUser = (history) => (dispatch) => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  dispatch(logoutUserAction());
  toast.success("Logged out successfully!");
  history.push("/signup"); // Redirect after logout
};
