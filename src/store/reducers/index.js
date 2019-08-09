import { combineReducers } from "redux";
import CountReducer from "./CountReducer";
import NumberReducer from "./NumberReducer";
import UserReducer from "./UserReducer";

const reducers = combineReducers({
  CountReducer,
  NumberReducer,
  UserReducer
});
export default reducers;
