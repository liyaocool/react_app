import { createStore } from "redux";

function counter(state = { count: 0 }, action) {
  let count = state.count;
  switch (action.type) {
    case "INCREMENT":
      return { count: count + 1 };
    case "DECREMENT":
      return { count: count - 1 };
    default:
      return state;
  }
}

const store = createStore(counter);
export default store;
