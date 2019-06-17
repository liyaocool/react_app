import * as types from "../actions_types";

export const increment = { type: types.INCREMENT };
export const decrement = { type: types.DECREMENT };
export const addNum = { type: types.ADD_NUM };
export function setNum(new_num) {
  return { type: types.SET_NUM, num: new_num };
}
