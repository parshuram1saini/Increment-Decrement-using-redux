import { createStore } from "redux";
import RootReducer from "./reducer/reducer";

const store = createStore(
  RootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
); //  createstore is use for   creating the store for storing the root reducer
//   insider the root reducer have stored the all state

export default store;
