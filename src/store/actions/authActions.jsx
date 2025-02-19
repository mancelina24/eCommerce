import axios from "axios";
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
export const INITIALIZE_APP = "INITIALIZE_APP";

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

    dispatch(loginUser(email, password, false, history));
    toast.success("Signup successful!");
  } catch (error) {
    dispatch({
      type: SIGNUP_FAILURE,
      payload:
        error?.response?.data?.message || error?.message || "Signup failed",
    });
  }
};

const setAuthHeader = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = token; // No "Bearer " prefix
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};

const loginRequest = () => ({ type: LOGIN_REQUEST });
const loginSuccess = (user) => ({ type: LOGIN_SUCCESS, payload: user });
const loginFailure = (error) => ({ type: LOGIN_FAILURE, payload: error });
const logoutUserAction = () => ({ type: LOGOUT_USER });

export const loginUser =
  (email, password, rememberMe, history, role_id, name) => async (dispatch) => {
    dispatch(loginRequest());
    try {
      const response = await axios.post(`${API_BASE_URL}/login`, {
        email,
        password,
      });
      console.groupCollapsed("Login API Response Debugging"); // Use console.groupCollapsed for cleaner output

      console.log("Login API Response (Full):", response); // Log the entire response
      console.log("Login API Response (Data):", response.data); // Log just the data
      console.log("Login API Response (Status):", response.status); // Log the HTTP status code

      if (response.data) {
        console.log("Login API Response (data.token):", response.data.token); // Log the token
        console.log("Login API Response (data.user):", response.data.user); // Log the user object
      } else {
        console.warn("Login API Response (data) is undefined or null!");
      }

      console.groupEnd(); // Close the console group

      const { token, user } = response.data;

      if (rememberMe) {
        localStorage.setItem("token", token);
        localStorage.setItem("user", JSON.stringify(user));
      } else {
        localStorage.removeItem("token");
      }
      setAuthHeader(token); // Set Authorization header immediately

      dispatch(loginSuccess(user));

      toast.success("Login successful!");

      const previousPage = sessionStorage.getItem("previousPage");
      const redirectUrl = previousPage || "/";
      history.push(redirectUrl);
    } catch (error) {
      dispatch(loginFailure(error.response?.data?.message || "Login failed"));
      toast.error(error.response?.data?.message || "Login failed");
    }
  };

export const initializeApp = (history) => async (dispatch) => {
  const token = localStorage.getItem("token");

  if (token) {
    setAuthHeader(token);

    try {
      const response = await axios.get(`${API_BASE_URL}/verify`);
      console.log("verify API Response (Full):", response);
      const user = response.data;
      dispatch(loginSuccess(user));
      history.push("/shop");
    } catch (error) {
      localStorage.removeItem("token");
      setAuthHeader(null);
      dispatch(logoutUserAction());
      history.push("/signup");
      toast.error("Session expired Please Login again");
    }
  }
};

export const logoutUser = (history) => (dispatch) => {
  localStorage.removeItem("token");
  delete axios.defaults.headers.common["Authorization"];
  dispatch(logoutUserAction());
  toast.success("Logged out successfully!");
  history.push("/signup");
};

// export const verifyToken = (history) => async (dispatch) => {
//   const token = localStorage.getItem("token");
//   if (!token) {
//     return; // No token found, do nothing
//   }

//   axios.defaults.headers.common["Authorization"] = token;
//   try {
//     const response = await axios.get(`${API_BASE_URL}/verify`);
//     const user = response.data;
//     dispatch(loginSuccess(user));
//     history.push("/shop");
//     toast.success("Login successful!");
//   } catch (error) {
//     localStorage.removeItem("token");
//     delete axios.defaults.headers.common["Authorization"];
//     dispatch(logoutUserAction());
//     history.push("/signup");
//     toast.error("Session expired Please Login again");
//   }
// };
