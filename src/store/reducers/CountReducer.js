import * as types from "../actions_types";

const initialState = {
  count: 0
};

function CountReducer(state = initialState, action) {
  let count = state.count;
  switch (action.type) {
    case types.INCREMENT:
      return { count: count + 1 };
    case types.DECREMENT:
      return { count: count - 1 };
    default:
      return state;
  }
}

export default CountReducer;
