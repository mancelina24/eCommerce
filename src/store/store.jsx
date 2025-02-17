import {
  legacy_createStore as createStore,
  applyMiddleware,
  combineReducers,
} from "redux";
import { thunk } from "redux-thunk";
import logger from "redux-logger";

import authReducer from "./reducers/authReducer";
import productReducer from "./reducers/productReducer";
import shoppingCartReducer from "./reducers/shoppingCartReducer";
import clientReducer from "./reducers/clientReducer";

const rootReducer = combineReducers({
  auth: authReducer,
  client: clientReducer,
  product: productReducer,
  shoppingCart: shoppingCartReducer,
});

const store = createStore(rootReducer, applyMiddleware(thunk, logger));

export default store;
