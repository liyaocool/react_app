import { createStore } from "redux";
import reducers from "./reducers/index";
// import reducers from "./reducers/CountReducer";
const store = createStore(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
export default store;
