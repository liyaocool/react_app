import * as types from "../actions_types";

const initialState = {
  num: 1
};
function NumberReducer(state = initialState, action) {
  switch (action.type) {
    case types.SET_NUM:
      return { num: action.num };
    case types.ADD_NUM:
      return { num: state.num + 1 };
    default:
      return state;
  }
}

export default NumberReducer;
