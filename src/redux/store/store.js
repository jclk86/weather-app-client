import thunk from "redux-thunk";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; // defaults to localStorage for web
import reducers from "../reducers";

const rootReducer = combineReducers({
  ...reducers,
});

const persistConfig = {
  key: "root",
  storage,
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export default function configureStore() {
  const middleware = [thunk];
  // was just rootReducer
  const store = createStore(persistedReducer, applyMiddleware(...middleware));
  const persistor = persistStore(store);

  return { store, persistor };
}
