import { combineReducers } from "redux";
import countReducer from "./CountReducer";
import numberReducer from "./NumberReducer";

const reducers = combineReducers({
  countReducer,
  numberReducer
});
export default reducers;
