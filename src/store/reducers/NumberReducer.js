const initialState = {
  num: 1
};
function NumberReducer(state = initialState, action) {
  let num = state.num;
  switch (action.type) {
    case "ADD_NUM":
      return { num: num + 1 };
    default:
      return state;
  }
}

export default NumberReducer;
