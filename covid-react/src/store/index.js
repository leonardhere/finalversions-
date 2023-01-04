import { createStore, applyMiddleware } from "redux";
import rootReducer from "../reducers/index";
import logger from "redux-logger";
import thunk from "redux-thunk";
let store;

export function configureStore() {
  store = createStore(rootReducer, applyMiddleware(thunk));
  return store;
}

//this is storage
