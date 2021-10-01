import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import reducers from "../reducers";

const rootReducer = combineReducers({
  ...reducers,
});

export default function configureStore() {
  const middleware = [thunk];
  // rootReducer includes state for todos
  const store = createStore(rootReducer, applyMiddleware(...middleware));

  return store;
}
