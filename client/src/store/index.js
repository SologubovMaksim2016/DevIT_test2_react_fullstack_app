import {
  createStore,
  combineReducers,
  applyMiddleware
} from "redux";
import {
  composeWithDevTools
} from "redux-devtools-extension";
import {
  authReducer
} from "./authReduser";
import {
  usersReducer
} from "./usersReduser";

import thunk from "redux-thunk";

const rootReducer = combineReducers({
  auth: authReducer,
  users: usersReducer,
});

export const store = createStore(rootReducer, composeWithDevTools(applyMiddleware(thunk)));