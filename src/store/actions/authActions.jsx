import axiosInstance from "../../services/api";

import "react-toastify/dist/ReactToastify.css";
import { toast } from "react-toastify";

import { setUser, setRoles } from "./clientActions";

import axios from "axios";

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

// Action Creators
const fetchRolesRequest = () => ({ type: FETCH_ROLES_REQUEST });
const fetchRolesSuccess = (roles) => ({
  type: FETCH_ROLES_SUCCESS,
  payload: roles,
});
const fetchRolesFailure = (error) => ({
  type: FETCH_ROLES_FAILURE,
  payload: error,
});

const signupRequest = () => ({ type: SIGNUP_REQUEST });
const signupSuccess = () => ({ type: SIGNUP_SUCCESS });
const signupFailure = (error) => ({ type: SIGNUP_FAILURE, payload: error });

export const fetchRoles = () => async (dispatch) => {
  dispatch(fetchRolesRequest());
  try {
    const response = await axiosInstance.get("/roles");
    dispatch(fetchRolesSuccess(response.data));
    dispatch(setRoles(response.data));
  } catch (error) {
    dispatch(fetchRolesFailure(error.message));
  }
};

export const signupUser = (userData) => async (dispatch) => {
  dispatch(signupRequest());
  const { name, email, password, role_id, store } = userData;
  const formattedData = store
    ? { name, email, password, role_id, store }
    : { name, email, password, role_id };

  try {
    const response = await axiosInstance.post("/signup", formattedData);
    dispatch(signupSuccess());
    // After signup success, immediately log in the user
    //dispatch(loginUser(email, password, history)); // Assuming history is accessible here
    toast.success("Signup successful!");
    //  API Returns User?
    if (response.data.user) {
      const { user, token } = response.data;
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
      axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
      dispatch(loginSuccess(user)); // Dispatch user data on signup
      dispatch(setUser(user));
    }
    // Attempt Automatic Login After Signup
    else {
      dispatch(loginUser(email, password, false));
    }
    //Check the response to see if it includes user data, if not, automatically log the user in
    // if (response.data.user) {
    //   // if API returns user details
    //   dispatch(loginSuccess(response.data.user)); // Dispatch user details on signup
    // } else {
    //   // Attempt to log the user in immediately after signup:
    //   dispatch(loginUser(email, password, false)); // Don't remember on signup
    // }
  } catch (error) {
    dispatch(
      signupFailure(
        error?.response?.data?.message || error?.message || "Signup failed"
      )
    );
    throw error; // Re-throw for component-level error handling
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
const logoutUserAction = () => ({ type: LOGOUT_USER });

export const loginUser = (email, password, rememberMe) => async (dispatch) => {
  dispatch(loginRequest());
  try {
    const response = await axiosInstance.post("/login", {
      email,
      password,
    });
    const { user, token } = response.data;
    if (rememberMe) {
      localStorage.setItem("token", token);
      localStorage.setItem("user", JSON.stringify(user));
    } else {
      localStorage.removeItem("token"); // Ensure token is removed if "Remember Me" is unchecked
      localStorage.removeItem("user");
    }
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
    dispatch(loginSuccess(user));
    toast.success("Login successful!");
    dispatch(setUser(user));
    toast.success("Login successful!");
    window.location.href = "/";
    // const previousPage = sessionStorage.getItem("previousPage"); // Get previous page from sessionStorage
    // const redirectUrl = previousPage || "/";
    // history.push(redirectUrl);
  } catch (error) {
    dispatch(loginFailure(error.response?.data?.message || "Login failed"));
    toast.error(error.response?.data?.message || "Login failed");
    // throw error; // Re-throw for component-level error handling
  }
};

export const logoutUser = () => (dispatch) => {
  localStorage.removeItem("token");
  localStorage.removeItem("user");
  delete axios.defaults.headers.common["Authorization"];
  dispatch(logoutUserAction());
  toast.success("Logged out successfully!");
  // history.push("/signup");
};

export const verifyToken = () => async (dispatch) => {
  const token = localStorage.getItem("token");
  const storedUser = localStorage.getItem("user");

  if (token && storedUser) {
    try {
      const user = JSON.parse(storedUser); // Parse the stored user data

      //dispatch(setUser(user));
      axiosInstance.defaults.headers.common[
        "Authorization"
      ] = `Bearer ${token}`;
      dispatch(loginSuccess(user)); // Update Redux store with user data
      dispatch(setUser(user));
      toast.success("Token verified successfully!");
    } catch (error) {
      console.error("Token verification failed:", error);
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      delete axiosInstance.defaults.headers.common["Authorization"];
      dispatch(logoutUser());
    }
  } else {
    dispatch(logoutUser());
  }
};

export const checkAuthState = () => (dispatch) => {
  const token = localStorage.getItem("token");
  const user = localStorage.getItem("user");

  if (token && user) {
    axios.defaults.headers.common["Authorization"] = token;
    dispatch(loginSuccess(user));
  }
};
