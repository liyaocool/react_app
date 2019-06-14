import { createStore } from "redux";
import reducers from "./reducers/index";
// import reducers from "./reducers/CountReducer";
const store = createStore(reducers, window.STATE_FROM_SERVER);
export default store;
