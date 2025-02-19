import {
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT_USER,
} from "../actions/authActions";

const initialState = {
  roles: [],
  loading: false,
  error: null,
  user: null,
  signupSuccess: false,
  isAuthenticated: false,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_REQUEST:
      return { ...state, loading: true, error: null };
    case LOGIN_REQUEST:
      return { ...state, loading: true, error: null };
    case SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ROLES_SUCCESS:
      return { ...state, loading: false, roles: action.payload };
    case FETCH_ROLES_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case LOGIN_SUCCESS:
      return {
        ...state,
        loading: false,
        user: action.payload,
        error: null,
        isAuthenticated: true,
      };
    case LOGIN_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload,
        isAuthenticated: false,
        user: null,
      };
    case SIGNUP_FAILURE:
      return {
        ...state,
        loading: false,
        signupSuccess: false,
        error: action.payload,
      };
    case SIGNUP_SUCCESS:
      return {
        ...state,
        loading: false,
        signupSuccess: false,
        user: action.payload,
        error: null,
      };
    case LOGOUT_USER:
      return {
        ...state,
        user: null,
        isAuthenticated: false,
        error: null,
      };
    default:
      return state;
  }
};

export default authReducer;
