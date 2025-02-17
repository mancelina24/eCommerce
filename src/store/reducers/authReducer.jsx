import {
  FETCH_ROLES_REQUEST,
  FETCH_ROLES_SUCCESS,
  FETCH_ROLES_FAILURE,
  SIGNUP_REQUEST,
  SIGNUP_SUCCESS,
  SIGNUP_FAILURE,
} from "../actions/authActions";

const initialState = {
  roles: [],
  loading: false,
  error: null,
  user: null,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_ROLES_REQUEST:
    case SIGNUP_REQUEST:
      return { ...state, loading: true, error: null };
    case FETCH_ROLES_SUCCESS:
      return { ...state, loading: false, roles: action.payload };
    case FETCH_ROLES_FAILURE:
    case SIGNUP_FAILURE:
      return { ...state, loading: false, error: action.payload };
    case SIGNUP_SUCCESS:
      return { ...state, loading: false, user: action.payload, error: null };
    default:
      return state;
  }
};

export default authReducer;
